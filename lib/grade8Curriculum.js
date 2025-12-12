export const grade8CurriculumData = {
    grade: "Grade 8",
    term: "Term 1",
    year: "Year 9",
    description: "Grade 8 prepares students for high school rigor with advanced pre-algebra, integrated science, global studies, and comprehensive computing skills.",
    subjects: [
        "English Language",
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
                        { week: 1, objective: "Analytical reading", topics: "interpreting author's intent", activities: "Short story analysis", assessment: "Inference" },
                        { week: 2, objective: "Grammar", topics: "clause types & modifiers", activities: "Sentence reform", assessment: "Correct use" },
                        { week: 3, objective: "Vocabulary", topics: "advanced academic terms", activities: "Context learning", assessment: "Usage accuracy" },
                        { week: 4, objective: "Argument writing", topics: "position & evidence", activities: "Paragraph building", assessment: "Logical support" },
                        { week: 5, objective: "Literary analysis", topics: "tone & symbolism", activities: "Text marking", assessment: "Insight" },
                        { week: 6, objective: "Tenses", topics: "sequence of tenses", activities: "Timeline rewriting", assessment: "Correct" },
                        { week: 7, objective: "Descriptive writing", topics: "setting & character", activities: "Creative scenes", assessment: "Imagery" },
                        { week: 8, objective: "Speaking", topics: "speech delivery", activities: "Oral presentation", assessment: "Confidence" },
                        { week: 9, objective: "Editing", topics: "style & clarity", activities: "Rewrite draft", assessment: "Improved precision" },
                        { week: 10, objective: "End of term test", topics: "Writing + comprehension", activities: "Assessment", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Number systems", topics: "Integers & rational numbers", activities: "Number line", assessment: "Correct placement" },
                        { week: 2, objective: "Order of operations", topics: "BEDMAS", activities: "Practice worksheets", assessment: "Accuracy" },
                        { week: 3, objective: "Factors & multiples", topics: "GCF/LCM", activities: "Factor trees", assessment: "Correct" },
                        { week: 4, objective: "Fractions", topics: "Operation rules", activities: "Mixed problems", assessment: "Accuracy" },
                        { week: 5, objective: "Decimals", topics: "Operations", activities: "Real life tasks", assessment: "Understanding" },
                        { week: 6, objective: "Algebra", topics: "Using variables", activities: "Substitution", assessment: "Correct" },
                        { week: 7, objective: "Equations", topics: "Multiplicative & additive", activities: "Solve for x", assessment: "Accuracy" },
                        { week: 8, objective: "Inequalities", topics: "Graphing inequalities", activities: "Number graph", assessment: "Correct" },
                        { week: 9, objective: "Coordinate plane", topics: "Plotting", activities: "Graph activity", assessment: "Precision" },
                        { week: 10, objective: "Review assessment", topics: "Mixed problem solving", activities: "Test", assessment: "Mastery" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Scientific inquiry", topics: "controlled variables", activities: "Lab method", assessment: "Correct application" },
                        { week: 2, objective: "Chemistry", topics: "elements & atoms", activities: "Periodic table intro", assessment: "Correct" },
                        { week: 3, objective: "Biology", topics: "cells & organelles", activities: "Microscope", assessment: "Labeling" },
                        { week: 4, objective: "Biology", topics: "cell processes", activities: "Osmosis vs diffusion", assessment: "Understanding" },
                        { week: 5, objective: "Physics", topics: "motion", activities: "Speed measurement", assessment: "Experiment" },
                        { week: 6, objective: "Physics", topics: "forces & energy", activities: "Spring scale", assessment: "Understanding" },
                        { week: 7, objective: "Earth science", topics: "earth layers", activities: "Model", assessment: "Correct" },
                        { week: 8, objective: "Earth science", topics: "plate tectonics", activities: "Simulation", assessment: "Correct" },
                        { week: 9, objective: "Chemistry", topics: "states of matter", activities: "Particle theory", assessment: "Understanding" },
                        { week: 10, objective: "Exam", topics: "Concept evaluation", activities: "Test", assessment: "Retention" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Mapping", topics: "GIS & map coordinates", activities: "Atlas exercise", assessment: "Correct" },
                        { week: 2, objective: "Ancient history", topics: "Egypt, Greece, Mesopotamia", activities: "Timeline project", assessment: "Understanding" },
                        { week: 3, objective: "Government", topics: "forms of governance", activities: "Comparative chart", assessment: "Correct" },
                        { week: 4, objective: "Economics", topics: "needs vs wants", activities: "Budget!", assessment: "Understanding" },
                        { week: 5, objective: "Dollar value & inflation", topics: "time value of money", activities: "Graph", assessment: "Correct" },
                        { week: 6, objective: "Human geography", topics: "population & birth rates", activities: "Data analysis", assessment: "Correct" },
                        { week: 7, objective: "Culture", topics: "belief systems", activities: "Discussion", assessment: "Respectful" },
                        { week: 8, objective: "Conflict & diplomacy", topics: "case studies", activities: "Role-play", assessment: "Understanding" },
                        { week: 9, objective: "Migration", topics: "movement cycles", activities: "Mapping", assessment: "Analysis" },
                        { week: 10, objective: "Test", topics: "Knowledge assessment", activities: "Score", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Computer systems", topics: "Input-processing-output", activities: "Diagram", assessment: "Correct" },
                        { week: 2, objective: "Keyboard skill", topics: "Typing", activities: "Timed test", assessment: "Improvement" },
                        { week: 3, objective: "Word processing", topics: "Document design", activities: "Format tasks", assessment: "Correct" },
                        { week: 4, objective: "Spreadsheets", topics: "Formulas & functions", activities: "Practice", assessment: "Accuracy" },
                        { week: 5, objective: "Programming", topics: "Intro Python / Scratch", activities: "Simple script", assessment: "Correct" },
                        { week: 6, objective: "Networking", topics: "Internet principles", activities: "LAN/WAN", assessment: "Understanding" },
                        { week: 7, objective: "Cybersecurity", topics: "digital privacy", activities: "Scenario", assessment: "Correct" },
                        { week: 8, objective: "Presentation design", topics: "Pitch deck building", activities: "Slides", assessment: "Creative" },
                        { week: 9, objective: "Digital ethics", topics: "netiquette", activities: "Case studies", assessment: "Awareness" },
                        { week: 10, objective: "Assessment", topics: "ICT portfolio", activities: "Quality", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour psychology", topics: "Art emotion", activities: "Art emotion", assessment: "Appropriate selection" },
                        { week: 2, objective: "Figure drawing", topics: "Proportion practice", activities: "Proportion practice", assessment: "Accuracy" },
                        { week: 3, objective: "Perspective", topics: "Multiple vanishing points", activities: "Multiple vanishing points", assessment: "Depth" },
                        { week: 4, objective: "Texture study", topics: "Surface study", activities: "Surface study", assessment: "Technique" },
                        { week: 5, objective: "Clay modeling", topics: "3D sculpture", activities: "3D sculpture", assessment: "Form" },
                        { week: 6, objective: "Composition", topics: "Balance", activities: "Balance", assessment: "Layout" },
                        { week: 7, objective: "Art history", topics: "1900-present", activities: "1900-present", assessment: "Connections" },
                        { week: 8, objective: "Digital design", topics: "Graphic editing", activities: "Graphic editing", assessment: "Skill" },
                        { week: 9, objective: "Independent project", topics: "Personal art", activities: "Personal art", assessment: "Creativity" },
                        { week: 10, objective: "Art show", topics: "Presentation", activities: "Presentation", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm decode", topics: "Clap interpretation", activities: "Clap interpretation", assessment: "Accuracy" },
                        { week: 2, objective: "Ear training", topics: "Pitch hearing", activities: "Pitch hearing", assessment: "Recognition" },
                        { week: 3, objective: "Harmony", topics: "Two-part singing", activities: "Two-part singing", assessment: "Blend" },
                        { week: 4, objective: "Keyboard practice", topics: "Simple melody", activities: "Simple melody", assessment: "Fluency" },
                        { week: 5, objective: "Notation reading", topics: "Stave study", activities: "Stave study", assessment: "Correct" },
                        { week: 6, objective: "Music theory", topics: "Chord study", activities: "Chord study", assessment: "Understanding" },
                        { week: 7, objective: "Movement", topics: "Dance patterns", activities: "Dance patterns", assessment: "Coordination" },
                        { week: 8, objective: "Drama", topics: "Short scenes", activities: "Short scenes", assessment: "Expression" },
                        { week: 9, objective: "Preparation", topics: "Rehearsal", activities: "Rehearsal", assessment: "Discipline" },
                        { week: 10, objective: "Showcase", topics: "Performance", activities: "Performance", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Stretching warmup", topics: "Routine", activities: "Routine", assessment: "Readiness" },
                        { week: 2, objective: "Cardio", topics: "Timed jog", activities: "Timed jog", assessment: "Endurance" },
                        { week: 3, objective: "Strength", topics: "Pushups/planks", activities: "Pushups/planks", assessment: "Effort" },
                        { week: 4, objective: "Agility", topics: "Quick steps", activities: "Quick steps", assessment: "Speed" },
                        { week: 5, objective: "Stamina", topics: "Jogging", activities: "Jogging", assessment: "Duration" },
                        { week: 6, objective: "Team sport", topics: "Basketball", activities: "Basketball", assessment: "Teamwork" },
                        { week: 7, objective: "Technique", topics: "Ball control", activities: "Ball control", assessment: "Skill" },
                        { week: 8, objective: "Body mechanics", topics: "Posture", activities: "Posture", assessment: "Understanding" },
                        { week: 9, objective: "Flexibility", topics: "Yoga poses", activities: "Yoga poses", assessment: "Balance" },
                        { week: 10, objective: "Final test", topics: "Physical assessment", activities: "Physical assessment", assessment: "Ability" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-identity", topics: "Character reflection", activities: "Character reflection", assessment: "Insight" },
                        { week: 2, objective: "Goal setting", topics: "Academic planning", activities: "Academic planning", assessment: "Determination" },
                        { week: 3, objective: "Responsibility", topics: "Personal duties", activities: "Personal duties", assessment: "Reliability" },
                        { week: 4, objective: "Social behavior", topics: "Respectful communication", activities: "Respectful communication", assessment: "Maturity" },
                        { week: 5, objective: "Peer mediation", topics: "Conflict solving", activities: "Conflict solving", assessment: "Diplomacy" },
                        { week: 6, objective: "Study skills", topics: "Note-taking", activities: "Note-taking", assessment: "Improvement" },
                        { week: 7, objective: "Financial basics", topics: "Allowances", activities: "Allowances", assessment: "Awareness" },
                        { week: 8, objective: "Leadership", topics: "Team facilitation", activities: "Team facilitation", assessment: "Initiative" },
                        { week: 9, objective: "Decision making", topics: "Choices", activities: "Choices", assessment: "Judgment" },
                        { week: 10, objective: "Reflection", topics: "Growth review", activities: "Growth review", assessment: "Self-awareness" }
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
                        { week: 1, objective: "Close reading", topics: "deep text interpretation", activities: "Annotation", assessment: "Accuracy" },
                        { week: 2, objective: "Sentence composition", topics: "complex sentences", activities: "Rewriting", assessment: "Correct" },
                        { week: 3, objective: "Analytical writing", topics: "compare/contrast", activities: "Essay writing", assessment: "Insight" },
                        { week: 4, objective: "Poetry", topics: "structure & rhythm", activities: "Writing & reciting", assessment: "Creativity" },
                        { week: 5, objective: "Vocabulary", topics: "nuance & connotation", activities: "Usage", assessment: "Correct" },
                        { week: 6, objective: "Grammar", topics: "verbals, gerunds", activities: "Label & use", assessment: "Correct" },
                        { week: 7, objective: "Critical speaking", topics: "debate delivery", activities: "Discussion", assessment: "Confidence" },
                        { week: 8, objective: "Research skills", topics: "citation & plagiarism", activities: "Practice", assessment: "Integrity" },
                        { week: 9, objective: "Editing", topics: "refining paragraphs", activities: "Rewrite", assessment: "Improvement" },
                        { week: 10, objective: "Assessment", topics: "Essay + oral test", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Square numbers", topics: "exponents", activities: "Practice", assessment: "Accuracy" },
                        { week: 2, objective: "Roots", topics: "square roots", activities: "Root chart", assessment: "Correct" },
                        { week: 3, objective: "Algebraic expansion", topics: "(a+b)²", activities: "Expansion", assessment: "Correct" },
                        { week: 4, objective: "Linear functions", topics: "y=mx+b", activities: "Graphing", assessment: "Understanding" },
                        { week: 5, objective: "Simultaneous equations", topics: "substitution method", activities: "Solving", assessment: "Accuracy" },
                        { week: 6, objective: "Inequalities", topics: "multi-variable", activities: "Graph", assessment: "Correct" },
                        { week: 7, objective: "Geometry", topics: "pythagorean theorem", activities: "Right triangles", assessment: "Correct" },
                        { week: 8, objective: "Trigonometry intro", topics: "SOH CAH TOA", activities: "Angle exercise", assessment: "Understanding" },
                        { week: 9, objective: "Statistics", topics: "mean & deviation", activities: "Data analysis", assessment: "Correct" },
                        { week: 10, objective: "Assessment", topics: "Algebra test", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Chemistry", topics: "density & buoyancy", activities: "Floating test", assessment: "Understanding" },
                        { week: 2, objective: "Biology", topics: "DNA basics", activities: "Genetic traits", assessment: "Correct" },
                        { week: 3, objective: "Reproduction", topics: "sexual & asexual", activities: "Comparison", assessment: "Understanding" },
                        { week: 4, objective: "Physics", topics: "pressure", activities: "Syringe test", assessment: "Correct" },
                        { week: 5, objective: "Electricity", topics: "current & resistance", activities: "Circuit experiment", assessment: "Understanding" },
                        { week: 6, objective: "Waves", topics: "sound & light", activities: "String test", assessment: "Correct" },
                        { week: 7, objective: "Earth science", topics: "seasons", activities: "Model", assessment: "Understanding" },
                        { week: 8, objective: "Astronomy", topics: "moon cycles", activities: "Observation", assessment: "Correct" },
                        { week: 9, objective: "Safety", topics: "chemical hazards", activities: "Scenario", assessment: "Responsibility" },
                        { week: 10, objective: "Exam", topics: "Test", activities: "Retention", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Medieval history", topics: "crusades", activities: "Timeline", assessment: "Understanding" },
                        { week: 2, objective: "Colonialism", topics: "impact on Africa & Asia", activities: "Case study", assessment: "Insight" },
                        { week: 3, objective: "Industrialization", topics: "economic transformation", activities: "Comparison", assessment: "Understanding" },
                        { week: 4, objective: "Geopolitics", topics: "alliances", activities: "Map", assessment: "Correct" },
                        { week: 5, objective: "International trade", topics: "imports & exports", activities: "Simulated trade", assessment: "Understanding" },
                        { week: 6, objective: "Human rights", topics: "case reviews", activities: "Discussion", assessment: "Empathy" },
                        { week: 7, objective: "Sustainability", topics: "resources", activities: "Project", assessment: "Action" },
                        { week: 8, objective: "Population", topics: "urbanization", activities: "Graphing", assessment: "Correct" },
                        { week: 9, objective: "Cultural adaptation", topics: "global influence", activities: "Examples", assessment: "Understanding" },
                        { week: 10, objective: "Test", topics: "Assessment", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Python basics", topics: "print/variables", activities: "Run script", assessment: "Correct" },
                        { week: 2, objective: "Loops", topics: "for/while", activities: "Program", assessment: "Correct" },
                        { week: 3, objective: "Data types", topics: "strings/lists", activities: "Practice", assessment: "Understanding" },
                        { week: 4, objective: "Spreadsheets", topics: "multi-level calculations", activities: "Functions", assessment: "Accuracy" },
                        { week: 5, objective: "Digital graphics", topics: "editing", activities: "Graphic creation", assessment: "Skill" },
                        { week: 6, objective: "Web literacy", topics: "HTML & CSS", activities: "Web page", assessment: "Correct" },
                        { week: 7, objective: "Networking", topics: "IP addressing", activities: "Simulation", assessment: "Understanding" },
                        { week: 8, objective: "Cloud computing", topics: "benefits", activities: "Research", assessment: "Insight" },
                        { week: 9, objective: "Cyber safety", topics: "data protection", activities: "Case", assessment: "Responsibility" },
                        { week: 10, objective: "ICT exam", topics: "Project", activities: "Competence", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Perspective mastery", topics: "2-point & 3-point", activities: "2-point & 3-point", assessment: "Depth" },
                        { week: 2, objective: "Watercolor control", topics: "Layering", activities: "Layering", assessment: "Technique" },
                        { week: 3, objective: "Graphic illustration", topics: "Digital pen", activities: "Digital pen", assessment: "Skill" },
                        { week: 4, objective: "Cultural symbolism", topics: "Traditional prints", activities: "Traditional prints", assessment: "Understanding" },
                        { week: 5, objective: "Sculpture", topics: "Carving", activities: "Carving", assessment: "Shape" },
                        { week: 6, objective: "Mural art", topics: "Group painting", activities: "Group painting", assessment: "Cooperation" },
                        { week: 7, objective: "Brand design", topics: "Logo creation", activities: "Logo creation", assessment: "Creativity" },
                        { week: 8, objective: "Product packaging", topics: "Box design", activities: "Box design", assessment: "Practical ability" },
                        { week: 9, objective: "Final piece", topics: "Independent art", activities: "Independent art", assessment: "Quality" },
                        { week: 10, objective: "Critique", topics: "Evaluation", activities: "Evaluation", assessment: "Insight" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Melody & chords", topics: "Music writing", activities: "Music writing", assessment: "Composition" },
                        { week: 2, objective: "Harmony training", topics: "3-part singing", activities: "3-part singing", assessment: "Blend" },
                        { week: 3, objective: "Choral performance", topics: "Group singing", activities: "Group singing", assessment: "Unity" },
                        { week: 4, objective: "Musical improvisation", topics: "Instrument", activities: "Instrument", assessment: "Creativity" },
                        { week: 5, objective: "Script work", topics: "Short drama", activities: "Short drama", assessment: "Expression" },
                        { week: 6, objective: "Monologues", topics: "Solo performance", activities: "Solo performance", assessment: "Confidence" },
                        { week: 7, objective: "Choreography", topics: "Dance making", activities: "Dance making", assessment: "Coordination" },
                        { week: 8, objective: "Ensemble practice", topics: "Multi-instrument", activities: "Multi-instrument", assessment: "Teamwork" },
                        { week: 9, objective: "Dress rehearsal", topics: "Full run", activities: "Full run", assessment: "Readiness" },
                        { week: 10, objective: "Performance", topics: "Public show", activities: "Public show", assessment: "Success" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Run technique", topics: "Stride", activities: "Stride", assessment: "Improvement" },
                        { week: 2, objective: "Strength", topics: "Weight resistance", activities: "Weight resistance", assessment: "Effort" },
                        { week: 3, objective: "Aerobic exercise", topics: "Rhythmic movement", activities: "Rhythmic movement", assessment: "Energy" },
                        { week: 4, objective: "Stamina", topics: "Distance running", activities: "Distance running", assessment: "Endurance" },
                        { week: 5, objective: "Team sports", topics: "Volleyball", activities: "Volleyball", assessment: "Participation" },
                        { week: 6, objective: "Sportsmanship", topics: "Fair play", activities: "Fair play", assessment: "Behavior" },
                        { week: 7, objective: "Health", topics: "Body systems", activities: "Body systems", assessment: "Understanding" },
                        { week: 8, objective: "Nutrition", topics: "food science", activities: "food science", assessment: "Awareness" },
                        { week: 9, objective: "Competition", topics: "Trial races", activities: "Trial races", assessment: "Performance" },
                        { week: 10, objective: "Assessment", topics: "Test", activities: "Test", assessment: "Improvement" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Personal organization", topics: "Planner use", activities: "Planner use", assessment: "Improvement" },
                        { week: 2, objective: "Self-confidence", topics: "Positive speaking", activities: "Positive speaking", assessment: "Confidence" },
                        { week: 3, objective: "Ethics", topics: "Decision study", activities: "Decision study", assessment: "Reason" },
                        { week: 4, objective: "Financial literacy", topics: "Budget creation", activities: "Budget creation", assessment: "Understanding" },
                        { week: 5, objective: "Time management", topics: "Scheduling", activities: "Scheduling", assessment: "Efficiency" },
                        { week: 6, objective: "Peer leadership", topics: "Team building", activities: "Team building", assessment: "Reliability" },
                        { week: 7, objective: "Respect & culture", topics: "World respect", activities: "World respect", assessment: "Civility" },
                        { week: 8, objective: "Self-evaluation", topics: "Reflection", activities: "Reflection", assessment: "Insight" },
                        { week: 9, objective: "Positive thinking", topics: "Affirmations", activities: "Affirmations", assessment: "Attitude" },
                        { week: 10, objective: "Evaluation", topics: "Skills review", activities: "Skills review", assessment: "Growth" }
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
                        { week: 1, objective: "Literary critique", topics: "text annotation", activities: "Analysis", assessment: "Insight" },
                        { week: 2, objective: "Advanced grammar", topics: "syntax", activities: "Correcting paragraphs", assessment: "Accuracy" },
                        { week: 3, objective: "Rhetorical writing", topics: "persuasion", activities: "Write editorial", assessment: "Logic" },
                        { week: 4, objective: "Drama & dialogue", topics: "scriptwriting", activities: "Write scene", assessment: "Creativity" },
                        { week: 5, objective: "Comparative literature", topics: "theme comparison", activities: "Short essays", assessment: "Depth" },
                        { week: 6, objective: "Academic writing", topics: "research format", activities: "MLA referencing", assessment: "Correct" },
                        { week: 7, objective: "Oral speaking", topics: "public speech", activities: "Delivery", assessment: "Confidence" },
                        { week: 8, objective: "Final writing", topics: "literary piece", activities: "Original writing", assessment: "Skill" },
                        { week: 9, objective: "Editing", topics: "polishing", activities: "Refinement", assessment: "Precision" },
                        { week: 10, objective: "Final assessment", topics: "Exam", activities: "Achievement", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Indices", topics: "exponent rules", activities: "Practice", assessment: "Correct" },
                        { week: 2, objective: "Quadratics intro", topics: "factoring", activities: "Simple factorization", assessment: "Accuracy" },
                        { week: 3, objective: "Functions", topics: "mapping", activities: "Graphing", assessment: "Correct" },
                        { week: 4, objective: "Geometry", topics: "circle geometry", activities: "Problems", assessment: "Understanding" },
                        { week: 5, objective: "Surface area", topics: "3D shapes", activities: "Calculation", assessment: "Correct" },
                        { week: 6, objective: "Trigonometry", topics: "sin/cos/tan", activities: "Angle solving", assessment: "Correct" },
                        { week: 7, objective: "Probability", topics: "compound events", activities: "Simulations", assessment: "Understanding" },
                        { week: 8, objective: "Statistics", topics: "scatter plots", activities: "Plotting", assessment: "Correct" },
                        { week: 9, objective: "Revision", topics: "mixed topics", activities: "Worksheet", assessment: "Mastery" },
                        { week: 10, objective: "Exam", topics: "Final test", activities: "Performance", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Solar system", topics: "planet physics", activities: "Model", assessment: "Understanding" },
                        { week: 2, objective: "Chemistry", topics: "reaction types", activities: "Experiment", assessment: "Correct" },
                        { week: 3, objective: "Physics", topics: "acceleration", activities: "Velocity test", assessment: "Understanding" },
                        { week: 4, objective: "Biology", topics: "immune systems", activities: "Case studies", assessment: "Understanding" },
                        { week: 5, objective: "Environmental science", topics: "pollution", activities: "Project", assessment: "Solution thinking" },
                        { week: 6, objective: "Energy", topics: "renewables", activities: "Debate", assessment: "Awareness" },
                        { week: 7, objective: "Astronomy", topics: "light years", activities: "Scale model", assessment: "Understanding" },
                        { week: 8, objective: "Applied science", topics: "inventions", activities: "Research", assessment: "Application" },
                        { week: 9, objective: "Scientific debate", topics: "ethics in science", activities: "Discussion", assessment: "Evaluation" },
                        { week: 10, objective: "Assessment", topics: "Science Exam", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Global economics", topics: "trade inequalities", activities: "Case study", assessment: "Understanding" },
                        { week: 2, objective: "World history", topics: "Renaissance", activities: "Timeline", assessment: "Connections" },
                        { week: 3, objective: "Developed vs undeveloped nations", topics: "GDP studies", activities: "Graph", assessment: "Analysis" },
                        { week: 4, objective: "War & peace", topics: "UN role", activities: "Simulation", assessment: "Insight" },
                        { week: 5, objective: "Humanitarian relief", topics: "crisis response", activities: "Role-play", assessment: "Empathy" },
                        { week: 6, objective: "Geopolitics", topics: "political blocs", activities: "Mapping", assessment: "Understanding" },
                        { week: 7, objective: "Culture in globalization", topics: "media influence", activities: "Debate", assessment: "Reasoning" },
                        { week: 8, objective: "Migration", topics: "refugee systems", activities: "Case study", assessment: "Empathy" },
                        { week: 9, objective: "Earth & climate", topics: "modern issues", activities: "Project", assessment: "Understanding" },
                        { week: 10, objective: "Final assessment", topics: "Presentation", activities: "Mastery", assessment: "Assessed" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Web scripting", topics: "HTML tags", activities: "Build micro-site", assessment: "Correct" },
                        { week: 2, objective: "Programming logic", topics: "conditionals", activities: "Algorithm", assessment: "Correct" },
                        { week: 3, objective: "Spreadsheet analytics", topics: "Big data", activities: "Graphs", assessment: "Accuracy" },
                        { week: 4, objective: "Graphic design", topics: "Poster campaign", activities: "Digital tool", assessment: "Creativity" },
                        { week: 5, objective: "Virtual environments", topics: "simulations", activities: "Testing", assessment: "Understanding" },
                        { week: 6, objective: "Hardware", topics: "computer assembly", activities: "Hands-on", assessment: "Skill" },
                        { week: 7, objective: "Cyber ethics", topics: "hacking dangers", activities: "Case", assessment: "Awareness" },
                        { week: 8, objective: "ICT careers", topics: "future tech vision", activities: "Research", assessment: "Insight" },
                        { week: 9, objective: "Portfolio", topics: "compile best work", activities: "Organization", assessment: "Quality" },
                        { week: 10, objective: "Exam", topics: "ICT assessment", activities: "Proficiency", assessment: "Assessed" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Concept art", topics: "Idea sketching", activities: "Idea sketching", assessment: "Creativity" },
                        { week: 2, objective: "Digital composition", topics: "Graphic layers", activities: "Graphic layers", assessment: "Professional" },
                        { week: 3, objective: "Sculpture casting", topics: "Structure", activities: "Structure", assessment: "Execution" },
                        { week: 4, objective: "Painting", topics: "Acrylic mastery", activities: "Acrylic mastery", assessment: "Technique" },
                        { week: 5, objective: "Interior design", topics: "Space planning", activities: "Space planning", assessment: "Application" },
                        { week: 6, objective: "Animation basics", topics: "Frame sequencing", activities: "Frame sequencing", assessment: "Understanding" },
                        { week: 7, objective: "Pre-production", topics: "Storyboard", activities: "Storyboard", assessment: "Planning" },
                        { week: 8, objective: "Final design", topics: "Independent", activities: "Independent", assessment: "Quality" },
                        { week: 9, objective: "Art critique", topics: "Audience review", activities: "Audience review", assessment: "Insight" },
                        { week: 10, objective: "Art fair", topics: "Public display", activities: "Public display", assessment: "Confidence" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Advanced harmony", topics: "4-part vocals", activities: "4-part vocals", assessment: "Blend" },
                        { week: 2, objective: "Composition", topics: "full arrangement", activities: "full arrangement", assessment: "Songwriting" },
                        { week: 3, objective: "Instrument mastery", topics: "Keyboard performance", activities: "Keyboard performance", assessment: "Accuracy" },
                        { week: 4, objective: "Recording arts", topics: "Microphone use", activities: "Microphone use", assessment: "Technique" },
                        { week: 5, objective: "Drama", topics: "Emotional depth", activities: "Emotional depth", assessment: "Performance" },
                        { week: 6, objective: "Stagecraft", topics: "Lighting & timing", activities: "Lighting & timing", assessment: "Understanding" },
                        { week: 7, objective: "Movement", topics: "Choreography", activities: "Choreography", assessment: "Coordination" },
                        { week: 8, objective: "Rehearsal", topics: "Full program", activities: "Full program", assessment: "Consistency" },
                        { week: 9, objective: "Dress rehearsal", topics: "Final test", activities: "Final test", assessment: "Polish" },
                        { week: 10, objective: "Showtime", topics: "Stage performance", activities: "Stage performance", assessment: "Excellence" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Cardio", topics: "Interval training", activities: "Interval training", assessment: "Endurance" },
                        { week: 2, objective: "Strength", topics: "Resistance", activities: "Resistance", assessment: "Power" },
                        { week: 3, objective: "Balance", topics: "Single-leg holds", activities: "Single-leg holds", assessment: "Stability" },
                        { week: 4, objective: "Speed", topics: "Acceleration drills", activities: "Acceleration drills", assessment: "Improvement" },
                        { week: 5, objective: "Flexibility", topics: "Dynamic stretch", activities: "Dynamic stretch", assessment: "Range" },
                        { week: 6, objective: "Team play", topics: "Soccer/Netball", activities: "Soccer/Netball", assessment: "Collaboration" },
                        { week: 7, objective: "Body anatomy", topics: "Muscle groups", activities: "Muscle groups", assessment: "Knowledge" },
                        { week: 8, objective: "Physical strategy", topics: "Game planning", activities: "Game planning", assessment: "Understanding" },
                        { week: 9, objective: "Competition", topics: "Track/field", activities: "Track/field", assessment: "Performance" },
                        { week: 10, objective: "Final evaluation", topics: "Fitness score", activities: "Fitness score", assessment: "Growth" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Intrinsic motivation", topics: "Self-reflection", activities: "Self-reflection", assessment: "Awareness" },
                        { week: 2, objective: "Resilience", topics: "Stress-coping tools", activities: "Stress-coping tools", assessment: "Maturity" },
                        { week: 3, objective: "Social empathy", topics: "Partner support", activities: "Partner support", assessment: "Compassion" },
                        { week: 4, objective: "Communication mastery", topics: "Public speaking", activities: "Public speaking", assessment: "Confidence" },
                        { week: 5, objective: "Responsibility", topics: "Task follow-through", activities: "Task follow-through", assessment: "Reliability" },
                        { week: 6, objective: "Financial planning", topics: "Budget simulation", activities: "Budget simulation", assessment: "Understanding" },
                        { week: 7, objective: "Teen safety", topics: "Digital & physical safety", activities: "Digital & physical safety", assessment: "Responsibility" },
                        { week: 8, objective: "Career vision", topics: "Future goals", activities: "Future goals", assessment: "Insight" },
                        { week: 9, objective: "Legacy building", topics: "Character development", activities: "Character development", assessment: "Values" },
                        { week: 10, objective: "Ceremony", topics: "Recognition", activities: "Recognition", assessment: "Identity" }
                    ]
                }
            ]
        }
    ]
};
