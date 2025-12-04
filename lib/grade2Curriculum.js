
export const grade2CurriculumData = {
    alignments: [
        { name: "Common Core State Standards (USA)", url: "https://www.corestandards.org/" },
        { name: "UK National Curriculum – Key Stage 1", url: "https://www.gov.uk/national-curriculum" },
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
                        { week: 1, objective: "Reading fluency", topics: "word patterns", activities: "Guided reading", assessment: "Reads smoothly" },
                        { week: 2, objective: "Grammar", topics: "nouns & verbs", activities: "Word sorting", assessment: "Identifies correctly" },
                        { week: 3, objective: "Vocabulary growth", topics: "Synonyms", activities: "Word matching", assessment: "Uses new words" },
                        { week: 4, objective: "Sentence construction", topics: "subject/predicate", activities: "Sentence building", assessment: "Writes clearly" },
                        { week: 5, objective: "Comprehension", topics: "short stories", activities: "Q&A", assessment: "Understands meaning" },
                        { week: 6, objective: "Tenses", topics: "past/present", activities: "Verb sort", assessment: "Uses properly" },
                        { week: 7, objective: "Descriptive writing", topics: "Adjectives", activities: "Describe animal", assessment: "Uses descriptors" },
                        { week: 8, objective: "Story structure", topics: "Characters", activities: "Character map", assessment: "Identifies traits" },
                        { week: 9, objective: "Handwriting", topics: "cursive start", activities: "Practice sheets", assessment: "Neatness check" },
                        { week: 10, objective: "Review", topics: "term revision", activities: "Reading showcase", assessment: "Performance" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Count to 1,000", topics: "place value", activities: "Block counters", assessment: "Counts correctly" },
                        { week: 2, objective: "Addition", topics: "2-digit", activities: "Carrying", assessment: "Solves" },
                        { week: 3, objective: "Subtraction", topics: "2-digit", activities: "Borrowing", assessment: "Solves" },
                        { week: 4, objective: "Intro multiplication", topics: "x2,x5,x10", activities: "Skip count", assessment: "Understands" },
                        { week: 5, objective: "Division", topics: "halving/sharing", activities: "Equal parts", assessment: "Accurate" },
                        { week: 6, objective: "Fractions", topics: "½ ¼", activities: "Pizza fractions", assessment: "Identifies" },
                        { week: 7, objective: "Measurement", topics: "Length", activities: "Ruler", assessment: "Measures" },
                        { week: 8, objective: "Time", topics: "hour/half hour", activities: "Clock read", assessment: "Reads time" },
                        { week: 9, objective: "Money", topics: "coins & notes", activities: "Store role-play", assessment: "Identifies" },
                        { week: 10, objective: "Review", topics: "Revision stations", activities: "Mixed problems", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Living things", topics: "plants & animals", activities: "Sorting", assessment: "Correct" },
                        { week: 2, objective: "Plant life", topics: "roots/leaves", activities: "Leaf rub", assessment: "Explains" },
                        { week: 3, objective: "Habitats", topics: "forest/ocean", activities: "Picture sort", assessment: "Matches" },
                        { week: 4, objective: "Energy", topics: "sun/wind", activities: "Discussion", assessment: "Understands" },
                        { week: 5, objective: "Forces", topics: "push/pull", activities: "Object movement", assessment: "Explains" },
                        { week: 6, objective: "States of matter", topics: "solid/liquid/gas", activities: "Ice testing", assessment: "Identifies" },
                        { week: 7, objective: "Water cycle", topics: "evap/condensation", activities: "Diagram", assessment: "Explains" },
                        { week: 8, objective: "Materials", topics: "wood/metal", activities: "Texture sort", assessment: "Labels" },
                        { week: 9, objective: "Magnets", topics: "attract/repel", activities: "Magnet play", assessment: "Identifies" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Science recap", assessment: "Retention" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Device types", topics: "computer, tablet", activities: "Picture ID", assessment: "Recognizes" },
                        { week: 2, objective: "Mouse skills", topics: "drag & drop", activities: "Games", assessment: "Accurate" },
                        { week: 3, objective: "Keyboard skills", topics: "type name", activities: "Typing", assessment: "Correct" },
                        { week: 4, objective: "Open programs", topics: "icons", activities: "Paint app", assessment: "Launches" },
                        { week: 5, objective: "Digital art", topics: "drawing tool", activities: "Paint picture", assessment: "Creates" },
                        { week: 6, objective: "Coding basics", topics: "sequence", activities: "Scratch Jr", assessment: "Correct" },
                        { week: 7, objective: "Audio input", topics: "record voice", activities: "Record & play", assessment: "Uses" },
                        { week: 8, objective: "Safe internet", topics: "no personal info", activities: "Discussion", assessment: "Understands" },
                        { week: 9, objective: "Image search", topics: "supervised", activities: "Find animal", assessment: "Correct" },
                        { week: 10, objective: "Review", topics: "Choice activity", activities: "Skill test", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Primary colours", activities: "Painting", assessment: "Recognises" },
                        { week: 2, objective: "Mixed colours", activities: "Colour blending", assessment: "Creates" },
                        { week: 3, objective: "Nature art", activities: "Leaf stamping", assessment: "Uses texture" },
                        { week: 4, objective: "Shape art", activities: "Collage", assessment: "Uses shapes" },
                        { week: 5, objective: "Clay modeling", activities: "Animal making", assessment: "Forms shapes" },
                        { week: 6, objective: "Paper craft", activities: "Cut & fold", assessment: "Controls" },
                        { week: 7, objective: "Drawing", activities: "Still life", assessment: "Accuracy" },
                        { week: 8, objective: "Theme art", activities: "Weather art", assessment: "Represents" },
                        { week: 9, objective: "Creative free art", activities: "Free drawing", assessment: "Expression" },
                        { week: 10, objective: "Art exhibition", activities: "Showcase", assessment: "Presentation" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm", activities: "Clapping", assessment: "Follows pattern" },
                        { week: 2, objective: "Tempo", activities: "Fast/slow", assessment: "Moves correctly" },
                        { week: 3, objective: "Pitch", activities: "High/low", assessment: "Identifies" },
                        { week: 4, objective: "Melody", activities: "Sing note", assessment: "Performs" },
                        { week: 5, objective: "Percussion", activities: "Drums", assessment: "Keeps beat" },
                        { week: 6, objective: "Call & response", activities: "Echo games", assessment: "Responds" },
                        { week: 7, objective: "Creative rhythm", activities: "Make beat", assessment: "Invents" },
                        { week: 8, objective: "Listening", activities: "Music reactions", assessment: "Understands" },
                        { week: 9, objective: "Dance", activities: "Movement", assessment: "Expresses" },
                        { week: 10, objective: "Performance", activities: "Mini concert", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Stretching", activities: "Warm-up", assessment: "Flexibility" },
                        { week: 2, objective: "Running", activities: "Sprint", assessment: "Stamina" },
                        { week: 3, objective: "Balance", activities: "Beam walk", assessment: "Stability" },
                        { week: 4, objective: "Coordination", activities: "Hop & jump", assessment: "Control" },
                        { week: 5, objective: "Throwing", activities: "Target toss", assessment: "Accuracy" },
                        { week: 6, objective: "Catching", activities: "Ball catch", assessment: "Timing" },
                        { week: 7, objective: "Team play", activities: "Relay games", assessment: "Teamwork" },
                        { week: 8, objective: "Agility", activities: "Obstacle course", assessment: "Navigation" },
                        { week: 9, objective: "Strength", activities: "Core exercise", assessment: "Effort" },
                        { week: 10, objective: "Sports day", activities: "Games", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Politeness", activities: "Please/thank you", assessment: "Uses" },
                        { week: 2, objective: "Respect", activities: "Listening", assessment: "Shows" },
                        { week: 3, objective: "Sharing", activities: "Toys", assessment: "Shares" },
                        { week: 4, objective: "Emotions", activities: "Identify feelings", assessment: "Expresses" },
                        { week: 5, objective: "Confidence", activities: "Speaking", assessment: "Participates" },
                        { week: 6, objective: "Friendship", activities: "Working in pairs", assessment: "Cooperates" },
                        { week: 7, objective: "Responsibility", activities: "Class duties", assessment: "Acts responsible" },
                        { week: 8, objective: "Self-care", activities: "Hygiene", assessment: "Practices" },
                        { week: 9, objective: "Kindness", activities: "Helping others", assessment: "Shows empathy" },
                        { week: 10, objective: "Character celebration", activities: "Certificates", assessment: "Positive self-esteem" }
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
                        { week: 1, objective: "Complex sentences", topics: "and/but/because", activities: "Join sentences", assessment: "Creates complex sentences" },
                        { week: 2, objective: "Fact vs opinion", topics: "nonfiction analysis", activities: "Sorting statements", assessment: "Differentiates" },
                        { week: 3, objective: "Poetry", topics: "rhyming & rhythm", activities: "Poem creation", assessment: "Creates verses" },
                        { week: 4, objective: "Comprehension", topics: "paragraph reading", activities: "Inference questions", assessment: "Understands text" },
                        { week: 5, objective: "Editing", topics: "fix sentence errors", activities: "Correction tasks", assessment: "Improves grammar" },
                        { week: 6, objective: "Plurals", topics: "regular/irregular", activities: "Sorting", assessment: "Identifies correctly" },
                        { week: 7, objective: "Letter writing", topics: "friendly letters", activities: "Write real letter", assessment: "Follows format" },
                        { week: 8, objective: "Listening & recall", topics: "audio stories", activities: "Short dictation", assessment: "Remembers details" },
                        { week: 9, objective: "Spelling", topics: "pattern words", activities: "Daily drills", assessment: "Improves accuracy" },
                        { week: 10, objective: "Review", topics: "Reading & writing", activities: "Literacy showcase", assessment: "Performance" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication", topics: "x3, x4", activities: "Times-table chanting", assessment: "Recalls" },
                        { week: 2, objective: "Division", topics: "division with remainders", activities: "Sharing objects", assessment: "Solves" },
                        { week: 3, objective: "Addition", topics: "3-digit", activities: "Column method", assessment: "Correct" },
                        { week: 4, objective: "Subtraction", topics: "3-digit borrowing", activities: "Block grouping", assessment: "Correct" },
                        { week: 5, objective: "Fractions", topics: "1/3, 2/3", activities: "Fraction tiles", assessment: "Identifies" },
                        { week: 6, objective: "Geometry", topics: "edges & corners", activities: "3D model making", assessment: "Recognizes" },
                        { week: 7, objective: "Measurement", topics: "mass & weight", activities: "Scale reading", assessment: "Measures" },
                        { week: 8, objective: "Estimation", topics: "approximation", activities: "Guess & check", assessment: "Understands" },
                        { week: 9, objective: "Data", topics: "bar charts", activities: "Make chart", assessment: "Interprets data" },
                        { week: 10, objective: "Mid-year test", topics: "mixed problems", activities: "Math challenges", assessment: "Accuracy" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Digestion", topics: "food process", activities: "Diagram", assessment: "Understands" },
                        { week: 2, objective: "Heat", topics: "sources & effects", activities: "Heat sorting", assessment: "Identifies" },
                        { week: 3, objective: "Sound", topics: "vibrations", activities: "String phones", assessment: "Explains" },
                        { week: 4, objective: "Light", topics: "reflection", activities: "Mirror tests", assessment: "Understands" },
                        { week: 5, objective: "Weather recording", topics: "patterns", activities: "Weather log", assessment: "Records" },
                        { week: 6, objective: "Movement", topics: "wheels & axles", activities: "Rolling objects", assessment: "Observes" },
                        { week: 7, objective: "Electricity", topics: "safety & uses", activities: "Safety talk", assessment: "Aware" },
                        { week: 8, objective: "Body systems", topics: "respiratory", activities: "Breathing demo", assessment: "Explains" },
                        { week: 9, objective: "Life cycles", topics: "frog/plant", activities: "Comparison", assessment: "Understands" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Science skills", assessment: "Good retention" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Rules & responsibility", topics: "rights", activities: "Role-play", assessment: "Understands roles" },
                        { week: 2, objective: "Community map", topics: "local area", activities: "Mapping", assessment: "Uses map symbols" },
                        { week: 3, objective: "Jobs & roles", topics: "workers", activities: "Dress-up", assessment: "Names occupations" },
                        { week: 4, objective: "Needs vs wants", topics: "finance basics", activities: "Sorting", assessment: "Understands" },
                        { week: 5, objective: "Religions & cultures", topics: "inclusion", activities: "Sharing", assessment: "Respectful" },
                        { week: 6, objective: "Transportation", topics: "land/air/water", activities: "Sorting", assessment: "Classifies" },
                        { week: 7, objective: "Communication", topics: "past vs present", activities: "Timeline", assessment: "Understands change" },
                        { week: 8, objective: "Leadership", topics: "role in community", activities: "Class roles", assessment: "Participates" },
                        { week: 9, objective: "World knowledge", topics: "continents", activities: "Globe work", assessment: "Identifies" },
                        { week: 10, objective: "Review", topics: "Present learnings", activities: "Oral presentation", assessment: "Confidence" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Browser skills", topics: "search basics", activities: "Find images", assessment: "Correct" },
                        { week: 2, objective: "Typing", topics: "short sentences", activities: "Typing drills", assessment: "Improves speed" },
                        { week: 3, objective: "Saving files", topics: "folder creation", activities: "Save documents", assessment: "Organizes" },
                        { week: 4, objective: "Shortcuts", topics: "copy/paste", activities: "Keyboard practice", assessment: "Uses" },
                        { week: 5, objective: "Digital art", topics: "colouring tools", activities: "Paint program", assessment: "Creates" },
                        { week: 6, objective: "Coding", topics: "block programming", activities: "Scratch Jr", assessment: "Sequences" },
                        { week: 7, objective: "Digital media", topics: "audio/image", activities: "Make presentation", assessment: "Combines media" },
                        { week: 8, objective: "Safety", topics: "digital footprint", activities: "Safety quiz", assessment: "Understands" },
                        { week: 9, objective: "Email basics", topics: "message format", activities: "Simulated email", assessment: "Formats properly" },
                        { week: 10, objective: "ICT review", topics: "Choice activity", activities: "Demonstration", assessment: "Skill competence" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour mixing", activities: "Paint blends", assessment: "Creates new colours" },
                        { week: 2, objective: "Landscape art", activities: "Draw scenery", assessment: "Represents environment" },
                        { week: 3, objective: "Portrait drawing", activities: "Face features", assessment: "Proportion awareness" },
                        { week: 4, objective: "Texture", activities: "Rubbings", assessment: "Identifies" },
                        { week: 5, objective: "Collage", activities: "Mixed materials", assessment: "Layering skill" },
                        { week: 6, objective: "Clay work", activities: "Shape models", assessment: "3D thinking" },
                        { week: 7, objective: "Printing", activities: "Stamp art", assessment: "Pattern creation" },
                        { week: 8, objective: "Imaginative art", activities: "Free style", assessment: "Creative thinking" },
                        { week: 9, objective: "Themed art", activities: "Weather art", assessment: "Shows concept" },
                        { week: 10, objective: "Art display", activities: "Class gallery", assessment: "Presentation" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm", activities: "Clapping combos", assessment: "Follows" },
                        { week: 2, objective: "Pitch", activities: "Voice variation", assessment: "Produces" },
                        { week: 3, objective: "Tempo", activities: "Instrument speed", assessment: "Maintains" },
                        { week: 4, objective: "Melody", activities: "Song practice", assessment: "Improves" },
                        { week: 5, objective: "Percussion", activities: "Tambourine", assessment: "Keeps beat" },
                        { week: 6, objective: "Harmony", activities: "Group singing", assessment: "Blends" },
                        { week: 7, objective: "Composition", activities: "Make rhythm", assessment: "Invents" },
                        { week: 8, objective: "Music appreciation", activities: "Listening", assessment: "Responds" },
                        { week: 9, objective: "Dance", activities: "Creative movement", assessment: "Expressive" },
                        { week: 10, objective: "Performance", activities: "Music show", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up", activities: "Stretches", assessment: "Body control" },
                        { week: 2, objective: "Speed", activities: "Racing", assessment: "Fast movement" },
                        { week: 3, objective: "Balance", activities: "Beam", assessment: "Stable" },
                        { week: 4, objective: "Agility", activities: "Jumping", assessment: "Fast reactions" },
                        { week: 5, objective: "Throwing", activities: "Ball toss", assessment: "Accuracy" },
                        { week: 6, objective: "Catching", activities: "Timed catching", assessment: "Improvement" },
                        { week: 7, objective: "Team work", activities: "Paired games", assessment: "Cooperates" },
                        { week: 8, objective: "Strength", activities: "Light exercises", assessment: "Endurance" },
                        { week: 9, objective: "Coordination", activities: "Ball control", assessment: "Skill" },
                        { week: 10, objective: "Fitness day", activities: "Relay games", assessment: "Effort" }
                    ]
                },
                {
                    name: "PSED / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Manners", activities: "Class etiquette", assessment: "Uses" },
                        { week: 2, objective: "Respect for others", activities: "Listening", assessment: "Shows" },
                        { week: 3, objective: "Sharing & fairness", activities: "Games", assessment: "Shares" },
                        { week: 4, objective: "Problem-solving", activities: "Conflict role-play", assessment: "Resolves" },
                        { week: 5, objective: "Confidence", activities: "Speaking", assessment: "Tries" },
                        { week: 6, objective: "Empathy", activities: "Care for others", assessment: "Shows" },
                        { week: 7, objective: "Responsibility", activities: "Assigned jobs", assessment: "Acts responsibly" },
                        { week: 8, objective: "Hygiene", activities: "Wash & clean", assessment: "Practices" },
                        { week: 9, objective: "Self-identity", activities: "Strengths", assessment: "Recognizes" },
                        { week: 10, objective: "Values celebration", activities: "Certificates", assessment: "Positive self-esteem" }
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
                        { week: 1, objective: "Use dictionary", topics: "alphabetical order", activities: "Dictionary tasks", assessment: "Finds words" },
                        { week: 2, objective: "Biography reading", topics: "real figures", activities: "Reading", assessment: "Understands" },
                        { week: 3, objective: "Drama", topics: "dialogue reading", activities: "Role play", assessment: "Participates" },
                        { week: 4, objective: "Report writing", topics: "facts first", activities: "Write report", assessment: "Organizes facts" },
                        { week: 5, objective: "Inference", topics: "reading between lines", activities: "Comprehension", assessment: "Understands deeper meaning" },
                        { week: 6, objective: "Tenses", topics: "past/present/future", activities: "Sorting cards", assessment: "Correct" },
                        { week: 7, objective: "Story writing", topics: "creative work", activities: "Write a tale", assessment: "Creates" },
                        { week: 8, objective: "Public speaking", topics: "voice & clarity", activities: "Presentations", assessment: "Speaks confidently" },
                        { week: 9, objective: "Editing", topics: "self-correction", activities: "Fix writing", assessment: "Improves" },
                        { week: 10, objective: "Showcase", topics: "Reading aloud", activities: "Performance", assessment: "Achievement" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Multiplication mastery", topics: "2-10 tables", activities: "Rapid drills", assessment: "Recalls" },
                        { week: 2, objective: "Division mastery", topics: "division facts", activities: "Worksheet", assessment: "Correct" },
                        { week: 3, objective: "Fractions", topics: "1/5-4/5", activities: "Visual models", assessment: "Understands" },
                        { week: 4, objective: "Decimals", topics: "Understand tenths", activities: "Money decimals", assessment: "Connects" },
                        { week: 5, objective: "Angles", topics: "right/acute/obtuse", activities: "Arm angles", assessment: "Understands" },
                        { week: 6, objective: "Measurement", topics: "temperature", activities: "Thermometer", assessment: "Reads" },
                        { week: 7, objective: "Patterns", topics: "predict sequences", activities: "Number puzzles", assessment: "Solves" },
                        { week: 8, objective: "Math word problems", topics: "logic", activities: "Brain games", assessment: "Thinks logically" },
                        { week: 9, objective: "Mixed operations", topics: "+ - x ÷", activities: "Practice", assessment: "Accurate" },
                        { week: 10, objective: "Final review", topics: "Math marathon", activities: "Stations", assessment: "Strong mastery" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Earth layers", topics: "core/crust", activities: "Diagram", assessment: "Labels" },
                        { week: 2, objective: "Planets", topics: "solar system", activities: "Model making", assessment: "Names planets" },
                        { week: 3, objective: "Ecosystems", topics: "forest, desert, ocean", activities: "Sorting", assessment: "Classifies" },
                        { week: 4, objective: "Electricity", topics: "simple circuits", activities: "Paper circuit", assessment: "Demonstrates" },
                        { week: 5, objective: "Water processes", topics: "filtration", activities: "Filter demo", assessment: "Understands" },
                        { week: 6, objective: "Properties of materials", topics: "test absorption", activities: "Experiments", assessment: "Observes" },
                        { week: 7, objective: "Motion", topics: "speed testing", activities: "Rolling objects", assessment: "Records" },
                        { week: 8, objective: "Inventions", topics: "famous inventors", activities: "History talk", assessment: "Understands" },
                        { week: 9, objective: "Pollution", topics: "effects", activities: "Sorting trash", assessment: "Understands" },
                        { week: 10, objective: "Science fair!", topics: "present knowledge", activities: "Showcase", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Family history", topics: "timeline", activities: "Family tree", assessment: "Creates" },
                        { week: 2, objective: "Past vs present", topics: "change over time", activities: "Compare objects", assessment: "Understands" },
                        { week: 3, objective: "National identity", topics: "anthem & emblem", activities: "Recite anthem", assessment: "Identifies" },
                        { week: 4, objective: "Ethics", topics: "right vs wrong", activities: "Class debate", assessment: "Moral reasoning" },
                        { week: 5, objective: "Diversity", topics: "culture & race", activities: "Shares traditions", assessment: "Respects" },
                        { week: 6, objective: "Community contribution", topics: "volunteering", activities: "Helping week", assessment: "Participates" },
                        { week: 7, objective: "Mapping skills", topics: "directions", activities: "North/E/W/S", assessment: "Uses" },
                        { week: 8, objective: "Economic basics", topics: "goods/services", activities: "Role-play shop", assessment: "Understands" },
                        { week: 9, objective: "Leaders", topics: "history & present", activities: "Biographies", assessment: "Recognizes" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Group performance", assessment: "Retention" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Emails", topics: "communication", activities: "Practice writing", assessment: "Formats" },
                        { week: 2, objective: "Digital presentation", topics: "slides", activities: "Make simple slides", assessment: "Creates" },
                        { week: 3, objective: "Multimedia", topics: "combine text & audio", activities: "Digital poster", assessment: "Uses tools" },
                        { week: 4, objective: "Simple database", topics: "sorting info", activities: "List tasks", assessment: "Organizes" },
                        { week: 5, objective: "Internet use", topics: "safe searching", activities: "Keyword tests", assessment: "Uses wisely" },
                        { week: 6, objective: "Coding logic", topics: "loops & conditions", activities: "Scratch coding", assessment: "Applies" },
                        { week: 7, objective: "Game-based computing", topics: "problem solving", activities: "Coding games", assessment: "Solves" },
                        { week: 8, objective: "Digital responsibility", topics: "online safety", activities: "Case examples", assessment: "Understands" },
                        { week: 9, objective: "Typing speed", topics: "improvement", activities: "Timed typing", assessment: "Improves" },
                        { week: 10, objective: "Skill review", topics: "Portfolio", activities: "ICT showcase", assessment: "Presents confidently" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Portrait painting", activities: "Face proportions", assessment: "Draws accurately" },
                        { week: 2, objective: "Landscape painting", activities: "Shading", assessment: "Uses depth" },
                        { week: 3, objective: "Still life", activities: "Object study", assessment: "Observation accuracy" },
                        { week: 4, objective: "Cultural art", activities: "Ethnic symbols", assessment: "Uses patterns" },
                        { week: 5, objective: "3D model", activities: "paper construction", assessment: "Builds" },
                        { week: 6, objective: "Art critique", activities: "Discuss art", assessment: "Expresses opinions" },
                        { week: 7, objective: "Theme-based drawing", activities: "Earth/space", assessment: "Interprets" },
                        { week: 8, objective: "Art history", activities: "famous artists", assessment: "Identifies works" },
                        { week: 9, objective: "Free creativity", activities: "Student choice", assessment: "Shows innovation" },
                        { week: 10, objective: "Art showcase", activities: "Gallery presentation", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Harmony", activities: "Group singing", assessment: "Blends" },
                        { week: 2, objective: "Melody creation", activities: "Making tunes", assessment: "Creates" },
                        { week: 3, objective: "Chords", activities: "Keyboard basics", assessment: "Identifies" },
                        { week: 4, objective: "Instrumentation", activities: "Class instruments", assessment: "Plays" },
                        { week: 5, objective: "Music notation", activities: "Reading simple notes", assessment: "Reads" },
                        { week: 6, objective: "Dynamics", activities: "soft vs loud", assessment: "Applies" },
                        { week: 7, objective: "Songwriting", activities: "Creating lyrics", assessment: "Composes" },
                        { week: 8, objective: "Cultural songs", activities: "Music from world", assessment: "Appreciates" },
                        { week: 9, objective: "Dance choreography", activities: "Scripted dance", assessment: "Moves in time" },
                        { week: 10, objective: "Year-end performance", activities: "Musical show", assessment: "Performs" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Fitness", activities: "Daily stretching", assessment: "Stamina" },
                        { week: 2, objective: "Speed", activities: "Timed races", assessment: "Improvement" },
                        { week: 3, objective: "Throw accuracy", activities: "Aim target", assessment: "Correct distance" },
                        { week: 4, objective: "Catching", activities: "Coordination", assessment: "Success rate" },
                        { week: 5, objective: "Jumping", activities: "High & long jump", assessment: "Technique" },
                        { week: 6, objective: "Agility", activities: "Quick turns", assessment: "Footwork" },
                        { week: 7, objective: "Strength", activities: "Push/pull", assessment: "Effort" },
                        { week: 8, objective: "Team sports", activities: "Mini football", assessment: "Participation" },
                        { week: 9, objective: "Aerobic exercise", activities: "Dance fitness", assessment: "Energy" },
                        { week: 10, objective: "Sports finals", activities: "Team competition", assessment: "Team spirit" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Positive identity", activities: "Personal affirmations", assessment: "Confidence" },
                        { week: 2, objective: "Respect", activities: "Listening", assessment: "Cooperation" },
                        { week: 3, objective: "Communication", activities: "Express feelings", assessment: "Clarity" },
                        { week: 4, objective: "Conflict resolution", activities: "Peace talk", assessment: "Resolution" },
                        { week: 5, objective: "Leadership", activities: "Group tasks", assessment: "Takes initiative" },
                        { week: 6, objective: "Choice-making", activities: "Decision games", assessment: "Good judgment" },
                        { week: 7, objective: "Goal-setting", activities: "Planning", assessment: "Responsibility" },
                        { week: 8, objective: "Health & hygiene", activities: "Practice", assessment: "Good habits" },
                        { week: 9, objective: "Citizenship", activities: "Service", assessment: "Helping attitude" },
                        { week: 10, objective: "Character recognition", activities: "Awards", assessment: "Self-esteem" }
                    ]
                }
            ]
        }
    ]
};
