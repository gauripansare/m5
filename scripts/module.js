﻿jQuery.fn.extend({
    k_enable: function () {
        return this.removeClass('disabled').attr("aria-disabled", "false").removeAttr("disabled");
    },
    k_disable: function () {
        this.addClass('disabled').attr("aria-disabled", "true").attr("disabled", "disabled");
        if (isIE11version) {
            if ($(this).attr("type") != undefined && $(this).attr("type") == "radio")
                return;
            $(this).removeAttr("disabled")
        }
        return;
    },
    link_k_disable: function() {
        return this.addClass('disabled').attr("aria-disabled","true");
    },
    k_IsDisabled: function () {
        if (this.hasClass('disabled')) { return true; } else { return false; }
    }

});

var _ModuleCommon = (function () {
    var reviewData = [];
    return {
        EnableNext: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            if (currentPageData.nextPageId != undefined && currentPageData.nextPageId != "") {
                $("#linknext").k_enable();
            }
        },
        DisableNext: function () {
            $("#linknext").k_disable();
        },
        GetPageReviewData: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            if (reviewData != undefined && reviewData.length > 0) {
                for (var i = 0; i < reviewData.length; i++) {
                    if (reviewData[i].pageId == currentPageData.pageId) {
                        return reviewData[i];
                    }
                }
            }

        },
        GetReviewData: function () {
            return reviewData;
        },
        SetReviewData: function (rData) {
            reviewData = rData;
        },
        GetPageDetailData: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = _PData[currentPageData.pageId];
            return pageData;
        },
        ShowFeedbackReviewMode: function (isLoaded) {
            var pageData = this.GetPageDetailData();
            var reviewData = this.GetPageReviewData();
            var fdkurl = "";
            if (pageData != undefined) {
                if (pageData.EmbedSettings != undefined) {
                    fdkurl = pageData.EmbedSettings.feedbackurl;
                } else if (pageData.DNDSettings != undefined) {
                    fdkurl = pageData.DNDSettings.feedbackurl;

                }
                else {
                    if (pageData.ImageHotSpots != undefined) {
                        for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                            if (pageData.ImageHotSpots.Hotspots[i].isCorrect == true) {
                                fdkurl = pageData.ImageHotSpots.Hotspots[i].feedbackurl;
                                break;
                            }
                        }
                    }
                }
                if (fdkurl != undefined) {
                    url = _Settings.dataRoot + "feedbackdata/" + fdkurl;
                    $("#div_feedback").show();
                    $("#div_feedback").css("display", "inline-block");
                    if (fdkurl != undefined) {
                        $("#div_feedback .div_fdkcontent").load(url, function () {
                            if (isLoaded !== true) {
                                //$('html,body').animate({ scrollTop: 0 }, 0, function () { });
                            }
                        });
                    }
                }
            }
        },
        DisplayInstructorReviewMode: function () {
            $(".reviewDiv").remove();
            var pageDetailData = this.GetPageDetailData();
            var currentPageData = _Navigator.GetCurrentPage();
            if (pageDetailData != undefined && pageDetailData.DNDSettings != undefined) {

                this.DisplayReviewModeForDnd();
            }
            if (pageDetailData != undefined && pageDetailData.EmbedSettings != undefined) {

                this.InstructorReviewModeForTextEntry();
            }
            else {
                var reviewData = this.GetPageReviewData();
                if (reviewData != undefined && reviewData.Positions != undefined && reviewData.Positions.length > 0) {
                    for (var i = 0; i < reviewData.Positions.length; i++) {
                        var posObj = reviewData.Positions[i];
                        var appendImage = $(".wrapperimage");
                        var ht = appendImage.height();

                        while ((posObj.posY + 40) > ht) {
                            posObj.posY = posObj.posY - 2;
                        }
                        var wt = appendImage.width();
                        if (wt < 796) {
                            wt = 796;
                        }
                        while ((posObj.posX + 40) > wt) {
                            posObj.posX = posObj.posX - 2;
                        }

                        if (posObj.isCorrect) {
                            var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                            appendImage.append(_div);


                        } else {
                            var _divI = "<div class='reviewDiv InCorrect' style='z-index:5;width:39px;height:35px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-incorrect.png' style='width:39px;height:35px;' /></div>";

                            appendImage.append(_divI);
                        }
                    }
                }
            }
            this.ShowFeedbackReviewMode(true);
            $(".divHotSpot").k_disable();
            $(".divHotSpotDbClick").k_disable();
        },
        InstructorReviewModeForTextEntry: function () {
            $(".EmbededElement").hide();
            var reviewData = this.GetPageReviewData();
            var pageDetailData = this.GetPageDetailData();
            if (reviewData != undefined && reviewData.textEntry != undefined && reviewData.textEntry.length > 0) {
                var p = "";
                for (i = 0; i < reviewData.textEntry.length; i++) {
                    if (reviewData.textEntry[i] != undefined && reviewData.textEntry[i] != "") {
                        var tEntry = reviewData.textEntry[i].trim();
                        tEntry = tEntry.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                            return letter.toUpperCase();
                        });
                        if (pageDetailData.EmbedSettings.validatearray.indexOf(tEntry) >= 0) {
                            if (reviewData.isCorrect && i == 0) {
                                $(".textentryreview1").html("<span class='OpenSansFont' style='color:" + ColorCodes.green + ";font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[i] + "</span>");
                                $(".textentryaccessibility").text("Correct folder name " + reviewData.textEntry[i]);
                            }
                            else {
                                $(".textentryreview2").html("<span class='OpenSansFont'  style='color:" + ColorCodes.green + ";font-weight:bold;font-size: 13px;padding-left:5px; '>" + reviewData.textEntry[i] + "</span>");
                                $(".textentryreview2").show();
                            }
                        }
                        else {
                            $(".textentryreview1").html("<span class='OpenSansFont'  style='color:" + ColorCodes.red + ";font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[i] + "</span>")
                        }
                    }
                    if (i == 1) {

                        $(".textentryaccessibility").text("Incorrect folder name entered " + reviewData.textEntry[i - 1] + " correct folder name is " + reviewData.textEntry[i]);

                    }

                }
                $(".textentryreview1").show();
                $(".textentryreview1").attr("aria-hidden","true");                
                $(".textentryreview2").attr("aria-hidden","true");
            }
        },
        DisplayUserReviewMode: function () {

            $(".reviewDiv").remove();
            var pageDetailData = this.GetPageDetailData();

            if (pageDetailData != undefined && pageDetailData.DNDSettings != undefined) {

                this.DisplayReviewModeForDnd();
            }
            if (pageDetailData != undefined && pageDetailData.EmbedSettings != undefined) {

                this.DisplayReviewModeForTextEntry();
            }

            else {
                var reviewData = this.GetPageReviewData();
                if (reviewData != undefined && reviewData.Positions != undefined && reviewData.Positions.length > 0) {
                    var posObj = reviewData.Positions[reviewData.Positions.length - 1];
                    var appendImage = $(".wrapperimage");
                    var ht = appendImage.height();
                    while ((posObj.posY + 40) > ht) {
                        posObj.posY = posObj.posY - 2;
                    }
                    if (posObj.isCorrect) {
                        var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                        appendImage.append(_div);


                    } else {
                        var _divI = "<div class='reviewDiv InCorrect' style='z-index:5;width:39px;height:35px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-incorrect.png' style='width:39px;height:35px;' /></div>";

                        appendImage.append(_divI);
                    }

                }
            }
            this.ShowFeedbackReviewMode(true);


        },
        GetReviewData: function () {
            return reviewData;
        },
        ButtonActivity: function () {

            $(".quizButton").k_disable();
            $("#linknext").k_disable();
            var buttonlink = [
                { btnId: "button1", nextPageId: "p3", imageId: "tick1", lastpageId: ["p8"] },
                { btnId: "button2", nextPageId: "p14", imageId: "tick2", lastpageId: ["p23"] },
                { btnId: "button3", nextPageId: "p33", imageId: "tick3", lastpageId: ["p39"] },
                { btnId: "button4", nextPageId: "p44", imageId: "tick4", lastpageId: ["p44"] },
                { btnId: "button5", nextPageId: "p9", imageId: "tick5", lastpageId: ["p13"] },
                { btnId: "button6", nextPageId: "p25", imageId: "tick6", lastpageId: ["p31", "p32"] },
                { btnId: "button7", nextPageId: "p40", imageId: "tick7", lastpageId: ["p43"] },
                { btnId: "button8", nextPageId: "p45", imageId: "tick8", lastpageId: ["p45"] },
            ]
            var counter = 0
            for (var i = 0; i < buttonlink.length; i++) {
                for (var j = 0; j < buttonlink[i].lastpageId.length; j++) {
                    if (_Navigator.Get()[buttonlink[i].lastpageId[j]].isAnswered != undefined && _Navigator.Get()[buttonlink[i].lastpageId[j]].isAnswered) {
                        $("#" + buttonlink[i].btnId + " div").addClass("moduleDone");
                        counter++;
                        break;
                    }

                }
            }

            if (counter >= 8) {
                $(".quizButton").k_enable();
                $("#linknext").k_enable();
                var currentPageData = _Navigator.GetCurrentPage();
                if (currentPageData.isAnswered == undefined || !currentPageData.isAnswered) {
                    this.DNDFeedback();
                }
                currentPageData.isAnswered = true;


            } else {
                $(".quizButton").k_disable();
                $("#linknext").k_disable();
            }

        },
        DNDFeedback: function () {
            var pageData = this.GetPageDetailData();
            var fdbkUrl = _Settings.dataRoot + "feedbackdata/" + pageData.DNDSettings.feedbackurl;
            $(".PSDdraggble").k_disable();

            _Navigator.SetPageStatus(true);            
            _Navigator.GetBookmarkData();
            $("#div_feedback").show();
            $("#div_feedback").css("display", "inline-block");
            $("#div_feedback .div_fdkcontent").load(fdbkUrl, function () {
                //$('html,body').animate({ scrollTop: document.body.scrollHeight }, 1000, function () { });
                $("#div_feedback  .div_fdkcontent p:first").attr("tabindex", "-1");
                if (isIOS) {
                    $("#div_feedback .div_fdkcontent p:first").attr("role", "text")
                }

                window.scrollTo(0, document.body.scrollHeight);

                $("#div_feedback .div_fdkcontent p:first").focus();

            });
            this.EnableNext();
        },
        DisplayReviewModeForTextEntry: function () {
            $(".EmbededElement").hide();
            var reviewData = this.GetPageReviewData();
            var pageDetailData = this.GetPageDetailData();
            if (reviewData != undefined && reviewData.textEntry != undefined && reviewData.textEntry.length > 0) {

                if (reviewData.textEntry[reviewData.textEntry.length - 1] != undefined && reviewData.textEntry[reviewData.textEntry.length - 1] != "") {
                    var tEntry = reviewData.textEntry[reviewData.textEntry.length - 1].trim().toLowerCase();
                    if (pageDetailData.EmbedSettings.validatearray.indexOf(tEntry) >= 0) {
                        $(".textentryreview1").html("<span class='OpenSansFont' style='color:green;font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[reviewData.textEntry.length - 1] + "</span>")
                    }

                }
                $(".textentryreview1").show();
            }
        },
        DisplayReviewModeForDnd: function () {

            $(".mspaint_image,.firefox_image").removeClass("PSDdraggble")
            $(".activityimg,.firefox_image,.mspaint_image,.windows_taskbar").hide();
            $(".dropimage").show();

        },
        OnContinue: function () {
            $('.divHotSpot').removeClass('hotspotclicked').k_enable()
            $(".divHotSpot").k_enable();

            $("#div_feedback .div_fdkcontent").html("");
            $("#div_feedback").hide();
            //$('html,body').animate({ scrollTop: document.body.scrollHeigh }, 500, function () { });
            if (isIOS) {
                //$(".pageheading").attr("role", "text");
            }
            $(".pageheading").attr("tabindex", "-1");
            window.scrollTo(0, document.body.scrollHeight)
            $(".pageheading").focus();
        },
        InitiateDNDelements: function () {
            if (_Navigator.IsAnswered()) {
                $(".activityimg,.firefox_image,.mspaint_image,#droppable").hide();
                $(".dropimage").show();
                return;
            }
            $('.dropimage').hide();
            $(".mspaint_image,.firefox_image").addClass("PSDdraggble")
            $(".mspaint_image").attr("dObjname", "ms paint image");
            $('.firefox_image').attr("dObjname", "Firefox browser image")
            $(".PSDdraggble").draggable({
                revert: "invalid",
                containment: '.wrapperimage',
                refreshPositions: true,
                cursor: 'move',
                drag: function (event, ui) {

                    $('#droppable').addClass('ui-state-highlight');
                },
                stop: function (event, ui) {
                    $('#droppable').removeClass('ui-state-highlight');


                }
            });


            $("#droppable").droppable({
                hoverClass: "ui-state-active",
                drop: function (event, ui) {

                    var targetElem = $(this).attr("id");
                    $(this).addClass("ui-state-highlight")
                    $(".activityimg,.firefox_image,.mspaint_image,#droppable").hide();
                    $(".dropimage").show();
                    _ModuleCommon.DNDFeedback();

                }
            });
        },
        AddHotspotClick: function (hotspotObj, event, isCorrect) {
            if (_Navigator.IsAnswered()) {
                return;
            }
            var imgObj = $(".activityimg");
            var posX = imgObj.offset().left;
            var posY = imgObj.offset().top;
            var found = false;

            var rposX;
            var rposY;
            if (event != undefined && event.pageX != undefined) {
                rposX = (event.pageX - posX);
                rposY = (event.pageY - posY);
            }
            if (rposX < 0 || rposY < 0) {//gp if module is attmpted using accessibility
                rposX = hotspotObj.position().left + 20;
                rposY = hotspotObj.position().top + 20;
            }
            var currentPageData = _Navigator.GetCurrentPage();
            var page = this.GetPageDetailData();
            if (page.EmbedSettings != undefined) {
                return;
            }
            for (var r = 0; r < reviewData.length; r++) {
                if (reviewData[r].pageId == currentPageData.pageId) {
                    var sameclick = false;
                    var posindex = 0;
                    if (reviewData[r].Positions != undefined) {
                        for (var i = 0; i < reviewData[r].Positions.length; i++) {
                            if (reviewData[r].Positions[i].posX == rposX && reviewData[r].Positions[i].posY == rposY) {
                                sameclick = true;
                                posindex = i;
                                break;
                            }
                        }
                        if (!sameclick) {
                            var position = { posX: rposX, posY: rposY, isCorrect: isCorrect };
                            if (reviewData[r].Positions.length < 3) {
                                reviewData[r].Positions.push(position);
                            }
                            else {
                                reviewData[r].Positions.splice(0, 1);
                                reviewData[r].Positions.push(position);
                            }
                        }
                        else {
                            if (reviewData[r].Positions[posindex].isCorrect == undefined || reviewData[r].Positions[posindex].isCorrect == false) {
                                reviewData[r].Positions[posindex].isCorrect = isCorrect;
                            }
                        }
                    }
                    else {
                        var position = { posX: rposX, posY: rposY, isCorrect: isCorrect };
                        reviewData[r].Positions = [position]
                    }

                    found = true;
                }
            }

            if (!found) {
                var _obj = {};
                _obj.pageId = currentPageData.pageId;
                var position = { posX: rposX, posY: rposY, isCorrect: isCorrect };
                _obj.Positions = [position]
                reviewData.push(_obj);

            }

        },
        AddEditPropertiesClick: function (event) {
            if (_Navigator.IsAnswered()) {
                return;
            }
            var pageDetailData = this.GetPageDetailData();
            if (pageDetailData.EmbedSettings != undefined)
                return;
            var imgObj = $(".activityimg");
            var posX = imgObj.offset().left;
            var posY = imgObj.offset().top;
            var found = false;

            var rposX = (event.pageX - posX);
            var rposY = (event.pageY - posY);
            if (isNaN(rposX) || isNaN(rposY))
                return;

            var currentPageData = _Navigator.GetCurrentPage();
            for (var r = 0; r < reviewData.length; r++) {
                if (reviewData[r].pageId == currentPageData.pageId) {
                    var sameclick = false;
                    if (reviewData[r].Positions != undefined) {
                        for (var i = 0; i < reviewData[r].Positions.length; i++) {
                            if (reviewData[r].Positions[i].posX == rposX && reviewData[r].Positions[i].posy == rposY) {
                                sameclick = true;
                                break;
                            }
                        }
                        if (!sameclick) {
                            var position = { posX: rposX, posY: rposY, isCorrect: false };
                            if (reviewData[r].Positions.length < 3) {
                                reviewData[r].Positions.push(position);
                            }
                            else {
                                reviewData[r].Positions.splice(0, 1);
                                reviewData[r].Positions.push(position);
                            }
                        }
                    }
                    else {
                        var position = { posX: rposX, posY: rposY, isCorrect: false };
                        reviewData[r].Positions = [position]
                    }

                    found = true;
                }
            }

            if (!found) {
                var _obj = {};
                _obj.pageId = currentPageData.pageId;
                var position = { posX: rposX, posY: rposY, isCorrect: false };
                _obj.Positions = [position]
                reviewData.push(_obj);
            }

        },
        OnPageLoad: function () {
            this.LoadHotSpot();
            this.ApplycontainerWidth();
            $("#div_feedback").hide();
            if (_Navigator.IsAnswered()) {
                this.DisplayInstructorReviewMode();
            }
            var _currentPageObject = _Navigator.GetCurrentPage();

            if (_currentPageObject.isDnd == true) {
                _ModuleCommon.InitiateDNDelements();
            }
            if (_currentPageObject.pageId == "p2") {
                _ModuleCommon.ButtonActivity();
            }
            if (_Navigator.IsPresenterMode() == true) {
                //$(".startbtn").k_disable();
                $("#linknext").k_enable();
                this.PresenterMode();
            }
        },
        LoadHotSpot: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = _PData[currentPageData.pageId];

            if (pageData != undefined) {
                var hotspotdata = pageData.ImageHotSpots;
                var htmlForDivHotspotImage = "";
                if (pageData.ImageHotSpots != undefined) {
                    for (var i = 0; i < hotspotdata.Hotspots.length; i++) {
                        var currImg = $("img")
                        var orw = currImg.width();
                        var orh = currImg.height();
                        var hsId = hotspotdata.Hotspots[i].HotspotId;
                        var pwdth = hotspotdata.Hotspots[i].width;
                        var phight = hotspotdata.Hotspots[i].height;
                        var pleft = hotspotdata.Hotspots[i].left;
                        var ptop = hotspotdata.Hotspots[i].top;
                        var accessText = hotspotdata.Hotspots[i].accessText;
                        if ((hotspotdata.Hotspots[i].left + "").indexOf("px") != -1) {
                            pleft = getPerc(Number(hotspotdata.Hotspots[i].left.replace("px", "").replace("%", "")), orw) + "%";
                            ptop = getPerc(Number(hotspotdata.Hotspots[i].top.replace("px", "").replace("%", "")), orh) + "%";
                        }
                        if (isIOS || Macbrowser || Macos || isSafari || isIpad || isIphone) {
                            htmlForDivHotspotImage += "<button type='button' hsId='" + hsId + "'  id='divHotspots" + i + "_" + hsId + "' class='divHotSpot' style=' width:" + pwdth + ";height:" + phight + ";left:" + pleft + ";top:" + ptop + ";' action='" + hotspotdata.Hotspots[i].action + "' role='button' aria-label='" + accessText + "'/>";
                        }
                        else {
                            htmlForDivHotspotImage += "<button type='button' hsId='" + hsId + "'  id='divHotspots" + i + "_" + hsId + "' class='" + hotspotdata.Hotspots[i].HotspotClass + "' style=' width:" + pwdth + ";height:" + phight + ";left:" + pleft + ";top:" + ptop + ";' action='" + hotspotdata.Hotspots[i].action + "' role='button' aria-label='" + accessText + "'/>";
                        }
                    }
                    $(".wrapperimage").append(htmlForDivHotspotImage)
                }
            }
        },
        PresenterMode: function () {
            /*
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = this.GetPageDetailData();
            var appendImage = $(".wrapperimage");
            if (pageData != undefined) {
                if ((currentPageData.pageId == "p18" || currentPageData.pageId == "p28") && pageData.EmbedSettings != undefined) {
                    $("input[type='text']").addClass("greenspan");
                    $("input[type='text']").val(pageData.EmbedSettings.validatearray[0]);
                    $("input[type='text']").k_disable();
                    $("input[type='text']").show();
                    //$(".textentryreview1").html("<span class='OpenSansFont' style='color:" + ColorCodes.green + ";font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[i] + "</span>");
                }
                else if (currentPageData.pageId == "p44"){
                    $(".Taskbar_img").remove();
                    var _img = "<img src='assets/images/correct-icon.png' alt='correct' class='Taskbar_img' />";
                    $(".wrapperimage").after().append(_img);
                }
                else if (currentPageData.pageId == "p45"){
                    $(".Dock_img").remove();
                    var _img = "<img src='assets/images/correct-icon.png' alt='correct' class='Dock_img' />";
                    $(".wrapperimage").after().append(_img);
                }
                else if (pageData.ImageHotSpots != undefined) {
                    for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                        var posObj = "";
                        var _div = ""
                        if (pageData.ImageHotSpots.Hotspots[i].isCorrect != undefined && pageData.ImageHotSpots.Hotspots[i].isCorrect) {
                            posObj = pageData.ImageHotSpots.Hotspots[i];
                            _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.left + ";top:" + posObj.top + ";'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                            $(".divHotSpot").addClass("hotspotclicked");
                            $(".divHotSpot").addClass("disabled");
                            appendImage.append(_div);
                        }
                    }
                }
            }
            //}            
            if (currentPageData.pageId != "p10") {
                _Navigator.SetPageStatus(true);
            }
            _Navigator.UpdateProgressBar();
            */
            $("#linknext").k_enable();
        },
        ApplycontainerWidth: function () {
            var innerWidth = $(window).width();
            $("#header-title img").attr("src", "assets/images/logo.png");
            if (innerWidth < 850) {
                if ($(".activityContainer").find(".activityimg").length > 0) {
                    var marginleft = $(".intro-content:first").css("margin-left");
                    marginleft = marginleft.substring(0, marginleft.indexOf("px"));
                    var imgcntwidth = innerWidth - (marginleft * 2);
                    $(".activity").css({ "width": imgcntwidth + "px" });
                }
                if (innerWidth <= 500) {
                    $("#header-title img").attr("src", "assets/images/pearson-logo-v1.png")
                }
            }
            else {
                $(".activity").css({ "width": "auto" })
            }
        },
        OrientationChange: function () {
            this.ApplycontainerWidth();
        },
        HotspotClick: function (_hotspot, event) {
            if (_Navigator.IsAnswered())
                return;
            var action = _hotspot.attr("action");
            var score = 0;
            var pageData = this.GetPageDetailData();
            nextPageId = "";
            var isCorrect = true;
            if (pageData.ImageHotSpots != undefined) {
                for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                    if (pageData.ImageHotSpots.Hotspots[i].HotspotId == _hotspot.attr("hsid")) {
                        nextPageId = pageData.ImageHotSpots.Hotspots[i].nextPageId;
                        if (pageData.ImageHotSpots.Hotspots[i].isCorrect != undefined) {
                            isCorrect = pageData.ImageHotSpots.Hotspots[i].isCorrect;
                        }
                    }
                }
            }
            this.AddHotspotClick(_hotspot, event, isCorrect);
            _Navigator.SetPageScore(score);
            var isUpdateProgress = true;
            switch (action) {
                case "next":
                    _Navigator.SetPageStatus(true, isUpdateProgress);
                    this.HotspotNext();
                    break;
                case "feedback":
                    if (isCorrect) {
                        _Navigator.SetPageStatus(true);
                        this.HotspotFeedback(_hotspot);
                    } else {
                        _Navigator.SetPageStatus(false);
                        this.HotspotFeedback(_hotspot);
                        this.DisableNext();
                        $('.divHotSpot').k_disable();
                    }
                default:
                    break;
            }
            _Navigator.GetBookmarkData();
        },
        SetFeedbackTop: function () {
            var ptop = Number($("#div_feedback").position().top);
            var pheight = Number($("#div_feedback").outerHeight());
            var pdiff = (_Settings.minHeight + _Settings.topMargin) - (ptop + pheight);
            if (pdiff > 0) {
                $("#div_feedback").css("margin-top", (pdiff + 35) + "px");
            }
        },
        InputFeedback: function () {
            var pageData = this.GetPageDetailData();
            var fdbkUrl = _Settings.dataRoot + "feedbackdata/" + pageData.EmbedSettings.feedbackurl;
            $("#div_feedback").show();
            $("#div_feedback").css("display", "inline-block");
            $("#div_feedback .div_fdkcontent").load(fdbkUrl, function () {
                //$('html,body').animate({ scrollTop: document.body.scrollHeight }, 1000, function () { });
                if (isIOS) {
                    $("#div_feedback p:first").attr("role", "text")
                }
                $("#div_feedback p:first").attr("tabindex", "-1")
                window.scrollTo(0, document.body.scrollHeight)
                $("#div_feedback p:first").focus();
            });
            $("input").k_disable();
            this.EnableNext();
        },
        HotspotFeedback: function (_hotspot) {
            $(".divHotSpot").k_disable();
            var pageData = this.GetPageDetailData();
            var url = "";
            if (pageData.ImageHotSpots != undefined) {
                for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                    if (pageData.ImageHotSpots.Hotspots[i].HotspotId == _hotspot.attr("hsid")) {
                        url = pageData.ImageHotSpots.Hotspots[i].feedbackurl;
                    }
                }
            }
            var fdbkUrl = _Settings.dataRoot + "feedbackdata/" + url;
            $("#div_feedback").show();
            $("#div_feedback").css("display", "inline-block");
            if (url != undefined) {
                $("#div_feedback .div_fdkcontent").load(fdbkUrl, function () {
                    //$('html,body').animate({ scrollTop: document.body.scrollHeight }, 1000, function () { });
                    if (isIOS) {
                        $("#div_feedback p:first").attr("role", "text")
                    }
                    $("#div_feedback p:first").attr("tabindex", "-1")
                    window.scrollTo(0, document.body.scrollHeight)
                    $("#div_feedback p:first").focus();
                });
            }
            var currentPageData = _Navigator.GetCurrentPage();
            if (currentPageData.pageId == "p43") {
                $(".activityimg").hide();
                $(".activityimgtwo").show();
            }
            this.EnableNext();
        },
        HotspotNext: function (pageid) {
            if (nextPageId != undefined && nextPageId != "") {
                _Navigator.LoadPage(nextPageId)
            }
            else {
                _Navigator.Next();
            }
        },
        InputNext: function () {
            _Navigator.Next();
        },
        InputEnter: function (inputtext) {
            if (_Navigator.IsAnswered())
                return;
            if ($.trim(inputtext.val()) != "") {
                var pageData = this.GetPageDetailData();
                var vtextarr = pageData.EmbedSettings.validatearray;
                var isVRequired = false;
                for (var i = 0; i < vtextarr.length; i++) {
                    if (($.trim(vtextarr[i])).toLowerCase() == ($.trim(inputtext.val())).toLowerCase()) {
                        isVRequired = true;
                        break;
                    }
                }
                var found = false;
                var str = $.trim(inputtext.val()).toLowerCase();
                var currentPageData = _Navigator.GetCurrentPage();
                if (reviewData != undefined && reviewData.length > 0) {
                    for (var i = 0; i < reviewData.length; i++) {
                        if (reviewData[i].pageId == currentPageData.pageId) {
                            if (reviewData[i].textEntry.length < 2) {
                                reviewData[i].textEntry.push(str);
                            } else {
                                reviewData[i].textEntry.splice(0, 1);
                                reviewData[i].textEntry.push(str);
                            }
                            found = true;
                        }
                    }
                }

                if (!found) {
                    var _obj = {};
                    _obj.pageId = currentPageData.pageId;
                    _obj.textEntry = [str];
                    _obj.isCorrect = true;
                    reviewData.push(_obj);
                }

            }
            if (isVRequired) {
                var score = pageData.EmbedSettings.score;
                _Navigator.SetPageScore(score)
                var action = pageData.EmbedSettings.action;
                _Navigator.SetPageStatus(true);
                switch (action) {
                    case "next":
                        this.InputNext();
                        break;
                    case "feedback":
                        this.InputFeedback();
                        break;
                    default:
                        break;
                }
            }
            else {
                $(".divHotSpot").removeClass("disabled");
                $(".divHotSpot").removeClass("hotspotclicked");
                $(".divHotSpot").k_enable();
            }
            _Navigator.GetBookmarkData();
        },
        ShowCorrectIncorrectCheckItems: function (checklistid) {

            $("input[type='checkbox']:checked").each(function () {
                var iscorrect = $(this).attr("iscorrect");
                if (iscorrect == undefined) iscorrect = "Incorrect";
                var arialabel = $("#" + $(this).attr("id") + "_span").html();
                if (iscorrect == "Correct") {
                    $(this).before("<div class='cchkitem' ></div>");
                    $(this).attr("aria-label", " correct option selected " + arialabel);
                    $("label[for='" + $(this).attr("id") + "']").attr("aria-hidden", "true");
                }
                else {
                    $(this).before("<div class='icchkitem'></div>");
                    $(this).attr("aria-label", " incorrect option selected " + arialabel);
                    $("label[for='" + $(this).attr("id") + "']").attr("aria-hidden", "true");
                }
            })

            this.SetCorrectIncorrectItemStyle(checklistid)
            //$(".cchkitem").next().hide().attr("aria-hidden","true");
            //$(".icchkitem").next().hide().attr("aria-hidden","true");
        },
        SetCorrectIncorrectItemStyle: function (checklistid) {
            var selector = ".k-element-checklist";
            if (checklistid != undefined && checklistid != "")
                selector = checklistid = "#" + checklistid.replace("#", "");

            $("input[type='checkbox']").each(function () {
                var iscorrect = $(this).attr("iscorrect");
                if (iscorrect == undefined) iscorrect = "Incorrect";
                if (iscorrect == "Correct") {
                    //$("label[for='"+$(this).attr("id")+"']").css({ "font-weight": "bold" });

                }
                else {
                    $("label[for='" + $(this).attr("id") + "']").css({ "font-weight": "normal", "color": "#999999" });

                }
            });
        },
        AppendFooter: function () {           
                $("#header-progress .presentationModeFooter").show();             
                
                $("footer").show();
                $("#linknext").k_enable();           
            
        },
        AppendScormReviewFooter: function () {
            $(".presentationModeFooter").html('Review Mode');
            $("#header-progress .presentationModeFooter").show();           
                
                $("footer").show();
                $("#linknext").k_enable();   
            /*
            if ($(".ScormReviewFooter").length == 0) {
                var str = '<div class="ScormReviewFooter"> Review Mode</div>';
                $("footer").append($(str));
                $("footer").show();
                $("#linknext").k_enable();
            }*/
        },
    }
})();
function AppendFooter() {
    if ($(".levelfooterdiv").length == 0) {
        var str = '<div class="levelfooterdiv"><div class="navBtn prev" onClick="GoToPrev()" role="button" tabindex = 195 aria-label="Previous"><a href="#"></a></div><div style="display: inline-block;width: 2px;"></div><div class="boxleveldropdown" style="width: 150px;"  role="button" tabindex = 196 aria-label="Scorecard"><span class="leftarrow"></span><ul class="levelmenu"><li class="uparrow" style = "width: 100px; margin-left: -8px;"><span class="menutitle" >Scorecard</span><div class="levelsubMenu" tabindex = 197 role="text">Total Score - <br>Activity Score - </div><a class="menuArrow"></a></div><div style="display: inline-block;width: 2px;"></div><div class="navBtn next" onClick="GoToNext()" role="button" tabindex = 198 aria-label="Next"><a href="#"></a></div></div>';
        $("#wrapper").append($(str));
        $(".navBtn.prev").css({
            "opacity": ".5",
            "pointer-events": "none"
        });
        $(".navBtn.prev").attr("aria-disabled", "true")
    }
}

