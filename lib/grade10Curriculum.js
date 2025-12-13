export const grade10CurriculumData = {
    grade: "Grade 10",
    term: "Term 1",
    year: "Year 10",
    description: "Grade 10 builds a strong academic foundation with IGCSE-level preparation, developing advanced analytical skills across core subjects.",
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
                        { week: 1, objective: "Review core skills", topics: "Parts of speech, clauses", activities: "Diagnostic reading & writing task", assessment: "Baseline evaluation" },
                        { week: 2, objective: "Analyse fiction prose", topics: "Narrator, point of view, characterisation", activities: "Study short story / novel extract", assessment: "Written response" },
                        { week: 3, objective: "Analyse non-fiction", topics: "Bias, tone, rhetorical devices", activities: "Analyse article or speech", assessment: "Short analytical paragraph" },
                        { week: 4, objective: "Develop thesis statements", topics: "Strong central argument", activities: "Model & build thesis statements", assessment: "Peer feedback" },
                        { week: 5, objective: "Write analytical essays", topics: "PEEL/TEE paragraphs, cohesion", activities: "Write 3-4 paragraph essay", assessment: "Assessed draft" },
                        { week: 6, objective: "Study poetry", topics: "Imagery, symbolism, structure", activities: "Annotate poem; group discussion", assessment: "Short commentary" },
                        { week: 7, objective: "Grammar precision", topics: "Sentence variety, fragments, run-ons", activities: "Combine/split sentences exercises", assessment: "Grammar quiz" },
                        { week: 8, objective: "Creative narrative writing", topics: "Narrative voice, setting, conflict", activities: "Write short story opening & continuation", assessment: "Marked narrative" },
                        { week: 9, objective: "Oral communication", topics: "Formal speech delivery", activities: "Prepare & deliver short speech", assessment: "Speaking rubric" },
                        { week: 10, objective: "Term assessment", topics: "Reading & writing under timed conditions", activities: "Mock exam (comprehension + essay)", assessment: "Grade + feedback" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Consolidate algebra basics", topics: "Simplifying, indices, factorising", activities: "Mixed practice sets", assessment: "Diagnostic test" },
                        { week: 2, objective: "Linear equations & graphs", topics: "y = mx + c, gradient, intercept", activities: "Plot graphs from equations", assessment: "Exercise marking" },
                        { week: 3, objective: "Simultaneous equations", topics: "Graphical & algebraic methods", activities: "Solve pairs of equations", assessment: "Written test" },
                        { week: 4, objective: "Quadratic basics", topics: "Factorising ax² + bx + c", activities: "Factorisation drills", assessment: "Short quiz" },
                        { week: 5, objective: "Quadratic graphs", topics: "Shape, roots, turning point", activities: "Plot quadratic graphs", assessment: "Graph task" },
                        { week: 6, objective: "Inequalities", topics: "Solve & represent on number lines", activities: "Solve inequalities, shade regions", assessment: "Exercise check" },
                        { week: 7, objective: "Rational expressions", topics: "Simplify algebraic fractions", activities: "Practice simplifying & restrictions", assessment: "Mini-test" },
                        { week: 8, objective: "Sequences", topics: "Arithmetic & simple geometric", activities: "Find nth term", assessment: "Worksheet" },
                        { week: 9, objective: "Problem solving", topics: "Real-life algebra problems", activities: "Word problems & modelling", assessment: "Assignment" },
                        { week: 10, objective: "Term test", topics: "Algebra & graphs", activities: "Formal test", assessment: "Graded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Review scientific method", topics: "Variables, fair tests, reliability", activities: "Plan & discuss simple experiment", assessment: "Starter quiz" },
                        { week: 2, objective: "Cell biology revision", topics: "Cell types, organelles", activities: "Label & compare cells", assessment: "Short written task" },
                        { week: 3, objective: "Tissues & organs", topics: "Organisation in living things", activities: "Organ system diagrams", assessment: "Worksheet" },
                        { week: 4, objective: "Atomic structure", topics: "Protons, neutrons, electrons, isotopes", activities: "Build atom models", assessment: "Quiz" },
                        { week: 5, objective: "Periodic table", topics: "Groups, periods, metals/non-metals", activities: "Periodic trend activity", assessment: "Short test" },
                        { week: 6, objective: "Motion", topics: "Speed, velocity, acceleration", activities: "Ticker timer / distance-time graphs", assessment: "Graph questions" },
                        { week: 7, objective: "Forces", topics: "Balanced/unbalanced, F = ma (conceptual)", activities: "Force diagram practice", assessment: "Exercise" },
                        { week: 8, objective: "Energy forms & transfers", topics: "KE, PE, conservation of energy", activities: "Energy transfer diagrams", assessment: "Written response" },
                        { week: 9, objective: "Earth systems", topics: "Layers, rock cycle", activities: "Diagram & classification", assessment: "Classwork" },
                        { week: 10, objective: "Term test", topics: "Biology, chemistry & physics topics", activities: "Written exam", assessment: "Marked & reviewed" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Use sources critically", topics: "Primary vs secondary sources", activities: "Source analysis task", assessment: "Short response" },
                        { week: 2, objective: "Modern world overview", topics: "Key 20th century events", activities: "Timeline creation", assessment: "Group work" },
                        { week: 3, objective: "Colonialism & independence", topics: "Case study: one region (e.g. Africa/Asia)", activities: "Reading & discussion", assessment: "Paragraph response" },
                        { week: 4, objective: "Forms of government", topics: "Democracy, authoritarianism, monarchy", activities: "Comparison chart", assessment: "Worksheet" },
                        { week: 5, objective: "Citizenship & constitutions", topics: "Rule of law, rights & duties", activities: "Analyse sample constitution sections", assessment: "Short answer" },
                        { week: 6, objective: "Physical geography", topics: "Landforms, tectonic activity", activities: "Map & diagram labelling", assessment: "Quiz" },
                        { week: 7, objective: "Human geography", topics: "Population, migration", activities: "Graph interpretation", assessment: "Data questions" },
                        { week: 8, objective: "Urbanisation & development", topics: "Megacities, slums, infrastructure", activities: "Case study analysis", assessment: "Writing task" },
                        { week: 9, objective: "Global issues", topics: "Poverty, inequality", activities: "Class debate / discussion", assessment: "Reflection" },
                        { week: 10, objective: "Term assessment", topics: "Combination of history & geography", activities: "Written test", assessment: "Graded" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Assess digital skills", topics: "File management, typing", activities: "Baseline ICT tasks", assessment: "Diagnostic" },
                        { week: 2, objective: "Computer architecture", topics: "CPU, memory, storage, buses", activities: "Diagram & label system", assessment: "Worksheet" },
                        { week: 3, objective: "Operating systems", topics: "Functions & types", activities: "Compare OS features", assessment: "Short quiz" },
                        { week: 4, objective: "Data representation", topics: "Bits, bytes, binary", activities: "Convert between bases", assessment: "Practice sheet" },
                        { week: 5, objective: "Spreadsheets", topics: "Formulae, relative/absolute cell refs", activities: "Create budget sheet", assessment: "File submission" },
                        { week: 6, objective: "Algorithms", topics: "Flowcharts & pseudocode", activities: "Design algorithm for simple problem", assessment: "Checked pseudocode" },
                        { week: 7, objective: "Programming basics", topics: "Variables, I/O, sequence (Python or similar)", activities: "Code simple calculator", assessment: "Code review" },
                        { week: 8, objective: "Selection structures", topics: "if/elif/else", activities: "Write decision-making programs", assessment: "Practical test" },
                        { week: 9, objective: "Digital citizenship", topics: "Ethics, safety, privacy", activities: "Discuss scenarios", assessment: "Reflection task" },
                        { week: 10, objective: "Term project", topics: "Mini-program or data project", activities: "Presentation or submission", assessment: "Rubric graded" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Review drawing skills", topics: "Line, proportion", activities: "Still-life sketch", assessment: "Sketchbook check" },
                        { week: 2, objective: "Tone & shading", topics: "Light source, contrast", activities: "Shaded object studies", assessment: "Teacher feedback" },
                        { week: 3, objective: "Perspective", topics: "1- & 2-point perspective", activities: "Interior/exterior drawing", assessment: "Accuracy assessment" },
                        { week: 4, objective: "Figure drawing", topics: "Basic anatomy", activities: "Gesture drawings", assessment: "Sketch review" },
                        { week: 5, objective: "Colour theory", topics: "Color wheel, schemes", activities: "Painted colour studies", assessment: "Evaluation" },
                        { week: 6, objective: "Media exploration", topics: "Pencil, ink, paint, digital", activities: "Mixed-media experiments", assessment: "Portfolio entry" },
                        { week: 7, objective: "Design process", topics: "From idea to concept", activities: "Thumbnail sketches for project", assessment: "Idea quality" },
                        { week: 8, objective: "Cultural / thematic art", topics: "Art based on a theme (e.g. identity)", activities: "Develop main piece", assessment: "Work-in-progress check" },
                        { week: 9, objective: "Finish project", topics: "Refine, add detail & polish", activities: "Complete final artwork", assessment: "Rubric" },
                        { week: 10, objective: "Display & critique", topics: "Present & discuss", activities: "Group critique", assessment: "Participation + reflection" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Assess musical skills", topics: "Rhythm, pitch, confidence", activities: "Short performance/echo exercises", assessment: "Baseline" },
                        { week: 2, objective: "Rhythm & metre", topics: "Simple & compound time", activities: "Clap & play patterns", assessment: "Accuracy" },
                        { week: 3, objective: "Melody & scales", topics: "Major/minor scales", activities: "Singing/playing patterns", assessment: "Pitch accuracy" },
                        { week: 4, objective: "Harmony basics", topics: "Triads, simple progressions", activities: "Play/sing chord patterns", assessment: "Skill check" },
                        { week: 5, objective: "Song analysis", topics: "Structure, instrumentation", activities: "Analyse a chosen song", assessment: "Written response" },
                        { week: 6, objective: "Drama fundamentals", topics: "Voice, posture, blocking", activities: "Short drama exercises", assessment: "Teacher observation" },
                        { week: 7, objective: "Group piece planning", topics: "Choose song/scene", activities: "Rehearsal in groups", assessment: "Engagement" },
                        { week: 8, objective: "Rehearsal", topics: "Refine music/drama piece", activities: "Group practice", assessment: "Ongoing feedback" },
                        { week: 9, objective: "Performance", topics: "Present to class", activities: "Live performance", assessment: "Rubric" },
                        { week: 10, objective: "Reflection", topics: "Self & peer evaluation", activities: "Write reflection", assessment: "Self-assessment" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Baseline fitness", topics: "Cardio, strength, flexibility", activities: "Fitness tests", assessment: "Baseline record" },
                        { week: 2, objective: "Warm-up & injury prevention", topics: "Stretching routines", activities: "Design & lead warm-ups", assessment: "Teacher rating" },
                        { week: 3, objective: "Team sport skills", topics: "Passing, movement, positioning", activities: "Drills (e.g. basketball, football)", assessment: "Skill check" },
                        { week: 4, objective: "Game play", topics: "Rules, tactics", activities: "Small-sided games", assessment: "Participation" },
                        { week: 5, objective: "Individual fitness", topics: "Circuits, personal goals", activities: "Design personal circuit", assessment: "Effort rating" },
                        { week: 6, objective: "Health & nutrition", topics: "Diet, hydration, sleep", activities: "Discussion / food diary", assessment: "Reflection" },
                        { week: 7, objective: "Athletics skills", topics: "Running, jumping, throwing", activities: "Track & field practice", assessment: "Technique feedback" },
                        { week: 8, objective: "Competitive events", topics: "Timed runs, distances", activities: "Class athletics day", assessment: "Personal bests" },
                        { week: 9, objective: "Reflection & goal setting", topics: "Fitness improvement", activities: "Review progress & set goals", assessment: "Self-assessment" },
                        { week: 10, objective: "Term assessment", topics: "Fitness retest", activities: "Repeat fitness tests", assessment: "Improvement measured" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-awareness", topics: "Strengths, weaknesses", activities: "Personal reflection sheet", assessment: "Written reflection" },
                        { week: 2, objective: "Growth mindset", topics: "Effort vs talent", activities: "Video + discussion", assessment: "Exit ticket" },
                        { week: 3, objective: "Time management", topics: "Prioritising & planning", activities: "Create weekly study plan", assessment: "Plan check" },
                        { week: 4, objective: "Communication skills", topics: "Active listening, assertiveness", activities: "Role-play conversations", assessment: "Observation" },
                        { week: 5, objective: "Conflict resolution", topics: "I-messages, compromise", activities: "Scenario work", assessment: "Participation" },
                        { week: 6, objective: "Values & ethics", topics: "Honesty, integrity, respect", activities: "Case study discussions", assessment: "Short written answers" },
                        { week: 7, objective: "Digital responsibility", topics: "Online behaviour, cyberbullying", activities: "Group work / poster", assessment: "Created output" },
                        { week: 8, objective: "Stress & wellbeing", topics: "Coping strategies", activities: "Relaxation & journaling", assessment: "Reflection" },
                        { week: 9, objective: "Goal-setting", topics: "Academic & personal goals", activities: "SMART goals sheet", assessment: "Goal quality" },
                        { week: 10, objective: "Term review", topics: "What I learned", activities: "Self-evaluation form", assessment: "Completion" }
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
                        { week: 1, objective: "Analyse drama", topics: "Stage directions, dialogue", activities: "Read one-act play or extract", assessment: "Guided questions" },
                        { week: 2, objective: "Character & conflict", topics: "Motivation, internal vs external", activities: "Character chart", assessment: "Paragraph response" },
                        { week: 3, objective: "Writing discursive essays", topics: "Balanced arguments", activities: "Plan & write discursive piece", assessment: "Teacher-marked" },
                        { week: 4, objective: "Comparing texts", topics: "Compare themes & tone", activities: "Venn/compare chart", assessment: "Short essay" },
                        { week: 5, objective: "Poetry comparison", topics: "Two poems, same theme", activities: "Side-by-side annotation", assessment: "Written comparison" },
                        { week: 6, objective: "Non-fiction writing", topics: "Articles, reports, leaflets", activities: "Write an informative article", assessment: "Graded task" },
                        { week: 7, objective: "Listening & note-taking", topics: "Talks, audio clips", activities: "Take notes & summarise", assessment: "Note quality" },
                        { week: 8, objective: "Exam-style practice", topics: "Timed comprehension", activities: "Past-paper style tasks", assessment: "Marked under timing" },
                        { week: 9, objective: "Redrafting & style", topics: "Vary vocabulary & sentence type", activities: "Rewrite previous work", assessment: "Before/after comparison" },
                        { week: 10, objective: "Mid-year exam", topics: "Reading + writing paper", activities: "Formal grading", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Quadratic equations", topics: "Factorisation & formula (intro)", activities: "Solve using two methods", assessment: "Exercise" },
                        { week: 2, objective: "Graphs of quadratics", topics: "Intercepts, turning point", activities: "Sketch from equation", assessment: "Graph tasks" },
                        { week: 3, objective: "Simultaneous equations (graphical)", topics: "Linear + linear, linear + quadratic (conceptual)", activities: "Intersection problems", assessment: "Worksheet" },
                        { week: 4, objective: "Similarity & congruence", topics: "Scale factor, similar triangles", activities: "Prove similarity", assessment: "Questions" },
                        { week: 5, objective: "Trigonometry in right triangles", topics: "SOH-CAH-TOA", activities: "Find sides & angles", assessment: "Short test" },
                        { week: 6, objective: "Trigonometry in context", topics: "Heights, distances", activities: "Word problems", assessment: "Assignment" },
                        { week: 7, objective: "Circle geometry", topics: "Angles at centre, circumference basics", activities: "Apply circle theorems (intro)", assessment: "Practice" },
                        { week: 8, objective: "Transformations", topics: "Rotation, reflection, enlargement", activities: "Perform on grid", assessment: "Exercise sheet" },
                        { week: 9, objective: "Coordinate geometry", topics: "Gradient, midpoint, line equations", activities: "Work with coordinates", assessment: "Mini-test" },
                        { week: 10, objective: "Term test", topics: "Algebra, trig, geometry", activities: "Formal exam", assessment: "Marked" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Enzymes & digestion", topics: "Lock & key, factors", activities: "Simple experiment / demo", assessment: "Short quiz" },
                        { week: 2, objective: "Respiratory system", topics: "Gas exchange, lungs", activities: "Diagram & labelling", assessment: "Worksheet" },
                        { week: 3, objective: "Circulatory system", topics: "Heart, vessels, blood", activities: "Pulse & heart rate practical", assessment: "Observation sheet" },
                        { week: 4, objective: "Acids & bases", topics: "pH scale, indicators", activities: "Test household solutions", assessment: "Lab record" },
                        { week: 5, objective: "Reactions", topics: "Word & symbol equations", activities: "Balance simple equations", assessment: "Written work" },
                        { week: 6, objective: "Electricity", topics: "Ohm's law qualitatively", activities: "Circuit building", assessment: "Practical check" },
                        { week: 7, objective: "Waves", topics: "Transverse vs longitudinal", activities: "Slinky/string demo", assessment: "Concept questions" },
                        { week: 8, objective: "Light", topics: "Reflection, refraction", activities: "Ray diagrams", assessment: "Exercises" },
                        { week: 9, objective: "Sound", topics: "Frequency, amplitude, pitch", activities: "Oscilloscope app / simulation", assessment: "Quiz" },
                        { week: 10, objective: "Term test", topics: "Bio + Chem + Physics", activities: "Formal assessment", assessment: "Feedback" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Industrial revolution", topics: "Causes & effects", activities: "Source analysis", assessment: "Short essay" },
                        { week: 2, objective: "Imperialism & resistance", topics: "Case studies", activities: "Group research", assessment: "Poster/presentation" },
                        { week: 3, objective: "World wars overview", topics: "Major causes & consequences", activities: "Timeline & mapping", assessment: "Short answer" },
                        { week: 4, objective: "International organisations", topics: "League of Nations, UN", activities: "Compare aims", assessment: "Chart" },
                        { week: 5, objective: "Human rights in practice", topics: "Case studies", activities: "Debate", assessment: "Reflection writing" },
                        { week: 6, objective: "Economic systems", topics: "Capitalism, socialism, mixed", activities: "Compare systems", assessment: "Table" },
                        { week: 7, objective: "Globalisation", topics: "Trade, culture, media", activities: "Pros & cons debate", assessment: "Group work" },
                        { week: 8, objective: "Development & inequality", topics: "Indicators (HDI, GDP)", activities: "Graph interpretation", assessment: "Questions" },
                        { week: 9, objective: "Environment & sustainability", topics: "Climate change, conservation", activities: "Project planning", assessment: "Project outline" },
                        { week: 10, objective: "Term assessment", topics: "History & civics mix", activities: "Written test", assessment: "Grade" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Refine programming", topics: "Using functions/procedures", activities: "Rewrite earlier programs using functions", assessment: "Code review" },
                        { week: 2, objective: "Selection & iteration", topics: "If, for, while combined", activities: "Solve algorithmic problems", assessment: "Practical" },
                        { week: 3, objective: "Data structures", topics: "Lists/arrays", activities: "Store & process data", assessment: "Exercises" },
                        { week: 4, objective: "File handling (simple)", topics: "Read/write files (if available)", activities: "Make small data log", assessment: "Teacher check" },
                        { week: 5, objective: "Spreadsheets modelling", topics: "What-if analysis", activities: "Model simple business/saving", assessment: "Spreadsheet submission" },
                        { week: 6, objective: "Databases (concepts)", topics: "Tables, records, queries", activities: "Simulate queries on sample data", assessment: "Worksheet" },
                        { week: 7, objective: "Network topologies", topics: "Star/bus/ring, pros/cons", activities: "Diagram & compare", assessment: "Quiz" },
                        { week: 8, objective: "Security threats", topics: "Malware, phishing, social engineering", activities: "Scenario discussion", assessment: "Written answers" },
                        { week: 9, objective: "Web design", topics: "Structure & layout planning", activities: "Design simple multi-page site (even on paper)", assessment: "Plan review" },
                        { week: 10, objective: "Term project", topics: "Small app, site, or data project", activities: "Presentation", assessment: "Rubric" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Concept art", topics: "Visualising ideas", activities: "Brainstorm & sketch concepts", assessment: "Sketchbook" },
                        { week: 2, objective: "Graphic design basics", topics: "Fonts, hierarchy", activities: "Redesign a poster/logo", assessment: "Task" },
                        { week: 3, objective: "Digital illustration", topics: "Using drawing software", activities: "Create simple digital piece", assessment: "File" },
                        { week: 4, objective: "Photography (basic)", topics: "Composition, framing", activities: "Take & edit photos", assessment: "Photo set" },
                        { week: 5, objective: "Cultural/issue-based art", topics: "Art with a message", activities: "Create piece raising an issue", assessment: "Evaluation" },
                        { week: 6, objective: "3D design/mock-ups", topics: "Packaging, product", activities: "Card/paper models", assessment: "Practical" },
                        { week: 7, objective: "Storyboard & visual narrative", topics: "Sequential art", activities: "Create 6-8 frame story", assessment: "Storyboard quality" },
                        { week: 8, objective: "Project refinement", topics: "Work on chosen main piece", activities: "Studio time", assessment: "Ongoing critique" },
                        { week: 9, objective: "Final touches", topics: "Polish, mount, prepare for display", activities: "Finishing", assessment: "Teacher check" },
                        { week: 10, objective: "Exhibition & critique", topics: "Present & discuss", activities: "Peer & teacher feedback", assessment: "Reflection" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Song structure", topics: "Verse, chorus, bridge", activities: "Analyse 1-2 songs", assessment: "Worksheet" },
                        { week: 2, objective: "Harmonisation", topics: "Chord progressions", activities: "Create simple chord progression", assessment: "Check" },
                        { week: 3, objective: "Songwriting", topics: "Lyrics & melody", activities: "Write simple song draft", assessment: "Draft" },
                        { week: 4, objective: "Ensemble skills", topics: "Playing/singing in groups", activities: "Group rehearsal", assessment: "Participation" },
                        { week: 5, objective: "World music", topics: "Instruments, styles", activities: "Listen & compare", assessment: "Response" },
                        { week: 6, objective: "Improvisation", topics: "Spontaneous music/drama", activities: "Improv games", assessment: "Engagement" },
                        { week: 7, objective: "Acting skills", topics: "Character, emotion", activities: "Monologue work", assessment: "Teacher observation" },
                        { week: 8, objective: "Rehearsal", topics: "Refine group piece", activities: "Full run-through", assessment: "Feedback" },
                        { week: 9, objective: "Performance", topics: "Present to class/audience", activities: "Live performance", assessment: "Rubric" },
                        { week: 10, objective: "Reflection", topics: "Self & peer evaluation", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Fitness baseline", topics: "Cardio, strength retest", activities: "Fitness circuit", assessment: "Compare to Term 1" },
                        { week: 2, objective: "Cardiovascular endurance", topics: "Sustained running", activities: "Intervals / continuous jog", assessment: "Timed performance" },
                        { week: 3, objective: "Strength & conditioning", topics: "Core, upper & lower body", activities: "Circuit training", assessment: "Effort & form" },
                        { week: 4, objective: "Fundamental skills", topics: "Passing, catching, dribbling", activities: "Small-sided games", assessment: "Skill observation" },
                        { week: 5, objective: "Team games", topics: "Football / basketball / netball", activities: "Skill-focused matches", assessment: "Participation" },
                        { week: 6, objective: "Health education", topics: "Body systems & heart health", activities: "Short theory lesson + quiz", assessment: "Quiz" },
                        { week: 7, objective: "Flexibility & posture", topics: "Static & dynamic stretching", activities: "Partner stretches", assessment: "Technique" },
                        { week: 8, objective: "Strategy & teamwork", topics: "Roles, tactics", activities: "Team planning session", assessment: "Coach feedback" },
                        { week: 9, objective: "Term evaluation", topics: "Retest & reflect", activities: "Compare to baseline", assessment: "Progress noted" },
                        { week: 10, objective: "Mini tournament", topics: "Class competition", activities: "Team games", assessment: "Sportsmanship" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-discipline", topics: "Delaying gratification", activities: "Scenario discussion", assessment: "Reflection" },
                        { week: 2, objective: "Study skills", topics: "Revision strategies", activities: "Make revision timetable", assessment: "Check" },
                        { week: 3, objective: "Communication under pressure", topics: "Assertive vs aggressive", activities: "Role-play", assessment: "Feedback" },
                        { week: 4, objective: "Digital footprint", topics: "Long-term impact", activities: "Case studies", assessment: "Short answers" },
                        { week: 5, objective: "Relationships", topics: "Healthy boundaries & consent", activities: "Guided discussion", assessment: "Exit cards" },
                        { week: 6, objective: "Money management", topics: "Saving, spending, short-term vs long", activities: "Budget exercise", assessment: "Activity" },
                        { week: 7, objective: "Social responsibility", topics: "Helping at home/school/community", activities: "Plan a service action", assessment: "Plan quality" },
                        { week: 8, objective: "Handling failure", topics: "Resilience", activities: "Story + reflection", assessment: "Written" },
                        { week: 9, objective: "Exam mindfulness", topics: "Coping with exam stress", activities: "Relaxation tools", assessment: "Participation" },
                        { week: 10, objective: "Mid-year review", topics: "Goals check & adjust", activities: "Update goals", assessment: "Completion" }
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
                        { week: 1, objective: "Exam-style comprehension", topics: "Fiction & non-fiction", activities: "Past paper passages", assessment: "Marked tasks" },
                        { week: 2, objective: "Analytical essays", topics: "Literary essay planning", activities: "Write exam-style essay", assessment: "Graded" },
                        { week: 3, objective: "Transactional writing", topics: "Letters, speeches, articles", activities: "Timed writing", assessment: "Teacher feedback" },
                        { week: 4, objective: "Comparative analysis", topics: "Compare two texts/poems", activities: "Compare & contrast essay", assessment: "Assessment" },
                        { week: 5, objective: "Creative response", topics: "Write from a character's POV", activities: "Creative piece", assessment: "Rubric" },
                        { week: 6, objective: "Listening & summarizing", topics: "Audio/text summaries", activities: "Summarise lecture/podcast", assessment: "Checked" },
                        { week: 7, objective: "Full mock paper 1", topics: "Reading paper under timed conditions", activities: "Simulated exam", assessment: "Scored" },
                        { week: 8, objective: "Full mock paper 2", topics: "Writing paper under timed conditions", activities: "Simulated exam", assessment: "Scored" },
                        { week: 9, objective: "Review & target setting", topics: "Go over scripts & errors", activities: "Error analysis", assessment: "Improvement plan" },
                        { week: 10, objective: "Year-end exam", topics: "Combined reading & writing", activities: "Formal exam", assessment: "Final grade" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Algebra revision", topics: "Equations, inequalities, quadratics", activities: "Mixed problem sets", assessment: "Marked" },
                        { week: 2, objective: "Functions & graphs", topics: "Linear, quadratic, simple exponential", activities: "Sketch & interpret graphs", assessment: "Tasks" },
                        { week: 3, objective: "Trigonometry revision", topics: "Right-angle trig & applications", activities: "Word problems", assessment: "Short test" },
                        { week: 4, objective: "Geometry & measures", topics: "Perimeter, area, volume, circle basics", activities: "Problem solving", assessment: "Worksheet" },
                        { week: 5, objective: "Statistics & probability", topics: "Charts, averages, probability trees (intro)", activities: "Data tasks", assessment: "Assessment" },
                        { week: 6, objective: "Mixed word problems", topics: "Multi-step questions", activities: "Group problem-solving", assessment: "Observation" },
                        { week: 7, objective: "Mock math exam 1", topics: "Paper A under timed conditions", activities: "Mark & review", assessment: "Feedback" },
                        { week: 8, objective: "Mock math exam 2", topics: "Paper B under timed conditions", activities: "Mark & review", assessment: "Feedback" },
                        { week: 9, objective: "Error-correction clinic", topics: "Re-teach weak areas", activities: "Targeted practice", assessment: "Improvement" },
                        { week: 10, objective: "Year-end exam", topics: "Full paper", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Biology revision", topics: "Cells, organs, systems", activities: "Mixed recall & diagrams", assessment: "Quiz" },
                        { week: 2, objective: "Chemistry revision", topics: "Atoms, bonding, reactions", activities: "Equation & structure practice", assessment: "Short test" },
                        { week: 3, objective: "Physics revision", topics: "Forces, motion, energy", activities: "Calculation & concept questions", assessment: "Worksheet" },
                        { week: 4, objective: "Earth & environment", topics: "Climate, resources, sustainability", activities: "Case studies", assessment: "Written response" },
                        { week: 5, objective: "Integrated investigations", topics: "Apply multiple strands", activities: "Plan a mini investigation", assessment: "Plan review" },
                        { week: 6, objective: "Practical skills prep", topics: "Measuring, graphing, conclusions", activities: "Mock practical", assessment: "Teacher marking" },
                        { week: 7, objective: "Mock science paper", topics: "Theory exam-style questions", activities: "Timed paper", assessment: "Scored" },
                        { week: 8, objective: "Review and reteach", topics: "Focus on weaker topics", activities: "Q&A clinic", assessment: "Engagement" },
                        { week: 9, objective: "Practice MCQs & structured", topics: "Exam-style question mix", activities: "Practice booklet", assessment: "Checked" },
                        { week: 10, objective: "Year-end Science exam", topics: "All strands", activities: "Summative exam", assessment: "Final grade" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Review major histories", topics: "Key events across terms", activities: "Create personal revision map", assessment: "Check" },
                        { week: 2, objective: "Civics & citizenship", topics: "Active citizenship roles", activities: "Design a campaign idea", assessment: "Idea quality" },
                        { week: 3, objective: "Economics revision", topics: "Systems, trade, development", activities: "Case study analysis", assessment: "Written" },
                        { week: 4, objective: "Geography revision", topics: "Physical + human", activities: "Mixed tasks (maps & data)", assessment: "Task review" },
                        { week: 5, objective: "Current affairs", topics: "Link course to present issues", activities: "News-based assignment", assessment: "Written" },
                        { week: 6, objective: "Decision-making & ethics", topics: "Global dilemmas e.g. climate, war", activities: "Debate", assessment: "Teacher notes" },
                        { week: 7, objective: "Mock exam", topics: "Paper including history & geography", activities: "Timing practice", assessment: "Scored" },
                        { week: 8, objective: "Feedback & fill gaps", topics: "Reteach weak areas", activities: "Targeted exercise", assessment: "Engagement" },
                        { week: 9, objective: "Project or presentation", topics: "Short capstone presentation", activities: "Presentation", assessment: "Rubric" },
                        { week: 10, objective: "Year-end exam", topics: "Formal test", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Programming revision", topics: "Core concepts", activities: "Solve a set of small problems", assessment: "Code check" },
                        { week: 2, objective: "Algorithm design", topics: "Stepwise refinement", activities: "Design algorithms for scenarios", assessment: "Pseudocode" },
                        { week: 3, objective: "Spreadsheets & data", topics: "Pivot tables / charts (if available)", activities: "Create analysis sheet", assessment: "Spreadsheet file" },
                        { week: 4, objective: "Databases (theory)", topics: "Keys, relationships, queries", activities: "Diagram data model", assessment: "Worksheet" },
                        { week: 5, objective: "Networking & security revision", topics: "Threats, protocols", activities: "Concept map", assessment: "Quiz" },
                        { week: 6, objective: "ICT in society", topics: "Impact of technology", activities: "Short essay / poster", assessment: "Assessment" },
                        { week: 7, objective: "Practical project", topics: "Finish a small software or web project", activities: "Work session", assessment: "Progress check" },
                        { week: 8, objective: "Project finalisation", topics: "Test & refine", activities: "User testing / feedback", assessment: "Final version" },
                        { week: 9, objective: "Project presentation", topics: "Explain design & features", activities: "Oral presentation", assessment: "Rubric" },
                        { week: 10, objective: "Year-end ICT exam", topics: "Theory & short practical", activities: "Assessment", assessment: "Final grade" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Portfolio planning", topics: "Decide key pieces", activities: "Select works & gaps", assessment: "Plan" },
                        { week: 2, objective: "Refinement", topics: "Improve older works", activities: "Edit based on teacher feedback", assessment: "Before/after" },
                        { week: 3, objective: "Major project development", topics: "Choice-based (drawing/painting/digital)", activities: "Work sessions", assessment: "Ongoing feedback" },
                        { week: 4, objective: "Technical focus", topics: "Target weakest skill (e.g. hands, perspective)", activities: "Drills & practice", assessment: "Skill improvement" },
                        { week: 5, objective: "Finalising major piece", topics: "Details, finish, mounting", activities: "Work session", assessment: "Rubric" },
                        { week: 6, objective: "Presentation design", topics: "How to display artwork", activities: "Plan layout", assessment: "Plan check" },
                        { week: 7, objective: "Artist statement", topics: "Explain ideas & influences", activities: "Write statement", assessment: "Written task" },
                        { week: 8, objective: "Exhibition preparation", topics: "Arrange displays", activities: "Classroom/gallery setup", assessment: "Participation" },
                        { week: 9, objective: "Art show", topics: "Invite audience (even if internal)", activities: "Guided viewing", assessment: "Presentation" },
                        { week: 10, objective: "Reflection & evaluation", topics: "What I learnt in Art this year", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Set performance goal", topics: "Choose piece or role", activities: "Planning", assessment: "Goal clarity" },
                        { week: 2, objective: "Technical refinement", topics: "Instrument/voice skill", activities: "Targeted practice", assessment: "Teacher feedback" },
                        { week: 3, objective: "Ensemble work", topics: "Blend & timing", activities: "Group rehearsals", assessment: "Observation" },
                        { week: 4, objective: "Acting / stage movement", topics: "Stagecraft", activities: "Blocking & movement practice", assessment: "Performance notes" },
                        { week: 5, objective: "Production planning", topics: "Order, cues, transitions", activities: "Build running order", assessment: "Production plan" },
                        { week: 6, objective: "Technical rehearsal", topics: "With sound & lighting (if available)", activities: "Full run", assessment: "Check list" },
                        { week: 7, objective: "Dress rehearsal", topics: "Full performance run-through", activities: "Complete show", assessment: "Quality" },
                        { week: 8, objective: "Final performance", topics: "Concert / drama evening / in-class show", activities: "Live performance", assessment: "Rubric" },
                        { week: 9, objective: "Recording & review", topics: "Watch/listen and analyse", activities: "Discussion", assessment: "Self-eval" },
                        { week: 10, objective: "Reflection", topics: "Skills gained & next steps", activities: "Written reflection", assessment: "Submission" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Set fitness goals", topics: "Personal targets", activities: "Write fitness goals", assessment: "Goal sheet" },
                        { week: 2, objective: "Cardio conditioning", topics: "Sustained effort", activities: "Circuits or running", assessment: "Timing" },
                        { week: 3, objective: "Strength development", topics: "Full body", activities: "Bodyweight sets", assessment: "Reps/quality" },
                        { week: 4, objective: "Flexibility maintenance", topics: "Stretch routine", activities: "Partner stretches", assessment: "Observation" },
                        { week: 5, objective: "Team tournaments", topics: "Football/basketball/netball", activities: "Competitive games", assessment: "Sportsmanship" },
                        { week: 6, objective: "Individual events", topics: "Athletics, sprints, throws, jumps", activities: "Practice", assessment: "Performance" },
                        { week: 7, objective: "Health revision", topics: "Lifestyle choices, risks", activities: "Short theory review", assessment: "Quiz" },
                        { week: 8, objective: "Final competition", topics: "House/team sports", activities: "Events", assessment: "Participation" },
                        { week: 9, objective: "Personal evaluation", topics: "Compare baseline & now", activities: "Reflection sheet", assessment: "Honesty" },
                        { week: 10, objective: "Year-end PHE report", topics: "Summarise progress", activities: "Teacher + self-eval", assessment: "Report" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Review of personal growth", topics: "Compare self term 1 vs term 3", activities: "Journaling", assessment: "Reflection" },
                        { week: 2, objective: "Exam preparation mindset", topics: "Study plan for final exams", activities: "Timetable making", assessment: "Plan quality" },
                        { week: 3, objective: "Dealing with pressure", topics: "Managing anxiety & expectations", activities: "Role-play & tools", assessment: "Participation" },
                        { week: 4, objective: "Ethical dilemmas", topics: "Cheating, plagiarism, peer pressure", activities: "Case analyses", assessment: "Written answers" },
                        { week: 5, objective: "Future choices", topics: "Course/pathways for upper secondary", activities: "Research + discussion", assessment: "Worksheet" },
                        { week: 6, objective: "Career exploration", topics: "Interests & aptitudes", activities: "Career quiz & research", assessment: "Report" },
                        { week: 7, objective: "Relationships & respect", topics: "Boundaries & mutual respect", activities: "Guided discussion", assessment: "Exit slips" },
                        { week: 8, objective: "Community responsibility", topics: "Service and giving back", activities: "Plan small class initiative", assessment: "Plan" },
                        { week: 9, objective: "Legacy project", topics: "What I leave behind in Grade 10", activities: "Create message/poster/video", assessment: "Product" },
                        { week: 10, objective: "Final review & celebration", topics: "Certificates, affirmations", activities: "Circle time", assessment: "Participation" }
                    ]
                }
            ]
        }
    ]
};
