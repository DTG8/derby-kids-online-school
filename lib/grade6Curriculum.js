export const grade6CurriculumData = {
    grade: "Grade 6",
    term: "Term 1",
    year: "Year 7",
    description: "Grade 6 prepares students for secondary education with advanced literacy, complex mathematics, scientific inquiry, global awareness, and digital mastery.",
    subjects: [
        "English / Literacy",
        "Mathematics",
        "Science",
        "Social Studies",
        "ICT / Digital Literacy"
    ],
    alignments: [
        { name: "Common Core State Standards (USA)", url: "https://www.corestandards.org/" },
        { name: "UK National Curriculum – Key Stage 2/3 Transition", url: "https://www.gov.uk/national-curriculum" },
        { name: "Cambridge Primary Checkpoint", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-primary/" },
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
                        { week: 1, objective: "Reading comprehension", topics: "analyzing informational text", activities: "Guided reading", assessment: "Insightful interpretation" },
                        { week: 2, objective: "Grammar", topics: "types of clauses", activities: "Sentence building", assessment: "Correct identification" },
                        { week: 3, objective: "Vocabulary", topics: "Greek & Latin roots", activities: "Word derivation", assessment: "Accurate usage" },
                        { week: 4, objective: "Essay writing", topics: "argument structure", activities: "Outline & write", assessment: "Logical clarity" },
                        { week: 5, objective: "Comprehension", topics: "figurative language", activities: "Identify metaphor/simile", assessment: "Correct" },
                        { week: 6, objective: "Tenses", topics: "advanced forms", activities: "Grammar worksheet", assessment: "Correct usage" },
                        { week: 7, objective: "Creative writing", topics: "narrative with dialogue", activities: "Write story", assessment: "Voice & structure" },
                        { week: 8, objective: "Public speaking", topics: "formal speech", activities: "Presentation", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "punctuation & structure", activities: "Rewrite text", assessment: "Improvement" },
                        { week: 10, objective: "Review", topics: "integrated assessment", activities: "Reading showcase", assessment: "Performance" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Place value", topics: "millions/billions", activities: "Place-value expansion", assessment: "Understanding" },
                        { week: 2, objective: "Operations", topics: "multi-digit calculation", activities: "Mixed arithmetic", assessment: "Accuracy" },
                        { week: 3, objective: "Fractions", topics: "equivalency & simplification", activities: "Strips & models", assessment: "Correct" },
                        { week: 4, objective: "Fractions", topics: "adding & subtracting", activities: "Word problems", assessment: "Correct" },
                        { week: 5, objective: "Multiplication", topics: "fractions & whole numbers", activities: "Models", assessment: "Understanding" },
                        { week: 6, objective: "Division", topics: "long division decimals", activities: "Step procedure", assessment: "Correct" },
                        { week: 7, objective: "Decimals", topics: "place value & rounding", activities: "Practice", assessment: "Accurate" },
                        { week: 8, objective: "Measurement", topics: "unit conversion", activities: "Metric conversion", assessment: "Correct" },
                        { week: 9, objective: "Ratio & rate", topics: "comparison", activities: "Problem solving", assessment: "Understanding" },
                        { week: 10, objective: "Review", topics: "mixed problem solving", activities: "Mastery test", assessment: "Performance" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Classification", topics: "plants & animals", activities: "Sorting", assessment: "Correct" },
                        { week: 2, objective: "Cells", topics: "structure & function", activities: "Diagram", assessment: "Labeling accuracy" },
                        { week: 3, objective: "Human body", topics: "blood circulation", activities: "Pulse measurement", assessment: "Understanding" },
                        { week: 4, objective: "Matter", topics: "atoms & molecules", activities: "Using models", assessment: "Conceptual understanding" },
                        { week: 5, objective: "Heat", topics: "energy transfer", activities: "Metal vs wood test", assessment: "Correct" },
                        { week: 6, objective: "Sound", topics: "frequency & pitch", activities: "Rubber band sound", assessment: "Explains" },
                        { week: 7, objective: "Energy", topics: "renewable vs non", activities: "Sorting", assessment: "Classifies" },
                        { week: 8, objective: "Weather systems", topics: "fronts & pressure", activities: "Simulations", assessment: "Understanding" },
                        { week: 9, objective: "Earth & atmosphere", topics: "layer study", activities: "Illustration", assessment: "Accuracy" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Human evolution", topics: "ancient history", activities: "Timeline", assessment: "Understanding" },
                        { week: 2, objective: "Civilizations", topics: "Egypt, Rome, Mali", activities: "Research project", assessment: "Explains" },
                        { week: 3, objective: "Government", topics: "types", activities: "Comparative chart", assessment: "Understands" },
                        { week: 4, objective: "Geography", topics: "latitude/longitude", activities: "Map exercise", assessment: "Accurate" },
                        { week: 5, objective: "Economics", topics: "basic supply/demand", activities: "Trading game", assessment: "Active reasoning" },
                        { week: 6, objective: "Culture", topics: "identity", activities: "Discussion", assessment: "Respect" },
                        { week: 7, objective: "Migration", topics: "push/pull factors", activities: "Case study", assessment: "Understanding" },
                        { week: 8, objective: "Citizenship", topics: "responsibility", activities: "Role-play", assessment: "Engagement" },
                        { week: 9, objective: "Environment", topics: "climate vs weather", activities: "Diagram/analysis", assessment: "Understanding" },
                        { week: 10, objective: "Review", topics: "Test", activities: "Performance", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Typing speed", topics: "Timed typing", activities: "Timed typing", assessment: "Improvement" },
                        { week: 2, objective: "Word processing", topics: "Format paper", activities: "Format paper", assessment: "Clear formatting" },
                        { week: 3, objective: "Spreadsheets", topics: "Formulas", activities: "Formulas", assessment: "Sum, Avg" },
                        { week: 4, objective: "Presentations", topics: "Slide design", activities: "Slide design", assessment: "Professional layout" },
                        { week: 5, objective: "Internet research", topics: "Source evaluation", activities: "Source evaluation", assessment: "Credibility" },
                        { week: 6, objective: "Digital safety", topics: "Phishing awareness", activities: "Phishing awareness", assessment: "Understanding" },
                        { week: 7, objective: "Intro to coding", topics: "Scratch algorithms", activities: "Scratch algorithms", assessment: "Correct sequences" },
                        { week: 8, objective: "File management", topics: "Cloud drive", activities: "Cloud drive", assessment: "Organization" },
                        { week: 9, objective: "Digital art", topics: "Poster graphics", activities: "Poster graphics", assessment: "Creativity" },
                        { week: 10, objective: "Review", topics: "ICT portfolio", activities: "ICT portfolio", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Color shades", topics: "Paint mixing", activities: "Paint mixing", assessment: "Precision" },
                        { week: 2, objective: "Proportion drawing", topics: "Human figure", activities: "Human figure", assessment: "Accuracy" },
                        { week: 3, objective: "Perspective", topics: "3D depth", activities: "3D depth", assessment: "Skill" },
                        { week: 4, objective: "Clay sculpture", topics: "Object modeling", activities: "Object modeling", assessment: "Form & design" },
                        { week: 5, objective: "Cultural patterns", topics: "Regional art", activities: "Regional art", assessment: "Respect" },
                        { week: 6, objective: "Character design", topics: "Illustration", activities: "Illustration", assessment: "Creativity" },
                        { week: 7, objective: "Texture art", topics: "Density", activities: "Density", assessment: "Technique" },
                        { week: 8, objective: "Poster composition", topics: "Graphic layout", activities: "Graphic layout", assessment: "Communication" },
                        { week: 9, objective: "Art critique", topics: "Review", activities: "Review", assessment: "Insight" },
                        { week: 10, objective: "Exhibition", topics: "Presentation", activities: "Presentation", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm & timing", topics: "Clap notation", activities: "Clap notation", assessment: "Accuracy" },
                        { week: 2, objective: "Pitch & tone", topics: "Voice tuning", activities: "Voice tuning", assessment: "Pitch control" },
                        { week: 3, objective: "Melody", topics: "Keyboard practice", activities: "Keyboard practice", assessment: "Playback" },
                        { week: 4, objective: "Harmony", topics: "Part singing", activities: "Part singing", assessment: "Blend" },
                        { week: 5, objective: "Notation", topics: "Score reading", activities: "Score reading", assessment: "Interpretation" },
                        { week: 6, objective: "Music composition", topics: "Short piece", activities: "Short piece", assessment: "Creativity" },
                        { week: 7, objective: "World music", topics: "Cultural styles", activities: "Cultural styles", assessment: "Understanding" },
                        { week: 8, objective: "Instrument practice", topics: "Recorders", activities: "Recorders", assessment: "Skill" },
                        { week: 9, objective: "Dance & rhythm", topics: "Movement", activities: "Movement", assessment: "Timing" },
                        { week: 10, objective: "Music presentation", topics: "Performance", activities: "Performance", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up & stretching", topics: "Routine", activities: "Routine", assessment: "Preparedness" },
                        { week: 2, objective: "Balance", topics: "Positional holds", activities: "Positional holds", assessment: "Stability" },
                        { week: 3, objective: "Coordination", topics: "Ball control", activities: "Ball control", assessment: "Skill" },
                        { week: 4, objective: "Strength", topics: "Endurance drills", activities: "Endurance drills", assessment: "Effort" },
                        { week: 5, objective: "Speed", topics: "Sprint", activities: "Sprint", assessment: "Timing" },
                        { week: 6, objective: "Agility", topics: "Reaction drills", activities: "Reaction drills", assessment: "Improvement" },
                        { week: 7, objective: "Aerobics", topics: "Movement", activities: "Movement", assessment: "Energy" },
                        { week: 8, objective: "Team sport", topics: "Basketball", activities: "Basketball", assessment: "Cooperation" },
                        { week: 9, objective: "Fitness test", topics: "Shuttle run", activities: "Shuttle run", assessment: "Performance" },
                        { week: 10, objective: "Sports challenge", topics: "Games", activities: "Games", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-esteem", topics: "Personal affirmations", activities: "Personal affirmations", assessment: "Confidence" },
                        { week: 2, objective: "Peer communication", topics: "Listening", activities: "Listening", assessment: "Respect" },
                        { week: 3, objective: "Leadership", topics: "Leading teams", activities: "Leading teams", assessment: "Responsibility" },
                        { week: 4, objective: "Empathy", topics: "Helping others", activities: "Helping others", assessment: "Care" },
                        { week: 5, objective: "Self-discipline", topics: "Study planning", activities: "Study planning", assessment: "Consistency" },
                        { week: 6, objective: "Negotiation", topics: "Conflict resolution", activities: "Conflict resolution", assessment: "Diplomacy" },
                        { week: 7, objective: "Financial literacy", topics: "Basic budgeting", activities: "Basic budgeting", assessment: "Awareness" },
                        { week: 8, objective: "Goal setting", topics: "Academic planning", activities: "Academic planning", assessment: "Follow-through" },
                        { week: 9, objective: "Decision making", topics: "Logic reasoning", activities: "Logic reasoning", assessment: "Good judgement" },
                        { week: 10, objective: "Reflection", topics: "Self-review", activities: "Self-review", assessment: "Awareness" }
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
                        { week: 1, objective: "Deep reading", topics: "multi-chapter texts", activities: "Critical analysis", assessment: "Strong comprehension" },
                        { week: 2, objective: "Grammar", topics: "conditional sentences", activities: "Rewrite & correct", assessment: "Logical" },
                        { week: 3, objective: "Essay form", topics: "compare & contrast", activities: "Drafting", assessment: "Clear logic" },
                        { week: 4, objective: "Poetry", topics: "imagery devices", activities: "Analysis", assessment: "Creative insight" },
                        { week: 5, objective: "Vocabulary", topics: "academic words", activities: "Usage exercises", assessment: "Strong" },
                        { week: 6, objective: "Editing", topics: "consistency", activities: "Rewrite", assessment: "Improvement" },
                        { week: 7, objective: "Debate structure", topics: "argument & counterargument", activities: "Debate", assessment: "Reasoning" },
                        { week: 8, objective: "Research writing", topics: "citation", activities: "Source checking", assessment: "Integrity" },
                        { week: 9, objective: "Oral fluency", topics: "impromptu speaking", activities: "Speech", assessment: "Confidence" },
                        { week: 10, objective: "Review", topics: "Project presentation", activities: "Evaluation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Fractions to decimals", topics: "conversion", activities: "Worksheet", assessment: "Correct" },
                        { week: 2, objective: "Decimals to percent", topics: "conversion", activities: "Chart", assessment: "Accurate" },
                        { week: 3, objective: "Rate & ratio", topics: "real-life problems", activities: "Practical calculations", assessment: "Understanding" },
                        { week: 4, objective: "Algebraic expressions", topics: "variables", activities: "Simplifying", assessment: "Correct" },
                        { week: 5, objective: "Equations", topics: "solving for x", activities: "Equation solving", assessment: "Logical" },
                        { week: 6, objective: "Geometry", topics: "angles in triangles", activities: "Measurement", assessment: "Accurate" },
                        { week: 7, objective: "Area", topics: "triangles, trapezoids", activities: "Tile diagrams", assessment: "Correct" },
                        { week: 8, objective: "Volume", topics: "prisms", activities: "Measurement", assessment: "Correct" },
                        { week: 9, objective: "Data analysis", topics: "averages & ranges", activities: "Graph making", assessment: "Understanding" },
                        { week: 10, objective: "Review", topics: "Math challenge", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Plants", topics: "vascular systems", activities: "Model", assessment: "Understanding" },
                        { week: 2, objective: "Ecosystems", topics: "marine & desert", activities: "Charts", assessment: "Correct" },
                        { week: 3, objective: "Reproduction", topics: "plant & human", activities: "Comparison", assessment: "Understanding" },
                        { week: 4, objective: "Electricity", topics: "circuits parallel/series", activities: "Testing", assessment: "Correct" },
                        { week: 5, objective: "Force", topics: "magnetism & gravity", activities: "Experiments", assessment: "Understanding" },
                        { week: 6, objective: "Earth rotation", topics: "day/night", activities: "Model", assessment: "Correct" },
                        { week: 7, objective: "Earth revolution", topics: "seasons", activities: "Globe demonstration", assessment: "Understanding" },
                        { week: 8, objective: "Water cycle", topics: "advanced", activities: "Diagram", assessment: "Correct" },
                        { week: 9, objective: "Scientific method", topics: "hypothesis & testing", activities: "Lab experiment", assessment: "Correct" },
                        { week: 10, objective: "Review", topics: "Quiz", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Typing mastery", topics: "Speed typing", activities: "Speed typing", assessment: "Improvement" },
                        { week: 2, objective: "Document editing", topics: "Format & structure", activities: "Format & structure", assessment: "Accuracy" },
                        { week: 3, objective: "Spreadsheets", topics: "Advanced formulas", activities: "Advanced formulas", assessment: "SUM, AVG, MIN, MAX" },
                        { week: 4, objective: "Presentation design", topics: "Transitions/animations", activities: "Transitions/animations", assessment: "Professional slides" },
                        { week: 5, objective: "Internet research", topics: "Keyword refinement", activities: "Keyword refinement", assessment: "Effective searching" },
                        { week: 6, objective: "Cyber safety", topics: "Social media awareness", activities: "Social media awareness", assessment: "Responsible" },
                        { week: 7, objective: "Coding", topics: "If/then logic", activities: "If/then logic", assessment: "Scratch/Python basics" },
                        { week: 8, objective: "Digital collaboration", topics: "Shared docs", activities: "Shared docs", assessment: "Team value" },
                        { week: 9, objective: "Multimedia creation", topics: "Video editing", activities: "Video editing", assessment: "Creativity" },
                        { week: 10, objective: "ICT review", topics: "Digital portfolio", activities: "Digital portfolio", assessment: "Competence" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Portrait realism", topics: "Sketching faces", activities: "Sketching faces", assessment: "Accuracy" },
                        { week: 2, objective: "Perspective study", topics: "3D light/depth shading", activities: "3D light/depth shading", assessment: "Technique" },
                        { week: 3, objective: "Mixed media", topics: "Collage", activities: "Collage", assessment: "Creativity" },
                        { week: 4, objective: "Mosaic pattern", topics: "Tile work", activities: "Tile work", assessment: "Precision" },
                        { week: 5, objective: "Cultural art", topics: "Tribal patterns", activities: "Tribal patterns", assessment: "Respect" },
                        { week: 6, objective: "Illustration", topics: "Book illustration", activities: "Book illustration", assessment: "Interpretation" },
                        { week: 7, objective: "Symbolic drawing", topics: "Express theme", activities: "Express theme", assessment: "Insight" },
                        { week: 8, objective: "Poster concept", topics: "Graphic communication", activities: "Graphic communication", assessment: "Clarity" },
                        { week: 9, objective: "Artwork refinement", topics: "Finalizing design", activities: "Finalizing design", assessment: "Neatness" },
                        { week: 10, objective: "Art exhibition", topics: "Public display", activities: "Public display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Colonialism", topics: "historical impact", activities: "Discussion", assessment: "Understanding" },
                        { week: 2, objective: "Independence era", topics: "national changes", activities: "Timeline", assessment: "Correct" },
                        { week: 3, objective: "Government", topics: "branches & balance", activities: "Chart", assessment: "Clarity" },
                        { week: 4, objective: "Economics", topics: "markets & money", activities: "Market model", assessment: "Understanding" },
                        { week: 5, objective: "World geography", topics: "climate zones", activities: "Map labeling", assessment: "Correct" },
                        { week: 6, objective: "Human rights", topics: "global rights", activities: "Discussion", assessment: "Empathy" },
                        { week: 7, objective: "Conflict", topics: "effects & solutions", activities: "Role play", assessment: "Awareness" },
                        { week: 8, objective: "Migration", topics: "current patterns", activities: "Case review", assessment: "Understanding" },
                        { week: 9, objective: "Global awareness", topics: "international relations", activities: "Discussion", assessment: "Insight" },
                        { week: 10, objective: "Review", topics: "Assessment", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm notation", topics: "Reading rhythm sheet", activities: "Reading rhythm sheet", assessment: "Accuracy" },
                        { week: 2, objective: "Scales", topics: "Major/minor", activities: "Major/minor", assessment: "Vocal practice" },
                        { week: 3, objective: "Melody construction", topics: "Keyboard", activities: "Keyboard", assessment: "Composition" },
                        { week: 4, objective: "Harmony", topics: "Chord building", activities: "Chord building", assessment: "Understanding" },
                        { week: 5, objective: "Notation", topics: "Advanced reading", activities: "Advanced reading", assessment: "Correct" },
                        { week: 6, objective: "Composition", topics: "Write a melody", activities: "Write a melody", assessment: "Creativity" },
                        { week: 7, objective: "Music theory", topics: "Musical terms", activities: "Musical terms", assessment: "Understanding" },
                        { week: 8, objective: "Instrument practice", topics: "Recorder/keyboard", activities: "Recorder/keyboard", assessment: "Skill" },
                        { week: 9, objective: "Dance & rhythm", topics: "Movement patterns", activities: "Movement patterns", assessment: "Timing" },
                        { week: 10, objective: "Music recital", topics: "Performance", activities: "Performance", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Flexibility", topics: "Stretching", activities: "Stretching", assessment: "Range" },
                        { week: 2, objective: "Speed", topics: "Running sprints", activities: "Running sprints", assessment: "Improvement" },
                        { week: 3, objective: "Strength", topics: "Arm/core", activities: "Arm/core", assessment: "Endurance" },
                        { week: 4, objective: "Agility", topics: "Ball & cone drills", activities: "Ball & cone drills", assessment: "Control" },
                        { week: 5, objective: "Coordination", topics: "Ball bounce & pass", activities: "Ball bounce & pass", assessment: "Skill" },
                        { week: 6, objective: "Team games", topics: "Volleyball", activities: "Volleyball", assessment: "Cooperation" },
                        { week: 7, objective: "Stamina", topics: "Jogging", activities: "Jogging", assessment: "Endurance" },
                        { week: 8, objective: "Balance", topics: "One-foot positions", activities: "One-foot positions", assessment: "Stability" },
                        { week: 9, objective: "Aerobics", topics: "Dance moves", activities: "Dance moves", assessment: "Energy" },
                        { week: 10, objective: "Sports challenge", topics: "Skills demo", activities: "Skills demo", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-awareness", topics: "Personal inventory", activities: "Personal inventory", assessment: "Reflection" },
                        { week: 2, objective: "Social responsibility", topics: "Community care", activities: "Community care", assessment: "Participation" },
                        { week: 3, objective: "Self-control", topics: "Stress management", activities: "Stress management", assessment: "Behavior" },
                        { week: 4, objective: "Decision making", topics: "Choice evaluation", activities: "Choice evaluation", assessment: "Judgment" },
                        { week: 5, objective: "Communication", topics: "Public speaking", activities: "Public speaking", assessment: "Clarity" },
                        { week: 6, objective: "Leadership", topics: "Group leadership", activities: "Group leadership", assessment: "Initiative" },
                        { week: 7, objective: "Respect", topics: "Cultural value", activities: "Cultural value", assessment: "Empathy" },
                        { week: 8, objective: "Financial literacy", topics: "Allowance planning", activities: "Allowance planning", assessment: "Understanding" },
                        { week: 9, objective: "Goal setting", topics: "Future planning", activities: "Future planning", assessment: "Commitment" },
                        { week: 10, objective: "Celebration", topics: "Recognition", activities: "Recognition", assessment: "Confidence" }
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
                        { week: 1, objective: "Reference mastery", topics: "thesaurus & dictionary", activities: "Word lookup", assessment: "Accurate" },
                        { week: 2, objective: "Biography study", topics: "notable figures", activities: "Reading", assessment: "Understanding" },
                        { week: 3, objective: "Persuasive speaking", topics: "debate speech", activities: "Delivery", assessment: "Confidence" },
                        { week: 4, objective: "Report writing", topics: "formal structure", activities: "Write report", assessment: "Organization" },
                        { week: 5, objective: "Creative storytelling", topics: "plot structure", activities: "Story writing", assessment: "Creativity" },
                        { week: 6, objective: "Grammar review", topics: "all key topics", activities: "Quiz", assessment: "Accuracy" },
                        { week: 7, objective: "Text analysis", topics: "critical thinking", activities: "Article review", assessment: "Insight" },
                        { week: 8, objective: "Public speaking", topics: "Final speech", activities: "Presentation", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "final improvement", activities: "Rewrite", assessment: "Clarity" },
                        { week: 10, objective: "Literary exhibition", topics: "Perform reading", activities: "Achievement", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Ratios & proportion", topics: "advanced", activities: "Word problems", assessment: "Correct" },
                        { week: 2, objective: "Percentages", topics: "increase/decrease", activities: "Practice", assessment: "Understanding" },
                        { week: 3, objective: "Algebra", topics: "equation solving", activities: "Find x", assessment: "Correct" },
                        { week: 4, objective: "Geometry", topics: "circles & circumference", activities: "Calculation", assessment: "Accurate" },
                        { week: 5, objective: "Area/volume", topics: "cubes & prisms", activities: "Solve", assessment: "Correct" },
                        { week: 6, objective: "Graphing", topics: "scatter & line", activities: "Plotting", assessment: "Precision" },
                        { week: 7, objective: "Data interpretation", topics: "mean/median/mode", activities: "Statistics", assessment: "Understanding" },
                        { week: 8, objective: "Integers", topics: "positive/negative", activities: "Rules & practice", assessment: "Accurate" },
                        { week: 9, objective: "Multi-step reasoning", topics: "complex problems", activities: "Logical thinking", assessment: "Strong" },
                        { week: 10, objective: "Year-end assessment", topics: "Exam", activities: "Math mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Solar System", topics: "planetary motion", activities: "Models", assessment: "Understanding" },
                        { week: 2, objective: "Earth science", topics: "rock cycle", activities: "Samples", assessment: "Correct" },
                        { week: 3, objective: "Energy & waves", topics: "light & sound", activities: "Experiment", assessment: "Understanding" },
                        { week: 4, objective: "Human health", topics: "nutrition", activities: "Diet planning", assessment: "Awareness" },
                        { week: 5, objective: "Force & motion", topics: "Newton's laws", activities: "Ball rolling test", assessment: "Correct" },
                        { week: 6, objective: "Chemical changes", topics: "reaction", activities: "Lab demo", assessment: "Understanding" },
                        { week: 7, objective: "Electricity", topics: "circuit safety", activities: "Discussion", assessment: "Responsible" },
                        { week: 8, objective: "Scientific inquiry", topics: "real experiments", activities: "Hypothesis method", assessment: "Logical" },
                        { week: 9, objective: "Environmental science", topics: "pollution", activities: "Cleanup project", assessment: "Action" },
                        { week: 10, objective: "Science fair", topics: "Project presentation", activities: "Outstanding", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "World civilizations", topics: "Old & modern", activities: "Timeline", assessment: "Understanding" },
                        { week: 2, objective: "Government", topics: "democratic evolution", activities: "Case examples", assessment: "Comprehension" },
                        { week: 3, objective: "Economics", topics: "personal finance", activities: "Budgeting", assessment: "Ability" },
                        { week: 4, objective: "Trade", topics: "globalization", activities: "Flow chart", assessment: "Understanding" },
                        { week: 5, objective: "Diplomacy", topics: "international relations", activities: "Role-play", assessment: "Reasoning" },
                        { week: 6, objective: "Population", topics: "urbanization", activities: "Graphing", assessment: "Analysis" },
                        { week: 7, objective: "Social responsibility", topics: "ethics", activities: "Debate", assessment: "Insight" },
                        { week: 8, objective: "Media literacy", topics: "information bias", activities: "Comparisons", assessment: "Understanding" },
                        { week: 9, objective: "Global citizenship", topics: "UN values", activities: "Discussion", assessment: "Respect" },
                        { week: 10, objective: "Global culture show", topics: "Exhibition", activities: "Participation", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Digital Literacy",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Word mastery", topics: "Document style", activities: "Document style", assessment: "Professional formatting" },
                        { week: 2, objective: "Spreadsheet mastery", topics: "Advanced functions", activities: "Advanced functions", assessment: "Accurate" },
                        { week: 3, objective: "Presentation mastery", topics: "Slide professionalism", activities: "Slide professionalism", assessment: "Design quality" },
                        { week: 4, objective: "Web research", topics: "Citation rules", activities: "Citation rules", assessment: "Correct" },
                        { week: 5, objective: "Coding", topics: "Debugging", activities: "Debugging", assessment: "Algorithmic thinking" },
                        { week: 6, objective: "Digital publishing", topics: "Blog/article formatting", activities: "Blog/article formatting", assessment: "Clarity" },
                        { week: 7, objective: "Media ethics", topics: "Plagiarism", activities: "Plagiarism", assessment: "Understanding" },
                        { week: 8, objective: "Digital communication", topics: "Formal email", activities: "Formal email", assessment: "Communication" },
                        { week: 9, objective: "Portfolio building", topics: "Compile work", activities: "Compile work", assessment: "Quality" },
                        { week: 10, objective: "Digital expo", topics: "Final project", activities: "Final project", assessment: "Excellence" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Shading & realism", topics: "Pencil drawing", activities: "Pencil drawing", assessment: "Depth" },
                        { week: 2, objective: "Portrait", topics: "Face drawing", activities: "Face drawing", assessment: "Proportion" },
                        { week: 3, objective: "Perspective", topics: "Advanced depth", activities: "Advanced depth", assessment: "Technique" },
                        { week: 4, objective: "Abstract", topics: "Symbolic work", activities: "Symbolic work", assessment: "Expression" },
                        { week: 5, objective: "Cultural representation", topics: "World symbols", activities: "World symbols", assessment: "Respect" },
                        { week: 6, objective: "Animation basics", topics: "Storyboard making", activities: "Storyboard making", assessment: "Creativity" },
                        { week: 7, objective: "Digital art", topics: "Computer design", activities: "Computer design", assessment: "Skill" },
                        { week: 8, objective: "Final project", topics: "Large creation", activities: "Large creation", assessment: "Execution" },
                        { week: 9, objective: "Art critique", topics: "Evaluation", activities: "Evaluation", assessment: "Insight" },
                        { week: 10, objective: "Art festival", topics: "Public display", activities: "Public display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Sight reading", topics: "Sheet music", activities: "Sheet music", assessment: "Reading accuracy" },
                        { week: 2, objective: "Chord progression", topics: "Keyboard", activities: "Keyboard", assessment: "Understanding" },
                        { week: 3, objective: "Composition", topics: "Music writing", activities: "Music writing", assessment: "Creativity" },
                        { week: 4, objective: "Harmony", topics: "Part singing", activities: "Part singing", assessment: "Blend" },
                        { week: 5, objective: "Music production", topics: "Digital tools", activities: "Digital tools", assessment: "Skill" },
                        { week: 6, objective: "Recording", topics: "Audio capture", activities: "Audio capture", assessment: "Technique" },
                        { week: 7, objective: "Mixing", topics: "Sound balancing", activities: "Sound balancing", assessment: "Understanding" },
                        { week: 8, objective: "Rehearsal", topics: "Practice", activities: "Practice", assessment: "Consistency" },
                        { week: 9, objective: "Performance prep", topics: "Staging", activities: "Staging", assessment: "Confidence" },
                        { week: 10, objective: "Concert performance", topics: "Final show", activities: "Final show", assessment: "Success" }
                    ]
                },
                {
                    name: "Physical Education (PE)",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Warm-up endurance", topics: "Routine", activities: "Routine", assessment: "Preparedness" },
                        { week: 2, objective: "Cardio", topics: "Long-distance running", activities: "Long-distance running", assessment: "Endurance" },
                        { week: 3, objective: "Core strength", topics: "Planks", activities: "Planks", assessment: "Strength" },
                        { week: 4, objective: "Speed", topics: "Timed sprint", activities: "Timed sprint", assessment: "Timing" },
                        { week: 5, objective: "Agility & movement", topics: "Ball control", activities: "Ball control", assessment: "Skill" },
                        { week: 6, objective: "Strategy & tactics", topics: "Team games", activities: "Team games", assessment: "Cooperation" },
                        { week: 7, objective: "Balance", topics: "Static poses", activities: "Static poses", assessment: "Stability" },
                        { week: 8, objective: "Fitness routine", topics: "Circuit", activities: "Circuit", assessment: "Consistency" },
                        { week: 9, objective: "Competition", topics: "Relay/sprints", activities: "Relay/sprints", assessment: "Sportsmanship" },
                        { week: 10, objective: "Sports graduation", topics: "Games", activities: "Games", assessment: "Participation" }
                    ]
                },
                {
                    name: "PSED / Life Skills",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Resilience", topics: "Growth mindset", activities: "Growth mindset", assessment: "Persistence" },
                        { week: 2, objective: "Leadership", topics: "Team leading", activities: "Team leading", assessment: "Initiative" },
                        { week: 3, objective: "Self-reflection", topics: "Personal evaluation", activities: "Personal evaluation", assessment: "Insight" },
                        { week: 4, objective: "Empathy", topics: "Understanding others", activities: "Understanding others", assessment: "Compassion" },
                        { week: 5, objective: "Financial literacy", topics: "Budgeting & value", activities: "Budgeting & value", assessment: "Understanding" },
                        { week: 6, objective: "Responsibility", topics: "Duty completion", activities: "Duty completion", assessment: "Reliability" },
                        { week: 7, objective: "Communication", topics: "Speaking & listening", activities: "Speaking & listening", assessment: "Clarity" },
                        { week: 8, objective: "Future planning", topics: "Secondary readiness", activities: "Secondary readiness", assessment: "Confidence" },
                        { week: 9, objective: "Community service", topics: "Helping others", activities: "Helping others", assessment: "Contribution" },
                        { week: 10, objective: "Character celebration", topics: "Final awards", activities: "Final awards", assessment: "Self-esteem" }
                    ]
                }
            ]
        }
    ]
};
