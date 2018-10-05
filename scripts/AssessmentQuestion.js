gRecordData = {
    Status: "NotStarted",
    AssessmentScore: "4",
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
    RecordTitle: "How Does Barbara Corcoran Pick Her Investments on Shark Tank?",
    LandingPageURL: "record2_landing.htm",
    QuestionSequence: "Numbers", // this can be used later if different display style is required
    OptionSequence: "LowerAlphabets", // this can be used later if different display style is required
    RandomizeQuestions: true,
    RandomizeOptions: true,
    Questions: [
                    {
                        QuestionId: "1",
                        QuestionText: "How do you open a new Finder window in the macOS Sierra operating system?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Click the File menu and click Duplicate.",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Click the File menu and click New Finder Window.",
                                         "IsCorrect": true,
                                         "score": 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Click the New Finder Window menulet.",
                                         "IsCorrect": false
                                     }

                        ],
                        IsAnswered:false,
                        CorrectFeedback: "​That is right. ​",
                        IncorrectFeedback: "That is not right. To open a new Finder window, click the File menu and click New Finder Window.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "2",
                        QuestionText: "How do you change the desktop theme in Windows 10?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Click the Personalize button on the Windows Taskbar.",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Open Settings and click Personalization.",
                                         "IsCorrect": true,
                                         score: 2,

                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Click Gadgets and then click Change the theme.",
                                         "IsCorrect": false,

                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That is not right. Open Settings and click Personalization to change the theme.",
                        CorrectFeedback: "​That is right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "3",
                        QuestionText: "How do you change the desktop background in the macOS Sierra operating system?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Click the System Preferences icon on the dock. In the first row, click Desktop & Screen Saver.",
                                         "IsCorrect": true,
                                         score: 2
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Click the View menu, click Personal, then click Desktop & Screen Saver.",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Click the System Preferences icon on the dock. Click the View menu, click Personal, then click Desktop & Screen Saver.",
                                         "IsCorrect": false,
                                         
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That is not right. Click the System Preferences icon on the dock. In the first row, click Desktop & Screen Saver.",
                        CorrectFeedback: "​​That is right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "4",
                        QuestionText: "How do you pin an application to the taskbar in Windows 10?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Open the application and then from the File menu, click Pin to Taskbar.",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Click the Start menu, point to All Programs, then click and drag the application to the right side of the Start menu.",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Drag the application’s icon from the desktop to the taskbar.",
                                         "IsCorrect": true,
                                         score: 2
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​​That is not right. Drag the application’s icon from the desktop to the taskbar.",
                        CorrectFeedback: "​​​That is right.​",
                        "UserSelectedOptionId": ""

                    }

    ]
}