var hotspotclicked = false;;
var hotspot;
var touchend = false;
var touchend1 = false;

$(document).on("click", ".qheight", function (event) {
    $(".qheight").removeClass("optionselected");

    $(this).addClass("optionselected");

});
var hotspotclicked = false;;
var hotspot;
$(document).on("click", ".divHotSpot", function (event) {
    if ($(this).k_IsDisabled()) return;
    event.preventDefault();
    $(this).k_disable()
    if (hotspotclicked || _Navigator.IsAnswered())
        return;
    hotspotclicked = true;
    $(this).addClass("hotspotclicked")
    hotspot = $(this);
    setTimeout(function () {
        hotspotclicked = false;
        _ModuleCommon.HotspotClick(hotspot, event);
    }, 400)

});
$(document).on("dblclick touchend", ".divHotSpotDbClick", function (event) {
    if ($(this).k_IsDisabled()) return;
    event.preventDefault();
    $(this).k_disable()
    if (hotspotclicked || _Navigator.IsAnswered())
        return;
    hotspotclicked = true;
    $(this).addClass("hotspotclicked")
    hotspot = $(this);
    setTimeout(function () {
        hotspotclicked = false;
        _ModuleCommon.HotspotClick(hotspot, event);

    }, 400)

});
$(document).on("keydown", ".divHotSpotDbClick", function (event) {
    if ($(this).k_IsDisabled()) return;
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        $(this).trigger("dblclick");
    }
});

$(document).on("click", "#linkprevious", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Prev();
});
$(document).on("click", "#linknext", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});
$(document).on("click", ".hintdoc", function (event) {
    if ($(this).k_IsDisabled()) return;
    if ($(this).hasClass("hintdoc")) {
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded")
            $(".hintcontainerdoc").hide();

            open = "close";
        }
        else {
            $(this).addClass("expanded")
            $(".hintcontainerdoc").show();

        }
    }
    if (touchend1) {
        $(this).mouseout();
        touchend1 = false;
    }
    event.preventDefault();
    return;
});


$(document).on("click", ".hintlink", function (event) {
    if ($(this).k_IsDisabled()) return;
    var open = "open;"
    if ($(this).hasClass("expanded")) {
        $(this).removeClass("expanded")
        $(this).attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
        $(".pageheading").focus();
        open = "close";
    }
    else {
        $(this).addClass("expanded");
        $(this).attr("aria-expanded", "true");
        $(".hintcontainer").slideDown(100, function () {

            $(".hintcontainer .hintcontent").find("p:first").attr("tabindex", "-1")
            if (isIOS) {
                $(".hintcontainer .hintcontent").find("p:first").attr("role", "text")
            }
            $(".hintcontainer .hintcontent").find("p:first").focus();
        });
    }
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint " + open)
    }
    if (touchend) {
        $(this).mouseout();
        touchend = false;
    }

});

$(document).on("click", ".closehintdoc", function (event) {
    if ($(this).k_IsDisabled()) return;
    $(".hintdoc").removeClass("expanded")
    $(".hintcontainerdoc").hide();

    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint closed")
    }
    event.preventDefault();
    return;

});
$(document).on("click", ".closehintlink", function (event) {
    if ($(this).k_IsDisabled()) return;
    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100, function () { $("h2.pageheading").focus(); });
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint closed")
    }

});
$(document).on("keydown", "input.EmbededElement", function (event) {
    if ($(this).k_IsDisabled()) return;
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        _ModuleCommon.InputEnter($(this));
    }
});

$(window).resize(function () {
    _ModuleCommon.OrientationChange();
});
$(document).on('click', ".activityimg", function (event) {
    if ($(".divHotSpot").hasClass("disabled") || $(".divHotSpot").length == 0)
        return;
    _ModuleCommon.AddEditPropertiesClick(event);
});


$(document).on('click', ".startbtn", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
    $(this).k_disable();
});
$(document).on('click', ".reviewsubmit", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});
$(document).on('touchstart', ".hintlink", function (event) {
    mouseenter($(this));
    touchend = false;
});
var touchend = false;
$(document).on('touchend ', ".hintlink", function (event) {
    mouseleave($(this));
    touchend = true;
});

$(document).on('touchstart', ".hintdoc", function (event) {
    mouseenter($(this));
    touchend1 = false;
});

$(document).on('touchend ', ".hintdoc", function (event) {
    mouseleave($(this));
    touchend1 = true;
});


$(document).on('mouseenter', ".hintlink", function (event) {
    mouseenter($(this));
});

$(document).on('mouseleave', ".hintlink", function (event) {
    mouseleave($(this));
});

$(document).on('mouseenter', ".hintdoc", function (event) {
    mouseenter($(this));
});

$(document).on('mouseleave', ".hintdoc", function (event) {
    mouseleave($(this));
});
function mouseenter(_ths) {
    _ths.find(".hintlinkspan").css({ "color": "#b22222", "border-bottom": "1px solid #b22222" })
    _ths.find("path").css({ "fill": "#b22222" })
}
function mouseleave(_ths) {
    _ths.find(".hintlinkspan").css({ "color": "#047a9c", "border-bottom": "1px solid #047a9c" })
    _ths.find("path").css({ "fill": "#047a9c" })
}
$(document).on("click", ".quizButton", function (event) {
    _Navigator.LoadPage("p46")
});