function DisplaySubmenu() {
    if ($(".levelsubMenu").is(":visible")) {
        $(".levelsubMenu").hide();
        $('.rightarrow').removeClass('fa-chevron-up').addClass('fa-chevron-right');
    } else {
        $(".levelsubMenu").show();
        $('.rightarrow').removeClass('fa-chevron-right').addClass('fa-chevron-up');
    }
}
var mTreeObj = {
    Goto: function (pageid) {
        _Navigator.LoadPage(pageid);
    },
    GoToPrev: function () {

        try {
            if ($(".navBtn.prev").css("pointer-events") == "none") {
                return;
            }
            else {
                _Navigator.Prev();
                if (_Navigator.GetCurrentPage().nextPageId != undefined && _Navigator.GetCurrentPage().nextPageId != "") {
                    enableobj($(".navBtn.next"));
                } else {
                    disableobj($(".navBtn.next"));
                }
                if (_Navigator.GetCurrentPage().PrevPageId != undefined && _Navigator.GetCurrentPage().PrevPageId != "") {
                    enableobj($(".navBtn.prev"));
                } else {
                    disableobj($(".navBtn.prev"));
                }
            }
        } catch (expn) {
            alert(expn.message);
        }
    },
    GoToNext: function () {
        try {

            if ($(".navBtn.next").css("pointer-events") == "none") {
                return;
            }
            else {
                _Navigator.Next();
                if (_Navigator.GetCurrentPage().nextPageId != undefined && _Navigator.GetCurrentPage().nextPageId != "") {
                    enableobj($(".navBtn.next"));
                } else {
                    disableobj($(".navBtn.next"));
                }
                if (_Navigator.GetCurrentPage().prevPageId != undefined && _Navigator.GetCurrentPage().prevPageId != "") {
                    enableobj($(".navBtn.prev"));
                } else {
                    disableobj($(".navBtn.prev"));
                }
            }
        } catch (expn) {
            alert(expn.message);
        }
    }
};
function disableobj(obj) {
    obj.css({
        "opacity": ".5",
        "pointer-events": "none"
    });
    obj.attr("aria-disabled", "true");
}
function enableobj(obj) {
    obj.css({
        "opacity": "1",
        "pointer-events": ""
    });
    obj.attr("aria-disabled", "false");
}

