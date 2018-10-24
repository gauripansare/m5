$(document).on("mouseover", ".qheight", function (event) {
    $(this).css({
        "font-weight": "bold"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#003058",
        "color": "#F9FF00"
    });

});
$(document).on("mouseout", ".qheight", function (event) {
    $(this).css({
        "font-weight": "normal"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#007AA2",
        "color": "#FFF"
    });
});
$(document).on("click", ".qheight", function (event) {
    $(".qheight").removeClass("optionselected");

    $(this).addClass("optionselected");

});
var hotspotclicked = false;;
var hotspot;
$(document).on("click", ".divHotSpot", function (event) {
    if (_Navigator.IsPresenterMode()) {
        return;
    }
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
    if (_Navigator.IsPresenterMode()) {
        return;
    }
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
    if (_Navigator.IsPresenterMode()) {
        return;
    }
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
$(document).on("click", ".hintlink", function (event) {
    if ($(this).parent().hasClass("disabled"))
        return;
    if ($(this).hasClass("expanded")) {
        $(".hintlink").removeClass("expanded")
        $(".hintlink").attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
    }
    else {
        $(".hintcontainer").slideDown(100, function () {
            $(".hintlink").addClass("expanded");
            $(".hintlink").attr("aria-expanded", "true");
        });
    }

});
$(document).on("click", ".closehintlink", function (event) {
    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100);
});
$(document).on("keydown", "input.EmbededElement", function (event) {
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
    if ($(".divHotSpot").hasClass("disabled"))
        return;
    _ModuleCommon.AddEditPropertiesClick(event);
});


$(document).on('click', ".startbtn", function (event) {
    _Navigator.Next();
});
$(document).on('click', ".reviewsubmit", function (event) {
    _Navigator.Next();
});
$(document).on('mouseover', ".hintlink", function (event) {
    $(".hintlink .hintlinkspan").css({ "color": "#b22222", "border-bottom": "1px solid #b22222" })
    $(this).find("path").css({ "fill": "#b22222" })
});

$(document).on('mouseout', ".hintlink", function (event) {
    $(".hintlink .hintlinkspan").css({ "color": "#047a9c", "border-bottom": "1px solid #047a9c" })
    $(this).find("path").css({ "fill": "#047a9c" })
});

$(document).on("click", ".quizButton", function (event) {
    _Navigator.LoadPage("p46")
});

$(document).on("change", ".assessmentradio", function (event) {
    $(".assessmentSubmit").k_enable();

});
$(document).on("click", ".assessmentSubmit", function (event) {
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id");
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.Next();
});
$(document).on('click', "#continuebtn", function (event) {
    _ModuleCommon.OnContinue();
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