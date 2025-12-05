export const grade4CurriculumData = {
    grade: "Grade 4",
    term: "Term 1",
    year: "Year 5",
    description: "Grade 4 introduces more advanced concepts in all subjects, focusing on critical thinking, detailed analysis, and practical application of skills.",
    subjects: [
        "English / Literacy",
        "Mathematics",
        "Science",
        "Social Studies",
        "ICT / Digital Skills"
    ],
    alignments: [
        { name: "Common Core State Standards (USA)", url: "https://www.corestandards.org/" },
        { name: "UK National Curriculum – Key Stage 2", url: "https://www.gov.uk/national-curriculum" },
        { name: "Cambridge Primary Curriculum", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-primary/" },
        { name: "UNESCO Global Education Framework", url: "https://www.unesco.org/en/education" },
        { name: "OECD Global Competence Skills", url: "https://www.oecd.org/education/" }
    ],
    terms: [
        {
            term: "Term 1",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English / Literacy",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Reading fluency", topics: "multi-paragraph texts", activities: "Guided reading", assessment: "Fluent accuracy" },
                        { week: 2, objective: "Grammar", topics: "subject/verb agreement", activities: "Sentence fixing", assessment: "Correct usage" },
                        { week: 3, objective: "Vocabulary growth", topics: "prefixes/until", activities: "Word build", assessment: "Applies correctly" },
                        { week: 4, objective: "Writing", topics: "paragraph structure", activities: "Topic sentence", assessment: "Writes clearly" },
                        { week: 5, objective: "Comprehension", topics: "story analysis", activities: "Inference", assessment: "Understands" },
                        { week: 6, objective: "Tenses", topics: "perfect tenses", activities: "Worksheet", assessment: "Correct" },
                        { week: 7, objective: "Descriptive writing", topics: "imagery", activities: "Write with detail", assessment: "Expressive" },
                        { week: 8, objective: "Listening & speaking", topics: "class discussion", activities: "Debate", assessment: "Confident" },
                        { week: 9, objective: "Editing", topics: "self-correction", activities: "Rewrite draft", assessment: "Improves" },
                        { week: 10, objective: "Review", topics: "skill integration", activities: "Reading showcase", assessment: "Proficient" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Place value", topics: "up to 100,000", activities: "Digit expansion", assessment: "Identifies" },
                        { week: 2, objective: "Addition", topics: "4-digit", activities: "Carrying", assessment: "Correct" },
                        { week: 3, objective: "Subtraction", topics: "4-digit", activities: "Borrowing", assessment: "Correct" },
                        { week: 4, objective: "Multiplication", topics: "x6, x7, x8, x9", activities: "Chanting", assessment: "Recall" },
                        { week: 5, objective: "Division", topics: "short division", activities: "Worksheet", assessment: "Accurate" },
                        { week: 6, objective: "Fractions", topics: "mixed numbers", activities: "Fraction models", assessment: "Understands" },
                        { week: 7, objective: "Measurement", topics: "length & perimeter", activities: "Shape tracing", assessment: "Calculates" },
                        { week: 8, objective: "Time", topics: "24-hour clock", activities: "Clock reading", assessment: "Correct" },
                        { week: 9, objective: "Money", topics: "budgeting", activities: "Mock shopping", assessment: "Solves" },
                        { week: 10, objective: "Review", topics: "problem solving", activities: "Mixed tasks", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Matter", topics: "solid/liquid/gas", activities: "Identify", assessment: "Sort categories" },
                        { week: 2, objective: "Heat transfer", topics: "conduction", activities: "Experiment", assessment: "Explains" },
                        { week: 3, objective: "Sound", topics: "vibration", activities: "Rubber band test", assessment: "Explains" },
                        { week: 4, objective: "Light", topics: "reflection & refraction", activities: "Flashlight test", assessment: "Understands" },
                        { week: 5, objective: "Electricity", topics: "circuits", activities: "Battery lamp", assessment: "Builds" },
                        { week: 6, objective: "Force", topics: "gravity", activities: "Falling objects", assessment: "Observes" },
                        { week: 7, objective: "Energy", topics: "sources", activities: "Sorting", assessment: "Classifies" },
                        { week: 8, objective: "Earth", topics: "layers", activities: "Diagram", assessment: "Labels" },
                        { week: 9, objective: "Atmosphere", topics: "air composition", activities: "Balloon test", assessment: "Understands" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Society", topics: "roles", activities: "Discussion", assessment: "Understands" },
                        { week: 2, objective: "History", topics: "ancient civilizations", activities: "Research", assessment: "Explains" },
                        { week: 3, objective: "Government", topics: "types", activities: "Comparison", assessment: "Identifies" },
                        { week: 4, objective: "Geography", topics: "continents", activities: "World map", assessment: "Labels" },
                        { week: 5, objective: "Culture", topics: "traditions", activities: "Research project", assessment: "Shares" },
                        { week: 6, objective: "Trade", topics: "goods & services", activities: "Simulation", assessment: "Understands" },
                        { week: 7, objective: "Environment", topics: "protection", activities: "Waste sorting", assessment: "Practices" },
                        { week: 8, objective: "Migration", topics: "movement", activities: "Examples", assessment: "Understands" },
                        { week: 9, objective: "Citizenship", topics: "responsibility", activities: "Role-play", assessment: "Participates" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Knowledge", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Skills",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Typing", topics: "speed & accuracy", activities: "Typing drills", assessment: "Improves" },
                        { week: 2, objective: "Docs editing", topics: "Formatting", activities: "Style headings", assessment: "Uses" },
                        { week: 3, objective: "Spreadsheets", topics: "Tabulation", activities: "Table entry", assessment: "Understands" },
                        { week: 4, objective: "PowerPoint", topics: "Presentation", activities: "Slide-building", assessment: "Creates" },
                        { week: 5, objective: "Internet research", topics: "Source reliability", activities: "Fact-checking", assessment: "Distinguishes" },
                        { week: 6, objective: "Digital safety", topics: "Password security", activities: "Scenario analysis", assessment: "Understands" },
                        { week: 7, objective: "Coding", topics: "Logic", activities: "Scratch", assessment: "Correct" },
                        { week: 8, objective: "File management", topics: "Folders", activities: "Sorting", assessment: "Organized" },
                        { week: 9, objective: "Multimedia", topics: "Images & sound", activities: "Create poster", assessment: "Creative" },
                        { week: 10, objective: "Review", topics: "Final task", activities: "ICT portfolio", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour tones", topics: "Shade mixing", activities: "Creates", assessment: "Creates" },
                        { week: 2, objective: "Portrait detail", topics: "Human figure", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 3, objective: "Landscape", topics: "Distance & size", activities: "Perspective", assessment: "Perspective" },
                        { week: 4, objective: "Texture", topics: "Charcoal strokes", activities: "Skill", assessment: "Skill" },
                        { week: 5, objective: "Clay", topics: "Shape model", activities: "3D", assessment: "3D" },
                        { week: 6, objective: "Pattern design", topics: "Repeated motifs", activities: "Consistency", assessment: "Consistency" },
                        { week: 7, objective: "Cultural art", topics: "Symbols", activities: "Awareness", assessment: "Awareness" },
                        { week: 8, objective: "Poster design", topics: "Graphic layout", activities: "Creativity", assessment: "Creativity" },
                        { week: 9, objective: "Art critique", topics: "Evaluate art", activities: "Insight", assessment: "Insight" },
                        { week: 10, objective: "Exhibition", topics: "Class gallery", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythmic dictation", topics: "Clap patterns", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch accuracy", topics: "Vocal control", activities: "Correct", assessment: "Correct" },
                        { week: 3, objective: "Tempo change", topics: "Speed training", activities: "Flexibility", assessment: "Flexibility" },
                        { week: 4, objective: "Melody", topics: "Keyboard/recorder", activities: "Playing", assessment: "Playing" },
                        { week: 5, objective: "Notation", topics: "Quarter/half note", activities: "Reads", assessment: "Reads" },
                        { week: 6, objective: "Harmony", topics: "Group work", activities: "Blends", assessment: "Blends" },
                        { week: 7, objective: "Composition", topics: "Simple writing", activities: "Creates", assessment: "Creates" },
                        { week: 8, objective: "World music", topics: "Cultural exposure", activities: "Appreciates", assessment: "Appreciates" },
                        { week: 9, objective: "Dance", topics: "Movement", activities: "Expression", assessment: "Expression" },
                        { week: 10, objective: "Music show", topics: "Performance", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Flexibility", topics: "Stretching", activities: "Improvement", assessment: "Improvement" },
                        { week: 2, objective: "Strength", topics: "Push-ups", activities: "Effort", assessment: "Effort" },
                        { week: 3, objective: "Control", topics: "Ball + steps", activities: "Coordination", assessment: "Coordination" },
                        { week: 4, objective: "Speed", topics: "Short runs", activities: "Time", assessment: "Time" },
                        { week: 5, objective: "Balance", topics: "One-leg", activities: "Stability", assessment: "Stability" },
                        { week: 6, objective: "Agility", topics: "Quick direction", activities: "Reaction", assessment: "Reaction" },
                        { week: 7, objective: "Endurance", topics: "Jogging", activities: "Stamina", assessment: "Stamina" },
                        { week: 8, objective: "Team sport", topics: "Basketball", activities: "Cooperation", assessment: "Cooperation" },
                        { week: 9, objective: "Aerobics", topics: "Dance", activities: "Energy", assessment: "Energy" },
                        { week: 10, objective: "Sports challenge", topics: "Games", activities: "Participation", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-respect", topics: "Daily affirmations", activities: "Confidence", assessment: "Confidence" },
                        { week: 2, objective: "Peer interaction", topics: "Group work", activities: "Communication", assessment: "Communication" },
                        { week: 3, objective: "Decision making", topics: "Choice activities", activities: "Judgement", assessment: "Judgement" },
                        { week: 4, objective: "Kindness", topics: "Helping acts", activities: "Evidence", assessment: "Evidence" },
                        { week: 5, objective: "Self-awareness", topics: "Personal qualities", activities: "Understanding", assessment: "Understanding" },
                        { week: 6, objective: "Leadership", topics: "Team tasks", activities: "Initiative", assessment: "Initiative" },
                        { week: 7, objective: "Responsibility", topics: "Assigned roles", activities: "Consistency", assessment: "Consistency" },
                        { week: 8, objective: "Health", topics: "Hygiene", activities: "Application", assessment: "Application" },
                        { week: 9, objective: "Ethics", topics: "Right & wrong", activities: "Reasoning", assessment: "Reasoning" },
                        { week: 10, objective: "Character celebration", topics: "Recognition", activities: "Growth", assessment: "Growth" }
                    ]
                }
            ]
        }
    ]
};
