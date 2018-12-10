ColorCodes = {
  black: "#00000",
  white: "#FFFFFF",
  red: "#B22222",
  green: "#01662C",
  blue: "#4E7092",
}

var _Settings = {
  dataRoot: "pagedata/",
  assetsRoot: "assets/",
  enableCache: false,
  topMargin: 144,
  minHeight: 437
}

var userAgentCustom = window.navigator.userAgent;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var isIE11version = !!navigator.userAgent.match(/Trident.*rv\:11\./);
var isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var CurClientWidth = window.innerWidth;
var Macbrowser = navigator.userAgent.indexOf('Chrome');
var Macos = navigator.userAgent.indexOf('Mac');
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isIpad = userAgentCustom.match(/iPad/i)
var isIphone = (navigator.userAgent.match(/iPhone/i))
var isIEEdge = /Edge/.test(navigator.userAgent)
var Firefox = /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)
var animeTime = 1000;
if(isIphone != null){
    animeTime = 3000;
}

var _PData = {
  //windows1
  "p1": {},
  "p2": {
    DNDSettings: {
      action: "feedback",
      feedbackurl: "feedbackcp2.htm",
      score: ""

    }
  },
  "p3": {
    ImageHotSpots: {
      "Hotspots": [
        
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23.544303797468356%",
          height: "5.227655986509275%",
          top: "93.09780775716695%",
          left: "59.55696202531645%", 
          isCorrect: true,
          feedbackurl: "feedbackcp3.htm",
          action: "feedback",
          accessText: "Taskbar", 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "81.77215189873418%",
          height: "83.47386172006746%",
          top: "7.251264755480608%",
          left: "11.58227848101266%", 
          action: "feedback",
          isCorrect: false,
          feedbackurl: "feedbackip3.htm",
          accessText: "File Explorer Window", 
        },
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "14.177215189873419%",
          height: "4.721753794266442%",
          top: "93.43507588532883%",
          left: "85.50632911392405%", 
          action: "feedback",
          isCorrect: false,
          feedbackurl: "feedbackip3.htm",
          accessText: "Notification Area", 
        },
        
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.050632911392405%",
          height: "5.396290050590219%",
          top: "93.929173693086%",
          left: "0.31645569620253167%", 
          action: "feedback",
          isCorrect: false,
          feedbackurl: "feedbackip3.htm",
          accessText: "Start Menu", 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "6.20253164556962%",
          height: "9.949409780775717%",
          top: "13.490725126475548%",
          left: "0.8227848101265823%", 
          action: "feedback",
          isCorrect: false,
          feedbackurl: "feedbackip3.htm",
          accessText: "Chrome Application Shortcut",          
        },
        {
          HotspotId: 6,
          HotspotClass: "divHotSpot",
          width: "22.911392405063292%",
          height: "6.070826306913997%",
          top: "93.929173693086%",
          left: "36.0126582278481%", 
          action: "feedback",
          isCorrect: false,
          feedbackurl: "feedbackip3.htm",
          accessText: "Taskbar Icons", 
        },
      ]
    },
  },
  "p4": {
    ImageHotSpots: {
      "Hotspots": [        
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23.492462311557787%",
          height: "6.867671691792294%",
          top: "92%",
          left: "59.55565326633165%", 
          action: "feedback",
          feedbackurl: "feedbackip4.htm",
          accessText: "Taskbar",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "81.77215189873418%",
          height: "83.47386172006746%",
          top: "7.251264755480608%",
          left: "11.58227848101266%", 
          action: "feedback",
          feedbackurl: "feedbackcp4.htm",
          accessText: "File Explorer Window",
          isCorrect: true, 
        },
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "14.07035175879397%",
          height: "7.035175879396985%",
          top: "92%",
          left: "85.25439698492463%", 
          action: "feedback",
          feedbackurl: "feedbackip4.htm",
          accessText: "Notification Area",
          isCorrect: false, 
        },
        
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.050632911392405%",
          height: "5.396290050590219%",
          top: "92%",
          left: "0.31645569620253167%", 
          action: "feedback",
          feedbackurl: "feedbackip4.htm",
          accessText: "Start Menu",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "6.20253164556962%",
          height: "9.949409780775717%",
          top: "13.490725126475548%",
          left: "0.8227848101265823%", 
          action: "feedback",
          feedbackurl: "feedbackip4.htm",
          accessText: "Chrome Application Shortcut",
          isCorrect: false, 
        },
        {
          HotspotId: 6,
          HotspotClass: "divHotSpot",
          width: "22.8643216080402%",
          height: "7.202680067001675%",
          top: "92%",
          left: "36.38894472361809%", 
          action: "feedback",
          feedbackurl: "feedbackip4.htm",
          accessText: "Taskbar Icons",
          isCorrect: false, 
        },

      ]
    }
  },
  "p5": {
    ImageHotSpots: {
      "Hotspots": [
        
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23.544303797468356%",
          height: "5.227655986509275%",
          top: "93.09780775716695%",
          left: "59.55696202531645%", 
          action: "feedback",
          feedbackurl: "feedbackip5.htm",
          accessText: "Taskbar",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "81.77215189873418%",
          height: "83.47386172006746%",
          top: "7.251264755480608%",
          left: "11.58227848101266%", 
          action: "feedback",
          feedbackurl: "feedbackip5.htm",
          accessText: "File Explorer Window",
          isCorrect: false, 
        },
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "14.07035175879397%",
          height: "8.877721943048575%",
          top: "90.74807370184253%",
          left: "85.00314070351759%", 
          action: "feedback",
          feedbackurl: "feedbackcp5.htm",
          accessText: "Notification Area",
          isCorrect: true, 
        },
        
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.050632911392405%",
          height: "5.396290050590219%",
          top: "93.929173693086%",
          left: "0.31645569620253167%", 
          action: "feedback",
          feedbackurl: "feedbackip5.htm",
          accessText: "Start Menu",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "6.20253164556962%",
          height: "9.949409780775717%",
          top: "13.490725126475548%",
          left: "0.8227848101265823%", 
          action: "feedback",
          feedbackurl: "feedbackip5.htm",
          isCorrect: false,
          accessText: "Chrome Application Shortcut", 
        },
        {
          HotspotId: 6,
          HotspotClass: "divHotSpot",
          width: "22.911392405063292%",
          height: "6.070826306913997%",
          top: "93.929173693086%",
          left: "36.0126582278481%", 
          action: "feedback",
          feedbackurl: "feedbackip5.htm",
          accessText: "Taskbar Icons",
          isCorrect: false, 
        },
      ]
    }
  },
  "p6": {
    ImageHotSpots: {
      "Hotspots": [
        
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23.544303797468356%",
          height: "5.227655986509275%",
          top: "93.09780775716695%",
          left: "59.55696202531645%", 
          accessText: "Taskbar",
          action: "feedback",
          feedbackurl: "feedbackip6.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "81.77215189873418%",
          height: "83.47386172006746%",
          top: "7.251264755480608%",
          left: "11.58227848101266%", 
          accessText: "File Explorer Window",
          action: "feedback",
          feedbackurl: "feedbackip6.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "14.177215189873419%",
          height: "4.721753794266442%",
          top: "93.43507588532883%",
          left: "85.50632911392405%", 
          accessText: "Notification Area",
          action: "feedback",
          feedbackurl: "feedbackip6.htm",
          isCorrect: false, 
        },
       
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.050632911392405%",
          height: "5.396290050590219%",
          top: "93.929173693086%",
          left: "0.31645569620253167%", 
          accessText: "Start Menu",
          action: "feedback",
          feedbackurl: "feedbackip6.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "6.20253164556962%",
          height: "9.949409780775717%",
          top: "13.490725126475548%",
          left: "0.8227848101265823%", 
          accessText: "Chrome Application Shortcut",
          action: "feedback",
          feedbackurl: "feedbackcp6.htm",
          isCorrect: true, 
        },
        {
          HotspotId: 6,
          HotspotClass: "divHotSpot",
          width: "22.911392405063292%",
          height: "6.070826306913997%",
          top: "93.929173693086%",
          left: "36.0126582278481%", 
          accessText: "Taskbar Icons",
          action: "feedback",
          feedbackurl: "feedbackip6.htm",
          isCorrect: false, 
        },

      ]
    }
  },
  "p7": {
    ImageHotSpots: {
      "Hotspots": [
        
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23.544303797468356%",
          height: "5.227655986509275%",
          top: "93.09780775716695%",
          left: "59.55696202531645%", 
          accessText: "Taskbar",
          action: "feedback",
          feedbackurl: "feedbackip7.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "81.77215189873418%",
          height: "83.47386172006746%",
          top: "7.251264755480608%",
          left: "11.58227848101266%", 
          accessText: "File Explorer Window",
          action: "feedback",
          feedbackurl: "feedbackip7.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "14.177215189873419%",
          height: "4.721753794266442%",
          top: "93.43507588532883%",
          left: "85.50632911392405%", 
          accessText: "Notification Area",
          action: "feedback",
          feedbackurl: "feedbackip7.htm",
          isCorrect: false, 
        },
        
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.773869346733668%",
          height: "6.867671691792294%",
          top: "93.09045226130654%",
          left: "0.06477701005025126%", 
          accessText: "Start Menu",
          action: "feedback",
          feedbackurl: "feedbackcp7.htm",
          isCorrect: true, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "6.20253164556962%",
          height: "9.949409780775717%",
          top: "13.490725126475548%",
          left: "0.8227848101265823%", 
          accessText: "Chrome Application Shortcut",
          action: "feedback",
          feedbackurl: "feedbackip7.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 6,
          HotspotClass: "divHotSpot",
          width: "22.911392405063292%",
          height: "6.070826306913997%",
          top: "93.929173693086%",
          left: "36.0126582278481%", 
          accessText: "Taskbar Icons",
          action: "feedback",
          feedbackurl: "feedbackip7.htm",
          isCorrect: false, 
        },
      ]
    }
  },
  "p8": {
    ImageHotSpots: {
      "Hotspots": [
        
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23.544303797468356%",
          height: "5.227655986509275%",
          top: "93.09780775716695%",
          left: "59.55696202531645%", 
          accessText: "File Explorer Window",
          action: "feedback",
          feedbackurl: "feedbackip8.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "81.77215189873418%",
          height: "83.47386172006746%",
          top: "7.251264755480608%",
          left: "11.58227848101266%", 
          accessText: "Taskbar",
          action: "feedback",
          feedbackurl: "feedbackip8.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "14.177215189873419%",
          height: "4.721753794266442%",
          top: "93.43507588532883%",
          left: "85.50632911392405%", 
          accessText: "Notification Area",
          action: "feedback",
          feedbackurl: "feedbackip8.htm",
          isCorrect: false, 
        },
        
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.050632911392405%",
          height: "5.396290050590219%",
          top: "93.929173693086%",
          left: "0.31645569620253167%", 
          accessText: "Start Menu",
          action: "feedback",
          feedbackurl: "feedbackip8.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "6.20253164556962%",
          height: "9.949409780775717%",
          top: "13.490725126475548%",
          left: "0.8227848101265823%", 
          accessText: "Chrome Application Shortcut",
          action: "feedback",
          feedbackurl: "feedbackip8.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 6,
          HotspotClass: "divHotSpot",
          width: "22.911392405063292%",
          height: "6.070826306913997%",
          top: "92.929173693086%",
          left: "36.0126582278481%", 
          accessText: "Taskbar Icons",
          action: "feedback",
          feedbackurl: "feedbackcp8.htm",
          isCorrect: true, 
        },
      ]
    }
  },
  //mac activity1
  "p9": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "81.65829145728644%",
          height: "7.537688442211055%",
          top: "90%",
          left: "3.2035175879396984%", 
          accessText: "Dock",
          action: "feedback",
          feedbackurl: "feedbackcp9.htm",
          isCorrect: true, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "74.5%",
          height: "80%",
          top: "8%",
          left: "12%", 
          accessText: "Finder Window",
          action: "feedback",
          feedbackurl: "feedbackip9.htm",
          isCorrect: false, 
        },
                
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "3.391959798994975%",
          height: "3.6850921273031827%",
          top: "0%",
          left: "1.4447236180904524%", 
          accessText: "Apple Menu",
          action: "feedback",
          feedbackurl: "feedbackip9.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "36.18090452261307%",
          height: "3.350083752093802%",
          top: "0%",
          left: "10%", 
          accessText: "Menu Bar",
          action: "feedback",
          feedbackurl: "feedbackip9.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "10.301507537688442%",
          height: "7.537688442211055%",
          top: "90%",
          left: "85.61557788944724%", 
          accessText: "Recycle bin",
          action: "feedback",
          feedbackurl: "feedbackip9.htm",
          isCorrect: false, 
        },
      ]
    }
  },
  "p10": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "81.65829145728644%",
          height: "7.552763819095476%",
          top: "90%",
          left: "3.077889447236181%", 
          accessText: "Dock",
          action: "feedback",
          feedbackurl: "feedbackip10.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "74.5%",
          height: "80%",
          top: "8%",
          left: "12%", 
          accessText: "Finder Window",
          action: "feedback",
          feedbackurl: "feedbackcp10.htm",
          isCorrect: true, 
        },
                
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "3.391959798994975%",
          height: "3.6850921273031827%",
          top: "0%",
          left: "1.4447236180904524%", 
          accessText: "Apple Menu",
          action: "feedback",
          feedbackurl: "feedbackip10.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "36.18090452261307%",
          height: "3.350083752093802%",
          top: "0%",
          left: "10%", 
          accessText: "Menu Bar",
          action: "feedback",
          feedbackurl: "feedbackip10.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "10.804020100502512%",
          height: "7.050251256281408%",
          top: "90%",
          left: "85.48994974874373%", 
          accessText: "Recycle bin",
          action: "feedback",
          feedbackurl: "feedbackip10.htm",
          isCorrect: false, 
        },
      ]
    }
  },

  "p11": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "81.65829145728644%",
          height: "7.537688442211055%",
          top: "90%",
          left: "3.2035175879396984%", 
          accessText: "Application Icons",
          action: "feedback",
          feedbackurl: "feedbackcp11.htm",
          isCorrect: true, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "74.5%",
          height: "80%",
          top: "8%",
          left: "12%", 
          accessText: "Finder Window",
          action: "feedback",
          feedbackurl: "feedbackip11.htm",
          isCorrect: false, 
        },
                
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "3.391959798994975%",
          height: "3.6850921273031827%",
          top: "0%",
          left: "1.4447236180904524%", 
          accessText: "Apple Menu",
          action: "feedback",
          feedbackurl: "feedbackip11.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "36.18090452261307%",
          height: "3.350083752093802%",
          top: "0%",
          left: "10%", 
          accessText: "Menu Bar",
          action: "feedback",
          feedbackurl: "feedbackip11.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "10.301507537688442%",
          height: "7.537688442211055%",
          top: "90%",
          left: "85.61557788944724%", 
          accessText: "Recycle bin",
          action: "feedback",
          feedbackurl: "feedbackip11.htm",
          isCorrect: false, 
        },
      ]
    }
  },
  "p12": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "81.65829145728644%",
          height: "7.537688442211055%",
          top: "90%",
          left: "3.2035175879396984%", 
          accessText: "Dock",
          action: "feedback",
          feedbackurl: "feedbackip12.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "74.5%",
          height: "80%",
          top: "8%",
          left: "12%", 
          accessText: "Finder Window",
          action: "feedback",
          feedbackurl: "feedbackip12.htm",
          isCorrect: false, 
        },
                
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "3.391959798994975%",
          height: "3.6850921273031827%",
          top: "0%",
          left: "1.4447236180904524%", 
          accessText: "Apple Menu",
          action: "feedback",
          feedbackurl: "feedbackcp12.htm",
          isCorrect: true, 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "36.18090452261307%",
          height: "3.350083752093802%",
          top: "0%",
          left: "10%", 
          action: "feedback",
          feedbackurl: "feedbackip12.htm",
          isCorrect: false,
          accessText: "Menu Bar", 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "10.301507537688442%",
          height: "7.537688442211055%",
          top: "90%",
          left: "85.61557788944724%", 
          accessText: "Recycle bin",
          action: "feedback",
          feedbackurl: "feedbackip12.htm",
          isCorrect: false, 
        },
      ]

    }
  },
  "p13": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "81.65829145728644%",
          height: "7.537688442211055%",
          top: "90%",
          left: "3.2035175879396984%", 
          accessText: "Dock",
          action: "feedback",
          feedbackurl: "feedbackip13.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "74.5%",
          height: "80%",
          top: "8%",
          left: "12%", 
          accessText: "Finder Window",
          action: "feedback",
          feedbackurl: "feedbackip13.htm",
          isCorrect: false, 
        },
                
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "3.391959798994975%",
          height: "3.6850921273031827%",
          top: "0%",
          left: "1.4447236180904524%", 
          accessText: "Apple Menu",
          action: "feedback",
          feedbackurl: "feedbackip13.htm",
          isCorrect: false, 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "35.92964824120603%",
          height: "4.0201005025125625%",
          top: "0%",
          left: "10%", 
          accessText: "Menu Bar",
          action: "feedback",
          feedbackurl: "feedbackcp13.htm",
          isCorrect: true, 
        },
        {
          HotspotId: 5,
          HotspotClass: "divHotSpot",
          width: "10.301507537688442%",
          height: "7.537688442211055%",
          top: "90%",
          left: "85.61557788944724%", 
          accessText: "Recycle bin",
          action: "feedback",
          feedbackurl: "feedbackip13.htm",
          isCorrect: false, 
        },
      ]
    }
  },
  //windows activity 2
  "p14": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "4.773869346733668%",
          height: "5.192629815745393%",
          top: "93.30485762144055%",
          left: "-0.06281407035175879%", 
          accessText: "Start Menu",
          action: "next",
          isCorrect: true,
          nextPageId: "p15", 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "4.648241206030151%",
          height: "5.6951423785594635%",
          top: "93.13735343383584%",
          left: "45.414572864321606%", 
          accessText: "File Explorer",
          action: "next",
          isCorrect: true,   
        }
      ]
    }
  },
  "p15": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "25.376884422110553%",
          height: "7.202680067001675%",
          top: "73.86666666666666%",
          left: "0%", 
          accessText: "File Explorer",
          action: "next",
          isCorrect: true, 
        }
      ]

    }
  },
  "p16": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpotDbClick",
          width: "10.92964824120603%",
          height: "4.690117252931323%",
          top: "40.7035175879397%",
          left: "34.108040201005025%", 
          action: "feedback",
          feedbackurl: "feedbackp16.htm",
          accessText: "Documents",
          isCorrect: true, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "10.92964824120603%",
          height: "5.192629815745393%",
          top: "45.39363484087102%",
          left: "13.253768844221106%", 
          action: "feedback",
          feedbackurl: "feedbackp16.htm",
          accessText: "Documents",
          isCorrect: true, 
        }
      ]
    }
  },
  "p17": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "4.899497487437186%",
          height: "9.547738693467336%",
          top: "15.07537688442211%",
          left: "55.84170854271356%", 
          action: "next",
          accessText: "Create New Folder",
          isCorrect: true, 
        }
      ]
    }
  },
  "p18": {

    EmbedSettings: {
      validatearray: ["my notes"],
      action: "feedback",
      feedbackurl: "feedbackp18.htm",
      score: ""

    }
  },
  "p19": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "7.161675879396985%",
          height: "6.197654941373535%",
          top: "10.88428810720268%",
          left: "28.5786432160804%", 
          action: "next",
          accessText: "View",
          isCorrect: true, 
        }
      ]
    }
  },
  "p20": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "12.186801507537687%",
          height: "4.690117252931323%",
          top: "17.752596314907873%",
          left: "27.19723618090452%", 
          feedbackurl: "feedbackp20.htm",
          action: "feedback",
          accessText: "Medium icon",
          isCorrect: true, 
        }
      ]
    }
  },
  "p21": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "10.428007537688442%",
          height: "4.857621440536013%",
          top: "14.236113902847569%",
          left: "17.775502512562813%", 
          feedbackurl: "feedbackp21.htm",
          action: "feedback",
          accessText: "Preview pane",
          isCorrect: true, 
        }
      ]
    }
  },
  "p22": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "3.8944723618090453%",
          height: "9.212730318257957%",
          top: "15.07537688442211%",
          left: "52.82663316582915%", 
          action: "next",
          accessText: "Sort by",
          isCorrect: true, 
        }
      ]
    }
  },
  "p23": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "12.312429648241206%",
          height: "5.360134003350084%",
          top: "42.042378559463984%",
          left: "55.96520100502512%", 
          action: "feedback",
          feedbackurl: "feedbackp23.htm",
          accessText: "Date modified",
          isCorrect: true, 
        }
      ]
    }
  },
  //mac activity 2
  "p25": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "5.276381909547738%",
          height: "7.705192629815745%",
          top: "90.95477386934674%",
          left: "3.329145728643216%", 
          action: "feedback",
          feedbackurl: "feedbackp25.htm",
          accessText: "Finder Window",
          isCorrect: true, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "4.5%",
          height: "4%",
          top: "0%",
          left: "10.4%", 
          action: "next",
          accessText: "File",
          nextPageId: "p25Next",
          isCorrect: true, 
        }
      ]
    }
  },
  "p25Next": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "23%",
          height: "3%",
          top: "4%",
          left: "12%", 
          action: "next",
          accessText: "File Menu",
          isCorrect: true, 
        }
      ]
    }
  },
  "p26": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "5%",
          height: "5%",
          top: "0%",
          left: "10%", 
          action: "next",
          accessText: "File Menu",
          isCorrect: true, 
        }
      ]
    }
  },
  "p27": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "13.5678391959799%",
          height: "3.8525963149078724%",
          top: "6.700167504187604%",
          left: "11%", 
          action: "next",
          accessText: "New Folder",
          isCorrect: true, 
        }
      ]
    }
  },
  "p28": {
    EmbedSettings: {
      validatearray: ["my notes"],
      action: "feedback",
      feedbackurl: "feedbackp28.htm",
      score: ""

    }
  },
  "p29": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "3%",
          height: "3.8525963149078724%",
          top: "12%",
          left: "33.6%", 
          action: "feedback",
          feedbackurl: "feedbackp29.htm",
          accessText: "Cover Flow",
          isCorrect: true, 
        }
      ]
    }
  },
  "p30": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "3%",
          height: "4%",
          top: "12%",
          left: "28.4%", 
          action: "feedback",
          feedbackurl: "feedbackp30.htm",
          accessText: "List View",
          isCorrect: true, 
        }
      ]
    }
  },
  "p31": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "13%",
          height: "4%",
          top: "16.4%",
          left: "54%", 
          action: "feedback",
          feedbackurl: "feedbackp31.htm",
          accessText: "Date Modified",
          isCorrect: true, 
        },
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "4.5%",
          height: "4%",
          top: "12%",
          left: "37.4%", 
          action: "next",
          accessText: "Sort by",
          nextPageId: "p32",
          isCorrect: true, 
        }
      ]
    }
  },
  "p32": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "14%",
          height: "3%",
          top: "35%",
          left: "38%", 
          action: "feedback",
          feedbackurl: "feedbackp32.htm",
          accessText: "Date Modified",
          isCorrect: true, 
        }
      ]
    }
  },
  // windows activity 3
  "p33": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 2,
          HotspotClass: "divHotSpot",
          width: "4.648241206030151%",
          height: "7.537688442211055%",
          top: "92.46231155778895%",
          left: "0%", 
          action: "next",
          accessText: "Start Menu",
          isCorrect: true, 
        }
      ]
    }
  },
  "p34": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "16.835042713567837%",
          height: "7.202680067001675%",
          top: "78.72227805695142%",
          left: "0%", 
          action: "next",
          accessText: "Windows Settings",
          isCorrect: true, 
        }
      ]
    }
  },
  "p35": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "13.819095477386934%",
          height: "18.090452261306535%",
          top: "21.273031825795645%",
          left: "77.4497487437186%", 
          action: "next",
          accessText: "Personalization",
          isCorrect: true, 
        }
      ]
    }
  },
  "p36": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "9.045226130653267%",
          height: "5.025125628140704%",
          top: "33.50083752093803%",
          left: "16.64572864321608%", 
          action: "next",
          accessText: "Theme",
          isCorrect: true, 
        }
      ]
    }
  },
  "p37": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "14.698492462311558%",
          height: "5.360134003350084%",
          top: "22.278056951423785%",
          left: "48.68090452261307%", 
          action: "next",
          accessText: "Theme settings",
          isCorrect: true, 
        }
      ]
    }
  },
  "p38": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "12.688442211055277%",
          height: "16.582914572864322%",
          top: "53.43383584589615%",
          left: "48.68090452261307%", 
          action: "next",
          accessText: "Windows 10 theme",
          isCorrect: true, 
        }
      ]
    }
  },
  "p39": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "5.9053944723618095%",
          height: "6.700167504187604%",
          top: "7.860485762144053%",
          left: "84.48103015075378%", 
          action: "feedback",
          feedbackurl: "feedbackp39.htm",
          accessText: "Close Personalization Window",
          isCorrect: true, 
        }
      ]
    }
  },
  //mact activity 3
  "p40": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 3,
          HotspotClass: "divHotSpot",
          width: "4.522613065326634%",
          height: "6.030150753768844%",
          top: "0%",
          left: "0.6909547738693468%", 
          action: "next",
          accessText: "Apple Menu",
          isCorrect: true,
          nextPageId: "p41", 
        },
        {
          HotspotId: 4,
          HotspotClass: "divHotSpot",
          width: "6%",
          height: "7%",
          top: "90.62981574539364%",
          left: "79%", 
          action: "next",
          accessText: "System Preferences",
          isCorrect: true, 
        },
      ]
    }
  },
  "p41": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "19.72361809045226%",
          height: "5.527638190954774%",
          top: "7.035175879396985%",
          left: "0.9422110552763818%", 
          action: "next",
          accessText: "System Preferences",
          isCorrect: true, 
        }
      ]
    }
  },
  "p42Next": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "10%",
          height: "10%",
          top: "58%",
          left: "38%", 
          action: "next",
          accessText: "Desktop and Screen Saver",
          isCorrect: true, 
        }
      ]
    }
  },
  "p42": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "11%",
          height: "14.572864321608039%",
          top: "13.5678391959799%",
          left: "25%", 
          action: "next",
          accessText: "Desktop and Screen Saver",
          isCorrect: true, 
        }
      ]
    }
  },
  "p43": {
    ImageHotSpots: {
      "Hotspots": [
        {
          HotspotId: 1,
          HotspotClass: "divHotSpot",
          width: "13%",
          height: "3.8525963149078724%",
          top: "80%",
          left: "38%", 
          action: "feedback",
          feedbackurl: "feedbackp44.htm",
          accessText: "Change Picture",
          isCorrect: true, 
        }
      ]
    }
  },
  "p44": {
    DNDSettings: {
      action: "feedback",
      feedbackurl: "feedbackp44.htm",
      score: ""

    }
  },
  "p45": {
    DNDSettings: {
      action: "feedback",
      feedbackurl: "feedbackp45.htm",
      score: ""

    }
  },
  "p46": {
    
  },
}

