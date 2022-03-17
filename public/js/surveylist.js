export const uncTeenSurvey = 
{
    title: "UNC Teen Survey",
    showProgressBar: "bottom",
    goNextPageAutomatic: false, // true
    showNavigationButtons: true, // false
    showQuestionNumbers: "off",
    sendResultOnPageNext : true,
    focusFirstQuestionAutomatic: false,
    clearInvisibleValues: "onHidden",
    pages: [
        {
            questions: [
                {
                    name: "Q1",
                    type: "radiogroup",
                    title: "Have you put on your armband on today?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "Yes",
                        },
                        {
                            "value": "1",
                            "text": "No"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q2",
                    type: "text",
                    title: "About what time did you fall asleep last night?",
                    inputType: "time",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q3",
                    type: "radiogroup",
                    title: "About how long did it take you to fall asleep?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "0-15 minutes",
                        },
                        {
                            "value": "1",
                            "text": "15-30 minutes",
                        },
                        {
                            "value": "2",
                            "text": "30-45 minutes",
                        },
                        {
                            "value": "3",
                            "text": "45-60 minutes",
                        },
                        {
                            "value": "4",
                            "text": "more than 60 minutes"
                        }
                    ] 
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q4",
                    type: "radiogroup",
                    title: "Did you go to bed at about your usual time?",
                    isRequired: true,
                    choices: [
                        {
                            "value": "0",
                            "text": "Yes",
                        },
                        {
                            "value": "1",
                            "text": "No"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q5",
                    type: "dropdown",
                    title: "You did not go to bed at your usual time, so was it...Scroll down to select options.",
                    visibleIf: "{Q4} = '1'",
                    isRequired: true,
                    choices: [
                        {
                            "value": "0",
                            "text": "2 or more hours later than usual",
                        },
                        {
                            "value": "1",
                            "text": "1-2 hours later than usual",
                        },
                        {
                            "value": "2",
                            "text": "Less than 1 hour later than usual",
                        },
                        {
                            "value": "3",
                            "text": "Less than 1 hour earlier than usual",
                        },
                        {
                            "value": "4",
                            "text": "1-2 hours earlier than usual",
                        },
                        {
                            "value": "5",
                            "text": "2 or more hours earlier than usual"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {   
                    name: "Q6",
                    type: "text",
                    title: "What time did you wake up?",
                    inputType: "time",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q7",
                    type: "radiogroup",
                    title: "How many times did you wake up in the night?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "0"
                        },
                        {
                            "value": "1",
                            "text": "1"
                        },
                        {
                            "value": "2",
                            "text": "2"
                        },
                        {
                            "value": "3",
                            "text": "3"
                        },
                        {
                            "value": "4",
                            "text": "4"
                        },
                        {
                            "value": "5",
                            "text": "more than 4"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q8",
                    type: "radiogroup",
                    title: "How well did you sleep?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "Very Poor",
                        },
                        {
                            "value": "1",
                            "text": "Poor",
                        },
                        {
                            "value": "2",
                            "text": "Average",
                        },
                        {
                            "value": "3",
                            "text": "Good",
                        },
                        {
                            "value": "4",
                            "text": "Very Good"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                // {
                //     name: "M8",
                //     type: "radiogroup",
                //     title: "Where are you right now?",
                //     isRequired: true,
                //     colCount: 1,
                //     hasOther: true,
                //     otherText: "Other",
                //     otherPlaceHolder: "Somewhere else, please state.",
                //     choices: [
                //         "Home",
                //         "School",
                //         "Organized activity (e.g. sport, music)"
                //     ]
                // }
                {
                    name: "Q9",
                    type: "radiogroup",
                    title: "Where are you right now?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "Home",
                        },
                        {
                            "value": "1",
                            "text": "School",
                        },
                        {
                            "value": "2",
                            "text": "Organized activity (e.g. sport, music)",
                        },
                        {
                            "value": "3",
                            "text": "Other"
                        }
                    ]
                },
                {
                    name: "Q9A",
                    type: "text",
                    title: "Somewhere else, please state.",
                    visibleIf: "{Q9} = '3'",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q10",
                    type: "checkbox",
                    title: "Who are you with right now? Check all that apply.",
                    isRequired: true,
                    choices: [
                        {
                            "value": "0",
                            "text": "Nobody; I'm by myself",
                        },
                        {
                            "value": "1",
                            "text": "Family",
                        },
                        {
                            "value": "2",
                            "text": "Teacher",
                        },
                        {
                            "value": "3",
                            "text": "Other Grown Ups",
                        },
                        {
                            "value": "4",
                            "text": "Friend(s)",
                        },
                        {
                            "value": "5",
                            "text": "Boyfriend or Girlfriend",
                        },
                        {
                            "value": "6",
                            "text": "Classmates",
                        },
                        {
                            "value": "7",
                            "text": "Other"
                        }
                    ]
                },
                {
                    name: "Q10A",
                    type: "text",
                    title: "Other, please state.",
                    visibleIf: "{Q10} contains '7'",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q11",
                    type: "dropdown",
                    title: "In the last 3 hours, how many caffeinated beverages (like soda, energy drinks, coffee, or tea) have you had? Scroll down for choices.",
                    isRequired: true,
                    choicesMin: 0,
                    choicesMax: 10
                }
            ]
        },
        {
            questions: [
                {   
                    name: "Q12",
                    type: "checkbox",
                    title: "How are you feeling right now? Check all that apply.",
                    isRequired: true,
                    colCount: 2,
                    choices: [
                        {
                            "value": "0",
                            "text": "Happy",
                        },
                        {
                            "value": "1",
                            "text": "Relaxed",
                        },
                        {
                            "value": "2",
                            "text": "Sad",
                        },
                        {
                            "value": "3",
                            "text": "Lonely",
                        },
                        {
                            "value": "4",
                            "text": "Worried",
                        },
                        {
                            "value": "5",
                            "text": "Tense",
                        },
                        {
                            "value": "6",
                            "text": "Frustrated",
                        },
                        {
                            "value": "7",
                            "text": "Mad",
                        },
                        {
                            "value": "8",
                            "text": "Annoyed or Irritated",
                        },
                        {
                            "value": "9",
                            "text": "Stressed",
                        },
                        {
                            "value": "10",
                            "text": "Tired",
                        },
                        {
                            "value": "11",
                            "text": "Focused",
                        },
                        {
                            "value": "12",
                            "text": "Rushed",
                        },
                        {
                            "value": "13",
                            "text": "Other"
                        }                 
                    ]
                },
                {
                    
                    name: "Q12A",
                    type: "text",
                    title: "What is the other feeling?",
                    visibleIf: "{Q12} contains '13'",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    type: "matrix",
                    name: "Q13",
                    title: "How much are you feeling...?",
                    visibleIf: "{Q12.length} > 0",
                    rowsVisibleIf: "{Q12} contains {item}",
                    isRequired: true,
                    isAllRowRequired: true,
                    columns: [
                        {
                            value: "S0",
                            text: "A little",
                        },
                        {
                            value: "S1",
                            text: "Somewhat",
                        },
                        {
                            value: "S2",
                            text: "Moderately",
                        },
                        {
                            value: "S3",
                            text: "A lot"
                        }
                    ],
                    rows: [
                        {
                            value: "0",
                            text: "happy",
                        }, {
                            value: "1",
                            text: "relaxed",
                        }, {
                            value: "2",
                            text: "sad",
                        }, {
                            value: "3",
                            text: "lonely",
                        },
                        {
                            value: "4",
                            text: "worried",
                        },
                        {
                            value: "5",
                            text: "tense",
                        },
                        {
                            value: "6",
                            text: "frustrated",
                        },
                        {
                            value: "7",
                            text: "mad",
                        },
                        {
                            value: "8",
                            text: "annoyed or irritated",
                        },
                        {
                            value: "9",
                            text: "stressed",
                        },
                        {
                            value: "10",
                            text: "tired",
                        },
                        {
                            value: "11",
                            text: "focused",
                        },
                        {
                            value: "12",
                            text: "rushed",
                        },
                        {
                            value: "13",
                            text: "that other feeling"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q14",
                    type: "dropdown",
                    title: 'On a scale of 1 to 10, where 1 means you have "little or no stress" and 10 means you have "a great deal of stress," how would you rate your stress in the last hour? Scroll down to select.',
                    isRequired: true,
                    choicesMin: 1,
                    choicesMax: 10
                }
            ]
        },
        {
            questions: [
                {   
                    name: "Q15",
                    type: "checkbox",
                    title: "What have you felt stressed about? Check all that apply. Something with...",
                    isRequired: true,
                    colCount: 2,
                    choices: [
                        {
                            "value": "0",
                            "text": "School work or grades",
                        },
                        {
                            "value": "1",
                            "text": "A teacher",
                        },
                        {
                            "value": "2",
                            "text": "A boyfriend or girlfriend",
                        },
                        {
                            "value": "3",
                            "text": "Friend(s)",
                        },
                        {
                            "value": "4",
                            "text": "Other kids (who aren't friends)",
                        },
                        {
                            "value": "5",
                            "text": "My parents",
                        },
                        {
                            "value": "6",
                            "text": "My brother(s) or sister(s)",
                        },
                        {
                            "value": "7",
                            "text": "Other family members",
                        },
                        {
                            "value": "8",
                            "text": "My health",
                        },
                        {
                            "value": "9",
                            "text": "How I look",
                        },
                        {
                            "value": "10",
                            "text": "An activity outside of school",
                        },
                        {
                            "value": "11",
                            "text": "Something else"
                        }               
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    type: "matrix",
                    name: "Q16",
                    title: "To what extent did...make you stressed?",
                    visibleIf: "{Q15} contains '0' or {Q15} contains '1' or {Q15} contains '2' or {Q15} contains '3' or {Q15} contains '4' or {Q15} contains '5' or {Q15} contains '6' or {Q15} contains '7' or {Q15} contains '8' or {Q15} contains '9'",
                    rowsVisibleIf: "{Q15} contains {item}",
                    isRequired: true,
                    isAllRowRequired: true,
                    columns: [
                        {
                            value: "S0",
                            text: "Not at all",
                        },
                        {
                            value: "S1",
                            text: "Just a little",
                        },
                        {
                            value: "S2",
                            text: "Somewhat",
                        },
                        {
                            value: "S3",
                            text: "A lot"
                        }
                    ],
                    rows: [
                        {
                            value: "0",
                            text: "school work or grades",
                        }, {
                            value: "1",
                            text: "a teacher",
                        }, {
                            value: "2",
                            text: "a boyfriend or girlfriend",
                        }, {
                            value: "3",
                            text: "friend(s)",
                        },
                        {
                            value: "4",
                            text: "other kids (who aren't friends)",
                        },
                        {
                            value: "5",
                            text: "my parents",
                        },
                        {
                            value: "6",
                            text: "my brother(s) or sister(s)",
                        },
                        {
                            value: "7",
                            text: "other family members",
                        },
                        {
                            value: "8",
                            text: "my health",
                        },
                        {
                            value: "9",
                            text: "how I look",
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q17",
                    type: "text",
                    title: "What activity outside of school were you doing when you felt stressed?",
                    visibleIf: "{Q15} contains '10'",
                    isRequired: true
                },
                {
                    name: "Q17A",
                    type: "radiogroup",
                    title: "To what extent did doing an activity outside of school make you stressed?",
                    visibleIf: "{Q17} notempty",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value: "S0",
                            text: "Not at all",
                        },
                        {
                            value: "S1",
                            text: "Just a little",
                        },
                        {
                            value: "S2",
                            text: "Somewhat",
                        },
                        {
                            value: "S3",
                            text: "A lot"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q18",
                    type: "text",
                    title: "What was the something else that you were doing that made you feel stressed?",
                    visibleIf: "{Q15} contains '11'",
                    isRequired: true
                },
                {
                    name: "Q18A",
                    type: "radiogroup",
                    title: "To what extent did doing something else make you stressed?",
                    visibleIf: "{Q18} notempty",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value: "S0",
                            text: "Not at all",
                        },
                        {
                            value: "S1",
                            text: "Just a little",
                        },
                        {
                            value: "S2",
                            text: "Somewhat",
                        },
                        {
                            value: "S3",
                            text: "A lot"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q19",
                    type: "checkbox",
                    title: "How has your stress affected you? Check all that apply. I have...",
                    isRequired: true,
                    choices: [
                        {
                            value: "0",
                            text: "had trouble focusing",
                        },
                        {
                            value: "1",
                            text: "done something I wish I hadn't",
                        },
                        {
                            value: "2",
                            text: "had trouble getting my work done",
                        },
                        {
                            value: "3",
                            text: "felt bad about myself",
                        },
                        {
                            value: "4",
                            text: "said or done something that wasn't kind",
                        },
                        {
                            value: "5",
                            text: "tense or sick feelings in my body",
                        },
                        {
                            value: "6",
                            text: "been easily annoyed or irritated",
                        },
                        {
                            value: "7",
                            text: "withdrawn from things I usually like to do",
                        },
                        {
                            value: "8",
                            text: "had less energy than usual",
                        },
                        {
                            value: "9",
                            text: "none of these"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q20",
                    type: "radiogroup",
                    title: "How hard has it been to manage your stress?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value: "0",
                            text: "Not at all",
                        },
                        {
                            value: "1",
                            text: "Just a little",
                        },
                        {
                            value: "2",
                            text: "Somewhat",
                        },
                        {
                            value: "3",
                            text: "A lot"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q21",
                    type: "radiogroup",
                    title: "Did you do anything that helped you feel better?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "Yes",
                        },
                        {
                            "value": "1",
                            "text": "No"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q22",
                    type: "checkbox",
                    title: "Did you do any of the following? Check all that apply. I...",
                    visibleIf: "{Q21} = '0'",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "Made a plan for what I can do about it",
                        },
                        {
                            "value": "1",
                            "text": "Just let it go and accepted what happened",
                        },
                        {
                            "value": "2",
                            "text": "Thought about it differently",
                        },
                        {
                            "value": "3",
                            "text": "Did something to calm myself down",
                        },
                        {
                            "value": "4",
                            "text": "Got support",
                        },
                        {
                            "value": "5",
                            "text": "Did something else"
                        }
                    ]
                },
                {
                    name: "Q22A",
                    type: "text",
                    title: "What was the something else that you tried as a strategy?",
                    visibleIf: "{Q22} contains '5'",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q23",
                    type: "checkbox",
                    title: "When I tried to change how I was thinking I... (Check all that apply)",
                    isRequired: true,
                    colCount: 1,
                    visibleIf: "{Q22} contains '2'",
                    choices: [
                        {
                            "value": "0",
                            "text": "told myself something positive",
                        },
                        {
                            "value": "1",
                            "text": "thought about something good",
                        },
                        {
                            "value": "2",
                            "text": "thought about it from a different perspective",
                        },
                        {
                            "value": "3",
                            "text": "thought about something positive that could come of it",
                        },
                        {
                            "value": "4",
                            "text": "thought about the consequences"
                        }              
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q23",
                    type: "checkbox",
                    title: "When I did something to calm myself down I... (Check all that apply)",
                    isRequired: true,
                    colCount: 1,
                    visibleIf: "{Q22} contains '3'",
                    choices: [
                        {
                            "value": "0",
                            "text": "took deep breaths",
                        },
                        {
                            "value": "1",
                            "text": "took a walk or walked away",
                        },
                        {
                            "value": "2",
                            "text": "listened to music",
                        },
                        {
                            "value": "3",
                            "text": "exercised",
                        },
                        {
                            "value": "4",
                            "text": "did something else that was fun or relaxing"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "Q24",
                    type: "checkbox",
                    title: "I got support from... (Check all that apply)",
                    isRequired: true,
                    colCount: 1,
                    visibleIf: "{Q22} contains '4'",
                    choices: [
                        {
                            "value": "0",
                            "text": "a friend, boyfriend, or girlfriend",
                        },
                        {
                            "value": "1",
                            "text": "a teacher or another adult at school",
                        },
                        {
                            "value": "2",
                            "text": "a parent",
                        },
                        {
                            "value": "3",
                            "text": "another adult"
                        }
                    ]
                }
            ]
        },
        // {
        //     questions: [
        //         {
        //             name: "Q25",
        //             type: "radiogroup",
        //             title: "Did you wear your armband for most of the day?",
        //             isRequired: true,
        //             colCount: 1,
        //             choices: [
        //                 {
        //                     "value": "0",
        //                     "text": "Yes",
        //                 },
        //                 {
        //                     "value": "1",
        //                     "text": "No"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     questions: [
        //         {
        //             name: "Q26",
        //             type: "radiogroup",
        //             title: "Did you put your armband on the charger?",
        //             isRequired: true,
        //             colCount: 1,
        //             choices: [
        //                 {
        //                     "value": "0",
        //                     "text": "Yes",
        //                 },
        //                 {
        //                     "value": "1",
        //                     "text": "No"
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ]
};

export const salzburg =
{
    title: "Salzburg Suicide Process Questionnaire",
    showProgressBar: "bottom",
    goNextPageAutomatic: false, // true
    showNavigationButtons: true, // false
    showQuestionNumbers: "off",
    sendResultOnPageNext : true,
    focusFirstQuestionAutomatic: false,
    clearInvisibleValues: "onHidden",
    pages: [
        {
            questions: [
                {
                    name: "M1",
                    type: "radiogroup",
                    title: "",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            "value": "0",
                            "text": "Yes",
                        },
                        {
                            "value": "1",
                            "text": "No"
                        }
                    ]
                }
            ]
        }
    ]
};