$(document).on("change", ".assessmentradio", function (event) {
    if ($(this).k_IsDisabled()) return;
    if ($(this).hasClass("disabled"))
        return;
    $(".assessmentSubmit").k_enable();

});
$(document).on("click", ".assessmentSubmit", function (event) {
    if ($(this).k_IsDisabled()) return;
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnSubmit();
    }
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id");
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.GetBookmarkData();
    _Navigator.Next();
});
$(document).on('click', "#continuebtn", function (event) {
    _ModuleCommon.OnContinue();
});
$(document).on("keydown", ".buttonlink", function (event) {
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
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
        var btnId = $(this).attr("id");
        var nextPageId = "";
        if (btnId != undefined) {
            for (var i = 0; i < buttonlink.length; i++) {
                if (buttonlink[i].btnId == btnId) {
                    nextPageId = buttonlink[i].nextPageId;
    
                    break;
                }
            }
            if (nextPageId != "" && nextPageId != undefined) {
                // _Navigator.Next(); 
                _Navigator.LoadPage(nextPageId);
            }
        }
    }
});
$(document).on('click', ".buttonlink", function (event) {
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
    var btnId = $(this).attr("id");
    var nextPageId = "";
    if (btnId != undefined) {
        for (var i = 0; i < buttonlink.length; i++) {
            if (buttonlink[i].btnId == btnId) {
                nextPageId = buttonlink[i].nextPageId;

                break;
            }
        }
        if (nextPageId != "" && nextPageId != undefined) {
            // _Navigator.Next(); 
            _Navigator.LoadPage(nextPageId);
        }
    }
});

$(document).on('click', ".inputcircle", function (event) {
    $(this).next(".inpputtext").trigger("click");
});

window.onload = function () {
    _ScormUtility.Init();
}

window.onunload = function () {
    _ScormUtility.End();
}

window.addEventListener("scroll", function () {

    var currPage = _Navigator.GetCurrentPage();
    if (currPage.pageId == "p1")
        return;
    var target = $(".header-content-dock");

    if (window.pageYOffset > $("#header-content").height() - 10) {
        var width = $("#wrapper").width();
        target.css({ "visibility": "visible", "top": "0px", "width": width + "px" })
    }
    else if (window.pageYOffset < $("#header-content").height() - 10) {
        target.css({ "visibility": "hidden", "top": "-80px" })
        $(".hintcontainerdoc").hide();
        $(".hintdoc").removeClass("expanded")
        $(".header-content-dock").find(".presentationModeFooter").hide();

    }
    if (_Navigator.GetCurrentPage().pageId == _Navigator.GetQuizPageId() || currPage.hinturl == undefined || currPage.hinturl == "") {
        $(".hintdoc").parent().hide();
    }
    else {
        $(".hintdoc").parent().show();
    }
    if(_Navigator.IsPresenterMode() || _Navigator.IsReviewMode())
    {
        $(".header-content-dock").find(".presentationModeFooter").show();
        $(".header-content-dock .intro-content").css({"margin-top":"30px"})
    }



}, false);


$(document).on("mouseup", ".dragdiv", function (event) {
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        $(this).trigger("click")
    }

});
$(document).on("click", ".dragdiv", function (event) {

    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        $(".droppable1").css({
            "border": "none"
        });
        event.preventDefault();
        return;
    } else {
        if ($('.selected').length > 0) {
            $('.selected').removeClass('selected').css("border", "none");
        }
        $(this).css("border", "cornflowerblue solid 2px");
        $(this).addClass("selected");

        $(this).attr({ "aria-pressed": "true" })
        // $('.droppable1 ').attr({ "aria-dropeffect": "move" })
        $(".droppable1").css("border", "cornflowerblue solid 2px");
    }
});
$(document).on("mousedown", ".droppable1", function (event) {
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        $(this).trigger("click")
    }

});

$(document).on("click touchstart", ".droppable1", function (event) {
    if ($('.selected').length == 0)
        return;
    var pagedata = _Navigator.GetCurrentPage();
    $('.selected').addClass("dropped");
    var draggable = $('.selected');
   
  //  $(this).addClass("ui-state-highlight")
  if(!isIphone){
  if (isIOS) {
    $(".assertivespan").attr("role","alert");
  }
  if(pagedata.pageId == "p44"){
    $(".assertivespan").text("Ms Paint pinned to taskbar")
  }
  else{
    $(".assertivespan").text("Firefox added to dock")
  }
}
  $(".activityimg,.firefox_image,.mspaint_image,#droppable").hide();
    $(".dropimage").show();
    setTimeout(function(){
        _ModuleCommon.DNDFeedback();
    },10 )
    
});
$(document).on('click', ".retry_modulebtn", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.SetBookMarkRetrycnt();    
    _Navigator.GetBookmarkData();
    location.reload();
    $(this).k_disable();
});