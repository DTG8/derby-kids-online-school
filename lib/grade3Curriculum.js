export const grade3CurriculumData = {
    grade: "Grade 3",
    term: "Term 1",
    year: "Year 4",
    description: "Grade 3 builds on foundational skills with more complex concepts in literacy, numeracy, and scientific inquiry. Students engage in deeper reading comprehension, advanced arithmetic, and exploring the world around them.",
    subjects: [
        "English / Literacy",
        "Mathematics",
        "Science",
        "Social Studies",
        "ICT / Digital Literacy",
        "Creative Art",
        "Music & Rhythm",
        "Physical Education (PE)",
        "PSED / Life Skills"
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
                        { week: 1, objective: "Reading fluency", topics: "longer passages", activities: "Guided reading", assessment: "Reads smoothly" },
                        { week: 2, objective: "Grammar", topics: "proper nouns", activities: "Identify & categorize", assessment: "Correct identification" },
                        { week: 3, objective: "Vocabulary building", topics: "root words", activities: "Word building", assessment: "Expands vocabulary" },
                        { week: 4, objective: "Sentence writing", topics: "compound sentences", activities: "Joining with and/but/or", assessment: "Creates correctly" },
                        { week: 5, objective: "Comprehension", topics: "short paragraphs", activities: "Inference Q&A", assessment: "Understands deeper meaning" },
                        { week: 6, objective: "Tenses", topics: "past vs present", activities: "Tense sorting", assessment: "Uses accurately" },
                        { week: 7, objective: "Creative writing", topics: "descriptive paragraphs", activities: "Describe place", assessment: "Uses adjectives" },
                        { week: 8, objective: "Pronouns", topics: "subject/object", activities: "Pronoun substitution", assessment: "Correct usage" },
                        { week: 9, objective: "Handwriting", topics: "cursive fluency", activities: "Practice sheets", assessment: "Improved neatness" },
                        { week: 10, objective: "Review", topics: "term revision", activities: "Literacy showcase", assessment: "Mastery check" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Place value up to 10,000", topics: "number size", activities: "Place-value blocks", assessment: "Understands" },
                        { week: 2, objective: "3-digit addition", topics: "with regrouping", activities: "Column method", assessment: "Correct" },
                        { week: 3, objective: "3-digit subtraction", topics: "borrowing", activities: "Block visualization", assessment: "Correct" },
                        { week: 4, objective: "Multiplication", topics: "x3, x4, x6", activities: "Skip counting patterns", assessment: "Recalls" },
                        { week: 5, objective: "Division", topics: "with remainders", activities: "Equal sharing", assessment: "Solves" },
                        { week: 6, objective: "Fractions", topics: "1/2, 1/3, 1/4", activities: "Fraction strips", assessment: "Identifies" },
                        { week: 7, objective: "Measurement", topics: "length", activities: "Use ruler", assessment: "Accurate" },
                        { week: 8, objective: "Time", topics: "quarter past/to", activities: "Analog reading", assessment: "Correct" },
                        { week: 9, objective: "Money", topics: "change calculation", activities: "Shopping role-play", assessment: "Solves" },
                        { week: 10, objective: "Review", topics: "full revision", activities: "Mixed questions", assessment: "Secure understanding" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Living & nonliving", topics: "classification", activities: "Sorting", assessment: "Correct" },
                        { week: 2, objective: "Body systems", topics: "circulatory", activities: "Pulse test", assessment: "Understands" },
                        { week: 3, objective: "Plants", topics: "photosynthesis basics", activities: "Leaf observation", assessment: "Explains" },
                        { week: 4, objective: "Matter", topics: "solid/liquid/gas", activities: "Balloon demo", assessment: "Identifies" },
                        { week: 5, objective: "Forces", topics: "friction", activities: "Rubbing test", assessment: "Understands" },
                        { week: 6, objective: "Energy", topics: "types of energy", activities: "Sorting", assessment: "Classifies" },
                        { week: 7, objective: "Water cycle", topics: "evap/condensation", activities: "Diagram", assessment: "Labels" },
                        { week: 8, objective: "Magnetism", topics: "magnetic materials", activities: "Magnet test", assessment: "Identifies" },
                        { week: 9, objective: "Earth & space", topics: "moon phases", activities: "Observation", assessment: "Explains" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Science review", assessment: "Retention" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Families & roles", topics: "family types", activities: "Family chart", assessment: "Explains" },
                        { week: 2, objective: "Communities", topics: "urban/rural", activities: "Sorting", assessment: "Differentiates" },
                        { week: 3, objective: "Government", topics: "leaders", activities: "Identify leaders", assessment: "Recognizes" },
                        { week: 4, objective: "Geography", topics: "map symbols", activities: "Create map", assessment: "Uses symbols" },
                        { week: 5, objective: "Culture & traditions", topics: "heritage", activities: "Culture presentation", assessment: "Shows awareness" },
                        { week: 6, objective: "Rights & responsibilities", topics: "citizenship", activities: "Role-play", assessment: "Understands" },
                        { week: 7, objective: "Resources", topics: "natural/human", activities: "Sorting", assessment: "Identifies" },
                        { week: 8, objective: "Economics", topics: "basic trade", activities: "Class shop", assessment: "Participates" },
                        { week: 9, objective: "Environment", topics: "protection", activities: "Waste sorting", assessment: "Practices" },
                        { week: 10, objective: "Review", topics: "Recap", activities: "Group quiz", assessment: "Understanding" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Computer parts", topics: "input/output devices", activities: "Label diagram", assessment: "Identifies" },
                        { week: 2, objective: "Typing", topics: "home row keys", activities: "Typing exercise", assessment: "Improves speed" },
                        { week: 3, objective: "File organization", topics: "folders", activities: "Create folders", assessment: "Organizes" },
                        { week: 4, objective: "Internet basics", topics: "safe search", activities: "Keyword search", assessment: "Accurate" },
                        { week: 5, objective: "Digital art", topics: "design", activities: "Paint drawing", assessment: "Creative" },
                        { week: 6, objective: "Coding intro", topics: "block programming", activities: "Scratch puzzles", assessment: "Correct" },
                        { week: 7, objective: "Multimedia", topics: "text/audio", activities: "Create poster", assessment: "Uses tools" },
                        { week: 8, objective: "Digital communication", topics: "email basics", activities: "Mock email", assessment: "Formats" },
                        { week: 9, objective: "Online safety", topics: "cyber rules", activities: "Discussion", assessment: "Understands" },
                        { week: 10, objective: "Review", topics: "ICT tasks", activities: "Demonstration", assessment: "Shows mastery" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour theory", topics: "Mixing shades", activities: "Creates tones", assessment: "Creates tones" },
                        { week: 2, objective: "Texture", topics: "Rubbing art", activities: "Identifies texture", assessment: "Identifies texture" },
                        { week: 3, objective: "Drawing skills", topics: "Perspective", activities: "Depth understanding", assessment: "Depth understanding" },
                        { week: 4, objective: "Clay work", topics: "Animal modeling", activities: "3D accuracy", assessment: "3D accuracy" },
                        { week: 5, objective: "Modern art", topics: "Abstract design", activities: "Creativity", assessment: "Creativity" },
                        { week: 6, objective: "Cultural art", topics: "African motifs", activities: "Symbol usage", assessment: "Symbol usage" },
                        { week: 7, objective: "Portrait drawing", topics: "Face proportions", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 8, objective: "Landscape drawing", topics: "Shading", activities: "Spatial awareness", assessment: "Spatial awareness" },
                        { week: 9, objective: "Free art", topics: "Independent project", activities: "Expression", assessment: "Expression" },
                        { week: 10, objective: "Art showcase", topics: "Gallery", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm", topics: "Clap patterns", activities: "Keeps beat", assessment: "Keeps beat" },
                        { week: 2, objective: "Pitch", topics: "Voice control", activities: "Identifies", assessment: "Identifies" },
                        { week: 3, objective: "Tempo", topics: "Speed differences", activities: "Moves correctly", assessment: "Moves correctly" },
                        { week: 4, objective: "Melody", topics: "Keyboard/recorders", activities: "Plays", assessment: "Plays" },
                        { week: 5, objective: "Notation", topics: "Basic symbols", activities: "Reads", assessment: "Reads" },
                        { week: 6, objective: "Harmony", topics: "Group singing", activities: "Blends", assessment: "Blends" },
                        { week: 7, objective: "Improvisation", topics: "Make tune", activities: "Creates", assessment: "Creates" },
                        { week: 8, objective: "Cultural music", topics: "World songs", activities: "Respects", assessment: "Respects" },
                        { week: 9, objective: "Dance", topics: "Group dance", activities: "Coordinates", assessment: "Coordinates" },
                        { week: 10, objective: "Performance", topics: "Class concert", activities: "Performs", assessment: "Performs" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up", topics: "Stretching", activities: "Flexibility", assessment: "Flexibility" },
                        { week: 2, objective: "Core strength", topics: "Sit ups", activities: "Endurance", assessment: "Endurance" },
                        { week: 3, objective: "Balance", topics: "One-foot stand", activities: "Stability", assessment: "Stability" },
                        { week: 4, objective: "Coordination", topics: "Ball & movement", activities: "Skill", assessment: "Skill" },
                        { week: 5, objective: "Throwing", topics: "Accuracy", activities: "Improves", assessment: "Improves" },
                        { week: 6, objective: "Catching", topics: "Timed catches", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 7, objective: "Team sports", topics: "Football", activities: "Cooperation", assessment: "Cooperation" },
                        { week: 8, objective: "Agility", topics: "Obstacle running", activities: "Control", assessment: "Control" },
                        { week: 9, objective: "Aerobics", topics: "Dance movement", activities: "Energy", assessment: "Energy" },
                        { week: 10, objective: "Sports day", topics: "Relay", activities: "Participation", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Politeness", topics: "Words choice", activities: "Shows respect", assessment: "Shows respect" },
                        { week: 2, objective: "Self-control", topics: "Turn taking", activities: "Waits", assessment: "Waits" },
                        { week: 3, objective: "Responsibility", topics: "Class job", activities: "Responsible", assessment: "Responsible" },
                        { week: 4, objective: "Conflict solving", topics: "Peace talk", activities: "Resolves", assessment: "Resolves" },
                        { week: 5, objective: "Empathy", topics: "Help others", activities: "Caring", assessment: "Caring" },
                        { week: 6, objective: "Leadership", topics: "Team task", activities: "Leads", assessment: "Leads" },
                        { week: 7, objective: "Self-confidence", topics: "Oral speaking", activities: "Speaks clearly", assessment: "Speaks clearly" },
                        { week: 8, objective: "Decision-making", topics: "Choice games", activities: "Chooses wisely", assessment: "Chooses wisely" },
                        { week: 9, objective: "Hygiene", topics: "Clean practices", activities: "Acts", assessment: "Acts" },
                        { week: 10, objective: "Character celebration", topics: "Certificates", activities: "Self-esteem", assessment: "Self-esteem" }
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
                        { week: 1, objective: "Reading with inflection", topics: "intonation", activities: "Oral reading", assessment: "Expressive" },
                        { week: 2, objective: "Comprehension", topics: "multi-paragraph texts", activities: "Analysis", assessment: "Understands" },
                        { week: 3, objective: "Grammar", topics: "adverbs", activities: "Sorting", assessment: "Identifies" },
                        { week: 4, objective: "Letter writing", topics: "formal letters", activities: "Write a request", assessment: "Formats correctly" },
                        { week: 5, objective: "Poetry", topics: "stanza & meter", activities: "Write poem", assessment: "Uses structure" },
                        { week: 6, objective: "Editing & proofreading", topics: "self-correction", activities: "Fix text", assessment: "Improves accuracy" },
                        { week: 7, objective: "Dialogue writing", topics: "punctuation", activities: "Dialogue script", assessment: "Correct" },
                        { week: 8, objective: "Vocabulary expansion", topics: "antonyms", activities: "Matching", assessment: "Understands" },
                        { week: 9, objective: "Spelling rules", topics: "patterns", activities: "Practice", assessment: "Improves" },
                        { week: 10, objective: "Mid-year review", topics: "Reading & writing", activities: "Presentation", assessment: "Evaluated" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication", topics: "x7, x8, x9", activities: "Skip count", assessment: "Recalls" },
                        { week: 2, objective: "Division", topics: "with remainders", activities: "Solve", assessment: "Understands" },
                        { week: 3, objective: "Fractions", topics: "1/5, 2/5, 3/5", activities: "Fraction models", assessment: "Understands" },
                        { week: 4, objective: "Decimals", topics: "tenths", activities: "Money decimals", assessment: "Correct" },
                        { week: 5, objective: "Measurement", topics: "weight", activities: "Scale", assessment: "Accurate" },
                        { week: 6, objective: "Geometry", topics: "area", activities: "Block counting", assessment: "Understands" },
                        { week: 7, objective: "Data handling", topics: "graphs & charts", activities: "Make bar graph", assessment: "Interprets" },
                        { week: 8, objective: "Estimation", topics: "close values", activities: "Number rounding", assessment: "Applies" },
                        { week: 9, objective: "Algebra basics", topics: "unknowns", activities: "Find missing number", assessment: "Solves" },
                        { week: 10, objective: "Review", topics: "Problem solving", activities: "Math challenge", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Heat", topics: "sources & transfer", activities: "Metal/wood test", assessment: "Understands" },
                        { week: 2, objective: "Electricity", topics: "circuits", activities: "Battery lamp", assessment: "Builds" },
                        { week: 3, objective: "Sound", topics: "pitch & volume", activities: "Rubber band", assessment: "Explains" },
                        { week: 4, objective: "Light", topics: "shadows & angles", activities: "Flashlight test", assessment: "Understands" },
                        { week: 5, objective: "Weather", topics: "forecasting", activities: "Data record", assessment: "Tracks" },
                        { week: 6, objective: "Animal groups", topics: "reptiles, birds", activities: "Sorting", assessment: "Classifies" },
                        { week: 7, objective: "Life cycle", topics: "butterfly", activities: "Chart", assessment: "Understands" },
                        { week: 8, objective: "Rocks & minerals", topics: "types", activities: "Sample study", assessment: "Identifies" },
                        { week: 9, objective: "Safety", topics: "lab rules", activities: "Practice", assessment: "Complies" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Scientific thinking", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "History", topics: "local history", activities: "Timeline", assessment: "Understands" },
                        { week: 2, objective: "Citizenship", topics: "cooperation", activities: "Group task", assessment: "Participates" },
                        { week: 3, objective: "Government", topics: "roles of leaders", activities: "Matching", assessment: "Identifies" },
                        { week: 4, objective: "Flags & symbols", topics: "world flags", activities: "Draw", assessment: "Recognises" },
                        { week: 5, objective: "Economy", topics: "trade", activities: "Exchange activity", assessment: "Understands" },
                        { week: 6, objective: "Population", topics: "density", activities: "Map shading", assessment: "Explains" },
                        { week: 7, objective: "Transport", topics: "global transport", activities: "Sort", assessment: "Classifies" },
                        { week: 8, objective: "Communication", topics: "technology", activities: "Compare", assessment: "Understands" },
                        { week: 9, objective: "Global awareness", topics: "countries", activities: "Globe", assessment: "Recognises" },
                        { week: 10, objective: "Review", topics: "Presentation", activities: "Recap", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Typing speed", topics: "Timed typing", activities: "Improves speed", assessment: "Improves speed" },
                        { week: 2, objective: "Spreadsheet basics", topics: "Simple table", activities: "Creates", assessment: "Creates" },
                        { week: 3, objective: "Word processing", topics: "Formatting", activities: "Edits text", assessment: "Edits text" },
                        { week: 4, objective: "Database idea", topics: "Sorting list", activities: "Organizes", assessment: "Organizes" },
                        { week: 5, objective: "Coding skills", topics: "Loops", activities: "Scratch challenge", assessment: "Scratch challenge" },
                        { week: 6, objective: "Digital ethics", topics: "Online manners", activities: "Understands", assessment: "Understands" },
                        { week: 7, objective: "Internet research", topics: "Proper searching", activities: "Uses keywords", assessment: "Uses keywords" },
                        { week: 8, objective: "Multimedia", topics: "Audio + image", activities: "Digital poster", assessment: "Digital poster" },
                        { week: 9, objective: "File formats", topics: "JPEG, MP3", activities: "Differentiates", assessment: "Differentiates" },
                        { week: 10, objective: "Review", topics: "Project", activities: "Demonstrates", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Shading technique", topics: "Sketching", activities: "Skill", assessment: "Skill" },
                        { week: 2, objective: "Water colour", topics: "Wash painting", activities: "Technique", assessment: "Technique" },
                        { week: 3, objective: "Perspective", topics: "Distance view", activities: "Depth", assessment: "Depth" },
                        { week: 4, objective: "3D design", topics: "Origami", activities: "Forming", assessment: "Forming" },
                        { week: 5, objective: "Cultural motifs", topics: "Tribal patterns", activities: "Symbolism", assessment: "Symbolism" },
                        { week: 6, objective: "Mosaic & tiles", topics: "Paper mosaic", activities: "Pattern", assessment: "Pattern" },
                        { week: 7, objective: "Cartooning", topics: "Character drawing", activities: "Creativity", assessment: "Creativity" },
                        { week: 8, objective: "Art critique", topics: "Analyze art", activities: "Insight", assessment: "Insight" },
                        { week: 9, objective: "Artwork refinement", topics: "Improve draft", activities: "Effort", assessment: "Effort" },
                        { week: 10, objective: "Mini art fair", topics: "Presentation", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Musical patterns", topics: "Clapping sequences", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch control", topics: "Singing", activities: "Steady voice", assessment: "Steady voice" },
                        { week: 3, objective: "Tempo change", topics: "Fast/slow practice", activities: "Coordination", assessment: "Coordination" },
                        { week: 4, objective: "Musical instruments", topics: "Identify sounds", activities: "Recognition", assessment: "Recognition" },
                        { week: 5, objective: "Notation reading", topics: "Note & rest", activities: "Reads", assessment: "Reads" },
                        { week: 6, objective: "Singing in harmony", topics: "Group singing", activities: "Blending", assessment: "Blending" },
                        { week: 7, objective: "Improvisation", topics: "Create melody", activities: "Creativity", assessment: "Creativity" },
                        { week: 8, objective: "Music history", topics: "Composer study", activities: "Understanding", assessment: "Understanding" },
                        { week: 9, objective: "Dance", topics: "Movement", activities: "Expression", assessment: "Expression" },
                        { week: 10, objective: "Performance", topics: "Music event", activities: "Showcase", assessment: "Showcase" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up", topics: "Stretching", activities: "Flexibility", assessment: "Flexibility" },
                        { week: 2, objective: "Strength", topics: "Push-ups", activities: "Muscle control", assessment: "Muscle control" },
                        { week: 3, objective: "Balance", topics: "Beam walk", activities: "Precision", assessment: "Precision" },
                        { week: 4, objective: "Team activity", topics: "Relay", activities: "Cooperation", assessment: "Cooperation" },
                        { week: 5, objective: "Target aim", topics: "Ball throwing", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 6, objective: "Coordination", topics: "Kick/catch", activities: "Skill", assessment: "Skill" },
                        { week: 7, objective: "Flexibility", topics: "Yoga", activities: "Balance", assessment: "Balance" },
                        { week: 8, objective: "Agility", topics: "Quick step", activities: "Speed", assessment: "Speed" },
                        { week: 9, objective: "Aerobic fitness", topics: "Dance", activities: "Stamina", assessment: "Stamina" },
                        { week: 10, objective: "Field activities", topics: "Games", activities: "Participation", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Respect", topics: "Active listening", activities: "Shows", assessment: "Shows" },
                        { week: 2, objective: "Kindness", topics: "Help peers", activities: "Practices", assessment: "Practices" },
                        { week: 3, objective: "Self-awareness", topics: "Strengths list", activities: "Understands", assessment: "Understands" },
                        { week: 4, objective: "Leadership", topics: "Lead group", activities: "Confidence", assessment: "Confidence" },
                        { week: 5, objective: "Peer support", topics: "Encouragement", activities: "Caring", assessment: "Caring" },
                        { week: 6, objective: "Time management", topics: "Daily planning", activities: "Applies", assessment: "Applies" },
                        { week: 7, objective: "Responsibility", topics: "Class duty", activities: "Takes initiative", assessment: "Takes initiative" },
                        { week: 8, objective: "Empathy", topics: "Feelings talk", activities: "Understands", assessment: "Understands" },
                        { week: 9, objective: "Self-confidence", topics: "Public speaking", activities: "Speaks", assessment: "Speaks" },
                        { week: 10, objective: "Character awards", topics: "Celebration", activities: "Positive identity", assessment: "Positive identity" }
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
                        { week: 1, objective: "Dictionary skills", topics: "alphabetical ordering", activities: "Find words", assessment: "Accurate" },
                        { week: 2, objective: "Biography", topics: "famous figures", activities: "Reading", assessment: "Understands" },
                        { week: 3, objective: "Narrative composition", topics: "story writing", activities: "Draft writing", assessment: "Creates" },
                        { week: 4, objective: "Editing work", topics: "final revision", activities: "Correct draft", assessment: "Improves" },
                        { week: 5, objective: "Persuasive writing", topics: "opinions & arguments", activities: "Write opinion piece", assessment: "Reasoning" },
                        { week: 6, objective: "Grammar mastery", topics: "prepositions", activities: "Identify", assessment: "Correct" },
                        { week: 7, objective: "Fact summarization", topics: "main idea", activities: "Condense text", assessment: "Summary accuracy" },
                        { week: 8, objective: "Listening & speaking", topics: "oral skills", activities: "Speech", assessment: "Confidence" },
                        { week: 9, objective: "Reading comprehension", topics: "long texts", activities: "Discussion", assessment: "Critical thinking" },
                        { week: 10, objective: "End of year", topics: "Reading & writing show", activities: "Performance", assessment: "Evaluated" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication mastery", topics: "tables 2–12", activities: "Timed drills", assessment: "Fast recall" },
                        { week: 2, objective: "Division fluency", topics: "÷ tables", activities: "Worksheet", assessment: "Correct" },
                        { week: 3, objective: "Fractions to decimals", topics: "conversions", activities: "Fraction conversion", assessment: "Understands" },
                        { week: 4, objective: "Geometry", topics: "angles & shapes", activities: "Angle finder", assessment: "Identifies" },
                        { week: 5, objective: "Area & perimeter", topics: "2D shapes", activities: "Calculate boundaries", assessment: "Correct" },
                        { week: 6, objective: "Measurement", topics: "volume", activities: "Water measurement", assessment: "Understands" },
                        { week: 7, objective: "Graphs", topics: "line graphs", activities: "Draw & read", assessment: "Interprets" },
                        { week: 8, objective: "Algebra basics", topics: "patterns", activities: "Find rule", assessment: "Logical" },
                        { week: 9, objective: "Problem solving", topics: "multi-step", activities: "Brain tasks", assessment: "Accurate" },
                        { week: 10, objective: "Year end review", topics: "Mixed revision", activities: "Math mastery", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Earth", topics: "continents & oceans", activities: "Mapping", assessment: "Identifies" },
                        { week: 2, objective: "Solar system", topics: "planets", activities: "Orbit demonstration", assessment: "Explains" },
                        { week: 3, objective: "Energy sources", topics: "renewable", activities: "Research", assessment: "Understands" },
                        { week: 4, objective: "Pollution", topics: "types & effects", activities: "Sorting waste", assessment: "Awareness" },
                        { week: 5, objective: "Water safety", topics: "clean vs dirty", activities: "Filtration", assessment: "Understands" },
                        { week: 6, objective: "Animal behaviour", topics: "adaptations", activities: "Examples", assessment: "Explains" },
                        { week: 7, objective: "Weather tools", topics: "thermometer, barometer", activities: "Use tools", assessment: "Measures" },
                        { week: 8, objective: "Technology", topics: "past & present", activities: "Compare", assessment: "Understands" },
                        { week: 9, objective: "Safety & responsibility", topics: "lab & home", activities: "Rule review", assessment: "Practices" },
                        { week: 10, objective: "Science Fair", topics: "Presentation", activities: "Confidence", assessment: "Evaluated" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Family history", topics: "lineage", activities: "Family tree", assessment: "Creates" },
                        { week: 2, objective: "Local heritage", topics: "traditions", activities: "Research", assessment: "Understands" },
                        { week: 3, objective: "Nationhood", topics: "anthem & flag", activities: "Recite", assessment: "Pride" },
                        { week: 4, objective: "Citizenship", topics: "rights & duties", activities: "Discussion", assessment: "Understanding" },
                        { week: 5, objective: "Economics", topics: "money use", activities: "Budgeting", assessment: "Practices" },
                        { week: 6, objective: "Trade", topics: "import/export", activities: "Simulation", assessment: "Understands" },
                        { week: 7, objective: "World cultures", topics: "comparison", activities: "Cultural display", assessment: "Respect" },
                        { week: 8, objective: "Leadership", topics: "service", activities: "Role-play", assessment: "Learns" },
                        { week: 9, objective: "Public service", topics: "community help", activities: "Volunteer ideas", assessment: "Aware" },
                        { week: 10, objective: "Review", topics: "Class quiz", activities: "Knowledge retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Document formatting", topics: "Page layout", activities: "Formats", assessment: "Formats" },
                        { week: 2, objective: "Spreadsheet", topics: "Simple calculations", activities: "Uses", assessment: "Uses" },
                        { week: 3, objective: "Presentation slides", topics: "Create PowerPoint", activities: "Designs", assessment: "Designs" },
                        { week: 4, objective: "Photo editing", topics: "Crop/colour", activities: "Applies", assessment: "Applies" },
                        { week: 5, objective: "Video recording", topics: "Short project", activities: "Records", assessment: "Records" },
                        { week: 6, objective: "Coding challenges", topics: "Debugging", activities: "Solves", assessment: "Solves" },
                        { week: 7, objective: "Digital research", topics: "Fact checking", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 8, objective: "Email communication", topics: "Formal email", activities: "Writes", assessment: "Writes" },
                        { week: 9, objective: "Online identity", topics: "safety", activities: "Understands", assessment: "Understands" },
                        { week: 10, objective: "Final digital project", topics: "Portfolio", activities: "Demonstrates", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Perspective drawing", topics: "Depth lines", activities: "Understands", assessment: "Understands" },
                        { week: 2, objective: "Portrait", topics: "Realism", activities: "Accuracy", assessment: "Accuracy" },
                        { week: 3, objective: "Charcoal art", topics: "Sketching", activities: "Shading", assessment: "Shading" },
                        { week: 4, objective: "Cultural patterns", topics: "Heritage art", activities: "Correct motif", assessment: "Correct motif" },
                        { week: 5, objective: "3D model", topics: "Cardboard craft", activities: "Structures", assessment: "Structures" },
                        { week: 6, objective: "Art reflection", topics: "Critique", activities: "Insight", assessment: "Insight" },
                        { week: 7, objective: "Poster design", topics: "Graphic layout", activities: "Creativity", assessment: "Creativity" },
                        { week: 8, objective: "Colour psychology", topics: "Warm/cool", activities: "Knowledge", assessment: "Knowledge" },
                        { week: 9, objective: "Artwork finish", topics: "Polish work", activities: "Neatness", assessment: "Neatness" },
                        { week: 10, objective: "Art exhibition", topics: "Showcase", activities: "Confidence", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Chords", topics: "Keyboard practice", activities: "Learns", assessment: "Learns" },
                        { week: 2, objective: "Harmony", topics: "Group singing", activities: "Blends", assessment: "Blends" },
                        { week: 3, objective: "Pitch accuracy", topics: "Voice test", activities: "Correct", assessment: "Correct" },
                        { week: 4, objective: "Melody", topics: "Tune creation", activities: "Invents", assessment: "Invents" },
                        { week: 5, objective: "Notation reading", topics: "Advanced", activities: "Reads", assessment: "Reads" },
                        { week: 6, objective: "Improvisation", topics: "Jazz concept", activities: "Attempts", assessment: "Attempts" },
                        { week: 7, objective: "Cultural rhythms", topics: "World music", activities: "Appreciates", assessment: "Appreciates" },
                        { week: 8, objective: "Dance coordination", topics: "Choreography", activities: "Sync", assessment: "Sync" },
                        { week: 9, objective: "Performance preparation", topics: "Rehearsal", activities: "Shows readiness", assessment: "Shows readiness" },
                        { week: 10, objective: "Grand performance", topics: "Final concert", activities: "Success", assessment: "Success" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up", topics: "Athletic stretch", activities: "Flexible", assessment: "Flexible" },
                        { week: 2, objective: "Speed", topics: "Timed sprint", activities: "Improves", assessment: "Improves" },
                        { week: 3, objective: "Coordination", topics: "Ball run", activities: "Skill", assessment: "Skill" },
                        { week: 4, objective: "Team game", topics: "Basketball", activities: "Cooperation", assessment: "Cooperation" },
                        { week: 5, objective: "Agility", topics: "Quick turn drill", activities: "Fast", assessment: "Fast" },
                        { week: 6, objective: "Strength", topics: "Resistance", activities: "Effort", assessment: "Effort" },
                        { week: 7, objective: "Endurance", topics: "Jogging laps", activities: "Stamina", assessment: "Stamina" },
                        { week: 8, objective: "Balance", topics: "One-leg stand", activities: "Stable", assessment: "Stable" },
                        { week: 9, objective: "Rhythm movement", topics: "Dance exercise", activities: "Fluid", assessment: "Fluid" },
                        { week: 10, objective: "Sports challenge", topics: "Group games", activities: "Team spirit", assessment: "Team spirit" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Growth mindset", topics: "Effort praise", activities: "Confidence", assessment: "Confidence" },
                        { week: 2, objective: "Respect for diversity", topics: "Culture talk", activities: "Empathy", assessment: "Empathy" },
                        { week: 3, objective: "Resilience", topics: "Difficult tasks", activities: "Persistence", assessment: "Persistence" },
                        { week: 4, objective: "Public speaking", topics: "Speech", activities: "Clarity", assessment: "Clarity" },
                        { week: 5, objective: "Leadership", topics: "Leading teams", activities: "Responsibility", assessment: "Responsibility" },
                        { week: 6, objective: "Goal setting", topics: "Plan making", activities: "Determination", assessment: "Determination" },
                        { week: 7, objective: "Financial literacy", topics: "Budgeting", activities: "Understanding", assessment: "Understanding" },
                        { week: 8, objective: "Health responsibility", topics: "Healthy habits", activities: "Awareness", assessment: "Awareness" },
                        { week: 9, objective: "Virtue & ethics", topics: "Right vs wrong", activities: "Critical moral", assessment: "Critical moral" },
                        { week: 10, objective: "Character award", topics: "Certificate", activities: "Identity building", assessment: "Identity building" }
                    ]
                }
            ]
        }
    ]
};
