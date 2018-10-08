//This api will contain navigation logic and page load.
//It will also handle the question navigation if the page is having multiple questions.
var _Navigator = (function () {
    var _currentPageId = "";
    var _currentPageObject = {};
    var progressLevels = [46];//ATUL: three pages add, after visit p15,p32,p41
    var totalsimscore = 18;
    var presentermode = false;
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
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p10": {
            pageId: "p10",
            prevPageId: "p9",
            nextPageId: "p11",
            dataurl: "p10.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p11": {
            pageId: "p11",
            prevPageId: "p10",
            nextPageId: "p12",
            dataurl: "p11.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p12": {
            pageId: "p12",
            prevPageId: "p11",
            nextPageId: "p13",
            dataurl: "p12.htm",
            // hinturl: "",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p13": {
            pageId: "p13",
            prevPageId: "p12",
            nextPageId: "p2",
            dataurl: "p13.htm",
            // hinturl: "",
            hasActivity: true,
            isFinish: "level2",
            accessText: "macOS Sierra Desktop with Finder Window open"
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
            accessText: "macOS Sierra Desktop"
        },
        "p26": {
            pageId: "p26",
            prevPageId: "p25",
            nextPageId: "p27",
            dataurl: "p26.htm",
            hinturl: "hintp26.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop"
        },
        "p27": {
            pageId: "p27",
            prevPageId: "p26",
            nextPageId: "p28",
            dataurl: "p27.htm",
            hinturl: "hintp27.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with File menu open"
        },
        "p28": {
            pageId: "p28",
            prevPageId: "p27",
            nextPageId: "p29",
            dataurl: "p28.htm",
            hinturl: "hintp28.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p29": {
            pageId: "p29",
            prevPageId: "p28",
            nextPageId: "p30",
            dataurl: "p29.htm",
            hinturl: "hintp29.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p30": {
            pageId: "p30",
            prevPageId: "p29",
            nextPageId: "p31",
            dataurl: "p30.htm",
            hinturl: "hintp30.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p31": {
            pageId: "p31",
            prevPageId: "p30",
            nextPageId: "p2",
            dataurl: "p31.htm",
            hinturl: "hintp31.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
        },
        "p32": {
            pageId: "p32",
            prevPageId: "p31",
            nextPageId: "p2",
            dataurl: "p32.htm",
            hinturl: "hintp32.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Finder Window open"
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
            accessText: "macOS Sierra Desktop"
        },
        "p41": {
            pageId: "p41",
            prevPageId: "p40",
            nextPageId: "p42",
            dataurl: "p41.htm",
            hinturl: "hintp41.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with Apple menu open"
        },
        "p42": {
            pageId: "p42",
            prevPageId: "p40",
            nextPageId: "p43",
            dataurl: "p42.htm",
            hinturl: "hintp42.htm",
            hasActivity: true,
            accessText: "macOS Sierra Desktop with System Preferences Window open"
        },
        "p43": {
            pageId: "p43",
            prevPageId: "p42",
            nextPageId: "p2",
            dataurl: "p43.htm",
            hinturl: "hintp43.htm",
            hasActivity: true,
            isFinish: "level6",
            accessText: "macOS Sierra Desktop with Desktop and Screen Saver window open"
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
            accessText: "macOS Sierra Desktop with Finder Window open"
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
        $(".hintcontainer").hide()
        $(".hintlink").removeClass("expanded");
        $(".hintlink").attr("aria-expanded", "false")
        $("#header-title h1").show()
        $("#header-title").removeClass("startpage");
        if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
            $("#header-title h1").hide()
            $("#header-title").addClass("startpage");
        }
        if (_currentPageObject.accessText != undefined) {
            $(".activityimg").attr("alt", _currentPageObject.accessText);
        }
        _ModuleCommon.OnPageLoad();
        _Navigator.UpdateProgressBar();
    }
    return {
        Get: function () {
            return _NData;
        },
        Start: function () {
            this.LoadPage("p1");
        },
        GetProgressLevelsCnt: function () {
            return progressLevels;
        },
        LoadPage: function (pageId, jsonObj) {
            debugger;
            if (jsonObj == undefined) {
                jsonObj = {};
            }
            _currentPageId = pageId;
            _currentPageObject = _NData[_currentPageId]
            if (_currentPageId == "p15" && (_currentPageObject.isAnswered == undefined || !_currentPageObject.isAnswered)) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p14"].nextPageId = "p15";
                _NData["p16"].prevPageId = "p15";
            }
            if (_currentPageId == "p32" && (_currentPageObject.isAnswered == undefined || !_currentPageObject.isAnswered)) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p31"].nextPageId = "p32";
                _NData["p33"].prevPageId = "p32";
            }
            if (_currentPageId == "p41" && (_currentPageObject.isAnswered == undefined || !_currentPageObject.isAnswered)) {
                progressLevels[0] = (progressLevels[0] + 1);
                _NData["p40"].nextPageId = "p41";
                _NData["p43"].prevPageId = "p41";
            }

            $("#header-progress").show();
            $("#header-title").show();
            $("footer").show();

            if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
                $("#linkprevious").k_disable();
                $("#linknext").k_enable();
                $("footer").hide();
                $("#header-progress").hide();

            }
            if (_currentPageObject.hinturl == undefined) {
                $('.hintDiv').k_disable();
            } else {
                $('.hintDiv').k_enable();
            }

            if (_currentPageObject.hasActivity != undefined && _currentPageObject.hasActivity && !this.IsAnswered()) {
                $("#linknext").k_disable();
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
                    
                    if (presentermode) {
                        $("footer").show();
                        _ModuleCommon.PresenterMode();
                        $(".startbtn").k_disable();

                    }
                    $("#header1").focus();
                });
            } else {
                $(".main-content").fadeTo(250, 0.25, function () {
                    $(".main-content").load(pageUrl, function () {
                        $(this).fadeTo(600, 1 ,function(){
                        OnPageLoad();
                        if (_currentPageId == "p46") {
                            showQuestion();
                        }
                       
                        $("#hintdiv").show();
                        if (_currentPageObject.hideHint != undefined && _currentPageObject.hideHint) {
                            $("#hintdiv").hide();
                        }
                        if (presentermode) {
                            _ModuleCommon.PresenterMode();
                        }
                        if (_currentPageObject.hinturl != undefined) {
                            $(".hintcontent").load("pagedata/hintdata/" + _currentPageObject.hinturl, function () { });
                        }
                        if ((/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))) {
                            $('#footer-navigation').css('display', 'table');                           
                            
                        }

                        if(_currentPageId == "p2")
                        {
                            $("#titleheader").focus();
                        }
                        else
                        {
                            $("#progressdiv").focus();
                        }
                       
                        if (_currentPageObject.pageId == "p18" || _currentPageObject.pageId == "p28") {
                            $('input[type=text]').focus();
                        }
                    })
                    });
                })
            }

        },
        LoadDefaultQuestion: function () {
            if (_currentPageObject.questions.length > 0) {
                _questionId = 0;
                _currentPageObject.questions[0].isQuestionVisit = true;
                for (var i = 0; i < _currentPageObject.questions.length; i++) {
                    if (_currentPageObject.questions[i].isCurrent) {
                        _questionId = i;
                    }
                }
                //second parameter is to disable question effect.
                _Question.Load(_currentPageObject.questions[_questionId], {
                    disableEffect: true
                });
            }
        },
        Prev: function () {
            if (_currentPageObject.pageId == "p46" && typeof (currentQuestionIndex) != 'undefined' && currentQuestionIndex > 0) {
                $("#ReviewIns").hide();
                $(".intro-content-question").show();
                $("#Questioninfo").show();
                currentQuestionIndex = currentQuestionIndex - 1;
                $("#Summary").empty();
                $("#Summary").hide();
                showQuestion();
            }
            else {
                this.LoadPage(_currentPageObject.prevPageId);
            }
        },
        Next: function () {
            $("#linkprevious").k_enable();
            if (_currentPageObject.customNext != undefined && !_currentPageObject.customNext.isComplete) {
                this.LoadPage(_currentPageObject.customNext);
            }
            if (_currentPageObject.pageId == "p46") {

                if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) < gRecordData.Questions.length) {
                    currentQuestionIndex = currentQuestionIndex + 1
                    $("#Questioninfo").show();
                    showQuestion()

                    //this.UpdateProgressBar();
                    if (gRecordData.Status != "Completed" && !presentermode) {
                        $("#linknext").k_disable();
                        $("#linkprevious").k_disable();
                    }

                }

                else if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) == gRecordData.Questions.length) {
                    //this.UpdateProgressBar();
                    // Show review instruction

                    $(".intro-content-question").hide();
                    $(".questionwrapper").hide();
                    currentQuestionIndex = currentQuestionIndex + 1;
                    $("#Summary").show();
                    $("#Questioninfo").hide();
                    $("#Summary").load("pagedata/Summary.htm", function () {
                        showSummary()
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
            $(".progressDiv").text("Progress: " + lprog_pecent + "%");
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
            var score = (ObtainPoint / totalsimscore) * 100;
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
        SetPresenterMode: function (val) {
            presentermode = val;
        },
        IsPresenterMode: function () {
            return presentermode;
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
