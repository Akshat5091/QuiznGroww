const questions = [
  // =================================================================
  // Culture (45 Questions with Difficulty)
  // =================================================================

  // --- 15 Easy Questions ---
  { topic: "Culture", difficulty: "Easy", questionText: "The festival of 'Holi' is often referred to as the festival of what?", options: ["Lights", "Love", "Colors", "Harvest"], correctAnswer: "Colors" },
  { topic: "Culture", difficulty: "Easy", questionText: "Which famous monument in Agra was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal?", options: ["Qutub Minar", "Hawa Mahal", "Taj Mahal", "Red Fort"], correctAnswer: "Taj Mahal" },
  { topic: "Culture", difficulty: "Easy", questionText: "The 'Garba' dance is traditionally performed during which festival?", options: ["Diwali", "Holi", "Navaratri", "Eid"], correctAnswer: "Navaratri" },
  { topic: "Culture", difficulty: "Easy", questionText: "What is the name of the traditional Indian garment that is a long piece of unstitched cloth draped around the body?", options: ["Kurta", "Sherwani", "Sari", "Lehenga"], correctAnswer: "Sari" },
  { topic: "Culture", difficulty: "Easy", questionText: "Which Indian city is famous for its delicious 'Vada Pav' street food?", options: ["Delhi", "Kolkata", "Chennai", "Mumbai"], correctAnswer: "Mumbai" },
  { topic: "Culture", difficulty: "Easy", questionText: "Who is commonly referred to as the 'Father of the Nation' in India?", options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "B. R. Ambedkar"], correctAnswer: "Mahatma Gandhi" },
  { topic: "Culture", difficulty: "Easy", questionText: "What is the main language spoken in the state of West Bengal?", options: ["Hindi", "Bengali", "Marathi", "Telugu"], correctAnswer: "Bengali" },
  { topic: "Culture", difficulty: "Easy", questionText: "Which of these is a world-famous Indian dish made with chicken marinated in yogurt and spices and cooked in a tandoor?", options: ["Butter Chicken", "Tandoori Chicken", "Chicken Korma", "Chicken Tikka Masala"], correctAnswer: "Tandoori Chicken" },
  { topic: "Culture", difficulty: "Easy", questionText: "The 'Diwali' festival is also known as the festival of what?", options: ["Colors", "Brothers and Sisters", "Lights", "Harvest"], correctAnswer: "Lights" },
  { topic: "Culture", difficulty: "Easy", questionText: "Which river is considered the holiest in Hinduism?", options: ["Yamuna", "Brahmaputra", "Godavari", "Ganges"], correctAnswer: "Ganges" },
  { topic: "Culture", difficulty: "Easy", questionText: "What is the capital city of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"], correctAnswer: "New Delhi" },
  { topic: "Culture", difficulty: "Easy", questionText: "Bollywood is the informal term for the Hindi-language film industry based in which city?", options: ["Chennai", "Hyderabad", "Mumbai", "Pune"], correctAnswer: "Mumbai" },
  { topic: "Culture", difficulty: "Easy", questionText: "Which stringed instrument is famously associated with Indian classical music?", options: ["Guitar", "Violin", "Sitar", "Piano"], correctAnswer: "Sitar" },
  { topic: "Culture", difficulty: "Easy", questionText: "The 'Lotus Temple', known for its flowerlike shape, is located in which city?", options: ["Jaipur", "Agra", "Delhi", "Varanasi"], correctAnswer: "Delhi" },
  { topic: "Culture", difficulty: "Easy", questionText: "Which Indian festival celebrates the bond between a brother and a sister?", options: ["Bhai Dooj", "Raksha Bandhan", "Karva Chauth", "Both A & B"], correctAnswer: "Both A & B" },

  // --- 15 Medium Questions ---
  { topic: "Culture", difficulty: "Medium", questionText: "Which of these is a famous classical dance form originating from Kerala?", options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"], correctAnswer: "Kathakali" },
  { topic: "Culture", difficulty: "Medium", questionText: "The ancient university of Nalanda was primarily a center for which religion's learning?", options: ["Hinduism", "Jainism", "Sikhism", "Buddhism"], correctAnswer: "Buddhism" },
  { topic: "Culture", difficulty: "Medium", questionText: "The 'Warli' art form, known for its simple geometric shapes, belongs to which Indian state?", options: ["Rajasthan", "Maharashtra", "Gujarat", "Madhya Pradesh"], correctAnswer: "Maharashtra" },
  { topic: "Culture", difficulty: "Medium", questionText: "Which Indian festival is dedicated to the worship of the sun god, Surya, and is predominantly celebrated in Bihar and Eastern UP?", options: ["Diwali", "Holi", "Chhath Puja", "Navaratri"], correctAnswer: "Chhath Puja" },
  { topic: "Culture", difficulty: "Medium", questionText: "What is the traditional garment worn by women in Assam?", options: ["Sari", "Ghagra Choli", "Mekhela Chador", "Salwar Kameez"], correctAnswer: "Mekhela Chador" },
  { topic: "Culture", difficulty: "Medium", questionText: "The 'Sitar', a stringed instrument, was popularized in the Western world largely by which Indian musician?", options: ["Zakir Hussain", "Ravi Shankar", "Hariprasad Chaurasia", "Amjad Ali Khan"], correctAnswer: "Ravi Shankar" },
  { topic: "Culture", difficulty: "Medium", questionText: "Which city is famous for its 'Blue Pottery'?", options: ["Jaipur", "Agra", "Delhi", "Udaipur"], correctAnswer: "Jaipur" },
  { topic: "Culture", difficulty: "Medium", questionText: "The 'Konark Sun Temple' is a famous monument located in which state?", options: ["Tamil Nadu", "Kerala", "Odisha", "West Bengal"], correctAnswer: "Odisha" },
  { topic: "Culture", difficulty: "Medium", questionText: "What is the name of the holy book of Sikhism?", options: ["Guru Granth Sahib", "Vedas", "Quran", "Bible"], correctAnswer: "Guru Granth Sahib" },
  { topic: "Culture", difficulty: "Medium", questionText: "The 'Bihu' festival is a major harvest festival celebrated in which Indian state?", options: ["West Bengal", "Bihar", "Assam", "Sikkim"], correctAnswer: "Assam" },
  { topic: "Culture", difficulty: "Medium", questionText: "Who is the author of the famous book 'The Discovery of India'?", options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Rabindranath Tagore"], correctAnswer: "Jawaharlal Nehru" },
  { topic: "Culture", difficulty: "Medium", questionText: "The 'Madhubani' painting style originates from which Indian state?", options: ["Uttar Pradesh", "Bihar", "Jharkhand", "Chhattisgarh"], correctAnswer: "Bihar" },
  { topic: "Culture", difficulty: "Medium", questionText: "Which of these is a harvest festival celebrated in Southern India, especially Tamil Nadu?", options: ["Onam", "Pongal", "Vishu", "Ugadi"], correctAnswer: "Pongal" },
  { topic: "Culture", difficulty: "Medium", questionText: "The film 'Lagaan', nominated for an Oscar, was directed by whom?", options: ["Sanjay Leela Bhansali", "Karan Johar", "Ashutosh Gowariker", "Rajkumar Hirani"], correctAnswer: "Ashutosh Gowariker" },
  { topic: "Culture", difficulty: "Medium", questionText: "The 'Thanjavur painting' style is known for its use of which precious material?", options: ["Diamonds", "Silver foil", "Gold foil", "Pearls"], correctAnswer: "Gold foil" },

  // --- 15 Hard Questions ---
  { topic: "Culture", difficulty: "Hard", questionText: "In which epic is the story of 'Shakuntala', later dramatized by Kalidasa, first mentioned?", options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Puranas"], correctAnswer: "Mahabharata" },
  { topic: "Culture", difficulty: "Hard", questionText: "The concept of 'Ahimsa' (non-violence) is a core tenet in Hinduism, Buddhism, and especially which other major Indian religion?", options: ["Sikhism", "Jainism", "Zoroastrianism", "Judaism"], correctAnswer: "Jainism" },
  { topic: "Culture", difficulty: "Hard", questionText: "Who wrote the Indian National Song, 'Vande Mataram'?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subramania Bharati", "Muhammad Iqbal"], correctAnswer: "Bankim Chandra Chatterjee" },
  { topic: "Culture", difficulty: "Hard", questionText: "The rock shelters of 'Bhimbetka', a UNESCO World Heritage site, are famous for what?", options: ["Ancient temples", "Step wells", "Prehistoric cave paintings", "Fort ruins"], correctAnswer: "Prehistoric cave paintings" },
  { topic: "Culture", difficulty: "Hard", questionText: "Which language was the 'Ramcharitmanas' by Tulsidas written in?", options: ["Sanskrit", "Brajbhasha", "Awadhi", "Pali"], correctAnswer: "Awadhi" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Chikankari' embroidery is a traditional art form from which city?", options: ["Delhi", "Agra", "Lucknow", "Varanasi"], correctAnswer: "Lucknow" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Hornbill Festival' is a major annual event that showcases tribal culture in which state?", options: ["Manipur", "Mizoram", "Nagaland", "Arunachal Pradesh"], correctAnswer: "Nagaland" },
  { topic: "Culture", difficulty: "Hard", questionText: "Who is considered the 'Father of Indian Cinema'?", options: ["Dadasaheb Phalke", "Satyajit Ray", "Raj Kapoor", "Prithviraj Kapoor"], correctAnswer: "Dadasaheb Phalke" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Meenakshi Temple', known for its towering gopurams, is located in which city?", options: ["Chennai", "Madurai", "Tirupati", "Kanchipuram"], correctAnswer: "Madurai" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Pattachitra' style of cloth-based scroll painting is native to which state?", options: ["West Bengal", "Odisha", "Bihar", "Andhra Pradesh"], correctAnswer: "Odisha" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Sufi' devotional music form 'Qawwali' was popularized by which 13th-century poet at royal courts in Delhi?", options: ["Rumi", "Kabir", "Amir Khusrau", "Bulleh Shah"], correctAnswer: "Amir Khusrau" },
  { topic: "Culture", difficulty: "Hard", questionText: "Which Indian state is famous for its 'Kalamkari' art, a type of hand-painted or block-printed cotton textile?", options: ["Telangana", "Andhra Pradesh", "Tamil Nadu", "Karnataka"], correctAnswer: "Andhra Pradesh" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Elephanta Caves', a UNESCO site, are located on an island near which major city?", options: ["Kolkata", "Chennai", "Mumbai", "Goa"], correctAnswer: "Mumbai" },
  { topic: "Culture", difficulty: "Hard", questionText: "What is the traditional New Year's Day called in Maharashtra?", options: ["Baisakhi", "Gudi Padwa", "Ugadi", "Vishu"], correctAnswer: "Gudi Padwa" },
  { topic: "Culture", difficulty: "Hard", questionText: "The 'Bandhani' or 'Bandhej' tie-dye textile is primarily associated with which two states?", options: ["Punjab and Haryana", "Gujarat and Rajasthan", "Maharashtra and Goa", "Kerala and Tamil Nadu"], correctAnswer: "Gujarat and Rajasthan" },
  
  // =================================================================
  // Reasoning (45 Questions with Difficulty)
  // =================================================================

  // --- 15 Easy Questions ---
  { topic: "Reasoning", difficulty: "Easy", questionText: "Which number should come next in the pattern: 1, 4, 9, 16, ...?", options: ["20", "25", "30", "36"], correctAnswer: "25" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "If 'CAT' is coded as 'DBU', how is 'DOG' coded?", options: ["EPH", "FQI", "DPG", "COH"], correctAnswer: "EPH" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "Which word does not belong with the others? Apple, Banana, Rose, Orange.", options: ["Apple", "Banana", "Rose", "Orange"], correctAnswer: "Rose" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "If a doctor gives you 3 pills and tells you to take one every half hour, how long would the pills last?", options: ["60 minutes", "90 minutes", "120 minutes", "30 minutes"], correctAnswer: "60 minutes" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "Which is the odd one out: Lion, Tiger, Leopard, Cow?", options: ["Lion", "Tiger", "Leopard", "Cow"], correctAnswer: "Cow" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "If 'BOOK' is to 'LIBRARY', then 'TREE' is to...?", options: ["FRUIT", "FOREST", "LEAF", "BRANCH"], correctAnswer: "FOREST" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "A is the father of B. But B is not the son of A. How is B related to A?", options: ["Niece", "Son-in-law", "Daughter", "Wife"], correctAnswer: "Daughter" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "How many months have 28 days?", options: ["1", "2", "6", "12"], correctAnswer: "12" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "A farmer has 17 sheep, and all but 9 die. How many are left?", options: ["8", "9", "17", "26"], correctAnswer: "9" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "Which of the following is least like the others? Inch, Centimeter, Yard, Ounce.", options: ["Inch", "Centimeter", "Yard", "Ounce"], correctAnswer: "Ounce" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "Find the next letter in the series: J, F, M, A, M, ...?", options: ["J", "K", "L", "M"], correctAnswer: "J" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "If you rearrange the letters 'RAPIS', you would have the name of a(n):", options: ["Country", "City", "Animal", "Fruit"], correctAnswer: "City" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "Which number completes the analogy: 8 is to 4 as 10 is to...?", options: ["3", "7", "5", "6"], correctAnswer: "5" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "If yesterday was Friday, what is the day after tomorrow?", options: ["Sunday", "Monday", "Tuesday", "Saturday"], correctAnswer: "Monday" },
  { topic: "Reasoning", difficulty: "Easy", questionText: "Which word is the opposite of 'Ancient'?", options: ["Old", "Historic", "Aged", "Modern"], correctAnswer: "Modern" },

  // --- 15 Medium Questions ---
  { topic: "Reasoning", difficulty: "Medium", questionText: "A man points to a photograph and says, 'The lady in the photograph is my nephew’s maternal grandmother.' How is the lady in the photograph related to the man’s sister who has no other sister?", options: ["Cousin", "Sister-in-law", "Mother", "Mother-in-law"], correctAnswer: "Mother" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "Find the missing number in the series: 5, 11, 23, 47, ...?", options: ["92", "93", "94", "95"], correctAnswer: "95" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "Find the next term in the series: A, C, F, J, O, ...?", options: ["U", "V", "T", "S"], correctAnswer: "U" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):", options: ["City", "Animal", "Ocean", "River"], correctAnswer: "Ocean" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "Which number logically follows this series? 4, 6, 9, 6, 14, 6, ...?", options: ["6", "17", "19", "21"], correctAnswer: "19" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "What is the next number in the sequence: 2, 6, 12, 20, 30, ...?", options: ["40", "42", "44", "46"], correctAnswer: "42" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "If 'BUTTER' is coded as 'CVUUFS', what is 'BREAD' coded as?", options: ["CSFBE", "DSFBE", "CSFCF", "CSFBF"], correctAnswer: "CSFBE" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "A man walks 5 km east, then 3 km north, then 5 km west. How far is he from his starting point?", options: ["0 km", "3 km", "5 km", "13 km"], correctAnswer: "3 km" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "Which of the following is least like the others? Poem, Novel, Painting, Flower.", options: ["Poem", "Novel", "Painting", "Flower"], correctAnswer: "Flower" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "If a certain code, 'DELHI' is written as '73541' and 'CALCUTTA' as '82589662', how can 'CALICUT' be written?", options: ["8251896", "8251869", "8521896", "8258196"], correctAnswer: "8251896" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "Statement: All artists are whimsical. Some whimsical people are rich. Conclusion: 1. All artists are rich. 2. Some rich people are whimsical.", options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"], correctAnswer: "Only 2 follows" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:", options: ["145°", "150°", "155°", "160°"], correctAnswer: "155°" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "What is the next prime number after 50?", options: ["51", "53", "55", "57"], correctAnswer: "53" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "If P is the brother of Q; R is the father of P; S is the brother of T; T is the daughter of Q. Then, who is the uncle of S?", options: ["P", "Q", "R", "Cannot be determined"], correctAnswer: "P" },
  { topic: "Reasoning", difficulty: "Medium", questionText: "In a row of boys, if A who is 10th from the left and B who is 9th from the right interchange their positions, A becomes 15th from the left. How many boys are there in the row?", options: ["23", "27", "28", "31"], correctAnswer: "23" },

  // --- 15 Hard Questions ---
  { topic: "Reasoning", difficulty: "Hard", questionText: "If January 1, 2024, was a Monday, what day of the week will January 1, 2026, be?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correctAnswer: "Wednesday" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "A cube is painted blue on all faces and is cut into 125 smaller cubes of equal size. How many cubes are not painted on any face?", options: ["8", "9", "27", "36"], correctAnswer: "27" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "There are six persons A, B, C, D, E and F. C is the sister of F. B is the brother of E’s husband. D is the father of A and grandfather of F. There are two fathers, three brothers and a mother in the group. Who is the mother?", options: ["A", "B", "C", "E"], correctAnswer: "E" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "Find the number of triangles in the given figure (a standard star of David).", options: ["6", "8", "10", "12"], correctAnswer: "8" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "The day before yesterday was Saturday. What day will it be the day after tomorrow?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correctAnswer: "Wednesday" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "In a certain code, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in the same code?", options: ["EOJDJEFM", "EOJDEJFM", "MFEDJJOE", "MFEJDJOE"], correctAnswer: "EOJDJEFM" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "A watch which gains 5 seconds in 3 minutes was set right at 7 a.m. In the afternoon of the same day, when the watch indicated quarter past 4 o'clock, the true time is:", options: ["4 p.m.", "3:45 p.m.", "4:15 p.m.", "4:30 p.m."], correctAnswer: "4 p.m." },
  { topic: "Reasoning", difficulty: "Hard", questionText: "If '+' means '÷', '÷' means '−', '−' means '×', and '×' means '+', what will be the value of 8 + 6 ÷ 4 − 7 × 3?", options: ["12", "20/3", "-23", "-71/3"], correctAnswer: "-71/3" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "A, B, C, D and E are five friends. A is shorter than B but taller than E. C is the tallest. D is shorter than B and taller than A. Who has two persons taller and two persons shorter than him?", options: ["A", "B", "C", "D"], correctAnswer: "D" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "How many times in a day, are the hands of a clock in straight line but opposite in direction?", options: ["20", "22", "24", "48"], correctAnswer: "22" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "A is 3 years older to B and 3 years younger to C, while B and D are twins. How many years older is C to D?", options: ["2", "3", "6", "9"], correctAnswer: "6" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "A fires 5 shots to B's 3 but A kills only once in 3 shots while B kills once in 2 shots. When B has missed 27 times, A has killed:", options: ["30 birds", "60 birds", "72 birds", "90 birds"], correctAnswer: "30 birds" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "Which number should replace the question mark? 3, 6, 18, 72, ?", options: ["144", "216", "288", "360"], correctAnswer: "360" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "If a clock takes 5 seconds to strike 5, how long will it take to strike 10?", options: ["10 seconds", "9 seconds", "11 seconds", "None of these"], correctAnswer: "9 seconds" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "In a code language, 'APPLE' is written as 'ELPPA'. How is 'ORANGE' written?", options: ["EGNARO", "ENGARO", "EGNAOR", "GNOREA"], correctAnswer: "EGNARO" },
  { topic: "Reasoning", difficulty: "Hard", questionText: "Pointing to a girl in a photograph, Amar said, 'Her mother's husband's sister is my aunt.' How is the girl related to Amar?", options: ["Sister", "Cousin", "Niece", "No relation"], correctAnswer: "Cousin" },

  // =================================================================
  // Science (45 Questions with Difficulty)
  // =================================================================
  // --- Easy ---
  { topic: "Science", difficulty: "Easy", questionText: "Which gas do plants absorb from the atmosphere for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
  { topic: "Science", difficulty: "Easy", questionText: "Which part of the human body is responsible for pumping blood?", options: ["Lungs", "Brain", "Heart", "Liver"], correctAnswer: "Heart" },
  { topic: "Science", difficulty: "Easy", questionText: "Water freezes at what temperature on the Celsius scale?", options: ["0°C", "100°C", "32°C", "-10°C"], correctAnswer: "0°C" },
  { topic: "Science", difficulty: "Easy", questionText: "What planet is known as the 'Red Planet'?", options: ["Mars", "Earth", "Jupiter", "Venus"], correctAnswer: "Mars" },
  { topic: "Science", difficulty: "Easy", questionText: "Which vitamin is obtained from sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], correctAnswer: "Vitamin D" },
  { topic: "Science", difficulty: "Easy", questionText: "Which organ helps in breathing?", options: ["Heart", "Liver", "Lungs", "Kidney"], correctAnswer: "Lungs" },
  { topic: "Science", difficulty: "Easy", questionText: "Which liquid is essential for life?", options: ["Milk", "Juice", "Water", "Oil"], correctAnswer: "Water" },
  { topic: "Science", difficulty: "Easy", questionText: "Which sense organ helps us see?", options: ["Nose", "Tongue", "Eyes", "Ears"], correctAnswer: "Eyes" },
  { topic: "Science", difficulty: "Easy", questionText: "What is H2O commonly known as?", options: ["Salt", "Oxygen", "Water", "Hydrogen"], correctAnswer: "Water" },
  { topic: "Science", difficulty: "Easy", questionText: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], correctAnswer: "Mercury" },
  { topic: "Science", difficulty: "Easy", questionText: "Humans have how many senses?", options: ["Four", "Five", "Six", "Seven"], correctAnswer: "Five" },
  { topic: "Science", difficulty: "Easy", questionText: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: "100°C" },
  { topic: "Science", difficulty: "Easy", questionText: "Which part of the plant conducts photosynthesis?", options: ["Stem", "Roots", "Leaves", "Flowers"], correctAnswer: "Leaves" },
  { topic: "Science", difficulty: "Easy", questionText: "What is the main source of energy for Earth?", options: ["Moon", "Stars", "Sun", "Wind"], correctAnswer: "Sun" },
  { topic: "Science", difficulty: "Easy", questionText: "What do bees collect from flowers?", options: ["Leaves", "Pollen", "Seeds", "Nectar"], correctAnswer: "Nectar" },

  // --- Medium ---
  { topic: "Science", difficulty: "Medium", questionText: "Which Indian scientist won the Nobel Prize for Physics in 1930?", options: ["C.V. Raman", "Homi Bhabha", "Satyendra Nath Bose", "APJ Abdul Kalam"], correctAnswer: "C.V. Raman" },
  { topic: "Science", difficulty: "Medium", questionText: "Which blood group is known as the universal donor?", options: ["A", "AB", "O", "B"], correctAnswer: "O" },
  { topic: "Science", difficulty: "Medium", questionText: "Which gas is responsible for the greenhouse effect?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correctAnswer: "Carbon Dioxide" },
  { topic: "Science", difficulty: "Medium", questionText: "Which part of the brain controls voluntary actions?", options: ["Cerebellum", "Medulla", "Cerebrum", "Hypothalamus"], correctAnswer: "Cerebrum" },
  { topic: "Science", difficulty: "Medium", questionText: "How many bones are there in the adult human body?", options: ["202", "206", "208", "210"], correctAnswer: "206" },
  { topic: "Science", difficulty: "Medium", questionText: "What is the chemical symbol of gold?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: "Au" },
  { topic: "Science", difficulty: "Medium", questionText: "What is the SI unit of force?", options: ["Watt", "Pascal", "Newton", "Joule"], correctAnswer: "Newton" },
  { topic: "Science", difficulty: "Medium", questionText: "Which part of the eye controls the amount of light entering it?", options: ["Pupil", "Lens", "Retina", "Iris"], correctAnswer: "Iris" },
  { topic: "Science", difficulty: "Medium", questionText: "Which scientist proposed the three laws of motion?", options: ["Newton", "Einstein", "Galileo", "Faraday"], correctAnswer: "Newton" },
  { topic: "Science", difficulty: "Medium", questionText: "Which is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Lungs"], correctAnswer: "Skin" },
  { topic: "Science", difficulty: "Medium", questionText: "What does DNA stand for?", options: ["Deoxyribo Nucleic Acid", "Deoxyribose Nitric Acid", "Dioxy Nucleic Acid", "Dioxy Ribose Nucleic Acid"], correctAnswer: "Deoxyribo Nucleic Acid" },
  { topic: "Science", difficulty: "Medium", questionText: "What causes tides in the ocean?", options: ["Wind", "Earthquake", "Moon's gravity", "Sun’s heat"], correctAnswer: "Moon's gravity" },
  { topic: "Science", difficulty: "Medium", questionText: "Which Indian space mission successfully landed near the Moon’s south pole?", options: ["Chandrayaan-1", "Mangalyaan", "Chandrayaan-2", "Chandrayaan-3"], correctAnswer: "Chandrayaan-3" },
  { topic: "Science", difficulty: "Medium", questionText: "Which metal is liquid at room temperature?", options: ["Mercury", "Aluminium", "Iron", "Zinc"], correctAnswer: "Mercury" },
  { topic: "Science", difficulty: "Medium", questionText: "What is the hardest natural substance?", options: ["Iron", "Gold", "Diamond", "Quartz"], correctAnswer: "Diamond" },

  // --- Hard ---  
    // --- Science: Hard ---
  { topic: "Science", difficulty: "Hard", questionText: "Which Indian physicist laid the foundation for India's nuclear program and founded the TIFR?", options: ["C.V. Raman", "Meghnad Saha", "Homi Bhabha", "APJ Abdul Kalam"], correctAnswer: "Homi Bhabha" },
  { topic: "Science", difficulty: "Hard", questionText: "What is the function of mitochondria in a cell?", options: ["Protein synthesis", "Energy production", "Digestion", "Reproduction"], correctAnswer: "Energy production" },
  { topic: "Science", difficulty: "Hard", questionText: "Which Indian mathematician is known for his infinite series and was invited to Cambridge during WWI?", options: ["Aryabhata", "Bhaskaracharya", "Ramanujan", "Srinivasa Rao"], correctAnswer: "Ramanujan" },
  { topic: "Science", difficulty: "Hard", questionText: "Which part of the electromagnetic spectrum has the shortest wavelength?", options: ["Ultraviolet", "Gamma rays", "X-rays", "Microwaves"], correctAnswer: "Gamma rays" },
  { topic: "Science", difficulty: "Hard", questionText: "Which enzyme breaks down starch into sugar?", options: ["Lipase", "Pepsin", "Amylase", "Trypsin"], correctAnswer: "Amylase" },
  { topic: "Science", difficulty: "Hard", questionText: "Which Indian launched the Mars Orbiter Mission (Mangalyaan) successfully in 2013?", options: ["ISRO", "NASA", "DRDO", "BARC"], correctAnswer: "ISRO" },
  { topic: "Science", difficulty: "Hard", questionText: "Which scientist gave the Uncertainty Principle?", options: ["Einstein", "Newton", "Heisenberg", "Bohr"], correctAnswer: "Heisenberg" },
  { topic: "Science", difficulty: "Hard", questionText: "What is the main component of natural gas?", options: ["Butane", "Methane", "Ethane", "Propane"], correctAnswer: "Methane" },
  { topic: "Science", difficulty: "Hard", questionText: "Which vitamin is synthesized by the human body when exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], correctAnswer: "Vitamin D" },
  { topic: "Science", difficulty: "Hard", questionText: "Which Indian woman scientist led the Mars Orbiter Mission (MOM)?", options: ["Tessy Thomas", "Kalpana Chawla", "Ritu Karidhal", "Kiran Mazumdar-Shaw"], correctAnswer: "Ritu Karidhal" },
  { topic: "Science", difficulty: "Hard", questionText: "What does the Richter scale measure?", options: ["Temperature", "Tsunami height", "Earthquake intensity", "Wind speed"], correctAnswer: "Earthquake intensity" },
  { topic: "Science", difficulty: "Hard", questionText: "What is the main function of white blood cells?", options: ["Carry oxygen", "Clot blood", "Fight infection", "Provide nutrients"], correctAnswer: "Fight infection" },
  { topic: "Science", difficulty: "Hard", questionText: "Which gas is used in the electric bulb?", options: ["Oxygen", "Nitrogen", "Helium", "Argon"], correctAnswer: "Argon" },
  { topic: "Science", difficulty: "Hard", questionText: "Which organ produces insulin in the human body?", options: ["Liver", "Pancreas", "Kidney", "Stomach"], correctAnswer: "Pancreas" },
  { topic: "Science", difficulty: "Hard", questionText: "Which fundamental particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Photon"], correctAnswer: "Neutron" },

  { topic: "Sports", difficulty: "Easy", questionText: "Which country has won the most Cricket World Cups?", options: ["India", "Australia", "England", "Pakistan"], correctAnswer: "Australia" },
  { topic: "Sports", difficulty: "Easy", questionText: "Who is known as the 'God of Cricket' in India?", options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Kapil Dev"], correctAnswer: "Sachin Tendulkar" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which sport is associated with Wimbledon?", options: ["Cricket", "Badminton", "Tennis", "Football"], correctAnswer: "Tennis" },
  { topic: "Sports", difficulty: "Easy", questionText: "How many players are there in a football team (on the field)?", options: ["9", "10", "11", "12"], correctAnswer: "11" },
  { topic: "Sports", difficulty: "Easy", questionText: "In which country were the first modern Olympics held?", options: ["Italy", "France", "Greece", "USA"], correctAnswer: "Greece" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which game is known as the 'gentleman's game'?", options: ["Football", "Hockey", "Cricket", "Golf"], correctAnswer: "Cricket" },
  { topic: "Sports", difficulty: "Easy", questionText: "Who won India’s first Olympic gold medal in athletics?", options: ["Neeraj Chopra", "Milkha Singh", "P.T. Usha", "Abhinav Bindra"], correctAnswer: "Neeraj Chopra" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which sport uses a shuttlecock?", options: ["Tennis", "Squash", "Badminton", "Table Tennis"], correctAnswer: "Badminton" },
  { topic: "Sports", difficulty: "Easy", questionText: "What is the national sport of India?", options: ["Cricket", "Hockey", "Kabaddi", "Wrestling"], correctAnswer: "Hockey" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which Indian woman won silver in badminton at the 2016 Olympics?", options: ["Saina Nehwal", "PV Sindhu", "Mary Kom", "Dutee Chand"], correctAnswer: "PV Sindhu" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which sport is associated with the term 'Grand Slam'?", options: ["Cricket", "Golf", "Tennis", "Hockey"], correctAnswer: "Tennis" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which Indian cricketer is nicknamed ‘Captain Cool’?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Rahul Dravid"], correctAnswer: "MS Dhoni" },
  { topic: "Sports", difficulty: "Easy", questionText: "How long is a marathon race?", options: ["21.1 km", "30 km", "42.195 km", "50 km"], correctAnswer: "42.195 km" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which country hosts the Tour de France?", options: ["Italy", "Germany", "Spain", "France"], correctAnswer: "France" },
  { topic: "Sports", difficulty: "Easy", questionText: "Which game is associated with the term 'checkmate'?", options: ["Ludo", "Snooker", "Chess", "Carrom"], correctAnswer: "Chess" },

  // --- Sports: Medium ---
  { topic: "Sports", difficulty: "Medium", questionText: "Which Indian athlete is known as the 'Flying Sikh'?", options: ["Neeraj Chopra", "Milkha Singh", "Dhanraj Pillay", "Sunil Chhetri"], correctAnswer: "Milkha Singh" },
  { topic: "Sports", difficulty: "Medium", questionText: "In which year did India win its first Cricket World Cup?", options: ["1975", "1983", "1987", "1996"], correctAnswer: "1983" },
  { topic: "Sports", difficulty: "Medium", questionText: "What is the maximum number of sets in a Grand Slam men’s tennis match?", options: ["3", "4", "5", "7"], correctAnswer: "5" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which footballer is known as the 'GOAT'?", options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Mbappe"], correctAnswer: "Lionel Messi" },
  { topic: "Sports", difficulty: "Medium", questionText: "In Kabaddi, what is the term used when all players of a team are out?", options: ["All Out", "Wipeout", "Knockout", "Finish"], correctAnswer: "All Out" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which sport does Manpreet Singh represent?", options: ["Cricket", "Hockey", "Badminton", "Boxing"], correctAnswer: "Hockey" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which stadium in India is the largest in terms of capacity?", options: ["Wankhede", "Eden Gardens", "Narendra Modi Stadium", "M. Chinnaswamy Stadium"], correctAnswer: "Narendra Modi Stadium" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which Indian boxer won bronze at the London Olympics 2012?", options: ["Vijender Singh", "Mary Kom", "Lovlina Borgohain", "Manoj Kumar"], correctAnswer: "Mary Kom" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which team won the FIFA World Cup 2022?", options: ["Germany", "Brazil", "Argentina", "France"], correctAnswer: "Argentina" },
  { topic: "Sports", difficulty: "Medium", questionText: "What is the name of the league for badminton in India?", options: ["Super Smash", "Premier Badminton League", "Shuttle India League", "Badminton Pro Cup"], correctAnswer: "Premier Badminton League" },
  { topic: "Sports", difficulty: "Medium", questionText: "Who is the first Indian woman to win a medal in wrestling at Olympics?", options: ["Babita Phogat", "Geeta Phogat", "Sakshi Malik", "Vinesh Phogat"], correctAnswer: "Sakshi Malik" },
  { topic: "Sports", difficulty: "Medium", questionText: "Who holds the record for the most goals in international football?", options: ["Cristiano Ronaldo", "Lionel Messi", "Pele", "Ali Daei"], correctAnswer: "Cristiano Ronaldo" },
  { topic: "Sports", difficulty: "Medium", questionText: "In which sport is the 'Ashes Series' played?", options: ["Hockey", "Cricket", "Rugby", "Baseball"], correctAnswer: "Cricket" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which country hosted the 2020 Summer Olympics (held in 2021)?", options: ["China", "Japan", "South Korea", "Brazil"], correctAnswer: "Japan" },
  { topic: "Sports", difficulty: "Medium", questionText: "Which IPL team has won the most titles as of 2023?", options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Rajasthan Royals"], correctAnswer: "Chennai Super Kings" },


  // (Previous Culture, Reasoning, Science, and Sports Easy + Medium questions are included above...)

  // --- Sports: Hard ---
  { topic: "Sports", difficulty: "Hard", questionText: "Which Indian cricketer scored the first double century in ODIs?", options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "MS Dhoni"], correctAnswer: "Sachin Tendulkar" },
  { topic: "Sports", difficulty: "Hard", questionText: "Who is the only Indian to win a Formula One race?", options: ["Narain Karthikeyan", "Jehan Daruvala", "Karun Chandhok", "None"], correctAnswer: "None" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which city hosted the first Asian Games in 1951?", options: ["Tokyo", "Delhi", "Bangkok", "Jakarta"], correctAnswer: "Delhi" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which Indian athlete has won the most medals in the Commonwealth Games?", options: ["Sushil Kumar", "Abhinav Bindra", "Jaspal Rana", "Manika Batra"], correctAnswer: "Jaspal Rana" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which team won the first-ever IPL title in 2008?", options: ["CSK", "RR", "MI", "RCB"], correctAnswer: "RR" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which Indian shooter won gold at the 2008 Beijing Olympics?", options: ["Rajyavardhan Rathore", "Abhinav Bindra", "Gagan Narang", "Jitu Rai"], correctAnswer: "Abhinav Bindra" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which international footballer has won the most Ballon d'Or awards as of 2023?", options: ["Cristiano Ronaldo", "Lionel Messi", "Luka Modric", "Zinedine Zidane"], correctAnswer: "Lionel Messi" },
  { topic: "Sports", difficulty: "Hard", questionText: "The Ranji Trophy is named after whom?", options: ["Ranjitsinhji", "Vijay Hazare", "Lala Amarnath", "Duleepsinhji"], correctAnswer: "Ranjitsinhji" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which Indian woman boxer has won 6 world championships?", options: ["Mary Kom", "Sarita Devi", "Nikhat Zareen", "Pinki Rani"], correctAnswer: "Mary Kom" },
  { topic: "Sports", difficulty: "Hard", questionText: "What is the name of the international chess governing body?", options: ["FIBA", "FIDE", "ICF", "WCA"], correctAnswer: "FIDE" },
  { topic: "Sports", difficulty: "Hard", questionText: "Who was the first Indian to win an individual medal at the Olympics?", options: ["KD Jadhav", "Leander Paes", "Milkha Singh", "Norman Pritchard"], correctAnswer: "KD Jadhav" },
  { topic: "Sports", difficulty: "Hard", questionText: "In which sport is the Davis Cup awarded?", options: ["Badminton", "Tennis", "Table Tennis", "Squash"], correctAnswer: "Tennis" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which Indian footballer was awarded the Padma Shri in 2019?", options: ["Sunil Chhetri", "Bhaichung Bhutia", "Gurpreet Singh Sandhu", "Sandesh Jhingan"], correctAnswer: "Sunil Chhetri" },
  { topic: "Sports", difficulty: "Hard", questionText: "How many gold medals did Michael Phelps win in the 2008 Olympics?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
  { topic: "Sports", difficulty: "Hard", questionText: "Which sport is associated with terms like 'yuko', 'ippon', and 'waza-ari'?", options: ["Karate", "Judo", "Taekwondo", "Wrestling"], correctAnswer: "Judo" },

  // =================================================================
  // Technology (45 Questions with Difficulty)
  // =================================================================

  // --- Technology: Easy ---
  { topic: "Technology", difficulty: "Easy", questionText: "What does CPU stand for?", options: ["Central Processing Unit", "Control Processing Unit", "Computer Personal Unit", "Central Program Unit"], correctAnswer: "Central Processing Unit" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which company makes the iPhone?", options: ["Microsoft", "Google", "Samsung", "Apple"], correctAnswer: "Apple" },
  { topic: "Technology", difficulty: "Easy", questionText: "What is the full form of 'www'?", options: ["World Wide Web", "Wide Web World", "Web World Wide", "World Web Wide"], correctAnswer: "World Wide Web" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which of the following is a social media platform?", options: ["Facebook", "Google", "Yahoo", "Amazon"], correctAnswer: "Facebook" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which Indian founded Infosys?", options: ["Ratan Tata", "Narayan Murthy", "Azim Premji", "Sundar Pichai"], correctAnswer: "Narayan Murthy" },
  { topic: "Technology", difficulty: "Easy", questionText: "What does USB stand for?", options: ["United Serial Bus", "Universal Serial Bus", "Universal System Bus", "Unitary Service Bus"], correctAnswer: "Universal Serial Bus" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which company developed the Windows operating system?", options: ["Apple", "Linux", "Microsoft", "IBM"], correctAnswer: "Microsoft" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which device is used to print documents?", options: ["Router", "Scanner", "Printer", "Monitor"], correctAnswer: "Printer" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which browser is developed by Google?", options: ["Firefox", "Edge", "Safari", "Chrome"], correctAnswer: "Chrome" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which app is widely used for instant messaging in India?", options: ["Telegram", "Facebook", "WhatsApp", "Slack"], correctAnswer: "WhatsApp" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which of these is an Indian digital payment platform?", options: ["PayPal", "Google Pay", "PhonePe", "Venmo"], correctAnswer: "PhonePe" },
  { topic: "Technology", difficulty: "Easy", questionText: "What is the main function of RAM in a computer?", options: ["Store permanent data", "Run programs", "Display output", "Connect to the internet"], correctAnswer: "Run programs" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which of these is not an operating system?", options: ["Windows", "Linux", "Android", "Adobe"], correctAnswer: "Adobe" },
  { topic: "Technology", difficulty: "Easy", questionText: "Which Indian app is used to book train tickets?", options: ["IRCTC", "Zomato", "Swiggy", "MakeMyTrip"], correctAnswer: "IRCTC" },
  { topic: "Technology", difficulty: "Easy", questionText: "What does AI stand for in technology?", options: ["Artificial Intelligence", "Automated Internet", "Applied Interface", "Advanced Input"], correctAnswer: "Artificial Intelligence" },

  // --- Technology: Medium ---
  { topic: "Technology", difficulty: "Medium", questionText: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyperlink Text Transfer Protocol", "None"], correctAnswer: "HyperText Transfer Protocol" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which programming language is known as the backbone of web development?", options: ["Python", "C++", "JavaScript", "Java"], correctAnswer: "JavaScript" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which Indian is the CEO of Google as of 2024?", options: ["Satya Nadella", "Sundar Pichai", "Arvind Krishna", "Narayana Murthy"], correctAnswer: "Sundar Pichai" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which device is used to connect different networks?", options: ["Router", "Switch", "Hub", "Repeater"], correctAnswer: "Router" },
  { topic: "Technology", difficulty: "Medium", questionText: "What is the function of an IP address?", options: ["Identify a device on a network", "Store data", "Send emails", "Secure websites"], correctAnswer: "Identify a device on a network" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which company developed ChatGPT?", options: ["Google", "Meta", "Microsoft", "OpenAI"], correctAnswer: "OpenAI" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which Indian startup became a unicorn in the EdTech space?", options: ["Zomato", "Byju's", "Swiggy", "Cure.fit"], correctAnswer: "Byju's" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which one is not a programming language?", options: ["HTML", "Python", "Java", "SQL"], correctAnswer: "HTML" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which protocol is used to send emails?", options: ["FTP", "SMTP", "HTTP", "TCP"], correctAnswer: "SMTP" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which Indian founded the microprocessor startup 'InCore Semiconductors'?", options: ["Arvind Krishna", "Srinivas Patil", "Prof. Kamakoti Veezhinathan", "Nandan Nilekani"], correctAnswer: "Prof. Kamakoti Veezhinathan" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which Indian government platform enables citizens to access multiple digital services using a single mobile app?", options: ["IRCTC", "UMANG", "Arogya Setu", "DigiLocker"], correctAnswer: "UMANG" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which programming language is widely used for data analysis and machine learning?", options: ["Java", "C", "Python", "PHP"], correctAnswer: "Python" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which Indian company launched the JioPhone series aiming to make smartphones affordable?", options: ["Airtel", "BSNL", "Micromax", "Reliance Jio"], correctAnswer: "Reliance Jio" },
  { topic: "Technology", difficulty: "Medium", questionText: "Which Indian digital platform allows access to over 1.5 billion Aadhaar-authenticated documents?", options: ["Paytm", "DigiLocker", "Rupay", "JioMart"], correctAnswer: "DigiLocker" },




  // --- Technology: Hard ---
  { topic: "Technology", difficulty: "Hard", questionText: "Who is known as the father of the computer?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], correctAnswer: "Charles Babbage" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which algorithm is used in public-key cryptography?", options: ["SHA-256", "RSA", "AES", "MD5"], correctAnswer: "RSA" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which Indian institute developed the PARAM supercomputer?", options: ["IIT Bombay", "C-DAC", "DRDO", "ISRO"], correctAnswer: "C-DAC" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which computer virus caused the most damage financially worldwide?", options: ["ILOVEYOU", "Stuxnet", "Mydoom", "WannaCry"], correctAnswer: "Mydoom" },
  { topic: "Technology", difficulty: "Hard", questionText: "What does Moore’s Law state?", options: ["Computer speed doubles every year", "Transistor count doubles every two years", "RAM capacity increases every 5 years", "None"], correctAnswer: "Transistor count doubles every two years" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which programming paradigm emphasizes objects and their interactions?", options: ["Procedural", "Functional", "Object-Oriented", "Logical"], correctAnswer: "Object-Oriented" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which Indian was appointed CTO of Twitter in 2022?", options: ["Parag Agrawal", "Raghuram Rajan", "Natarajan Chandrasekaran", "Vijay Shekhar Sharma"], correctAnswer: "Parag Agrawal" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which Indian founded the tech firm Zoho?", options: ["Bhavin Turakhia", "Sridhar Vembu", "Vijay Shekhar Sharma", "Kunal Shah"], correctAnswer: "Sridhar Vembu" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which Linux distribution was developed by an Indian company?", options: ["Ubuntu", "Fedora", "BOSS", "Debian"], correctAnswer: "BOSS" },
  { topic: "Technology", difficulty: "Hard", questionText: "What is the term for a technology that allows computers to simulate human learning?", options: ["Deep Learning", "Blockchain", "Cryptography", "Big Data"], correctAnswer: "Deep Learning" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which Indian startup focuses on semiconductor R&D and was backed by IIT Madras?", options: ["InCore", "Mindtree", "Tata Elxsi", "Tech Mahindra"], correctAnswer: "InCore" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which language was used to develop the Linux kernel?", options: ["Python", "Java", "C", "Rust"], correctAnswer: "C" },
  { topic: "Technology", difficulty: "Hard", questionText: "What is the function of DNS in networking?", options: ["Stores web data", "Assigns IP addresses", "Converts domain names to IP", "Secures websites"], correctAnswer: "Converts domain names to IP" },
  { topic: "Technology", difficulty: "Hard", questionText: "Who coined the term 'Artificial Intelligence'?", options: ["Alan Turing", "John McCarthy", "Elon Musk", "Marvin Minsky"], correctAnswer: "John McCarthy" },
  { topic: "Technology", difficulty: "Hard", questionText: "Which country developed the Sunway TaihuLight supercomputer?", options: ["India", "USA", "Japan", "China"], correctAnswer: "China" },
  
  // =================================================================
// History (30 Questions)
// =================================================================
// --- Easy ---
{ topic: "History", difficulty: "Easy", questionText: "Who was the first President of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], correctAnswer: "George Washington" },
{ topic: "History", difficulty: "Easy", questionText: "In which year did the Titanic sink?", options: ["1905", "1912", "1918", "1923"], correctAnswer: "1912" },
{ topic: "History", difficulty: "Easy", questionText: "Who was the Egyptian queen known for her relationship with Mark Antony and Julius Caesar?", options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Isis"], correctAnswer: "Cleopatra" },
{ topic: "History", difficulty: "Easy", questionText: "The Great Wall of China was built to protect against invasions from which group?", options: ["The Mongols", "The Japanese", "The Russians", "The Indians"], correctAnswer: "The Mongols" },
{ topic: "History", difficulty: "Easy", questionText: "Which ancient civilization built the pyramids?", options: ["Ancient Rome", "Ancient Greece", "Ancient Egypt", "Mesopotamia"], correctAnswer: "Ancient Egypt" },
{ topic: "History", difficulty: "Easy", questionText: "Who discovered America in 1492?", options: ["Ferdinand Magellan", "Vasco da Gama", "Christopher Columbus", "Marco Polo"], correctAnswer: "Christopher Columbus" },
{ topic: "History", difficulty: "Easy", questionText: "What was the primary cause of the American Revolution?", options: ["Slavery", "Religious differences", "Taxation without representation", "Land disputes"], correctAnswer: "Taxation without representation" },
{ topic: "History", difficulty: "Easy", questionText: "Which war was fought between the North and South regions of the United States?", options: ["The Revolutionary War", "The War of 1812", "The Civil War", "World War I"], correctAnswer: "The Civil War" },
{ topic: "History", difficulty: "Easy", questionText: "The Renaissance began in which country?", options: ["France", "Spain", "England", "Italy"], correctAnswer: "Italy" },
{ topic: "History", difficulty: "Easy", questionText: "Who was the leader of the Nazi Party in Germany?", options: ["Benito Mussolini", "Joseph Stalin", "Adolf Hitler", "Winston Churchill"], correctAnswer: "Adolf Hitler" },
// --- Medium ---
{ topic: "History", difficulty: "Medium", questionText: "The Magna Carta, signed in 1215, limited the power of which country's monarch?", options: ["France", "Spain", "England", "Portugal"], correctAnswer: "England" },
{ topic: "History", difficulty: "Medium", questionText: "Who led the Soviet Union during World War II?", options: ["Vladimir Lenin", "Leon Trotsky", "Joseph Stalin", "Mikhail Gorbachev"], correctAnswer: "Joseph Stalin" },
{ topic: "History", difficulty: "Medium", questionText: "The Battle of Waterloo in 1815 marked the final defeat of which leader?", options: ["Alexander the Great", "Julius Caesar", "Genghis Khan", "Napoleon Bonaparte"], correctAnswer: "Napoleon Bonaparte" },
{ topic: "History", difficulty: "Medium", questionText: "What was the name of the period of cultural and artistic flourishing in New York City in the 1920s?", options: ["The Gilded Age", "The Roaring Twenties", "The Harlem Renaissance", "The Beat Generation"], correctAnswer: "The Harlem Renaissance" },
{ topic: "History", difficulty: "Medium", questionText: "The ancient city of Rome was built on how many hills?", options: ["Five", "Seven", "Nine", "Three"], correctAnswer: "Seven" },
{ topic: "History", difficulty: "Medium", questionText: "The Hundred Years' War was fought between which two countries?", options: ["England and Spain", "France and Germany", "England and France", "Spain and Portugal"], correctAnswer: "England and France" },
{ topic: "History", difficulty: "Medium", questionText: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Bessie Coleman", "Harriet Quimby", "Amelia Earhart", "Jacqueline Cochran"], correctAnswer: "Amelia Earhart" },
{ topic: "History", difficulty: "Medium", questionText: "The fall of the Berlin Wall in 1989 symbolized the end of which conflict?", options: ["World War II", "The Korean War", "The Vietnam War", "The Cold War"], correctAnswer: "The Cold War" },
{ topic: "History", difficulty: "Medium", questionText: "Which empire was ruled by Genghis Khan?", options: ["The Ottoman Empire", "The Roman Empire", "The Mongol Empire", "The Persian Empire"], correctAnswer: "The Mongol Empire" },
{ topic: "History", difficulty: "Medium", questionText: "The Industrial Revolution began in which country?", options: ["United States", "Germany", "Great Britain", "France"], correctAnswer: "Great Britain" },
// --- Hard ---
{ topic: "History", difficulty: "Hard", questionText: "The Treaty of Tordesillas (1494) divided the newly discovered lands outside Europe between which two countries?", options: ["England and France", "Spain and Portugal", "Netherlands and England", "France and Spain"], correctAnswer: "Spain and Portugal" },
{ topic: "History", difficulty: "Hard", questionText: "What was the name of the first successful English colony in North America, founded in 1607?", options: ["Plymouth", "Roanoke", "Jamestown", "St. Augustine"], correctAnswer: "Jamestown" },
{ topic: "History", difficulty: "Hard", questionText: "The Meiji Restoration, a period of rapid modernization, occurred in which country?", options: ["China", "Korea", "Japan", "Vietnam"], correctAnswer: "Japan" },
{ topic: "History", difficulty: "Hard", questionText: "Who was the Carthaginian general who famously crossed the Alps with elephants to attack Rome?", options: ["Hamilcar Barca", "Hasdrubal", "Hannibal", "Scipio Africanus"], correctAnswer: "Hannibal" },
{ topic: "History", difficulty: "Hard", questionText: "The 'War of the Roses' was a series of civil wars fought for control of the throne of which country?", options: ["France", "Scotland", "England", "Spain"], correctAnswer: "England" },
{ topic: "History", difficulty: "Hard", questionText: "What was the name of the secret police of the Soviet Union under Stalin?", options: ["Gestapo", "Stasi", "KGB", "NKVD"], correctAnswer: "NKVD" },
{ topic: "History", difficulty: "Hard", questionText: "The Boxer Rebellion was an anti-foreign, anti-colonial, and anti-Christian uprising that took place in which country?", options: ["Japan", "India", "China", "Korea"], correctAnswer: "China" },
{ topic: "History", difficulty: "Hard", questionText: "Who was the last emperor of Russia?", options: ["Peter the Great", "Ivan the Terrible", "Nicholas II", "Alexander III"], correctAnswer: "Nicholas II" },
{ topic: "History", difficulty: "Hard", questionText: "The ancient library of Alexandria was located in which modern-day country?", options: ["Greece", "Turkey", "Egypt", "Italy"], correctAnswer: "Egypt" },
{ topic: "History", difficulty: "Hard", questionText: "What was the name of the political and social system in medieval Europe?", options: ["Mercantilism", "Feudalism", "Capitalism", "Socialism"], correctAnswer: "Feudalism" },

// =================================================================
// Geography (30 Questions)
// =================================================================
// --- Easy ---
{ topic: "Geography", difficulty: "Easy", questionText: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Pacific" },
{ topic: "Geography", difficulty: "Easy", questionText: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Arabian", "Antarctic Polar"], correctAnswer: "Antarctic Polar" },
{ topic: "Geography", difficulty: "Easy", questionText: "What is the capital of Japan?", options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], correctAnswer: "Tokyo" },
{ topic: "Geography", difficulty: "Easy", questionText: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: "Nile" },
{ topic: "Geography", difficulty: "Easy", questionText: "Mount Everest is located in which mountain range?", options: ["The Andes", "The Rockies", "The Alps", "The Himalayas"], correctAnswer: "The Himalayas" },
{ topic: "Geography", difficulty: "Easy", questionText: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correctAnswer: "Ottawa" },
{ topic: "Geography", difficulty: "Easy", questionText: "Which continent is known as the 'Dark Continent'?", options: ["Asia", "Africa", "South America", "Australia"], correctAnswer: "Africa" },
{ topic: "Geography", difficulty: "Easy", questionText: "What is the smallest country in the world?", options: ["Monaco", "Nauru", "Vatican City", "San Marino"], correctAnswer: "Vatican City" },
{ topic: "Geography", difficulty: "Easy", questionText: "The Great Barrier Reef is located off the coast of which country?", options: ["Brazil", "South Africa", "Australia", "Mexico"], correctAnswer: "Australia" },
{ topic: "Geography", difficulty: "Easy", questionText: "Which is the largest country by land area?", options: ["Canada", "China", "USA", "Russia"], correctAnswer: "Russia" },
// --- Medium ---
{ topic: "Geography", difficulty: "Medium", questionText: "The River Nile flows into which sea?", options: ["Red Sea", "Arabian Sea", "Mediterranean Sea", "Black Sea"], correctAnswer: "Mediterranean Sea" },
{ topic: "Geography", difficulty: "Medium", questionText: "Mount Kilimanjaro, the highest peak in Africa, is located in which country?", options: ["Kenya", "Ethiopia", "Tanzania", "Uganda"], correctAnswer: "Tanzania" },
{ topic: "Geography", difficulty: "Medium", questionText: "What is the name of the strait that separates Asia and North America?", options: ["Strait of Gibraltar", "Strait of Malacca", "Bering Strait", "Strait of Hormuz"], correctAnswer: "Bering Strait" },
{ topic: "Geography", difficulty: "Medium", questionText: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "South Korea", "Japan", "Thailand"], correctAnswer: "Japan" },
{ topic: "Geography", difficulty: "Medium", questionText: "The ancient city of Petra is located in which modern-day country?", options: ["Egypt", "Syria", "Jordan", "Israel"], correctAnswer: "Jordan" },
{ topic: "Geography", difficulty: "Medium", questionText: "What is the capital of Argentina?", options: ["Santiago", "Lima", "Bogotá", "Buenos Aires"], correctAnswer: "Buenos Aires" },
{ topic: "Geography", difficulty: "Medium", questionText: "Which of these countries is landlocked?", options: ["Spain", "Italy", "Switzerland", "Greece"], correctAnswer: "Switzerland" },
{ topic: "Geography", difficulty: "Medium", questionText: "The Panama Canal connects which two oceans?", options: ["Atlantic and Indian", "Pacific and Indian", "Atlantic and Pacific", "Arctic and Atlantic"], correctAnswer: "Atlantic and Pacific" },
{ topic: "Geography", difficulty: "Medium", questionText: "What is the largest island in the world?", options: ["Borneo", "Madagascar", "Greenland", "New Guinea"], correctAnswer: "Greenland" },
{ topic: "Geography", difficulty: "Medium", questionText: "Which desert is located in the southern part of Africa?", options: ["Sahara", "Arabian", "Kalahari", "Gobi"], correctAnswer: "Kalahari" },
// --- Hard ---
{ topic: "Geography", difficulty: "Hard", questionText: "What is the only country that borders the United Kingdom?", options: ["France", "Netherlands", "Ireland", "Belgium"], correctAnswer: "Ireland" },
{ topic: "Geography", difficulty: "Hard", questionText: "The Atacama Desert, one of the driest places on Earth, is located on which continent?", options: ["Africa", "Australia", "South America", "Asia"], correctAnswer: "South America" },
{ topic: "Geography", difficulty: "Hard", questionText: "What is the term for a ring-shaped coral reef, island, or series of islets?", options: ["Archipelago", "Atoll", "Peninsula", "Isthmus"], correctAnswer: "Atoll" },
{ topic: "Geography", difficulty: "Hard", questionText: "Which city is located on two continents?", options: ["Moscow", "Cairo", "Istanbul", "Jerusalem"], correctAnswer: "Istanbul" },
{ topic: "Geography", difficulty: "Hard", questionText: "What is the northernmost capital city in the world?", options: ["Oslo, Norway", "Helsinki, Finland", "Reykjavik, Iceland", "Stockholm, Sweden"], correctAnswer: "Reykjavik, Iceland" },
{ topic: "Geography", difficulty: "Hard", questionText: "The world's highest waterfall, Angel Falls, is in which country?", options: ["Brazil", "Peru", "Venezuela", "Colombia"], correctAnswer: "Venezuela" },
{ topic: "Geography", difficulty: "Hard", questionText: "What is the name of the sea that is bordered by Europe to the north and Africa to the south?", options: ["Black Sea", "Caspian Sea", "Mediterranean Sea", "Adriatic Sea"], correctAnswer: "Mediterranean Sea" },
{ topic: "Geography", difficulty: "Hard", questionText: "Which country has the most international borders?", options: ["Russia", "Brazil", "Germany", "China"], correctAnswer: "China" },
{ topic: "Geography", difficulty: "Hard", questionText: "Lake Baikal, the world's largest freshwater lake by volume, is located in which country?", options: ["Canada", "USA", "Russia", "China"], correctAnswer: "Russia" },
{ topic: "Geography", difficulty: "Hard", questionText: "What is the geographical term for a narrow strip of land connecting two larger landmasses?", options: ["Peninsula", "Isthmus", "Archipelago", "Strait"], correctAnswer: "Isthmus" },

// =================================================================
// Literature (30 Questions)
// =================================================================
// --- Easy ---
{ topic: "Literature", difficulty: "Easy", questionText: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], correctAnswer: "William Shakespeare" },
{ topic: "Literature", difficulty: "Easy", questionText: "'The Cat in the Hat' was written by which author?", options: ["Roald Dahl", "Dr. Seuss", "A.A. Milne", "Beatrix Potter"], correctAnswer: "Dr. Seuss" },
{ topic: "Literature", difficulty: "Easy", questionText: "Who is the author of the Harry Potter series?", options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"], correctAnswer: "J.K. Rowling" },
{ topic: "Literature", difficulty: "Easy", questionText: "Which book begins with the line 'Call me Ishmael'?", options: ["Treasure Island", "Moby Dick", "The Old Man and the Sea", "20,000 Leagues Under the Sea"], correctAnswer: "Moby Dick" },
{ topic: "Literature", difficulty: "Easy", questionText: "Who is the famous detective created by Arthur Conan Doyle?", options: ["Hercule Poirot", "Sam Spade", "Sherlock Holmes", "Philip Marlowe"], correctAnswer: "Sherlock Holmes" },
{ topic: "Literature", difficulty: "Easy", questionText: "What is the name of the wizard in 'The Hobbit' and 'The Lord of the Rings'?", options: ["Dumbledore", "Merlin", "Gandalf", "Saruman"], correctAnswer: "Gandalf" },
{ topic: "Literature", difficulty: "Easy", questionText: "Who wrote 'Charlie and the Chocolate Factory'?", options: ["J.K. Rowling", "C.S. Lewis", "Roald Dahl", "Dr. Seuss"], correctAnswer: "Roald Dahl" },
{ topic: "Literature", difficulty: "Easy", questionText: "In 'Alice's Adventures in Wonderland', which animal does Alice follow down a rabbit hole?", options: ["A cat", "A mouse", "A white rabbit", "A caterpillar"], correctAnswer: "A white rabbit" },
{ topic: "Literature", difficulty: "Easy", questionText: "Who wrote the American classic 'To Kill a Mockingbird'?", options: ["F. Scott Fitzgerald", "John Steinbeck", "Harper Lee", "Ernest Hemingway"], correctAnswer: "Harper Lee" },
{ topic: "Literature", difficulty: "Easy", questionText: "Which of Shakespeare's plays is a tragedy about a Danish prince?", options: ["Macbeth", "Othello", "Hamlet", "King Lear"], correctAnswer: "Hamlet" },
// --- Medium ---
{ topic: "Literature", difficulty: "Medium", questionText: "In 'The Great Gatsby', who is the narrator?", options: ["Jay Gatsby", "Daisy Buchanan", "Nick Carraway", "Tom Buchanan"], correctAnswer: "Nick Carraway" },
{ topic: "Literature", difficulty: "Medium", questionText: "The dystopian novel '1984' was written by which author?", options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Philip K. Dick"], correctAnswer: "George Orwell" },
{ topic: "Literature", difficulty: "Medium", questionText: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Mary Shelley"], correctAnswer: "Jane Austen" },
{ topic: "Literature", difficulty: "Medium", questionText: "What is the name of the protagonist in 'The Catcher in the Rye'?", options: ["Jay Gatsby", "Atticus Finch", "Holden Caulfield", "Huckleberry Finn"], correctAnswer: "Holden Caulfield" },
{ topic: "Literature", difficulty: "Medium", questionText: "Which Russian author wrote 'War and Peace' and 'Anna Karenina'?", options: ["Fyodor Dostoevsky", "Anton Chekhov", "Leo Tolstoy", "Alexander Pushkin"], correctAnswer: "Leo Tolstoy" },
{ topic: "Literature", difficulty: "Medium", questionText: "In 'The Lord of the Rings', what is the name of the evil Dark Lord?", options: ["Saruman", "Gollum", "Sauron", "Smaug"], correctAnswer: "Sauron" },
{ topic: "Literature", difficulty: "Medium", questionText: "Who wrote the poem 'The Raven'?", options: ["Walt Whitman", "Emily Dickinson", "Edgar Allan Poe", "Robert Frost"], correctAnswer: "Edgar Allan Poe" },
{ topic: "Literature", difficulty: "Medium", questionText: "What is the name of the fictional city where Batman operates?", options: ["Metropolis", "Star City", "Gotham City", "Central City"], correctAnswer: "Gotham City" },
{ topic: "Literature", difficulty: "Medium", questionText: "Who wrote the play 'Death of a Salesman'?", options: ["Tennessee Williams", "Eugene O'Neill", "Arthur Miller", "August Wilson"], correctAnswer: "Arthur Miller" },
{ topic: "Literature", difficulty: "Medium", questionText: "'Frankenstein' was written by which author?", options: ["Jane Austen", "Charlotte Brontë", "Mary Shelley", "George Eliot"], correctAnswer: "Mary Shelley" },
// --- Hard ---
{ topic: "Literature", difficulty: "Hard", questionText: "Who wrote the epic poem 'Paradise Lost'?", options: ["John Donne", "Geoffrey Chaucer", "John Milton", "William Wordsworth"], correctAnswer: "John Milton" },
{ topic: "Literature", difficulty: "Hard", questionText: "'One Hundred Years of Solitude' is a landmark novel by which author?", options: ["Jorge Luis Borges", "Julio Cortázar", "Gabriel García Márquez", "Mario Vargas Llosa"], correctAnswer: "Gabriel García Márquez" },
{ topic: "Literature", difficulty: "Hard", questionText: "What is the name of the protagonist in Fyodor Dostoevsky's 'Crime and Punishment'?", options: ["Dmitri Karamazov", "Prince Myshkin", "Raskolnikov", "Stavrogin"], correctAnswer: "Raskolnikov" },
{ topic: "Literature", difficulty: "Hard", questionText: "James Joyce's novel 'Ulysses' is based on which ancient Greek epic?", options: ["The Iliad", "The Aeneid", "The Odyssey", "The Argonautica"], correctAnswer: "The Odyssey" },
{ topic: "Literature", difficulty: "Hard", questionText: "Who wrote the influential collection of essays 'A Room of One's Own'?", options: ["Simone de Beauvoir", "George Eliot", "Virginia Woolf", "Sylvia Plath"], correctAnswer: "Virginia Woolf" },
{ topic: "Literature", difficulty: "Hard", questionText: "In Dante's 'Inferno', who guides Dante through Hell?", options: ["Beatrice", "Charon", "Virgil", "St. Lucia"], correctAnswer: "Virgil" },
{ topic: "Literature", difficulty: "Hard", questionText: "Which author is known for his 'stream of consciousness' technique in novels like 'Mrs Dalloway' and 'To the Lighthouse'?", options: ["James Joyce", "William Faulkner", "Virginia Woolf", "Marcel Proust"], correctAnswer: "Virginia Woolf" },
{ topic: "Literature", difficulty: "Hard", questionText: "Who wrote the philosophical novel 'Thus Spoke Zarathustra'?", options: ["Søren Kierkegaard", "Albert Camus", "Friedrich Nietzsche", "Jean-Paul Sartre"], correctAnswer: "Friedrich Nietzsche" },
{ topic: "Literature", difficulty: "Hard", questionText: "What is the name of the fictional county created by William Faulkner as the setting for many of his novels?", options: ["Macondo", "Wessex", "Yoknapatawpha", "Barsetshire"], correctAnswer: "Yoknapatawpha" },
{ topic: "Literature", difficulty: "Hard", questionText: "Who wrote the satirical novel 'Catch-22'?", options: ["Kurt Vonnegut", "Norman Mailer", "Joseph Heller", "Philip Roth"], correctAnswer: "Joseph Heller" },

// =================================================================
// Art (30 Questions)
// =================================================================
// --- Easy ---
{ topic: "Art", difficulty: "Easy", questionText: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: "Leonardo da Vinci" },
{ topic: "Art", difficulty: "Easy", questionText: "'The Starry Night' is a famous painting by which artist?", options: ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Rembrandt"], correctAnswer: "Vincent van Gogh" },
{ topic: "Art", difficulty: "Easy", questionText: "Which artist is famous for his sculptures of 'David' and the 'Pietà'?", options: ["Donatello", "Raphael", "Michelangelo", "Bernini"], correctAnswer: "Michelangelo" },
{ topic: "Art", difficulty: "Easy", questionText: "What is the primary color palette?", options: ["Green, Orange, Purple", "Red, Yellow, Blue", "White, Black, Gray", "Brown, Pink, Teal"], correctAnswer: "Red, Yellow, Blue" },
{ topic: "Art", difficulty: "Easy", questionText: "Which art movement is characterized by its dream-like, bizarre scenes?", options: ["Impressionism", "Cubism", "Surrealism", "Realism"], correctAnswer: "Surrealism" },
{ topic: "Art", difficulty: "Easy", questionText: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Titian"], correctAnswer: "Michelangelo" },
{ topic: "Art", difficulty: "Easy", questionText: "What is a self-portrait?", options: ["A painting of a landscape", "A painting of an animal", "A portrait of the artist created by the artist", "A sculpture of a famous person"], correctAnswer: "A portrait of the artist created by the artist" },
{ topic: "Art", difficulty: "Easy", questionText: "Which Dutch artist is known for painting 'Girl with a Pearl Earring'?", options: ["Rembrandt", "Frans Hals", "Johannes Vermeer", "Jan van Eyck"], correctAnswer: "Johannes Vermeer" },
{ topic: "Art", difficulty: "Easy", questionText: "The Statue of Liberty was a gift to the United States from which country?", options: ["United Kingdom", "Spain", "France", "Italy"], correctAnswer: "France" },
{ topic: "Art", difficulty: "Easy", questionText: "Which art form involves carving wood, stone, or metal?", options: ["Painting", "Drawing", "Sculpture", "Photography"], correctAnswer: "Sculpture" },
// --- Medium ---
{ topic: "Art", difficulty: "Medium", questionText: "The art movement Cubism was pioneered by which two artists?", options: ["Monet and Renoir", "Dalí and Magritte", "Picasso and Braque", "van Gogh and Gauguin"], correctAnswer: "Picasso and Braque" },
{ topic: "Art", difficulty: "Medium", questionText: "Surrealism was heavily influenced by the theories of which psychoanalyst?", options: ["Carl Jung", "Alfred Adler", "Sigmund Freud", "Erik Erikson"], correctAnswer: "Sigmund Freud" },
{ topic: "Art", difficulty: "Medium", questionText: "Who is known for her large-scale paintings of flowers and New Mexico landscapes?", options: ["Frida Kahlo", "Mary Cassatt", "Georgia O'Keeffe", "Tamara de Lempicka"], correctAnswer: "Georgia O'Keeffe" },
{ topic: "Art", difficulty: "Medium", questionText: "The art movement 'Impressionism' originated in which city?", options: ["Rome", "London", "Paris", "Amsterdam"], correctAnswer: "Paris" },
{ topic: "Art", difficulty: "Medium", questionText: "Which artist is famous for his 'drip' painting technique?", options: ["Andy Warhol", "Roy Lichtenstein", "Jackson Pollock", "Mark Rothko"], correctAnswer: "Jackson Pollock" },
{ topic: "Art", difficulty: "Medium", questionText: "Who designed the iconic 'Campbell's Soup Cans' pop art series?", options: ["Jasper Johns", "Robert Rauschenberg", "Andy Warhol", "Keith Haring"], correctAnswer: "Andy Warhol" },
{ topic: "Art", difficulty: "Medium", questionText: "The 'Renaissance' is a French word that means what?", options: ["Revolution", "Rebirth", "Reformation", "Revelation"], correctAnswer: "Rebirth" },
{ topic: "Art", difficulty: "Medium", questionText: "Which Mexican artist is famous for her self-portraits and surrealist works?", options: ["Diego Rivera", "David Alfaro Siqueiros", "Frida Kahlo", "Rufino Tamayo"], correctAnswer: "Frida Kahlo" },
{ topic: "Art", difficulty: "Medium", questionText: "What is the term for a work of art made from the assembling of different forms, thus creating a new whole?", options: ["Fresco", "Mosaic", "Collage", "Tapestry"], correctAnswer: "Collage" },
{ topic: "Art", difficulty: "Medium", questionText: "'The Thinker' is a famous bronze sculpture by which artist?", options: ["Michelangelo", "Donatello", "Auguste Rodin", "Constantin Brancusi"], correctAnswer: "Auguste Rodin" },
// --- Hard ---
{ topic: "Art", difficulty: "Hard", questionText: "The 'Bauhaus' was a German art school operational from 1919 to 1933. What was its primary philosophy?", options: ["Art for art's sake", "Separating fine arts from crafts", "Uniting art and industrial design", "Promoting classical art forms"], correctAnswer: "Uniting art and industrial design" },
{ topic: "Art", difficulty: "Hard", questionText: "Who is the artist behind 'The Persistence of Memory', famous for its melting clocks?", options: ["René Magritte", "Max Ernst", "Salvador Dalí", "Joan Miró"], correctAnswer: "Salvador Dalí" },
{ topic: "Art", difficulty: "Hard", questionText: "The Japanese art of paper folding is known as what?", options: ["Ikebana", "Sumi-e", "Origami", "Ukiyo-e"], correctAnswer: "Origami" },
{ topic: "Art", difficulty: "Hard", questionText: "Which art movement, a reaction against Abstract Expressionism, used imagery from popular and mass culture?", options: ["Minimalism", "Conceptual Art", "Pop Art", "Op Art"], correctAnswer: "Pop Art" },
{ topic: "Art", difficulty: "Hard", questionText: "The 'Fauvism' art movement was led by which artist, known for his intense use of color?", options: ["Georges Braque", "André Derain", "Henri Matisse", "Raoul Dufy"], correctAnswer: "Henri Matisse" },
{ topic: "Art", difficulty: "Hard", questionText: "What is the name of the technique of painting on moist plaster, famously used in the Sistine Chapel?", options: ["Tempera", "Gouache", "Fresco", "Encaustic"], correctAnswer: "Fresco" },
{ topic: "Art", difficulty: "Hard", questionText: "Which artist cut off a part of his own ear?", options: ["Paul Gauguin", "Edvard Munch", "Vincent van Gogh", "Egon Schiele"], correctAnswer: "Vincent van Gogh" },
{ topic: "Art", difficulty: "Hard", questionText: "The art of beautiful handwriting is called what?", options: ["Typography", "Lithography", "Calligraphy", "Serigraphy"], correctAnswer: "Calligraphy" },
{ topic: "Art", difficulty: "Hard", questionText: "'Guernica', one of Picasso's most famous works, is a protest against what?", options: ["World War I", "The Spanish Civil War", "The French Revolution", "World War II"], correctAnswer: "The Spanish Civil War" },
{ topic: "Art", difficulty: "Hard", questionText: "Which artist is a key figure in the Abstract Expressionist movement and known for his 'color field' paintings?", options: ["Willem de Kooning", "Jackson Pollock", "Mark Rothko", "Franz Kline"], correctAnswer: "Mark Rothko" },

// =================================================================
// Mythology (30 Questions)
// =================================================================
// --- Easy ---
{ topic: "Mythology", difficulty: "Easy", questionText: "In Greek mythology, who is the king of the gods?", options: ["Hades", "Poseidon", "Zeus", "Apollo"], correctAnswer: "Zeus" },
{ topic: "Mythology", difficulty: "Easy", questionText: "Who is the Norse god of thunder?", options: ["Odin", "Loki", "Thor", "Heimdall"], correctAnswer: "Thor" },
{ topic: "Mythology", difficulty: "Easy", questionText: "In Egyptian mythology, who is the god of the afterlife and mummification?", options: ["Ra", "Horus", "Anubis", "Osiris"], correctAnswer: "Anubis" },
{ topic: "Mythology", difficulty: "Easy", questionText: "Who is the Roman goddess of love and beauty?", options: ["Juno", "Minerva", "Venus", "Diana"], correctAnswer: "Venus" },
{ topic: "Mythology", difficulty: "Easy", questionText: "Which mythical creature is a horse with a single horn on its forehead?", options: ["Pegasus", "Centaur", "Unicorn", "Griffin"], correctAnswer: "Unicorn" },
{ topic: "Mythology", difficulty: "Easy", questionText: "In Greek mythology, who is the goddess of wisdom and warfare?", options: ["Hera", "Artemis", "Athena", "Aphrodite"], correctAnswer: "Athena" },
{ topic: "Mythology", difficulty: "Easy", questionText: "What is the name of the three-headed dog that guards the underworld in Greek mythology?", options: ["Hydra", "Chimera", "Cerberus", "Orthrus"], correctAnswer: "Cerberus" },
{ topic: "Mythology", difficulty: "Easy", questionText: "Who is the hero in Greek mythology known for his incredible strength and Twelve Labors?", options: ["Perseus", "Theseus", "Hercules", "Achilles"], correctAnswer: "Hercules" },
{ topic: "Mythology", difficulty: "Easy", questionText: "In Roman mythology, who is the king of the gods, equivalent to the Greek Zeus?", options: ["Mars", "Neptune", "Jupiter", "Pluto"], correctAnswer: "Jupiter" },
{ topic: "Mythology", difficulty: "Easy", questionText: "Which mythical creatures were beautiful women who lured sailors to their deaths with their enchanting songs?", options: ["Harpies", "Nymphs", "Sirens", "Furies"], correctAnswer: "Sirens" },
// --- Medium ---
{ topic: "Mythology", difficulty: "Medium", questionText: "Who was the Roman equivalent of the Greek god Ares, the god of war?", options: ["Vulcan", "Mercury", "Mars", "Bacchus"], correctAnswer: "Mars" },
{ topic: "Mythology", difficulty: "Medium", questionText: "In Hindu mythology, who is the preserver god, one of the Trimurti?", options: ["Brahma", "Shiva", "Vishnu", "Ganesha"], correctAnswer: "Vishnu" },
{ topic: "Mythology", difficulty: "Medium", questionText: "What creature in Greek mythology was half-man, half-bull, and lived in the Labyrinth?", options: ["Centaur", "Satyr", "Minotaur", "Cyclops"], correctAnswer: "Minotaur" },
{ topic: "Mythology", difficulty: "Medium", questionText: "In Norse mythology, what is the name of the world tree that connects the nine worlds?", options: ["Asgard", "Midgard", "Yggdrasil", "Bifrost"], correctAnswer: "Yggdrasil" },
{ topic: "Mythology", difficulty: "Medium", questionText: "Who is the Greek god of the sea, earthquakes, and horses?", options: ["Hades", "Zeus", "Poseidon", "Hermes"], correctAnswer: "Poseidon" },
{ topic: "Mythology", difficulty: "Medium", questionText: "In Egyptian mythology, who is the sun god?", options: ["Anubis", "Thoth", "Ra", "Set"], correctAnswer: "Ra" },
{ topic: "Mythology", difficulty: "Medium", questionText: "What was the name of the woman who opened a box containing all the evils of the world?", options: ["Helen", "Cassandra", "Pandora", "Penelope"], correctAnswer: "Pandora" },
{ topic: "Mythology", difficulty: "Medium", questionText: "In Japanese mythology, who is the storm god, brother of the sun goddess Amaterasu?", options: ["Tsukuyomi", "Hachiman", "Susanoo", "Inari"], correctAnswer: "Susanoo" },
{ topic: "Mythology", difficulty: "Medium", questionText: "Who is the trickster god in Norse mythology?", options: ["Odin", "Thor", "Loki", "Baldr"], correctAnswer: "Loki" },
{ topic: "Mythology", difficulty: "Medium", questionText: "Which hero from Greek mythology slayed Medusa?", options: ["Hercules", "Theseus", "Perseus", "Jason"], correctAnswer: "Perseus" },
// --- Hard ---
{ topic: "Mythology", difficulty: "Hard", questionText: "In Japanese mythology, who is the goddess of the sun and the universe?", options: ["Izanami", "Uzume", "Amaterasu", "Konohanasakuya-hime"], correctAnswer: "Amaterasu" },
{ topic: "Mythology", difficulty: "Hard", questionText: "What is the name of the underworld in Norse mythology, ruled by the goddess Hel?", options: ["Valhalla", "Niflheim", "Helheim", "Muspelheim"], correctAnswer: "Helheim" },
{ topic: "Mythology", difficulty: "Hard", questionText: "In Mesopotamian mythology, who was the hero of an epic that searched for immortality?", options: ["Enkidu", "Marduk", "Gilgamesh", "Sargon"], correctAnswer: "Gilgamesh" },
{ topic: "Mythology", difficulty: "Hard", questionText: "In Irish mythology, who is the hero known for his 'warp spasm' and single-handedly defending Ulster?", options: ["Fionn mac Cumhaill", "Lugh", "Cú Chulainn", "Oisín"], correctAnswer: "Cú Chulainn" },
{ topic: "Mythology", difficulty: "Hard", questionText: "What is the name of the primordial void from which everything emerged in Greek mythology?", options: ["Tartarus", "Erebus", "Chaos", "Gaia"], correctAnswer: "Chaos" },
{ topic: "Mythology", difficulty: "Hard", questionText: "In Aztec mythology, who was the feathered serpent god of wind, wisdom, and the morning star?", options: ["Huitzilopochtli", "Tezcatlipoca", "Quetzalcoatl", "Tlaloc"], correctAnswer: "Quetzalcoatl" },
{ topic: "Mythology", difficulty: "Hard", questionText: "What is the name of the food and drink of the gods in Greek mythology, which offered immortality?", options: ["Nectar and Mead", "Ambrosia and Nectar", "Honey and Wine", "Manna and Ambrosia"], correctAnswer: "Ambrosia and Nectar" },
{ topic: "Mythology", difficulty: "Hard", questionText: "In Hindu mythology, what is the name of the celestial weapon of Indra, the king of the gods?", options: ["Brahmastra", "Pashupatastra", "Vajra", "Sudarshana Chakra"], correctAnswer: "Vajra" },
{ topic: "Mythology", difficulty: "Hard", questionText: "Who is the ferryman of the dead across the river Styx in Greek mythology?", options: ["Hades", "Thanatos", "Charon", "Hypnos"], correctAnswer: "Charon" },
{ topic: "Mythology", difficulty: "Hard", questionText: "In Norse mythology, what is Ragnarök?", options: ["The creation of the world", "A great celebration", "The final battle and end of the world", "The journey to the underworld"], correctAnswer: "The final battle and end of the world" },

// =================================================================
// Movies (30 Questions)
// =================================================================
// --- Easy ---
{ topic: "Movies", difficulty: "Easy", questionText: "Who directed the movie 'Jaws'?", options: ["George Lucas", "Francis Ford Coppola", "Steven Spielberg", "Martin Scorsese"], correctAnswer: "Steven Spielberg" },
{ topic: "Movies", difficulty: "Easy", questionText: "Which movie features the line, 'May the Force be with you'?", options: ["Star Trek", "The Lord of the Rings", "Star Wars", "Harry Potter"], correctAnswer: "Star Wars" },
{ topic: "Movies", difficulty: "Easy", questionText: "In 'The Wizard of Oz', what does Dorothy say to go home?", options: ["'I want to go home'", "'Take me back to Kansas'", "'There's no place like home'", "'Magic shoes, take me home'"], correctAnswer: "'There's no place like home'" },
{ topic: "Movies", difficulty: "Easy", questionText: "Which animated movie features a friendly green ogre?", options: ["Ice Age", "Madagascar", "Shrek", "Finding Nemo"], correctAnswer: "Shrek" },
{ topic: "Movies", difficulty: "Easy", questionText: "Who played the character of Jack Dawson in the movie 'Titanic'?", options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"], correctAnswer: "Leonardo DiCaprio" },
{ topic: "Movies", difficulty: "Easy", questionText: "What is the name of the young lion who is the protagonist of 'The Lion King'?", options: ["Mufasa", "Scar", "Simba", "Zazu"], correctAnswer: "Simba" },
{ topic: "Movies", difficulty: "Easy", questionText: "Which film series is about a school for wizards called Hogwarts?", options: ["The Chronicles of Narnia", "Percy Jackson", "Harry Potter", "The Hunger Games"], correctAnswer: "Harry Potter" },
{ topic: "Movies", difficulty: "Easy", questionText: "Who is the director of 'Avatar' and 'Titanic'?", options: ["Christopher Nolan", "Peter Jackson", "James Cameron", "Quentin Tarantino"], correctAnswer: "James Cameron" },
{ topic: "Movies", difficulty: "Easy", questionText: "What type of animal is Nemo in the movie 'Finding Nemo'?", options: ["A shark", "A turtle", "A clownfish", "A dolphin"], correctAnswer: "A clownfish" },
{ topic: "Movies", difficulty: "Easy", questionText: "Which superhero is known as the 'Man of Steel'?", options: ["Batman", "Spider-Man", "Superman", "Iron Man"], correctAnswer: "Superman" },
// --- Medium ---
{ topic: "Movies", difficulty: "Medium", questionText: "Who won the Academy Award for Best Director for 'Parasite'?", options: ["Quentin Tarantino", "Sam Mendes", "Bong Joon-ho", "Martin Scorsese"], correctAnswer: "Bong Joon-ho" },
{ topic: "Movies", difficulty: "Medium", questionText: "In 'The Matrix', what color pill does Neo take?", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Red" },
{ topic: "Movies", difficulty: "Medium", questionText: "Which movie features a character named Forrest Gump?", options: ["The Green Mile", "Saving Private Ryan", "Forrest Gump", "Cast Away"], correctAnswer: "Forrest Gump" },
{ topic: "Movies", difficulty: "Medium", questionText: "Who directed 'Pulp Fiction' and 'Kill Bill'?", options: ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Christopher Nolan"], correctAnswer: "Quentin Tarantino" },
{ topic: "Movies", difficulty: "Medium", questionText: "What is the highest-grossing film of all time (unadjusted for inflation)?", options: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars: The Force Awakens"], correctAnswer: "Avatar" },
{ topic: "Movies", difficulty: "Medium", questionText: "Who played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"], correctAnswer: "Heath Ledger" },
{ topic: "Movies", difficulty: "Medium", questionText: "Which film won the first-ever Academy Award for Best Picture?", options: ["The Jazz Singer", "Metropolis", "Wings", "Sunrise: A Song of Two Humans"], correctAnswer: "Wings" },
{ topic: "Movies", difficulty: "Medium", questionText: "What is the name of the fictional African country in 'Black Panther'?", options: ["Genosha", "Latveria", "Wakanda", "Sokovia"], correctAnswer: "Wakanda" },
{ topic: "Movies", difficulty: "Medium", questionText: "Which movie is famous for the line, 'Here's looking at you, kid'?", options: ["The Maltese Falcon", "Citizen Kane", "Casablanca", "Gone with the Wind"], correctAnswer: "Casablanca" },
{ topic: "Movies", difficulty: "Medium", questionText: "In 'The Silence of the Lambs', who is the brilliant but cannibalistic serial killer?", options: ["Buffalo Bill", "Dr. Frederick Chilton", "Hannibal Lecter", "Jame Gumb"], correctAnswer: "Hannibal Lecter" },
// --- Hard ---
{ topic: "Movies", difficulty: "Hard", questionText: "Who directed the 1957 classic '12 Angry Men'?", options: ["Alfred Hitchcock", "Orson Welles", "Sidney Lumet", "Billy Wilder"], correctAnswer: "Sidney Lumet" },
{ topic: "Movies", difficulty: "Hard", questionText: "What is the name of the artificial intelligence in the movie '2001: A Space Odyssey'?", options: ["GLaDOS", "Skynet", "HAL 9000", "VIKI"], correctAnswer: "HAL 9000" },
{ topic: "Movies", difficulty: "Hard", questionText: "Which film is known for its revolutionary use of non-linear narrative and is a landmark of French New Wave cinema?", options: ["The 400 Blows", "Jules and Jim", "Breathless", "Hiroshima mon amour"], correctAnswer: "Breathless" },
{ topic: "Movies", difficulty: "Hard", questionText: "Who won an Academy Award for directing 'The Godfather'?", options: ["Martin Scorsese", "Stanley Kubrick", "Francis Ford Coppola", "Sidney Lumet"], correctAnswer: "Francis Ford Coppola" },
{ topic: "Movies", difficulty: "Hard", questionText: "What is the term for the film-making technique where the camera seems to be the eye of a character?", options: ["Fourth wall break", "Point of view shot", "Dutch angle", "Long take"], correctAnswer: "Point of view shot" },
{ topic: "Movies", difficulty: "Hard", questionText: "Which Japanese director is acclaimed for films like 'Seven Samurai' and 'Rashomon'?", options: ["Yasujirō Ozu", "Kenji Mizoguchi", "Akira Kurosawa", "Hayao Miyazaki"], correctAnswer: "Akira Kurosawa" },
{ topic: "Movies", difficulty: "Hard", questionText: "What is 'MacGuffin', a term popularized by Alfred Hitchcock?", options: ["A type of camera lens", "A plot device that motivates characters but has little other relevance", "A specific editing technique", "A character archetype"], correctAnswer: "A plot device that motivates characters but has little other relevance" },
{ topic: "Movies", difficulty: "Hard", questionText: "Which movie won the Palme d'Or at the 1994 Cannes Film Festival?", options: ["Forrest Gump", "The Shawshank Redemption", "Pulp Fiction", "Schindler's List"], correctAnswer: "Pulp Fiction" },
{ topic: "Movies", difficulty: "Hard", questionText: "In the movie 'Blade Runner', what are the bioengineered androids called?", options: ["Cylons", "Synthetics", "Replicants", "Hosts"], correctAnswer: "Replicants" },
{ topic: "Movies", difficulty: "Hard", questionText: "Who composed the iconic score for 'Star Wars'?", options: ["Hans Zimmer", "Howard Shore", "John Williams", "Ennio Morricone"], correctAnswer: "John Williams" }
];









module.exports = questions;
