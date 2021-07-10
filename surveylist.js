export default
{ 
    title: "UNC Teen Survey",
    showProgressBar: "bottom",
    goNextPageAutomatic: false, // true
    showNavigationButtons: true, // false
    showQuestionNumbers: "off",
    pages: [
        {
            questions: [
                {
                    name: "M1",
                    type: "radiogroup",
                    title: "Have you put on your armband on today?",
                    // isRequired: true,
                    colCount: 1,
                    choices: [
                        "yes",
                        "no"
                    ]
                }
            ]
        },
        {
            questions: [
                {   
                    name: "M2",
                    type: "panel",
                    innerIndent: 1,
                    title: "About what time did you fall asleep last night? (input numbers for time)",
                    elements: [
                        {   
                            name: "M2HH",
                            type: "text",
                            title: "HH",
                            // isRequired: true,
                            validators: [
                                {
                                    type: "numeric",
                                    minValue: 1,
                                    maxValue: 12,
                                    minLength: 1,
                                    maxLength: 2,
                                    text: "Please correct your input. The value should be between 1 and 12."
                                }
                            ]
                        },
                        {   
                            name: "M2MM",
                            type: "text",
                            title: "MM",
                            // isRequired: true,
                            startWithNewLine: false,
                            validators: [
                                {
                                    type: "expression",
                                    expression: "{M2MM} >= '00' and {M2MM} <= '59'",
                                    minLength: 2,
                                    maxLength: 2,
                                    text: "Please correct your input. The value should be between 00 and 59."
                                }
                            ]
                        },
                        {   
                            name: "M2AP",
                            type: "radiogroup",
                            title: " ",
                            // isRequired: true,
                            startWithNewLine: false,
                            colCount: 2,
                            choices: [
                                "PM",
                                "AM"
                            ] 
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M3",
                    type: "radiogroup",
                    title: "About how long did it take you to fall asleep?",
                    // isRequired: true,
                    colCount: 1,
                    choices: [
                        "0-15 minutes",
                        "15-30 minutes",
                        "30-45 minutes",
                        "45-60 minutes",
                        "more than 60 minutes"
                    ] 
                }
            ]
        },
        {
            questions: [
                {
                    name: "M4",
                    type: "radiogroup",
                    title: "Did you go to bed at about your usual time?",
                    // isRequired: true,
                    choices: [
                        "yes",
                        "no"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M4No",
                    type: "dropdown",
                    title: "You did not go to bed at your usual time, so was it...Scroll down to select options.",
                    visibleIf: "{M4} = 'no'",
                    // isRequired: true,
                    choices: [
                        "2 or more hours later than usual",
                        "1-2 hours later than usual",
                        "Less than 1 hour later than usual",
                        "Less than 1 hour earlier than usual",
                        "1-2 hours earlier than usual",
                        "2 or more hours earlier than usual",
                    ]
                }
            ]
        },
        {
            questions: [
                {   
                    name: "M5",
                    type: "panel",
                    innerIndent: 1,
                    title: "What time did you wake up? (Input numbers for time)",
                    elements: [
                        {   
                            name: "M5HH",
                            type: "text",
                            title: "HH",
                            // isRequired: true,
                            validators: [
                                {
                                    type: "numeric",
                                    minValue: 1,
                                    maxValue: 12,
                                    minLength: 1,
                                    maxLength: 2,
                                    text: "Please correct your input. The value should be between 1 and 12."
                                }
                            ]
                        },
                        {   
                            name: "M5MM",
                            type: "text",
                            title: "MM",
                            // isRequired: true,
                            startWithNewLine: false,
                            validators: [
                                {
                                    type: "expression",
                                    expression: "{M5MM} >= '00' and {M5MM} <= '59'",
                                    minLength: 2,
                                    maxLength: 2,
                                    text: "Please correct your input. The value should be between 00 and 59."
                                }
                            ]
                        },
                        {   
                            name: "M5AP",
                            type: "radiogroup",
                            title: " ",
                            // isRequired: true,
                            startWithNewLine: false,
                            colCount: 2,
                            choices: [
                                "PM",
                                "AM"
                            ] 
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M6",
                    type: "radiogroup",
                    title: "How many times did you wake up in the night?",
                    // isRequired: true,
                    colCount: 1,
                    choices: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "more than 4"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M7",
                    type: "radiogroup",
                    title: "How well did you sleep?",
                    // isRequired: true,
                    colCount: 1,
                    choices: [
                        "Very Poor",
                        "Poor",
                        "Average",
                        "Good",
                        "Very Good"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M8",
                    type: "radiogroup",
                    title: "Where are you right now?",
                    // isRequired: true,
                    colCount: 1,
                    hasOther: true,
                    otherText: "Other",
                    otherPlaceHolder: "Somewhere else, please state.",
                    choices: [
                        "Home",
                        "School",
                        "Organized activity (e.g. sport, music)"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M9",
                    type: "checkbox",
                    title: "Who are you with right now? Scroll down and check all that apply.",
                    // isRequired: true,
                    hasOther: true,
                    otherText: "Other",
                    otherPlaceHolder: "Other, please state.",
                    choices: ["Nobody; I'm by myself", "Family", "Teacher", "Other Grown Ups", "Friend(s)",
                        "Boyfriend or Girlfriend", "Classmates"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M10",
                    type: "dropdown",
                    title: "In the last 3 hours, how many caffeinated beverages (like soda, energy drinks, coffee, or tea) have you had? Scroll down for choices.",
                    // isRequired: true,
                    choicesMin: 0,
                    choicesMax: 10
                }
            ]
        },
        {
            questions: [
                {
                    name: "M11",
                    type: "matrixdynamic",
                    title: "How are you feeling right now? Check all that apply.",
                    addRowText: "Add Feeling",
                    columnColCount: 1,
                    cellType: "radiogroup",
                    choices: [
                        "A little",
                        "Somewhat",
                        "Moderately",
                        "A lot"
                    ],
                    rowCount: 1,
                    columns: [
                        {
                            name: "M11Feeling",
                            cellType: "dropdown",
                            title: "How are you feeling right now?",
                            isRequired: true,
                            minWidth: "300px",
                            hasOther: true,
                            otherText: "Other",
                            otherPlaceHolder: "What is the other feeling?",
                            choices: ["Happy","Relaxed","Sad","Lonely","Worried","Tense","Frustrated",
                            "Mad","Annoyed or Irritated","Stressed","Tired","Focused","Rushed"]
                        },
                        {
                            name: "M11Scale",
                            title: "How much are you feeling..."
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "M12",
                    type: "",
                    title: 'On a scale of 1 to 10, where 1 means you have "little or no stress" and 10 means you have "a great deal of stress," how would you rate your stress in the last hour? Scroll down to select.',
                    
                }
            ]
        }
    ]
}