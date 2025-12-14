export const grade12CurriculumData = {
    grade: "Grade 12",
    term: "Term 1",
    year: "Year 12",
    description: "Grade 12 is the culminating year of senior secondary education, focusing on exam preparation, advanced analytical skills, and readiness for higher education or career pathways.",
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
        { name: "UK National Curriculum – Key Stage 4/5", url: "https://www.gov.uk/national-curriculum" },
        { name: "Cambridge IGCSE/A-Level", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/" },
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
                        { week: 1, objective: "Diagnose strengths for exam year", topics: "Baseline comprehension & essay", activities: "Timed diagnostic paper (reading + essay)", assessment: "Marked script with feedback" },
                        { week: 2, objective: "Deepen prose analysis", topics: "Narrator, point of view, character, theme", activities: "Close read novel/short story extract; annotate", assessment: "Paragraph analysing character or theme" },
                        { week: 3, objective: "Analyse drama effectively", topics: "Stage directions, subtext, tension", activities: "Read act/scene from set play; small-group performance", assessment: "Written response on conflict/tension" },
                        { week: 4, objective: "Strengthen thesis & paragraphing", topics: "Thesis statements, PEEL/PEE structure", activities: "Model good/weak paragraphs; rewrite", assessment: "Short analytical essay (2-3 paragraphs)" },
                        { week: 5, objective: "Write full literary essays", topics: "Intro/body/conclusion, cohesion", activities: "Plan & write essay on set text", assessment: "Teacher-marked essay with rubric" },
                        { week: 6, objective: "Interpret poetry at higher level", topics: "Imagery, symbolism, tone, structure", activities: "Annotate 1-2 poems; group discussion", assessment: "Short commentary on one poem" },
                        { week: 7, objective: "Refine grammar & style", topics: "Sentence variety, concision, punctuation", activities: "Edit flawed paragraphs; combine/split sentences", assessment: "Grammar/style quiz" },
                        { week: 8, objective: "Develop creative/prose writing", topics: "Narrative voice, setting, viewpoint", activities: "Write opening + continuation of story", assessment: "Narrative marked for style & control" },
                        { week: 9, objective: "Build speaking & listening skills", topics: "Formal speech presentation", activities: "Prepare 3-5 min speech; practise in pairs", assessment: "Oral presentation graded with rubric" },
                        { week: 10, objective: "Consolidate Term 1 skills", topics: "Mixed reading & writing tasks", activities: "Mini mock exam (short reading + essay)", assessment: "Term 1 grade recorded" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Check prior knowledge", topics: "Indices, surds, factorisation", activities: "Diagnostic problem set", assessment: "Marked baseline test" },
                        { week: 2, objective: "Master quadratic techniques", topics: "Factoring, completing the square, formula", activities: "Solve varied quadratic forms", assessment: "Short quiz" },
                        { week: 3, objective: "Understand quadratic graphs", topics: "Roots, vertex, transformations", activities: "Sketch graphs from equations; use tables", assessment: "Graphing exercise" },
                        { week: 4, objective: "Use function notation fluently", topics: "f(x), domain/range, composite f∘g", activities: "Evaluate f(x), find composite values", assessment: "Worksheet" },
                        { week: 5, objective: "Work with inverse functions", topics: "One-to-one functions, f⁻¹(x)", activities: "Find and verify inverse functions", assessment: "Assignment" },
                        { week: 6, objective: "Apply algebra to modelling", topics: "Word problems, forming equations", activities: "Translate situations to algebra; solve", assessment: "Problem-solving task" },
                        { week: 7, objective: "Handle inequalities confidently", topics: "Linear inequalities, solution sets", activities: "Solve and represent on number line", assessment: "Short test" },
                        { week: 8, objective: "Use simultaneous equations", topics: "Two-variable systems, practical contexts", activities: "Solve algebraically and from word problems", assessment: "Exercise marked" },
                        { week: 9, objective: "Explore sequences & series", topics: "Arithmetic, geometric, nth term", activities: "Find nth term and partial sums", assessment: "Practice sheet" },
                        { week: 10, objective: "Evaluate Term 1 learning", topics: "All topics from weeks 1-9", activities: "End-of-term test (algebra + functions)", assessment: "Test graded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Review scientific skills", topics: "Scientific method, reliability, errors", activities: "Analyse sample experiment; identify flaws", assessment: "Short written critique" },
                        { week: 2, objective: "Understand cell division & genetics basics", topics: "Mitosis, meiosis overview", activities: "Draw and compare processes", assessment: "Quiz" },
                        { week: 3, objective: "Revise inheritance patterns", topics: "Genes, alleles, simple Punnett squares", activities: "Solve monohybrid crosses", assessment: "Worksheet" },
                        { week: 4, objective: "Reinforce atomic structure", topics: "Protons, neutrons, electrons, isotopes", activities: "Draw atoms; identify isotopes", assessment: "Short test" },
                        { week: 5, objective: "Use periodic table patterns", topics: "Groups, periods, metals/non-metals", activities: "Predict properties from position", assessment: "Practice questions" },
                        { week: 6, objective: "Apply motion concepts", topics: "Speed, velocity, acceleration graphs", activities: "Plot and interpret motion graphs", assessment: "Graph-based tasks" },
                        { week: 7, objective: "Understand forces & Newton's laws", topics: "Resultant force, F = ma (basic)", activities: "Draw force diagrams; simple calcs", assessment: "Question set" },
                        { week: 8, objective: "Review energy forms & transfers", topics: "KE, PE, conservation of energy", activities: "Energy chain diagrams", assessment: "Written responses" },
                        { week: 9, objective: "Explore Earth systems", topics: "Layers, rock cycle, plate boundaries", activities: "Diagram + case study (e.g. earthquakes)", assessment: "Homework task" },
                        { week: 10, objective: "Check Term 1 mastery", topics: "Mixed bio/chem/physics", activities: "End-of-term test", assessment: "Test graded" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Use historical sources critically", topics: "Bias, reliability, perspective", activities: "Compare two conflicting sources", assessment: "Source-based paragraph" },
                        { week: 2, objective: "Review key modern events", topics: "Late 19th-20th century turning points", activities: "Create personal timeline & map", assessment: "Timeline submission" },
                        { week: 3, objective: "Explore national/regional history", topics: "A major period in home region/country", activities: "Research in pairs; present findings", assessment: "Short presentation" },
                        { week: 4, objective: "Compare political systems", topics: "Democracy, authoritarianism, dictatorships", activities: "Create comparison chart", assessment: "Worksheet" },
                        { week: 5, objective: "Understand constitutions & rights", topics: "Rule of law, civic rights & duties", activities: "Read sample constitution excerpts", assessment: "Short answers" },
                        { week: 6, objective: "Review physical geography", topics: "Tectonics, rivers, coasts (overview)", activities: "Label diagrams; case study", assessment: "Quiz" },
                        { week: 7, objective: "Study population & migration", topics: "Population pyramids, rural-urban shift", activities: "Interpret graphs & maps", assessment: "Data questions" },
                        { week: 8, objective: "Introduce development concepts", topics: "HDI, GDP, literacy, life expectancy", activities: "Country comparison task", assessment: "Written comparison" },
                        { week: 9, objective: "Introduce global issues", topics: "Climate change, conflict, inequality", activities: "Group discussion; short research", assessment: "Reflection paragraph" },
                        { week: 10, objective: "Assess Term 1 understanding", topics: "History + geography + civics", activities: "Term test (structured & short essay)", assessment: "Marked" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Assess baseline ICT/CS skills", topics: "File mgmt, typing, basic coding", activities: "Small practical tasks", assessment: "Diagnostic record" },
                        { week: 2, objective: "Understand computer logic", topics: "Boolean operators, truth tables", activities: "Construct truth tables", assessment: "Worksheet" },
                        { week: 3, objective: "Review data representation", topics: "Binary/decimal, simple text storage", activities: "Convert numbers, discuss ASCII", assessment: "Short quiz" },
                        { week: 4, objective: "Revise basic programming", topics: "Variables, input/output, sequence", activities: "Solve tiny coding tasks", assessment: "Code check" },
                        { week: 5, objective: "Use selection & iteration", topics: "if/elif/else, for, while", activities: "Write small programs using choice & loops", assessment: "Practical assessment" },
                        { week: 6, objective: "Design algorithms clearly", topics: "Flowcharts & pseudocode", activities: "Design algorithm for a given problem", assessment: "Pseudocode marked" },
                        { week: 7, objective: "Model data with spreadsheets", topics: "Formulas, basic charts", activities: "Create budget or marks sheet", assessment: "File submission" },
                        { week: 8, objective: "Understand networks", topics: "LAN/WAN, IP, internet basics", activities: "Draw and label network diagrams", assessment: "Short test" },
                        { week: 9, objective: "Promote digital citizenship", topics: "Cyber safety, plagiarism, etiquette", activities: "Discuss cases; create class rules", assessment: "Poster or doc" },
                        { week: 10, objective: "Evaluate Term 1 skills", topics: "Programming + theory", activities: "End-of-term test (theory + short code)", assessment: "Graded" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Review portfolio & goals", topics: "Strengths, weaknesses", activities: "Discuss previous works; set art goals", assessment: "Goal sheet" },
                        { week: 2, objective: "Sharpen observational drawing", topics: "Proportion, contour", activities: "Still-life sketching", assessment: "Sketchbook review" },
                        { week: 3, objective: "Improve tone & shading", topics: "Light source, contrast, form", activities: "Tonal studies in pencil/charcoal", assessment: "Teacher feedback" },
                        { week: 4, objective: "Use perspective effectively", topics: "1- & 2-point perspective", activities: "Draw interior or street scene", assessment: "Accuracy check" },
                        { week: 5, objective: "Control colour & mood", topics: "Colour schemes, warm/cool", activities: "Paint colour studies", assessment: "Evaluation" },
                        { week: 6, objective: "Experiment with media", topics: "Pencil, ink, paint, collage, digital", activities: "Mixed-media page", assessment: "Process mark" },
                        { week: 7, objective: "Plan a major piece", topics: "Theme, reference images, thumbnails", activities: "Brainstorm & sketch ideas", assessment: "Concept approved" },
                        { week: 8, objective: "Develop main artwork", topics: "Blocking in composition", activities: "Studio session", assessment: "Work-in-progress feedback" },
                        { week: 9, objective: "Refine details", topics: "Texture, depth, highlights", activities: "Continue major piece", assessment: "Ongoing critique" },
                        { week: 10, objective: "Present & reflect", topics: "Show Term 1 work", activities: "Mini critique; written reflection", assessment: "Reflection graded" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Assess performance level", topics: "Voice/instrument/acting", activities: "Short individual performance", assessment: "Baseline notes" },
                        { week: 2, objective: "Refresh music theory", topics: "Key signatures, scales, chords", activities: "Written & practical drills", assessment: "Theory quiz" },
                        { week: 3, objective: "Build ensemble skills", topics: "Listening, blend, timing", activities: "Small-group song/instrumental", assessment: "Observation" },
                        { week: 4, objective: "Develop solo repertoire", topics: "Choosing appropriate solo", activities: "Practise chosen piece", assessment: "Practice log" },
                        { week: 5, objective: "Sharpen drama basics", topics: "Voice, posture, focus", activities: "Improvisation & short scenes", assessment: "Teacher feedback" },
                        { week: 6, objective: "Explore movement & blocking", topics: "Stage movement & presence", activities: "Block simple scenes", assessment: "Performance notes" },
                        { week: 7, objective: "Plan a small performance", topics: "Choose song/scene as a class", activities: "Plan running order & roles", assessment: "Plan check" },
                        { week: 8, objective: "Rehearse performance", topics: "Refine cues, entries, expression", activities: "Full rehearsals", assessment: "Ongoing assessment" },
                        { week: 9, objective: "Perform to audience", topics: "Class or small public performance", activities: "Live performance", assessment: "Performance rubric" },
                        { week: 10, objective: "Reflect on growth", topics: "Strengths & targets", activities: "Self/peer evaluation", assessment: "Written reflection" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Establish fitness baseline", topics: "Cardio, strength, flexibility", activities: "Fitness tests (run, push-ups, stretch)", assessment: "Record sheet" },
                        { week: 2, objective: "Understand warm-up routines", topics: "Dynamic vs static stretching", activities: "Design & lead warm-ups", assessment: "Technique check" },
                        { week: 3, objective: "Build cardiovascular endurance", topics: "Interval & continuous training", activities: "Jogging, circuits", assessment: "Performance" },
                        { week: 4, objective: "Develop strength safely", topics: "Bodyweight exercises", activities: "Circuit stations", assessment: "Effort & form" },
                        { week: 5, objective: "Practise sport-specific skills", topics: "Passing, dribbling, shooting", activities: "Drills in chosen sport", assessment: "Observation" },
                        { week: 6, objective: "Learn game tactics", topics: "Positions, strategies", activities: "Small-sided games", assessment: "Tactical awareness" },
                        { week: 7, objective: "Explore health knowledge", topics: "Heart health, lifestyle risks", activities: "Short theory session", assessment: "Quiz" },
                        { week: 8, objective: "Improve flexibility & posture", topics: "Core & stretching", activities: "Core stability + stretching routines", assessment: "Teacher notes" },
                        { week: 9, objective: "Apply skills in game play", topics: "Intra-class match", activities: "Team games", assessment: "Participation & fair play" },
                        { week: 10, objective: "Reflect & reset goals", topics: "Compare fitness data", activities: "Personal reflection", assessment: "Reflection" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Self-assess for final year", topics: "Strengths, habits, challenges", activities: "Self-audit questionnaire", assessment: "Completion" },
                        { week: 2, objective: "Set realistic Year 12 goals", topics: "Academic & personal targets", activities: "Create SMART goals", assessment: "Goal sheet" },
                        { week: 3, objective: "Strengthen study habits", topics: "Note-taking, revision cycles", activities: "Practise using actual subject notes", assessment: "Notebook check" },
                        { week: 4, objective: "Make wise decisions", topics: "Consequences, long-term impact", activities: "Discuss realistic scenarios", assessment: "Short written responses" },
                        { week: 5, objective: "Clarify values & integrity", topics: "Cheating, honesty, respect", activities: "Case studies", assessment: "Reflection paragraph" },
                        { week: 6, objective: "Improve assertive communication", topics: "'I' messages, boundaries", activities: "Role-play challenging situations", assessment: "Teacher observation" },
                        { week: 7, objective: "Understand boundaries & consent", topics: "Respect in friendships/relationships", activities: "Guided discussion", assessment: "Exit ticket" },
                        { week: 8, objective: "Manage stress & anxiety", topics: "Coping strategies, support systems", activities: "Breathing/journaling exercises", assessment: "Reflection" },
                        { week: 9, objective: "Practise digital responsibility", topics: "Online image, privacy", activities: "Create 'digital code of conduct'", assessment: "Group product" },
                        { week: 10, objective: "Review Term 1 growth", topics: "Check progress on goals", activities: "Update goals, reflect", assessment: "Written reflection" }
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
                        { week: 1, objective: "Study full literary text", topics: "Novel or play (key sections)", activities: "Close reading & chapter/scene summaries", assessment: "Reading log" },
                        { week: 2, objective: "Analyse character & theme in depth", topics: "Motifs, symbolic moments", activities: "Character/theme charts", assessment: "Short essay" },
                        { week: 3, objective: "Write exam-style literature essays", topics: "Respond to set text question", activities: "Timed essay practice", assessment: "Teacher-marked" },
                        { week: 4, objective: "Compare two poems/texts", topics: "Theme/technique comparison", activities: "Side-by-side annotation", assessment: "Comparative paragraph" },
                        { week: 5, objective: "Develop non-fiction writing", topics: "Opinion, article, speech", activities: "Write persuasive article or speech", assessment: "Graded piece" },
                        { week: 6, objective: "Practise listening & summary", topics: "Talks, podcasts, speeches", activities: "Take notes & summarise", assessment: "Summary marked" },
                        { week: 7, objective: "Refine exam timing", topics: "Structuring under time limits", activities: "Do full reading section under timed conditions", assessment: "Marked script" },
                        { week: 8, objective: "Practise Paper 1-style tasks", topics: "Unseen reading + transactional writing", activities: "Mock Paper 1", assessment: "Feedback" },
                        { week: 9, objective: "Practise Paper 2-style tasks", topics: "Longer discursive/argument essay", activities: "Mock Paper 2", assessment: "Feedback" },
                        { week: 10, objective: "Mid-year exam", topics: "Combination reading & writing", activities: "Formal exam", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Consolidate surds & indices", topics: "Indices laws, rationalising", activities: "Mixed practice", assessment: "Short test" },
                        { week: 2, objective: "Deepen trigonometry in triangles", topics: "Sine rule, cosine rule", activities: "Solve triangle problems", assessment: "Worksheet" },
                        { week: 3, objective: "Use trigonometry in context", topics: "Heights & distances", activities: "Real-world word problems", assessment: "Task" },
                        { week: 4, objective: "Study trig graphs", topics: "Graphs of sin, cos, tan", activities: "Plot graphs, identify key points", assessment: "Graph exercise" },
                        { week: 5, objective: "Solve trig equations (simple)", topics: "Equations like sin x = k", activities: "Solve in given domain", assessment: "Quiz" },
                        { week: 6, objective: "Revise circle geometry", topics: "Angles in circles, tangents (as applicable)", activities: "Apply theorems to diagrams", assessment: "Practice" },
                        { week: 7, objective: "Review coordinate geometry", topics: "Gradients, midpoints, line equations", activities: "Find equations & intersections", assessment: "Worksheet" },
                        { week: 8, objective: "Work with vectors", topics: "Magnitude, direction, simple addition", activities: "Draw and add vectors", assessment: "Short test" },
                        { week: 9, objective: "Use maths in modelling", topics: "Real situations (finance, growth, motion)", activities: "Model & solve problems", assessment: "Assignment" },
                        { week: 10, objective: "Term test", topics: "All Term 2 topics", activities: "Formal exam", assessment: "Graded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Understand homeostasis", topics: "Body regulation examples", activities: "Diagram & explanation", assessment: "Quiz" },
                        { week: 2, objective: "Study nervous & endocrine systems", topics: "Nerves, hormones, responses", activities: "Compare systems table", assessment: "Worksheet" },
                        { week: 3, objective: "Revise microorganisms & disease", topics: "Pathogens, transmission, immunity basics", activities: "Case study analysis", assessment: "Short written" },
                        { week: 4, objective: "Explore bonding & structure deeper", topics: "Ionic, covalent, metallic (revision)", activities: "Model & property links", assessment: "Short test" },
                        { week: 5, objective: "Use moles conceptually", topics: "Simple mole calculations", activities: "Convert moles, mass, particles", assessment: "Practice problems" },
                        { week: 6, objective: "Investigate rates of reaction", topics: "Temperature, concentration, catalysts", activities: "Observation of reaction demos", assessment: "Graph questions" },
                        { week: 7, objective: "Revise electricity", topics: "Series/parallel, V, I, R relationships", activities: "Build/interpret circuits", assessment: "Practical sheet" },
                        { week: 8, objective: "Apply power & energy", topics: "Household electricity, cost", activities: "Bill-style calculations", assessment: "Worksheet" },
                        { week: 9, objective: "Discuss environmental issues", topics: "Pollution, greenhouse effect", activities: "Research mini-project", assessment: "Presentation or poster" },
                        { week: 10, objective: "Term test", topics: "Integrated topics", activities: "Written exam", assessment: "Graded" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Explore industrialisation", topics: "Causes & impact", activities: "Text + source analysis", assessment: "Short essay" },
                        { week: 2, objective: "Understand imperialism & resistance", topics: "Colonial policies, resistance movements", activities: "Group research & share", assessment: "Poster" },
                        { week: 3, objective: "Study world wars", topics: "WWI/WWII causes & consequences", activities: "Timeline & map work", assessment: "Worksheet" },
                        { week: 4, objective: "Examine international institutions", topics: "League of Nations, UN", activities: "Compare aims & success", assessment: "Short answers" },
                        { week: 5, objective: "Deepen economic understanding", topics: "Inflation, taxation, unemployment", activities: "Scenario questions", assessment: "Data questions" },
                        { week: 6, objective: "Analyse globalisation", topics: "Trade, culture, media flows", activities: "Pros & cons debate", assessment: "Reflection paragraph" },
                        { week: 7, objective: "Consider development & aid", topics: "Aid types, dependency", activities: "Case study", assessment: "Written" },
                        { week: 8, objective: "Connect environment & politics", topics: "Climate accords, resource conflicts", activities: "Research one agreement/case", assessment: "Summary page" },
                        { week: 9, objective: "Revise term content", topics: "Key themes & facts", activities: "Quiz games / revision cards", assessment: "Participation" },
                        { week: 10, objective: "Mid-year exam", topics: "Essays + structured questions", activities: "Graded", assessment: "Recorded" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Extend programming skills", topics: "Functions with parameters", activities: "Refactor previous programs", assessment: "Code review" },
                        { week: 2, objective: "Use collections effectively", topics: "Lists/arrays, dictionaries", activities: "Process sets of data", assessment: "Exercises" },
                        { week: 3, objective: "Explore search & sort (concept)", topics: "Linear search, simple sort", activities: "Write pseudocode & simple code", assessment: "Task" },
                        { week: 4, objective: "Handle files (if environment allows)", topics: "Reading/writing text files", activities: "Create log/small file tool", assessment: "Practical" },
                        { week: 5, objective: "Understand database design", topics: "Tables, keys, relationships", activities: "Draw simple ER diagram", assessment: "Worksheet" },
                        { week: 6, objective: "Model scenarios in spreadsheets", topics: "LOOKUP, IF, simple modelling", activities: "Scenario spreadsheet", assessment: "File submission" },
                        { week: 7, objective: "Know system software basics", topics: "OS responsibilities, utilities", activities: "Short notes & diagrams", assessment: "Quiz" },
                        { week: 8, objective: "Revise networks & security", topics: "Threats, mitigation, protocols", activities: "Case-study discussion", assessment: "Written" },
                        { week: 9, objective: "Prepare for project work", topics: "Plan end-of-year project idea", activities: "Project proposal", assessment: "Proposal graded" },
                        { week: 10, objective: "Term assessment", topics: "Programming + theory", activities: "Test / mini-project mark", assessment: "Graded" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Develop personal style", topics: "Identify influences", activities: "Research 2-3 artists", assessment: "Research sheet" },
                        { week: 2, objective: "Improve anatomy & movement", topics: "Hands, facial features, posture", activities: "Focused sketch sessions", assessment: "Sketchbook review" },
                        { week: 3, objective: "Refine shading & texture", topics: "Hair, fabric, skin, metal", activities: "Realistic studies", assessment: "Technique feedback" },
                        { week: 4, objective: "Plan thematic project", topics: "Social issue, identity, environment etc.", activities: "Theme mind-map & thumbnails", assessment: "Proposal" },
                        { week: 5, objective: "Design strong composition", topics: "Focal point, balance", activities: "Rough layout for final piece", assessment: "Layout check" },
                        { week: 6, objective: "Develop main project", topics: "Mid-size or large piece", activities: "Studio time", assessment: "Process mark" },
                        { week: 7, objective: "Experiment media within project", topics: "Add mixed media/digital elements", activities: "Experiment page", assessment: "Creativity" },
                        { week: 8, objective: "Refine and correct", topics: "Fix proportions, adjust colours", activities: "Studio time", assessment: "Teacher critique" },
                        { week: 9, objective: "Prepare final presentation", topics: "Mounting, labels", activities: "Finish piece & presentation", assessment: "Rubric" },
                        { week: 10, objective: "Reflect on term", topics: "What improved / next focus", activities: "Written reflection", assessment: "Graded reflection" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Choose assessed repertoire", topics: "Solo & group pieces", activities: "Discuss and finalise choices", assessment: "Repertoire list" },
                        { week: 2, objective: "Build technical skills", topics: "Scales, arpeggios, breathing", activities: "Daily warm-up routine", assessment: "Technique check" },
                        { week: 3, objective: "Improve sight-reading", topics: "Rhythm & pitch reading", activities: "Short sight-reading drills", assessment: "Marked" },
                        { week: 4, objective: "Compose short piece", topics: "Melody and chord sequence", activities: "Write, notate or record", assessment: "Composition rubric" },
                        { week: 5, objective: "Analyse lyrics & scripts", topics: "Subtext, meaning, delivery", activities: "Read/analyse scene or song lyrics", assessment: "Written response" },
                        { week: 6, objective: "Develop ensemble performance", topics: "Coordination & harmony", activities: "Group rehearsals", assessment: "Ongoing observation" },
                        { week: 7, objective: "Polish acting/performance", topics: "Characterisation, diction", activities: "Drama exercises", assessment: "Performance notes" },
                        { week: 8, objective: "Run full performance", topics: "Complete programme run-through", activities: "Dress/tech rehearsal", assessment: "Readiness check" },
                        { week: 9, objective: "Perform for audience", topics: "Class/school performance", activities: "Live performance", assessment: "Performance grade" },
                        { week: 10, objective: "Reflect for improvement", topics: "Analyse recordings/feedback", activities: "Write reflection", assessment: "Reflection task" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Update fitness levels", topics: "Retest cardio & strength", activities: "Repeat core fitness tests", assessment: "Comparison" },
                        { week: 2, objective: "Enhance strength & power", topics: "Plyometrics & strength work", activities: "Circuits (jumps, sprints)", assessment: "Effort & form" },
                        { week: 3, objective: "Boost agility", topics: "Direction changes, speed", activities: "Ladder & cone drills", assessment: "Observation" },
                        { week: 4, objective: "Develop advanced sport skills", topics: "Chosen team/individual sport", activities: "Focused drills", assessment: "Skill rating" },
                        { week: 5, objective: "Apply tactics in play", topics: "Strategies, positions", activities: "Full games with coaching", assessment: "Tactical awareness" },
                        { week: 6, objective: "Deepen health understanding", topics: "Substance abuse, lifestyle risks", activities: "Short theory input + Q&A", assessment: "Written task" },
                        { week: 7, objective: "Learn basic first aid", topics: "Sprains, cuts, fainting", activities: "Role-play responses", assessment: "Practical check" },
                        { week: 8, objective: "Practise athletics events", topics: "Sprints, middle-distance, throws, jumps", activities: "Technique sessions", assessment: "Performance" },
                        { week: 9, objective: "Hold mini sports festival", topics: "House/team competition", activities: "Tournaments", assessment: "Sportsmanship grade" },
                        { week: 10, objective: "Reflect on Term 2", topics: "Fitness & skill progress", activities: "Reflection sheet", assessment: "Completion" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Improve time management", topics: "Balancing workload", activities: "Redesign weekly schedule", assessment: "Schedule check" },
                        { week: 2, objective: "Strengthen independent learning", topics: "Research & self-study", activities: "Mini independent task", assessment: "Product" },
                        { week: 3, objective: "Practise ethical reasoning", topics: "Values in dilemmas", activities: "Debate case scenarios", assessment: "Participation" },
                        { week: 4, objective: "Develop money skills", topics: "Saving, borrowing, interest", activities: "Budget & simple interest task", assessment: "Worksheet" },
                        { week: 5, objective: "Explore careers realistically", topics: "Programme requirements, skills", activities: "Research 2 careers", assessment: "Short report" },
                        { week: 6, objective: "Use professional communication", topics: "Formal email, basic CV", activities: "Draft an email or mini-CV", assessment: "Writing feedback" },
                        { week: 7, objective: "Improve relationship skills", topics: "Conflict, respect, empathy", activities: "Role-play difficult conversations", assessment: "Teacher notes" },
                        { week: 8, objective: "Handle conflict fairly", topics: "Negotiation & mediation", activities: "Group problem-solving", assessment: "Reflection" },
                        { week: 9, objective: "Check goal progress", topics: "Review Term 1/2 goals", activities: "Update track sheet", assessment: "Updated goals" },
                        { week: 10, objective: "Reflect on life direction", topics: "What kind of adult do I want to be?", activities: "Guided journaling", assessment: "Reflection graded" }
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
                        { week: 1, objective: "Review key texts thoroughly", topics: "Set novel/play & poems", activities: "Create summary charts & key-quote banks", assessment: "Checked notes" },
                        { week: 2, objective: "Sharpen comprehension skills", topics: "Unseen fiction & non-fiction", activities: "Timed short passages", assessment: "Marked" },
                        { week: 3, objective: "Practise analytical paragraphs", topics: "Zoom-in language analysis", activities: "Write multiple short responses", assessment: "Feedback" },
                        { week: 4, objective: "Polish full essays", topics: "Literature & discursive", activities: "Timed exam-style essays", assessment: "Teacher marking" },
                        { week: 5, objective: "Perfect transactional writing", topics: "Letters, speeches, articles", activities: "Exam-style tasks", assessment: "Graded" },
                        { week: 6, objective: "Focus on individual weaknesses", topics: "Targeted skills (per student)", activities: "Personal practice sets", assessment: "Checked work" },
                        { week: 7, objective: "Sit full mock Paper 1", topics: "Reading + writing", activities: "Timed mock; marked", assessment: "Score + comments" },
                        { week: 8, objective: "Sit full mock Paper 2", topics: "Literature/discursive", activities: "Timed mock; marked", assessment: "Score + comments" },
                        { week: 9, objective: "Final review & correction", topics: "Address remaining gaps", activities: "Targeted revision tasks", assessment: "Completion" },
                        { week: 10, objective: "Final English exam", topics: "Full formal paper(s)", activities: "Exam condition", assessment: "Final grade" }
                    ]
                },
                {
                    name: "Mathematics",
                    icon: "🧮",
                    weeklyPlan: [
                        { week: 1, objective: "Audit Maths strengths", topics: "All strands overview", activities: "Diagnostic mixed paper", assessment: "Planning" },
                        { week: 2, objective: "Review core algebra", topics: "Equations, quadratics, functions", activities: "Mixed drills", assessment: "Marked" },
                        { week: 3, objective: "Review trig & geometry", topics: "Trig rules, circle/coordinate geometry", activities: "Problem sets", assessment: "Exercise check" },
                        { week: 4, objective: "Review statistics & probability", topics: "Charts, averages, probability", activities: "Mixed questions", assessment: "Quiz" },
                        { week: 5, objective: "Tackle multi-step problems", topics: "Worded & modelling problems", activities: "Group problem-solving", assessment: "Teacher notes" },
                        { week: 6, objective: "Sit Mock 1", topics: "Full exam paper", activities: "Timing practice", assessment: "Score + feedback" },
                        { week: 7, objective: "Target weak areas", topics: "Based on Mock 1 errors", activities: "Personalised tasks", assessment: "Improvement evidence" },
                        { week: 8, objective: "Sit Mock 2", topics: "Second full paper", activities: "Exam practice", assessment: "Score + feedback" },
                        { week: 9, objective: "Final revision", topics: "Formulae, methods, exam tricks", activities: "Quick-fire practice", assessment: "Participation" },
                        { week: 10, objective: "Final Maths exam", topics: "Full formal paper", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Integrated Science",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Recap key biology", topics: "Cells, systems, genetics, disease", activities: "Revision questions", assessment: "Quiz" },
                        { week: 2, objective: "Recap key chemistry", topics: "Structure, bonding, moles, reactions", activities: "Revision worksheets", assessment: "Short test" },
                        { week: 3, objective: "Recap key physics", topics: "Motion, forces, energy, electricity", activities: "Concept & calculation practice", assessment: "Worksheet" },
                        { week: 4, objective: "Revise Earth & environment", topics: "Climate, cycles, human impact", activities: "Case reviews", assessment: "Short answer" },
                        { week: 5, objective: "Practise practical skills", topics: "Graphs, variables, conclusions", activities: "Past practical-style questions", assessment: "Marked" },
                        { week: 6, objective: "Sit Mock Science Paper 1", topics: "Paper covering all strands", activities: "Timed exam", assessment: "Score" },
                        { week: 7, objective: "Review & reteach weak areas", topics: "Based on Mock 1 results", activities: "Targeted exercises", assessment: "Evidence" },
                        { week: 8, objective: "Sit Mock Science Paper 2", topics: "Second paper / alternative focus", activities: "Timed exam", assessment: "Score" },
                        { week: 9, objective: "Final revision", topics: "Quick-fire questions, flashcards", activities: "Class quiz, games", assessment: "Participation" },
                        { week: 10, objective: "Final Science exam", topics: "Summative test", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Social Studies / History & Geography",
                    icon: "🌍",
                    weeklyPlan: [
                        { week: 1, objective: "Summarise major history topics", topics: "Key wars, reforms, independence", activities: "Create personal summary sheets", assessment: "Check" },
                        { week: 2, objective: "Review geography content", topics: "Physical & human units", activities: "Map/data problems", assessment: "Exercise" },
                        { week: 3, objective: "Reinforce civics & economics", topics: "Systems, rights, trade, development", activities: "Short-answer revision", assessment: "Quiz" },
                        { week: 4, objective: "Connect to current events", topics: "Link course to today's issues", activities: "News-based tasks", assessment: "Written" },
                        { week: 5, objective: "Plan exam answers", topics: "Essay structure & timing", activities: "Write outlines for likely questions", assessment: "Outline review" },
                        { week: 6, objective: "Mock Social Studies exam", topics: "Full paper", activities: "Timed", assessment: "Score" },
                        { week: 7, objective: "Review scripts", topics: "Common strengths/weaknesses", activities: "Whole-class feedback", assessment: "Notes" },
                        { week: 8, objective: "Targeted revision", topics: "Focus by student need", activities: "Small-group clinics", assessment: "Engagement" },
                        { week: 9, objective: "Last Q&A review", topics: "Clarify uncertainties", activities: "Open Q&A", assessment: "Participation" },
                        { week: 10, objective: "Final Social Studies exam", topics: "Formal test", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "ICT / Computing",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Finalise project plan", topics: "Scope, features, tools", activities: "Review existing plan", assessment: "Approved plan" },
                        { week: 2, objective: "Complete coding/implementation", topics: "Core functionality", activities: "Lab/project work", assessment: "Progress check" },
                        { week: 3, objective: "Test systematically", topics: "Debugging & test cases", activities: "Create test table & run tests", assessment: "Testing log" },
                        { week: 4, objective: "Polish UI & usability", topics: "User experience", activities: "Improve layout/interactions", assessment: "Teacher review" },
                        { week: 5, objective: "Write documentation", topics: "User guide & technical overview", activities: "Produce docs", assessment: "Doc graded" },
                        { week: 6, objective: "Prepare presentation", topics: "Explain purpose, design, challenges", activities: "Create slides/demo plan", assessment: "Plan check" },
                        { week: 7, objective: "Present project", topics: "Live demo & talk", activities: "Presentation", assessment: "Rubric" },
                        { week: 8, objective: "Review CS theory", topics: "Data, networks, security, algorithms", activities: "Revision tasks", assessment: "Short test" },
                        { week: 9, objective: "Final theory revision", topics: "Past-paper style questions", activities: "Practice paper", assessment: "Marked" },
                        { week: 10, objective: "Final ICT/CS exam", topics: "Theory exam", activities: "Final grade", assessment: "Recorded" }
                    ]
                },
                {
                    name: "Creative Art & Design",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Audit art portfolio", topics: "Select best pieces", activities: "Portfolio planning sheet", assessment: "Checked" },
                        { week: 2, objective: "Identify gaps", topics: "Need variety (media, themes)", activities: "Plan 1-2 final works", assessment: "Plan" },
                        { week: 3, objective: "Develop final works", topics: "High-quality pieces", activities: "Studio sessions", assessment: "Ongoing critique" },
                        { week: 4, objective: "Refine technical aspects", topics: "Edges, colours, proportions", activities: "Targeted corrections", assessment: "Process mark" },
                        { week: 5, objective: "Plan exhibition layout", topics: "Flow, grouping", activities: "Mock layout on paper", assessment: "Layout plan" },
                        { week: 6, objective: "Write artist statement", topics: "Concept, influences, process", activities: "Draft & refine statement", assessment: "Text graded" },
                        { week: 7, objective: "Set up exhibition", topics: "Mount, arrange, label", activities: "Class gallery setup", assessment: "Participation" },
                        { week: 8, objective: "Host viewing", topics: "Invite peers/teachers/parents", activities: "Guided walkthrough", assessment: "Presentation" },
                        { week: 9, objective: "Receive & reflect on feedback", topics: "What viewers saw/liked", activities: "Reflection writing", assessment: "Reflection" },
                        { week: 10, objective: "Finalize grade & closure", topics: "Portfolio handed in", activities: "Teacher evaluation", assessment: "Art grade" }
                    ]
                },
                {
                    name: "Music & Performing Arts",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Set final performance goal", topics: "Solo + ensemble aim", activities: "Performance plan", assessment: "Approved" },
                        { week: 2, objective: "Drill technical weaknesses", topics: "Target difficult passages/skills", activities: "Focused practice", assessment: "Teacher notes" },
                        { week: 3, objective: "Polish ensemble coordination", topics: "Timing, dynamics, balance", activities: "Group rehearsals", assessment: "Observation" },
                        { week: 4, objective: "Deepen interpretation", topics: "Emotion, storytelling in music/drama", activities: "Coaching with teacher", assessment: "Performance check" },
                        { week: 5, objective: "Plan final show", topics: "Order of acts, transitions, roles", activities: "Production meeting", assessment: "Plan doc" },
                        { week: 6, objective: "Run tech rehearsal", topics: "Lights/sound (if available)", activities: "Full run-through", assessment: "Tech checklist" },
                        { week: 7, objective: "Run dress rehearsal", topics: "Complete performance with costumes", activities: "Final practice", assessment: "Readiness assessment" },
                        { week: 8, objective: "Give final performance", topics: "Concert / drama showcase", activities: "Live show", assessment: "Performance rubric" },
                        { week: 9, objective: "Watch/listen back", topics: "Self & peer critique", activities: "View recording; discuss", assessment: "Critique notes" },
                        { week: 10, objective: "Reflect & celebrate", topics: "What I learned; next artistic goals", activities: "Written reflection", assessment: "Completion" }
                    ]
                },
                {
                    name: "Physical & Health Education",
                    icon: "🏃‍♂️",
                    weeklyPlan: [
                        { week: 1, objective: "Set final physical goals", topics: "Strength, cardio, skills", activities: "Goal sheet", assessment: "Approved" },
                        { week: 2, objective: "Condition for endurance", topics: "Sustained effort", activities: "Planned runs/circuits", assessment: "Performance" },
                        { week: 3, objective: "Build final strength level", topics: "Full-body routines", activities: "Circuit/partner training", assessment: "Effort & form" },
                        { week: 4, objective: "Refine chosen sports skills", topics: "Focus on 1-2 main sports", activities: "Advanced drills", assessment: "Skill rating" },
                        { week: 5, objective: "Participate in tournaments", topics: "Inter-house or class tournaments", activities: "Matches/events", assessment: "Sportsmanship" },
                        { week: 6, objective: "Revise health concepts", topics: "Nutrition, rest, substance risks", activities: "Short theory review", assessment: "Quiz" },
                        { week: 7, objective: "Focus on wellbeing", topics: "Mental health in sport & study", activities: "Discussion & reflection", assessment: "Written" },
                        { week: 8, objective: "Retest fitness metrics", topics: "Repeat key tests from start of year", activities: "Compare results", assessment: "Improvement" },
                        { week: 9, objective: "Plan lifelong activity", topics: "How to stay active after school", activities: "Personal fitness plan", assessment: "Plan graded" },
                        { week: 10, objective: "Close & celebrate", topics: "PHE achievements, certificates", activities: "Sharing session", assessment: "Participation" }
                    ]
                },
                {
                    name: "Life Skills / Citizenship & Ethics",
                    icon: "🧠",
                    weeklyPlan: [
                        { week: 1, objective: "Reflect on school journey", topics: "Who have I become?", activities: "Guided journaling", assessment: "Depth" },
                        { week: 2, objective: "Clarify post-school paths", topics: "University, vocational, work", activities: "Research chosen path", assessment: "Short report" },
                        { week: 3, objective: "Prepare application documents", topics: "CV, basic cover letter", activities: "Draft CV & letter", assessment: "Graded draft" },
                        { week: 4, objective: "Practise interview skills", topics: "Common questions, body language", activities: "Mock interviews", assessment: "Rubric" },
                        { week: 5, objective: "Learn basic adult finances", topics: "Budget, rent, savings, debt basics", activities: "Sample budget planning", assessment: "Worksheet" },
                        { week: 6, objective: "Plan healthy young adulthood", topics: "Sleep, community, habits", activities: "Lifestyle planner", assessment: "Plan check" },
                        { week: 7, objective: "Understand citizenship & service", topics: "Voting, volunteering, leadership", activities: "Plan a simple service idea", assessment: "Idea quality" },
                        { week: 8, objective: "Protect self in adult life", topics: "Personal safety, consent, digital risks", activities: "Scenario discussion", assessment: "Reflection" },
                        { week: 9, objective: "Write a personal mission statement", topics: "Values, goals, contribution", activities: "Draft & share mission statement", assessment: "Text graded" },
                        { week: 10, objective: "Closure & send-off", topics: "Affirmations, advice, gratitude", activities: "Circle of appreciation", assessment: "Participation" }
                    ]
                }
            ]
        }
    ]
};
