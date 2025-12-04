// Grade 1 Complete Curriculum - All 3 Terms
export const grade1CurriculumData = {
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
                    name: "English Language",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Word recognition", topics: "sight words", activities: "Word wall", assessment: "Reads correctly" },
                        { week: 2, objective: "Phonemic awareness", topics: "blends", activities: "Sound segmentation", assessment: "Blends accurately" },
                        { week: 3, objective: "Write simple sentences", topics: "capitalization", activities: "Sentence writing", assessment: "Writes correctly" },
                        { week: 4, objective: "Nouns", topics: "people, places", activities: "Noun hunt", assessment: "Identifies nouns" },
                        { week: 5, objective: "Reading comprehension", topics: "short passages", activities: "Question & Answer", assessment: "Understands text" },
                        { week: 6, objective: "Verbs", topics: "action words", activities: "Act-the-verb", assessment: "Identifies verbs" },
                        { week: 7, objective: "Adjectives", topics: "describing words", activities: "Describe objects", assessment: "Uses adjectives" },
                        { week: 8, objective: "Opposites", topics: "antonyms", activities: "Matching cards", assessment: "Uses correct pairs" },
                        { week: 9, objective: "Pronouns", topics: "replacing nouns", activities: "He/She/They", assessment: "Substitutes correctly" },
                        { week: 10, objective: "Revision", topics: "review", activities: "Reading showcase", assessment: "Demonstrates skills" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Count to 100", topics: "number sequence", activities: "Counting games", assessment: "Counts fluently" },
                        { week: 2, objective: "Place value", topics: "tens/ones", activities: "Block grouping", assessment: "Understands position" },
                        { week: 3, objective: "Addition", topics: "up to 20", activities: "Counter addition", assessment: "Adds correctly" },
                        { week: 4, objective: "Subtraction", topics: "up to 20", activities: '"Take away" game', assessment: "Subtracts correctly" },
                        { week: 5, objective: "Number bonds", topics: "10 & 20", activities: "Pairing", assessment: "Recalls bonds" },
                        { week: 6, objective: "Shapes", topics: "2D & 3D", activities: "Shape hunt", assessment: "Recognises shapes" },
                        { week: 7, objective: "Measurement", topics: "length", activities: "Paper ruler", assessment: "Measures" },
                        { week: 8, objective: "Telling time", topics: "to hour", activities: "Clock reading", assessment: "Reads time" },
                        { week: 9, objective: "Money", topics: "identify coins", activities: "Coin sorting", assessment: "Recognises values" },
                        { week: 10, objective: "Review", topics: "revision", activities: "Math stations", assessment: "Full assessment" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Body parts", topics: "head, arms", activities: "Label diagram", assessment: "Names correctly" },
                        { week: 2, objective: "Five senses", topics: "smell/taste/etc", activities: "Sensory stations", assessment: "Identifies senses" },
                        { week: 3, objective: "Plants", topics: "needs & growth", activities: "Seed experiment", assessment: "Observes growth" },
                        { week: 4, objective: "Animals", topics: "classification", activities: "Sorting cards", assessment: "Classifies" },
                        { week: 5, objective: "Living vs non-living", topics: "criteria", activities: "Object sorting", assessment: "Distinguishes" },
                        { week: 6, objective: "Water", topics: "liquid/solid", activities: "Ice melt", assessment: "Describes" },
                        { week: 7, objective: "Weather", topics: "sunny, rainy", activities: "Charting", assessment: "Uses terms" },
                        { week: 8, objective: "Habitats", topics: "land & water", activities: "Matching", assessment: "Identifies" },
                        { week: 9, objective: "Earth & care", topics: "recycling", activities: "Sorting waste", assessment: "Participates" },
                        { week: 10, objective: "Review", topics: "recap", activities: "Quiz", assessment: "Understands concepts" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Family & roles", topics: "members", activities: "Draw family", assessment: "Names roles" },
                        { week: 2, objective: "Community", topics: "helpers", activities: "Helper recognition", assessment: "Identifies" },
                        { week: 3, objective: "Safety rules", topics: "home/school", activities: "Role-play", assessment: "Understands" },
                        { week: 4, objective: "Maps", topics: "simple map", activities: "Classroom map", assessment: "Uses directions" },
                        { week: 5, objective: "Cultures", topics: "diversity", activities: "Dress day", assessment: "Shows respect" },
                        { week: 6, objective: "Feelings", topics: "empathy", activities: "Role-play", assessment: "Responds kindly" },
                        { week: 7, objective: "Responsibility", topics: "taking care", activities: "Chore chart", assessment: "Participates" },
                        { week: 8, objective: "Our environment", topics: "care", activities: "Clean-up", assessment: "Helps" },
                        { week: 9, objective: "My country", topics: "symbols", activities: "Flag drawing", assessment: "Identifies" },
                        { week: 10, objective: "Review", topics: "recap", activities: "Presentation", assessment: "Demonstrates knowledge" }
                    ]
                },
                {
                    name: "ICT Skills",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Devices", topics: "identification", activities: "Matching", assessment: "Recognises" },
                        { week: 2, objective: "Mouse", topics: "click & drag", activities: "Games", assessment: "Controls" },
                        { week: 3, objective: "Keyboard", topics: "letters", activities: "Type name", assessment: "Types" },
                        { week: 4, objective: "Simple commands", topics: "open/close", activities: "Launch apps", assessment: "Operates" },
                        { week: 5, objective: "Drawing", topics: "digital", activities: "Paint tool", assessment: "Creates" },
                        { week: 6, objective: "Coding", topics: "sequencing", activities: "Scratch Jr", assessment: "Orders" },
                        { week: 7, objective: "Using audio", topics: "recording", activities: "Voice record", assessment: "Plays" },
                        { week: 8, objective: "Internet safety", topics: "don't share", activities: "Role-play", assessment: "Understands" },
                        { week: 9, objective: "Searching", topics: "safe search", activities: "Teacher-guided", assessment: "Uses correctly" },
                        { week: 10, objective: "Review", topics: "skill showcase", activities: "ICT projects", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Art & Creativity",
                    icon: "🎨",
                    subtitle: "Painting — Drawing — Craft — Imagination — Symbolism",
                    weeklyPlan: [
                        { week: 1, focus: "Colour theory", activity: "Paint mixing" },
                        { week: 2, focus: "Drawing basics", activity: "Shading" },
                        { week: 3, focus: "Pattern art", activity: "Repeating patterns" },
                        { week: 4, focus: "Collage", activity: "Paper pieces" },
                        { week: 5, focus: "Clay modelling", activity: "Shapes & animals" },
                        { week: 6, focus: "Origami", activity: "Paper folding" },
                        { week: 7, focus: "Object drawing", activity: "Still life" },
                        { week: 8, focus: "Story art", activity: "Draw meaning" },
                        { week: 9, focus: "Creative design", activity: "Free imagination" },
                        { week: 10, focus: "Art exhibition", activity: "Showcase" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, focus: "Beat", activity: "Clapping" },
                        { week: 2, focus: "Tempo", activity: "Fast/slow" },
                        { week: 3, focus: "Pitch", activity: "High/low" },
                        { week: 4, focus: "Melody", activity: "Sing with tone" },
                        { week: 5, focus: "Percussion", activity: "Drums" },
                        { week: 6, focus: "Call & response", activity: "Echo games" },
                        { week: 7, focus: "Creative rhythm", activity: "Make-a-beat" },
                        { week: 8, focus: "Listening skills", activity: "Music response" },
                        { week: 9, focus: "Movement", activity: "Dance" },
                        { week: 10, focus: "Performance", activity: "Music show" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, focus: "Warm-up", activity: "Stretching" },
                        { week: 2, focus: "Running", activity: "Sprint" },
                        { week: 3, focus: "Balance", activity: "Beam walk" },
                        { week: 4, focus: "Coordination", activity: "Jumping" },
                        { week: 5, focus: "Catching", activity: "Ball catch" },
                        { week: 6, focus: "Throwing", activity: "Target toss" },
                        { week: 7, focus: "Team play", activity: "Group games" },
                        { week: 8, focus: "Agility", activity: "Obstacle course" },
                        { week: 9, focus: "Flexibility", activity: "Yoga" },
                        { week: 10, focus: "Sports day", activity: "Competition" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, focus: "Politeness", activity: "Please/thank you" },
                        { week: 2, focus: "Respect", activity: "Listening" },
                        { week: 3, focus: "Sharing", activity: "Toys" },
                        { week: 4, focus: "Emotions", activity: "Identify" },
                        { week: 5, focus: "Confidence", activity: "Speaking" },
                        { week: 6, focus: "Friendship", activity: "Partner work" },
                        { week: 7, focus: "Responsibility", activity: "Class jobs" },
                        { week: 8, focus: "Self-care", activity: "Hygiene" },
                        { week: 9, focus: "Kindness", activity: "Helping others" },
                        { week: 10, focus: "Character celebration", activity: "Certificates" }
                    ]
                }
            ]
        },
        {
            term: "Term 2",
            weeks: "Weeks 11-20",
            subjects: [
                {
                    name: "English Language",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Past tense verbs", topics: "walked, jumped", activities: "Verb stories", assessment: "Uses tense correctly" },
                        { week: 2, objective: "Reading fluency", topics: "phrases", activities: "Guided reading", assessment: "Reads smoothly" },
                        { week: 3, objective: "Compound words", topics: "sun+set", activities: "Word joining", assessment: "Forms compound words" },
                        { week: 4, objective: "Pronunciation", topics: "long & short vowels", activities: "Vowel sorting", assessment: "Pronounces clearly" },
                        { week: 5, objective: "Questioning", topics: "who/what/where", activities: "Q&A games", assessment: "Uses question words" },
                        { week: 6, objective: "Creative writing", topics: "own sentences", activities: "Picture prompts", assessment: "Writes sentences" },
                        { week: 7, objective: "Story retell", topics: "begin–middle–end", activities: "Retelling", assessment: "Understands structure" },
                        { week: 8, objective: "Listening skills", topics: "follow directions", activities: "Listening games", assessment: "Follows 3-step instructions" },
                        { week: 9, objective: "Spelling", topics: "CVC/CCVC", activities: "Spelling practice", assessment: "Spells correctly" },
                        { week: 10, objective: "Term review", topics: "full term content", activities: "Reading showcase", assessment: "Checks mastery" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Count in 2s & 5s", topics: "patterns", activities: "Skip counting", assessment: "Counts correctly" },
                        { week: 2, objective: "Place value", topics: "hundreds introduction", activities: "Block grouping", assessment: "Understands value" },
                        { week: 3, objective: "Addition with regrouping", topics: "carrying", activities: "Column addition", assessment: "Adds correctly" },
                        { week: 4, objective: "Subtraction with regrouping", topics: "borrowing", activities: "Column subtraction", assessment: "Subtracts" },
                        { week: 5, objective: "Fractions", topics: "½ and ¼", activities: "Sharing items", assessment: "Identifies fractions" },
                        { week: 6, objective: "Money", topics: "shopping", activities: "Store role-play", assessment: "Uses coins" },
                        { week: 7, objective: "Measurement", topics: "weight", activities: "Balancing scale", assessment: "Compares" },
                        { week: 8, objective: "Shapes", topics: "identify parts", activities: "Edges & corners", assessment: "Identifies" },
                        { week: 9, objective: "Data representation", topics: "charts", activities: "Tally & bar chart", assessment: "Reads data" },
                        { week: 10, objective: "Term review", topics: "revision", activities: "Math stations", assessment: "Assessment" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Human body", topics: "organs", activities: "Body chart", assessment: "Names organs" },
                        { week: 2, objective: "Food & nutrition", topics: "healthy eating", activities: "Food groups", assessment: "Sorts correctly" },
                        { week: 3, objective: "Light", topics: "shadows", activities: "Shadow tracing", assessment: "Explains" },
                        { week: 4, objective: "Electricity", topics: "power sources", activities: "Battery & plug", assessment: "Identifies" },
                        { week: 5, objective: "Earth materials", topics: "soil, rocks", activities: "Texture study", assessment: "Differentiates" },
                        { week: 6, objective: "Simple machines", topics: "wheel/lever", activities: "Movement activity", assessment: "Identifies" },
                        { week: 7, objective: "Weather & clothing", topics: "dress for weather", activities: "Sorting", assessment: "Matches" },
                        { week: 8, objective: "Growth", topics: "life cycle", activities: "Plant growth", assessment: "Observes" },
                        { week: 9, objective: "Sound", topics: "vibration", activities: "Sound making", assessment: "Explains" },
                        { week: 10, objective: "Review", topics: "summary", activities: "Quiz", assessment: "Understands" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Rules", topics: "good citizenship", activities: "Rule role-play", assessment: "Follows rules" },
                        { week: 2, objective: "Local community", topics: "map & landmarks", activities: "Map reading", assessment: "Identifies" },
                        { week: 3, objective: "Jobs", topics: "professions", activities: "Dress-as-a-worker", assessment: "Names jobs" },
                        { week: 4, objective: "Needs vs wants", topics: "priority", activities: "Sorting", assessment: "Understands" },
                        { week: 5, objective: "Religion & culture", topics: "respect", activities: "Sharing traditions", assessment: "Shows tolerance" },
                        { week: 6, objective: "Transportation", topics: "land/water", activities: "Sorting", assessment: "Classifies" },
                        { week: 7, objective: "Communication", topics: "old/new", activities: "Tech history", assessment: "Compares" },
                        { week: 8, objective: "Leadership", topics: "responsibility", activities: "Class jobs", assessment: "Participates" },
                        { week: 9, objective: "Our world", topics: "continents", activities: "Globe study", assessment: "Recognises" },
                        { week: 10, objective: "Review", topics: "oral recap", activities: "Presentation", assessment: "Retains knowledge" }
                    ]
                },
                {
                    name: "ICT",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Browser basics", topics: "Open safe search", activities: "Find image", assessment: "Navigates" },
                        { week: 2, objective: "Type sentences", topics: "Typing practice", activities: "Speed test", assessment: "Improves speed" },
                        { week: 3, objective: "Create folder", topics: "Save files", activities: "File management", assessment: "Organises" },
                        { week: 4, objective: "Keyboard shortcuts", topics: "Ctrl+C, Ctrl+V", activities: "Practice", assessment: "Uses correctly" },
                        { week: 5, objective: "Digital drawing", topics: "Colouring tool", activities: "Art project", assessment: "Creates images" },
                        { week: 6, objective: "Coding logic", topics: "sequence order", activities: "Block coding", assessment: "Makes commands" },
                        { week: 7, objective: "Device care", topics: "cleaning rules", activities: "Safety lesson", assessment: "Handles safely" },
                        { week: 8, objective: "Media", topics: "play/record", activities: "Audio recording", assessment: "Uses properly" },
                        { week: 9, objective: "Digital storytelling", topics: "audio + image", activities: "Story creation", assessment: "Produces" },
                        { week: 10, objective: "Review", topics: "digital showcase", activities: "Project presentation", assessment: "Demonstrates" }
                    ]
                }
            ]
        },
        {
            term: "Term 3",
            weeks: "Weeks 21-30",
            subjects: [
                {
                    name: "English Language",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Poetry", topics: "rhymes", activities: "Poem recital", assessment: "Recites" },
                        { week: 2, objective: "Story elements", topics: "plot", activities: "Story map", assessment: "Identifies" },
                        { week: 3, objective: "Complex sentences", topics: "and/because", activities: "Join sentences", assessment: "Forms" },
                        { week: 4, objective: "Tenses", topics: "present/past", activities: "Verb tense sort", assessment: "Uses correctly" },
                        { week: 5, objective: "Reading comprehension", topics: "longer texts", activities: "Text questions", assessment: "Understands" },
                        { week: 6, objective: "Creative writing", topics: "story creation", activities: "Write a story", assessment: "Creates narrative" },
                        { week: 7, objective: "Vocabulary expansion", topics: "synonyms", activities: "Word matching", assessment: "Uses new words" },
                        { week: 8, objective: "Pronunciation", topics: "word stress", activities: "Reading aloud", assessment: "Speaks clearly" },
                        { week: 9, objective: "Grammar", topics: "sentence editing", activities: "Fix errors", assessment: "Edits" },
                        { week: 10, objective: "Final presentation", topics: "public speaking", activities: "Oral reading", assessment: "Performs confidently" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Count to 500", topics: "extensions", activities: "Counting patterns", assessment: "Counts correctly" },
                        { week: 2, objective: "3-digit numbers", topics: "place value", activities: "Hundreds/tens/ones", assessment: "Understands" },
                        { week: 3, objective: "Multiplication", topics: "x2, x5, x10", activities: "Repeated addition", assessment: "Computes" },
                        { week: 4, objective: "Division", topics: "sharing", activities: "Equal groups", assessment: "Solves" },
                        { week: 5, objective: "Fractions", topics: "⅓ and ⅔", activities: "Fraction models", assessment: "Understands" },
                        { week: 6, objective: "Time", topics: "to half hour", activities: "Clock reading", assessment: "Reads" },
                        { week: 7, objective: "Measurement", topics: "volume", activities: "Water measuring", assessment: "Measures" },
                        { week: 8, objective: "Money", topics: "value & change", activities: "Store simulation", assessment: "Calculates" },
                        { week: 9, objective: "Geometry", topics: "3D shapes faces/edges", activities: "Identify parts", assessment: "Recognises" },
                        { week: 10, objective: "Final Revision", topics: "full review", activities: "Math Fair", assessment: "Assessment" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Plant growth", topics: "photosynthesis basics", activities: "Observation", assessment: "Explains" },
                        { week: 2, objective: "Animal groups", topics: "birds/mammals", activities: "Sorting", assessment: "Groups" },
                        { week: 3, objective: "Weather instruments", topics: "thermometer", activities: "Weather lab", assessment: "Reads" },
                        { week: 4, objective: "Earth & space", topics: "Sun, moon", activities: "Sky observation", assessment: "Explains" },
                        { week: 5, objective: "States of matter", topics: "solid/liquid/gas", activities: "Ice & steam", assessment: "Identifies" },
                        { week: 6, objective: "Energy", topics: "light, heat", activities: "Examples", assessment: "Classifies" },
                        { week: 7, objective: "Force", topics: "push/pull", activities: "Movement test", assessment: "Predicts" },
                        { week: 8, objective: "Materials", topics: "absorbent vs waterproof", activities: "Testing", assessment: "Labels" },
                        { week: 9, objective: "Safety", topics: "lab rules", activities: "Practice", assessment: "Remembers" },
                        { week: 10, objective: "Final Review", topics: "science knowledge", activities: "Quiz", assessment: "Understands" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Families change", topics: "growth", activities: "Timeline drawing", assessment: "Explains" },
                        { week: 2, objective: "History basics", topics: "past vs present", activities: "Object comparison", assessment: "Identifies" },
                        { week: 3, objective: "National symbols", topics: "flag, anthem", activities: "Recital/drawing", assessment: "Recognises" },
                        { week: 4, objective: "Rights & responsibilities", topics: "respect", activities: "Role-play", assessment: "Understands" },
                        { week: 5, objective: "Diversity", topics: "values", activities: "Class cultural day", assessment: "Appreciates" },
                        { week: 6, objective: "Citizenship", topics: "community involvement", activities: "Helping acts", assessment: "Participates" },
                        { week: 7, objective: "Maps", topics: "directions", activities: "North/south/east/west", assessment: "Uses" },
                        { week: 8, objective: "Needs of society", topics: "services", activities: "Sorting activity", assessment: "Classifies" },
                        { week: 9, objective: "Famous people", topics: "leaders", activities: "Biography reading", assessment: "Understands" },
                        { week: 10, objective: "Final Review", topics: "knowledge showcase", activities: "Presentation", assessment: "Retains" }
                    ]
                }
            ]
        }
    ]
};
