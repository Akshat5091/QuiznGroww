/**
 * Additional high-yield question datasets for QuiznGroww
 * Topics:
 * 1. Computer Science & Web Dev (45 questions)
 * 2. World Affairs & GK (45 questions)
 * 3. Finance & Economy (45 questions)
 * 4. Space & Astronomy (45 questions)
 * 5. Environment & Wildlife (45 questions)
 * 6. Gaming & Esports (45 questions)
 * 7. Mathematics & Logic (45 questions)
 * 8. Expansion sets for History, Geography, Literature, Art, Mythology, Movies (15 Hard each = 90 questions)
 */

const additionalQuestions = [
  // =================================================================
  // Computer Science & Web Development (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyperlink and Text Media Language',
      'Home Tool Markup Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
    explanation:
      'HTML is the standard markup language used to structure web pages and their content.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText:
      'Which keyword in modern JavaScript is used to declare a variable that cannot be reassigned?',
    options: ['var', 'let', 'const', 'def'],
    correctAnswer: 'const',
    explanation:
      "'const' creates an immutable block-scoped binding that prevents direct variable reassignment.",
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What does CSS stand for in web development?',
    options: [
      'Cascading Style Sheets',
      'Computer Style System',
      'Creative Styling Syntax',
      'Central Sheet System',
    ],
    correctAnswer: 'Cascading Style Sheets',
    explanation:
      'CSS describes how HTML elements are to be displayed on screen, paper, or in other media.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'Which data structure follows the First-In, First-Out (FIFO) principle?',
    options: ['Stack', 'Queue', 'Binary Tree', 'Graph'],
    correctAnswer: 'Queue',
    explanation:
      'A Queue operates on a FIFO basis, where elements are inserted at the back and removed from the front.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What is the primary role of an IP address in networking?',
    options: [
      'To identify a device uniquely on a network',
      'To encrypt user data',
      'To measure Internet connection speed',
      'To translate programming code',
    ],
    correctAnswer: 'To identify a device uniquely on a network',
    explanation: 'An IP address uniquely identifies each host device connected to an IP network.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'Which of these is a widely-used version control system?',
    options: ['Git', 'Docker', 'Nginx', 'Redis'],
    correctAnswer: 'Git',
    explanation:
      'Git is a distributed version control system developed by Linus Torvalds for tracking code changes.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'In Python, which function is used to output text to the console?',
    options: ['console.log()', 'print()', 'System.out.println()', 'echo()'],
    correctAnswer: 'print()',
    explanation:
      "Python's built-in print() function writes the specified message to the screen or standard output.",
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Logic',
      'Standard Question Language',
      'Sequential Query Library',
    ],
    correctAnswer: 'Structured Query Language',
    explanation:
      'SQL is the standard language for storing, manipulating, and retrieving data in relational databases.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'Which HTTP status code indicates a successful request?',
    options: ['200 OK', '404 Not Found', '500 Internal Error', '301 Moved Permanently'],
    correctAnswer: '200 OK',
    explanation:
      'HTTP 200 signifies that the request has succeeded and the server returned the requested data.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What is the smallest unit of digital data in computing?',
    options: ['Byte', 'Bit', 'Nibble', 'Kilobyte'],
    correctAnswer: 'Bit',
    explanation:
      'A bit (binary digit) is the basic unit of information in computing, possessing a value of either 0 or 1.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'Which protocol is commonly used to browse secure websites on the internet?',
    options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
    correctAnswer: 'HTTPS',
    explanation:
      'HTTPS (Hypertext Transfer Protocol Secure) encrypts communication over computer networks using TLS/SSL.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText:
      'Which programming language is predominantly executed natively within web browsers?',
    options: ['C++', 'Java', 'JavaScript', 'Ruby'],
    correctAnswer: 'JavaScript',
    explanation:
      'JavaScript is the native programming language of the web, executed directly by modern browser engines.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What does RAM stand for in computer hardware?',
    options: [
      'Random Access Memory',
      'Read Access Module',
      'Rapid Action Memory',
      'Run Acceleration Matrix',
    ],
    correctAnswer: 'Random Access Memory',
    explanation:
      'RAM is volatile memory used by CPUs to temporarily store working data and machine code.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'Which data structure operates on a Last-In, First-Out (LIFO) model?',
    options: ['Queue', 'Stack', 'Linked List', 'Heap'],
    correctAnswer: 'Stack',
    explanation: 'A Stack pushes elements on top and pops them from the top, obeying LIFO order.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Easy',
    questionText: 'What file extension is typically used for JavaScript files?',
    options: ['.js', '.java', '.py', '.html'],
    correctAnswer: '.js',
    explanation: 'JavaScript source files are identified by the standard .js file extension.',
  },

  // --- 15 Medium Questions ---
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'What is the worst-case time complexity of QuickSort?',
    options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'],
    correctAnswer: 'O(n²)',
    explanation:
      'QuickSort degrades to O(n²) when the pivot selection consistently splits the array into imbalanced partitions.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'In relational database theory, what does ACID stand for?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Accuracy, Control, Integrity, Data',
      'Access, Concurrency, Indexing, Delivery',
      'Automatic, Continuous, Independent, Dynamic',
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    explanation:
      'ACID represents the fundamental properties that guarantee database transactions are processed reliably.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText:
      'Which design pattern ensures a class has only one instance and provides a global point of access to it?',
    options: ['Factory Pattern', 'Singleton Pattern', 'Observer Pattern', 'Adapter Pattern'],
    correctAnswer: 'Singleton Pattern',
    explanation:
      'The Singleton pattern restricts instantiation of a class to a single object across the entire application.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText:
      'What is the average time complexity to look up a key in a well-balanced Hash Map?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(1)',
    explanation:
      'Hash maps compute an index from the key via hashing, achieving constant average-time O(1) lookups.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: "In JavaScript, what does 'event bubbling' refer to?",
    options: [
      'Events propagating upward from target to parent elements',
      'Events firing only when the mouse hovers',
      'Events canceling asynchronous promises',
      'Events executing repeatedly in a loop',
    ],
    correctAnswer: 'Events propagating upward from target to parent elements',
    explanation:
      'Event bubbling is the phase in the DOM event flow where the event traverses upward to ancestor elements.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText:
      'Which HTTP method is specifically intended to be idempotent according to the HTTP/1.1 specification?',
    options: ['POST', 'PUT', 'PATCH', 'CONNECT'],
    correctAnswer: 'PUT',
    explanation:
      'PUT is idempotent: sending identical PUT requests repeatedly produces the exact same server resource state.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'What does CORS stand for in web security?',
    options: [
      'Cross-Origin Resource Sharing',
      'Central Online Routing System',
      'Cross-Object Reference Security',
      'Client-Oriented Remote Standard',
    ],
    correctAnswer: 'Cross-Origin Resource Sharing',
    explanation:
      'CORS is an HTTP-header based mechanism that allows servers to indicate origins other than its own that can load resources.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'In object-oriented programming, what is polymorphism?',
    options: [
      'The ability of different objects to respond to the same interface or method call',
      'Hiding internal data behind private fields',
      'Deriving a new class from an existing class',
      'Combining data and functions into a single class',
    ],
    correctAnswer:
      'The ability of different objects to respond to the same interface or method call',
    explanation:
      'Polymorphism allows objects of different types to be treated uniformly through a shared interface.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'Which command in Git creates and switches to a new branch in a single step?',
    options: [
      'git checkout -b <branch>',
      'git branch -new <branch>',
      'git switch -c <branch>',
      'Both git checkout -b and git switch -c',
    ],
    correctAnswer: 'Both git checkout -b and git switch -c',
    explanation:
      "Both 'git checkout -b' and modern 'git switch -c' create and immediately check out the newly created branch.",
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'What is the primary function of a reverse proxy like Nginx?',
    options: [
      'Accepting client requests and forwarding them to backend servers',
      'Compiling JavaScript to machine code',
      'Managing database schemas and migrations',
      'Replacing the browser rendering engine',
    ],
    correctAnswer: 'Accepting client requests and forwarding them to backend servers',
    explanation:
      'A reverse proxy fronts backend servers, providing load balancing, SSL termination, and caching.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText:
      'In the OSI model, which layer is responsible for routing packets across interconnected networks?',
    options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
    correctAnswer: 'Network Layer',
    explanation:
      'Layer 3 (Network Layer) handles packet forwarding, host addressing (IP), and router path selection.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText:
      'Which JavaScript array method creates a new array with all elements that pass a test implemented by the provided function?',
    options: ['map()', 'filter()', 'reduce()', 'forEach()'],
    correctAnswer: 'filter()',
    explanation:
      'Array.prototype.filter() returns a new array containing all elements that evaluate to truthy in the callback.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'What does the CAP theorem assert about distributed data stores?',
    options: [
      'You can guarantee at most two of Consistency, Availability, and Partition Tolerance',
      'Calculations, Applications, and Performance must scale equally',
      'Concurrency and Persistence require dedicated hardware',
      'All distributed nodes must share the same clock',
    ],
    correctAnswer:
      'You can guarantee at most two of Consistency, Availability, and Partition Tolerance',
    explanation:
      "Eric Brewer's CAP theorem proves that in the presence of a network partition, a distributed system must choose Consistency or Availability.",
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'Which tree traversal visits the Left subtree, then Root, then Right subtree?',
    options: [
      'In-order Traversal',
      'Pre-order Traversal',
      'Post-order Traversal',
      'Level-order Traversal',
    ],
    correctAnswer: 'In-order Traversal',
    explanation:
      'In-order traversal processes nodes in Left -> Root -> Right sequence, producing sorted order in a Binary Search Tree.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Medium',
    questionText: 'What is the difference between synchronous and asynchronous execution?',
    options: [
      'Synchronous blocks further execution until complete; asynchronous executes concurrently without blocking',
      'Synchronous is executed on the GPU, asynchronous on the CPU',
      'Synchronous only works in compiled languages',
      'There is no functional difference',
    ],
    correctAnswer:
      'Synchronous blocks further execution until complete; asynchronous executes concurrently without blocking',
    explanation:
      'Synchronous operations halt subsequent line execution, while asynchronous operations allow the program to proceed.',
  },

  // --- 15 Hard Questions ---
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      "In operating systems, which of the following is NOT one of Coffman's four conditions required for a deadlock to occur?",
    options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Paging Segmentation'],
    correctAnswer: 'Paging Segmentation',
    explanation:
      'The 4 Coffman conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'What is the time complexity of Dijkstra’s shortest path algorithm implemented with a Min-Heap (priority queue)?',
    options: ['O((V + E) log V)', 'O(V²)', 'O(E² log V)', 'O(V log E)'],
    correctAnswer: 'O((V + E) log V)',
    explanation:
      "Using a binary min-heap priority queue, Dijkstra's algorithm performs each vertex and edge relaxation in O((V + E) log V).",
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'What is the main advantage of a B+ Tree over a traditional B Tree in relational database indexing?',
    options: [
      'All records are stored in leaf nodes linked sequentially, accelerating range queries',
      'It has a lower theoretical space complexity',
      'It eliminates hash collisions completely',
      'It requires no rebalancing operations',
    ],
    correctAnswer:
      'All records are stored in leaf nodes linked sequentially, accelerating range queries',
    explanation:
      'In a B+ Tree, leaf nodes form a linked list containing all keys and pointers, enabling blazing fast range scans.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'In the JavaScript V8 engine, which component is responsible for just-in-time (JIT) optimizing compilation of hot functions?',
    options: ['Ignition', 'TurboFan', 'Blink', 'SpiderMonkey'],
    correctAnswer: 'TurboFan',
    explanation:
      'V8 utilizes Ignition as its bytecode interpreter and TurboFan as its optimizing compiler for performance-critical bytecode.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText: 'What problem does the Raft consensus algorithm solve in distributed systems?',
    options: [
      'Replicated state machine consensus with an elected leader',
      'Garbage collection in multi-threaded runtimes',
      'Public-key cryptography validation',
      'DNS routing table updates',
    ],
    correctAnswer: 'Replicated state machine consensus with an elected leader',
    explanation:
      'Raft is an understandable consensus algorithm that manages replicated logs through leader election and log replication.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      "Which TCP congestion control mechanism determines the network's maximum available throughput by starting conservatively and doubling window size every RTT?",
    options: ['Slow Start', 'Fast Retransmit', 'Additive Increase', 'Window Scaling'],
    correctAnswer: 'Slow Start',
    explanation:
      'TCP Slow Start exponentially increases the congestion window by doubling it every Round Trip Time until a threshold is reached.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText: 'What is the key characteristic of an idempotent REST API operation?',
    options: [
      'Multiple identical requests produce the exact same outcome on the server as a single request',
      'It executes faster on every consecutive invocation',
      'It requires no authentication headers',
      'It can only be invoked using HTTP POST',
    ],
    correctAnswer:
      'Multiple identical requests produce the exact same outcome on the server as a single request',
    explanation:
      'Idempotency means that N > 0 identical requests result in the exact same state as 1 request (e.g. GET, PUT, DELETE).',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      "What vulnerability occurs when an application includes untrusted data in an HTTP response without proper validation, executing malicious scripts in the victim's browser?",
    options: [
      'Cross-Site Scripting (XSS)',
      'SQL Injection',
      'Server-Side Request Forgery (SSRF)',
      'Denial of Service',
    ],
    correctAnswer: 'Cross-Site Scripting (XSS)',
    explanation:
      'XSS flaws allow attackers to inject client-side scripts into web pages viewed by other users.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'Which algorithm is used to detect cycle presence in a singly linked list in O(1) auxiliary space?',
    options: [
      "Floyd's Tortoise and Hare Algorithm",
      'Bellman-Ford Algorithm',
      "Kosaraju's Algorithm",
      "Tarjan's Algorithm",
    ],
    correctAnswer: "Floyd's Tortoise and Hare Algorithm",
    explanation:
      "Floyd's cycle-finding algorithm moves two pointers at different speeds (1 step and 2 steps) to detect loops in O(1) space.",
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText: "In database isolation levels, what is a 'Phantom Read'?",
    options: [
      'When a transaction re-executes a range query and discovers rows that have been inserted or committed by another transaction',
      'Reading data from a deleted table',
      'A crash recovery state where logs are incomplete',
      'Reading modified data that has not yet been committed',
    ],
    correctAnswer:
      'When a transaction re-executes a range query and discovers rows that have been inserted or committed by another transaction',
    explanation:
      'Phantom reads occur under Repeatable Read when new matching rows are committed by another transaction in the background.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText: 'What is the purpose of the Shadow DOM in modern Web Components?',
    options: [
      'Encapsulating markup and styles so they do not leak out or collide with outer CSS',
      'Pre-rendering web pages on the GPU',
      'Accelerating WebSockets performance',
      'Generating sitemaps automatically',
    ],
    correctAnswer:
      'Encapsulating markup and styles so they do not leak out or collide with outer CSS',
    explanation:
      'Shadow DOM provides true DOM and CSS scoping for components, isolating internal nodes from external style rules.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'In cryptographic hashing, what property ensures it is computationally infeasible to find ANY two different messages that yield the exact same hash?',
    options: ['Collision Resistance', 'Pre-image Resistance', 'Avalanche Effect', 'Entropy Factor'],
    correctAnswer: 'Collision Resistance',
    explanation:
      'Collision resistance ensures that finding any x and y such that H(x) = H(y) is computationally impossible.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'Which CPU cache level is typically the fastest and closest to the core registers?',
    options: ['L1 Cache', 'L2 Cache', 'L3 Cache', 'Instruction Pipeline'],
    correctAnswer: 'L1 Cache',
    explanation:
      'Level 1 (L1) cache is built directly onto the CPU core and runs at core clock speed with 1-4 cycle latency.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText:
      'What is the primary difference between a process and a thread in OS terminology?',
    options: [
      'Processes have separate address spaces; threads within the same process share the same memory space',
      'Threads run on disk while processes run in RAM',
      'Processes cannot communicate with each other',
      'Threads cannot be executed on multiple cores',
    ],
    correctAnswer:
      'Processes have separate address spaces; threads within the same process share the same memory space',
    explanation:
      'A process owns isolated virtual memory, while threads of a process share code, data, and OS descriptors.',
  },
  {
    topic: 'Computer Science',
    difficulty: 'Hard',
    questionText: 'What does the Bloom Filter data structure guarantee?',
    options: [
      'Zero false negatives (if it says an element is absent, it is definitely absent)',
      'Zero false positives',
      'Constant-time sorting',
      'Exact element counts',
    ],
    correctAnswer:
      'Zero false negatives (if it says an element is absent, it is definitely absent)',
    explanation:
      'A Bloom filter is a probabilistic data structure: false positive matches are possible, but false negatives are impossible.',
  },

  // =================================================================
  // World Affairs & General Knowledge (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'Where are the headquarters of the United Nations (UN) located?',
    options: ['New York City, USA', 'Geneva, Switzerland', 'London, UK', 'Paris, France'],
    correctAnswer: 'New York City, USA',
    explanation:
      'The official headquarters of the United Nations is situated in Midtown Manhattan, New York City.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: "Which country is famously known as the 'Land of the Rising Sun'?",
    options: ['China', 'Japan', 'South Korea', 'Thailand'],
    correctAnswer: 'Japan',
    explanation:
      "Japan is called 'Nihon' or 'Nippon' locally, which literally translates to 'origin of the sun'.",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'What is the official currency of the United Kingdom?',
    options: ['Euro', 'Pound Sterling', 'Dollar', 'Franc'],
    correctAnswer: 'Pound Sterling',
    explanation:
      'The pound sterling (GBP) is the official currency of the United Kingdom and its territories.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'Which is the largest ocean on Earth by surface area?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean',
    explanation:
      "The Pacific Ocean covers more than 30% of the Earth's surface, making it the largest of all oceans.",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'In which country was the 2024 Summer Olympic Games hosted?',
    options: ['Tokyo, Japan', 'Paris, France', 'Los Angeles, USA', 'London, UK'],
    correctAnswer: 'Paris, France',
    explanation:
      'The 2024 Summer Olympic Games were officially held in Paris, France from July to August 2024.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'Which is the tallest mountain peak above sea level in the world?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
    correctAnswer: 'Mount Everest',
    explanation:
      'Mount Everest reaches 8,848.86 meters above sea level, located in the Mahalangur Himal sub-range.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'What is the capital city of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 'Canberra',
    explanation:
      'Canberra was selected as the compromise capital of Australia in 1908 between rivals Sydney and Melbourne.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'Which country is the largest by land area in the entire world?',
    options: ['Canada', 'China', 'United States', 'Russia'],
    correctAnswer: 'Russia',
    explanation:
      "Russia spans over 17 million square kilometers, covering more than one-eighth of Earth's inhabited land area.",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'Who was the first woman to win a Nobel Prize?',
    options: ['Marie Curie', 'Mother Teresa', 'Rosalind Franklin', 'Jane Addams'],
    correctAnswer: 'Marie Curie',
    explanation:
      'Marie Curie won the Nobel Prize in Physics in 1903, and later in Chemistry in 1911, being the first person to win twice.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText:
      'Which country gifted the Statue of Liberty to the United States in the late 19th century?',
    options: ['United Kingdom', 'France', 'Spain', 'Germany'],
    correctAnswer: 'France',
    explanation:
      "The Statue of Liberty was a gift from the people of France to celebrate America's centennial of independence.",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'What is the official currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    correctAnswer: 'Yen',
    explanation:
      'The Japanese Yen (JPY) is the third most traded currency in the global foreign exchange market.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'Which desert is the largest hot desert on planet Earth?',
    options: ['Gobi Desert', 'Kalahari Desert', 'Sahara Desert', 'Arabian Desert'],
    correctAnswer: 'Sahara Desert',
    explanation: 'The Sahara Desert covers over 9.2 million square kilometers across North Africa.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText: 'What is the international emergency phone number across the European Union?',
    options: ['911', '999', '112', '000'],
    correctAnswer: '112',
    explanation:
      '112 is the common emergency telephone number that can be dialed free of charge across all EU member states.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText:
      "Which continent is known as the 'Dark Continent' historically and is the second-largest continent?",
    options: ['South America', 'Africa', 'Asia', 'Australia'],
    correctAnswer: 'Africa',
    explanation:
      'Africa is the second-largest continent by both land area and population, behind Asia.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Easy',
    questionText:
      'What organization was formed in 1949 as a collective North American and European defense alliance?',
    options: ['NATO', 'Warsaw Pact', 'OPEC', 'G7'],
    correctAnswer: 'NATO',
    explanation:
      'The North Atlantic Treaty Organization (NATO) was established in 1949 to provide collective security against aggression.',
  },

  // --- 15 Medium Questions ---
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'Which country officially joined NATO in 2023 as its 31st member?',
    options: ['Sweden', 'Finland', 'Ukraine', 'Georgia'],
    correctAnswer: 'Finland',
    explanation:
      'Finland officially joined NATO on April 4, 2023, following historical shifts in European security.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'The International Court of Justice (ICJ) holds its sessions in which city?',
    options: ['Geneva', 'Brussels', 'The Hague', 'Vienna'],
    correctAnswer: 'The Hague',
    explanation:
      'The ICJ, the principal judicial organ of the UN, is seated at the Peace Palace in The Hague, Netherlands.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'Which canal connects the Mediterranean Sea directly to the Red Sea?',
    options: ['Panama Canal', 'Suez Canal', 'Kiel Canal', 'Corinth Canal'],
    correctAnswer: 'Suez Canal',
    explanation:
      'Opened in 1869, the Suez Canal provides the shortest maritime route between Europe and lands around the Indian and western Pacific oceans.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'What is the name of the treaty that established the European Union in 1993?',
    options: ['Treaty of Versailles', 'Maastricht Treaty', 'Treaty of Rome', 'Lisbon Treaty'],
    correctAnswer: 'Maastricht Treaty',
    explanation:
      'The Maastricht Treaty, signed in 1992 and effective in 1993, formally created the European Union and paved the way for the Euro.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'Which strait separates the continents of Asia and North America?',
    options: ['Strait of Gibraltar', 'Bering Strait', 'Strait of Malacca', 'Bosporus Strait'],
    correctAnswer: 'Bering Strait',
    explanation:
      "The Bering Strait separates Russia's Chukchi Peninsula from Alaska's Seward Peninsula, connecting the Arctic and Pacific.",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which country has the greatest number of UNESCO World Heritage Sites as of 2024?',
    options: ['China', 'Italy', 'Spain', 'Germany'],
    correctAnswer: 'Italy',
    explanation:
      'Italy holds the global lead with 60 inscribed UNESCO World Heritage sites, closely followed by China.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'Who is the executive head of the World Health Organization (WHO) titled?',
    options: ['Secretary-General', 'Director-General', 'President', 'High Commissioner'],
    correctAnswer: 'Director-General',
    explanation:
      "The Director-General is WHO's chief technical and administrative officer, overseeing global health initiatives.",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'Which river flows through the greatest number of countries in the world?',
    options: ['Amazon River', 'Danube River', 'Nile River', 'Rhine River'],
    correctAnswer: 'Danube River',
    explanation:
      'The Danube flows through or forms the border of 10 countries in Central and Eastern Europe.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which country successfully hosted the 18th G20 Heads of State and Government Summit in September 2023?',
    options: ['Indonesia', 'India', 'Brazil', 'South Africa'],
    correctAnswer: 'India',
    explanation:
      "India hosted the G20 New Delhi Summit in 2023 under the theme 'Vasudhaiva Kutumbakam' (One Earth, One Family, One Future).",
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which ocean trench contains the Challenger Deep, the deepest known point on Earth?',
    options: ['Java Trench', 'Mariana Trench', 'Puerto Rico Trench', 'Philippine Trench'],
    correctAnswer: 'Mariana Trench',
    explanation:
      'Challenger Deep plunges nearly 11,000 meters (36,000 feet) in the southern Mariana Trench.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText: 'What is the governing body of the global Olympic movement called?',
    options: ['FIFA', 'IOC', 'IAAF', 'WADA'],
    correctAnswer: 'IOC',
    explanation:
      'The International Olympic Committee (IOC), headquartered in Lausanne, Switzerland, governs the Olympic Games.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which landmark climate agreement was negotiated at COP21 in 2015 to limit global temperature rise to well below 2°C?',
    options: ['Kyoto Protocol', 'Paris Agreement', 'Montreal Protocol', 'Geneva Convention'],
    correctAnswer: 'Paris Agreement',
    explanation:
      'The Paris Agreement is a legally binding international treaty on climate change adopted by 196 parties in 2015.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which Scandinavian country is not an official member of the European Union (EU)?',
    options: ['Sweden', 'Denmark', 'Norway', 'Finland'],
    correctAnswer: 'Norway',
    explanation:
      'Norway participates in the European Single Market via the EEA Agreement but has rejected full EU membership in two referendums.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which body of water accounts for approximately one-fifth of global petroleum maritime transit?',
    options: ['Strait of Hormuz', 'Panama Canal', 'Bosphorus', 'English Channel'],
    correctAnswer: 'Strait of Hormuz',
    explanation:
      'The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman, handling over 20 million barrels of petroleum daily.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Medium',
    questionText:
      'Which country has three official capital cities: Pretoria, Cape Town, and Bloemfontein?',
    options: ['Bolivia', 'South Africa', 'Malaysia', 'Netherlands'],
    correctAnswer: 'South Africa',
    explanation:
      'South Africa divides powers among Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial).',
  },

  // --- 15 Hard Questions ---
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      "Under the UN Convention on the Law of the Sea (UNCLOS), how far does a nation's Exclusive Economic Zone (EEZ) extend from its coastal baseline?",
    options: ['12 nautical miles', '24 nautical miles', '200 nautical miles', '350 nautical miles'],
    correctAnswer: '200 nautical miles',
    explanation:
      'An EEZ extends up to 200 nautical miles, conferring sovereign rights over marine resources while preserving navigational freedoms.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      "Which African nation became the world's newest recognized sovereign state in July 2011?",
    options: ['Eritrea', 'South Sudan', 'Kosovo', 'East Timor'],
    correctAnswer: 'South Sudan',
    explanation:
      'South Sudan declared independence from Sudan on July 9, 2011, following a 98.83% referendum vote.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'Which of the following is NOT one of the five permanent veto-wielding members of the United Nations Security Council?',
    options: ['France', 'Japan', 'United Kingdom', 'China'],
    correctAnswer: 'Japan',
    explanation:
      'The permanent members (P5) are the US, UK, France, Russia, and China. Japan is part of the G4 seeking permanent reform.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'What was the significance of the 1648 Peace of Westphalia in international relations?',
    options: [
      'It established the concept of state sovereignty and non-interference',
      'It founded the League of Nations',
      'It divided the New World between Spain and Portugal',
      'It abolished the transatlantic slave trade',
    ],
    correctAnswer: 'It established the concept of state sovereignty and non-interference',
    explanation:
      'The Peace of Westphalia established Westphalian sovereignty, the foundation of the modern international state system.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'Which organization administers the Antarctic Treaty of 1959, keeping Antarctica exclusively for peaceful scientific research?',
    options: [
      'Antarctic Treaty Secretariat (ATS)',
      'UN Environment Programme',
      'Arctic Council',
      'International Maritime Organization',
    ],
    correctAnswer: 'Antarctic Treaty Secretariat (ATS)',
    explanation:
      'The Antarctic Treaty Secretariat, based in Buenos Aires, coordinates the annual consultative meetings of the treaty parties.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      "In diplomacy, what is 'Persona Non Grata' defined as under the Vienna Convention on Diplomatic Relations?",
    options: [
      'A foreign diplomat officially declared unacceptable and expelled by the host state',
      'A treaty signed without parliamentary ratification',
      'An unsigned diplomatic aide-mémoire',
      'A state under international sanctions',
    ],
    correctAnswer:
      'A foreign diplomat officially declared unacceptable and expelled by the host state',
    explanation:
      'Under Article 9 of the Vienna Convention, a host state may declare any diplomatic mission member persona non grata without explanation.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      "Which country is the world's only doubly landlocked country in Europe (surrounded exclusively by other landlocked countries)?",
    options: ['Switzerland', 'Liechtenstein', 'San Marino', 'Andorra'],
    correctAnswer: 'Liechtenstein',
    explanation:
      'Liechtenstein (bordered by Switzerland and Austria) and Uzbekistan are the only two doubly landlocked countries globally.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText: 'What was the Sykes-Picot Agreement of 1916 primarily concerned with?',
    options: [
      'Partitioning Ottoman territories in the Middle East between Britain and France',
      'Establishing trade tariffs between the US and Europe',
      'Fixing naval boundaries in the Baltic Sea',
      'Creating the League of Nations mandates in Africa',
    ],
    correctAnswer: 'Partitioning Ottoman territories in the Middle East between Britain and France',
    explanation:
      'Sykes-Picot was a secret Anglo-French pact defining proposed spheres of influence in the partition of the Ottoman Empire.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'Which index published annually by the United Nations Development Programme (UNDP) measures life expectancy, education, and per capita income?',
    options: [
      'Gini Coefficient',
      'Human Development Index (HDI)',
      'World Happiness Score',
      'Corruption Perceptions Index',
    ],
    correctAnswer: 'Human Development Index (HDI)',
    explanation:
      'Created by economists Mahbub ul Haq and Amartya Sen in 1990, the HDI benchmarks human development beyond pure GDP.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'Which historical pact, signed in 1928, had 62 signatory nations renounce war as an instrument of national policy?',
    options: ['Kellogg-Briand Pact', 'Treaty of Locarno', 'Munich Agreement', 'Camp David Accords'],
    correctAnswer: 'Kellogg-Briand Pact',
    explanation:
      'The Kellogg-Briand Pact renounced war as an instrument of policy and provided legal basis for crimes against peace at Nuremberg.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'What is the official seat of the International Criminal Court (ICC), established under the Rome Statute?',
    options: [
      'Geneva, Switzerland',
      'The Hague, Netherlands',
      'Strasbourg, France',
      'Luxembourg City',
    ],
    correctAnswer: 'The Hague, Netherlands',
    explanation:
      'The ICC investigates and prosecutes individuals for genocide, crimes against humanity, war crimes, and aggression from The Hague.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText: 'What is the primary function of the Financial Action Task Force (FATF)?',
    options: [
      'Combating money laundering and terrorist financing globally',
      'Managing sovereign debt restructurings',
      'Setting currency exchange rate pegs',
      'Supervising central bank interest rates',
    ],
    correctAnswer: 'Combating money laundering and terrorist financing globally',
    explanation:
      'The FATF, established by the G7 in 1989, sets international standards to prevent money laundering and terrorist financing.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      "Which microstate inside Italy is the world's oldest surviving sovereign republic with a constitution dating back to 1600?",
    options: ['Monaco', 'San Marino', 'Vatican City', 'Malta'],
    correctAnswer: 'San Marino',
    explanation:
      'The Republic of San Marino, founded in 301 AD, possesses statutory laws composed in 1600 that serve as its constitution.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText:
      'Which international agreement bans military activity, environmental modifications, and nuclear testing in outer space?',
    options: [
      'Outer Space Treaty (1967)',
      'Moon Agreement (1979)',
      'Kessler Declaration',
      'Geneva Outer Space Protocol',
    ],
    correctAnswer: 'Outer Space Treaty (1967)',
    explanation:
      'The 1967 Outer Space Treaty forms the basis of international space law, prohibiting weapons of mass destruction in orbit.',
  },
  {
    topic: 'World Affairs',
    difficulty: 'Hard',
    questionText: "In maritime geography, what is the 'Nine-Dash Line' associated with?",
    options: [
      "China's territorial and maritime claims in the South China Sea",
      'The demarcation line between North and South Korea',
      'The Panama Canal shipping lane boundaries',
      'The Arctic Circle navigation corridor',
    ],
    correctAnswer: "China's territorial and maritime claims in the South China Sea",
    explanation:
      'The Nine-Dash Line is the historical demarcation used by China to claim major portions of the South China Sea, contested by neighbors.',
  },

  // =================================================================
  // Finance & Economics (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'What does GDP stand for in macroeconomic analysis?',
    options: [
      'Gross Domestic Product',
      'General Demand Price',
      'Global Debt Proportion',
      'Government Direct Payment',
    ],
    correctAnswer: 'Gross Domestic Product',
    explanation:
      'GDP measures the monetary value of all finished goods and services produced within a country over a specific time period.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText:
      'What is the term for a sustained increase in the general price level of goods and services over time?',
    options: ['Deflation', 'Inflation', 'Stagflation', 'Recession'],
    correctAnswer: 'Inflation',
    explanation:
      'Inflation erodes the purchasing power of money, meaning each unit of currency buys fewer goods and services.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'Which institution serves as the central bank of the United States?',
    options: ['Federal Reserve', 'Bank of America', 'U.S. Treasury', 'World Bank'],
    correctAnswer: 'Federal Reserve',
    explanation:
      "The Federal Reserve ('The Fed') conducts national monetary policy and supervises banking institutions in the US.",
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'What does an IPO stand for in corporate finance?',
    options: [
      'Initial Public Offering',
      'International Payment Order',
      'Internal Portfolio Option',
      'Income Producing Operation',
    ],
    correctAnswer: 'Initial Public Offering',
    explanation:
      'An IPO is the process where a private company sells shares to the general public for the first time on a stock exchange.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: "What is a 'Bull Market' in stock market terminology?",
    options: [
      'A market where prices are rising or expected to rise',
      'A market where trading is temporarily suspended',
      'A market in a persistent downturn',
      'A market with high government intervention',
    ],
    correctAnswer: 'A market where prices are rising or expected to rise',
    explanation:
      'A bull market refers to an upward financial market trend characterized by investor optimism and rising asset prices.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'What is the central bank of India called?',
    options: [
      'State Bank of India (SBI)',
      'Reserve Bank of India (RBI)',
      'Federal Reserve of India',
      'Bank of India',
    ],
    correctAnswer: 'Reserve Bank of India (RBI)',
    explanation:
      'The Reserve Bank of India (RBI), established in 1935, regulates the issuance and supply of the Indian rupee.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText:
      'What term describes spreading your investments across diverse asset classes to reduce risk?',
    options: ['Diversification', 'Leveraging', 'Shorting', 'Arbitrage'],
    correctAnswer: 'Diversification',
    explanation:
      'Diversification allocates investments across various financial instruments to limit exposure to any single asset.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: "What is a 'Dividend' paid by a publicly traded corporation?",
    options: [
      'A distribution of a portion of company earnings to its shareholders',
      'A fee paid to investment brokers',
      'A tax penalty for late filing',
      'The interest paid on corporate bonds',
    ],
    correctAnswer: 'A distribution of a portion of company earnings to its shareholders',
    explanation:
      "A dividend is a cash or stock reward granted to shareholders out of the corporation's post-tax profits.",
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText:
      "Which asset is historically referred to as 'digital gold' due to its decentralized scarcity?",
    options: ['Ethereum', 'Bitcoin', 'Solana', 'Dogecoin'],
    correctAnswer: 'Bitcoin',
    explanation:
      'Bitcoin (BTC) has a mathematically capped supply of 21 million coins, earning it the label of digital store of value.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'What does ROI stand for in personal and corporate finance?',
    options: ['Return on Investment', 'Rate of Interest', 'Risk on Income', 'Revenue on Inventory'],
    correctAnswer: 'Return on Investment',
    explanation:
      'ROI measures the efficiency and profitability of an investment relative to its original capital cost.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: "What is the principal characteristic of a 'Bear Market'?",
    options: [
      'Stock prices dropping by 20% or more from recent highs',
      'Zero trading volume',
      'Government-mandated bank holidays',
      'Hyperinflation above 100%',
    ],
    correctAnswer: 'Stock prices dropping by 20% or more from recent highs',
    explanation:
      'A bear market is defined conventionally as a prolonged decline of 20% or more from recent peak levels.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText:
      'What is the process of putting money into financial schemes or shares with the expectation of achieving profit?',
    options: ['Investing', 'Consuming', 'Liquidating', 'Factoring'],
    correctAnswer: 'Investing',
    explanation:
      'Investing commits capital today to generate income, compound returns, or appreciation in the future.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'What is compound interest famously described by Albert Einstein as?',
    options: [
      'The Eighth Wonder of the World',
      'The Paradox of Thrift',
      'The Money Multiplier',
      'The Law of Diminishing Returns',
    ],
    correctAnswer: 'The Eighth Wonder of the World',
    explanation:
      'Compound interest is earning interest on both original principal and previously accumulated interest.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText:
      "Which financial document balances a company's assets against its liabilities and shareholder equity?",
    options: ['Balance Sheet', 'Income Statement', 'Cash Flow Statement', 'Audit Ledger'],
    correctAnswer: 'Balance Sheet',
    explanation:
      'The fundamental accounting equation is Assets = Liabilities + Equity, encapsulated in the Balance Sheet.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Easy',
    questionText: 'What is a 401(k) in the United States financial system?',
    options: [
      'An employer-sponsored retirement savings plan',
      'A federal student loan',
      'A state income tax deduction',
      'A health insurance policy',
    ],
    correctAnswer: 'An employer-sponsored retirement savings plan',
    explanation:
      'A 401(k) is a tax-advantaged defined-contribution retirement account offered by many US employers.',
  },

  // --- 15 Medium Questions ---
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What is 'Stagflation' in economic terms?",
    options: [
      'A combination of stagnant economic growth, high unemployment, and high inflation',
      'A sudden drop in stock valuations with zero inflation',
      'High economic growth with zero government debt',
      'Deflation coupled with currency appreciation',
    ],
    correctAnswer:
      'A combination of stagnant economic growth, high unemployment, and high inflation',
    explanation:
      'Stagflation is an unusual economic paradox where high inflation coexists with stagnant demand and joblessness.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: 'What does the P/E ratio of a stock signify to an investor?',
    options: [
      'Price-to-Earnings ratio (market price per share divided by annual earnings per share)',
      'Profit-to-Expense ratio',
      'Portfolio Equity index',
      'Public Exchange valuation',
    ],
    correctAnswer:
      'Price-to-Earnings ratio (market price per share divided by annual earnings per share)',
    explanation:
      'The P/E ratio indicates how much investors are willing to pay today for one dollar of current earnings.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: 'What does an inverted yield curve historically signal in fixed-income markets?',
    options: [
      'An impending economic recession',
      'An imminent economic boom',
      'Surging stock market valuations',
      'A drop in central bank balance sheets',
    ],
    correctAnswer: 'An impending economic recession',
    explanation:
      'An inverted yield curve (where short-term yields exceed long-term yields) has preceded nearly every modern recession.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What is 'Quantitative Easing' (QE) conducted by central banks?",
    options: [
      'Purchasing long-term government bonds to inject liquidity into the economy',
      'Directly printing paper cash for retail citizens',
      'Raising interest rates to cool down inflation',
      'Setting limits on commercial bank loans',
    ],
    correctAnswer: 'Purchasing long-term government bonds to inject liquidity into the economy',
    explanation:
      'QE is an unconventional monetary policy where central banks purchase securities to expand money supply and lower yields.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: 'What is the primary difference between a stock and a bond?',
    options: [
      'Stocks represent equity ownership; bonds represent a debt obligation with fixed interest',
      'Stocks pay guaranteed interest while bonds depend on profit',
      'Bonds can only be issued by the federal government',
      'Stocks have a fixed maturity date',
    ],
    correctAnswer:
      'Stocks represent equity ownership; bonds represent a debt obligation with fixed interest',
    explanation:
      'Stockholders own a fraction of the enterprise, whereas bondholders are creditors entitled to interest and principal return.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: 'What economic metric does the Gini Coefficient measure?',
    options: [
      'Income or wealth inequality within a population',
      'The velocity of money',
      'Foreign direct investment inflows',
      'Manufacturing output efficiency',
    ],
    correctAnswer: 'Income or wealth inequality within a population',
    explanation:
      'The Gini coefficient ranges from 0 (perfect equality) to 1 (maximal inequality where one person holds all income).',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What is 'Arbitrage' in trading markets?",
    options: [
      'Simultaneously buying and selling the same asset in different markets to profit from a price discrepancy',
      'Betting that an asset price will drop',
      'Holding a stock forever to collect dividends',
      'Borrowing money at variable rates to buy real estate',
    ],
    correctAnswer:
      'Simultaneously buying and selling the same asset in different markets to profit from a price discrepancy',
    explanation:
      'Arbitrage exploits market inefficiencies by executing matching trades to lock in virtually risk-free profit.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText:
      "Which economic law states that 'bad money drives out good money' when two forms of currency are in circulation?",
    options: ["Gresham's Law", "Say's Law", "Okun's Law", "Engel's Law"],
    correctAnswer: "Gresham's Law",
    explanation:
      "Gresham's Law observes that people hoard undervalued 'good' money (pure metal) and spend devalued 'bad' money.",
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What is a 'Venture Capital' firm primarily focused on funding?",
    options: [
      'Early-stage, high-potential growth startups in exchange for equity',
      'Municipal infrastructure projects',
      'Established blue-chip corporate bonds',
      'Real estate mortgage refinancing',
    ],
    correctAnswer: 'Early-stage, high-potential growth startups in exchange for equity',
    explanation:
      'Venture capitalists provide private financing to innovative startups with substantial long-term growth potential.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What is the concept of 'Opportunity Cost' in economics?",
    options: [
      'The value of the next best alternative forgone when making a decision',
      'The direct financial expense paid for an item',
      'The tax burden incurred on capital gains',
      'The depreciation of physical capital assets',
    ],
    correctAnswer: 'The value of the next best alternative forgone when making a decision',
    explanation:
      'Opportunity cost represents the prospective benefit lost by choosing one course of action over an alternative.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What does the term 'Liquidity' refer to in financial contexts?",
    options: [
      'The ease and speed with which an asset can be converted into cash without affecting its market price',
      'The ratio of debt to total revenue',
      'The total amount of cash held in offshore bank vaults',
      'The interest paid on emergency overdrafts',
    ],
    correctAnswer:
      'The ease and speed with which an asset can be converted into cash without affecting its market price',
    explanation:
      'Cash is the most liquid asset; real estate is comparatively illiquid because selling takes significant time.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "In financial derivatives, what is a 'Call Option'?",
    options: [
      'The right, but not the obligation, to buy an underlying asset at a specified strike price within a set timeframe',
      'The obligation to sell shares at a discount',
      'A mandatory margin call issued by a brokerage',
      'A contract guaranteeing fixed bond interest',
    ],
    correctAnswer:
      'The right, but not the obligation, to buy an underlying asset at a specified strike price within a set timeframe',
    explanation:
      'A call option gives the buyer the right to purchase the underlying stock at the strike price before expiration.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: 'What is the Bretton Woods Agreement of 1944 famous for establishing?',
    options: [
      'The IMF, the World Bank, and an international gold-backed US dollar standard',
      'The World Trade Organization (WTO)',
      'The European Central Bank',
      'The dissolution of the gold standard',
    ],
    correctAnswer: 'The IMF, the World Bank, and an international gold-backed US dollar standard',
    explanation:
      'Bretton Woods created the modern international monetary architecture, pegging foreign currencies to the dollar.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: "What is 'Short Selling' in equity markets?",
    options: [
      'Borrowing shares to sell them immediately, hoping to buy them back later at a lower price',
      'Buying stocks and selling them within 5 minutes',
      'Selling company assets during bankruptcy',
      'Purchasing fractional shares on retail apps',
    ],
    correctAnswer:
      'Borrowing shares to sell them immediately, hoping to buy them back later at a lower price',
    explanation:
      'Short sellers anticipate price declines by selling borrowed shares, seeking to profit from repurchasing cheaper.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Medium',
    questionText: 'What is the primary indicator used by central banks to assess Core Inflation?',
    options: [
      'CPI excluding volatile food and energy prices',
      'Raw commodity price indexes',
      'Commercial real estate prices',
      'Stock market market-cap indices',
    ],
    correctAnswer: 'CPI excluding volatile food and energy prices',
    explanation:
      'Core CPI strips out food and energy because their prices fluctuate rapidly due to weather and geopolitical shocks.',
  },

  // --- 15 Hard Questions ---
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      'What mathematical options pricing model, published in 1973 by Fischer Black and Myron Scholes, earned a Nobel Memorial Prize?',
    options: [
      'Black-Scholes-Merton Model',
      'Monte Carlo Lattice Model',
      'Binomial Trees Framework',
      'Gordon Growth Model',
    ],
    correctAnswer: 'Black-Scholes-Merton Model',
    explanation:
      'The Black-Scholes formula revolutionized quantitative finance by estimating fair theoretical value for call and put options.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      "What does the 'Trilemma' or 'Impossible Trinity' in international economics state?",
    options: [
      'A country cannot simultaneously maintain a fixed exchange rate, free capital movement, and independent monetary policy',
      'Inflation, unemployment, and interest rates cannot all be zero',
      'A firm cannot maximize revenue, market share, and dividends at once',
      'Tax rates, government spending, and trade surplus are mutually exclusive',
    ],
    correctAnswer:
      'A country cannot simultaneously maintain a fixed exchange rate, free capital movement, and independent monetary policy',
    explanation:
      'The Mundell-Fleming hypothesis proves that sovereign economies can achieve at most two of the three policy goals simultaneously.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: "In Modern Portfolio Theory (MPT), what does the 'Sharpe Ratio' evaluate?",
    options: [
      'The excess return of an investment portfolio relative to its total risk (standard deviation)',
      'The correlation between two equity indexes',
      'The probability of an institutional bankruptcy',
      'The percentage of cash held in reserve',
    ],
    correctAnswer:
      'The excess return of an investment portfolio relative to its total risk (standard deviation)',
    explanation:
      "William Sharpe's ratio measures risk-adjusted return by dividing portfolio excess return over risk-free rate by standard deviation.",
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: 'What is a Credit Default Swap (CDS)?',
    options: [
      'A financial derivative that acts as insurance against the default of a borrower or bond issuer',
      'An exchange of variable interest rates for fixed rates',
      'A central bank currency swap line',
      'A retail loan repayment forgiveness plan',
    ],
    correctAnswer:
      'A financial derivative that acts as insurance against the default of a borrower or bond issuer',
    explanation:
      'In a CDS, the buyer pays periodic premiums to the seller, who agrees to compensate the buyer if the debt issuer defaults.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      "What phenomenon described by the 'Lucas Critique' challenges macroeconomic policy modeling?",
    options: [
      'Historical relationships between economic variables alter when economic actors change their behavior in response to policy changes',
      'Markets are always strictly efficient at all times',
      'Money velocity is permanently constant',
      'Interest rate hikes have no effect on housing demand',
    ],
    correctAnswer:
      'Historical relationships between economic variables alter when economic actors change their behavior in response to policy changes',
    explanation:
      'Robert Lucas argued that evaluating policy based on historical aggregated data is misleading because rational agents anticipate rules.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: "What is the 'Taylor Rule' in central banking economics?",
    options: [
      'A formula prescribing target central bank interest rates based on inflation gaps and output gaps',
      'A rule dictating corporate dividend payout ratios',
      'A mathematical ceiling for national debt-to-GDP ratios',
      'A framework for bank capital adequacy reserve buffers',
    ],
    correctAnswer:
      'A formula prescribing target central bank interest rates based on inflation gaps and output gaps',
    explanation:
      'John Taylor proposed a simple rule of thumb linking nominal interest rate targets to deviation of inflation from target and GDP from potential.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      'Which Basel accord introduced the Liquidity Coverage Ratio (LCR) and Net Stable Funding Ratio (NSFR) after the 2008 global financial crisis?',
    options: ['Basel I', 'Basel II', 'Basel III', 'Basel IV'],
    correctAnswer: 'Basel III',
    explanation:
      'Basel III mandated rigorous liquidity standards (LCR & NSFR) and higher Tier 1 equity buffers to prevent bank insolvencies.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      "In macroeconomics, what does 'Ricardian Equivalence' suggest regarding deficit spending?",
    options: [
      'Consumers anticipate future taxes to pay off debt, saving their current income rather than boosting consumption',
      'Tax cuts permanently accelerate economic velocity',
      'Government debt will inevitably hyperinflate the currency',
      'Import tariffs always generate budget surpluses',
    ],
    correctAnswer:
      'Consumers anticipate future taxes to pay off debt, saving their current income rather than boosting consumption',
    explanation:
      'David Ricardo and Robert Barro suggested that whether governments finance spending via debt or taxes has identical real consumption effects.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: "What is 'Beta' in the Capital Asset Pricing Model (CAPM)?",
    options: [
      "A measure of a stock's volatility and systematic risk relative to the overall market",
      'The historical dividend payout growth rate',
      'The non-systematic company-specific risk',
      'The probability of an executive leadership change',
    ],
    correctAnswer:
      "A measure of a stock's volatility and systematic risk relative to the overall market",
    explanation:
      'A beta of 1 means the asset moves in lockstep with the market; beta > 1 signifies greater volatility than the market.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      'What was the landmark financial act passed in 1933 that separated commercial and investment banking until its repeal in 1999?',
    options: [
      'Glass-Steagall Act',
      'Dodd-Frank Act',
      'Sarbanes-Oxley Act',
      'Gramm-Leach-Bliley Act',
    ],
    correctAnswer: 'Glass-Steagall Act',
    explanation:
      'Glass-Steagall erected a legal wall between commercial deposit-taking and risky securities underwriting.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: "In market microstructure, what is the 'Bid-Ask Spread' an indicator of?",
    options: [
      'Market liquidity and transaction friction costs',
      'Total company valuation',
      'Corporate profit margin',
      'Government regulatory compliance expenses',
    ],
    correctAnswer: 'Market liquidity and transaction friction costs',
    explanation:
      'A tight bid-ask spread signals high liquidity and low slippage; a wide spread reflects illiquidity and execution costs.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: "What is the 'Triffin Dilemma' concerning reserve currencies?",
    options: [
      'The conflict between domestic monetary objectives and international liquidity demands for a global reserve currency issuer',
      'The inability to balance trade balances across borders',
      'The trade-off between income tax and consumption tax',
      'The risk of bank runs under fractional reserve systems',
    ],
    correctAnswer:
      'The conflict between domestic monetary objectives and international liquidity demands for a global reserve currency issuer',
    explanation:
      'Robert Triffin noted the US must run balance of payments deficits to supply world reserves, which eventually undermines confidence in the dollar.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText: "What is an 'Unrealized Capital Gain'?",
    options: [
      'A paper profit on an investment that has appreciated but has not yet been sold',
      'A cash dividend directly deposited in an account',
      'A profit earned on foreign currency arbitrage',
      'A tax-free municipal bond payout',
    ],
    correctAnswer: 'A paper profit on an investment that has appreciated but has not yet been sold',
    explanation:
      'Unrealized gains reflect theoretical asset value appreciation above purchase price before a sale transaction takes place.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      'What is the term for a loan structure where the principal is paid back in full at maturity rather than amortized monthly?',
    options: [
      'Bullet or Balloon Loan',
      'Annuity Mortgage',
      'Revolving Line of Credit',
      'Mezzanine Facility',
    ],
    correctAnswer: 'Bullet or Balloon Loan',
    explanation:
      'In a bullet loan, only periodic interest is serviced until the entire principal sum comes due at expiration.',
  },
  {
    topic: 'Finance & Economy',
    difficulty: 'Hard',
    questionText:
      'Which market anomaly, discovered by Eugene Fama and Kenneth French, demonstrated that smaller market-cap firms systematically outperform larger firms on a risk-adjusted basis?',
    options: [
      'The Size Effect (SMB factor)',
      'The Momentum Factor',
      'The Value Spread',
      'The Low-Volatility Anomaly',
    ],
    correctAnswer: 'The Size Effect (SMB factor)',
    explanation:
      "The Fama-French 3-factor model added 'Small Minus Big' (SMB) to account for small-cap historical outperformance.",
  },

  // =================================================================
  // Space & Astronomy (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: "Which planet in our solar system is famously known as the 'Red Planet'?",
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    correctAnswer: 'Mars',
    explanation:
      'Mars appears reddish-orange due to abundant iron oxide (rust) covering its surface rocks and dust.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: 'Which is the largest planet in our solar system by diameter and mass?',
    options: ['Saturn', 'Neptune', 'Jupiter', 'Uranus'],
    correctAnswer: 'Jupiter',
    explanation:
      'Jupiter is so massive that it contains more than twice the mass of all other planets in our solar system combined.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: 'What is the name of our home galaxy?',
    options: ['Andromeda Galaxy', 'Milky Way Galaxy', 'Triangulum Galaxy', 'Sombrero Galaxy'],
    correctAnswer: 'Milky Way Galaxy',
    explanation:
      'Our solar system resides in the Milky Way, a barred spiral galaxy containing an estimated 100 to 400 billion stars.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      'Who was the first human being to step foot on the Moon during the Apollo 11 mission in 1969?',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'],
    correctAnswer: 'Neil Armstrong',
    explanation:
      "Neil Armstrong stepped onto the lunar surface on July 20, 1969, stating 'That's one small step for man, one giant leap for mankind.'",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: 'Which planet is closest in orbit to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    correctAnswer: 'Mercury',
    explanation:
      'Mercury orbits closest to the Sun at an average distance of roughly 58 million kilometers.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      'What astronomical event occurs when the Moon passes directly between the Earth and the Sun?',
    options: ['Lunar Eclipse', 'Solar Eclipse', 'Equinox', 'Supermoon'],
    correctAnswer: 'Solar Eclipse',
    explanation:
      "A solar eclipse occurs when the Moon casts its shadow onto the Earth, obscuring the Sun's disk.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: 'Which star is situated at the exact center of our solar system?',
    options: ['Sirius', 'The Sun', 'Alpha Centauri', 'Polaris'],
    correctAnswer: 'The Sun',
    explanation:
      "The Sun is a G-type main-sequence star comprising approximately 99.86% of the solar system's total mass.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      'Which planet is famous for having an extensive, stunning system of rings visible through amateur telescopes?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 'Saturn',
    explanation:
      "Saturn's iconic rings consist of trillions of water-ice particles and rocky debris orbiting around its equator.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      'Who was the first person ever to journey into outer space, orbiting the Earth aboard Vostok 1 in 1961?',
    options: ['John Glenn', 'Yuri Gagarin', 'Alan Shepard', 'Valentina Tereshkova'],
    correctAnswer: 'Yuri Gagarin',
    explanation:
      'Soviet cosmonaut Yuri Gagarin achieved the first human spaceflight on April 12, 1961.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      'What is the hottest planet in our solar system due to an extreme runaway greenhouse effect?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 'Venus',
    explanation:
      'Venus has a dense carbon dioxide atmosphere with sulfuric acid clouds, trapping heat to reach surface temperatures over 460°C.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: 'Which space agency developed the Chandrayaan and Mangalyaan space missions?',
    options: ['NASA', 'ESA', 'ISRO', 'Roscosmos'],
    correctAnswer: 'ISRO',
    explanation:
      'The Indian Space Research Organisation (ISRO) successfully conducted both lunar (Chandrayaan) and Mars (Mangalyaan) exploration.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: 'Approximately how long does it take for light from the Sun to reach Earth?',
    options: ['8 seconds', '8 minutes and 20 seconds', '1 hour', 'Instantaneous'],
    correctAnswer: '8 minutes and 20 seconds',
    explanation:
      'Traveling at ~300,000 km/s across 150 million kilometers, sunlight takes about 500 seconds (8 minutes 20 seconds) to arrive.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText: "What celestial object is often colloquially referred to as a 'shooting star'?",
    options: [
      'A comet',
      "A meteor burning up in Earth's atmosphere",
      'An asteroid in the belt',
      'A dying supernova',
    ],
    correctAnswer: "A meteor burning up in Earth's atmosphere",
    explanation:
      "A meteor is the glowing streak of light produced when a meteoroid vaporizes upon entering Earth's atmosphere at high speed.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      "In what year was Pluto reclassified from a major planet to a 'dwarf planet' by the IAU?",
    options: ['1999', '2006', '2012', '2018'],
    correctAnswer: '2006',
    explanation:
      'The International Astronomical Union (IAU) revised planetary definitions in 2006 because Pluto has not cleared its orbital neighborhood.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Easy',
    questionText:
      'What is the name of the premier NASA space telescope launched on Christmas Day 2021 as the successor to Hubble?',
    options: [
      'James Webb Space Telescope (JWST)',
      'Spitzer Telescope',
      'Kepler Observatory',
      'Chandra X-Ray Observatory',
    ],
    correctAnswer: 'James Webb Space Telescope (JWST)',
    explanation:
      'JWST operates at Lagrange point L2, observing the universe primarily in high-resolution infrared wavelengths.',
  },

  // --- 15 Medium Questions ---
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What is the boundary surrounding a black hole beyond which nothing, not even light, can escape called?',
    options: ['Singularity', 'Event Horizon', 'Accretion Disk', 'Photon Sphere'],
    correctAnswer: 'Event Horizon',
    explanation:
      'The event horizon marks the point of no return where the gravitational escape velocity equals the speed of light.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'Which moon in the solar system has a dense nitrogen atmosphere and liquid methane-ethane lakes on its surface?',
    options: ['Europa', 'Titan', 'Ganymede', 'Enceladus'],
    correctAnswer: 'Titan',
    explanation:
      "Saturn's moon Titan is the only moon with a substantial atmosphere and stable liquid hydrocarbon surface lakes.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText: 'What is the largest known volcano in the entire solar system?',
    options: ['Mauna Kea', 'Olympus Mons on Mars', 'Mount Everest', 'Caldera on Venus'],
    correctAnswer: 'Olympus Mons on Mars',
    explanation:
      'Olympus Mons is a Martian shield volcano towering roughly 22 kilometers (72,000 feet) high, nearly 2.5 times Everest.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'Which telescope was the first to capture a direct visual shadow image of a supermassive black hole in 2019?',
    options: [
      'Hubble Space Telescope',
      'Event Horizon Telescope (EHT)',
      'ALMA Observatory',
      'Arecibo Telescope',
    ],
    correctAnswer: 'Event Horizon Telescope (EHT)',
    explanation:
      'EHT linked radio observatories worldwide via Very Long Baseline Interferometry to image the black hole in galaxy M87.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'Which moon orbiting Jupiter is believed to harbor a subsurface liquid water ocean that could potentially host life?',
    options: ['Io', 'Europa', 'Callisto', 'Phobos'],
    correctAnswer: 'Europa',
    explanation:
      "Europa's smooth, cracked icy crust conceals a vast saltwater ocean warmed by tidal friction with Jupiter.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What is the estimated age of the universe according to the standard Lambda-CDM cosmological model?',
    options: ['4.5 billion years', '13.8 billion years', '20.2 billion years', '100 billion years'],
    correctAnswer: '13.8 billion years',
    explanation:
      "Measurements of the cosmic microwave background by WMAP and the Planck satellite estimate the universe's age at 13.787 ± 0.020 billion years.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What type of star is the core remnant left behind after a Sun-like star sheds its outer layers in a planetary nebula?',
    options: ['Neutron Star', 'White Dwarf', 'Black Hole', 'Red Supergiant'],
    correctAnswer: 'White Dwarf',
    explanation:
      'Low-to-medium mass stars exhaust hydrogen and helium fusion, leaving an electron-degenerate white dwarf core.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What is the name of the theoretical cloud of predominantly icy planetesimals proposed to surround our solar system up to 100,000 AU away?',
    options: ['Kuiper Belt', 'Oort Cloud', 'Asteroid Belt', 'Van Allen Belt'],
    correctAnswer: 'Oort Cloud',
    explanation:
      'The Oort Cloud is a spherical reservoir of billions of long-period comets surrounding the solar system.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      "What is the phenomenon where a massive object's gravitational field bends light from a distant background source?",
    options: ['Gravitational Lensing', 'Doppler Redshift', 'Hubble Flow', 'Tidal Disruption'],
    correctAnswer: 'Gravitational Lensing',
    explanation:
      "Predicted by Einstein's General Relativity, mass curves spacetime, magnifying and distorting light paths like a lens.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What is the name of the supermassive black hole located at the gravitational center of the Milky Way galaxy?',
    options: ['Cygnus X-1', 'Sagittarius A*', 'M87*', 'Centaurus A'],
    correctAnswer: 'Sagittarius A*',
    explanation:
      'Sagittarius A* has a mass of approximately 4 million solar masses, proved by observing orbital paths of stars around it.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      "Which space mission made humanity's first historic landing near the lunar south pole in August 2023?",
    options: ['Apollo 17', 'Luna 25', 'Chandrayaan-3', "Chang'e 4"],
    correctAnswer: 'Chandrayaan-3',
    explanation:
      "ISRO's Chandrayaan-3 mission successfully executed a soft touchdown of its Vikram lander near the Moon's South Pole on August 23, 2023.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText: "What is a 'Light-Year' a measure of?",
    options: [
      'Time taken for a star to rotate',
      'Distance traveled by light in a vacuum in one Julian year',
      'Total light emitted by a galaxy',
      'The age of starlight hitting Earth',
    ],
    correctAnswer: 'Distance traveled by light in a vacuum in one Julian year',
    explanation:
      'A light-year is a unit of length equal to roughly 9.46 trillion kilometers (5.88 trillion miles).',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What is the name of the nearest major spiral galaxy to our own Milky Way, projected to collide with us in 4-5 billion years?',
    options: ['Andromeda Galaxy (M31)', 'Whirlpool Galaxy', 'Canis Major Dwarf', 'Messier 81'],
    correctAnswer: 'Andromeda Galaxy (M31)',
    explanation:
      'The Andromeda Galaxy lies approximately 2.5 million light-years away and is approaching the Milky Way at ~110 km/s.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText: 'What is the solar wind predominantly composed of?',
    options: [
      'Liquid helium droplets',
      "Streams of charged plasma particles (electrons and protons) ejected from the Sun's corona",
      'Pure photons and gamma rays',
      'Vaporized asteroid dust',
    ],
    correctAnswer:
      "Streams of charged plasma particles (electrons and protons) ejected from the Sun's corona",
    explanation:
      'The solar wind is a continuous plasma flow of protons and electrons expanding outward into interplanetary space.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Medium',
    questionText:
      'What is the primary method the Kepler Space Telescope used to discover thousands of exoplanets?',
    options: [
      "Transit Photometry (detecting periodic dips in a star's brightness as a planet passes in front)",
      'Direct imaging with flash photography',
      'Radio radar pinging',
      'Measuring soundwaves in space',
    ],
    correctAnswer:
      "Transit Photometry (detecting periodic dips in a star's brightness as a planet passes in front)",
    explanation:
      'The transit method measures miniature dips in starlight as an orbiting planet blocks a tiny fraction of its parent star.',
  },

  // --- 15 Hard Questions ---
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText: 'What is the Chandrasekhar limit in stellar astrophysics?',
    options: [
      'The maximum mass (~1.44 solar masses) of a stable white dwarf star supported by electron degeneracy pressure',
      'The maximum velocity of an expanding supernova shockwave',
      'The minimum mass required to ignite thermonuclear fusion',
      'The orbital boundary of the Kuiper belt',
    ],
    correctAnswer:
      'The maximum mass (~1.44 solar masses) of a stable white dwarf star supported by electron degeneracy pressure',
    explanation:
      'Subrahmanyan Chandrasekhar proved that white dwarfs exceeding ~1.4 solar masses collapse into neutron stars or Type Ia supernovae.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'What theoretical radiation did Stephen Hawking propose is emitted by black holes due to quantum vacuum fluctuations near the event horizon?',
    options: ['Hawking Radiation', 'Synchrotron Emission', 'Bremsstrahlung', 'Cherenkov Radiation'],
    correctAnswer: 'Hawking Radiation',
    explanation:
      'Hawking radiation results from virtual particle-antiparticle pairs near the horizon, causing black holes to slowly lose mass.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText: 'What is the Tolman-Oppenheimer-Volkoff (TOV) limit?',
    options: [
      'The upper mass limit (~2.1 to 2.3 solar masses) for a stable neutron star before collapsing into a black hole',
      "The maximum temperature of the Sun's core",
      'The diameter limit for a rocky planet',
      'The critical density of dark matter',
    ],
    correctAnswer:
      'The upper mass limit (~2.1 to 2.3 solar masses) for a stable neutron star before collapsing into a black hole',
    explanation:
      'The TOV limit establishes the ceiling where neutron degeneracy pressure can no longer withstand gravitational collapse.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'In physical cosmology, what mysterious entity accounts for roughly 68% of the total energy density of the observable universe, driving accelerated expansion?',
    options: ['Dark Energy', 'Dark Matter', 'Baryonic Matter', 'Cosmic Rays'],
    correctAnswer: 'Dark Energy',
    explanation:
      "Dark energy is the hypothesized uniform energy field or cosmological constant causing the universe's accelerating expansion.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'Which instrument first directly detected gravitational waves on September 14, 2015, resulting from a binary black hole merger?',
    options: [
      'LIGO (Laser Interferometer Gravitational-Wave Observatory)',
      'Hubble Space Telescope',
      'CERN LHC',
      'Keck Observatory',
    ],
    correctAnswer: 'LIGO (Laser Interferometer Gravitational-Wave Observatory)',
    explanation:
      "LIGO's dual 4-kilometer laser interferometers in Washington and Louisiana detected distortion of spacetime ripples (GW150914).",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'What are the five specific orbital locations where the gravitational forces of two large bodies balance the centrifugal force called?',
    options: [
      'Lagrange Points (L1 to L5)',
      'Keplerian Vertices',
      'Roche Lobes',
      'Hilbert Coordinates',
    ],
    correctAnswer: 'Lagrange Points (L1 to L5)',
    explanation:
      'Lagrange points allow a small third body to maintain a stable or semi-stable position relative to two larger bodies.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText: "What is the 'Roche Limit' of a celestial body?",
    options: [
      'The minimum distance to which a celestial body, held together only by gravity, can approach a second body without being torn apart by tidal forces',
      'The maximum velocity achievable inside a galaxy',
      'The temperature where hydrogen fusion begins',
      "The outer radius of a star's corona",
    ],
    correctAnswer:
      'The minimum distance to which a celestial body, held together only by gravity, can approach a second body without being torn apart by tidal forces',
    explanation:
      "Inside the Roche limit, tidal forces exceed the moon's self-gravitation, fragmenting it into orbital rings.",
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'What is the primary nuclear fusion pathway by which massive stars (heavier than ~1.3 solar masses) convert hydrogen into helium?',
    options: [
      'CNO Cycle (Carbon-Nitrogen-Oxygen cycle)',
      'Proton-Proton Chain',
      'Triple-Alpha Process',
      'Silicon Burning',
    ],
    correctAnswer: 'CNO Cycle (Carbon-Nitrogen-Oxygen cycle)',
    explanation:
      'In hotter massive stars, the catalytic CNO cycle dominates over the p-p chain to convert hydrogen into helium.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'What type of pulsating variable star exhibits a precise period-luminosity relation used by Edwin Hubble to measure extragalactic distances?',
    options: ['Cepheid Variables', 'T Tauri Stars', 'RR Lyrae Stars', 'Flare Stars'],
    correctAnswer: 'Cepheid Variables',
    explanation:
      'Henrietta Swan Leavitt discovered that Cepheids with longer pulsation periods have higher intrinsic luminosity, forming cosmic standard candles.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'In black hole physics, what is the region outside the event horizon of a rotating Kerr black hole where spacetime itself is dragged along (frame-dragging)?',
    options: ['Ergosphere', 'Photon Sphere', 'Singularity', 'Magnetosphere'],
    correctAnswer: 'Ergosphere',
    explanation:
      'In the ergosphere, frame-dragging forces everything to rotate with the black hole; energy can be extracted via the Penrose process.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      'What is the remnant electromagnetic radiation left over from the epoch of recombination (~380,000 years after the Big Bang)?',
    options: [
      'Cosmic Microwave Background (CMB)',
      'Cosmic Ray Shower',
      'Zodiacal Light',
      'Synchrotron Glow',
    ],
    correctAnswer: 'Cosmic Microwave Background (CMB)',
    explanation:
      'The CMB is nearly uniform 2.7255 K blackbody radiation that decoupled when electrons and protons combined into neutral hydrogen.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText:
      "Which space probe launched in 1977 officially crossed the heliopause into interstellar space in August 2012, becoming humanity's most distant craft?",
    options: ['Voyager 1', 'Voyager 2', 'Pioneer 10', 'New Horizons'],
    correctAnswer: 'Voyager 1',
    explanation:
      'Voyager 1 is over 24 billion kilometers from Earth and continues sending data from interstellar space.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText: "What stellar phenomenon occurs during a 'Kilonova'?",
    options: [
      'The explosive radioactive merger of two neutron stars, synthesizing heavy r-process elements like gold and platinum',
      'The collapse of a white dwarf without fusion',
      'A coronal mass ejection from a brown dwarf',
      'The slow cooling of a planetary nebula',
    ],
    correctAnswer:
      'The explosive radioactive merger of two neutron stars, synthesizing heavy r-process elements like gold and platinum',
    explanation:
      'Kilonovae produce rapid neutron capture (r-process), forging the majority of elements heavier than iron, including gold and uranium.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText: 'What is the Jeans Instability in astrophysics?',
    options: [
      'The condition where internal gas pressure cannot resist the gravitational collapse of an interstellar molecular cloud, forming stars',
      'The wobbling axis of a pulsar',
      'The radioactive decay rate of stellar carbon',
      'The chaotic orbit of three equal-mass bodies',
    ],
    correctAnswer:
      'The condition where internal gas pressure cannot resist the gravitational collapse of an interstellar molecular cloud, forming stars',
    explanation:
      'Sir James Jeans determined the critical mass and radius required for gravity to overcome thermal pressure in gas clouds.',
  },
  {
    topic: 'Space & Astronomy',
    difficulty: 'Hard',
    questionText: 'What is the Great Attractor in extragalactic astrophysics?',
    options: [
      'A gravitational anomaly in intergalactic space at the center of the Laniakea Supercluster pulling millions of galaxies',
      'A gigantic supermassive black hole at the center of the universe',
      'A dark energy concentration destroying galaxies',
      'The collision zone between Andromeda and the Milky Way',
    ],
    correctAnswer:
      'A gravitational anomaly in intergalactic space at the center of the Laniakea Supercluster pulling millions of galaxies',
    explanation:
      'The Great Attractor is a massive gravitational anomaly located in the Zone of Avoidance, tugging nearby galaxy clusters toward it.',
  },
];

module.exports = additionalQuestions;
