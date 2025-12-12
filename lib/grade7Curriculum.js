export const grade7CurriculumData = {
    grade: "Grade 7",
    term: "Term 1",
    year: "Year 8",
    description: "Grade 7 introduces secondary-level thinking with advanced literacy, pre-algebra, integrated science, global studies, and computing skills.",
    subjects: [
        "English Language",
        "Mathematics",
        "Integrated Science",
        "Social Studies / History & Geography",
        "ICT / Computing",
        "Creative Art",
        "Music & Rhythm",
        "Physical Education (PE)",
        "PSED / Life Skills"
    ],
    alignments: [
        { name: "Common Core State Standards (USA)", url: "https://www.corestandards.org/" },
        { name: "UK National Curriculum – Key Stage 3", url: "https://www.gov.uk/national-curriculum" },
        { name: "Cambridge Lower Secondary", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-lower-secondary/" },
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
                        { week: 1, objective: "Reading depth", topics: "analyzing themes", activities: "Short story reading", assessment: "Theme identification" },
                        { week: 2, objective: "Grammar", topics: "sentence types", activities: "Rewrite activity", assessment: "Correct classification" },
                        { week: 3, objective: "Vocabulary", topics: "etymology & word origins", activities: "Latin/Greek roots", assessment: "Application" },
                        { week: 4, objective: "Essay writing", topics: "expository writing", activities: "5-paragraph outline", assessment: "Logical content" },
                        { week: 5, objective: "Literary devices", topics: "metaphor, symbolism", activities: "Text identification", assessment: "Correct" },
                        { week: 6, objective: "Tenses", topics: "progressive & perfect", activities: "Transformation exercise", assessment: "Correct" },
                        { week: 7, objective: "Creative writing", topics: "short fiction", activities: "Write narrative", assessment: "Creativity" },
                        { week: 8, objective: "Speaking", topics: "formal speech", activities: "Presentation", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "self & peer editing", activities: "Proofreading", assessment: "Improvement" },
                        { week: 10, objective: "Assessment", topics: "Mid-term test", activities: "Mixed skills", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Number sense", topics: "Integers", activities: "Number line", assessment: "Accuracy" },
                        { week: 2, objective: "Fractions", topics: "operation rules", activities: "Practice", assessment: "Correct" },
                        { week: 3, objective: "Decimals", topics: "operations", activities: "Real-life application", assessment: "Correct" },
                        { week: 4, objective: "Percentages", topics: "percent increase", activities: "Financial examples", assessment: "Understanding" },
                        { week: 5, objective: "Algebra", topics: "expressions", activities: "Simplification", assessment: "Correct" },
                        { week: 6, objective: "Equations", topics: "one-step, two-step", activities: "Solve for x", assessment: "Correct" },
                        { week: 7, objective: "Geometry", topics: "angles", activities: "Measurement", assessment: "Accuracy" },
                        { week: 8, objective: "Shape properties", topics: "polygons", activities: "Classification", assessment: "Understanding" },
                        { week: 9, objective: "Data handling", topics: "mean, median, mode", activities: "Dataset analysis", assessment: "Accurate" },
                        { week: 10, objective: "Assessment", topics: "Consolidation", activities: "Mixed problems", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Scientific inquiry", topics: "lab process", activities: "Scientific method", assessment: "Understanding" },
                        { week: 2, objective: "Cell biology", topics: "plant vs animal cells", activities: "Microscope slide", assessment: "Correct labels" },
                        { week: 3, objective: "Human body", topics: "nervous system", activities: "Reaction test", assessment: "Understanding" },
                        { week: 4, objective: "Ecology", topics: "food chain", activities: "Modeling", assessment: "Understands" },
                        { week: 5, objective: "Matter", topics: "solids/liquids/gases", activities: "Particle model", assessment: "Accurate" },
                        { week: 6, objective: "Energy", topics: "heat vs temperature", activities: "Thermal experiment", assessment: "Correct" },
                        { week: 7, objective: "Force", topics: "gravity & friction", activities: "Ramp testing", assessment: "Observation" },
                        { week: 8, objective: "Earth science", topics: "layers of earth", activities: "Diagram", assessment: "Correct" },
                        { week: 9, objective: "Atmospheric science", topics: "weather patterns", activities: "Pressure experiment", assessment: "Correct" },
                        { week: 10, objective: "Assessment", topics: "Science test", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Human geography", topics: "population", activities: "Map interpretation", assessment: "Understanding" },
                        { week: 2, objective: "Physical geography", topics: "continents & oceans", activities: "Atlas labeling", assessment: "Correct" },
                        { week: 3, objective: "History", topics: "ancient civilizations", activities: "Group research", assessment: "Presentation" },
                        { week: 4, objective: "Culture", topics: "cultural identity", activities: "Discussion", assessment: "Respect" },
                        { week: 5, objective: "Government", topics: "political systems", activities: "Chart comparison", assessment: "Understanding" },
                        { week: 6, objective: "Economics", topics: "basic trade", activities: "Simulation", assessment: "Engagement" },
                        { week: 7, objective: "Mapping skills", topics: "longitude/latitude", activities: "Map tasks", assessment: "Accuracy" },
                        { week: 8, objective: "Migration", topics: "human movement", activities: "Case studies", assessment: "Explanation" },
                        { week: 9, objective: "Society & conflict", topics: "peace studies", activities: "Role play", assessment: "Understanding" },
                        { week: 10, objective: "Assessment", topics: "Quiz", activities: "Performance", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Computing systems", topics: "hardware vs software", activities: "Classification", assessment: "Correct" },
                        { week: 2, objective: "Typing proficiency", topics: "speed accuracy", activities: "Timed tests", assessment: "Improvement" },
                        { week: 3, objective: "Word processing", topics: "document formatting", activities: "Editing activity", assessment: "Correct" },
                        { week: 4, objective: "Spreadsheets", topics: "basic formulas", activities: "SUM/AVG", assessment: "Accuracy" },
                        { week: 5, objective: "Database concepts", topics: "data sorting", activities: "Table creation", assessment: "Correct" },
                        { week: 6, objective: "Internet literacy", topics: "search algorithms", activities: "Smart search", assessment: "Effectiveness" },
                        { week: 7, objective: "Cybersecurity", topics: "passwords & phishing", activities: "Awareness training", assessment: "Understanding" },
                        { week: 8, objective: "Coding", topics: "block programming", activities: "Scratch", assessment: "Correct" },
                        { week: 9, objective: "Digital communication", topics: "formal email", activities: "Practice", assessment: "Clarity" },
                        { week: 10, objective: "Assessment", topics: "ICT project", activities: "Competence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour theory", topics: "Colour wheel creation", activities: "Colour wheel creation", assessment: "Accuracy" },
                        { week: 2, objective: "Observation drawing", topics: "Still life", activities: "Still life", assessment: "Shading" },
                        { week: 3, objective: "Perspective", topics: "1-point perspective", activities: "1-point perspective", assessment: "Depth" },
                        { week: 4, objective: "Portrait sketching", topics: "Facial proportions", activities: "Facial proportions", assessment: "Correct" },
                        { week: 5, objective: "Mixed media", topics: "Collage", activities: "Collage", assessment: "Creativity" },
                        { week: 6, objective: "Cultural art", topics: "Traditional designs", activities: "Traditional designs", assessment: "Respect" },
                        { week: 7, objective: "Poster design", topics: "Communication message", activities: "Communication message", assessment: "Clarity" },
                        { week: 8, objective: "Clay modelling", topics: "3D object", activities: "3D object", assessment: "Shape forming" },
                        { week: 9, objective: "Art appreciation", topics: "Art critique", activities: "Art critique", assessment: "Insight" },
                        { week: 10, objective: "Assessment", topics: "Final artwork", activities: "Final artwork", assessment: "Execution" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm reading", topics: "Clapping notation", activities: "Clapping notation", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch control", topics: "Vocal exercises", activities: "Vocal exercises", assessment: "Consistency" },
                        { week: 3, objective: "Melody", topics: "Keyboard/recorder", activities: "Keyboard/recorder", assessment: "Playback" },
                        { week: 4, objective: "Harmony", topics: "Duet singing", activities: "Duet singing", assessment: "Blending" },
                        { week: 5, objective: "Notation", topics: "Staff & notes", activities: "Staff & notes", assessment: "Correct" },
                        { week: 6, objective: "Music theory", topics: "Tonic sol-fa", activities: "Tonic sol-fa", assessment: "Understanding" },
                        { week: 7, objective: "Movement & rhythm", topics: "Dance expression", activities: "Dance expression", assessment: "Coordination" },
                        { week: 8, objective: "Improvisation", topics: "Create melody", activities: "Create melody", assessment: "Creativity" },
                        { week: 9, objective: "Performance practice", topics: "Rehearsals", activities: "Rehearsals", assessment: "Discipline" },
                        { week: 10, objective: "Mini performance", topics: "Presentation", activities: "Presentation", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up", topics: "Stretching", activities: "Stretching", assessment: "Preparedness" },
                        { week: 2, objective: "Cardio", topics: "Power jog/run", activities: "Power jog/run", assessment: "Endurance" },
                        { week: 3, objective: "Speed", topics: "Sprints", activities: "Sprints", assessment: "Timing" },
                        { week: 4, objective: "Agility", topics: "Obstacle course", activities: "Obstacle course", assessment: "Control" },
                        { week: 5, objective: "Strength", topics: "Pushups/planks", activities: "Pushups/planks", assessment: "Effort" },
                        { week: 6, objective: "Team sport", topics: "Football", activities: "Football", assessment: "Participation" },
                        { week: 7, objective: "Coordination", topics: "Ball control", activities: "Ball control", assessment: "Skill" },
                        { week: 8, objective: "Fitness", topics: "Aerobic routine", activities: "Aerobic routine", assessment: "Energy" },
                        { week: 9, objective: "Body awareness", topics: "Balance drills", activities: "Balance drills", assessment: "Stability" },
                        { week: 10, objective: "Assessment", topics: "Physical test", activities: "Physical test", assessment: "Improvement" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-perception", topics: "Affirmations", activities: "Affirmations", assessment: "Confidence" },
                        { week: 2, objective: "Communication", topics: "Listening skills", activities: "Listening skills", assessment: "Respect" },
                        { week: 3, objective: "Collaboration", topics: "Team task", activities: "Team task", assessment: "Cooperation" },
                        { week: 4, objective: "Self-control", topics: "Emotion regulation", activities: "Emotion regulation", assessment: "Maturity" },
                        { week: 5, objective: "Responsibility", topics: "Assigned class role", activities: "Assigned class role", assessment: "Completion" },
                        { week: 6, objective: "Ethics", topics: "Right vs wrong", activities: "Right vs wrong", assessment: "Reasoning" },
                        { week: 7, objective: "Leadership", topics: "Lead group", activities: "Lead group", assessment: "Initiative" },
                        { week: 8, objective: "Goal planning", topics: "Personal planning", activities: "Personal planning", assessment: "Follow-through" },
                        { week: 9, objective: "Empathy", topics: "Perspective taking", activities: "Perspective taking", assessment: "Kindness" },
                        { week: 10, objective: "Reflection", topics: "Self-assessment", activities: "Self-assessment", assessment: "Awareness" }
                    ]
                }
            ]
        },
        {
            term: "Term 2",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English Language",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Reading analysis", topics: "biographies & essays", activities: "Extract meaning", assessment: "Interpretation" },
                        { week: 2, objective: "Grammar", topics: "noun & verb phrases", activities: "Identify & create", assessment: "Correct" },
                        { week: 3, objective: "Writing", topics: "compare & contrast essay", activities: "Draft writing", assessment: "Organization" },
                        { week: 4, objective: "Comprehension", topics: "tone & mood", activities: "Identify in text", assessment: "Accuracy" },
                        { week: 5, objective: "Vocabulary", topics: "academic words", activities: "Usage tasks", assessment: "Correct" },
                        { week: 6, objective: "Punctuation", topics: "colons, semicolons", activities: "Sentence repair", assessment: "Correct" },
                        { week: 7, objective: "Creative writing", topics: "fantasy", activities: "Story building", assessment: "Creativity" },
                        { week: 8, objective: "Speaking & argument", topics: "debate", activities: "Structured argument", assessment: "Logic" },
                        { week: 9, objective: "Editing", topics: "peer review", activities: "Text improvement", assessment: "Clear writing" },
                        { week: 10, objective: "Assessment", topics: "Written test", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Ratios", topics: "ratios & rate", activities: "Word problems", assessment: "Correct" },
                        { week: 2, objective: "Percentages", topics: "discounts/interest", activities: "Finance examples", assessment: "Understanding" },
                        { week: 3, objective: "Algebra", topics: "expansions", activities: "Practice", assessment: "Correct" },
                        { week: 4, objective: "Equations", topics: "two-sided equations", activities: "Solving", assessment: "Accuracy" },
                        { week: 5, objective: "Inequalities", topics: "solving", activities: "Graphing", assessment: "Correct" },
                        { week: 6, objective: "Geometry", topics: "circles & area", activities: "Calculation", assessment: "Accurate" },
                        { week: 7, objective: "Angles", topics: "alternate, corresponding", activities: "Identify", assessment: "Correct" },
                        { week: 8, objective: "Data", topics: "probability", activities: "Coin toss simulation", assessment: "Understanding" },
                        { week: 9, objective: "Graphs", topics: "bar & line", activities: "Create & interpret", assessment: "Correct" },
                        { week: 10, objective: "Assessment", topics: "mixed test", activities: "Math mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Plants", topics: "photosynthesis", activities: "Leaf test", assessment: "Understanding" },
                        { week: 2, objective: "Ecosystems", topics: "habitats", activities: "Models", assessment: "Correct" },
                        { week: 3, objective: "Adaptation", topics: "natural selection", activities: "Examples", assessment: "Understanding" },
                        { week: 4, objective: "Force & motion", topics: "Newton's laws", activities: "Rolling ball", assessment: "Correct" },
                        { week: 5, objective: "Electricity", topics: "series/parallel", activities: "Circuit build", assessment: "Correct" },
                        { week: 6, objective: "Energy", topics: "light & reflection", activities: "Mirror test", assessment: "Understanding" },
                        { week: 7, objective: "Atoms & elements", topics: "Periodic table intro", activities: "Classification", assessment: "Correct" },
                        { week: 8, objective: "Chemistry", topics: "physical/chemical change", activities: "Experiment", assessment: "Understanding" },
                        { week: 9, objective: "Safety", topics: "lab & chemicals", activities: "Safety protocols", assessment: "Responsible" },
                        { week: 10, objective: "Assessment", topics: "Test", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Medieval history", topics: "Middle Ages", activities: "Research group", assessment: "Presentation" },
                        { week: 2, objective: "National identity", topics: "symbols & heritage", activities: "Discussion", assessment: "Understanding" },
                        { week: 3, objective: "Government", topics: "rights & responsibilities", activities: "Case study", assessment: "Correct" },
                        { week: 4, objective: "Economics", topics: "supply/demand", activities: "Market game", assessment: "Understanding" },
                        { week: 5, objective: "World geography", topics: "climate zones", activities: "Map work", assessment: "Correct" },
                        { week: 6, objective: "Culture", topics: "religious practices", activities: "Comparison", assessment: "Respect" },
                        { week: 7, objective: "Human rights", topics: "UN Declaration", activities: "Reading", assessment: "Awareness" },
                        { week: 8, objective: "Conflict & peace", topics: "resolution", activities: "Role play", assessment: "Understanding" },
                        { week: 9, objective: "Media literacy", topics: "propaganda & bias", activities: "Critical analysis", assessment: "Evaluation" },
                        { week: 10, objective: "Assessment", topics: "Project", activities: "Presentation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Document mastery", topics: "layouts", activities: "Editing", assessment: "Correct" },
                        { week: 2, objective: "Spreadsheets", topics: "charts", activities: "Create graphs", assessment: "Accuracy" },
                        { week: 3, objective: "Coding", topics: "variables & loops", activities: "Scratch", assessment: "Correct" },
                        { week: 4, objective: "Networks", topics: "LAN/WAN/Internet", activities: "Diagram", assessment: "Understanding" },
                        { week: 5, objective: "Data handling", topics: "sorting/filtering", activities: "Spreadsheet work", assessment: "Correct" },
                        { week: 6, objective: "Cyber ethics", topics: "privacy", activities: "Scenario study", assessment: "Responsible" },
                        { week: 7, objective: "Multimedia", topics: "audio/image editing", activities: "Editing", assessment: "Creativity" },
                        { week: 8, objective: "Software applications", topics: "comparison", activities: "Review", assessment: "Understanding" },
                        { week: 9, objective: "Cloud computing", topics: "advantages", activities: "Research", assessment: "Understanding" },
                        { week: 10, objective: "Assessment", topics: "Digital project", activities: "Competent", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Perspective drawing", topics: "2-point perspective", activities: "2-point perspective", assessment: "Depth" },
                        { week: 2, objective: "Portrait realism", topics: "Human face", activities: "Human face", assessment: "Proportions" },
                        { week: 3, objective: "Painting techniques", topics: "Watercolor", activities: "Watercolor", assessment: "Technique" },
                        { week: 4, objective: "Symbolic art", topics: "Meaningful images", activities: "Meaningful images", assessment: "Expression" },
                        { week: 5, objective: "Fabric/print design", topics: "Patterns", activities: "Patterns", assessment: "Creativity" },
                        { week: 6, objective: "Illustration", topics: "Book pages", activities: "Book pages", assessment: "Skill" },
                        { week: 7, objective: "Collaborative art", topics: "Group mural", activities: "Group mural", assessment: "Cooperation" },
                        { week: 8, objective: "Art history", topics: "artists study", activities: "artists study", assessment: "Understanding" },
                        { week: 9, objective: "Final project", topics: "Independent work", activities: "Independent work", assessment: "Quality" },
                        { week: 10, objective: "Assessment", topics: "Display", activities: "Presentation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm mastery", topics: "Reading sheet rhythm", activities: "Reading sheet rhythm", assessment: "Accuracy" },
                        { week: 2, objective: "Voice training", topics: "Breathing/Projection", activities: "Breathing/Projection", assessment: "Control" },
                        { week: 3, objective: "Harmony singing", topics: "Chord blending", activities: "Chord blending", assessment: "Unity" },
                        { week: 4, objective: "Instrument practice", topics: "Recorder/keyboard", activities: "Recorder/keyboard", assessment: "Skill" },
                        { week: 5, objective: "Musical composition", topics: "Short piece", activities: "Short piece", assessment: "Originality" },
                        { week: 6, objective: "Music genres", topics: "Comparison", activities: "Comparison", assessment: "Understanding" },
                        { week: 7, objective: "Drama", topics: "Script preparation", activities: "Script preparation", assessment: "Expression" },
                        { week: 8, objective: "Acting", topics: "Emotional expression", activities: "Emotional expression", assessment: "Performance" },
                        { week: 9, objective: "Dress rehearsal", topics: "Movement", activities: "Movement", assessment: "Confidence" },
                        { week: 10, objective: "Stage performance", topics: "Presentation", activities: "Presentation", assessment: "Success" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up", topics: "Stretch series", activities: "Stretch series", assessment: "Control" },
                        { week: 2, objective: "Cardio", topics: "Long run", activities: "Long run", assessment: "Endurance" },
                        { week: 3, objective: "Speed", topics: "Sprints", activities: "Sprints", assessment: "Timing" },
                        { week: 4, objective: "Strength", topics: "Arm/leg conditioning", activities: "Arm/leg conditioning", assessment: "Effort" },
                        { week: 5, objective: "Agility", topics: "Cone drills", activities: "Cone drills", assessment: "Control" },
                        { week: 6, objective: "Sports rules", topics: "Volleyball", activities: "Volleyball", assessment: "Understanding" },
                        { week: 7, objective: "Hand-eye coordination", topics: "Ball drills", activities: "Ball drills", assessment: "Skill" },
                        { week: 8, objective: "Nutrition", topics: "food groups", activities: "food groups", assessment: "Awareness" },
                        { week: 9, objective: "Flexibility", topics: "Yoga stretches", activities: "Yoga stretches", assessment: "Balance" },
                        { week: 10, objective: "Assessment", topics: "Physical test", activities: "Physical test", assessment: "Performance" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-image", topics: "Strength recognition", activities: "Strength recognition", assessment: "Affirmations" },
                        { week: 2, objective: "Respect", topics: "Cultural sensitivity", activities: "Cultural sensitivity", assessment: "Discussion" },
                        { week: 3, objective: "Team roles", topics: "Leadership & followership", activities: "Leadership & followership", assessment: "Cooperation" },
                        { week: 4, objective: "Conflict resolution", topics: "Peer mediation", activities: "Peer mediation", assessment: "Diplomacy" },
                        { week: 5, objective: "Time management", topics: "Daily planning", activities: "Daily planning", assessment: "Improvement" },
                        { week: 6, objective: "Financial literacy", topics: "Smart spending", activities: "Smart spending", assessment: "Understanding" },
                        { week: 7, objective: "Responsibility", topics: "Task assignment", activities: "Task assignment", assessment: "Reliability" },
                        { week: 8, objective: "Courage", topics: "Public speaking", activities: "Public speaking", assessment: "Confidence" },
                        { week: 9, objective: "Personal values", topics: "Reflection", activities: "Reflection", assessment: "Insight" },
                        { week: 10, objective: "Character evaluation", topics: "Review", activities: "Review", assessment: "Development" }
                    ]
                }
            ]
        },
        {
            term: "Term 3",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English Language",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Advanced comprehension", topics: "text analysis", activities: "Close reading", assessment: "Interpretation" },
                        { week: 2, objective: "Argument writing", topics: "evidence-based", activities: "Write essay", assessment: "Logic" },
                        { week: 3, objective: "Poetry writing", topics: "original poems", activities: "Writing", assessment: "Creativity" },
                        { week: 4, objective: "Vocabulary expansion", topics: "idioms/proverbs", activities: "Use in sentences", assessment: "Correct" },
                        { week: 5, objective: "Grammar", topics: "complex sentences", activities: "Construction", assessment: "Correct" },
                        { week: 6, objective: "Literature", topics: "novel study", activities: "Character analysis", assessment: "Insight" },
                        { week: 7, objective: "Speech writing", topics: "persuasive speech", activities: "Draft", assessment: "Clarity" },
                        { week: 8, objective: "Public speaking", topics: "delivery", activities: "Oral performance", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "final polishing", activities: "Text improvement", assessment: "Accuracy" },
                        { week: 10, objective: "Final exam", topics: "Assessment", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Indices", topics: "powers", activities: "Practice", assessment: "Correct" },
                        { week: 2, objective: "Square roots", topics: "finding roots", activities: "Calculation", assessment: "Correct" },
                        { week: 3, objective: "Algebra", topics: "functions & tables", activities: "Graphing", assessment: "Accuracy" },
                        { week: 4, objective: "Geometry", topics: "circle theorems", activities: "Analysis", assessment: "Understanding" },
                        { week: 5, objective: "Trigonometry intro", topics: "angles", activities: "Triangle study", assessment: "Correct" },
                        { week: 6, objective: "Probability", topics: "theoretical", activities: "Prediction", assessment: "Correct" },
                        { week: 7, objective: "Statistics", topics: "histograms", activities: "Data creation", assessment: "Accuracy" },
                        { week: 8, objective: "Logical reasoning", topics: "number puzzles", activities: "Problem solving", assessment: "Critical thinking" },
                        { week: 9, objective: "Revision", topics: "mixed topics", activities: "Worksheet", assessment: "Strength" },
                        { week: 10, objective: "Final test", topics: "Mathematics competency", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Solar system", topics: "planet comparison", activities: "Model", assessment: "Understanding" },
                        { week: 2, objective: "Earth science", topics: "erosion & weathering", activities: "Experiment", assessment: "Correct" },
                        { week: 3, objective: "Energy", topics: "renewable energy", activities: "Debate", assessment: "Awareness" },
                        { week: 4, objective: "Electricity", topics: "magnetism", activities: "Magnet test", assessment: "Understanding" },
                        { week: 5, objective: "Chemistry", topics: "solutions & mixtures", activities: "Separation", assessment: "Understanding" },
                        { week: 6, objective: "Biology", topics: "respiratory system", activities: "Diagram", assessment: "Accuracy" },
                        { week: 7, objective: "Light science", topics: "reflection/refraction", activities: "Lens experiments", assessment: "Understanding" },
                        { week: 8, objective: "Scientific method", topics: "experimentation", activities: "Hypothesis testing", assessment: "Scientific thinking" },
                        { week: 9, objective: "Environmental care", topics: "climate change", activities: "Project", assessment: "Action" },
                        { week: 10, objective: "Final exam", topics: "Mastery", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Globalization", topics: "world networks", activities: "Discussion", assessment: "Understanding" },
                        { week: 2, objective: "Nations and identity", topics: "culture", activities: "Case study", assessment: "Respect" },
                        { week: 3, objective: "History", topics: "World Wars", activities: "Timeline", assessment: "Connection" },
                        { week: 4, objective: "Political power", topics: "governments", activities: "Comparison", assessment: "Understanding" },
                        { week: 5, objective: "Economics", topics: "money systems", activities: "Simulation", assessment: "Understanding" },
                        { week: 6, objective: "Geography", topics: "map scaling", activities: "Calculations", assessment: "Accuracy" },
                        { week: 7, objective: "Sociology", topics: "group behavior", activities: "Discussion", assessment: "Insight" },
                        { week: 8, objective: "Peace & conflict", topics: "negotiation", activities: "Role-play", assessment: "Empathy" },
                        { week: 9, objective: "Migration", topics: "effects", activities: "Case study", assessment: "Understanding" },
                        { week: 10, objective: "Final assessment", topics: "Project", activities: "Presentation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Advanced spreadsheets", topics: "functions", activities: "Data analysis", assessment: "Correct" },
                        { week: 2, objective: "Coding", topics: "logical operations", activities: "Scratch/Python", assessment: "Correct" },
                        { week: 3, objective: "Web skills", topics: "HTML intro", activities: "Basic coding", assessment: "Understanding" },
                        { week: 4, objective: "Digital design", topics: "poster/logo", activities: "Creation", assessment: "Creativity" },
                        { week: 5, objective: "Databases", topics: "data organization", activities: "Sorting", assessment: "Correct" },
                        { week: 6, objective: "Cybersecurity", topics: "data protection", activities: "Case study", assessment: "Awareness" },
                        { week: 7, objective: "Ethical computing", topics: "copyright", activities: "Discussion", assessment: "Understanding" },
                        { week: 8, objective: "Software skills", topics: "multimedia tools", activities: "Editing", assessment: "Skill" },
                        { week: 9, objective: "Tech literacy", topics: "AI & future tech", activities: "Research", assessment: "Insight" },
                        { week: 10, objective: "ICT final", topics: "Portfolio", activities: "Competence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Modern art", topics: "Abstract", activities: "Abstract", assessment: "Expression" },
                        { week: 2, objective: "Digital art", topics: "Computer design", activities: "Computer design", assessment: "Skill" },
                        { week: 3, objective: "Portrait painting", topics: "Layering technique", activities: "Layering technique", assessment: "Realism" },
                        { week: 4, objective: "Architecture sketching", topics: "Building designs", activities: "Building designs", assessment: "Proportion" },
                        { week: 5, objective: "Cultural symbolism", topics: "Symbol communication", activities: "Symbol communication", assessment: "Understanding" },
                        { week: 6, objective: "Multimedia art", topics: "Layered content", activities: "Layered content", assessment: "Creativity" },
                        { week: 7, objective: "Set design", topics: "Drama props", activities: "Drama props", assessment: "Construction" },
                        { week: 8, objective: "Final project", topics: "Large display piece", activities: "Large display piece", assessment: "Execution" },
                        { week: 9, objective: "Art critique", topics: "Peer review", activities: "Peer review", assessment: "Insight" },
                        { week: 10, objective: "Art showcase", topics: "Public display", activities: "Public display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Sight singing", topics: "Sheet reading", activities: "Sheet reading", assessment: "Accuracy" },
                        { week: 2, objective: "Composition", topics: "Writing song", activities: "Writing song", assessment: "Creativity" },
                        { week: 3, objective: "Instrument mastery", topics: "Recorder/keyboard", activities: "Recorder/keyboard", assessment: "Skill" },
                        { week: 4, objective: "Vocal harmony", topics: "3-part harmony", activities: "3-part harmony", assessment: "Blend" },
                        { week: 5, objective: "Musical genres", topics: "study of opera, jazz, pop", activities: "study of opera, jazz, pop", assessment: "Understanding" },
                        { week: 6, objective: "Drama & script", topics: "Drama & script", activities: "Drama & script", assessment: "Performance" },
                        { week: 7, objective: "Movement & choreography", topics: "Dance", activities: "Dance", assessment: "Coordination" },
                        { week: 8, objective: "Stage prep", topics: "Stage presence", activities: "Stage presence", assessment: "Confidence" },
                        { week: 9, objective: "Final rehearsal", topics: "Practice", activities: "Practice", assessment: "Readiness" },
                        { week: 10, objective: "Performance", topics: "Show", activities: "Show", assessment: "Achievement" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Strength", topics: "Circuit training", activities: "Circuit training", assessment: "Endurance" },
                        { week: 2, objective: "Speed", topics: "Timed run", activities: "Timed run", assessment: "Improvement" },
                        { week: 3, objective: "Core control", topics: "Balance drill", activities: "Balance drill", assessment: "Stability" },
                        { week: 4, objective: "Agility", topics: "Footwork training", activities: "Footwork training", assessment: "Skill" },
                        { week: 5, objective: "Team strategy", topics: "Coordinated games", activities: "Coordinated games", assessment: "Teamwork" },
                        { week: 6, objective: "Nutrition", topics: "Healthy diet", activities: "Healthy diet", assessment: "Awareness" },
                        { week: 7, objective: "Body science", topics: "Muscle groups", activities: "Muscle groups", assessment: "Knowledge" },
                        { week: 8, objective: "Competition", topics: "Track events", activities: "Track events", assessment: "Performance" },
                        { week: 9, objective: "Flexibility", topics: "Yoga/Pilates", activities: "Yoga/Pilates", assessment: "Improvement" },
                        { week: 10, objective: "Final test", topics: "Sports skill", activities: "Sports skill", assessment: "Proficiency" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-worth", topics: "Self-reflection", activities: "Self-reflection", assessment: "Awareness" },
                        { week: 2, objective: "Responsibility", topics: "Leadership in practice", activities: "Leadership in practice", assessment: "Reliability" },
                        { week: 3, objective: "Independence", topics: "Task ownership", activities: "Task ownership", assessment: "Initiative" },
                        { week: 4, objective: "Peer relations", topics: "Respectful communication", activities: "Respectful communication", assessment: "Maturity" },
                        { week: 5, objective: "Critical thinking", topics: "Problem solving", activities: "Problem solving", assessment: "Insight" },
                        { week: 6, objective: "Ethical decisions", topics: "Moral analysis", activities: "Moral analysis", assessment: "Reasoning" },
                        { week: 7, objective: "Financial literacy", topics: "Expense planning", activities: "Expense planning", assessment: "Understanding" },
                        { week: 8, objective: "Community engagement", topics: "Helping activity", activities: "Helping activity", assessment: "Contribution" },
                        { week: 9, objective: "Future planning", topics: "Academic pathway", activities: "Academic pathway", assessment: "Preparedness" },
                        { week: 10, objective: "Character celebration", topics: "Recognition", activities: "Recognition", assessment: "Growth" }
                    ]
                }
            ]
        }
    ]
};