$.knowdlCountDown = function (options) {
    var timer,
        instance = this,
        seconds = options.seconds || 30,
        updateStatus = options.onUpdateStatus || function () { },
        counterEnd = options.onCounterEnd || function () { };

    function decrementCounter() {
        updateStatus(seconds);
        if (seconds === 0) {
            counterEnd();
            instance.stop();
        }
        seconds--;
    }

    this.start = function () {
        clearInterval(timer);
        timer = 0;
        seconds = options.seconds;
        timer = setInterval(decrementCounter, 1000);
    };

    this.stop = function () {
        clearInterval(timer);
        onCounterEnd();
    };
    function onCounterEnd() {
        if ($("#counterdiv").text() == "00:00") {

            var _hotspot = $(".divHotSpot");
            var pageData = _ModuleCommon.GetPageDetailData();
            if (pageData.ImageHotSpots != undefined) {
                for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                    if (pageData.ImageHotSpots.Hotspots[i].HotspotId == _hotspot.attr("hsid")) {
                        pageData.ImageHotSpots.Hotspots[i].isIncorrect = true;
                    }
                }
            }
            _Navigator.SetPageStatus(false);
            _ModuleCommon.HotspotFeedback(_hotspot);
        }
    }

    return instance;

}

$(document).ready(function () {

    _Navigator.Initialize();
    $('body').attr({ "id": "thebody", "onmousedown": "document.getElementById('thebody').classList.add('no-focus');", "onkeydown": "document.getElementById('thebody').classList.remove('no-focus');" })
});
