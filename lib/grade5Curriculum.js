export const grade5CurriculumData = {
    grade: "Grade 5",
    term: "Term 1",
    year: "Year 6",
    description: "Grade 5 builds on foundational skills with advanced comprehension, multi-step problem solving, scientific inquiry, and digital fluency for independent learning.",
    subjects: [
        "English / Literacy",
        "Mathematics",
        "Science",
        "Social Studies",
        "ICT / Digital Literacy"
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
                        { week: 1, objective: "Improving comprehension", topics: "Reading longer passages", activities: "Guided reading", assessment: "Accurate responses" },
                        { week: 2, objective: "Grammar mastery", topics: "noun types", activities: "Sorting", assessment: "Correct identification" },
                        { week: 3, objective: "Vocabulary strengthening", topics: "prefix/suffix", activities: "Word building", assessment: "Applies accurately" },
                        { week: 4, objective: "Writing", topics: "5-paragraph essay", activities: "Planning", assessment: "Clear structure" },
                        { week: 5, objective: "Comprehension", topics: "fact vs opinion", activities: "Sorting", assessment: "Understands logic" },
                        { week: 6, objective: "Tenses", topics: "perfect tenses", activities: "Grammar exercises", assessment: "Correct usage" },
                        { week: 7, objective: "Creative writing", topics: "narrative", activities: "Writing story", assessment: "Expression" },
                        { week: 8, objective: "Public speaking", topics: "Oral presentations", activities: "Short talk", assessment: "Confidence" },
                        { week: 9, objective: "Editing revising", topics: "Proofreading", activities: "Rewrite draft", assessment: "Improvement" },
                        { week: 10, objective: "Review", topics: "Integrated language", activities: "Reading showcase", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Place value", topics: "up to 1,000,000", activities: "Digit identification", assessment: "Understands" },
                        { week: 2, objective: "Addition", topics: "5-digit", activities: "Column arithmetic", assessment: "Correct" },
                        { week: 3, objective: "Subtraction", topics: "5-digit", activities: "Borrowing", assessment: "Correct" },
                        { week: 4, objective: "Multiplication", topics: "×2-digit numbers", activities: "Lattice/column", assessment: "Accuracy" },
                        { week: 5, objective: "Division", topics: "Long division", activities: "Step procedure", assessment: "Correct" },
                        { week: 6, objective: "Fractions", topics: "equivalent fractions", activities: "Fraction strips", assessment: "Understands" },
                        { week: 7, objective: "Decimals", topics: "place value", activities: "Decimal chart", assessment: "Correct" },
                        { week: 8, objective: "Measurement", topics: "length & area", activities: "Shape tasks", assessment: "Accurate" },
                        { week: 9, objective: "Time", topics: "elapsed time", activities: "Word problems", assessment: "Correct" },
                        { week: 10, objective: "Review", topics: "Math application", activities: "Mixed practice", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Classification", topics: "living vs nonliving", activities: "Sorting", assessment: "Correct" },
                        { week: 2, objective: "Cells", topics: "basic cell structure", activities: "Diagram", assessment: "Accuracy" },
                        { week: 3, objective: "Body systems", topics: "digestive", activities: "Model", assessment: "Understands" },
                        { week: 4, objective: "Matter", topics: "states", activities: "Testing", assessment: "Identifies" },
                        { week: 5, objective: "Heat", topics: "transfer", activities: "Conductivity test", assessment: "Explains" },
                        { week: 6, objective: "Sound", topics: "frequency", activities: "Rubber band", assessment: "Understands" },
                        { week: 7, objective: "Energy", topics: "sources", activities: "Sorting", assessment: "Classifies" },
                        { week: 8, objective: "Weather patterns", topics: "temperature", activities: "Chart", assessment: "Interprets" },
                        { week: 9, objective: "Earth", topics: "layers", activities: "Diagram", assessment: "Labels" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Understanding", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Family history", topics: "Generations", activities: "Family tree", assessment: "Completes" },
                        { week: 2, objective: "Evolution of communities", topics: "urban growth", activities: "Discussion", assessment: "Understands" },
                        { week: 3, objective: "Civics", topics: "citizen rights", activities: "Case analysis", assessment: "Applies" },
                        { week: 4, objective: "Trade history", topics: "ancient trade", activities: "Map simulation", assessment: "Understands" },
                        { week: 5, objective: "Geography", topics: "latitude/longitude", activities: "Atlas work", assessment: "Accurate" },
                        { week: 6, objective: "Culture", topics: "Traditions", activities: "Research", assessment: "Presentations" },
                        { week: 7, objective: "Government", topics: "Democracy", activities: "Role-play", assessment: "Understands" },
                        { week: 8, objective: "Environment", topics: "Pollution", activities: "Sorting", assessment: "Aware" },
                        { week: 9, objective: "World religions", topics: "Comparative", activities: "Chart", assessment: "Respectful" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Typing fluency", topics: "Touch typing", activities: "Timed drills", assessment: "Improves" },
                        { week: 2, objective: "Formatting text", topics: "Word processing", activities: "Formatting tasks", assessment: "Uses correctly" },
                        { week: 3, objective: "Spreadsheets", topics: "Entry & calculation", activities: "Totaling data", assessment: "Understands" },
                        { week: 4, objective: "Presentation design", topics: "PowerPoint", activities: "Slide creation", assessment: "Professional formatting" },
                        { week: 5, objective: "Online research", topics: "credible sources", activities: "Fact-checking", assessment: "Understands reliability" },
                        { week: 6, objective: "Digital security", topics: "passwords", activities: "Safety lesson", assessment: "Understands" },
                        { week: 7, objective: "Coding", topics: "block programming", activities: "Scratch", assessment: "Solves" },
                        { week: 8, objective: "File organization", topics: "Local & cloud storage", activities: "File sorting", assessment: "Responsible" },
                        { week: 9, objective: "Digital media", topics: "graphic design", activities: "Poster", assessment: "Creative" },
                        { week: 10, objective: "ICT review", topics: "Portfolio", activities: "Skill mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour mixing", topics: "Paint blends", activities: "Paint blends", assessment: "Colour clarity" },
                        { week: 2, objective: "Figure drawing", topics: "Human structure", activities: "Human structure", assessment: "Proportions" },
                        { week: 3, objective: "Landscape", topics: "Depth & distance", activities: "Depth & distance", assessment: "Perspective" },
                        { week: 4, objective: "Shading & texture", topics: "Pencil technique", activities: "Pencil technique", assessment: "Shading" },
                        { week: 5, objective: "Clay modeling", topics: "3D shapes", activities: "3D shapes", assessment: "Form accuracy" },
                        { week: 6, objective: "Pattern design", topics: "Motifs", activities: "Motifs", assessment: "Symmetry" },
                        { week: 7, objective: "Cultural art", topics: "Indigenous patterns", activities: "Indigenous patterns", assessment: "Understanding" },
                        { week: 8, objective: "Graphic art", topics: "Poster layout", activities: "Poster layout", assessment: "Communication" },
                        { week: 9, objective: "Art critique", topics: "Review", activities: "Review", assessment: "Insight" },
                        { week: 10, objective: "Showcase", topics: "Gallery", activities: "Gallery", assessment: "Presentation" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Listening & rhythm", topics: "Clap-back rhythm", activities: "Clap-back rhythm", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch recognition", topics: "Voice scale", activities: "Voice scale", assessment: "Consistency" },
                        { week: 3, objective: "Melody", topics: "Keyboard work", activities: "Keyboard work", assessment: "Playback" },
                        { week: 4, objective: "Harmony", topics: "Group singing", activities: "Group singing", assessment: "Blend" },
                        { week: 5, objective: "Notation", topics: "Staves & notes", activities: "Staves & notes", assessment: "Reading" },
                        { week: 6, objective: "Composition", topics: "Short music", activities: "Short music", assessment: "Creates" },
                        { week: 7, objective: "Music theory", topics: "keys & scales", activities: "keys & scales", assessment: "Identifies" },
                        { week: 8, objective: "Instrument use", topics: "Recorder", activities: "Recorder", assessment: "Skill" },
                        { week: 9, objective: "Rhythmic dance", topics: "Movement", activities: "Movement", assessment: "Coordination" },
                        { week: 10, objective: "Performance", topics: "Concert", activities: "Concert", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Stretching", topics: "Warm-up", activities: "Warm-up", assessment: "Flexibility" },
                        { week: 2, objective: "Strength", topics: "Sit-ups / planks", activities: "Sit-ups / planks", assessment: "Endurance" },
                        { week: 3, objective: "Balance", topics: "One-leg", activities: "One-leg", assessment: "Stability" },
                        { week: 4, objective: "Coordination", topics: "Ball drills", activities: "Ball drills", assessment: "Skill" },
                        { week: 5, objective: "Speed", topics: "Short runs", activities: "Short runs", assessment: "Improvement" },
                        { week: 6, objective: "Agility", topics: "Cones course", activities: "Cones course", assessment: "Precision" },
                        { week: 7, objective: "Aerobics", topics: "Dance", activities: "Dance", assessment: "Energy" },
                        { week: 8, objective: "Team sport", topics: "Basketball/Football", activities: "Basketball/Football", assessment: "Teamwork" },
                        { week: 9, objective: "Fitness", topics: "Jogging", activities: "Jogging", assessment: "Stamina" },
                        { week: 10, objective: "Sports challenge", topics: "Games", activities: "Games", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Confidence", topics: "Affirmations", activities: "Affirmations", assessment: "Positive attitude" },
                        { week: 2, objective: "Teamwork", topics: "Group task", activities: "Group task", assessment: "Cooperation" },
                        { week: 3, objective: "Empathy", topics: "Role-play", activities: "Role-play", assessment: "Understanding" },
                        { week: 4, objective: "Calmness", topics: "Breathing techniques", activities: "Breathing techniques", assessment: "Self-control" },
                        { week: 5, objective: "Integrity", topics: "Truth-telling", activities: "Truth-telling", assessment: "Honesty" },
                        { week: 6, objective: "Leadership", topics: "Lead task", activities: "Lead task", assessment: "Initiative" },
                        { week: 7, objective: "Responsibility", topics: "Class job", activities: "Class job", assessment: "Reliability" },
                        { week: 8, objective: "Decision making", topics: "Choice games", activities: "Choice games", assessment: "Judgement" },
                        { week: 9, objective: "Growth mindset", topics: "Challenge tasks", activities: "Challenge tasks", assessment: "Persistence" },
                        { week: 10, objective: "Reflection", topics: "Self-evaluation", activities: "Self-evaluation", assessment: "Awareness" }
                    ]
                }
            ]
        },
        {
            term: "Term 2",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English / Literacy",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Advanced comprehension", topics: "Informational text", activities: "Analysis", assessment: "Understands" },
                        { week: 2, objective: "Grammar", topics: "advanced clauses", activities: "Sentence joining", assessment: "Correct" },
                        { week: 3, objective: "Essay writing", topics: "Expository", activities: "Write essay", assessment: "Logical" },
                        { week: 4, objective: "Poetry analysis", topics: "literary devices", activities: "Identify", assessment: "Analytical" },
                        { week: 5, objective: "Editing techniques", topics: "polishing writing", activities: "Rewrite", assessment: "Accuracy" },
                        { week: 6, objective: "Vocabulary", topics: "Greek & Latin roots", activities: "Word study", assessment: "Understanding" },
                        { week: 7, objective: "Oral fluency", topics: "Speech training", activities: "Presentation", assessment: "Confidence" },
                        { week: 8, objective: "Debate", topics: "argument structure", activities: "Team debate", assessment: "Critical reasoning" },
                        { week: 9, objective: "Spelling", topics: "advanced patterns", activities: "Practice", assessment: "Correct" },
                        { week: 10, objective: "Review", topics: "Language showcase", activities: "Evaluation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication", topics: "3-digit × 2-digit", activities: "Column", assessment: "Accuracy" },
                        { week: 2, objective: "Division", topics: "long division & remainders", activities: "Step practice", assessment: "Correct" },
                        { week: 3, objective: "Fractions", topics: "add/subtract", activities: "Fraction pieces", assessment: "Correct" },
                        { week: 4, objective: "Fractions", topics: "multiply/divide", activities: "Models", assessment: "Understands" },
                        { week: 5, objective: "Decimals", topics: "add/subtract", activities: "Decimal column", assessment: "Correct" },
                        { week: 6, objective: "Percentages", topics: "simple conversion", activities: "Fraction-decimal conversion", assessment: "Accurate" },
                        { week: 7, objective: "Measurement", topics: "Volume", activities: "Water measure", assessment: "Understands" },
                        { week: 8, objective: "Geometry", topics: "angles & triangles", activities: "Angle finder", assessment: "Correct" },
                        { week: 9, objective: "Data", topics: "line graphs", activities: "Graph creation", assessment: "Interprets" },
                        { week: 10, objective: "Review", topics: "Problem solving", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Photosynthesis", topics: "plant nutrition", activities: "Diagram", assessment: "Understands" },
                        { week: 2, objective: "Ecosystems", topics: "food webs", activities: "Charts", assessment: "Understands" },
                        { week: 3, objective: "Animals", topics: "Adaptations", activities: "Examples", assessment: "Understands" },
                        { week: 4, objective: "Weather", topics: "air pressure", activities: "Balloon test", assessment: "Explains" },
                        { week: 5, objective: "Water behavior", topics: "states & density", activities: "Experiments", assessment: "Understands" },
                        { week: 6, objective: "Force", topics: "Magnetism", activities: "Magnet tasks", assessment: "Explains" },
                        { week: 7, objective: "Electricity", topics: "Conductors", activities: "Testing", assessment: "Understands" },
                        { week: 8, objective: "Earth rotation", topics: "day/night", activities: "Model", assessment: "Explains" },
                        { week: 9, objective: "Safety", topics: "lab & home", activities: "Case study", assessment: "Understands" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Colonial history", topics: "Origins", activities: "Timeline", assessment: "Understands" },
                        { week: 2, objective: "Independence", topics: "self-rule", activities: "Role-play", assessment: "Explains" },
                        { week: 3, objective: "Government structure", topics: "branches", activities: "Matching", assessment: "Correct" },
                        { week: 4, objective: "Economics", topics: "supply & demand", activities: "Trading game", assessment: "Understanding" },
                        { week: 5, objective: "World geography", topics: "time zones", activities: "Map activity", assessment: "Correct" },
                        { week: 6, objective: "Population", topics: "distribution", activities: "Data map", assessment: "Understands" },
                        { week: 7, objective: "Culture", topics: "languages", activities: "Comparative study", assessment: "Respectful" },
                        { week: 8, objective: "Human rights", topics: "Justice", activities: "Discussion", assessment: "Empathy" },
                        { week: 9, objective: "Media awareness", topics: "fake news", activities: "Critical thinking", assessment: "Aware" },
                        { week: 10, objective: "Review", topics: "Project", activities: "Presentation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Typing speed", topics: "Timed tests", activities: "Timed tests", assessment: "Improvement" },
                        { week: 2, objective: "Word formatting", topics: "Headers & tables", activities: "Headers & tables", assessment: "Correct formatting" },
                        { week: 3, objective: "Spreadsheets", topics: "Average & sum", activities: "Average & sum", assessment: "Functions" },
                        { week: 4, objective: "Coding", topics: "Conditionals", activities: "Conditionals", assessment: "Scratch" },
                        { week: 5, objective: "Image editing", topics: "Photo cleanup", activities: "Photo cleanup", assessment: "Technique" },
                        { week: 6, objective: "Presentation", topics: "Transitions & animations", activities: "Transitions & animations", assessment: "Professional design" },
                        { week: 7, objective: "Internet research", topics: "Reliable source checking", activities: "Reliable source checking", assessment: "Critical evaluation" },
                        { week: 8, objective: "Digital communication", topics: "Formal email", activities: "Formal email", assessment: "Correct" },
                        { week: 9, objective: "Cyber safety", topics: "Privacy & reporting", activities: "Privacy & reporting", assessment: "Understanding" },
                        { week: 10, objective: "Review", topics: "Final ICT task", activities: "Final ICT task", assessment: "Competence" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Perspective", topics: "Depth drawing", activities: "Depth drawing", assessment: "Skill" },
                        { week: 2, objective: "Portrait painting", topics: "Shading", activities: "Shading", assessment: "Technique" },
                        { week: 3, objective: "Texture study", topics: "Surface copying", activities: "Surface copying", assessment: "Accuracy" },
                        { week: 4, objective: "3D crafting", topics: "Objects", activities: "Objects", assessment: "Form" },
                        { week: 5, objective: "Symbolic art", topics: "Theme", activities: "Theme", assessment: "Expression" },
                        { week: 6, objective: "Mosaic art", topics: "Piece arrangement", activities: "Piece arrangement", assessment: "Creativity" },
                        { week: 7, objective: "Digital art", topics: "Computer tools", activities: "Computer tools", assessment: "Skill" },
                        { week: 8, objective: "Cultural representation", topics: "World art", activities: "World art", assessment: "Respect" },
                        { week: 9, objective: "Final artwork", topics: "Project", activities: "Project", assessment: "Work quality" },
                        { week: 10, objective: "Art show", topics: "Exhibit", activities: "Exhibit", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Complex rhythm", topics: "Notation", activities: "Notation", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch range", topics: "Scales", activities: "Scales", assessment: "Voice control" },
                        { week: 3, objective: "Chord theory", topics: "Keyboard", activities: "Keyboard", assessment: "Understanding" },
                        { week: 4, objective: "Harmony", topics: "3-part singing", activities: "3-part singing", assessment: "Blending" },
                        { week: 5, objective: "Composition", topics: "Song", activities: "Song", assessment: "Creativity" },
                        { week: 6, objective: "Critique", topics: "Music history", activities: "Music history", assessment: "Understanding" },
                        { week: 7, objective: "Instrument practice", topics: "Recorder/keyboard", activities: "Recorder/keyboard", assessment: "Skill" },
                        { week: 8, objective: "Movement & timing", topics: "Dance", activities: "Dance", assessment: "Coordination" },
                        { week: 9, objective: "Performance prep", topics: "Rehearsal", activities: "Rehearsal", assessment: "Readiness" },
                        { week: 10, objective: "Music recital", topics: "Presentation", activities: "Presentation", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm up routine", topics: "Stretching", activities: "Stretching", assessment: "Flexibility" },
                        { week: 2, objective: "Aerobic fitness", topics: "Running", activities: "Running", assessment: "Stamina" },
                        { week: 3, objective: "Strength", topics: "Push-ups", activities: "Push-ups", assessment: "Effort" },
                        { week: 4, objective: "Balance", topics: "Toe stand", activities: "Toe stand", assessment: "Control" },
                        { week: 5, objective: "Agility", topics: "Quick turns", activities: "Quick turns", assessment: "Reaction" },
                        { week: 6, objective: "Coordination", topics: "Ball drills", activities: "Ball drills", assessment: "Skill" },
                        { week: 7, objective: "Competitive sports", topics: "Basketball", activities: "Basketball", assessment: "Teamwork" },
                        { week: 8, objective: "Spatial awareness", topics: "Movement", activities: "Movement", assessment: "Awareness" },
                        { week: 9, objective: "Race events", topics: "Speed tests", activities: "Speed tests", assessment: "Timing" },
                        { week: 10, objective: "Sports challenge", topics: "Relay", activities: "Relay", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Peer collaboration", topics: "Problem solving", activities: "Problem solving", assessment: "Teamwork" },
                        { week: 2, objective: "Negotiation", topics: "Role-play", activities: "Role-play", assessment: "Diplomacy" },
                        { week: 3, objective: "Self-confidence", topics: "Speech", activities: "Speech", assessment: "Poise" },
                        { week: 4, objective: "Responsibility", topics: "Task", activities: "Task", assessment: "Completion" },
                        { week: 5, objective: "Financial literacy", topics: "Money handling", activities: "Money handling", assessment: "Understanding" },
                        { week: 6, objective: "Goal setting", topics: "Planning", activities: "Planning", assessment: "Clarity" },
                        { week: 7, objective: "Kindness", topics: "Service", activities: "Service", assessment: "Empathy" },
                        { week: 8, objective: "Personal safety", topics: "Awareness", activities: "Awareness", assessment: "Application" },
                        { week: 9, objective: "Self-monitoring", topics: "Reflection", activities: "Reflection", assessment: "Awareness" },
                        { week: 10, objective: "Character review", topics: "Recognition", activities: "Recognition", assessment: "Growth" }
                    ]
                }
            ]
        },
        {
            term: "Term 3",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English / Literacy",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Dictionary mastery", topics: "Word search", activities: "Dictionary work", assessment: "Accuracy" },
                        { week: 2, objective: "Biography writing", topics: "Real persons", activities: "Biography draft", assessment: "Detail awareness" },
                        { week: 3, objective: "Debate writing", topics: "Persuasive writing", activities: "Argument build", assessment: "Logical" },
                        { week: 4, objective: "Speech writing", topics: "Public communication", activities: "Oral reading", assessment: "Confidence" },
                        { week: 5, objective: "Grammar revision", topics: "All forms", activities: "Quiz", assessment: "Accuracy" },
                        { week: 6, objective: "Summarizing", topics: "Condensing text", activities: "Paragraph reduction", assessment: "Understanding" },
                        { week: 7, objective: "Creative expression", topics: "Narrative writing", activities: "Story creation", assessment: "Imaginative" },
                        { week: 8, objective: "Critical reading", topics: "Article analysis", activities: "Discussion", assessment: "Insight" },
                        { week: 9, objective: "Editing", topics: "Final polishing", activities: "Rewrite", assessment: "Refinement" },
                        { week: 10, objective: "Literacy showcase", topics: "Public reading", activities: "Presentation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Fraction-decimal", topics: "interconversion", activities: "Conversion tasks", assessment: "Correct" },
                        { week: 2, objective: "Percentages", topics: "of quantities", activities: "Practice", assessment: "Accurate" },
                        { week: 3, objective: "Ratio & proportion", topics: "comparison", activities: "Word problems", assessment: "Understands" },
                        { week: 4, objective: "Geometry", topics: "4- & 5-sided shapes", activities: "Shape classification", assessment: "Correct" },
                        { week: 5, objective: "Area & perimeter", topics: "rectangles", activities: "Calculation", assessment: "Accurate" },
                        { week: 6, objective: "Volume", topics: "solid shapes", activities: "Measurement", assessment: "Correct" },
                        { week: 7, objective: "Graphing", topics: "scatter plot", activities: "Plotting", assessment: "Accuracy" },
                        { week: 8, objective: "Algebra patterns", topics: "Equations", activities: "Solve", assessment: "Use reasoning" },
                        { week: 9, objective: "Multi-step problems", topics: "Math logic", activities: "Brain puzzles", assessment: "Complex thinking" },
                        { week: 10, objective: "Final review", topics: "Math Olympics", activities: "Achievement", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Earth rotation", topics: "years & seasons", activities: "Workshop", assessment: "Understands" },
                        { week: 2, objective: "Planets", topics: "Distances & properties", activities: "Model", assessment: "Correct" },
                        { week: 3, objective: "Ecosystems", topics: "Survival", activities: "Food web", assessment: "Understands" },
                        { week: 4, objective: "Technology", topics: "Innovation", activities: "Research", assessment: "Awareness" },
                        { week: 5, objective: "Energy use", topics: "Renewable", activities: "Sorting", assessment: "Understanding" },
                        { week: 6, objective: "Force & motion", topics: "Newton's laws", activities: "Example", assessment: "Applies" },
                        { week: 7, objective: "Human health", topics: "Nutrition", activities: "Chart", assessment: "Awareness" },
                        { week: 8, objective: "Scientific inquiry", topics: "hypothesis testing", activities: "Experiment", assessment: "Understanding" },
                        { week: 9, objective: "Safety", topics: "science ethics", activities: "Analysis", assessment: "Responsible" },
                        { week: 10, objective: "Science fair", topics: "Presentation", activities: "Confidence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Heritage", topics: "Cultural identity", activities: "Research", assessment: "Pride" },
                        { week: 2, objective: "Nationhood", topics: "Unity & respect", activities: "Discussion", assessment: "Awareness" },
                        { week: 3, objective: "Historical change", topics: "Major events", activities: "Timeline", assessment: "Knowledge" },
                        { week: 4, objective: "Economic knowledge", topics: "Budgeting", activities: "Class activity", assessment: "Correct" },
                        { week: 5, objective: "Government", topics: "Constitution", activities: "Discussion", assessment: "Understanding" },
                        { week: 6, objective: "Global interaction", topics: "imports & exports", activities: "Mapping", assessment: "Connection" },
                        { week: 7, objective: "Diplomacy", topics: "Peace building", activities: "Role-play", assessment: "Understanding" },
                        { week: 8, objective: "Diversity & tolerance", topics: "Culture share", activities: "Culture share", assessment: "Respect" },
                        { week: 9, objective: "Community service", topics: "Project", activities: "Project", assessment: "Contribution" },
                        { week: 10, objective: "Global fair", topics: "Cultural exhibition", activities: "Participation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "PowerPoint mastery", topics: "Presentation", activities: "Presentation", assessment: "Quality slides" },
                        { week: 2, objective: "Spreadsheet formulas", topics: "Sum / Average", activities: "Sum / Average", assessment: "Accuracy" },
                        { week: 3, objective: "Word processing", topics: "Report formatting", activities: "Report formatting", assessment: "Correct" },
                        { week: 4, objective: "Video editing", topics: "Short film", activities: "Short film", assessment: "Skill" },
                        { week: 5, objective: "Coding", topics: "Debugging", activities: "Debugging", assessment: "Correct" },
                        { week: 6, objective: "Online research", topics: "Reference citation", activities: "Reference citation", assessment: "Credibility" },
                        { week: 7, objective: "Digital citizenship", topics: "Responsible use", activities: "Responsible use", assessment: "Awareness" },
                        { week: 8, objective: "Cyber ethics", topics: "Copyright", activities: "Copyright", assessment: "Understanding" },
                        { week: 9, objective: "Portfolio creation", topics: "Compile projects", activities: "Compile projects", assessment: "Competence" },
                        { week: 10, objective: "Digital exhibition", topics: "Presentation", activities: "Presentation", assessment: "Professional output" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Realism", topics: "Accurate drawing", activities: "Accurate drawing", assessment: "Precision" },
                        { week: 2, objective: "Light & shadow", topics: "Contrast", activities: "Contrast", assessment: "Technique" },
                        { week: 3, objective: "Perspective", topics: "3D depth", activities: "3D depth", assessment: "Skill" },
                        { week: 4, objective: "Abstract painting", topics: "Creative freedom", activities: "Creative freedom", assessment: "Expression" },
                        { week: 5, objective: "Cultural representation", topics: "Traditional designs", activities: "Traditional designs", assessment: "Respect" },
                        { week: 6, objective: "Mural art", topics: "Collaborative painting", activities: "Collaborative painting", assessment: "Teamwork" },
                        { week: 7, objective: "Graphic layout", topics: "Poster designing", activities: "Poster designing", assessment: "Clarity" },
                        { week: 8, objective: "Final artwork", topics: "Independent work", activities: "Independent work", assessment: "Quality" },
                        { week: 9, objective: "Art critique", topics: "Evaluation", activities: "Evaluation", assessment: "Insight" },
                        { week: 10, objective: "Art festival", topics: "Public display", activities: "Public display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Sight singing", topics: "Music sheet", activities: "Music sheet", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch & control", topics: "Practice", activities: "Practice", assessment: "Consistency" },
                        { week: 3, objective: "Chord progression", topics: "Keyboard", activities: "Keyboard", assessment: "Understanding" },
                        { week: 4, objective: "Composition", topics: "Writing music", activities: "Writing music", assessment: "Creativity" },
                        { week: 5, objective: "Instrument performance", topics: "Recorder/Keyboard", activities: "Recorder/Keyboard", assessment: "Skill" },
                        { week: 6, objective: "Music critique", topics: "Evaluation", activities: "Evaluation", assessment: "Insight" },
                        { week: 7, objective: "Dance rhythm", topics: "Movement", activities: "Movement", assessment: "Coordination" },
                        { week: 8, objective: "Harmony singing", topics: "Layering", activities: "Layering", assessment: "Teamwork" },
                        { week: 9, objective: "Concert prep", topics: "Rehearsal", activities: "Rehearsal", assessment: "Readiness" },
                        { week: 10, objective: "Year-end performance", topics: "Final concert", activities: "Final concert", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm up", topics: "Stretching", activities: "Stretching", assessment: "Flexibility" },
                        { week: 2, objective: "Running stamina", topics: "5-minute run", activities: "5-minute run", assessment: "Endurance" },
                        { week: 3, objective: "Body strength", topics: "Arm & core", activities: "Arm & core", assessment: "Improvement" },
                        { week: 4, objective: "Agility", topics: "Footwork drills", activities: "Footwork drills", assessment: "Speed" },
                        { week: 5, objective: "Balance", topics: "Static poses", activities: "Static poses", assessment: "Control" },
                        { week: 6, objective: "Precision", topics: "Ball aim", activities: "Ball aim", assessment: "Accuracy" },
                        { week: 7, objective: "Team strategy", topics: "Sports planning", activities: "Sports planning", assessment: "Coordination" },
                        { week: 8, objective: "Aerobic moving", topics: "Dance fitness", activities: "Dance fitness", assessment: "Energy" },
                        { week: 9, objective: "Competition", topics: "Race events", activities: "Race events", assessment: "Performance" },
                        { week: 10, objective: "Sports finale", topics: "Team games", activities: "Team games", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-confidence", topics: "Personal presentation", activities: "Personal presentation", assessment: "Poise" },
                        { week: 2, objective: "Empathy", topics: "Feelings understanding", activities: "Feelings understanding", assessment: "Warmth" },
                        { week: 3, objective: "Conflict mediation", topics: "Role-play", activities: "Role-play", assessment: "Diplomacy" },
                        { week: 4, objective: "Goal setting", topics: "Personal planning", activities: "Personal planning", assessment: "Responsibility" },
                        { week: 5, objective: "Self-control", topics: "Impulse control", activities: "Impulse control", assessment: "Maturity" },
                        { week: 6, objective: "Leadership", topics: "Team task", activities: "Team task", assessment: "Guidance" },
                        { week: 7, objective: "Financial sense", topics: "Budgeting", activities: "Budgeting", assessment: "Understanding" },
                        { week: 8, objective: "Self-reflection", topics: "Growth review", activities: "Growth review", assessment: "Insight" },
                        { week: 9, objective: "Community spirit", topics: "Helping others", activities: "Helping others", assessment: "Contribution" },
                        { week: 10, objective: "Character celebration", topics: "Recognition", activities: "Recognition", assessment: "Identity building" }
                    ]
                }
            ]
        }
    ]
};
