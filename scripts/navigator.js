//This api will contain navigation logic and page load.
//It will also handle the question navigation if the page is having multiple questions.
var _Navigator = (function () {
    var packageType = "presenter";//presenter/scorm/revel
    var isReviewMode = false;
    var _currentPageId = "";
    var _currentPageObject = {};
    var progressLevels = [47];//ATUL: three pages add, after visit p15,p32,p41
    var totalsimscore = 18;
    //var presentermode = false;
    var bookmarkpageid = "";
    var retrycnt = 1;
    var quizpageid = "p46";
    var _NData = {
        "p1": {
            pageId: "p1",
            prevPageId: "",
            nextPageId: "p2",
            dataurl: "p1.htm",
            isStartPage: true,
            isAnswered: true,
        },
        "p2": {
            pageId: "p2",
            prevPageId: "p1",
            nextPageId: "p46",
            dataurl: "p2.htm",
            hasActivity: true,
        },
        "p3": {
            pageId: "p3",
            prevPageId: "p2",
            nextPageId: "p4",
            dataurl: "p3.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "Windows 10 Desktop with File Explorer window open"
        },
        "p4": {
            pageId: "p4",
            prevPageId: "p3",
            nextPageId: "p5",
            dataurl: "p4.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "Windows 10 Desktop with File Explorer window open"
        },
        "p5": {
            pageId: "p5",
            prevPageId: "p4",
            nextPageId: "p6",
            dataurl: "p5.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "Windows 10 Desktop with File Explorer window open"
        },
        "p6": {
            pageId: "p6",
            prevPageId: "p5",
            nextPageId: "p7",
            dataurl: "p6.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "Windows 10 Desktop with File Explorer window open"
        },
        "p7": {
            pageId: "p7",
            prevPageId: "p6",
            nextPageId: "p8",
            dataurl: "p7.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "Windows 10 Desktop with File Explorer window open"
        },
        "p8": {
            pageId: "p8",
            prevPageId: "p7",
            nextPageId: "p2",
            dataurl: "p8.htm",
            // hinturl: "",
            hasActivity: true,
            isFinish: "level1",
            accessText: "Windows 10 Desktop with File Explorer window open"
        },
        "p9": {
            pageId: "p9",
            prevPageId: "p2",
            nextPageId: "p10",
            dataurl: "p9.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p10": {
            pageId: "p10",
            prevPageId: "p9",
            nextPageId: "p11",
            dataurl: "p10.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p11": {
            pageId: "p11",
            prevPageId: "p10",
            nextPageId: "p12",
            dataurl: "p11.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p12": {
            pageId: "p12",
            prevPageId: "p11",
            nextPageId: "p13",
            dataurl: "p12.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p13": {
            pageId: "p13",
            prevPageId: "p12",
            nextPageId: "p2",
            dataurl: "p13.htm",
            // hinturl: "",
            hasActivity: true,
            isFinish: "level2",
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p14": {
            pageId: "p14",
            prevPageId: "p2",
            nextPageId: "p16",
            dataurl: "p14.htm",
            hinturl: "hintp14.htm",
            hasActivity: true,
            accessText: "Windows Desktop"
        },
        "p15": {
            pageId: "p15",
            prevPageId: "p14",
            nextPageId: "p16",
            dataurl: "p15.htm",
            hinturl: "hintp15.htm",
            hasActivity: true,
            accessText: "Windows Desktop with Start Window open"
        },
        "p16": {
            pageId: "p16",
            prevPageId: "p14",
            nextPageId: "p17",
            dataurl: "p16.htm",
            hinturl: "hintp16.htm",
            hasActivity: true,
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p17": {
            pageId: "p17",
            prevPageId: "p16",
            nextPageId: "p18",
            dataurl: "p17.htm",
            hinturl: "hintp17.htm",
            hasActivity: true,
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p18": {
            pageId: "p18",
            prevPageId: "p17",
            nextPageId: "p19",
            dataurl: "p18.htm",
            hinturl: "hintp18.htm",
            hasActivity: true,
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p19": {
            pageId: "p19",
            prevPageId: "p18",
            nextPageId: "p20",
            dataurl: "p19.htm",
            hinturl: "hintp19.htm",
            hasActivity: true,
            accessText: ""
        },
        "p20": {
            pageId: "p20",
            prevPageId: "p19",
            nextPageId: "p21",
            dataurl: "p20.htm",
            hinturl: "hintp20.htm",
            hasActivity: true,
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p21": {
            pageId: "p21",
            prevPageId: "p20",
            nextPageId: "p22",
            dataurl: "p21.htm",
            hinturl: "hintp21.htm",
            hasActivity: true,
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p22": {
            pageId: "p22",
            prevPageId: "p21",
            nextPageId: "p23",
            dataurl: "p22.htm",
            hinturl: "hintp22.htm",
            hasActivity: true,
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p23": {
            pageId: "p23",
            prevPageId: "p22",
            nextPageId: "p2",
            dataurl: "p23.htm",
            hinturl: "hintp23.htm",
            hasActivity: true,
            isFinish: "level3",
            accessText: "Windows Desktop with File Explore Window open"
        },
        "p25": {
            pageId: "p25",
            prevPageId: "p2",
            nextPageId: "p26",
            dataurl: "p25.htm",
            hinturl: "hintp25.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop"
        },
        "p25Next": {
            pageId: "p25Next",
            prevPageId: "p25",
            nextPageId: "p26",
            dataurl: "p25Next.htm",
            hinturl: "hintp25Next.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with File menu open"
        },
        "p26": {
            pageId: "p26",
            prevPageId: "p25",
            nextPageId: "p27",
            dataurl: "p26.htm",
            hinturl: "hintp26.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop"
        },
        "p27": {
            pageId: "p27",
            prevPageId: "p26",
            nextPageId: "p28",
            dataurl: "p27.htm",
            hinturl: "hintp27.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with File menu open"
        },
        "p28": {
            pageId: "p28",
            prevPageId: "p27",
            nextPageId: "p29",
            dataurl: "p28.htm",
            hinturl: "hintp28.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p29": {
            pageId: "p29",
            prevPageId: "p28",
            nextPageId: "p30",
            dataurl: "p29.htm",
            hinturl: "hintp29.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p30": {
            pageId: "p30",
            prevPageId: "p29",
            nextPageId: "p31",
            dataurl: "p30.htm",
            hinturl: "hintp30.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p31": {
            pageId: "p31",
            prevPageId: "p30",
            nextPageId: "p2",
            dataurl: "p31.htm",
            hinturl: "hintp31.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p32": {
            pageId: "p32",
            prevPageId: "p31",
            nextPageId: "p2",
            dataurl: "p32.htm",
            hinturl: "hintp32.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p33": {
            pageId: "p33",
            prevPageId: "p2",
            nextPageId: "p34",
            dataurl: "p33.htm",
            hinturl: "hintp33.htm",
            hasActivity: true,
            accessText: "Windows 10 Desktop"
        },
        "p34": {
            pageId: "p34",
            prevPageId: "p33",
            nextPageId: "p35",
            dataurl: "p34.htm",
            hinturl: "hintp34.htm",
            hasActivity: true,
            accessText: "Windows 10 Desktop with Start Window open"
        },
        "p35": {
            pageId: "p35",
            prevPageId: "p34",
            nextPageId: "p36",
            dataurl: "p35.htm",
            hinturl: "hintp35.htm",
            hasActivity: true,
            accessText: "Windows 10 Desktop with Settings window"
        },
        "p36": {
            pageId: "p36",
            prevPageId: "p35",
            nextPageId: "p37",
            dataurl: "p36.htm",
            hinturl: "hintp36.htm",
            hasActivity: true,
            accessText: "Windows 10 Desktop with Personalization window open"
        },
        "p37": {
            pageId: "p37",
            prevPageId: "p36",
            nextPageId: "p38",
            dataurl: "p37.htm",
            hinturl: "hintp37.htm",
            hasActivity: true,
            accessText: "Windows 10 Desktop with Personalization window open"
        },
        "p38": {
            pageId: "p38",
            prevPageId: "p37",
            nextPageId: "p39",
            dataurl: "p38.htm",
            hinturl: "hintp38.htm",
            hasActivity: true,
            accessText: "Windows 10 Desktop with personalization window open"
        },
        "p39": {
            pageId: "p39",
            prevPageId: "p38",
            nextPageId: "p2",
            dataurl: "p39.htm",
            hinturl: "hintp39.htm",
            hasActivity: true,
            isFinish: "level5",
            accessText: "Windows 10 Desktop with Personalization window open"
        },
        "p40": {
            pageId: "p40",
            prevPageId: "p2",
            nextPageId: "p42",
            dataurl: "p40.htm",
            hinturl: "hintp40.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop"
        },
        "p41": {
            pageId: "p41",
            prevPageId: "p40",
            nextPageId: "p42",
            dataurl: "p41.htm",
            hinturl: "hintp41.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with Apple menu open"
        },
        "p42": {
            pageId: "p42",
            prevPageId: "p40",
            nextPageId: "p42Next",
            dataurl: "p42.htm",
            hinturl: "hintp42.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with System Preferences Window open"
        },
        "p42Next": {
            pageId: "p42Next",
            prevPageId: "p42",
            nextPageId: "p43",
            dataurl: "p42Next.htm",
            hinturl: "hintp42Next.htm",
            hasActivity: true,
            accessText: "macOS Mojave Desktop with System Preferences Window open"
        },
        "p43": {
            pageId: "p43",
            prevPageId: "p42Next",
            nextPageId: "p2",
            dataurl: "p43.htm",
            hinturl: "hintp43.htm",
            hasActivity: true,
            isFinish: "level6",
            accessText: "macOS Mojave Desktop with Desktop and Screen Saver window open"
        },
        "p44": {
            pageId: "p44",
            prevPageId: "p2",
            nextPageId: "p2",
            dataurl: "p44.htm",
            hinturl: "hintp44.htm",
            hasActivity: true,
            isDnd: true,
            accessText: "Windows 10 Desktop"
        },
        "p45": {
            pageId: "p45",
            prevPageId: "p2",
            nextPageId: "p2",
            dataurl: "p45.htm",
            hinturl: "hintp45.htm",
            hasActivity: true,
            isDnd: true,
            accessText: "macOS Mojave Desktop with Finder Window open"
        },
        "p46": {
            pageId: "p46",
            lastPageId: "p46",
            prevPageId: "p2",
            nextPageId: "",
            dataurl: "p46.htm",
            hasActivity: true,
            isLastPage: true,
            isAssessment: true,
            hideHint: true,
        }
    }
    var _StateData = {}

    function OnPageLoad() {
        $("h2.pageheading").attr("tabindex", "-1");
        $(".hintcontainer").hide()
        $(".header-content-dock").css({ "visibility": "hidden" });
        $(".hintcontainer").hide()
        $(".hintlink").removeClass("expanded");
        $(".hintlink").attr("aria-expanded", "false")
        $("#header-title h1").show()
        $("#header-title").removeClass("startpage");
        if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
            $("#header-title h1").hide()
            $("#header-title").addClass("startpage");
        }
        _ModuleCommon.OnPageLoad();

        if (_Navigator.IsPresenterMode()) {
            _ModuleCommon.AppendFooter();
        }
        if (_Navigator.IsReviewMode()) {
            $("#linknext").k_enable();
            $(".start-btn").k_disable();
        }
        submitCounter = 0;
        if ((/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))) {
            $('#footer-navigation').css('display', 'table');
        }
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            $(".group-wrapper img").attr("aria-hidden", "true");
        }
        if (_currentPageObject.accessText != undefined) {
            $(".activityimg").attr("alt", _currentPageObject.accessText);
        }
        if ((navigator.userAgent.match(/iPhone/i)) && (_currentPageObject.pageId == "p44" || _currentPageObject.pageId == "p45")) {
            $(".droppable1").attr("role", "button");
        }
    }
    return {
        Get: function () {
            return _NData;
        },
        Start: function () {
            this.LoadPage("p1");
            if (this.IsPresenterMode()) {
                _ModuleCommon.AppendFooter();
            }

            if (this.IsReviewMode()) {
                _ModuleCommon.AppendScormReviewFooter();
                _Assessment.SetCurrentQuestionIndex(0);
            }
        },

        LoadPage: function (pageId, jsonObj) {
            $(".hintcontainer").hide();
            $(".header-content-dock").css({ "visibility": "hidden" });
            if (_Navigator.IsRevel() && _currentPageId != undefined && _currentPageId != "") {
                LifeCycleEvents.OnUnloadFromPlayer()
            }
            bookmarkpageid = pageId;
            if (jsonObj == undefined) {
                jsonObj = {};
            }

            bookmarkpageid = pageId;
            _currentPageId = pageId;
            this.UpdateProgressBar();
            _currentPageObject = _NData[_currentPageId]
            if (_currentPageId == "p15" && (_currentPageObject.isVisited == undefined || !_currentPageObject.isVisited && (_currentPageObject.isLoaded == undefined || !_currentPageObject.isLoaded))) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p14"].nextPageId = "p15";
                _NData["p16"].prevPageId = "p15";
            }
            if (_currentPageId == "p32" && (_currentPageObject.isVisited == undefined || !_currentPageObject.isVisited) && (_currentPageObject.isLoaded == undefined || !_currentPageObject.isLoaded)) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p31"].nextPageId = "p32";
                _NData["p33"].prevPageId = "p32";
            }
            if (_currentPageId == "p41" && (_currentPageObject.isVisited == undefined || !_currentPageObject.isVisited) && (_currentPageObject.isLoaded == undefined || !_currentPageObject.isLoaded)) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p40"].nextPageId = "p41";
                _NData["p42"].prevPageId = "p41";
            }
            if (_currentPageId == "p25Next" && (_currentPageObject.isVisited == undefined || !_currentPageObject.isVisited) && (_currentPageObject.isLoaded == undefined || !_currentPageObject.isLoaded)) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p25"].nextPageId = "p25Next";
                _NData["p26"].prevPageId = "p25Next";
            }
            $("#header-progress").show();
            $("#header-title").show();
            $("footer").show();

            if (_currentPageObject.hasActivity == undefined || _currentPageObject.hasActivity == false) {
                this.SetPageStatus(true);
            }

            $('html,body').css({ scrollTop: 0 })
            if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
                $("#linkprevious").k_disable();
                $("#linknext").k_enable();
                $("footer").hide();
                $("#header-progress").hide();
                if (this.IsReviewMode()) {
                    _ModuleCommon.AppendScormReviewFooter();
                    _Assessment.SetCurrentQuestionIndex(0)
                }
                if (this.IsPresenterMode())
                    _ModuleCommon.AppendFooter();

            }
            if (_currentPageObject.hasActivity != undefined && _currentPageObject.hasActivity && !this.IsAnswered()) {
                $("#linknext").k_disable();
                $('#submitbtn').k_disable();
            }

            if (this.IsAnswered()) {
                $("#linknext").k_enable();

            }
            if (_currentPageObject.isLastPage != undefined && _currentPageObject.isLastPage) {
                $("#linknext").k_disable();
            }


            _currentPageObject.isVisited = true;
            var pageUrl = _Settings.dataRoot + _currentPageObject.dataurl + _Caching.GetUrlExtension();
            if (_currentPageObject.pageId == "p2") { // temporary fix
                $("#progressdiv").css("margin-left", "-20px")
            }
            else {
                $("#progressdiv").css("margin-left", "-15px")
            }
            if (_currentPageObject.isStartPage) {
                $(".main-content").load(pageUrl, function () {
                    OnPageLoad();
                    //setReader("header1");
                    $("#header1").focus();
                });
            } else {
                $(".main-content").fadeTo(250, 0.25, function () {
                    $(".main-content").load(pageUrl, function () {
                        $(this).fadeTo(600, 1, function () { });
                        //
                        if ($(".activityimg").length > 0) {
                            $('.activityimg').load(function () {
                                OnPageLoad();
                                if (_currentPageObject.pageId == "p2") {
                                    $("#titleheader").focus();
                                }
                                else if ((isIphone || isAndroid) && _NData[_currentPageId].isLoaded != undefined && _NData[_currentPageId].isLoaded == true) {//iphone android on previous focus is set to header
                                    $("h2").attr("tabindex", "0");
                                    $("h2").focus();
                                }
                                else if (_currentPageObject.pageId == "p28" || _currentPageObject.pageId == "p18") {
                                    $(".EmbededElement").focus();
                                }
                                else {
                                    if (isChrome && !isAndroid) {
                                        $("h2").attr("tabindex", "0");
                                        $("h2").focus();
                                    }
                                    else {
                                        $("#progressdiv").focus();
                                    }
                                }
                            });
                        }
                        else {
                            OnPageLoad();
                        }
                        //



                        if (_Navigator.IsPresenterMode() && (_currentPageObject.pageId != quizpageid || _currentPageObject.pageId != "summary")) {
                            _ModuleCommon.PresenterMode();
                        }
                        if (_currentPageId == quizpageid)//  change to assessment id
                        {
                            _Assessment.ShowQuestion();
                            $("h2.pageheading").attr("tabindex", "0");
                            $("h2").focus();
                        }

                        $("#hintdiv").show();
                        if (_currentPageObject.hideHint != undefined && _currentPageObject.hideHint) {
                            $("#hintdiv").hide();
                        }
                        if (_currentPageObject.hinturl == undefined) {
                            $(".hintlink").k_disable();
                        }
                        else {
                            $(".hintlink").k_enable();
                            $(".hintcontent").load("pagedata/hintdata/" + _currentPageObject.hinturl, function () { });
                        }
                        if ((/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))) {
                            $('#footer-navigation').css('display', 'table');

                        }

                        if (_currentPageId == "p2") {
                            $("#titleheader").focus();
                            if (navigator.userAgent.match(/iPad/i) == null) {
                                var i = 1;
                                $(".buttonlink").each(function () {
                                    var aria_label = $("label[for='" + $(this).attr("id") + "'").html();
                                    $(this).attr("aria-label", aria_label);
                                    $("label[for='" + $(this).attr("id") + "'").attr("aria-hidden", "true");
                                    i++;
                                })
                            }
                        }


                        if (_currentPageObject.pageId == "p18" || _currentPageObject.pageId == "p28") {
                            $('input[type=text]').focus();
                        }

                    });
                    _NData[_currentPageId].isLoaded = true;
                    _Navigator.GetBookmarkData();
                })
            }
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnLoadFromPlayer()
            }

        },

        Prev: function () {
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Previous link click.")
            }
            if (_currentPageObject.pageId == quizpageid && typeof (currentQuestionIndex) != 'undefined' && currentQuestionIndex > 0) {
                $("#ReviewIns").hide();
                $(".intro-content-question").show();
                $("#Questioninfo").show();
                currentQuestionIndex = currentQuestionIndex - 1;
                $("#Summary").empty();
                $("#Summary").hide();
                _Assessment.ShowQuestion();
            }
            else {
                this.LoadPage(_currentPageObject.prevPageId);
            }
        },
        Next: function () {
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Previous link click.")
            }
            $("#linkprevious").k_enable();
            if (_currentPageObject.customNext != undefined && !_currentPageObject.customNext.isComplete) {
                this.LoadPage(_currentPageObject.customNext);
            }
            if (_currentPageObject.pageId == quizpageid) {

                if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) < gRecordData.Questions.length) {
                    currentQuestionIndex = currentQuestionIndex + 1
                    $("#Questioninfo").show();
                    _Assessment.ShowQuestion()
                    if (gRecordData.Status != "Completed" && !this.IsPresenterMode()) {
                        $("#linknext").k_disable();
                        $("#linkprevious").k_disable();
                    }

                }

                else if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) == gRecordData.Questions.length) {

                    $(".intro-content-question").hide();
                    $(".questionwrapper").hide();
                    currentQuestionIndex = currentQuestionIndex + 1;
                    $("#Summary").show();
                    $("#Questioninfo").hide();
                    $("#Summary").load("pagedata/Summary.htm", function () {
                        _Assessment.ShowSummary();
                        if (isChrome && !isAndroid) {
                            $("h2.pageheading").attr("tabindex", "0");
                            $("h2").focus();
                        }
                        else {
                            $("#progressdiv").focus();
                        }
                        $("#linkprevious").k_enable();
                        $("#Summary").find("input[type='radio']").attr("readonly", "readonly");
                        $(".question-band").find("img").attr("aria-hidden", "true");

                    })
                    $("#climate-deal").css("margin-left", "23%");
                    $("#linknext").k_disable();
                }
            }
            else {
                this.LoadPage(_currentPageObject.nextPageId);
            }
        },
        GetProgressData: function () {
            var visitpage = 0;
            for (var i in _NData) {
                if (_NData[i].isAnswered != undefined && (_NData[i].isAnswered == true)) {
                    visitpage++;
                }
            }
            visitpage += this.GetAnswerCount();
            return visitpage;
        },
        GetAnswerCount: function () {
            var cnt = (gRecordData.Questions.filter(function (item) {
                return item.IsAnswered;
            }).length)
            cnt += gRecordData.Status == "Completed" ? 1 : 0;
            return cnt;
        },
        UpdateProgressBar: function () {
            var progData = this.GetProgressData();
            var lprog_pecent = (progData * 100 / progressLevels[0]).toFixed(0);
            $(".progressdiv").text("Progress: " + lprog_pecent + "%");
            $(".progressFg").css("width", lprog_pecent + "%");
        },
        GetCurrentPage: function () {
            return _currentPageObject;
        },
        CompletePage: function (extendedJson) {
            _currentPageObject.IsComplete = true;
            _currentPageObject = $.extend(true, _currentPageObject, extendedJson)
            _StateData[_currentPageObject.pageId] = $.extend(true, {}, _currentPageObject);
        },
        GetTotalScore: function () {
            var ObtainPoint = 0;
            for (var i in _NData) {
                if (_NData[i].points > 0) {
                    ObtainPoint += _NData[i].points
                }
            }
            var quizScore = 0;
            for (var b = 0; b < gRecordData.Questions.length; b++) {
                if (gRecordData.Questions[b].IsAnswered && gRecordData.Questions[b].IsCorrect) {
                    quizScore += 2;
                }
            }
            var score = ((ObtainPoint + quizScore) / (totalsimscore + gRecordData.AssessmentScore)) * 100;
            return score.toFixed(0);
        },
        UpdateScore: function () {
            var percScore = this.GetTotalScore()
            $("#scorediv").html("Score: " + percScore + "%");
        },
        SetPageScore: function (points) {
            if (!_currentPageObject.isAnswered) {
                _NData[_currentPageId].points = points;
                this.UpdateScore();
            }
        },
        IsReviewMode: function () {
            return isReviewMode;
        },
        SetIsReviewMode: function (isReviewModeStatus) {
            isReviewMode = isReviewModeStatus;
        },
        SetPageStatus: function (isAnswered) {
            if (isAnswered) {
                _NData[_currentPageObject.pageId].isAnswered = true;
                this.UpdateProgressBar();
            }

        },
        IsAnswered: function () {
            if (_currentPageObject.isAnswered != undefined && _currentPageObject.isAnswered)
                return true;
            return false;

        },
        IsLoaded: function () {
            if (_currentPageObject.isLoaded != undefined && _currentPageObject.isLoaded)
                return true;
            return false;
        },
        CheckIfPageLoaded: function (pageid) {
            return _NData[pageid].isLoaded != undefined && _NData[pageid].isLoaded ? true : false;
        },
        IncrementCounter: function () {
            submitCounter = submitCounter + 1;
        },
        GetCounter: function () {
            return submitCounter;
        },
        SetPresenterMode: function (val) {
            packageType = val;
        },
        IsPresenterMode: function () {
            if (packageType == "presenter") {
                return true;
            }
            else {
                return false;
            }
        },
        GetBookmarkData: function () {
            if (!this.IsScorm() && !this.IsRevel())
                return;
            var bookmarkobj = {}
            bookmarkobj.BMPageId = bookmarkpageid;
            bookmarkobj.BMretrycnt = retrycnt;
            //bookmarkobj.BMg_RuntimeData = _ModuleCommon.Getg_RuntimeData();
            bookmarkobj.VisistedPages = this.GetNavigatorBMData();
            bookmarkobj.ProgressLevels = progressLevels;
            bookmarkobj.ReviewData = _ModuleCommon.GetReviewData();
            bookmarkobj.AssessmentData = _Assessment.Getbookmarkdata();
            if (this.IsRevel()) {
                if (k_Revel.get_LaunchData().mode == LaunchModes.do) {
                    var suspend_data = JSON.stringify(bookmarkobj);
                    k_Revel.set_StateData(JSON.parse(suspend_data))
                    k_Revel.PostData(gRecordData.Score, gRecordData.AssessmentScore);
                }
            }
            else if (this.IsScorm()) {
                _ScormUtility.SetSuspendData(JSON.stringify(bookmarkobj))
            }

        },
        GetNavigatorBMData: function () {
            var gVisistedPages = [];
            for (var i in _NData) {
                if (_NData[i].isAnswered || _NData[i].isLoaded) {
                    gVisistedPages.push({ id: _NData[i].pageId, prev: _NData[i].prevPageId, next: _NData[i].nextPageId, isLoaded: _NData[i].isLoaded, isAnswered: _NData[i].isAnswered });

                }
            }
            return gVisistedPages;
        },
        SetNavigatorBMData: function (gVisistedPages) {

            for (var i = 0; i < gVisistedPages.length; i++) {
                if (gVisistedPages[i].isAnswered != undefined && gVisistedPages[i].isAnswered) {
                    _NData[gVisistedPages[i].id].isAnswered = true;
                }
                _NData[gVisistedPages[i].id].prevPageId = gVisistedPages[i].prev;
                _NData[gVisistedPages[i].id].nextPageId = gVisistedPages[i].next;
                _NData[gVisistedPages[i].id].isLoaded = gVisistedPages[i].isLoaded;
            }
        },

        SetBookMarkPage: function () {
            if (!this.IsScorm() && !this.IsRevel())
                return;
            if (this.IsScorm()) {
                _ScormUtility.SetBookMark(bookmarkpageid);
            }
            else if (this.IsRevel()) {
                this.GetBookmarkData();
            }
        },
        SetBookmarkData: function () {

            var bookmarkdata;
            if (this.IsScorm()) {
                bookmarkdata = _ScormUtility.GetSuspendData();
            }
            else if (this.IsRevel()) {
                bookmarkdata = JSON.stringify(k_Revel.get_StateData())
            }

            if (bookmarkdata != undefined && bookmarkdata != "") {
                bookmarkdata = JSON.parse(bookmarkdata);
                bookmarkpageid = bookmarkdata.BMPageId;
                retrycnt = bookmarkdata.BMretrycnt;
                //_ModuleCommon.Setg_RuntimeData(bookmarkdata.BMg_RuntimeData);
                this.SetNavigatorBMData(bookmarkdata.VisistedPages)
                progressLevels = bookmarkdata.ProgressLevels;
                _ModuleCommon.SetReviewData(bookmarkdata.ReviewData)
                _Assessment.Setbookmarkdata(bookmarkdata.AssessmentData)
            }
        },
        GetBookMarkPage: function () {
            return bookmarkpageid;
        },
        GetBookMarkRetrycnt: function () {
            return retrycnt;
        },
        SetBookMarkRetrycnt: function () {
            retrycnt = retrycnt + 1;
        },
        Initialize: function () {

            if (packageType == "scorm") {
                _ScormUtility.Init();
                _Navigator.SetBookmarkData();
                //bookmarkpageid = _ScormUtility.GetBookMark();
                if (_ScormUtility.IsScormReviewMode()) {
                    _Navigator.SetIsReviewMode(true);
                }
                this.GotoBookmarkPage();
            }
            else if (packageType == "revel") {
                g_tempIntv = setInterval(function () {
                    if ((typeof piSession != 'undefined' && typeof piSession.currentToken() != 'undefined' && piSession.currentToken() != null)) {
                        clearInterval(g_tempIntv);
                        g_tempIntv = null;
                        //The rest of the code will go here.
                        LifeCycleEvents.InitParams();
                        LifeCycleEvents.OnLoad();
                        if (!k_Revel.isLaunchInitialize()) {
                            k_Revel.InitLaunch()
                            var suspend_data = JSON.stringify(k_Revel.get_StateData());
                            if (suspend_data != "" && suspend_data != "{}") {
                                var isTrue = this.SetBookmarkData();
                                if (isTrue && k_Revel.get_LaunchData().mode == "do") {
                                    this.GotoBookmarkPage();
                                } else {
                                    k_Revel.set_StateData(JSON.parse(suspend_data))
                                }
                            }
                        }
                        if (k_Revel.get_LaunchData().mode == "review") {
                            var suspend_data = JSON.stringify(k_Revel.get_StateData());
                            if (suspend_data != "" && suspend_data != "{}") {
                                this.SetBookmarkData(suspend_data);
                                isReview = true;
                            }
                        }
                    }
                }, 100);

            }
            else {
                _Navigator.Start();
            }
        },
        GotoBookmarkPage: function () {

            if (bookmarkpageid != undefined && bookmarkpageid != "") {
                _Navigator.LoadPage(bookmarkpageid)
            }
            else {
                _Navigator.Start();
            }
        },
        IsScorm: function () {
            if (packageType == "scorm")
                return true;
            return false;
        },
        IsRevel: function () {
            if (packageType == "revel")
                return true;
            return false;
        },
        GetPackageType: function () {
            return packageType;
        },
        GetQuizPageId: function () {
            return quizpageid;
        }
    };
})();



function setReader(idToStartReading) {
    $('#hiddenAnchor').attr("href", "#" + idToStartReading);
    $('#hiddenAnchor')[0].click();
}


function removeCSS(cssFileToRemove) {
    for (var w = 0; w < document.styleSheets.length; w++) {
        if (document.styleSheets[w].href.indexOf(cssFileToRemove) != -1) {
            document.styleSheets[w].disabled = true;
        }
    }
}
function addCSS(cssFileToAdd) {
    var isCSSAlreadyAdded = false;
    for (var w = 0; w < document.styleSheets.length; w++) {
        if (document.styleSheets[w].href.indexOf(cssFileToAdd) != -1) {
            isCSSAlreadyAdded = false;
        }
    }
    console.log(isCSSAlreadyAdded + " --")
    if (!isCSSAlreadyAdded) {
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFileToAdd);
        document.getElementsByTagName("head").item(0).appendChild(newlink);
    }
}

function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
