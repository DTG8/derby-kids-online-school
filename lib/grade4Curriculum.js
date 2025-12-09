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
        },
        {
            term: "Term 2",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English / Literacy",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Informational reading", topics: "facts & data", activities: "Chart reading", assessment: "Understands" },
                        { week: 2, objective: "Grammar", topics: "adverbs & adjectives", activities: "Sorting", assessment: "Applies" },
                        { week: 3, objective: "Writing", topics: "expository", activities: "Write report", assessment: "Clarity" },
                        { week: 4, objective: "Comprehension", topics: "research text", activities: "Inference", assessment: "Analysis" },
                        { week: 5, objective: "Editing", topics: "paragraph improvement", activities: "Rewrite", assessment: "Accuracy" },
                        { week: 6, objective: "Vocabulary", topics: "homophones", activities: "Identify", assessment: "Correct" },
                        { week: 7, objective: "Creative writing", topics: "short story", activities: "Draft writing", assessment: "Creates" },
                        { week: 8, objective: "Public speaking", topics: "presentation", activities: "Oral talk", assessment: "Confidence" },
                        { week: 9, objective: "Spelling", topics: "complex rules", activities: "Practice", assessment: "Improves" },
                        { week: 10, objective: "Review", topics: "Assessment", activities: "Demonstration", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication", topics: "x11 x12", activities: "Drills", assessment: "Recall" },
                        { week: 2, objective: "Division", topics: "long division", activities: "Worksheet", assessment: "Accurate" },
                        { week: 3, objective: "Fractions", topics: "1/6, 1/8", activities: "Fraction models", assessment: "Understands" },
                        { week: 4, objective: "Decimals", topics: "place value", activities: "Money decimals", assessment: "Correct" },
                        { week: 5, objective: "Measurement", topics: "weight", activities: "Scale reading", assessment: "Accurate" },
                        { week: 6, objective: "Geometry", topics: "angles", activities: "Constructing", assessment: "Identifies" },
                        { week: 7, objective: "Area", topics: "shapes", activities: "Tile count", assessment: "Calculates" },
                        { week: 8, objective: "Graphing", topics: "bar & pie", activities: "Create graph", assessment: "Interprets" },
                        { week: 9, objective: "Probability", topics: "likelihood", activities: "Chance games", assessment: "Understands" },
                        { week: 10, objective: "Review", topics: "Problem solving", activities: "Performance", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Plant functions", topics: "nutrients", activities: "Leaf test", assessment: "Explains" },
                        { week: 2, objective: "Ecosystems", topics: "food chain", activities: "Create chart", assessment: "Understands" },
                        { week: 3, objective: "Weather", topics: "prediction", activities: "Chart", assessment: "Records" },
                        { week: 4, objective: "Water cycle", topics: "condensation", activities: "Experiment", assessment: "Understands" },
                        { week: 5, objective: "Natural resources", topics: "renewable", activities: "Sorting", assessment: "Understands" },
                        { week: 6, objective: "Human digestion", topics: "systems", activities: "Diagram", assessment: "Labels" },
                        { week: 7, objective: "Electricity", topics: "circuits", activities: "Build", assessment: "Correct" },
                        { week: 8, objective: "Energy", topics: "heat/light", activities: "Examples", assessment: "Identifies" },
                        { week: 9, objective: "Safety", topics: "lab & field", activities: "Practice", assessment: "Responsibility" },
                        { week: 10, objective: "Review", topics: "Test", activities: "Comprehension", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "History timelines", topics: "past events", activities: "Create timeline", assessment: "Understands" },
                        { week: 2, objective: "Government roles", topics: "executive, legislative", activities: "Match roles", assessment: "Identifies" },
                        { week: 3, objective: "National identity", topics: "anthem & symbols", activities: "Class recitation", assessment: "Shows respect" },
                        { week: 4, objective: "Geographical features", topics: "mountains, deserts", activities: "Map work", assessment: "Labels" },
                        { week: 5, objective: "Economics", topics: "producers & consumers", activities: "Market simulation", assessment: "Participates" },
                        { week: 6, objective: "Population", topics: "migration", activities: "Case examples", assessment: "Understands" },
                        { week: 7, objective: "Natural resources", topics: "renewable vs nonrenewable", activities: "Sorting", assessment: "Differentiates" },
                        { week: 8, objective: "Trade & transport", topics: "land/air/sea", activities: "Diagram", assessment: "Understands" },
                        { week: 9, objective: "Media understanding", topics: "news awareness", activities: "Current events", assessment: "Engages" },
                        { week: 10, objective: "Review", topics: "Oral recap", activities: "Retains", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Keyboard techniques", topics: "typing efficiency", activities: "Timed typing", assessment: "Improvement" },
                        { week: 2, objective: "Text editing", topics: "cut/copy/paste", activities: "Formatting practice", assessment: "Correct use" },
                        { week: 3, objective: "Word processing", topics: "line spacing, alignment", activities: "Create document", assessment: "Formats correctly" },
                        { week: 4, objective: "Data tables", topics: "spreadsheet basics", activities: "Build table", assessment: "Accurate" },
                        { week: 5, objective: "Internet use", topics: "keywords & filters", activities: "Safe searching", assessment: "Understands" },
                        { week: 6, objective: "Digital ethics", topics: "cyber respect", activities: "Discussion", assessment: "Shows awareness" },
                        { week: 7, objective: "Coding concepts", topics: "repeat loops", activities: "Scratch challenge", assessment: "Works" },
                        { week: 8, objective: "Presentation design", topics: "slides & themes", activities: "Make slides", assessment: "Clear design" },
                        { week: 9, objective: "Digital storage", topics: "cloud & local", activities: "Organizing files", assessment: "Responsible" },
                        { week: 10, objective: "ICT review", topics: "Project task", activities: "Shows competency", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Shading & light", topics: "Pencil shading", activities: "Depth accuracy", assessment: "Depth accuracy" },
                        { week: 2, objective: "Watercolour technique", topics: "Layered painting", activities: "Technique", assessment: "Technique" },
                        { week: 3, objective: "Figure drawing", topics: "Human posture", activities: "Proportions", assessment: "Proportions" },
                        { week: 4, objective: "Graphic art", topics: "Poster design", activities: "Readability", assessment: "Readability" },
                        { week: 5, objective: "Craft & modeling", topics: "Paper form", activities: "Shape control", assessment: "Shape control" },
                        { week: 6, objective: "Cultural awareness", topics: "Symbolic art", activities: "Respect", assessment: "Respect" },
                        { week: 7, objective: "Pattern & motif", topics: "Repeated designs", activities: "Consistency", assessment: "Consistency" },
                        { week: 8, objective: "Perspective", topics: "Vanishing point", activities: "Spatial sense", assessment: "Spatial sense" },
                        { week: 9, objective: "Art refinement", topics: "Enhancement", activities: "Improvement", assessment: "Improvement" },
                        { week: 10, objective: "Art display", topics: "Exhibit", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm reading", topics: "Clap notation", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch accuracy", topics: "Tune matching", activities: "Proper pitch", assessment: "Proper pitch" },
                        { week: 3, objective: "Melody reading", topics: "Simple notes", activities: "Reads", assessment: "Reads" },
                        { week: 4, objective: "Musical instrument use", topics: "Keyboard/recorder", activities: "Playing", assessment: "Playing" },
                        { week: 5, objective: "Group singing", topics: "Harmony", activities: "Blending", assessment: "Blending" },
                        { week: 6, objective: "Music structure", topics: "Verse & chorus", activities: "Understanding", assessment: "Understanding" },
                        { week: 7, objective: "Composition", topics: "Write melody", activities: "Creativity", assessment: "Creativity" },
                        { week: 8, objective: "Tempo & dynamics", topics: "Loud/soft, fast/slow", activities: "Music control", assessment: "Music control" },
                        { week: 9, objective: "Movement & rhythm", topics: "Choreography", activities: "Coordination", assessment: "Coordination" },
                        { week: 10, objective: "Performance", topics: "Music recital", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up basics", topics: "Stretching", activities: "Preparedness", assessment: "Preparedness" },
                        { week: 2, objective: "Balance", topics: "Leg stand & pose", activities: "Stability", assessment: "Stability" },
                        { week: 3, objective: "Speed", topics: "Short sprints", activities: "Improvement", assessment: "Improvement" },
                        { week: 4, objective: "Team sport", topics: "Volleyball basics", activities: "Teamwork", assessment: "Teamwork" },
                        { week: 5, objective: "Coordination", topics: "Ball + movement", activities: "Skill", assessment: "Skill" },
                        { week: 6, objective: "Strength", topics: "Push/pull", activities: "Effort", assessment: "Effort" },
                        { week: 7, objective: "Flexibility", topics: "Yoga", activities: "Range", assessment: "Range" },
                        { week: 8, objective: "Endurance", topics: "Jogging", activities: "Stamina", assessment: "Stamina" },
                        { week: 9, objective: "Spatial awareness", topics: "Movement in space", activities: "Awareness", assessment: "Awareness" },
                        { week: 10, objective: "Field sports", topics: "Games", activities: "Participation", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Citizenship & Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Relationship building", topics: "Compliment activity", activities: "Kind interaction", assessment: "Kind interaction" },
                        { week: 2, objective: "Conflict resolution", topics: "Role-play scenario", activities: "Problem solving", assessment: "Problem solving" },
                        { week: 3, objective: "Self-reflection", topics: "Personal strengths list", activities: "Awareness", assessment: "Awareness" },
                        { week: 4, objective: "Team collaboration", topics: "Class projects", activities: "Cooperation", assessment: "Cooperation" },
                        { week: 5, objective: "Respect", topics: "Active listening", activities: "Behavior", assessment: "Behavior" },
                        { week: 6, objective: "Responsibility", topics: "Assigned duty", activities: "Fulfillment", assessment: "Fulfillment" },
                        { week: 7, objective: "Time management", topics: "Planning", activities: "Independence", assessment: "Independence" },
                        { week: 8, objective: "Emotional control", topics: "Calming strategies", activities: "Self-regulation", assessment: "Self-regulation" },
                        { week: 9, objective: "Social awareness", topics: "Empathy building", activities: "Understanding", assessment: "Understanding" },
                        { week: 10, objective: "Personal growth", topics: "Recognition", activities: "Self-esteem", assessment: "Self-esteem" }
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
                        { week: 1, objective: "Dictionary & thesaurus use", topics: "reference skills", activities: "Word lookup", assessment: "Accuracy" },
                        { week: 2, objective: "Biography writing", topics: "famous people", activities: "Write a biography", assessment: "Structure" },
                        { week: 3, objective: "Report writing", topics: "facts & data", activities: "Write report", assessment: "Objectivity" },
                        { week: 4, objective: "Persuasive writing", topics: "arguments & claims", activities: "Write opinion", assessment: "Reasoning" },
                        { week: 5, objective: "Grammar", topics: "prepositions & conjunctions", activities: "Sorting", assessment: "Correct" },
                        { week: 6, objective: "Summarization", topics: "main ideas", activities: "Text reduction", assessment: "Accuracy" },
                        { week: 7, objective: "Critical comprehension", topics: "logical inference", activities: "Discussion", assessment: "Understanding" },
                        { week: 8, objective: "Presentation speaking", topics: "clarity & body language", activities: "Speech", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "revision", activities: "Rewrite & improve", assessment: "Improvement" },
                        { week: 10, objective: "Year-end literacy fair", topics: "presentation", activities: "Performance", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication mastery", topics: "all tables 2-12", activities: "Timed drills", assessment: "Recalls" },
                        { week: 2, objective: "Division mastery", topics: "long division", activities: "Worksheet", assessment: "Correct" },
                        { week: 3, objective: "Fractions & decimals", topics: "conversions", activities: "Conversion tasks", assessment: "Accurate" },
                        { week: 4, objective: "Geometry", topics: "classifying angles", activities: "Angle finder tool", assessment: "Identifies" },
                        { week: 5, objective: "Area & volume", topics: "shapes & space", activities: "Measurement tasks", assessment: "Calculates" },
                        { week: 6, objective: "Graph interpretation", topics: "line graphs", activities: "Make & read", assessment: "Understands" },
                        { week: 7, objective: "Algebraic thinking", topics: "patterns", activities: "Find missing number", assessment: "Logical" },
                        { week: 8, objective: "Word problems", topics: "multi-step", activities: "Problem solving", assessment: "Improves" },
                        { week: 9, objective: "Data & probability", topics: "chance and fairness", activities: "Experiments", assessment: "Applies" },
                        { week: 10, objective: "Final math fair", topics: "Math stations", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Earth science", topics: "soil types", activities: "Sample analysis", assessment: "Classifies" },
                        { week: 2, objective: "Solar system", topics: "planet properties", activities: "Model", assessment: "Identifies" },
                        { week: 3, objective: "Water science", topics: "filtration", activities: "Water filter", assessment: "Understands" },
                        { week: 4, objective: "Materials", topics: "properties", activities: "Testing", assessment: "Observes" },
                        { week: 5, objective: "Force & motion", topics: "speed", activities: "Ramp test", assessment: "Records" },
                        { week: 6, objective: "Climate", topics: "temperature & rainfall", activities: "Chart", assessment: "Interprets" },
                        { week: 7, objective: "Energy transfer", topics: "heat & light", activities: "Experiment", assessment: "Understands" },
                        { week: 8, objective: "Environmental care", topics: "pollution & recycling", activities: "Campaign", assessment: "Practices" },
                        { week: 9, objective: "Scientific process", topics: "hypothesis & testing", activities: "Inquiry", assessment: "Applies" },
                        { week: 10, objective: "Science exhibition", topics: "Project display", activities: "Confidence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Ancient civilizations", topics: "Egypt, Greece", activities: "Research", assessment: "Explains" },
                        { week: 2, objective: "Government systems", topics: "democracy, monarchy", activities: "Comparison", assessment: "Understanding" },
                        { week: 3, objective: "Trade & economy", topics: "imports/exports", activities: "Simulation", assessment: "Participates" },
                        { week: 4, objective: "Migration", topics: "human movement", activities: "Case study", assessment: "Explains" },
                        { week: 5, objective: "Culture & innovation", topics: "inventions", activities: "Timeline", assessment: "Connects" },
                        { week: 6, objective: "Media & information", topics: "news & social media", activities: "Critical thinking", assessment: "Evaluates" },
                        { week: 7, objective: "Global citizenship", topics: "rights & duties", activities: "Discussion", assessment: "Understands" },
                        { week: 8, objective: "Conflict resolution", topics: "peace methods", activities: "Role-play", assessment: "Applies" },
                        { week: 9, objective: "Diplomacy", topics: "negotiation", activities: "Simulation", assessment: "Understands" },
                        { week: 10, objective: "World cultures celebration", topics: "Cultural expo", activities: "Participation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "PowerPoint mastery", topics: "Transitions & layout", activities: "Creates", assessment: "Creates" },
                        { week: 2, objective: "Spreadsheet functions", topics: "Sum/average", activities: "Uses correctly", assessment: "Uses correctly" },
                        { week: 3, objective: "Document formatting", topics: "Margins, headers", activities: "Formats", assessment: "Formats" },
                        { week: 4, objective: "Photo & image editing", topics: "Brightness/Crop", activities: "Applies", assessment: "Applies" },
                        { week: 5, objective: "Video creation", topics: "Short video", activities: "Produces", assessment: "Produces" },
                        { week: 6, objective: "Coding challenges", topics: "Conditional logic", activities: "Solves", assessment: "Solves" },
                        { week: 7, objective: "Digital research", topics: "Source evaluation", activities: "Identifies reliable sources", assessment: "Identifies reliable sources" },
                        { week: 8, objective: "Email etiquette", topics: "Formal style", activities: "Correct", assessment: "Correct" },
                        { week: 9, objective: "Cyber responsibility", topics: "Digital citizenship", activities: "Understands", assessment: "Understands" },
                        { week: 10, objective: "Digital portfolio", topics: "Final project", activities: "Competent", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Art composition", topics: "Balanced layout", activities: "Observes balance", assessment: "Observes balance" },
                        { week: 2, objective: "Portrait painting", topics: "Proportion & detail", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 3, objective: "Landscape painting", topics: "Depth & colour", activities: "Depth perception", assessment: "Depth perception" },
                        { week: 4, objective: "Abstract art", topics: "Emotion & form", activities: "Expression", assessment: "Expression" },
                        { week: 5, objective: "Modeling", topics: "Craft structures", activities: "3D skill", assessment: "3D skill" },
                        { week: 6, objective: "Cultural art", topics: "Traditional symbols", activities: "Respect", assessment: "Respect" },
                        { week: 7, objective: "Poster art", topics: "Theme awareness", activities: "Clarity", assessment: "Clarity" },
                        { week: 8, objective: "Art reflection", topics: "Critique", activities: "Thoughtfulness", assessment: "Thoughtfulness" },
                        { week: 9, objective: "Final art piece", topics: "Independent creation", activities: "Creativity", assessment: "Creativity" },
                        { week: 10, objective: "Art festival", topics: "Exhibition", activities: "Confidence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Chord reading", topics: "keyboard", activities: "Identifies", assessment: "Identifies" },
                        { week: 2, objective: "Harmony singing", topics: "layered voices", activities: "Blends", assessment: "Blends" },
                        { week: 3, objective: "Melody invention", topics: "musical patterns", activities: "Creates", assessment: "Creates" },
                        { week: 4, objective: "Pitch precision", topics: "Vocal test", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 5, objective: "Notation", topics: "Advanced reading", activities: "Reads notes", assessment: "Reads notes" },
                        { week: 6, objective: "Sight singing", topics: "Follow music sheet", activities: "Performs", assessment: "Performs" },
                        { week: 7, objective: "Composition", topics: "Write simple song", activities: "Creates", assessment: "Creates" },
                        { week: 8, objective: "Music evaluation", topics: "Critique", activities: "Insight", assessment: "Insight" },
                        { week: 9, objective: "Dance performance", topics: "Choreography", activities: "Movement", assessment: "Movement" },
                        { week: 10, objective: "Grand concert", topics: "Final performance", activities: "Achievement", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up routine", topics: "Stretching", activities: "Flexibility", assessment: "Flexibility" },
                        { week: 2, objective: "Cardio", topics: "Jog/run", activities: "Endurance", assessment: "Endurance" },
                        { week: 3, objective: "Strength", topics: "Planks", activities: "Core strength", assessment: "Core strength" },
                        { week: 4, objective: "Balance & posture", topics: "Static holds", activities: "Stability", assessment: "Stability" },
                        { week: 5, objective: "Speed", topics: "Sprint", activities: "Performance", assessment: "Performance" },
                        { week: 6, objective: "Coordination", topics: "Ball control", activities: "Skill", assessment: "Skill" },
                        { week: 7, objective: "Strategy", topics: "Team games", activities: "Tactical thinking", assessment: "Tactical thinking" },
                        { week: 8, objective: "Aerobic dance", topics: "Rhythm movement", activities: "Energy", assessment: "Energy" },
                        { week: 9, objective: "Competition", topics: "Race events", activities: "Timing", assessment: "Timing" },
                        { week: 10, objective: "Sports Gala", topics: "Team tournaments", activities: "Effort", assessment: "Assessed" }
                    ]
                },
                {
                    name: "PSED / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-motivation", topics: "Goal reinforcement", activities: "Commitment", assessment: "Commitment" },
                        { week: 2, objective: "Respect for diversity", topics: "Sharing & listening", activities: "Empathy", assessment: "Empathy" },
                        { week: 3, objective: "Resilience", topics: "Handling setbacks", activities: "Growth mindset", assessment: "Growth mindset" },
                        { week: 4, objective: "Public speaking", topics: "Clear expression", activities: "Confidence", assessment: "Confidence" },
                        { week: 5, objective: "Team collaboration", topics: "Group projects", activities: "Cooperation", assessment: "Cooperation" },
                        { week: 6, objective: "Financial basics", topics: "Simple budgeting", activities: "Understanding", assessment: "Understanding" },
                        { week: 7, objective: "Decision making", topics: "Risk-choice", activities: "Judgement", assessment: "Judgement" },
                        { week: 8, objective: "Health awareness", topics: "Nutrition & sleep", activities: "Responsibility", assessment: "Responsibility" },
                        { week: 9, objective: "Civic values", topics: "Helping community", activities: "Engagement", assessment: "Engagement" },
                        { week: 10, objective: "Character celebration", topics: "Recognition", activities: "Self-esteem", assessment: "Assessed" }
                    ]
                }
            ]
        }
    ]
};
