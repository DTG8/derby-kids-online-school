export const grade9CurriculumData = {
    grade: "Grade 9",
    term: "Term 1",
    year: "Year 10",
    description: "Grade 9 is the first year of high school, focusing on college preparation with advanced literature, algebra/geometry, integrated science, and global studies.",
    subjects: [
        "English Language & Literature",
        "Mathematics",
        "Integrated Science",
        "Social Studies / History & Geography",
        "ICT / Computing",
        "Creative Art & Design",
        "Music & Performing Arts",
        "Physical & Health Education",
        "Life Skills / Citizenship"
    ],
    alignments: [
        { name: "Common Core State Standards (USA)", url: "https://www.corestandards.org/" },
        { name: "UK National Curriculum – Key Stage 4", url: "https://www.gov.uk/national-curriculum" },
        { name: "Cambridge IGCSE", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/" },
        { name: "UNESCO Global Education Framework", url: "https://www.unesco.org/en/education" },
        { name: "OECD Global Competence Skills", url: "https://www.oecd.org/education/" }
    ],
    terms: [
        {
            term: "Term 1",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English Language & Literature",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Literary elements", topics: "character, setting, tone", activities: "Novel excerpt", assessment: "Analysis" },
                        { week: 2, objective: "Essay mastery", topics: "thesis & argument", activities: "Draft writing", assessment: "Clarity" },
                        { week: 3, objective: "Advanced grammar", topics: "parallelism", activities: "Rewrite", assessment: "Correct" },
                        { week: 4, objective: "Reading comprehension", topics: "bias & perspective", activities: "Article review", assessment: "Insight" },
                        { week: 5, objective: "Vocabulary", topics: "SAT/IGCSE-level words", activities: "Application", assessment: "Accuracy" },
                        { week: 6, objective: "Poetry appreciation", topics: "symbolism/theme", activities: "Poem dissection", assessment: "Understanding" },
                        { week: 7, objective: "Creative writing", topics: "short fiction", activities: "Narrative assignment", assessment: "Originality" },
                        { week: 8, objective: "Speech", topics: "oral presentation", activities: "Delivery", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "structural improvement", activities: "Peer edit", assessment: "Revision" },
                        { week: 10, objective: "Term assessment", topics: "Reading + Writing exam", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Number systems", topics: "rational vs irrational", activities: "Classification", assessment: "Correct" },
                        { week: 2, objective: "Algebra review", topics: "expressions & indices", activities: "Practice", assessment: "Accuracy" },
                        { week: 3, objective: "Linear equations", topics: "solve & interpret", activities: "Graph", assessment: "Correct" },
                        { week: 4, objective: "Simultaneous equations", topics: "elimination/substitution", activities: "Solving", assessment: "Accuracy" },
                        { week: 5, objective: "Quadratic intro", topics: "factorization", activities: "Exercises", assessment: "Correct" },
                        { week: 6, objective: "Inequalities", topics: "solution sets", activities: "Graph", assessment: "Correct" },
                        { week: 7, objective: "Coordinate geometry", topics: "distance & midpoint", activities: "Graphing", assessment: "Understanding" },
                        { week: 8, objective: "Trigonometry intro", topics: "sine/cosine ratio", activities: "Right triangles", assessment: "Correct" },
                        { week: 9, objective: "Statistics", topics: "mean/median/mode", activities: "Data analysis", assessment: "Accurate" },
                        { week: 10, objective: "Exam", topics: "Mixed algebra & geometry", activities: "Test", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Scientific method", topics: "experiment structure", activities: "Lab", assessment: "Understanding" },
                        { week: 2, objective: "Biology", topics: "cell systems", activities: "Microscope", assessment: "Labeling" },
                        { week: 3, objective: "Chemistry", topics: "atomic structure", activities: "Periodic table", assessment: "Understanding" },
                        { week: 4, objective: "Physics", topics: "motion", activities: "Velocity experiment", assessment: "Correct" },
                        { week: 5, objective: "Biology", topics: "organ systems", activities: "Circulatory model", assessment: "Understanding" },
                        { week: 6, objective: "Chemistry", topics: "chemical bonding", activities: "Model creation", assessment: "Accuracy" },
                        { week: 7, objective: "Physics", topics: "forces", activities: "Spring scale test", assessment: "Correct" },
                        { week: 8, objective: "Earth science", topics: "plate movement", activities: "Simulation", assessment: "Understanding" },
                        { week: 9, objective: "Ecology", topics: "ecosystem dynamics", activities: "Food web", assessment: "Correct" },
                        { week: 10, objective: "Exam", topics: "Scientific evaluation", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "World civilizations", topics: "Greece, Rome, China", activities: "Timeline", assessment: "Understanding" },
                        { week: 2, objective: "Colonial impact", topics: "Africa, Asia", activities: "Case analysis", assessment: "Insight" },
                        { week: 3, objective: "Economy", topics: "market systems", activities: "Simulation", assessment: "Understanding" },
                        { week: 4, objective: "Government", topics: "democratic vs authoritarian", activities: "Comparison", assessment: "Correct" },
                        { week: 5, objective: "Human rights", topics: "UN Convention", activities: "Reading", assessment: "Awareness" },
                        { week: 6, objective: "Geography", topics: "plate tectonics", activities: "Map study", assessment: "Understanding" },
                        { week: 7, objective: "Culture", topics: "identity & stereotyping", activities: "Discussion", assessment: "Respect" },
                        { week: 8, objective: "Urban development", topics: "cities & migration", activities: "Data review", assessment: "Interpretation" },
                        { week: 9, objective: "Conflict & diplomacy", topics: "negotiation skills", activities: "Role-play", assessment: "Empathy" },
                        { week: 10, objective: "Assessment", topics: "Essay + geography test", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Computer architecture", topics: "CPU, RAM, storage", activities: "Diagram", assessment: "Correct" },
                        { week: 2, objective: "Operating systems", topics: "Windows/Linux/Mac", activities: "Comparison", assessment: "Understanding" },
                        { week: 3, objective: "Typing mastery", topics: "accuracy & speed", activities: "Timed drills", assessment: "Improvement" },
                        { week: 4, objective: "Word processing", topics: "professional formatting", activities: "Report formatting", assessment: "Correct" },
                        { week: 5, objective: "Spreadsheets", topics: "data handling", activities: "Functions", assessment: "Accuracy" },
                        { week: 6, objective: "Programming", topics: "Python basics", activities: "Simple coding", assessment: "Correct" },
                        { week: 7, objective: "Networking", topics: "IP, DNS, routing", activities: "Diagram", assessment: "Understanding" },
                        { week: 8, objective: "Cybersecurity", topics: "identity theft", activities: "Case", assessment: "Awareness" },
                        { week: 9, objective: "Cloud services", topics: "Google workspace", activities: "Usage", assessment: "Competence" },
                        { week: 10, objective: "Assessment", topics: "ICT exam", activities: "Proficiency", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Proportions", topics: "Realistic sketching", activities: "Realistic sketching", assessment: "Accuracy" },
                        { week: 2, objective: "Shading & contrast", topics: "Black/white", activities: "Black/white", assessment: "Technique" },
                        { week: 3, objective: "Perspective drawing", topics: "Advanced depth", activities: "Advanced depth", assessment: "Skill" },
                        { week: 4, objective: "Cultural art", topics: "Symbolic designs", activities: "Symbolic designs", assessment: "Respect" },
                        { week: 5, objective: "Clay/sculpting", topics: "3D models", activities: "3D models", assessment: "Form" },
                        { week: 6, objective: "Painting", topics: "Brush control", activities: "Brush control", assessment: "Technique" },
                        { week: 7, objective: "Fashion design", topics: "Sketch clothing", activities: "Sketch clothing", assessment: "Creativity" },
                        { week: 8, objective: "Graphic design", topics: "Logo creation", activities: "Logo creation", assessment: "Digital skill" },
                        { week: 9, objective: "Portfolio building", topics: "Collect work", activities: "Collect work", assessment: "Organization" },
                        { week: 10, objective: "Presentation", topics: "Public display", activities: "Public display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Complex rhythm", topics: "Notation reading", activities: "Notation reading", assessment: "Accuracy" },
                        { week: 2, objective: "Harmony", topics: "3-4 part vocals", activities: "3-4 part vocals", assessment: "Blend" },
                        { week: 3, objective: "Composition", topics: "Song writing", activities: "Song writing", assessment: "Original" },
                        { week: 4, objective: "Instrument use", topics: "Keyboard/guitar", activities: "Keyboard/guitar", assessment: "Skill" },
                        { week: 5, objective: "Script performance", topics: "Short drama", activities: "Short drama", assessment: "Expression" },
                        { week: 6, objective: "Physical theatre", topics: "Movement", activities: "Movement", assessment: "Creativity" },
                        { week: 7, objective: "Musical genres", topics: "Jazz, blues, classical", activities: "Jazz, blues, classical", assessment: "Analysis" },
                        { week: 8, objective: "Stage voice", topics: "Projection", activities: "Projection", assessment: "Confidence" },
                        { week: 9, objective: "Rehearsal", topics: "Group practice", activities: "Group practice", assessment: "Dedication" },
                        { week: 10, objective: "Performance", topics: "Presentation", activities: "Presentation", assessment: "Success" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Cardio warm-up", topics: "Endurance run", activities: "Endurance run", assessment: "Performance" },
                        { week: 2, objective: "Balance", topics: "Single-leg posture", activities: "Single-leg posture", assessment: "Stability" },
                        { week: 3, objective: "Strength", topics: "Arm & core", activities: "Arm & core", assessment: "Effort" },
                        { week: 4, objective: "Agility", topics: "Cone runs", activities: "Cone runs", assessment: "Precision" },
                        { week: 5, objective: "Sport basics", topics: "Volleyball", activities: "Volleyball", assessment: "Participation" },
                        { week: 6, objective: "Tactics", topics: "Game strategies", activities: "Game strategies", assessment: "Understanding" },
                        { week: 7, objective: "Nutrition basics", topics: "Healthy choices", activities: "Healthy choices", assessment: "Awareness" },
                        { week: 8, objective: "Flexibility", topics: "Stretching", activities: "Stretching", assessment: "Range" },
                        { week: 9, objective: "Sportsmanship", topics: "Team play", activities: "Team play", assessment: "Behavior" },
                        { week: 10, objective: "Term test", topics: "Physical ability", activities: "Physical ability", assessment: "Improvement" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Identity building", topics: "Self-reflection", activities: "Self-reflection", assessment: "Insight" },
                        { week: 2, objective: "Time management", topics: "Planning", activities: "Planning", assessment: "Efficiency" },
                        { week: 3, objective: "Peer relations", topics: "Conflict resolution", activities: "Conflict resolution", assessment: "Maturity" },
                        { week: 4, objective: "Leadership", topics: "Team roles", activities: "Team roles", assessment: "Initiative" },
                        { week: 5, objective: "Digital ethics", topics: "Online conduct", activities: "Online conduct", assessment: "Responsibility" },
                        { week: 6, objective: "Financial literacy", topics: "Budgeting", activities: "Budgeting", assessment: "Understanding" },
                        { week: 7, objective: "Mental health", topics: "Stress techniques", activities: "Stress techniques", assessment: "Awareness" },
                        { week: 8, objective: "Responsibility", topics: "Task follow-through", activities: "Task follow-through", assessment: "Reliability" },
                        { week: 9, objective: "Goal setting", topics: "Career awareness", activities: "Career awareness", assessment: "Vision" },
                        { week: 10, objective: "Values & virtues", topics: "Character review", activities: "Character review", assessment: "Growth" }
                    ]
                }
            ]
        },
        {
            term: "Term 2",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English Language & Literature",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Close reading", topics: "complex literature", activities: "Annotation", assessment: "Accuracy" },
                        { week: 2, objective: "Advanced grammar", topics: "syntax analysis", activities: "Rewrite", assessment: "Correct" },
                        { week: 3, objective: "Essay Writing", topics: "argumentative style", activities: "Writing", assessment: "Evidence-based" },
                        { week: 4, objective: "Literary criticism", topics: "theme & symbolism", activities: "Discussion", assessment: "Insight" },
                        { week: 5, objective: "Vocabulary", topics: "high-level diction", activities: "Usage", assessment: "Precision" },
                        { week: 6, objective: "Writing structure", topics: "logical flow", activities: "Outlining", assessment: "Organization" },
                        { week: 7, objective: "Speech delivery", topics: "public speaking", activities: "Presentation", assessment: "Confidence" },
                        { week: 8, objective: "Scriptwriting", topics: "dialog writing", activities: "Scene creation", assessment: "Originality" },
                        { week: 9, objective: "Editing", topics: "final polish", activities: "Rewrite", assessment: "Improvement" },
                        { week: 10, objective: "Term test", topics: "Analysis + composition", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Quadratics", topics: "Parabolas", activities: "Graph", assessment: "Correct" },
                        { week: 2, objective: "Trigonometry", topics: "sin/cos/tan", activities: "Triangle solving", assessment: "Precision" },
                        { week: 3, objective: "Functions", topics: "mapping & domain", activities: "Table/graph", assessment: "Understanding" },
                        { week: 4, objective: "Polynomials", topics: "Simplifying", activities: "Practice", assessment: "Accuracy" },
                        { week: 5, objective: "Simultaneous equations", topics: "3-variable", activities: "Solving", assessment: "Correct" },
                        { week: 6, objective: "Surface area", topics: "complex shapes", activities: "Calculation", assessment: "Correct" },
                        { week: 7, objective: "Volume", topics: "pyramids/cones", activities: "Measurement", assessment: "Accurate" },
                        { week: 8, objective: "Probability", topics: "Compound", activities: "Simulations", assessment: "Understanding" },
                        { week: 9, objective: "Statistics", topics: "histograms & box plots", activities: "Data sets", assessment: "Correct" },
                        { week: 10, objective: "Algebra exam", topics: "Assessment", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Genetics", topics: "Punnett squares", activities: "Trait prediction", assessment: "Accuracy" },
                        { week: 2, objective: "Chromosomes", topics: "Inheritance", activities: "Diagram", assessment: "Understanding" },
                        { week: 3, objective: "Chemistry", topics: "acids & bases", activities: "pH experiment", assessment: "Correct" },
                        { week: 4, objective: "Physics", topics: "energy transfers", activities: "Thermal lab", assessment: "Understanding" },
                        { week: 5, objective: "Biology", topics: "Respiration", activities: "Model", assessment: "Correct" },
                        { week: 6, objective: "Physics", topics: "Electricity", activities: "Circuit", assessment: "Accuracy" },
                        { week: 7, objective: "Chemistry", topics: "chemical reactions", activities: "Equation writing", assessment: "Correct" },
                        { week: 8, objective: "Earth science", topics: "weather systems", activities: "Graph", assessment: "Understanding" },
                        { week: 9, objective: "Applied science", topics: "real-world tech", activities: "Case study", assessment: "Insight" },
                        { week: 10, objective: "Exam", topics: "Knowledge mastery", activities: "Achievement", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Islamic civilization", topics: "History", activities: "Timeline", assessment: "Connections" },
                        { week: 2, objective: "European history", topics: "Renaissance", activities: "Analysis", assessment: "Understanding" },
                        { week: 3, objective: "Nation building", topics: "post-colonial states", activities: "Discussion", assessment: "Insight" },
                        { week: 4, objective: "Political science", topics: "election systems", activities: "Simulation", assessment: "Correct" },
                        { week: 5, objective: "Economics", topics: "banking & credit", activities: "Case study", assessment: "Understanding" },
                        { week: 6, objective: "Global relations", topics: "Diplomacy", activities: "Negotiation", assessment: "Empathy" },
                        { week: 7, objective: "Environmental change", topics: "Climate", activities: "Research", assessment: "Analysis" },
                        { week: 8, objective: "Cultural integration", topics: "global influence", activities: "Debate", assessment: "Respect" },
                        { week: 9, objective: "Rights & equality", topics: "civil rights", activities: "Case studies", assessment: "Awareness" },
                        { week: 10, objective: "History test", topics: "Evaluation", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Python", topics: "conditions & loops", activities: "Programming", assessment: "Correct" },
                        { week: 2, objective: "HTML & CSS", topics: "web pages", activities: "Design", assessment: "Working webpage" },
                        { week: 3, objective: "Algorithmics", topics: "Flowcharts", activities: "Build logic", assessment: "Understanding" },
                        { week: 4, objective: "Spreadsheet macros", topics: "Automation", activities: "Testing", assessment: "Correct" },
                        { week: 5, objective: "Data science intro", topics: "data sets", activities: "Analysis", assessment: "Understanding" },
                        { week: 6, objective: "Networking", topics: "Security", activities: "Firewall concepts", assessment: "Understanding" },
                        { week: 7, objective: "Cyber ethics", topics: "digital footprint", activities: "Case", assessment: "Responsibility" },
                        { week: 8, objective: "Artificial intelligence", topics: "AI basics", activities: "Research", assessment: "Insight" },
                        { week: 9, objective: "Automation", topics: "robotics concept", activities: "Simulation", assessment: "Understanding" },
                        { week: 10, objective: "Term exam", topics: "Final ICT project", activities: "Competence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Portrait drawing", topics: "Detailed face study", activities: "Detailed face study", assessment: "Proportion" },
                        { week: 2, objective: "Digital editing", topics: "Photoshop/GIMP", activities: "Photoshop/GIMP", assessment: "Skill" },
                        { week: 3, objective: "Graphic branding", topics: "Logo + typography", activities: "Logo + typography", assessment: "Creativity" },
                        { week: 4, objective: "Industrial design", topics: "Objects", activities: "Objects", assessment: "Proportion" },
                        { week: 5, objective: "Fashion art", topics: "Fabric shapes", activities: "Fabric shapes", assessment: "Execution" },
                        { week: 6, objective: "Packaging design", topics: "3D concept", activities: "3D concept", assessment: "Practicality" },
                        { week: 7, objective: "Environmental art", topics: "Awareness poster", activities: "Awareness poster", assessment: "Message clarity" },
                        { week: 8, objective: "Portfolio", topics: "Collection", activities: "Collection", assessment: "Presentation" },
                        { week: 9, objective: "Critique", topics: "Peer review", activities: "Peer review", assessment: "Insight" },
                        { week: 10, objective: "Exhibit", topics: "Art display", activities: "Art display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Drama",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Notation mastery", topics: "Sheet reading", activities: "Sheet reading", assessment: "Accuracy" },
                        { week: 2, objective: "Chord progressions", topics: "Composition", activities: "Composition", assessment: "Harmony" },
                        { week: 3, objective: "Instrument technique", topics: "Keyboard/guitar", activities: "Keyboard/guitar", assessment: "Skill" },
                        { week: 4, objective: "Drama presence", topics: "Voice & posture", activities: "Voice & posture", assessment: "Confidence" },
                        { week: 5, objective: "Script analysis", topics: "Character depth", activities: "Character depth", assessment: "Understanding" },
                        { week: 6, objective: "Group ensemble", topics: "Music + drama", activities: "Music + drama", assessment: "Coordination" },
                        { week: 7, objective: "Dance patterns", topics: "Movement", activities: "Movement", assessment: "Rhythm" },
                        { week: 8, objective: "Production elements", topics: "Lighting/audio", activities: "Lighting/audio", assessment: "Awareness" },
                        { week: 9, objective: "Tech rehearsal", topics: "Full run", activities: "Full run", assessment: "Polish" },
                        { week: 10, objective: "Performance", topics: "Final show", activities: "Final show", assessment: "Excellence" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Endurance", topics: "Interval running", activities: "Interval running", assessment: "Improvement" },
                        { week: 2, objective: "Strength", topics: "Resistance work", activities: "Resistance work", assessment: "Effort" },
                        { week: 3, objective: "Agility", topics: "Footwork", activities: "Footwork", assessment: "Speed" },
                        { week: 4, objective: "Flexibility", topics: "Stretch & hold", activities: "Stretch & hold", assessment: "Balance" },
                        { week: 5, objective: "Team sport", topics: "Basketball/Netball", activities: "Basketball/Netball", assessment: "Teamwork" },
                        { week: 6, objective: "Technique", topics: "Skill refinement", activities: "Skill refinement", assessment: "Execution" },
                        { week: 7, objective: "Anatomy", topics: "Muscles", activities: "Muscles", assessment: "Knowledge" },
                        { week: 8, objective: "Diet", topics: "food energy", activities: "food energy", assessment: "Understanding" },
                        { week: 9, objective: "Competition", topics: "Heats & races", activities: "Heats & races", assessment: "Performance" },
                        { week: 10, objective: "Evaluation", topics: "Personal score", activities: "Personal score", assessment: "Growth" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Confidence", topics: "Positive practice", activities: "Positive practice", assessment: "Self-respect" },
                        { week: 2, objective: "Decision making", topics: "Choices", activities: "Choices", assessment: "Judgment" },
                        { week: 3, objective: "Financial literacy", topics: "Interest & loans", activities: "Interest & loans", assessment: "Understanding" },
                        { week: 4, objective: "Responsibility", topics: "Task execution", activities: "Task execution", assessment: "Reliability" },
                        { week: 5, objective: "Communication", topics: "Public speaking", activities: "Public speaking", assessment: "Clarity" },
                        { week: 6, objective: "Adolescent health", topics: "body & mind", activities: "body & mind", assessment: "Awareness" },
                        { week: 7, objective: "Career mapping", topics: "future professions", activities: "future professions", assessment: "Insight" },
                        { week: 8, objective: "Relationships", topics: "respect & consent", activities: "respect & consent", assessment: "Maturity" },
                        { week: 9, objective: "Leadership", topics: "Influence ethics", activities: "Influence ethics", assessment: "Responsibility" },
                        { week: 10, objective: "Evaluation", topics: "Self-assessment", activities: "Self-assessment", assessment: "Growth" }
                    ]
                }
            ]
        },
        {
            term: "Term 3",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "English Language & Literature",
                    icon: "📘",
                    weeklyPlan: [
                        { week: 1, objective: "Essay excellence", topics: "persuasion & rhetoric", activities: "Essay writing", assessment: "Strength" },
                        { week: 2, objective: "Literary analysis", topics: "motif & archetypes", activities: "Novel study", assessment: "Depth" },
                        { week: 3, objective: "Research writing", topics: "Citations", activities: "Bibliography", assessment: "Correct" },
                        { week: 4, objective: "Creative writing", topics: "narrative fiction", activities: "Character voice", assessment: "Creativity" },
                        { week: 5, objective: "Speech & debates", topics: "formal rhetoric", activities: "Debate", assessment: "Confidence" },
                        { week: 6, objective: "Language evolution", topics: "history of English", activities: "Reading", assessment: "Insight" },
                        { week: 7, objective: "Advanced vocabulary", topics: "Nuance", activities: "Sentence precision", assessment: "Accuracy" },
                        { week: 8, objective: "Exam writing", topics: "timed essay", activities: "Simulation", assessment: "Performance" },
                        { week: 9, objective: "Editing", topics: "final polish", activities: "Revision", assessment: "Improvement" },
                        { week: 10, objective: "Final assessment", topics: "External-standard exam", activities: "Competency", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Quadratics", topics: "roots & graphs", activities: "Graphing", assessment: "Correct" },
                        { week: 2, objective: "Trigonometry", topics: "full SOH CAH TOA", activities: "Angle solving", assessment: "Understanding" },
                        { week: 3, objective: "Functions", topics: "linear vs nonlinear", activities: "Mapping", assessment: "Correct" },
                        { week: 4, objective: "Probability", topics: "Binomial", activities: "Coin trials", assessment: "Understanding" },
                        { week: 5, objective: "Statistics", topics: "standard deviation", activities: "Data analysis", assessment: "Accuracy" },
                        { week: 6, objective: "Geometry", topics: "Proofs", activities: "Reasoning", assessment: "Correct" },
                        { week: 7, objective: "Transformations", topics: "reflection, rotation", activities: "Graphing", assessment: "Accuracy" },
                        { week: 8, objective: "Algebra", topics: "exponent manipulation", activities: "Worksheet", assessment: "Correct" },
                        { week: 9, objective: "IGCSE Practice", topics: "timed exercises", activities: "Mock exam", assessment: "Performance" },
                        { week: 10, objective: "Final test", topics: "Comprehensive review", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Biology", topics: "immune system", activities: "Case analysis", assessment: "Understanding" },
                        { week: 2, objective: "Chemistry", topics: "oxidation & combustion", activities: "Experiment", assessment: "Safety" },
                        { week: 3, objective: "Physics", topics: "energy & work", activities: "Lab", assessment: "Accuracy" },
                        { week: 4, objective: "Chemistry", topics: "stoichiometry", activities: "Reaction balancing", assessment: "Precision" },
                        { week: 5, objective: "Biology", topics: "genetic inheritance", activities: "Trait prediction", assessment: "Accuracy" },
                        { week: 6, objective: "Physics", topics: "sound & waves", activities: "Testing", assessment: "Understanding" },
                        { week: 7, objective: "Environmental science", topics: "sustainability", activities: "Project", assessment: "Action" },
                        { week: 8, objective: "Scientific ethics", topics: "research integrity", activities: "Debate", assessment: "Judgment" },
                        { week: 9, objective: "Review", topics: "All topics", activities: "Revision", assessment: "Retention" },
                        { week: 10, objective: "Final exam", topics: "Science proficiency", activities: "Achievement", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "World politics", topics: "UN & geopolitics", activities: "Discussion", assessment: "Insight" },
                        { week: 2, objective: "Economics", topics: "global trade", activities: "Graph analysis", assessment: "Understanding" },
                        { week: 3, objective: "Migration", topics: "refugee crises", activities: "Case mapping", assessment: "Empathy" },
                        { week: 4, objective: "Technology impact", topics: "digital world", activities: "Debate", assessment: "Insight" },
                        { week: 5, objective: "Media influence", topics: "propaganda", activities: "Analysis", assessment: "Evaluation" },
                        { week: 6, objective: "Sociology", topics: "identity & society", activities: "Discussion", assessment: "Depth" },
                        { week: 7, objective: "Future studies", topics: "global trends", activities: "Research", assessment: "Insight" },
                        { week: 8, objective: "Conflict & peace", topics: "Resolution", activities: "Role-play", assessment: "Collaboration" },
                        { week: 9, objective: "Cultural preservation", topics: "Tradition", activities: "Project", assessment: "Respect" },
                        { week: 10, objective: "Final assessment", topics: "Essay + map work", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "HTML & CSS", topics: "website styling", activities: "Site creation", assessment: "Clean output" },
                        { week: 2, objective: "Python", topics: "functions", activities: "Programming", assessment: "Correct" },
                        { week: 3, objective: "Databases", topics: "SQL concept", activities: "Table simulation", assessment: "Understanding" },
                        { week: 4, objective: "Machine learning basics", topics: "AI principles", activities: "Research", assessment: "Futuristic insight" },
                        { week: 5, objective: "Cybersecurity", topics: "threat models", activities: "Case analysis", assessment: "Understanding" },
                        { week: 6, objective: "Computer hardware", topics: "build components", activities: "Assembly logic", assessment: "Skill" },
                        { week: 7, objective: "Digital content", topics: "video editing", activities: "Project", assessment: "Creativity" },
                        { week: 8, objective: "Tech careers", topics: "career pathway", activities: "Research", assessment: "Clarity" },
                        { week: 9, objective: "Portfolio", topics: "Showcase", activities: "Compilation", assessment: "Organization" },
                        { week: 10, objective: "Exam", topics: "Practical + theory", activities: "Competence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Professional sketching", topics: "Live study", activities: "Live study", assessment: "Accuracy" },
                        { week: 2, objective: "Painting", topics: "Advanced technique", activities: "Advanced technique", assessment: "Depth" },
                        { week: 3, objective: "Digital illustration", topics: "Tablet art", activities: "Tablet art", assessment: "Skill" },
                        { week: 4, objective: "Cultural art", topics: "Heritage themes", activities: "Heritage themes", assessment: "Respect" },
                        { week: 5, objective: "Architecture sketch", topics: "Building perspective", activities: "Building perspective", assessment: "Proportion" },
                        { week: 6, objective: "Mosaic & mural", topics: "Large canvas", activities: "Large canvas", assessment: "Teamwork" },
                        { week: 7, objective: "Art direction", topics: "Concept creation", activities: "Concept creation", assessment: "Leadership" },
                        { week: 8, objective: "Portfolio", topics: "Compilation", activities: "Compilation", assessment: "Organization" },
                        { week: 9, objective: "Critique", topics: "Public analysis", activities: "Public analysis", assessment: "Confidence" },
                        { week: 10, objective: "Public exhibit", topics: "Gallery showcase", activities: "Gallery showcase", assessment: "Presentation" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Classical music", topics: "analysis", activities: "analysis", assessment: "Understanding" },
                        { week: 2, objective: "Jazz & blues", topics: "history", activities: "history", assessment: "Listening" },
                        { week: 3, objective: "Composition", topics: "full musical piece", activities: "full musical piece", assessment: "Original" },
                        { week: 4, objective: "Scene acting", topics: "emotion study", activities: "emotion study", assessment: "Depth" },
                        { week: 5, objective: "Improvisation", topics: "dramatic & musical", activities: "dramatic & musical", assessment: "Creativity" },
                        { week: 6, objective: "Stagecraft", topics: "lighting & sound", activities: "lighting & sound", assessment: "Technique" },
                        { week: 7, objective: "Movement & coordination", topics: "dance", activities: "dance", assessment: "Execution" },
                        { week: 8, objective: "Rehearsal", topics: "run-through", activities: "run-through", assessment: "Readiness" },
                        { week: 9, objective: "Dress rehearsal", topics: "full staging", activities: "full staging", assessment: "Final polish" },
                        { week: 10, objective: "Performance", topics: "public presentation", activities: "public presentation", assessment: "Excellence" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Strength", topics: "Resistance exercises", activities: "Resistance exercises", assessment: "Improvement" },
                        { week: 2, objective: "Speed", topics: "Sprint control", activities: "Sprint control", assessment: "Timing" },
                        { week: 3, objective: "Flexibility", topics: "Dynamic stretch", activities: "Dynamic stretch", assessment: "Range" },
                        { week: 4, objective: "Stamina", topics: "Cardio", activities: "Cardio", assessment: "Endurance" },
                        { week: 5, objective: "Sports", topics: "Team matches", activities: "Team matches", assessment: "Collaboration" },
                        { week: 6, objective: "Healthy habits", topics: "hygiene & rest", activities: "hygiene & rest", assessment: "Awareness" },
                        { week: 7, objective: "Body systems", topics: "respiratory & muscular", activities: "respiratory & muscular", assessment: "Understanding" },
                        { week: 8, objective: "Strategy & tactics", topics: "Game planning", activities: "Game planning", assessment: "Insight" },
                        { week: 9, objective: "Competition", topics: "Tournament", activities: "Tournament", assessment: "Performance" },
                        { week: 10, objective: "Evaluation", topics: "Self-assessment", activities: "Self-assessment", assessment: "Growth" }
                    ]
                },
                {
                    name: "Life Skills / Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-management", topics: "Goal execution", activities: "Goal execution", assessment: "Consistency" },
                        { week: 2, objective: "Emotional resilience", topics: "Stress balance", activities: "Stress balance", assessment: "Maturity" },
                        { week: 3, objective: "Financial planning", topics: "Savings", activities: "Savings", assessment: "Understanding" },
                        { week: 4, objective: "Career choice", topics: "Future mapping", activities: "Future mapping", assessment: "Vision" },
                        { week: 5, objective: "Professional etiquette", topics: "Interviewing", activities: "Interviewing", assessment: "Skill" },
                        { week: 6, objective: "Ethical reasoning", topics: "Moral dilemmas", activities: "Moral dilemmas", assessment: "Judgment" },
                        { week: 7, objective: "Digital citizenship", topics: "online safety", activities: "online safety", assessment: "Responsibility" },
                        { week: 8, objective: "Social respect", topics: "diversity acceptance", activities: "diversity acceptance", assessment: "Empathy" },
                        { week: 9, objective: "Legacy & purpose", topics: "personal goals", activities: "personal goals", assessment: "Identity" },
                        { week: 10, objective: "Completion", topics: "Self-evaluation", activities: "Self-evaluation", assessment: "Growth" }
                    ]
                }
            ]
        }
    ]
};
