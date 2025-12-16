export const receptionCurriculumData = {
    grade: "Reception",
    term: "Term 1",
    year: "Age 4-5",
    description: "Reception is the foundation year for early learners aged 4-5, focusing on developing essential literacy, numeracy, social-emotional skills, and physical development through play-based learning.",
    subjects: [
        "Literacy",
        "Numeracy",
        "Science & Discovery",
        "Personal, Social & Emotional Development (PSED)",
        "Creative Art",
        "Gross Motor Skills",
        "Fine Motor Skills",
        "ICT Skills",
        "Music"
    ],
    alignments: [
        { name: "Common Core State Standards (USA)", url: "https://www.corestandards.org/" },
        { name: "UK EYFS Framework", url: "https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2" },
        { name: "Cambridge Early Years Framework", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/early-years/" },
        { name: "OECD Early Childhood Standards", url: "https://www.oecd.org/education/school/earlychildhoodeducationandcare.htm" },
        { name: "ISTE Technology Standards for Students", url: "https://www.iste.org/standards/iste-standards-for-students" }
    ],
    terms: [
        {
            term: "Term 1",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "Literacy",
                    icon: "📚",
                    weeklyPlan: [
                        { week: 1, objective: "Recognise letters A, B, C", topics: "Letters A, B, C; sounds /a/, /b/, /c/", activities: "Sing alphabet song; letter flashcards; sand-tray writing", assessment: "Can identify letters and sounds; materials: flashcards, sand tray" },
                        { week: 2, objective: "Blend CVC words with A, B, C", topics: "Cat, Bat, Cab", activities: "Segment and blend games; picture cards", assessment: "Child can read simple CVC words; materials: picture cards" },
                        { week: 3, objective: "Recognise letters D, E, F", topics: "Letters D, E, F; sounds /d/, /e/, /f/", activities: "Alphabet tracing, matching games", assessment: "Can recognise letters; materials: worksheets, tracing sheets" },
                        { week: 4, objective: "Blend CVC words with D, E, F", topics: "Dog, Fed, Den", activities: "Phonics reading circle, flashcards", assessment: "Can read simple CVC words; materials: flashcards" },
                        { week: 5, objective: "Sight word recognition: I, a, the", topics: "High-frequency sight words", activities: "Word wall; sight word games", assessment: "Can read sight words; materials: word cards" },
                        { week: 6, objective: "Recognise letters G, H, I", topics: "Letters G, H, I; sounds /g/, /h/, /i/", activities: "Letter songs, sand writing", assessment: "Can identify letters; materials: sand tray, flashcards" },
                        { week: 7, objective: "Blend CVC words with G, H, I", topics: "Hit, Git, Hip", activities: "Phonics board games", assessment: "Can read words; materials: game boards" },
                        { week: 8, objective: "Simple sentence formation", topics: "I can... / He/She is...", activities: "Sentence strips, role play", assessment: "Can form short sentences; materials: sentence strips" },
                        { week: 9, objective: "Story listening and retelling", topics: "Short picture stories", activities: "Story circle, sequencing cards", assessment: "Can retell stories; materials: storybooks, sequencing cards" },
                        { week: 10, objective: "Introduce rhyming words", topics: "Cat/hat, dog/log", activities: "Rhyming matching game", assessment: "Can identify rhymes; materials: flashcards, rhyming cards" }
                    ]
                },
                {
                    name: "Numeracy",
                    icon: "🔢",
                    weeklyPlan: [
                        { week: 1, objective: "Count 1-10 reliably", topics: "Numbers 1-10; number recognition", activities: "Counting objects, number songs", assessment: "Can count 1-10; materials: counters, number cards" },
                        { week: 2, objective: "Understand one-to-one correspondence", topics: "Counting objects and matching numbers", activities: "Matching game with objects and numbers", assessment: "Counts objects correctly; materials: counters, cards" },
                        { week: 3, objective: "Recognise and write numbers 1-5", topics: "Writing numbers 1-5", activities: "Sand tray writing, number tracing", assessment: "Writes numbers correctly; materials: sand tray, worksheets" },
                        { week: 4, objective: "Compare quantities", topics: "More/less/equal", activities: "Use objects to compare quantities", assessment: "Can identify more/less; materials: counters" },
                        { week: 5, objective: "Count 6-10", topics: "Numbers 6-10; counting objects", activities: "Counting games, songs", assessment: "Counts 6-10 accurately; materials: counters, flashcards" },
                        { week: 6, objective: "Simple addition within 5", topics: "Adding objects within 5", activities: "Use counters for addition", assessment: "Can add objects; materials: counters" },
                        { week: 7, objective: "Shapes: circle, square, triangle", topics: "Recognise 2D shapes", activities: "Shape hunt, drawing shapes", assessment: "Can identify shapes; materials: shape cards, paper" },
                        { week: 8, objective: "Positional language", topics: "Above, below, next to, behind", activities: "Use toys for positional practice", assessment: "Can use positional words; materials: toys" },
                        { week: 9, objective: "Measure length using non-standard units", topics: "Long/short, big/small", activities: "Compare objects using blocks", assessment: "Can compare lengths; materials: blocks, toys" },
                        { week: 10, objective: "Count to 20", topics: "Numbers 11-20; number recognition", activities: "Counting songs, object counting", assessment: "Counts to 20; materials: counters, number cards" }
                    ]
                },
                {
                    name: "Science & Discovery",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Explore senses: sight", topics: "Using eyes to observe objects", activities: "Look and tell game, picture observation", assessment: "Can identify objects by sight; materials: pictures, objects" },
                        { week: 2, objective: "Explore senses: hearing", topics: "Using ears to listen to sounds", activities: "Sound guessing game", assessment: "Can identify sounds; materials: musical instruments, bells" },
                        { week: 3, objective: "Explore senses: touch", topics: "Texture: rough, smooth", activities: "Touch and feel box", assessment: "Can describe textures; materials: different textured items" },
                        { week: 4, objective: "Explore senses: smell", topics: "Smelling safe items", activities: "Smell jars game", assessment: "Can identify smells; materials: jars, scented items" },
                        { week: 5, objective: "Explore senses: taste", topics: "Safe tasting activities", activities: "Taste different foods", assessment: "Can describe taste; materials: fruits, snacks" },
                        { week: 6, objective: "Observe weather", topics: "Sunny, rainy, windy", activities: "Weather chart", assessment: "Can describe weather; materials: weather chart" },
                        { week: 7, objective: "Explore plants", topics: "Parts of a plant", activities: "Planting seeds", assessment: "Can name parts; materials: seeds, pots" },
                        { week: 8, objective: "Explore animals", topics: "Domestic and wild animals", activities: "Animal matching game", assessment: "Can classify animals; materials: animal cards" },
                        { week: 9, objective: "Introduce floating and sinking", topics: "Objects in water", activities: "Water play experiments", assessment: "Can predict floating/sinking; materials: water tray, objects" },
                        { week: 10, objective: "Review senses", topics: "All five senses", activities: "Sensory stations", assessment: "Can identify senses; materials: sensory items" }
                    ]
                },
                {
                    name: "Personal, Social & Emotional Development (PSED)",
                    icon: "💖",
                    weeklyPlan: [
                        { week: 1, objective: "Build confidence", topics: "Introductions", activities: "Name games", assessment: "Participates" },
                        { week: 2, objective: "Follow routines", topics: "Classroom rules", activities: "Circle time", assessment: "Obeys rules" },
                        { week: 3, objective: "Express feelings", topics: "Moods", activities: "Emotion cards", assessment: "Identifies feelings" },
                        { week: 4, objective: "Show empathy", topics: "Helping", activities: "Support exercises", assessment: "Shows care" },
                        { week: 5, objective: "Use manners", topics: "Polite words", activities: "Role play", assessment: "Uses manners" },
                        { week: 6, objective: "Develop persistence", topics: "Keep trying", activities: "Challenge activities", assessment: "Persists" },
                        { week: 7, objective: "Respect difference", topics: "Cultures", activities: "Family sharing", assessment: "Shows respect" },
                        { week: 8, objective: "Self-help", topics: "Hygiene & dressing", activities: "Practice", assessment: "Performs tasks" },
                        { week: 9, objective: "Cooperation", topics: "Teamwork", activities: "Pair tasks", assessment: "Works in groups" },
                        { week: 10, objective: "Review", topics: "Growth & confidence", activities: "Celebration", assessment: "Reflects positively" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Use basic colours", topics: "Primary", activities: "Finger painting", assessment: "Names colours" },
                        { week: 2, objective: "Mix colours", topics: "Blending", activities: "Paint mixing", assessment: "Creates new colours" },
                        { week: 3, objective: "Use shapes in art", topics: "Geometric", activities: "Shape collage", assessment: "Uses shapes" },
                        { week: 4, objective: "Explore texture", topics: "Rough/smooth", activities: "Rubbings", assessment: "Distinguishes textures" },
                        { week: 5, objective: "Control scissors", topics: "Cutting lines", activities: "Paper cutting", assessment: "Cuts accurately" },
                        { week: 6, objective: "Create patterns", topics: "Repeating", activities: "Pattern stamping", assessment: "Makes patterns" },
                        { week: 7, objective: "Use natural objects", topics: "Nature art", activities: "Leaf collage", assessment: "Uses materials" },
                        { week: 8, objective: "Shape clay", topics: "Molding", activities: "Clay animals", assessment: "Forms shapes" },
                        { week: 9, objective: "Creative expression", topics: "Imagination", activities: "Free drawing", assessment: "Shows originality" },
                        { week: 10, objective: "Share artwork", topics: "Display", activities: "Gallery", assessment: "Presents work" }
                    ]
                },
                {
                    name: "Gross Motor Skills",
                    icon: "🏃",
                    weeklyPlan: [
                        { week: 1, objective: "Balance", topics: "Walking straight", activities: "Walk straight", assessment: "Balanced steps" },
                        { week: 2, objective: "Coordination", topics: "Hopping and jumping", activities: "Hop & jump", assessment: "Rhythm movement" },
                        { week: 3, objective: "Spatial awareness", topics: "Navigating obstacles", activities: "Obstacle navigation", assessment: "Moves safely" },
                        { week: 4, objective: "Stamina", topics: "Sustained movement", activities: "Long walks", assessment: "Sustains" },
                        { week: 5, objective: "Ball control", topics: "Kicking and rolling", activities: "Kick/roll", assessment: "Controls ball" },
                        { week: 6, objective: "Target throwing", topics: "Aiming", activities: "Beanbags", assessment: "Hits target" },
                        { week: 7, objective: "Rhythm", topics: "Moving to beat", activities: "March/clap", assessment: "Move to beat" },
                        { week: 8, objective: "Flexibility", topics: "Stretching", activities: "Stretching/yoga", assessment: "Good posture" },
                        { week: 9, objective: "Strength", topics: "Body strength", activities: "Animal walk", assessment: "Stability" },
                        { week: 10, objective: "Showcase", topics: "Free movement", activities: "Free movement", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Fine Motor Skills",
                    icon: "✋",
                    weeklyPlan: [
                        { week: 1, objective: "Hand strength", topics: "Squeezing", activities: "Dough squeezing", assessment: "Controls" },
                        { week: 2, objective: "Pincer grip", topics: "Gripping small objects", activities: "Bead threading", assessment: "Accurate grip" },
                        { week: 3, objective: "Pencil grip", topics: "Holding pencil", activities: "Drills", assessment: "Writes properly" },
                        { week: 4, objective: "Cutting", topics: "Using scissors", activities: "Scissors", assessment: "Cuts accurately" },
                        { week: 5, objective: "Tracing", topics: "Following lines", activities: "Shapes", assessment: "Follows lines" },
                        { week: 6, objective: "Dexterity", topics: "Fine control", activities: "Peg board", assessment: "Places correctly" },
                        { week: 7, objective: "Two-hand coordination", topics: "Using both hands", activities: "Folding", assessment: "Uses both hands" },
                        { week: 8, objective: "Precision", topics: "Accurate movements", activities: "Dot-to-dot", assessment: "Accurate linking" },
                        { week: 9, objective: "Detail", topics: "Adding detail", activities: "Drawing", assessment: "Adds detail" },
                        { week: 10, objective: "Review", topics: "Demonstrate skills", activities: "Skill stations", assessment: "Fine motor mastery" }
                    ]
                },
                {
                    name: "ICT Skills",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Name devices", topics: "Device recognition", activities: "Picture naming", assessment: "Recognises" },
                        { week: 2, objective: "Mouse use", topics: "Cursor control", activities: "Click & drag", assessment: "Tracks cursor" },
                        { week: 3, objective: "Touch screen", topics: "Touch navigation", activities: "Swipe/tap", assessment: "Navigates" },
                        { week: 4, objective: "Type name", topics: "Keyboard basics", activities: "Keyboard", assessment: "Types correctly" },
                        { week: 5, objective: "Open apps", topics: "App navigation", activities: "Icon use", assessment: "Launches" },
                        { week: 6, objective: "Draw digital art", topics: "Digital creativity", activities: "Paint app", assessment: "Creates" },
                        { week: 7, objective: "Sequence blocks", topics: "Basic coding", activities: "Scratch Jr", assessment: "Orders commands" },
                        { week: 8, objective: "Tech safety", topics: "Online safety", activities: "Password rules", assessment: "Understands" },
                        { week: 9, objective: "Search images", topics: "Supervised search", activities: "Supervised", assessment: "Finds info" },
                        { week: 10, objective: "Review", topics: "Digital skills", activities: "Digital activity", assessment: "Demonstrates" }
                    ]
                },
                {
                    name: "Music",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Beat", topics: "Keeping beat", activities: "Clap", assessment: "Follows beat" },
                        { week: 2, objective: "Tempo", topics: "Fast/slow", activities: "Fast/slow", assessment: "Moves correctly" },
                        { week: 3, objective: "Pitch", topics: "High/low", activities: "High/low", assessment: "Differentiates" },
                        { week: 4, objective: "Volume", topics: "Loud/soft", activities: "Loud/soft", assessment: "Produces contrast" },
                        { week: 5, objective: "Instruments", topics: "Instrument names", activities: "Name & play", assessment: "Identifies" },
                        { week: 6, objective: "Echo rhythm", topics: "Rhythm patterns", activities: "Repeat", assessment: "Matches" },
                        { week: 7, objective: "Sing", topics: "Melody", activities: "Melody", assessment: "Participates" },
                        { week: 8, objective: "Listen", topics: "Cultural music", activities: "Cultural music", assessment: "Responds" },
                        { week: 9, objective: "Create rhythm", topics: "Making patterns", activities: "Make patterns", assessment: "Invents" },
                        { week: 10, objective: "Performance", topics: "Showcase", activities: "Celebration", assessment: "Performs" }
                    ]
                }
            ]
        },
        {
            term: "Term 2",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "Literacy",
                    icon: "📚",
                    weeklyPlan: [
                        { week: 1, objective: "Recognise letters J, K, L", topics: "Letters J, K, L; sounds /j/, /k/, /l/", activities: "Songs, tracing", assessment: "Identifies letters" },
                        { week: 2, objective: "Blend CVC words", topics: "Jet, Kit, Lip", activities: "Sound buttoning", assessment: "Reads CVC words" },
                        { week: 3, objective: "Sight words", topics: "is, to, we", activities: "Bingo", assessment: "Reads sight words" },
                        { week: 4, objective: "Sentence formation", topics: "I am..., We are...", activities: "Build-a-sentence", assessment: "Forms sentences" },
                        { week: 5, objective: "Story comprehension", topics: "Sequence", activities: "Retelling", assessment: "Retells correctly" },
                        { week: 6, objective: "Rhymes", topics: "at/in/ug", activities: "Rhyme match", assessment: "Identifies rhymes" },
                        { week: 7, objective: "Question words", topics: "Who/What", activities: "Ask/answer", assessment: "Uses questions" },
                        { week: 8, objective: "Opposites", topics: "big/small", activities: "Opposites hunt", assessment: "Matches opposites" },
                        { week: 9, objective: "Prediction", topics: "What happens next?", activities: "Picture prediction", assessment: "Predicts logically" },
                        { week: 10, objective: "Revision", topics: "Review letters/sight words", activities: "Reading show", assessment: "Assessment" }
                    ]
                },
                {
                    name: "Numeracy",
                    icon: "🔢",
                    weeklyPlan: [
                        { week: 1, objective: "Count to 30", topics: "20-30", activities: "Counting sticks", assessment: "Counts to 30" },
                        { week: 2, objective: "Compare sets", topics: "more/less/equal", activities: "Count & compare", assessment: "Uses comparative terms" },
                        { week: 3, objective: "Addition", topics: "Add to 10", activities: "Counter addition", assessment: "Adds correctly" },
                        { week: 4, objective: "Subtraction", topics: "Take away to 5", activities: "How many left?", assessment: "Understands subtraction" },
                        { week: 5, objective: "Patterns", topics: "AB, ABB", activities: "Pattern blocks", assessment: "Completes pattern" },
                        { week: 6, objective: "3D shapes", topics: "Cube, sphere", activities: "Shape hunt", assessment: "Names shapes" },
                        { week: 7, objective: "Time vocabulary", topics: "Day/night", activities: "Routine cards", assessment: "Uses time words" },
                        { week: 8, objective: "Measurement", topics: "Non-standard units", activities: "Measure items", assessment: "Measures correctly" },
                        { week: 9, objective: "Ordinal numbers", topics: "1st-5th", activities: "Line-up", assessment: "Uses ordinal nouns" },
                        { week: 10, objective: "Revision", topics: "Counting, shapes", activities: "Stations", assessment: "Assessment" }
                    ]
                },
                {
                    name: "Science & Discovery",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "Plant parts", topics: "root, stem", activities: "Plant dissection", assessment: "Names parts" },
                        { week: 2, objective: "Growth", topics: "seed to plant", activities: "Planting", assessment: "Explains growth" },
                        { week: 3, objective: "Materials", topics: "wood, metal", activities: "Sort & classify", assessment: "Classifies" },
                        { week: 4, objective: "Water states", topics: "solid/liquid", activities: "Ice melting", assessment: "States differences" },
                        { week: 5, objective: "Shadows", topics: "light/dark", activities: "Shadow drawing", assessment: "Explains light blocking" },
                        { week: 6, objective: "Magnets", topics: "attract/repel", activities: "Magnet testing", assessment: "Identifies" },
                        { week: 7, objective: "Insects", topics: "ants, bees", activities: "Observation", assessment: "Names insects" },
                        { week: 8, objective: "Food groups", topics: "healthy/unhealthy", activities: "Sort foods", assessment: "Classifies" },
                        { week: 9, objective: "Life cycles", topics: "frog, chick", activities: "Cycle matching", assessment: "Explains stages" },
                        { week: 10, objective: "Revision", topics: "Review", activities: "Quiz", assessment: "Assessment" }
                    ]
                },
                {
                    name: "Fine Motor Skills",
                    icon: "✋",
                    weeklyPlan: [
                        { week: 1, objective: "Finger strength", topics: "Playdough", activities: "Squeeze & roll", assessment: "Controls dough" },
                        { week: 2, objective: "Pincer grip", topics: "Bead threading", activities: "Pick objects", assessment: "Uses grip" },
                        { week: 3, objective: "Pencil grip", topics: "Tracing", activities: "Pencil drills", assessment: "Holds correctly" },
                        { week: 4, objective: "Scissor use", topics: "Cutting", activities: "Cut shapes", assessment: "Cuts accurately" },
                        { week: 5, objective: "Drawing control", topics: "Tracing forms", activities: "Shape tracing", assessment: "Controlled lines" },
                        { week: 6, objective: "Dexterity", topics: "Pegboard", activities: "Place pegs", assessment: "Uses precision" },
                        { week: 7, objective: "Bilateral coordination", topics: "Folding", activities: "Origami", assessment: "Hands work together" },
                        { week: 8, objective: "Speed & precision", topics: "Dot-to-dot", activities: "Connect dots", assessment: "Smooth linking" },
                        { week: 9, objective: "Artistic detail", topics: "Pattern adding", activities: "Finish designs", assessment: "Adds detail" },
                        { week: 10, objective: "Review", topics: "Motor stations", activities: "Challenge tasks", assessment: "Confidence" }
                    ]
                },
                {
                    name: "ICT Skills",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Name parts", topics: "mouse, keyboard", activities: "Identify devices", assessment: "Matches correctly" },
                        { week: 2, objective: "Mouse control", topics: "Click/drag", activities: "Cursor games", assessment: "Controls cursor" },
                        { week: 3, objective: "Touch screen", topics: "Tap/swipe", activities: "Tablet use", assessment: "Navigates" },
                        { week: 4, objective: "Typing", topics: "Type name", activities: "Keyboard", assessment: "Types letters" },
                        { week: 5, objective: "Open apps", topics: "Find icons", activities: "Launch app", assessment: "Uses apps" },
                        { week: 6, objective: "Drawing", topics: "Digital art", activities: "Paint app", assessment: "Creates images" },
                        { week: 7, objective: "Coding basics", topics: "Sequencing", activities: "Scratch Jr", assessment: "Builds sequence" },
                        { week: 8, objective: "Safety", topics: "Passwords", activities: "Discussion", assessment: "Explains safety" },
                        { week: 9, objective: "Search", topics: "Find images", activities: "Supervised search", assessment: "Locates info" },
                        { week: 10, objective: "Review", topics: "Skill choice", activities: "Free ICT time", assessment: "Demonstrates skills" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm", topics: "Clapping", activities: "Echo rhythm", assessment: "Repeats pattern" },
                        { week: 2, objective: "Pitch", topics: "High/low", activities: "Sound ID", assessment: "Identifies pitch" },
                        { week: 3, objective: "Beat", topics: "Steady beat", activities: "Drums", assessment: "Keeps beat" },
                        { week: 4, objective: "Singing", topics: "Group & solo", activities: "Song practice", assessment: "Participates" },
                        { week: 5, objective: "Movement", topics: "Dance", activities: "Move & music", assessment: "Moves rhythmically" },
                        { week: 6, objective: "Tempo", topics: "Fast/slow", activities: "Motion response", assessment: "Shows tempo" },
                        { week: 7, objective: "Create rhythm", topics: "Beat patterns", activities: "Makes rhythm", assessment: "Invents" },
                        { week: 8, objective: "Volume", topics: "Loud/soft", activities: "Dynamics", assessment: "Demonstrates" },
                        { week: 9, objective: "Cultural music", topics: "World songs", activities: "Listen & learn", assessment: "Learns melodies" },
                        { week: 10, objective: "Showcase", topics: "Performance", activities: "Presentation", assessment: "Shows growth" }
                    ]
                }
            ]
        },
        {
            term: "Term 3",
            weeks: "Weeks 1-10",
            subjects: [
                {
                    name: "Literacy",
                    icon: "📚",
                    weeklyPlan: [
                        { week: 1, objective: "Recognise letters S, T, U", topics: "/s/, /t/, /u/", activities: "Tracing, phonics", assessment: "Identifies letters" },
                        { week: 2, objective: "Blend with new letters", topics: "sun, sit, tub", activities: "Sound blending", assessment: "Reads CVC" },
                        { week: 3, objective: "Recognise letters V, W, X", topics: "/v/, /w/, /ks/", activities: "Sound ID", assessment: "Forms letters" },
                        { week: 4, objective: "Recognise letters Y, Z", topics: "/y/, /z/", activities: "Tracing", assessment: "Writes letters" },
                        { week: 5, objective: "Decode simple sentences", topics: "\"I see a cat\"", activities: "Guided reading", assessment: "Reads short text" },
                        { week: 6, objective: "Introduce punctuation", topics: "period, question mark", activities: "Sentence building", assessment: "Uses correctly" },
                        { week: 7, objective: "Stories with characters", topics: "Who is in the story?", activities: "Character cards", assessment: "Identifies characters" },
                        { week: 8, objective: "Beginning/middle/end", topics: "Story structure", activities: "Sequencing", assessment: "Retells structure" },
                        { week: 9, objective: "Write name independently", topics: "Name writing", activities: "Copying & tracing", assessment: "Writes name" },
                        { week: 10, objective: "Literacy celebration", topics: "Final reading", activities: "Showcase", assessment: "Demonstrates fluency" }
                    ]
                },
                {
                    name: "Numeracy",
                    icon: "🔢",
                    weeklyPlan: [
                        { week: 1, objective: "Count to 50", topics: "number sequence", activities: "Counting exercises", assessment: "Counts correctly" },
                        { week: 2, objective: "Number writing 1-10", topics: "formation", activities: "Tracing numbers", assessment: "Writes numbers" },
                        { week: 3, objective: "Addition to 10", topics: "combine objects", activities: "Counter addition", assessment: "Adds correctly" },
                        { week: 4, objective: "Subtraction to 10", topics: "take away", activities: "\"How many left?\"", assessment: "Subtracts" },
                        { week: 5, objective: "Number bonds", topics: "pairs to 5", activities: "Bond games", assessment: "Shows knowledge" },
                        { week: 6, objective: "Identify money", topics: "coins", activities: "Coin sorting", assessment: "Identifies coins" },
                        { week: 7, objective: "Identify 3D shapes", topics: "cube, cone", activities: "Shape hunt", assessment: "Names shapes" },
                        { week: 8, objective: "Concept of time", topics: "morning/noon/night", activities: "Daily schedule", assessment: "Uses time words" },
                        { week: 9, objective: "Compare length/weight", topics: "longer/heavier", activities: "Measuring objects", assessment: "Understands comparisons" },
                        { week: 10, objective: "Numeracy review", topics: "skills review", activities: "Math stations", assessment: "Full assessment" }
                    ]
                },
                {
                    name: "Science & Discovery",
                    icon: "🔬",
                    weeklyPlan: [
                        { week: 1, objective: "The sun", topics: "light/heat", activities: "Shadow play", assessment: "Explains sunlight" },
                        { week: 2, objective: "Water", topics: "states", activities: "Ice melting", assessment: "Describes change" },
                        { week: 3, objective: "Living vs non-living", topics: "classification", activities: "Sorting cards", assessment: "Classifies" },
                        { week: 4, objective: "Land/sea animals", topics: "habitat", activities: "Sorting", assessment: "Identifies" },
                        { week: 5, objective: "Seasons", topics: "rainy/dry", activities: "Weather chart", assessment: "Uses terms" },
                        { week: 6, objective: "Plants need water", topics: "growth", activities: "Watering seeds", assessment: "Observes growth" },
                        { week: 7, objective: "Magnetism", topics: "attraction", activities: "Magnet play", assessment: "Recognises force" },
                        { week: 8, objective: "Simple machines", topics: "wheel/lever", activities: "Identify tools", assessment: "Identifies examples" },
                        { week: 9, objective: "Recycling", topics: "reduce/reuse", activities: "Sorting waste", assessment: "Sorts properly" },
                        { week: 10, objective: "Science review", topics: "concept recap", activities: "Quiz", assessment: "Demonstrates knowledge" }
                    ]
                },
                {
                    name: "Personal, Social & Emotional Development (PSED)",
                    icon: "💖",
                    weeklyPlan: [
                        { week: 1, objective: "Classroom pride", topics: "responsibilities", activities: "Job chart", assessment: "Takes role seriously" },
                        { week: 2, objective: "Respect property", topics: "caring for objects", activities: "Toy care", assessment: "Handles gently" },
                        { week: 3, objective: "Emotional vocabulary", topics: "express clearly", activities: "Feeling words", assessment: "Uses correctly" },
                        { week: 4, objective: "Conflict resolution", topics: "disagreement", activities: "Role play", assessment: "Solves calmly" },
                        { week: 5, objective: "Gratitude", topics: "appreciation", activities: "Thank-you cards", assessment: "Shows gratitude" },
                        { week: 6, objective: "Community", topics: "helping others", activities: "Helping week", assessment: "Participates" },
                        { week: 7, objective: "Independence", topics: "personal tasks", activities: "Dressing shoes", assessment: "Self-reliant" },
                        { week: 8, objective: "Patience", topics: "waiting turn", activities: "Line practice", assessment: "Waits appropriately" },
                        { week: 9, objective: "Responsibility", topics: "task completion", activities: "Classroom chores", assessment: "Takes responsibility" },
                        { week: 10, objective: "Self-esteem", topics: "achievements", activities: "Celebration", assessment: "Shows pride" }
                    ]
                },
                {
                    name: "Creative Art",
                    icon: "🎨",
                    weeklyPlan: [
                        { week: 1, objective: "Colour review", topics: "colour families", activities: "Colour wheel", assessment: "Identifies colours" },
                        { week: 2, objective: "Landscape art", topics: "scenery", activities: "Outdoor drawing", assessment: "Represents nature" },
                        { week: 3, objective: "Portrait art", topics: "face drawing", activities: "Self-portrait", assessment: "Draws features" },
                        { week: 4, objective: "Shape mosaics", topics: "patterning", activities: "Shape collage", assessment: "Uses shapes" },
                        { week: 5, objective: "Paper art", topics: "folding", activities: "Easy origami", assessment: "Folds accurately" },
                        { week: 6, objective: "Printmaking", topics: "stamping", activities: "Paint stamping", assessment: "Repeats patterns" },
                        { week: 7, objective: "3-D art", topics: "construction", activities: "Build blocks", assessment: "Builds forms" },
                        { week: 8, objective: "Themed art", topics: "seasons", activities: "Weather painting", assessment: "Illustrates theme" },
                        { week: 9, objective: "Imaginative art", topics: "creativity", activities: "Free creation", assessment: "Self-expression" },
                        { week: 10, objective: "Art gallery", topics: "display", activities: "Exhibition", assessment: "Reflects in art" }
                    ]
                },
                {
                    name: "Gross Motor Skills",
                    icon: "🏃",
                    weeklyPlan: [
                        { week: 1, objective: "Speed", topics: "running", activities: "Short races", assessment: "Moves fast" },
                        { week: 2, objective: "Agility", topics: "direction change", activities: "Direction change", assessment: "Quick turns" },
                        { week: 3, objective: "Balance", topics: "beam walking", activities: "Beam walking", assessment: "Keeps balance" },
                        { week: 4, objective: "Jumping", topics: "over objects", activities: "Over objects", assessment: "Controls jump" },
                        { week: 5, objective: "Throwing", topics: "distance", activities: "Distance", assessment: "Throws farther" },
                        { week: 6, objective: "Catching", topics: "ball catching", activities: "Ball catching", assessment: "Catches" },
                        { week: 7, objective: "Coordination", topics: "ball toss & move", activities: "Ball toss & move", assessment: "Synchronises" },
                        { week: 8, objective: "Flexibility", topics: "stretch", activities: "Stretch", assessment: "Stretches well" },
                        { week: 9, objective: "Power", topics: "sprinting", activities: "Sprinting", assessment: "Demonstrates burst energy" },
                        { week: 10, objective: "Free movement", topics: "dance & motion", activities: "Dance & motion", assessment: "Enjoys movement" }
                    ]
                },
                {
                    name: "Fine Motor Skills",
                    icon: "✋",
                    weeklyPlan: [
                        { week: 1, objective: "Control grip", topics: "pencil practice", activities: "Pencil practice", assessment: "Proper grip" },
                        { week: 2, objective: "Shape tracing", topics: "curves & lines", activities: "Curves & lines", assessment: "Follows shapes" },
                        { week: 3, objective: "Drawing detail", topics: "eyes/hands", activities: "Eyes/hands", assessment: "Adds details" },
                        { week: 4, objective: "Cutting", topics: "curved lines", activities: "Curved lines", assessment: "Cuts accurately" },
                        { week: 5, objective: "Hand strengthening", topics: "cloth pegs", activities: "Cloth pegs", assessment: "Pinches strongly" },
                        { week: 6, objective: "Eye-hand accuracy", topics: "tracing path", activities: "Tracing path", assessment: "Stays on path" },
                        { week: 7, objective: "Small object control", topics: "small beads", activities: "Small beads", assessment: "Manipulates" },
                        { week: 8, objective: "Letter writing", topics: "A-Z", activities: "A-Z", assessment: "Writes alphabet" },
                        { week: 9, objective: "Drawing figures", topics: "person, house", activities: "Person, house", assessment: "Draws correctly" },
                        { week: 10, objective: "Fine motor review", topics: "rotations", activities: "Rotations", assessment: "Demonstrates skill" }
                    ]
                },
                {
                    name: "ICT Skills",
                    icon: "💻",
                    weeklyPlan: [
                        { week: 1, objective: "Tech recognition", topics: "Devices", activities: "Identify images", assessment: "Identifies" },
                        { week: 2, objective: "Mouse use", topics: "drag & drop", activities: "Sorting games", assessment: "Controls cursor" },
                        { week: 3, objective: "Keyboard", topics: "letters & space", activities: "Type name", assessment: "Types correctly" },
                        { week: 4, objective: "Opening programs", topics: "Icons", activities: "Open paint app", assessment: "Operates" },
                        { week: 5, objective: "Drawing", topics: "digital art", activities: "Drawing tool", assessment: "Creates" },
                        { week: 6, objective: "Coding patterns", topics: "Sequence", activities: "Scratch Jr", assessment: "Orders" },
                        { week: 7, objective: "Audio", topics: "recording voice", activities: "Speak-record", assessment: "Plays back" },
                        { week: 8, objective: "Responsible use", topics: "sharing info", activities: "Safety story", assessment: "Understands" },
                        { week: 9, objective: "Computer vs tablet", topics: "Recognition", activities: "Device sorting", assessment: "Differentiates" },
                        { week: 10, objective: "Tech review", topics: "free use", activities: "Open choice", assessment: "Demonstrates knowledge" }
                    ]
                },
                {
                    name: "Music & Rhythm",
                    icon: "🎵",
                    weeklyPlan: [
                        { week: 1, objective: "Rhythm patterns", topics: "Repetition", activities: "Clap patterns", assessment: "Follows" },
                        { week: 2, objective: "Fast vs slow", topics: "Tempo", activities: "Move to beat", assessment: "Moves correctly" },
                        { week: 3, objective: "High & low", topics: "Pitch", activities: "Voice exercises", assessment: "Produces pitch" },
                        { week: 4, objective: "Tone quality", topics: "smooth/rough", activities: "Vocal games", assessment: "Distinguishes" },
                        { week: 5, objective: "Percussion", topics: "drums & shakers", activities: "Instrument play", assessment: "Keeps beat" },
                        { week: 6, objective: "Song follow", topics: "Memory", activities: "Sing along", assessment: "Remembers lyrics" },
                        { week: 7, objective: "Create rhythm", topics: "beat-making", activities: "Create pattern", assessment: "Invents" },
                        { week: 8, objective: "Listen & respond", topics: "music types", activities: "Reaction game", assessment: "Responds" },
                        { week: 9, objective: "Movement", topics: "sway & dance", activities: "Free dance", assessment: "Expressive" },
                        { week: 10, objective: "Music celebration", topics: "Performance", activities: "Show", assessment: "Performs confidently" }
                    ]
                }
            ]
        }
    ]
};
