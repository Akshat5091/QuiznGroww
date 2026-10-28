/**
 * Additional high-yield question datasets Part 2 for QuiznGroww
 * Topics:
 * 1. Environment & Wildlife (45 questions)
 * 2. Gaming & Esports (45 questions)
 * 3. Mathematics & Logic (45 questions)
 * 4. Advanced Top-ups for History, Geography, Literature, Art, Mythology, Movies (90 questions)
 */

const additionalQuestions2 = [
  // =================================================================
  // Environment & Wildlife (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText:
      'What is the primary greenhouse gas emitted through human activities like burning fossil fuels?',
    options: ['Carbon Dioxide (CO2)', 'Argon', 'Oxygen', 'Nitrogen'],
    correctAnswer: 'Carbon Dioxide (CO2)',
    explanation:
      'Carbon dioxide is the dominant greenhouse gas released into the atmosphere by human industrial and transportation activities.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'Which is the largest living mammal on planet Earth?',
    options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
    explanation:
      'The blue whale can reach lengths of 30 meters (98 feet) and weigh up to 200 metric tons, making it the largest known animal.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText:
      'What gas in the stratosphere absorbs harmful ultraviolet (UV) radiation from the Sun?',
    options: ['Ozone (O3)', 'Carbon Monoxide', 'Methane', 'Hydrogen'],
    correctAnswer: 'Ozone (O3)',
    explanation:
      'The ozone layer shields living organisms on Earth from dangerous solar ultraviolet radiation.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText:
      'What biological process do green plants use to convert sunlight, water, and CO2 into glucose and oxygen?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation:
      'Photosynthesis is the fundamental biochemical process powering terrestrial food chains and oxygen replenishment.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'Which animal is famously recognized as the national animal of India?',
    options: ['Royal Bengal Tiger', 'Asiatic Lion', 'Indian Elephant', 'Snow Leopard'],
    correctAnswer: 'Royal Bengal Tiger',
    explanation:
      'The Royal Bengal Tiger (Panthera tigris tigris) was declared the national animal of India in 1973 under Project Tiger.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'Which is a renewable source of energy?',
    options: ['Solar Power', 'Coal', 'Petroleum', 'Natural Gas'],
    correctAnswer: 'Solar Power',
    explanation:
      'Solar energy is naturally replenished on a human timescale, unlike finite fossil fuels.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'What is the natural habitat of polar bears?',
    options: ['The Arctic', 'Antarctica', 'Greenland interior ice sheet only', 'Iceland'],
    correctAnswer: 'The Arctic',
    explanation:
      'Polar bears are native exclusively to the icy regions of the Arctic circle; penguins live primarily in the Southern Hemisphere.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: "Which rainforest is widely celebrated as the 'lungs of the Earth'?",
    options: ['Amazon Rainforest', 'Congo Rainforest', 'Daintree Rainforest', 'Sundarbans'],
    correctAnswer: 'Amazon Rainforest',
    explanation:
      'The Amazon basin produces substantial oxygen, stores vast carbon reservoirs, and harbors immense biodiversity.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText:
      'What international celebration is held annually on April 22 to demonstrate environmental support?',
    options: ['Earth Day', 'World Water Day', 'Arbor Day', 'Environment Hour'],
    correctAnswer: 'Earth Day',
    explanation:
      'Earth Day was first celebrated in 1970 to promote global environmental stewardship and sustainability.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'What is the primary food source of Giant Pandas in the wild?',
    options: ['Bamboo', 'Fish', 'Eucalyptus leaves', 'Insects'],
    correctAnswer: 'Bamboo',
    explanation: "Bamboo accounts for approximately 99% of a giant panda's daily diet.",
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: "What does the 3 R's rule of waste management stand for?",
    options: [
      'Reduce, Reuse, Recycle',
      'Refuse, Restore, Rebuild',
      'Rapid, Reliable, Renewable',
      'Replant, Refine, Reabsorb',
    ],
    correctAnswer: 'Reduce, Reuse, Recycle',
    explanation:
      'Reduce, Reuse, Recycle represents the waste hierarchy aimed at minimizing landfill accumulation.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText:
      'Which bird is famous for being flightless and swimming efficiently in icy southern waters?',
    options: ['Penguin', 'Ostrich', 'Emu', 'Kiwi'],
    correctAnswer: 'Penguin',
    explanation:
      'Penguins have flippers adapted for underwater flight and dense feathers insulating them against freezing ocean waters.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'What is deforestation?',
    options: [
      'The widespread clearance or destruction of forests by humans',
      'Planting new trees in urban parks',
      'Controlling forest fires with water planes',
      'Pruning dead branches from trees',
    ],
    correctAnswer: 'The widespread clearance or destruction of forests by humans',
    explanation:
      'Deforestation involves clearing forests for agriculture, urbanization, or logging, accelerating carbon emissions.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'Which ocean animal produces pearl gemstones naturally?',
    options: ['Oysters', 'Lobsters', 'Crabs', 'Sea Turtles'],
    correctAnswer: 'Oysters',
    explanation:
      'Oysters secrete layers of nacre around irritants inside their mantle, forming natural pearls.',
  },
  {
    topic: 'Environment',
    difficulty: 'Easy',
    questionText: 'What color is the international symbol used worldwide for recycling?',
    options: ['Green', 'Blue', 'Yellow', 'Red'],
    correctAnswer: 'Green',
    explanation:
      'The Mobius loop recycling symbol featuring three chasing green arrows symbolizes material recovery.',
  },

  // --- 15 Medium Questions ---
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: "What is 'Coral Bleaching' primarily triggered by?",
    options: [
      'Elevated sea surface temperatures causing corals to expel symbiotic zooxanthellae',
      'Oil spills floating on water surfaces',
      'Plastic consumption by fish',
      'Tidal wave surges',
    ],
    correctAnswer:
      'Elevated sea surface temperatures causing corals to expel symbiotic zooxanthellae',
    explanation:
      'Thermal stress causes corals to evict colorful photosynthetic microalgae, leaving the white calcium carbonate skeleton exposed.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      'What is an animal or plant species that plays an outsized, foundational role in maintaining ecological community structure called?',
    options: ['Keystone Species', 'Indicator Species', 'Invasive Species', 'Flagship Species'],
    correctAnswer: 'Keystone Species',
    explanation:
      'A keystone species (like sea otters or wolves) exerts strong regulatory control over community composition disproportionate to abundance.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      "Which Indian wetland forest is the world's largest mangrove forest, home to royal Bengal tigers?",
    options: ['Sundarbans', 'Bhitarkanika', 'Pichavaram', 'Vembanad'],
    correctAnswer: 'Sundarbans',
    explanation:
      'Spanning the delta of the Ganges and Brahmaputra, the Sundarbans is a UNESCO World Heritage mangrove forest.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: 'What does the IUCN Red List evaluate?',
    options: [
      'The global conservation status and extinction risk of biological species',
      'Global deforestation percentages',
      'Carbon tax compliance across nations',
      'Marine plastic density levels',
    ],
    correctAnswer: 'The global conservation status and extinction risk of biological species',
    explanation:
      'The International Union for Conservation of Nature (IUCN) Red List categorizes species from Least Concern to Extinct.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      'What environmental phenomenon causes excessive nutrient enrichment in bodies of water, leading to algae blooms and oxygen depletion?',
    options: ['Eutrophication', 'Bioaccumulation', 'Salinization', 'Biomagnification'],
    correctAnswer: 'Eutrophication',
    explanation:
      'Agricultural runoff with phosphorus and nitrates stimulates algal blooms that decay and deplete dissolved oxygen (hypoxia).',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      "Which international protocol successfully phased out chlorofluorocarbons (CFCs) to protect the Earth's ozone layer?",
    options: ['Montreal Protocol', 'Kyoto Protocol', 'Copenhagen Accord', 'Basel Convention'],
    correctAnswer: 'Montreal Protocol',
    explanation:
      'Signed in 1987, the Montreal Protocol is considered the most successful environmental treaty in history, halting ozone depletion.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: "What is 'Bioaccumulation' in environmental toxicology?",
    options: [
      "The gradual buildup of a chemical pollutant in an organism's tissues over time faster than it can be metabolized",
      'The decomposition of plastics by bacteria',
      'The growth of coral reefs on shipwrecks',
      'The spread of invasive plant species',
    ],
    correctAnswer:
      "The gradual buildup of a chemical pollutant in an organism's tissues over time faster than it can be metabolized",
    explanation:
      'Persistent pollutants like methylmercury or DDT accumulate in individual organisms through diet and environmental absorption.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      'Which is the largest hot desert in India, also known as the Great Indian Desert?',
    options: ['Thar Desert', 'Rann of Kutch', 'Spiti Cold Desert', 'Deccan Dry Scrub'],
    correctAnswer: 'Thar Desert',
    explanation:
      'The Thar Desert spans across Rajasthan into Pakistan, forming an arid boundary ecosystem with unique wildlife adaptations.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: 'What is the only species of bear native to South America?',
    options: ['Spectacled Bear (Andean Bear)', 'Grizzly Bear', 'Sloth Bear', 'Sun Bear'],
    correctAnswer: 'Spectacled Bear (Andean Bear)',
    explanation:
      'The spectacled bear (Tremarctos ornatus) is the sole living bear species indigenous to the continent of South America.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      "Which national park in Assam, India is world-renowned for hosting two-thirds of the world's great one-horned rhinoceroses?",
    options: [
      'Kaziranga National Park',
      'Jim Corbett National Park',
      'Gir National Park',
      'Kanha National Park',
    ],
    correctAnswer: 'Kaziranga National Park',
    explanation:
      'Kaziranga is a UNESCO World Heritage site home to the highest density of the vulnerable Indian one-horned rhinoceros.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: "What is 'Permafrost'?",
    options: [
      'Ground that remains completely frozen at or below 0°C for at least two consecutive years',
      'A thick layer of sea ice floating in winter',
      'Artificially frozen soil used in mining',
      'Snow that does not melt during high altitude summer',
    ],
    correctAnswer:
      'Ground that remains completely frozen at or below 0°C for at least two consecutive years',
    explanation:
      'Permafrost covers large tracts of Siberia, Canada, and Alaska, locking away ancient trapped methane and carbon.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      'Which chemical compound is the primary constituent of natural gas and a potent greenhouse gas (~80x warming potential of CO2 over 20 years)?',
    options: ['Methane (CH4)', 'Nitrous Oxide (N2O)', 'Sulfur Hexafluoride', 'Carbon Monoxide'],
    correctAnswer: 'Methane (CH4)',
    explanation:
      'Methane has a shorter atmospheric lifetime than CO2 but possesses far greater short-term radiative forcing efficiency.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: "What is an ecological 'Trophic Cascade'?",
    options: [
      'An ecological process triggered by the addition or removal of top predators, rippling through reciprocal predator-prey steps',
      'A waterfall in a tropical rainforest',
      'The downward migration of birds in winter',
      'The extinction of insects during drought',
    ],
    correctAnswer:
      'An ecological process triggered by the addition or removal of top predators, rippling through reciprocal predator-prey steps',
    explanation:
      'The reintroduction of wolves in Yellowstone is the classic trophic cascade example, altering river courses through deer behavior.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText:
      'Which animal group makes up the largest proportion of all described animal species on Earth (~80%)?',
    options: ['Arthropods (Insects, spiders, crustaceans)', 'Mammals', 'Birds', 'Reptiles'],
    correctAnswer: 'Arthropods (Insects, spiders, crustaceans)',
    explanation:
      'Phylum Arthropoda represents over 1.2 million named species, with beetles alone comprising roughly a quarter of all animals.',
  },
  {
    topic: 'Environment',
    difficulty: 'Medium',
    questionText: 'What is the Great Pacific Garbage Patch composed of predominantly?',
    options: [
      'Microplastics and degraded plastic debris suspended in rotating oceanic gyres',
      'Intact sunken container ships',
      'Nuclear waste barrels',
      'Oil slick layers',
    ],
    correctAnswer: 'Microplastics and degraded plastic debris suspended in rotating oceanic gyres',
    explanation:
      'The subtropical convergence gyre traps trillions of microplastic pieces and fishing nets across an area twice the size of Texas.',
  },

  // --- 15 Hard Questions ---
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: 'What is the Albedo effect and how does it influence planetary climate feedback?',
    options: [
      'The fraction of solar radiation reflected by a surface; melting white ice exposes dark ocean, lowering albedo and accelerating warming',
      'The absorption of carbon by oceanic phytoplankton',
      'The ionization of atmospheric nitrogen by lightning',
      'The thermal expansion of warming seawater',
    ],
    correctAnswer:
      'The fraction of solar radiation reflected by a surface; melting white ice exposes dark ocean, lowering albedo and accelerating warming',
    explanation:
      'Ice-albedo feedback is a dangerous positive climate feedback loop where reduced reflectivity magnifies absorption of solar heat.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText:
      'In biogeochemical cycling, which bacteria are responsible for converting atmospheric nitrogen gas (N2) into plant-absorbable ammonium (NH4+)?',
    options: [
      'Nitrogen-fixing bacteria (such as Rhizobium and Azotobacter)',
      'Denitrifying bacteria (Pseudomonas)',
      'Methanogenic archaea',
      'Sulfur-reducing bacteria',
    ],
    correctAnswer: 'Nitrogen-fixing bacteria (such as Rhizobium and Azotobacter)',
    explanation:
      'Biological nitrogen fixation by diazotrophs breaks the strong N2 triple bond, enabling organic nitrogen integration in root nodules.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: 'What is Ocean Acidification caused by?',
    options: [
      'Oceans absorbing atmospheric CO2, which forms carbonic acid (H2CO3) and decreases carbonate ion availability for calcifying organisms',
      'Acid rain from coal power plants draining into rivers',
      'Industrial toxic effluent dumped into deep trenches',
      'Underwater volcanic lava releases',
    ],
    correctAnswer:
      'Oceans absorbing atmospheric CO2, which forms carbonic acid (H2CO3) and decreases carbonate ion availability for calcifying organisms',
    explanation:
      'Excess dissolved CO2 lowers marine pH, dissolving calcium carbonate shells of pteropods, shellfish, and coral polyps.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText:
      "What is the 'Sixth Mass Extinction' or Holocene Extinction differentiated by compared to previous mass extinctions?",
    options: [
      'It is driven almost entirely by anthropogenic human activities and occurring at an unprecedented rate',
      'It is caused by a massive asteroid collision',
      'It primarily targets marine plankton exclusively',
      'It was triggered by flood basalt volcanic eruptions',
    ],
    correctAnswer:
      'It is driven almost entirely by anthropogenic human activities and occurring at an unprecedented rate',
    explanation:
      'Human habitat fragmentation, overharvesting, climate destabilization, and invasive species characterize the ongoing sixth extinction.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: 'What is the Milankovitch Cycle framework in paleoclimatology?',
    options: [
      "Cyclical variations in Earth's eccentricity, axial tilt, and precession governing long-term ice age pacing",
      'The 11-year solar sunspot cycle',
      'Oceanic thermohaline circulation turnaround times',
      'The frequency of super-volcanic caldera eruptions',
    ],
    correctAnswer:
      "Cyclical variations in Earth's eccentricity, axial tilt, and precession governing long-term ice age pacing",
    explanation:
      'Milankovitch cycles alter seasonal insolation distribution on Earth over 20,000 to 100,000-year astrophysical periods.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText:
      'Which convention concluded in 1973 regulates international commercial trade in endangered species of wild fauna and flora?',
    options: ['CITES', 'Ramsar Convention', 'Bonn Convention', 'Nagoya Protocol'],
    correctAnswer: 'CITES',
    explanation:
      'The Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) shields over 38,000 vulnerable species.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: 'What is the Atlantic Meridional Overturning Circulation (AMOC)?',
    options: [
      'A major ocean conveyor system that transports warm surface water northward and cold deep water southward in the Atlantic',
      'A localized Mediterranean wind pattern',
      'A high-altitude jet stream over Greenland',
      'The seasonal migration path of humpback whales',
    ],
    correctAnswer:
      'A major ocean conveyor system that transports warm surface water northward and cold deep water southward in the Atlantic',
    explanation:
      'AMOC regulates North Atlantic heat distribution; meltwater influx from Greenland risks slowing this critical thermohaline circulation.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText:
      "What is the concept of 'Planetary Boundaries' developed by the Stockholm Resilience Centre led by Johan Rockström?",
    options: [
      'Nine quantitative environmental limits within which humanity can safely develop and thrive without catastrophic tipping',
      'The orbital distances of the eight planets from the sun',
      'The maximum sovereign territory claimed by coastal states',
      'The altitude boundary where the stratosphere transitions to the mesosphere',
    ],
    correctAnswer:
      'Nine quantitative environmental limits within which humanity can safely develop and thrive without catastrophic tipping',
    explanation:
      'Planetary boundaries define safe operating thresholds for climate, biodiversity, freshwater, novel entities, and nitrogen flows.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: "What is 'Endemism' in biological taxonomy?",
    options: [
      'The ecological state of a species being unique and native to a defined geographic location and found nowhere else naturally',
      'A disease spreading across multiple populations',
      'A species undergoing rapid convergent evolution',
      'The symbiotic relationship between ants and acacia trees',
    ],
    correctAnswer:
      'The ecological state of a species being unique and native to a defined geographic location and found nowhere else naturally',
    explanation:
      'Endemic species (like the lemurs of Madagascar or marine iguanas of the Galápagos) live solely within restricted geographic bounds.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText:
      'Which treaty protects wetlands of international importance, especially as waterfowl habitat, signed in Iran in 1971?',
    options: [
      'Ramsar Convention',
      'Stockholm Convention',
      'Basel Convention',
      'Rotterdam Convention',
    ],
    correctAnswer: 'Ramsar Convention',
    explanation:
      'The Ramsar Convention on Wetlands provides the framework for national action and international cooperation regarding wetland conservation.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: "What is 'Biomagnification'?",
    options: [
      'The increasing concentration of a persistent toxin in the tissues of organisms at successively higher trophic levels of the food chain',
      'The rapid reproduction of bacteria in warm water',
      'Using microscopic lenses to study insect physiology',
      'The genetic mutation of plants due to radiation',
    ],
    correctAnswer:
      'The increasing concentration of a persistent toxin in the tissues of organisms at successively higher trophic levels of the food chain',
    explanation:
      'Top apex predators like eagles, sharks, and polar bears accumulate hazardous doses of lipophilic pollutants through biomagnification.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: 'What is the primary role of the mycorrhizal network in forest ecosystems?',
    options: [
      'A symbiotic fungal network connecting tree roots, facilitating nutrient exchange and stress signaling across trees',
      'A parasitic mold killing hardwood trunks',
      'An invasive lichen covering forest floors',
      'A chemical secreted by beetles to attract mates',
    ],
    correctAnswer:
      'A symbiotic fungal network connecting tree roots, facilitating nutrient exchange and stress signaling across trees',
    explanation:
      "The 'Wood Wide Web' of mycorrhizae exchanges mineral nutrients and water for tree carbohydrates, enabling cooperative forest ecology.",
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: "In evolutionary biology, what is 'Convergent Evolution'?",
    options: [
      'Unrelated organisms independently evolving similar anatomical traits due to adapting to comparable environmental niches',
      'Two species mating to produce a hybrid offspring',
      'A single species diverging into multiple distinct varieties',
      'The extinction of multiple species in the same epoch',
    ],
    correctAnswer:
      'Unrelated organisms independently evolving similar anatomical traits due to adapting to comparable environmental niches',
    explanation:
      'Examples include sharks (fish) and dolphins (mammals) independently evolving streamlined hydrodynamics and dorsal fins.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText:
      'What is the Nagoya Protocol associated with under the Convention on Biological Diversity (CBD)?',
    options: [
      'Fair and equitable sharing of benefits arising from the utilization of genetic resources',
      'Banning hazardous pesticides in agricultural exports',
      'Managing nuclear submarine disposal',
      'Setting whaling quotas in international waters',
    ],
    correctAnswer:
      'Fair and equitable sharing of benefits arising from the utilization of genetic resources',
    explanation:
      'The Nagoya Protocol establishes legal certainty and transparency for providers and users of biotechnological genetic resources.',
  },
  {
    topic: 'Environment',
    difficulty: 'Hard',
    questionText: "What is the 'Edge Effect' in ecology?",
    options: [
      'Changes in population or community structures that occur at the boundary of two or more fragmented habitats',
      'The physical erosion of cliff coastlines by wind',
      'The seasonal shedding of leaves by deciduous trees',
      'The point where a species reaches its maximum carrying capacity',
    ],
    correctAnswer:
      'Changes in population or community structures that occur at the boundary of two or more fragmented habitats',
    explanation:
      'Habitat fragmentation expands edge zones, exposing interior forest species to increased wind, predation, and microclimatic shifts.',
  },

  // =================================================================
  // Mathematics & Logic (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the value of Pi (π) rounded to two decimal places?',
    options: ['3.14', '3.16', '3.12', '3.18'],
    correctAnswer: '3.14',
    explanation:
      "Pi is the ratio of a circle's circumference to its diameter, approximately equal to 3.14159.",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the square root of 144?',
    options: ['12', '14', '16', '11'],
    correctAnswer: '12',
    explanation: '12 × 12 = 144, so the positive principal square root of 144 is 12.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the only even prime number?',
    options: ['2', '4', '0', '6'],
    correctAnswer: '2',
    explanation:
      '2 is divisible only by 1 and itself, making it the unique even prime number in mathematics.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the sum of the interior angles of any planar triangle?',
    options: ['180 degrees', '360 degrees', '90 degrees', '270 degrees'],
    correctAnswer: '180 degrees',
    explanation:
      'In Euclidean geometry, the three interior angles of every triangle invariably sum to 180° (π radians).',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'If a shirt costs $80 and is on sale for 25% off, what is the sale price?',
    options: ['$60', '$65', '$70', '$55'],
    correctAnswer: '$60',
    explanation: '25% of $80 is $20; subtracting $20 from $80 yields a sale price of $60.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is 7 factorial (7!)?',
    options: ['5,040', '720', '2,520', '40,320'],
    correctAnswer: '5,040',
    explanation: '7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5,040.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the perimeter of a rectangle with length 8 cm and width 5 cm?',
    options: ['26 cm', '40 cm', '13 cm', '30 cm'],
    correctAnswer: '26 cm',
    explanation: 'Perimeter = 2 × (Length + Width) = 2 × (8 + 5) = 2 × 13 = 26 cm.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the slope of a horizontal line on the Cartesian plane?',
    options: ['0', '1', 'Undefined', 'Infinity'],
    correctAnswer: '0',
    explanation:
      'A horizontal line has zero change in y (rise = 0) as x changes, so its slope is 0.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is 2 raised to the power of 8 (2^8)?',
    options: ['256', '128', '512', '64'],
    correctAnswer: '256',
    explanation: 'Powers of two: 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128, 2^8=256.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the name of a polygon with 8 sides?',
    options: ['Octagon', 'Hexagon', 'Heptagon', 'Decagon'],
    correctAnswer: 'Octagon',
    explanation:
      'An 8-sided polygon is an octagon, whose interior angles in a regular octagon sum to 1080°.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the median of the data set: 3, 7, 9, 12, 15?',
    options: ['9', '7', '9.2', '12'],
    correctAnswer: '9',
    explanation:
      'In an ordered set of 5 numbers, the middle (3rd) value is the median, which is 9.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'Solve for x: 3x + 9 = 24.',
    options: ['5', '3', '7', '6'],
    correctAnswer: '5',
    explanation: '3x = 24 - 9 = 15; dividing by 3 gives x = 5.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the probability of rolling a 6 on a fair six-sided die?',
    options: ['1/6', '1/2', '1/3', '1/12'],
    correctAnswer: '1/6',
    explanation: 'With 6 equally likely outcomes and 1 favorable outcome, P(6) = 1/6.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What do we call a triangle with all three sides of equal length?',
    options: ['Equilateral Triangle', 'Isosceles Triangle', 'Scalene Triangle', 'Right Triangle'],
    correctAnswer: 'Equilateral Triangle',
    explanation:
      'An equilateral triangle has three congruent sides and three congruent 60° angles.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Easy',
    questionText: 'What is the Roman numeral for 50?',
    options: ['L', 'C', 'D', 'X'],
    correctAnswer: 'L',
    explanation: 'In Roman numerals, L = 50, C = 100, D = 500, and M = 1000.',
  },

  // --- 15 Medium Questions ---
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the Pythagorean theorem relating the sides of a right triangle?',
    options: ['a² + b² = c²', 'a + b = c', 'a² - b² = c²', '2a + 2b = c²'],
    correctAnswer: 'a² + b² = c²',
    explanation:
      'The square of the hypotenuse (c) equals the sum of the squares of the other two legs (a and b).',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText:
      'In the Fibonacci sequence starting 0, 1, 1, 2, 3, 5, 8, what is the next number?',
    options: ['13', '11', '15', '21'],
    correctAnswer: '13',
    explanation: 'Each term is the sum of the preceding two terms: 5 + 8 = 13.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the derivative of f(x) = x³ with respect to x?',
    options: ['3x²', 'x²', '3x', '6x'],
    correctAnswer: '3x²',
    explanation: 'By the power rule of calculus, d/dx(x^n) = n × x^(n-1); d/dx(x³) = 3x².',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText:
      'How many permutations of 3 letters can be chosen from a set of 5 distinct letters (5P3)?',
    options: ['60', '20', '120', '10'],
    correctAnswer: '60',
    explanation: '5P3 = 5! / (5 - 3)! = 5! / 2! = (5 × 4 × 3 × 2 × 1) / 2 = 60.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the value of log10(100,000)?',
    options: ['5', '4', '6', '10'],
    correctAnswer: '5',
    explanation: '10 raised to the power of 5 is 100,000, so log10(100,000) = 5.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText:
      'If the determinant of a square matrix is 0, what does this indicate about the matrix?',
    options: [
      'It is singular and non-invertible',
      'It has full rank',
      'Its eigenvalues are all positive',
      'It is symmetric',
    ],
    correctAnswer: 'It is singular and non-invertible',
    explanation:
      'A matrix with det(A) = 0 has linearly dependent rows/columns and possesses no multiplicative inverse.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the Golden Ratio (phi) approximately equal to?',
    options: ['1.618', '1.414', '2.718', '3.141'],
    correctAnswer: '1.618',
    explanation:
      'The Golden Ratio φ = (1 + √5)/2 ≈ 1.6180339887, ubiquitous in geometry, art, and nature.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the sum of all integers from 1 to 100 inclusive?',
    options: ['5,050', '5,000', '5,100', '4,950'],
    correctAnswer: '5,050',
    explanation: "Using Gauss's formula: S = n(n + 1)/2 = 100 × 101 / 2 = 5,050.",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the limit of (sin x) / x as x approaches 0?',
    options: ['1', '0', 'Undefined', 'Infinity'],
    correctAnswer: '1',
    explanation:
      'The fundamental trigonometric limit establishes that lim(x→0) sin(x)/x = 1 (in radians).',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: "In probability theory, what does Bayes' theorem calculate?",
    options: [
      'The conditional probability of an event given prior knowledge of related conditions',
      'The standard deviation of a normal distribution',
      'The roots of a polynomial equation',
      'The area under a curve',
    ],
    correctAnswer:
      'The conditional probability of an event given prior knowledge of related conditions',
    explanation:
      'P(A|B) = [P(B|A) × P(A)] / P(B), describing how prior beliefs are updated in light of new evidence.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: "What is the mathematical constant 'e' (Euler's number) approximately equal to?",
    options: ['2.718', '3.141', '1.414', '1.618'],
    correctAnswer: '2.718',
    explanation:
      "Euler's number e is the base of the natural logarithm, approximately equal to 2.71828.",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the volume of a sphere with radius r?',
    options: ['(4/3) π r³', '4 π r²', '2 π r³', '(1/3) π r³'],
    correctAnswer: '(4/3) π r³',
    explanation: 'The volume formula for a sphere is (4/3)πr³, while its surface area is 4πr².',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the dot product of two perpendicular (orthogonal) non-zero vectors?',
    options: ['0', '1', '-1', 'Equal to the product of their magnitudes'],
    correctAnswer: '0',
    explanation:
      'A · B = |A||B| cos(θ); since cos(90°) = 0, the dot product of perpendicular vectors is identically zero.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText: 'What is the discriminant of a quadratic equation ax² + bx + c = 0?',
    options: ['b² - 4ac', 'b² + 4ac', '2a / b', '-b ± √a'],
    correctAnswer: 'b² - 4ac',
    explanation:
      'The discriminant Δ = b² - 4ac reveals the nature of the roots (positive = 2 real, zero = 1 real, negative = 2 complex).',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Medium',
    questionText:
      'Which famous mathematical sequence is generated by: 1, 1, 2, 3, 5, 8, 13, 21, 34...?',
    options: [
      'Fibonacci Sequence',
      'Geometric Progression',
      'Harmonic Progression',
      'Lucas Series',
    ],
    correctAnswer: 'Fibonacci Sequence',
    explanation:
      'Introduced to the West by Leonardo of Pisa (Fibonacci) in his 1202 book Liber Abaci.',
  },

  // --- 15 Hard Questions ---
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText: "What does Euler's Identity, e^(iπ) + 1 = 0, famously connect?",
    options: [
      'Five fundamental mathematical constants: e, i, pi, 1, and 0',
      'Gravitational and electromagnetic fields',
      'The four dimensions of spacetime',
      'Prime numbers with knot theory',
    ],
    correctAnswer: 'Five fundamental mathematical constants: e, i, pi, 1, and 0',
    explanation:
      'Celebrated as the most beautiful theorem in mathematics, it links analysis, algebra, geometry, and arithmetic.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What unresolved Millennium Prize problem asks whether every non-trivial zero of the zeta function has a real part equal to 1/2?',
    options: [
      'Riemann Hypothesis',
      'Poincaré Conjecture',
      'Birch and Swinnerton-Dyer Conjecture',
      'Hodge Conjecture',
    ],
    correctAnswer: 'Riemann Hypothesis',
    explanation:
      "Bernhard Riemann's 1859 hypothesis concerning the Riemann zeta function governs the deep distribution of prime numbers.",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      "Who completed the monumental 1994 proof of Fermat's Last Theorem (x^n + y^n = z^n has no non-zero integer solutions for n > 2)?",
    options: ['Andrew Wiles', 'Grigori Perelman', 'Terence Tao', 'Kurt Gödel'],
    correctAnswer: 'Andrew Wiles',
    explanation:
      "Sir Andrew Wiles proved the modularity theorem for semistable elliptic curves, resolving Fermat's 350-year-old conjecture.",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      "What do Gödel's Incompleteness Theorems (1931) establish regarding formal axiomatic mathematical systems?",
    options: [
      'Any consistent formal system capable of basic arithmetic contains statements that are true but unprovable within the system',
      'All mathematical statements can eventually be proven algorithmically',
      'Infinity does not exist in formal logic',
      'Geometry and algebra are fundamentally incompatible',
    ],
    correctAnswer:
      'Any consistent formal system capable of basic arithmetic contains statements that are true but unprovable within the system',
    explanation:
      "Kurt Gödel shattered David Hilbert's program by proving no consistent mathematical system can demonstrate its own completeness.",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What is the P versus NP problem fundamentally asking in computational complexity?',
    options: [
      'Whether every problem whose solution can be verified in polynomial time can also be solved in polynomial time',
      'Whether parallel processors can compute infinite loops',
      'Whether quantum computers can break all cryptography',
      'Whether neural networks can compute non-computable functions',
    ],
    correctAnswer:
      'Whether every problem whose solution can be verified in polynomial time can also be solved in polynomial time',
    explanation:
      'P vs NP asks if verification and finding a solution are computationally equivalent in complexity classes.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText: 'What is the Central Limit Theorem in mathematical statistics?',
    options: [
      "The distribution of sample means approaches a normal (Gaussian) distribution as sample size grows, regardless of the population's underlying distribution",
      'All random variables eventually converge to zero',
      'The variance of a sample equals its mean squared',
      'Extreme outliers cannot occur in large data sets',
    ],
    correctAnswer:
      "The distribution of sample means approaches a normal (Gaussian) distribution as sample size grows, regardless of the population's underlying distribution",
    explanation:
      'The Central Limit Theorem underpins all modern parametric hypothesis testing and statistical inference.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What topological classification problem was resolved by Russian mathematician Grigori Perelman in 2003 using Ricci flow with surgery?',
    options: [
      'Poincaré Conjecture',
      'Navier-Stokes Existence',
      'Four Color Theorem',
      'Kepler Conjecture',
    ],
    correctAnswer: 'Poincaré Conjecture',
    explanation:
      'Perelman proved that every simply connected, closed 3-manifold is homeomorphic to the 3-sphere, declining the Millennium Prize and Fields Medal.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText: "In abstract algebra, what is a 'Group' defined as?",
    options: [
      'A set equipped with a binary operation satisfying closure, associativity, an identity element, and inverse elements',
      'A collection of vectors with scalar multiplication',
      'A matrix with non-zero determinant',
      'A topological space without boundaries',
    ],
    correctAnswer:
      'A set equipped with a binary operation satisfying closure, associativity, an identity element, and inverse elements',
    explanation:
      'Group theory formalizes symmetry across mathematics, quantum mechanics, and crystallography.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What paradox in set-theoretic mathematics proved that naive set theory is logically contradictory?',
    options: [
      "Russell's Paradox (the set of all sets that do not contain themselves)",
      "Zeno's Paradox",
      'Banach-Tarski Paradox',
      'Birthday Paradox',
    ],
    correctAnswer: "Russell's Paradox (the set of all sets that do not contain themselves)",
    explanation:
      "Bertrand Russell's paradox prompted the development of rigorous axiomatic systems like Zermelo-Fraenkel (ZFC).",
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What counterintuitive theorem in measure theory states that a solid 3D ball can be decomposed into a finite number of pieces and reassembled into two identical solid balls of the same size?',
    options: [
      'Banach-Tarski Paradox',
      'Borsuk-Ulam Theorem',
      'Hairy Ball Theorem',
      "Cantor's Diagonal Argument",
    ],
    correctAnswer: 'Banach-Tarski Paradox',
    explanation:
      'Using the Axiom of Choice, Banach and Tarski proved non-measurable decomposition allows volume-duplicating reassembly.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText: 'What is the Jacobian matrix in multivariable vector calculus?',
    options: [
      'The matrix of all first-order partial derivatives of a vector-valued function',
      'The matrix of second-order mixed derivatives',
      'The inverse of the covariance matrix',
      'A diagonal matrix containing eigenvalues',
    ],
    correctAnswer: 'The matrix of all first-order partial derivatives of a vector-valued function',
    explanation:
      'The Jacobian represents the best linear approximation of a differentiable multivariable function near a given point.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText: "What does Cantor's diagonal argument prove regarding infinite sets?",
    options: [
      'The set of real numbers is uncountably infinite and strictly larger than the countably infinite set of natural numbers',
      'All infinite sets have identical cardinality',
      'Prime numbers are finite',
      'Fractions cannot be counted sequentially',
    ],
    correctAnswer:
      'The set of real numbers is uncountably infinite and strictly larger than the countably infinite set of natural numbers',
    explanation:
      'Georg Cantor showed that no bijection exists between natural numbers and reals, proving different orders of infinity (ℵ0 < 2^ℵ0).',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'In differential geometry, what tensor represents the curvature of Riemannian manifolds and describes gravity in General Relativity?',
    options: [
      'Riemann Curvature Tensor',
      'Levi-Civita Tensor',
      'Minkowski Metric Tensor',
      'Kronecker Delta Tensor',
    ],
    correctAnswer: 'Riemann Curvature Tensor',
    explanation:
      'The Riemann curvature tensor measures the extent to which spacetime fails to be flat, contracting into the Ricci and Einstein tensors.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What is the Four Color Theorem, famously proved with the assistance of computer computation in 1976?',
    options: [
      'No more than four colors are required to color any planar map such that no two adjacent regions share the same color',
      'Every polynomial of degree four has four roots',
      'Four dimensions are required for non-Euclidean geometry',
      'Only four regular polyhedra exist',
    ],
    correctAnswer:
      'No more than four colors are required to color any planar map such that no two adjacent regions share the same color',
    explanation:
      'Appel and Haken proved the four-color map theorem by exhaustively checking 1,936 reducible target graph configurations.',
  },
  {
    topic: 'Mathematics',
    difficulty: 'Hard',
    questionText:
      'What equation models the motion of viscous fluid substances, whose smooth mathematical solutions remain an open Millennium Problem?',
    options: [
      'Navier-Stokes Equations',
      'Schrödinger Equation',
      "Maxwell's Equations",
      'Euler-Lagrange Equations',
    ],
    correctAnswer: 'Navier-Stokes Equations',
    explanation:
      'The Clay Mathematics Institute offers $1,000,000 for proving whether smooth, physically reasonable solutions to Navier-Stokes always exist in 3D.',
  },
  // =================================================================
  // Gaming & Esports (45 Questions)
  // =================================================================
  // --- 15 Easy Questions ---
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText: 'Which Italian plumber is the iconic flagship mascot of Nintendo?',
    options: ['Mario', 'Luigi', 'Wario', 'Sonic'],
    correctAnswer: 'Mario',
    explanation:
      'Created by Shigeru Miyamoto, Mario debuted in Donkey Kong (1981) before starring in Super Mario Bros.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'What is the best-selling video game of all time with over 300 million copies sold?',
    options: ['Minecraft', 'Grand Theft Auto V', 'Tetris', 'Wii Sports'],
    correctAnswer: 'Minecraft',
    explanation:
      "Mojang Studios' sandbox game Minecraft holds the Guinness World Record for the best-selling video game in history.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText: 'Which company developed the PlayStation gaming console series?',
    options: ['Sony', 'Microsoft', 'Sega', 'Nintendo'],
    correctAnswer: 'Sony',
    explanation:
      'Sony Computer Entertainment launched the original PlayStation in Japan in December 1994.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'In the Battle Royale game Fortnite, how many players typically drop onto the island in a standard match?',
    options: ['100', '50', '64', '150'],
    correctAnswer: '100',
    explanation:
      'Standard Fortnite Battle Royale lobbies consist of up to 100 players fighting until one player or squad survives.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText: 'Which high-speed blue hedgehog is the mascot of Sega?',
    options: ['Sonic the Hedgehog', 'Tails', 'Knuckles', 'Shadow'],
    correctAnswer: 'Sonic the Hedgehog',
    explanation: "Sonic debuted in 1991 on the Sega Genesis, designed to rival Nintendo's Mario.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'What handheld gaming system released by Nintendo in 1989 popularized Tetris worldwide?',
    options: ['Game Boy', 'Nintendo DS', 'Game Gear', 'PlayStation Portable'],
    correctAnswer: 'Game Boy',
    explanation:
      "Gunpei Yokoi's 8-bit Game Boy revolutionized mobile gaming and sold over 118 million units with Game Boy Color.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText: 'What does FPS stand for in video game genres?',
    options: [
      'First-Person Shooter',
      'Fast-Paced Strategy',
      'Final Player Stage',
      'Free Play Sandbox',
    ],
    correctAnswer: 'First-Person Shooter',
    explanation:
      "FPS games render the gameplay perspective from the viewpoint of the protagonist's eyes (e.g. Doom, Counter-Strike).",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'What is the virtual currency used to purchase skins and battle passes in Fortnite?',
    options: ['V-Bucks', 'Minecoins', 'Robux', 'Riot Points'],
    correctAnswer: 'V-Bucks',
    explanation: "V-Bucks are Epic Games' in-game microtransaction currency used across platforms.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'What yellow, circular character traverses mazes while eating dots and evading four ghosts?',
    options: ['Pac-Man', 'Q*bert', 'Dig Dug', 'Frogger'],
    correctAnswer: 'Pac-Man',
    explanation:
      'Toru Iwatani designed Pac-Man for Namco in 1980, creating an arcade pop-culture phenomenon.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText: 'Which company developed the Xbox gaming consoles and the Halo franchise?',
    options: ['Microsoft', 'Valve', 'Electronic Arts', 'Ubisoft'],
    correctAnswer: 'Microsoft',
    explanation:
      "Microsoft launched the original Xbox in 2001 alongside Bungie's launch title Halo: Combat Evolved.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'In Pokémon, which Electric-type mouse creature is the primary mascot of the franchise?',
    options: ['Pikachu', 'Raichu', 'Eevee', 'Charmander'],
    correctAnswer: 'Pikachu',
    explanation:
      'Pikachu is the celebrated partner of Ash Ketchum and the universal ambassador for The Pokémon Company.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText: 'What is the name of the main green-clad hero in The Legend of Zelda series?',
    options: ['Link', 'Zelda', 'Ganon', 'Sheik'],
    correctAnswer: 'Link',
    explanation:
      'Players control the courageous swordsman Link, while Zelda is the titular royal princess of Hyrule.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'What digital distribution storefront developed by Valve dominates PC video gaming?',
    options: ['Steam', 'Epic Games Store', 'GOG', 'Origin'],
    correctAnswer: 'Steam',
    explanation:
      'Valve launched Steam in 2003, providing cloud saves, community workshops, and a catalog of tens of thousands of PC games.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'Which block-matching puzzle game was created by Soviet software engineer Alexey Pajitnov in 1984?',
    options: ['Tetris', 'Columns', 'Puyo Puyo', 'Bejeweled'],
    correctAnswer: 'Tetris',
    explanation:
      "Alexey Pajitnov programmed Tetris on an Electronika 60, deriving the name from 'tetra' and 'tennis'.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Easy',
    questionText:
      'What popular battle-royale mobile game was developed by Krafton and was originally known in India as PUBG Mobile?',
    options: [
      'Battlegrounds Mobile India (BGMI)',
      'Free Fire',
      'Call of Duty Mobile',
      'Apex Legends',
    ],
    correctAnswer: 'Battlegrounds Mobile India (BGMI)',
    explanation:
      "BGMI is the tailored version of Krafton's battle-royale shooter engineered specifically for the Indian gaming market.",
  },

  // --- 15 Medium Questions ---
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What was the very first video game to ever be inducted into the Science Fiction and Fantasy Hall of Fame?',
    options: ['The Legend of Zelda', 'Doom', 'Myst', 'Final Fantasy VII'],
    correctAnswer: 'Myst',
    explanation:
      "Cyan's CD-ROM puzzle adventure Myst (1993) captivated millions with its atmospheric world-building.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      "Which MOBA game hosts 'The International', an esports world championship renowned for crowdfunded multi-million dollar prize pools?",
    options: ['Dota 2', 'League of Legends', 'Smite', 'Heroes of the Storm'],
    correctAnswer: 'Dota 2',
    explanation:
      "Valve's Dota 2 flagship event 'The International' distributed over $40 million in prize money at TI10.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What game engine developed by Epic Games powers industry blockbusters and virtual film production?',
    options: ['Unreal Engine', 'Unity', 'CryEngine', 'Frostbite'],
    correctAnswer: 'Unreal Engine',
    explanation:
      'Unreal Engine 5 introduced revolutionary Nanite virtualized geometry and Lumen dynamic global illumination.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText: "Which character is known as the 'Ghost of Sparta' in the God of War series?",
    options: ['Kratos', 'Ares', 'Atreus', 'Deimos'],
    correctAnswer: 'Kratos',
    explanation:
      "Kratos is cursed with the ashes of his family fused to his skin, earning the title 'Ghost of Sparta'.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What tactical shooter developed by Riot Games was released in 2020 featuring agent abilities and precise gunplay?',
    options: ['Valorant', 'Overwatch', 'Apex Legends', 'Rainbow Six Siege'],
    correctAnswer: 'Valorant',
    explanation:
      "Riot's 5v5 character-based tactical shooter Valorant became one of the dominant global esports titles.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What 2015 action-RPG developed by CD Projekt Red won over 250 Game of the Year awards?',
    options: ['The Witcher 3: Wild Hunt', 'Cyberpunk 2077', 'Skyrim', 'Bloodborne'],
    correctAnswer: 'The Witcher 3: Wild Hunt',
    explanation:
      'The Witcher 3 follows Geralt of Rivia across the Continent searching for his adopted daughter Ciri.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What open-world 2017 title reinvented the Zelda franchise with physics-based exploration on the Nintendo Switch?',
    options: ['Breath of the Wild', 'Ocarina of Time', 'Tears of the Kingdom', 'Twilight Princess'],
    correctAnswer: 'Breath of the Wild',
    explanation:
      'The Legend of Zelda: Breath of the Wild earned critical acclaim for emergent chemistry systems and total freedom.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      "Which South Korean professional gamer, nicknamed 'The Unkillable Demon King', has won five League of Legends World Championships?",
    options: ['Faker (Lee Sang-hyeok)', 'ShowMaker', 'Chovy', 'Ruler'],
    correctAnswer: 'Faker (Lee Sang-hyeok)',
    explanation:
      "T1's mid-laner Faker is universally recognized as the greatest competitive League of Legends player of all time.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'In competitive Counter-Strike, what is the standard bomb defusal objective time before detonation?',
    options: ['40 seconds', '45 seconds', '35 seconds', '30 seconds'],
    correctAnswer: '40 seconds',
    explanation:
      'In official competitive CS2 / CS:GO matchmaking, the C4 bomb timer counts down for exactly 40 seconds.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      "What studio created the seminal 'Dark Souls', 'Bloodborne', and 'Elden Ring' games, pioneering the Soulslike genre?",
    options: ['FromSoftware', 'Team Ninja', 'Capcom', 'Square Enix'],
    correctAnswer: 'FromSoftware',
    explanation:
      'Directed by Hidetaka Miyazaki, FromSoftware transformed game design with punishing combat and environmental storytelling.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'Which 1993 id Software release revolutionized 3D gaming, multiplayer deathmatches, and PC shareware distribution?',
    options: ['Doom', 'Quake', 'Wolfenstein 3D', 'Half-Life'],
    correctAnswer: 'Doom',
    explanation:
      "John Carmack and John Romero's Doom pioneered network multiplayer, custom WAD modding, and fast 3D graphics.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'In Minecraft, which alternate fiery dimension must players travel to in order to obtain blaze rods for the End portal?',
    options: ['The Nether', 'The Aether', 'The Deep Dark', 'The Void'],
    correctAnswer: 'The Nether',
    explanation:
      'Players construct an obsidian frame ignited with flint and steel to access the lava-filled Nether realm.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What fighting game series developed by Capcom introduced iconic characters Ryu, Ken, Chun-Li, and Guile?',
    options: ['Street Fighter', 'Tekken', 'Mortal Kombat', 'Fatal Fury'],
    correctAnswer: 'Street Fighter',
    explanation:
      'Street Fighter II (1991) established modern 2D fighting game combo mechanics and arcade competitive culture.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'What indie title created by Toby Fox in 2015 gained widespread acclaim for allowing players to spare every monster through dialogue?',
    options: ['Undertale', 'Celeste', 'Hollow Knight', 'Hades'],
    correctAnswer: 'Undertale',
    explanation:
      'Undertale subverted RPG conventions with its moral choice systems, bullet-hell dodging, and unforgettable soundtrack.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Medium',
    questionText:
      'Which battle-royale title developed by Respawn Entertainment is set in the Titanfall universe?',
    options: ['Apex Legends', 'Titanfall: Frontline', 'Hyper Scape', 'Warzone'],
    correctAnswer: 'Apex Legends',
    explanation:
      "Apex Legends launched by surprise in 2019, introducing the revolutionary 'ping' communication system.",
  },

  // --- 15 Hard Questions ---
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      "What is the famous 'Konami Code' button sequence traditionally entered on game controllers?",
    options: [
      'Up, Up, Down, Down, Left, Right, Left, Right, B, A',
      'Up, Down, Up, Down, Left, Right, B, A, Start',
      'Left, Right, Left, Right, Up, Up, Down, Down, A, B',
      'Up, Up, Down, Down, A, B, A, B, Select, Start',
    ],
    correctAnswer: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A',
    explanation:
      'Created by Kazuhisa Hashimoto for Gradius (1986) and made famous in Contra, granting 30 lives.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      "In competitive fighting game history, what legendary tournament moment occurred at EVO 2004 when Daigo Umehara parried 15 consecutive hits from Justin Wong's Chun-Li Super Art?",
    options: [
      'Evo Moment #37 (The Daigo Parry)',
      'The Wombo Combo',
      'The Smash Miracle',
      'The Ken Comeback',
    ],
    correctAnswer: 'Evo Moment #37 (The Daigo Parry)',
    explanation:
      "Daigo parried all 15 hits of Chun-Li's Houyoku-sen in Street Fighter III: 3rd Strike on one pixel of health to win.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'What is the name of the revolutionary procedural audio and animation engine developed for Spore (2008) and The Sims by Will Wright?',
    options: ['DirectSound Morph', 'Procedural Synthesizer', 'RenderWare', 'SimEngine'],
    correctAnswer: 'RenderWare',
    explanation:
      'Spore leveraged advanced procedural animation and synthesis so user-created multi-legged creatures walked naturally.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      "In the speedrunning community, what is an 'Arbitrary Code Execution' (ACE) exploit?",
    options: [
      'Manipulating game memory through in-game inputs to execute raw assembly instructions written into RAM',
      'Using a hardware turbo controller',
      'Modifying save files on an external PC',
      'Skipping cutscenes by pausing repeatedly',
    ],
    correctAnswer:
      'Manipulating game memory through in-game inputs to execute raw assembly instructions written into RAM',
    explanation:
      'ACE exploits in games like Super Mario World and Pokémon Yellow allow runners to warp straight to credits.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'What was the legendary 1983 home video game based on a blockbuster movie whose commercial failure led Atari to bury hundreds of thousands of unsold cartridges in an Alamogordo, New Mexico landfill?',
    options: [
      'E.T. the Extra-Terrestrial',
      'Pac-Man Atari 2600',
      'Raiders of the Lost Ark',
      'Superman 64',
    ],
    correctAnswer: 'E.T. the Extra-Terrestrial',
    explanation:
      'Rushed in just five weeks, E.T. contributed to the 1983 North American video game crash and was excavated in 2014.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      "Which game developed by Valve in 2004 was among the first to integrate an advanced physics engine (Havok) as a core puzzle-solving mechanic using the 'Gravity Gun'?",
    options: ['Half-Life 2', 'Portal', 'Team Fortress 2', 'Left 4 Dead'],
    correctAnswer: 'Half-Life 2',
    explanation:
      "Half-Life 2's Zero Point Energy Field Manipulator (Gravity Gun) made physics interaction central to FPS gameplay.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText: "What is 'Tick Rate' in multiplayer network gaming architecture?",
    options: [
      'The frequency (measured in Hertz) at which the dedicated game server updates and simulates game state per second',
      'The ping latency between client and host',
      'The frames per second rendered by the monitor',
      'The number of packets dropped per minute',
    ],
    correctAnswer:
      'The frequency (measured in Hertz) at which the dedicated game server updates and simulates game state per second',
    explanation:
      'A 64-tick server recalculates hitboxes and positions 64 times a second; 128-tick servers provide double fidelity for esports.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'What groundbreaking real-time strategy game released by Blizzard in 1998 became an official televised national sport in South Korea?',
    options: ['StarCraft', 'Warcraft III', 'Command & Conquer', 'Age of Empires II'],
    correctAnswer: 'StarCraft',
    explanation:
      'StarCraft: Brood War birthed modern professional esports, establishing dedicated cable channels (OGN) and pro teams.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      "What is the render resolution and aspect ratio limitation that led early 3D games to employ 'fog of war' or distance clipping fog (e.g. in Silent Hill)?",
    options: [
      'Hardware fill-rate and draw distance polygon rendering limitations on limited console VRAM',
      'CRT television scanline interference',
      'Controller input polling rates',
      'Audio channel polyphony restrictions',
    ],
    correctAnswer:
      'Hardware fill-rate and draw distance polygon rendering limitations on limited console VRAM',
    explanation:
      "Konami ingeniously turned the PlayStation's draw distance polygon limitations into Silent Hill's iconic psychological fog.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'In game development mathematics, what are Quaternions primarily used for instead of Euler angles?',
    options: [
      'Representing 3D rotations smoothly while avoiding Gimbal Lock',
      'Calculating collision bounding boxes',
      'Simulating fluid dynamics',
      'Compressing texture maps',
    ],
    correctAnswer: 'Representing 3D rotations smoothly while avoiding Gimbal Lock',
    explanation:
      'Quaternions (4D hypercomplex numbers) interpolate rotations via SLERP without the degree-of-freedom loss of Gimbal Lock.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText: "What is the 'Sub-tick' architecture introduced in Counter-Strike 2 (2023)?",
    options: [
      'A timestamping system that records the exact moment of an action between server tick updates',
      'Running game servers at 256 Hz',
      'Client-side prediction without server verification',
      'A peer-to-peer relay fallback',
    ],
    correctAnswer:
      'A timestamping system that records the exact moment of an action between server tick updates',
    explanation:
      'Sub-tick architecture calculates player shooting and movement at the exact millisecond of click rather than waiting for the next tick.',
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'What was the very first commercially sold coin-operated arcade video game, created by Nolan Bushnell and Ted Dabney in 1971?',
    options: ['Computer Space', 'Pong', 'Spacewar!', 'Galaxy Game'],
    correctAnswer: 'Computer Space',
    explanation:
      "Computer Space predated Atari's Pong by a year, built using custom TTL digital logic hardware without a CPU.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'Which MMO holds the Guinness World Record for the most costly single player-driven battle in video game history (The Massacre of M-2XFE), resulting in over $300,000 in destroyed virtual assets?',
    options: ['EVE Online', 'World of Warcraft', 'RuneScape', 'Final Fantasy XIV'],
    correctAnswer: 'EVE Online',
    explanation:
      "CCP Games' EVE Online features a player-driven economy where thousands of Titan and Supercarrier spaceships clash in single battles.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'What technique in competitive Super Smash Bros. Melee involves air dodging diagonally into the ground to slide while retaining standing options?',
    options: ['Wavedashing', 'L-Canceling', 'DI (Directional Influence)', 'Dash Dancing'],
    correctAnswer: 'Wavedashing',
    explanation:
      "Discovered in 2001, wavedashing exploits the physics engine's ground collision response, defining competitive Melee movement.",
  },
  {
    topic: 'Gaming & Esports',
    difficulty: 'Hard',
    questionText:
      'What was the first video game system to introduce an optical disc format (CD-ROM) peripheral in 1988?',
    options: ['PC Engine (TurboGrafx-CD)', 'Sega CD', 'PlayStation', 'Panasonic 3DO'],
    correctAnswer: 'PC Engine (TurboGrafx-CD)',
    explanation:
      'NEC and Hudson Soft released the CD-ROM² system for the PC Engine in Japan in December 1988, beating Sega and Sony.',
  },
];

module.exports = additionalQuestions2;
