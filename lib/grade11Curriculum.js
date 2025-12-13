export const grade11CurriculumData = {
    grade: "Grade 11",
    term: "Term 1",
    year: "Year 11",
    description: "Grade 11 advances IGCSE-level preparation with deeper academic rigor, developing critical thinking and exam readiness across all core subjects.",
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
                        { week: 1, objective: "Diagnose strengths & gaps", topics: "Review reading & writing skills", activities: "Baseline essay + comprehension", assessment: "Diagnostic marking" },
                        { week: 2, objective: "Analyse prose fiction", topics: "Narrative voice, character arc", activities: "Study novel/short story extract", assessment: "Analytical paragraph" },
                        { week: 3, objective: "Analyse drama", topics: "Stagecraft, subtext, tension", activities: "Read scene from a play", assessment: "Guided questions" },
                        { week: 4, objective: "Develop strong thesis & outlines", topics: "Argument structure", activities: "Plan essays from prompts", assessment: "Outline check" },
                        { week: 5, objective: "Write literary essays", topics: "PEEL/PEE structure, cohesion", activities: "Draft 3-5 paragraph essay", assessment: "Graded draft" },
                        { week: 6, objective: "Non-fiction analysis", topics: "Rhetoric, bias, audience", activities: "Editorial/speech analysis", assessment: "Short response" },
                        { week: 7, objective: "Grammar & style refinement", topics: "Syntax, variety, concision", activities: "Rewrite clumsy sentences", assessment: "Grammar quiz" },
                        { week: 8, objective: "Creative writing (prose)", topics: "Viewpoint, pacing, showing vs telling", activities: "Write short narrative", assessment: "Marked for style" },
                        { week: 9, objective: "Speaking & listening", topics: "Formal individual speech", activities: "Prepare & deliver speech", assessment: "Oral rubric" },
                        { week: 10, objective: "Term assessment", topics: "Reading + literary essay", activities: "Timed test", assessment: "Recorded grade" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Review core algebra", topics: "Indices, factorisation, surds (intro)", activities: "Mixed recap questions", assessment: "Diagnostic test" },
                        { week: 2, objective: "Quadratic equations", topics: "Factorising, completing square", activities: "Solve in multiple ways", assessment: "Exercise" },
                        { week: 3, objective: "Quadratic graphs", topics: "Roots, vertex, transformations", activities: "Sketch from equations", assessment: "Graph work" },
                        { week: 4, objective: "Functions basics", topics: "Function notation, domain/range", activities: "Table & graph functions", assessment: "Worksheet" },
                        { week: 5, objective: "Linear & quadratic models", topics: "Real-world modelling", activities: "Word problems", assessment: "Assignment" },
                        { week: 6, objective: "Simultaneous equations", topics: "Linear-linear & linear-quadratic (concept)", activities: "Solve pairs", assessment: "Short test" },
                        { week: 7, objective: "Inequalities in one variable", topics: "Solve & represent on number line", activities: "Practice set", assessment: "Checked" },
                        { week: 8, objective: "Inequalities in two variables", topics: "Regions in coordinate plane", activities: "Shade feasible region", assessment: "Graph tasks" },
                        { week: 9, objective: "Sequences & series", topics: "Arithmetic & simple geometric", activities: "nth term, partial sums", assessment: "Exercise" },
                        { week: 10, objective: "Term test", topics: "All Term 1 topics", activities: "Formal paper", assessment: "Graded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Reinforce scientific reasoning", topics: "Hypothesis, variables, validity", activities: "Design mini-investigation", assessment: "Plan check" },
                        { week: 2, objective: "Biology: cell division", topics: "Mitosis & meiosis", activities: "Diagrams/comparisons", assessment: "Short test" },
                        { week: 3, objective: "Genetics basics", topics: "Alleles, genotypes, phenotypes", activities: "Punnett squares", assessment: "Worksheet" },
                        { week: 4, objective: "Chemistry: atomic models", topics: "Isotopes, electron configuration (basic)", activities: "Electron configuration tasks", assessment: "Quiz" },
                        { week: 5, objective: "Periodic table patterns", topics: "Groups, periods, trends", activities: "Predict element properties", assessment: "Written work" },
                        { week: 6, objective: "Physics: kinematics", topics: "Speed, velocity, acceleration graphs", activities: "Plot & read motion graphs", assessment: "Exercise" },
                        { week: 7, objective: "Physics: forces & Newton's laws", topics: "Resultant force, F = ma (qualitative/quantitative)", activities: "Practical or simulations", assessment: "Question set" },
                        { week: 8, objective: "Energy concepts", topics: "Work, power, efficiency", activities: "Calculate from simple data", assessment: "Practice" },
                        { week: 9, objective: "Earth & environment", topics: "Biomes, carbon cycle", activities: "Diagram & explain", assessment: "Written response" },
                        { week: 10, objective: "Term assessment", topics: "Mixed Biology/Chemistry/Physics", activities: "Written exam", assessment: "Graded" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Use historical sources critically", topics: "Bias, reliability", activities: "Source comparison", assessment: "Short writing" },
                        { week: 2, objective: "Modern history overview", topics: "Late 19th-20th century turning points", activities: "Timeline & map", assessment: "Check" },
                        { week: 3, objective: "National/Regional history focus", topics: "Choose key era for country/region", activities: "Research + presentation", assessment: "Presentation" },
                        { week: 4, objective: "Political systems & ideologies", topics: "Democracy, authoritarianism, socialism, etc.", activities: "Create comparison chart", assessment: "Worksheet" },
                        { week: 5, objective: "Constitutions & rule of law", topics: "Separation of powers, rights", activities: "Read sample clauses", assessment: "Short answers" },
                        { week: 6, objective: "Physical geography review", topics: "Rivers, coasts, tectonics", activities: "Map + diagram tasks", assessment: "Quiz" },
                        { week: 7, objective: "Human geography", topics: "Population pyramids, migration flows", activities: "Interpret graphs", assessment: "Data questions" },
                        { week: 8, objective: "Development", topics: "Indicators (HDI, GDP, literacy)", activities: "Country comparison", assessment: "Written task" },
                        { week: 9, objective: "Global issues intro", topics: "Climate change, conflict, inequality", activities: "Group discussion", assessment: "Reflection" },
                        { week: 10, objective: "Term test", topics: "History + geography mix", activities: "Formal test", assessment: "Grade" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Assess prior skills", topics: "Typing, file management, basic coding", activities: "Baseline tasks", assessment: "Diagnostic" },
                        { week: 2, objective: "Computer systems & logic", topics: "Boolean logic, gates (intro)", activities: "Truth tables", assessment: "Worksheet" },
                        { week: 3, objective: "Data representation", topics: "Binary, hex, text & images (concept)", activities: "Convert & interpret simple values", assessment: "Quiz" },
                        { week: 4, objective: "Programming recap", topics: "Variables, sequence, selection", activities: "Small exercises in Python or similar", assessment: "Checked" },
                        { week: 5, objective: "Iteration & functions", topics: "for/while loops, functions", activities: "Solve short coding problems", assessment: "Code review" },
                        { week: 6, objective: "Algorithm design", topics: "Flowcharts & pseudocode", activities: "Design solution for given problem", assessment: "Pseudocode" },
                        { week: 7, objective: "Spreadsheets modelling", topics: "Formulas & charts", activities: "Create scenario model (e.g. finance)", assessment: "File submission" },
                        { week: 8, objective: "Networks", topics: "Topologies, internet, IP, DNS", activities: "Draw & label diagrams", assessment: "Short test" },
                        { week: 9, objective: "Cybersecurity", topics: "Threats, countermeasures", activities: "Scenario discussion", assessment: "Written activity" },
                        { week: 10, objective: "Term project", topics: "Small program or model", activities: "Project submission", assessment: "Rubric" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Portfolio review & goals", topics: "Strengths, weak areas", activities: "Review past work", assessment: "Goal sheet" },
                        { week: 2, objective: "Advanced drawing", topics: "Complex still life / forms", activities: "Large tonal study", assessment: "Teacher feedback" },
                        { week: 3, objective: "Figure & portrait", topics: "Proportion, facial features", activities: "Portrait drawing", assessment: "Accuracy check" },
                        { week: 4, objective: "Perspective & space", topics: "Interiors, architecture", activities: "2-point perspective work", assessment: "Assessment" },
                        { week: 5, objective: "Colour & mood", topics: "Limited palettes, atmosphere", activities: "Paint mood piece", assessment: "Evaluation" },
                        { week: 6, objective: "Media refinement", topics: "Preferred medium (pencil, paint, digital)", activities: "Technique drills", assessment: "Process mark" },
                        { week: 7, objective: "Concept development", topics: "Personal theme (identity, culture, environment)", activities: "Idea sketches, mind-map", assessment: "Concept quality" },
                        { week: 8, objective: "Major piece – development", topics: "Begin key artwork", activities: "Studio time", assessment: "Ongoing critique" },
                        { week: 9, objective: "Major piece – refinement", topics: "Add detail, fix composition", activities: "Refinement", assessment: "Rubric draft" },
                        { week: 10, objective: "Term review", topics: "Present work & reflect", activities: "Mini critique + reflection", assessment: "Reflection" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Assess current level", topics: "Instrument/voice/acting", activities: "Short audition-style tasks", assessment: "Baseline" },
                        { week: 2, objective: "Music theory refresh", topics: "Keys, chords, notation", activities: "Written & played exercises", assessment: "Theory quiz" },
                        { week: 3, objective: "Ensemble skills", topics: "Listening, blend, timing", activities: "Small-group piece", assessment: "Observation" },
                        { week: 4, objective: "Solo performance prep", topics: "Choose solo piece", activities: "Practice sessions", assessment: "Practice log" },
                        { week: 5, objective: "Drama skills", topics: "Character, status, objectives", activities: "Short improvs & scenes", assessment: "Feedback" },
                        { week: 6, objective: "Movement", topics: "Stage movement & basic choreography", activities: "Blocking/movement tasks", assessment: "Observation" },
                        { week: 7, objective: "Song/scene development", topics: "Group devising (music/drama)", activities: "Rehearsals", assessment: "Process mark" },
                        { week: 8, objective: "Rehearsal & refinement", topics: "Fix pacing, cues, dynamics", activities: "Run-throughs", assessment: "Teacher notes" },
                        { week: 9, objective: "Performance", topics: "In-class performance", activities: "Performance rubric", assessment: "Rubric" },
                        { week: 10, objective: "Reflection", topics: "What went well / next steps", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Initial fitness profile", topics: "Cardio, strength, flexibility", activities: "Fitness tests", assessment: "Baseline record" },
                        { week: 2, objective: "Warm-up science", topics: "Dynamic vs static stretching", activities: "Students lead warm-ups", assessment: "Technique" },
                        { week: 3, objective: "Cardio endurance", topics: "Continuous vs interval training", activities: "Timed runs / circuits", assessment: "Performance" },
                        { week: 4, objective: "Strength training basics", topics: "Bodyweight exercises", activities: "Station work", assessment: "Effort & form" },
                        { week: 5, objective: "Team sport skills", topics: "Passing, shooting, defence", activities: "Drills in one team game", assessment: "Observation" },
                        { week: 6, objective: "Game play & tactics", topics: "Positioning, roles", activities: "Small-sided games", assessment: "Tactical understanding" },
                        { week: 7, objective: "Health knowledge", topics: "Cardio health, risk factors", activities: "Short theory + quiz", assessment: "Quiz" },
                        { week: 8, objective: "Flexibility & posture", topics: "Core stability", activities: "Core & stretching routine", assessment: "Teacher check" },
                        { week: 9, objective: "Mini competition", topics: "Intra-class matches", activities: "Games", assessment: "Sportsmanship" },
                        { week: 10, objective: "Term review", topics: "Compare fitness with baseline", activities: "Reflection sheet", assessment: "Improvement" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-audit for senior phase", topics: "Strengths, gaps, habits", activities: "Self-evaluation sheet", assessment: "Completion" },
                        { week: 2, objective: "Goal setting for exams", topics: "Academic, personal, character", activities: "SMART goal plan", assessment: "Plan quality" },
                        { week: 3, objective: "Study skills & note-taking", topics: "Cornell notes, mind-maps", activities: "Practice from a lesson", assessment: "Notebook check" },
                        { week: 4, objective: "Decision making", topics: "Consequences, long-term thinking", activities: "Scenario discussion", assessment: "Short written" },
                        { week: 5, objective: "Values & integrity", topics: "Cheating, honesty, loyalty", activities: "Case study analysis", assessment: "Reflection" },
                        { week: 6, objective: "Assertive communication", topics: "Saying 'no' respectfully", activities: "Role-play", assessment: "Observation" },
                        { week: 7, objective: "Healthy boundaries & consent", topics: "Respect for self & others", activities: "Guided discussion", assessment: "Exit card" },
                        { week: 8, objective: "Stress management", topics: "Breathing, routines, support systems", activities: "Practice exercises", assessment: "Participation" },
                        { week: 9, objective: "Digital ethics", topics: "Privacy, sharing, reputational risks", activities: "Group poster / guidelines", assessment: "Poster" },
                        { week: 10, objective: "Term reflection", topics: "Check goals progress", activities: "Update goals & reflect", assessment: "Written" }
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
                        { week: 1, objective: "Study full literary text", topics: "Novel or play (Act 1-2)", activities: "Close reading", assessment: "Guided questions" },
                        { week: 2, objective: "Character & theme analysis", topics: "Motifs, conflicts", activities: "Character/theme charts", assessment: "Short essay" },
                        { week: 3, objective: "Analytical essays on set text", topics: "Structured lit essays", activities: "Write exam-style answer", assessment: "Teacher marked" },
                        { week: 4, objective: "Poetry study", topics: "Different forms & eras", activities: "Annotate 2-3 poems", assessment: "Comparative notes" },
                        { week: 5, objective: "Compare poems", topics: "Theme/technique comparison", activities: "Write comparison paragraph/essay", assessment: "Assessment" },
                        { week: 6, objective: "Non-fiction writing", topics: "Argument, opinion pieces", activities: "Write article/speech", assessment: "Graded" },
                        { week: 7, objective: "Listening & speaking", topics: "Group discussion, panel or debate", activities: "Participate with evidence", assessment: "Rubric" },
                        { week: 8, objective: "Exam practice – Paper 1 style", topics: "Reading + short writing", activities: "Timed tasks", assessment: "Marked" },
                        { week: 9, objective: "Exam practice – Paper 2 style", topics: "Long writing: discursive/argument", activities: "Timed essay", assessment: "Marked" },
                        { week: 10, objective: "Mid-year exam", topics: "Combined skills", activities: "Formal paper", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Surds & indices", topics: "Laws, rationalising denominators", activities: "Practice set", assessment: "Checked" },
                        { week: 2, objective: "Quadratic techniques", topics: "Completing square, formula confidently", activities: "Solve complex quadratics", assessment: "Short test" },
                        { week: 3, objective: "Simultaneous equations 2×2/3×3", topics: "Substitution, elimination", activities: "Word problem systems", assessment: "Worksheet" },
                        { week: 4, objective: "Advanced functions", topics: "Transformations, composite functions (f∘g)", activities: "Table + sketch", assessment: "Exercise" },
                        { week: 5, objective: "Trigonometric ratios review", topics: "SOH-CAH-TOA in various contexts", activities: "Problem sets", assessment: "Mini-test" },
                        { week: 6, objective: "Trig graphs (intro)", topics: "Graphs of sin, cos, tan (basic)", activities: "Plot simple graphs", assessment: "Graphing task" },
                        { week: 7, objective: "Trig equations (simple)", topics: "Solve sin x = a in restricted domains", activities: "Practice", assessment: "Check" },
                        { week: 8, objective: "Vectors (intro)", topics: "Magnitude, direction, components", activities: "Diagram work", assessment: "Worksheet" },
                        { week: 9, objective: "Problem solving & modelling", topics: "Mixed algebra + trig", activities: "Contextual problems", assessment: "Assignment" },
                        { week: 10, objective: "Term test", topics: "Topics from Term 2", activities: "Formal exam", assessment: "Graded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Homeostasis basics", topics: "Internal balance, examples", activities: "Diagram/notes", assessment: "Quiz" },
                        { week: 2, objective: "Nervous & endocrine systems", topics: "Coordination", activities: "Compare systems", assessment: "Written" },
                        { week: 3, objective: "Microorganisms & disease", topics: "Pathogens, immunity (intro)", activities: "Case studies", assessment: "Worksheet" },
                        { week: 4, objective: "Chemical bonding & structure", topics: "Ionic, covalent, metallic", activities: "Model building", assessment: "Short test" },
                        { week: 5, objective: "Moles (conceptual)", topics: "Basic mole idea (no heavy calc if not needed)", activities: "Simple problems", assessment: "Practice" },
                        { week: 6, objective: "Rates of reaction", topics: "Temperature, concentration, catalysts", activities: "Reaction demos", assessment: "Graph questions" },
                        { week: 7, objective: "Electric circuits", topics: "Series vs parallel, basic calculations", activities: "Circuit building", assessment: "Practical" },
                        { week: 8, objective: "Power & energy use", topics: "Domestic electricity, cost", activities: "Bill-style problems", assessment: "Exercise" },
                        { week: 9, objective: "Environmental challenges", topics: "Pollution, resource depletion", activities: "Research mini-project", assessment: "Presentation" },
                        { week: 10, objective: "Term test", topics: "Bio + Chem + Physics content", activities: "Written exam", assessment: "Feedback" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Detailed modern history topic", topics: "Choose focus era/war/region", activities: "Research", assessment: "Notes" },
                        { week: 2, objective: "Case study analysis", topics: "Example: World War I/II, decolonisation", activities: "Source work", assessment: "Short essay" },
                        { week: 3, objective: "Civic participation", topics: "Elections, advocacy, NGOs", activities: "Role-play campaign", assessment: "Task" },
                        { week: 4, objective: "Economic literacy", topics: "Inflation, unemployment, taxation", activities: "Graphing & scenarios", assessment: "Worksheet" },
                        { week: 5, objective: "Trade & globalisation", topics: "Free trade, protectionism", activities: "Debate", assessment: "Reflection" },
                        { week: 6, objective: "Development & aid", topics: "Pros & cons of aid", activities: "Case studies", assessment: "Written" },
                        { week: 7, objective: "Global conflict & peace efforts", topics: "Peace processes", activities: "Group study", assessment: "Poster" },
                        { week: 8, objective: "Environmental politics", topics: "International agreements", activities: "Research & summarise", assessment: "Summary" },
                        { week: 9, objective: "Revision workshop", topics: "Key ideas from term", activities: "Quiz games", assessment: "Participation" },
                        { week: 10, objective: "Mid-year exam", topics: "Essays + structured questions", activities: "Graded", assessment: "Grade" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Deepen programming", topics: "Functions with parameters", activities: "Modularise earlier code", assessment: "Code review" },
                        { week: 2, objective: "Data structures", topics: "Lists/arrays, dictionaries (maps)", activities: "Process collections of data", assessment: "Exercises" },
                        { week: 3, objective: "Search & sort (conceptual)", topics: "Linear search, basic sort idea", activities: "Pseudocode & implement one method", assessment: "Task" },
                        { week: 4, objective: "File I/O", topics: "Read/write text (if environment allows)", activities: "Create log/read config", assessment: "Practical" },
                        { week: 5, objective: "Database concepts", topics: "Tables, relationships, queries", activities: "ER diagram on paper", assessment: "Worksheet" },
                        { week: 6, objective: "Spreadsheets advanced", topics: "Lookups, conditional formulae", activities: "Scenario modelling", assessment: "File" },
                        { week: 7, objective: "Systems & OS", topics: "Process, memory management (overview)", activities: "Class discussion + notes", assessment: "Short test" },
                        { week: 8, objective: "Networks & internet detail", topics: "Protocols, packets, topology", activities: "Diagram & explanation", assessment: "Assessment" },
                        { week: 9, objective: "ICT & law", topics: "Data protection, copyright", activities: "Case scenarios", assessment: "Written" },
                        { week: 10, objective: "Term project", topics: "Small app/db/web prototype", activities: "Submission + demo", assessment: "Rubric" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Refine personal style", topics: "Identify influences", activities: "Research chosen artists", assessment: "Artist notes" },
                        { week: 2, objective: "Anatomy & movement", topics: "Hands, posture", activities: "Focused sketches", assessment: "Sketchbook" },
                        { week: 3, objective: "Advanced shading & texture", topics: "Realistic rendering", activities: "Study from photo/object", assessment: "Technique" },
                        { week: 4, objective: "Thematic project planning", topics: "Pick theme (identity, environment, social issue)", activities: "Proposal + thumbnails", assessment: "Proposal graded" },
                        { week: 5, objective: "Large composition layout", topics: "Balance, focal point", activities: "Rough composition", assessment: "Feedback" },
                        { week: 6, objective: "Develop main project", topics: "Work sessions", activities: "Mid-project critique", assessment: "Progress" },
                        { week: 7, objective: "Add detail & refine", topics: "Textures, edges", activities: "Work session", assessment: "Ongoing" },
                        { week: 8, objective: "Experiment with mixed media", topics: "Incorporate second medium", activities: "Experiment page", assessment: "Creativity" },
                        { week: 9, objective: "Final touches & mounting", topics: "Presentation quality", activities: "Prepare final piece", assessment: "Rubric" },
                        { week: 10, objective: "Group critique", topics: "Present & discuss", activities: "Peer/teacher feedback", assessment: "Reflection" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Set repertoire", topics: "Choose solo & ensemble pieces", activities: "Planning", assessment: "Repertoire list" },
                        { week: 2, objective: "Technical exercises", topics: "Scales, breathing, articulation", activities: "Daily shortening drills", assessment: "Skill check" },
                        { week: 3, objective: "Musicianship", topics: "Sight reading & ear training", activities: "Short sight-reading tasks", assessment: "Assessment" },
                        { week: 4, objective: "Composition task", topics: "Short original piece (melody/chords)", activities: "Compose & notate/record", assessment: "Marked" },
                        { week: 5, objective: "Drama text work", topics: "Interpret scene", activities: "Table read & blocking", assessment: "Teacher notes" },
                        { week: 6, objective: "Character work", topics: "Backstory, objectives", activities: "Monologue or scene work", assessment: "Performance mark" },
                        { week: 7, objective: "Combine elements", topics: "Music + acting", activities: "Devise short musical scene", assessment: "Rehearsal" },
                        { week: 8, objective: "Rehearse full piece(s)", topics: "Run & improve", activities: "Run-through", assessment: "Observation" },
                        { week: 9, objective: "Showcase performance", topics: "In-class or small event", activities: "Live showing", assessment: "Rubric" },
                        { week: 10, objective: "Reflect & document", topics: "Process journal", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Update fitness profile", topics: "Re-test some baselines", activities: "Compare to Term 1", assessment: "Record" },
                        { week: 2, objective: "Strength & power", topics: "Explosive movements (jumps, sprints)", activities: "Drills", assessment: "Effort" },
                        { week: 3, objective: "Agility", topics: "Change-of-direction", activities: "Cone ladder drills", assessment: "Observation" },
                        { week: 4, objective: "Sport-specific skills", topics: "Choose main sport this term", activities: "Targeted drills", assessment: "Skill level" },
                        { week: 5, objective: "Match play", topics: "Small-sided games", activities: "Apply tactics", assessment: "Participation" },
                        { week: 6, objective: "Health topics", topics: "Nutrition, substances, lifestyle choices", activities: "Short lesson & quiz", assessment: "Quiz" },
                        { week: 7, objective: "Injury awareness", topics: "First aid basics", activities: "Demo/role-play", assessment: "Engagement" },
                        { week: 8, objective: "Outdoor/track events", topics: "Running/throwing/jumping", activities: "Practice", assessment: "Performance" },
                        { week: 9, objective: "Mini sports festival", topics: "Friendly competition", activities: "Games & events", assessment: "Sportsmanship" },
                        { week: 10, objective: "Reflection", topics: "Set new health goals", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Time & priority control", topics: "Balancing academics & rest", activities: "Plan weekly schedule", assessment: "Plan quality" },
                        { week: 2, objective: "Independent learning", topics: "Using textbooks/online sources effectively", activities: "Mini research task", assessment: "Product" },
                        { week: 3, objective: "Ethical decision making", topics: "Case-based reasoning", activities: "Debate scenarios", assessment: "Participation" },
                        { week: 4, objective: "Money & budgeting", topics: "Income/expenses, needs vs wants", activities: "Create monthly budget", assessment: "Worksheet" },
                        { week: 5, objective: "Career awareness", topics: "Fields & skills needed", activities: "Research 2-3 careers", assessment: "Short report" },
                        { week: 6, objective: "Communication in adulthood", topics: "Emails, CV tone", activities: "Draft a formal email", assessment: "Writing check" },
                        { week: 7, objective: "Relationship skills", topics: "Respectful communication in friendships", activities: "Role-play", assessment: "Teacher notes" },
                        { week: 8, objective: "Handling conflict fairly", topics: "Negotiation, mediation", activities: "Group problem scenarios", assessment: "Reflection" },
                        { week: 9, objective: "Check goals & progress", topics: "Review term goals", activities: "Update plan", assessment: "Self-eval" },
                        { week: 10, objective: "Mid-year life skills review", topics: "What changed? What next?", activities: "Journaling", assessment: "Completion" }
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
                        { week: 1, objective: "Revise key texts", topics: "Set novel/plays & poems", activities: "Text maps/summary sheets", assessment: "Check" },
                        { week: 2, objective: "Targeted skills – comprehension", topics: "Inference, language, structure", activities: "Past-paper style questions", assessment: "Marked" },
                        { week: 3, objective: "Targeted skills – analysis", topics: "Short unseen prose/poetry", activities: "Timed paragraph responses", assessment: "Feedback" },
                        { week: 4, objective: "Refine exam essays", topics: "Planning under time", activities: "Practice essays", assessment: "Teacher grading" },
                        { week: 5, objective: "Transactional writing", topics: "Letters, reports, speeches, articles", activities: "Timed tasks", assessment: "Marked" },
                        { week: 6, objective: "Speaking confidence", topics: "Optional oral assessment / presentations", activities: "Deliver talk", assessment: "Oral rubric" },
                        { week: 7, objective: "Mock Paper 1", topics: "Reading paper timed", activities: "Full script marked", assessment: "Score + review" },
                        { week: 8, objective: "Mock Paper 2", topics: "Writing paper timed", activities: "Full script marked", assessment: "Score + review" },
                        { week: 9, objective: "Error clinic & revision", topics: "Go through common mistakes", activities: "Targeted practice", assessment: "Improvement evidence" },
                        { week: 10, objective: "Year-end exam", topics: "Reading + writing", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Audit strengths & weaknesses", topics: "All core topics", activities: "Diagnostic mixed test", assessment: "Planning" },
                        { week: 2, objective: "Algebra review", topics: "Equations, quadratics, inequalities", activities: "Mixed sets", assessment: "Marking" },
                        { week: 3, objective: "Functions & graphs review", topics: "Linear, quadratics, simple trig graphs", activities: "Sketching & interpretation", assessment: "Tasks" },
                        { week: 4, objective: "Trig & geometry", topics: "Right/oblique triangles (if covered), circle basics", activities: "Mixed problems", assessment: "Worksheet" },
                        { week: 5, objective: "Statistics & probability", topics: "Data representation & basic probability", activities: "Practice questions", assessment: "Check" },
                        { week: 6, objective: "Word-problem focus", topics: "Multi-step real problems", activities: "Group problem-solving", assessment: "Observation" },
                        { week: 7, objective: "Mock exam 1", topics: "Full paper under exam conditions", activities: "Marked", assessment: "Feedback" },
                        { week: 8, objective: "Mock exam 2", topics: "Second paper", activities: "Marked", assessment: "Feedback" },
                        { week: 9, objective: "Targeted revision", topics: "Individualised based on mocks", activities: "Focused tasks", assessment: "Improvement" },
                        { week: 10, objective: "Year-end exam", topics: "Comprehensive", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Biology recap", topics: "Cells, systems, genetics", activities: "Review questions", assessment: "Quiz" },
                        { week: 2, objective: "Chemistry recap", topics: "Structure, bonding, reactions", activities: "Mixed written tasks", assessment: "Short test" },
                        { week: 3, objective: "Physics recap", topics: "Motion, forces, energy, electricity", activities: "Numerical & conceptual tasks", assessment: "Worksheet" },
                        { week: 4, objective: "Earth & environment recap", topics: "Cycles, climate, human impact", activities: "Case revision", assessment: "Written work" },
                        { week: 5, objective: "Practical skills", topics: "Graphs, units, evaluation", activities: "Practice exam-style practical questions", assessment: "Marked" },
                        { week: 6, objective: "Design & plan investigation", topics: "Full practical design on paper", activities: "Investigation plan", assessment: "Teacher feedback" },
                        { week: 7, objective: "Mock science exam 1", topics: "Paper style exam", activities: "Marked", assessment: "Review" },
                        { week: 8, objective: "Mock science exam 2", topics: "Second paper or alternative", activities: "Marked", assessment: "Review" },
                        { week: 9, objective: "Final revision", topics: "Q&A, flashcards, summary diagrams", activities: "Active recall tasks", assessment: "Engagement" },
                        { week: 10, objective: "Year-end exam", topics: "All strands", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Recap programming concepts", topics: "Variables, structures, functions", activities: "Solve small problems", assessment: "Code check" },
                        { week: 2, objective: "Recap data & spreadsheets", topics: "Formulas, charts, analysis", activities: "Mini data project", assessment: "Submission" },
                        { week: 3, objective: "Recap networking & security", topics: "Concept map of topics", activities: "Draw concept map", assessment: "Review" },
                        { week: 4, objective: "Recap data representation", topics: "Binary/hex & file representations (as required level)", activities: "Practice conversions", assessment: "Quiz" },
                        { week: 5, objective: "Plan capstone project", topics: "Design a small solution (app/website/data model)", activities: "Proposal", assessment: "Proposal mark" },
                        { week: 6, objective: "Develop project", topics: "Build/program", activities: "Lab time", assessment: "Progress" },
                        { week: 7, objective: "Test & refine", topics: "Debug & test", activities: "User testing", assessment: "Notes" },
                        { week: 8, objective: "Document project", topics: "Screenshots, explanations, code snippets", activities: "Write documentation", assessment: "Doc quality" },
                        { week: 9, objective: "Present project", topics: "Demo to class/teacher", activities: "Oral + practical", assessment: "Rubric" },
                        { week: 10, objective: "Year-end theory test", topics: "Written ICT/computing paper", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Plan final portfolio", topics: "Select and organise best works", activities: "Portfolio checklist", assessment: "Approval" },
                        { week: 2, objective: "Identify missing pieces", topics: "Fill gaps (e.g. one digital, one 3D)", activities: "Plan new/additional work", assessment: "Plan" },
                        { week: 3, objective: "Refine major pieces", topics: "Rework weak areas", activities: "Before/after comparison", assessment: "Improvement" },
                        { week: 4, objective: "Visual presentation", topics: "Mounting, layout, labelling", activities: "Prepare exhibition plan", assessment: "Checked" },
                        { week: 5, objective: "Write artist statement", topics: "Intent, influences, process", activities: "Draft & revise", assessment: "Statement" },
                        { week: 6, objective: "Curate exhibition", topics: "Decide order, display style", activities: "Set up", assessment: "Participation" },
                        { week: 7, objective: "Host mini exhibition", topics: "Invite peers/teachers/parents", activities: "Walkthrough", assessment: "Presentation" },
                        { week: 8, objective: "Receive critique", topics: "Formal feedback", activities: "Note key points", assessment: "Reflection notes" },
                        { week: 9, objective: "Personal reflection", topics: "What I learned, next goals", activities: "Write reflection", assessment: "Assessed" },
                        { week: 10, objective: "Final mark", topics: "Portfolio + reflection", activities: "Complete grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Choose final performance goals", topics: "Solo/ensemble pieces", activities: "Planning", assessment: "Approved plan" },
                        { week: 2, objective: "Technical build-up", topics: "Scales, exercises tailored to piece", activities: "Daily practice logs", assessment: "Log check" },
                        { week: 3, objective: "Rehearse in sections", topics: "Break down complex parts", activities: "Sectional rehearsals", assessment: "Feedback" },
                        { week: 4, objective: "Integrate full piece", topics: "Run full performance", activities: "Run-through", assessment: "Teacher notes" },
                        { week: 5, objective: "Performance skills", topics: "Stage presence, interpretation", activities: "Video self-review", assessment: "Self-assessment" },
                        { week: 6, objective: "Drama/musical integration", topics: "If combined, refine acting aspects", activities: "Scene rehearsals", assessment: "Observation" },
                        { week: 7, objective: "Technical rehearsal", topics: "Sound/lighting & cues (if available)", activities: "Tech run", assessment: "Checklist" },
                        { week: 8, objective: "Final performance event", topics: "Concert/showing", activities: "Live performance", assessment: "Rubric" },
                        { week: 9, objective: "Record & review", topics: "Watch/listen back", activities: "Class critique", assessment: "Response" },
                        { week: 10, objective: "Reflect & plan ahead", topics: "Where to go in Grade 12", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Set final year fitness targets", topics: "Realistic targets", activities: "Goal sheet", assessment: "Quality" },
                        { week: 2, objective: "Cardio conditioning", topics: "Chosen endurance workout", activities: "Intervals or long run", assessment: "Performance" },
                        { week: 3, objective: "Strength & conditioning", topics: "Bodyweight + simple resistance", activities: "Circuit", assessment: "Effort" },
                        { week: 4, objective: "Sport focus", topics: "Refine skills in 1-2 chosen sports", activities: "Advanced drills", assessment: "Skill level" },
                        { week: 5, objective: "Team tournaments", topics: "Organised matches", activities: "Team competition", assessment: "Participation" },
                        { week: 6, objective: "Health modules", topics: "Sexual & reproductive health (age-appropriate)", activities: "Lesson & Q&A", assessment: "Short task" },
                        { week: 7, objective: "Mental wellbeing in sport", topics: "Confidence, handling loss", activities: "Discussion", assessment: "Engagement" },
                        { week: 8, objective: "Practical assessments", topics: "Skill tests per sport", activities: "Graded performances", assessment: "Rubric" },
                        { week: 9, objective: "Retest fitness metrics", topics: "Compare to start-of-year", activities: "Testing", assessment: "Improvement" },
                        { week: 10, objective: "Year-end evaluation", topics: "Teacher + self-review", activities: "Report & reflection", assessment: "Complete" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Review key historical units", topics: "From earlier terms", activities: "Timeline revision", assessment: "Check" },
                        { week: 2, objective: "Review key geography units", topics: "Physical/human", activities: "Map/data revision", assessment: "Questions" },
                        { week: 3, objective: "Civic knowledge", topics: "Government, law, rights", activities: "Revision questions", assessment: "Short test" },
                        { week: 4, objective: "Economic understanding", topics: "Trade, development, inequality", activities: "Case reviews", assessment: "Written" },
                        { week: 5, objective: "Global issues", topics: "Conflict, climate, migration", activities: "Link news stories to course", assessment: "Discussion" },
                        { week: 6, objective: "Mock exam prep", topics: "Answer planning & timing", activities: "Practice essays", assessment: "Feedback" },
                        { week: 7, objective: "Mock social studies exam", topics: "Full paper", activities: "Marked", assessment: "Score" },
                        { week: 8, objective: "Exam review", topics: "Discuss model answers", activities: "Correct mistakes", assessment: "Improvement" },
                        { week: 9, objective: "Final Q&A & memory tools", topics: "Condensing notes", activities: "Create summary sheets", assessment: "Checked" },
                        { week: 10, objective: "Year-end exam", topics: "Formal test", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Reflect on Grade 11 journey", topics: "What has changed?", activities: "Journaling", assessment: "Depth of thought" },
                        { week: 2, objective: "Exam strategy", topics: "Chunking, spaced revision", activities: "Build revision timetable", assessment: "Plan check" },
                        { week: 3, objective: "Dealing with exam stress", topics: "Mindset, rest, nutrition", activities: "Practical tools", assessment: "Participation" },
                        { week: 4, objective: "Ethical adulthood", topics: "Honesty, work ethic, responsibility", activities: "Case studies", assessment: "Short responses" },
                        { week: 5, objective: "Future paths", topics: "Academic/vocational options", activities: "Research chosen path", assessment: "Summary" },
                        { week: 6, objective: "Basic employability skills", topics: "CV basics, interviews", activities: "Draft simple CV", assessment: "CV quality" },
                        { week: 7, objective: "Community & service", topics: "Giving back, volunteering", activities: "Plan a small project", assessment: "Project idea" },
                        { week: 8, objective: "Personal boundaries & safety", topics: "Online & offline", activities: "Scenario questions", assessment: "Understanding" },
                        { week: 9, objective: "Personal mission statement", topics: "Life values & direction", activities: "Write mission statement", assessment: "Clarity" },
                        { week: 10, objective: "Celebration & closure", topics: "Affirmations, certificates", activities: "Circle/sharing", assessment: "Participation" }
                    ]
                }
            ]
        }
    ]
};
