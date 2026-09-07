const RECIPES_DATA = [
  // ==================== KETO ====================
  {
    id: "keto-1",
    category: "keto",
    categoryName: "Keto",
    title: "Cheese-Stuffed Meatballs",
    macroTag: "4g net carbs",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Ground beef pockets oozing melted mozzarella, pan-seared in butter and finished in marinara.",
    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: 4,
    calories: 480,
    protein: "38g",
    netCarbs: "4g",
    fat: "34g",
    chefTip: "Use ground beef with an 80/20 fat ratio for maximum juiciness, and chill the stuffed meatballs for 10 minutes before searing to prevent cheese leaks.",
    ingredients: [
      { amount: 1.5, unit: "lbs", name: "80/20 Ground Beef" },
      { amount: 1, unit: "cup", name: "Fresh Mozzarella Cubes", note: "cut into 1/2-inch cubes" },
      { amount: 0.5, unit: "cup", name: "Grated Parmesan Cheese" },
      { amount: 1, unit: "large", name: "Egg" },
      { amount: 2, unit: "cloves", name: "Garlic, minced" },
      { amount: 1, unit: "tsp", name: "Dried Italian Seasoning" },
      { amount: 2, unit: "tbsp", name: "Butter" },
      { amount: 1, unit: "cup", name: "Sugar-Free Marinara Sauce" },
      { amount: 0.25, unit: "cup", name: "Fresh Basil, chopped" }
    ],
    instructions: [
      "In a large mixing bowl, combine ground beef, grated parmesan, egg, minced garlic, Italian seasoning, salt, and black pepper. Mix gently until combined.",
      "Divide the beef mixture into 12 equal portions. Flatten each portion into a disc, place a mozzarella cube in the center, and wrap the meat completely around the cheese, rolling into a tight ball.",
      "Heat butter in a heavy cast-iron skillet over medium-high heat. Add meatballs in a single layer without overcrowding.",
      "Sear for 6-8 minutes, turning frequently until all sides are golden brown.",
      "Pour sugar-free marinara sauce into the skillet, lower the heat to medium-low, cover with a lid, and simmer for 10 minutes until meatballs are cooked through and cheese is gooey.",
      "Garnish with chopped fresh basil and extra parmesan before serving hot."
    ]
  },
  {
    id: "keto-2",
    category: "keto",
    categoryName: "Keto",
    title: "Bacon-Wrapped Chicken Thighs",
    macroTag: "2g net carbs",
    image: "https://images.unsplash.com/photo-1753775290395-09e3cb0b6f70?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Smoky bacon crisps around juicy thigh meat, roasted until the fat renders golden.",
    prepTime: "15 mins",
    cookTime: "35 mins",
    servings: 4,
    calories: 520,
    protein: "42g",
    netCarbs: "2g",
    fat: "38g",
    chefTip: "Broil for the final 3 minutes to get ultra-crispy bacon edges without overcooking the chicken.",
    ingredients: [
      { amount: 6, unit: "boneless", name: "Skinless Chicken Thighs" },
      { amount: 12, unit: "slices", name: "Thick-Cut Bacon" },
      { amount: 1, unit: "tbsp", name: "Smoked Paprika" },
      { amount: 1, unit: "tsp", name: "Garlic Powder" },
      { amount: 1, unit: "tsp", name: "Onion Powder" },
      { amount: 1, unit: "tsp", name: "Dried Thyme" },
      { amount: 2, unit: "tbsp", name: "Olive Oil" }
    ],
    instructions: [
      "Preheat your oven to 400°F (200°C) and line a rimmed baking sheet with parchment paper or wire rack.",
      "Pat chicken thighs dry with paper towels. Season generously on both sides with smoked paprika, garlic powder, onion powder, thyme, salt, and pepper.",
      "Wrap two slices of bacon tightly around each chicken thigh, tucking the ends underneath.",
      "Place on the baking rack seam-side down.",
      "Bake for 30-35 minutes until the internal chicken temperature reaches 165°F (74°C).",
      "Switch oven to broil for 2-3 minutes until bacon is irresistibly crispy. Rest 5 minutes before serving."
    ]
  },
  {
    id: "keto-3",
    category: "keto",
    categoryName: "Keto",
    title: "Loaded Cauliflower Bake",
    macroTag: "6g net carbs",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Riced cauliflower baked with sharp cheddar, sour cream, and crumbled bacon.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 6,
    calories: 310,
    protein: "14g",
    netCarbs: "6g",
    fat: "25g",
    chefTip: "Drain steamed cauliflower thoroughly in a clean kitchen towel to ensure a thick, creamy casserole instead of a watery dish.",
    ingredients: [
      { amount: 1, unit: "large head", name: "Cauliflower, cut into florets" },
      { amount: 1.5, unit: "cups", name: "Sharp Cheddar Cheese, shredded" },
      { amount: 0.5, unit: "cup", name: "Full-Fat Sour Cream" },
      { amount: 4, unit: "oz", name: "Cream Cheese, softened" },
      { amount: 6, unit: "slices", name: "Bacon, cooked & crumbled" },
      { amount: 0.25, unit: "cup", name: "Green Onions, sliced" },
      { amount: 2, unit: "cloves", name: "Garlic, minced" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and grease an 8x8-inch baking dish.",
      "Steam cauliflower florets for 6-8 minutes until tender-crisp. Drain well.",
      "In a bowl, beat softened cream cheese, sour cream, minced garlic, half the cheddar, and half the bacon until smooth.",
      "Fold in the drained cauliflower florets and season with salt and pepper.",
      "Transfer to the baking dish, top with remaining cheddar cheese and bacon pieces.",
      "Bake for 20 minutes until golden and bubbling. Garnish with fresh green onions before serving."
    ]
  },
  {
    id: "keto-4",
    category: "keto",
    categoryName: "Keto",
    title: "Garlic Butter Steak Bites",
    macroTag: "1g net carbs",
    image: "https://images.unsplash.com/photo-1565299715199-866c917206bb?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Cubed sirloin seared hot and tossed in a brown-butter garlic glaze.",
    prepTime: "10 mins",
    cookTime: "8 mins",
    servings: 4,
    calories: 420,
    protein: "36g",
    netCarbs: "1g",
    fat: "30g",
    chefTip: "Ensure your pan is smoking hot before adding steak bites so they get a dark crust without overcooking the center.",
    ingredients: [
      { amount: 1.5, unit: "lbs", name: "Top Sirloin Steak, cut into 1-inch cubes" },
      { amount: 3, unit: "tbsp", name: "Grass-Fed Butter" },
      { amount: 4, unit: "cloves", name: "Garlic, minced" },
      { amount: 1, unit: "tbsp", name: "Olive Oil" },
      { amount: 2, unit: "tbsp", name: "Fresh Parsley, chopped" },
      { amount: 1, unit: "tsp", name: "Coarse Sea Salt & Cracked Black Pepper" }
    ],
    instructions: [
      "Pat steak cubes thoroughly dry with paper towels and season evenly with salt and pepper.",
      "Heat olive oil in a large cast-iron skillet over high heat until sizzling.",
      "Add steak cubes in a single layer (cook in batches if needed). Sear for 3-4 minutes, flipping once for deep browning.",
      "Reduce heat to medium-low, add butter and minced garlic to the pan.",
      "Spoon melted garlic butter continuously over steak bites for 1-2 minutes.",
      "Remove from heat, toss with fresh parsley, and serve immediately."
    ]
  },
  {
    id: "keto-5",
    category: "keto",
    categoryName: "Keto",
    title: "Egg Roll in a Bowl",
    macroTag: "5g net carbs",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "All the flavor of an egg roll — cabbage, pork, ginger, sesame — none of the wrapper.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 4,
    calories: 340,
    protein: "26g",
    netCarbs: "5g",
    fat: "24g",
    chefTip: "Drizzle with sriracha mayo at the end for an authentic spicy egg roll kick.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Ground Pork or Sausage" },
      { amount: 16, unit: "oz", name: "Coleslaw Mix (shredded cabbage & carrots)" },
      { amount: 2, unit: "tbsp", name: "Sesame Oil" },
      { amount: 3, unit: "tbsp", name: "Coconut Aminos or Soy Sauce" },
      { amount: 1, unit: "tbsp", name: "Fresh Ginger, grated" },
      { amount: 3, unit: "cloves", name: "Garlic, minced" },
      { amount: 2, unit: "green", name: "Onions, sliced" }
    ],
    instructions: [
      "Heat sesame oil in a wok or large skillet over medium-high heat.",
      "Add ground pork, minced garlic, and grated ginger. Cook for 6-8 minutes, breaking meat into crumbles until browned.",
      "Add coleslaw mix and coconut aminos. Stir-fry for 4-5 minutes until cabbage softens to desired crunch.",
      "Remove from heat, drizzle with extra sesame oil, and sprinkle green onions.",
      "Serve warm in bowls."
    ]
  },
  {
    id: "keto-6",
    category: "keto",
    categoryName: "Keto",
    title: "Keto Cobb Salad",
    macroTag: "7g net carbs",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Grilled chicken, blue cheese, bacon, and avocado over crisp romaine.",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 2,
    calories: 580,
    protein: "44g",
    netCarbs: "7g",
    fat: "42g",
    chefTip: "Arrange toppings in neat parallel stripes over lettuce for a gorgeous visual presentation.",
    ingredients: [
      { amount: 2, unit: "cups", name: "Grilled Chicken Breast, diced" },
      { amount: 4, unit: "cups", name: "Romaine Lettuce, chopped" },
      { amount: 4, unit: "slices", name: "Crispy Bacon, chopped" },
      { amount: 2, unit: "hard-boiled", name: "Eggs, sliced" },
      { amount: 1, unit: "ripe", name: "Avocado, diced" },
      { amount: 0.5, unit: "cup", name: "Blue Cheese Crumbles" },
      { amount: 0.25, unit: "cup", name: "Sugar-Free Ranch or Blue Cheese Dressing" }
    ],
    instructions: [
      "Line two large salad bowls with chopped romaine lettuce.",
      "Arrange diced chicken, bacon crumbles, sliced hard-boiled egg, diced avocado, and blue cheese in distinct rows across the greens.",
      "Drizzle with sugar-free ranch dressing just before serving."
    ]
  },
  {
    id: "keto-7",
    category: "keto",
    categoryName: "Keto",
    title: "Pan-Seared Salmon & Avocado Salsa",
    macroTag: "4g net carbs",
    image: "https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Crispy-skinned salmon topped with a bright lime-avocado salsa.",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 4,
    calories: 460,
    protein: "35g",
    netCarbs: "4g",
    fat: "32g",
    chefTip: "Press salmon fillets gently into the hot skillet with a spatula for the first 30 seconds to get perfectly flat, golden skin.",
    ingredients: [
      { amount: 4, unit: "center-cut", name: "Salmon Fillets (6oz each)" },
      { amount: 2, unit: "tbsp", name: "Avocado Oil" },
      { amount: 2, unit: "ripe", name: "Avocados, diced" },
      { amount: 1, unit: "medium", name: "Lime, juiced" },
      { amount: 0.25, unit: "cup", name: "Red Onion, finely diced" },
      { amount: 0.25, unit: "cup", name: "Fresh Cilantro, chopped" },
      { amount: 1, unit: "tsp", name: "Cumin Powder" }
    ],
    instructions: [
      "Combine diced avocado, lime juice, red onion, cilantro, salt, and pepper in a bowl to prepare salsa.",
      "Season salmon fillets on both sides with cumin, salt, and pepper.",
      "Heat avocado oil in a stainless steel skillet over medium-high heat.",
      "Place salmon skin-side down and sear for 5 minutes until skin is crispy. Flip and sear for another 3-4 minutes.",
      "Plate salmon fillets and top generously with fresh avocado salsa."
    ]
  },
  {
    id: "keto-8",
    category: "keto",
    categoryName: "Keto",
    title: "Garlic Butter Shrimp & Zucchini",
    macroTag: "5g net carbs",
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Shrimp and ribboned zucchini finished in a lemon-garlic butter sauce.",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 3,
    calories: 360,
    protein: "28g",
    netCarbs: "5g",
    fat: "24g",
    chefTip: "Do not overcook the zoodles! Saute them for just 2 minutes so they maintain a nice al dente bite.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Large Shrimp, peeled & deveined" },
      { amount: 3, unit: "medium", name: "Zucchini, spiralized into zoodles" },
      { amount: 4, unit: "tbsp", name: "Butter" },
      { amount: 4, unit: "cloves", name: "Garlic, minced" },
      { amount: 1, unit: "lemon", name: "Juice & Zest" },
      { amount: 0.25, unit: "tsp", name: "Red Pepper Flakes" }
    ],
    instructions: [
      "Melt 2 tbsp butter in a skillet over medium-high heat. Add shrimp, season with salt, pepper, and red pepper flakes. Cook 2-3 minutes per side until pink. Remove shrimp.",
      "Melt remaining 2 tbsp butter in same skillet, add minced garlic and sauté for 1 minute.",
      "Toss in spiralized zucchini noodles and cook for 2 minutes.",
      "Return shrimp to skillet, squeeze lemon juice, toss together, and serve warm."
    ]
  },
  {
    id: "keto-9",
    category: "keto",
    categoryName: "Keto",
    title: "Keto Bunless Cheeseburger",
    macroTag: "3g net carbs",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A double-stacked patty melt wrapped in lettuce instead of a bun.",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 2,
    calories: 620,
    protein: "46g",
    netCarbs: "3g",
    fat: "48g",
    chefTip: "Use iceberg lettuce heads cut into outer cups for a sturdy wrap that won't tear.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Ground Beef Patties (80/20)" },
      { amount: 4, unit: "slices", name: "Sharp Cheddar Cheese" },
      { amount: 1, unit: "head", name: "Iceberg Lettuce, outer leaves" },
      { amount: 4, unit: "slices", name: "Crispy Bacon" },
      { amount: 2, unit: "slices", name: "Tomato" },
      { amount: 2, unit: "tbsp", name: "Sugar-Free Special Sauce (Mayonnaise + Sugar-Free Ketchup + Relish)" }
    ],
    instructions: [
      "Season beef patties with salt and pepper.",
      "Sear patties in a skillet over high heat for 3-4 minutes per side. Top with cheddar cheese during the last minute to melt.",
      "Lay out two sturdy iceberg lettuce leaves as your wrap base.",
      "Stack double cheesy patties, bacon, tomato slice, and special sauce inside the lettuce wrap.",
      "Wrap securely and serve with napkins!"
    ]
  },
  {
    id: "keto-10",
    category: "keto",
    categoryName: "Keto",
    title: "Avocado Egg Salad",
    macroTag: "3g net carbs",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Creamy avocado swapped in for mayo, folded through chopped hard-boiled eggs.",
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: 3,
    calories: 310,
    protein: "14g",
    netCarbs: "3g",
    fat: "25g",
    chefTip: "Add a pinch of smoked paprika and fresh chives for extra color and depth.",
    ingredients: [
      { amount: 6, unit: "hard-boiled", name: "Large Eggs, chopped" },
      { amount: 2, unit: "ripe", name: "Avocados, mashed" },
      { amount: 1, unit: "tbsp", name: "Lemon Juice" },
      { amount: 2, unit: "tbsp", name: "Fresh Chives, finely chopped" },
      { amount: 1, unit: "tsp", name: "Dijon Mustard" },
      { amount: 0.5, unit: "tsp", name: "Garlic Powder" }
    ],
    instructions: [
      "In a bowl, mash avocados with lemon juice, Dijon mustard, garlic powder, salt, and pepper until creamy.",
      "Fold in chopped hard-boiled eggs and fresh chives gently.",
      "Serve on lettuce boats, low-carb seed crackers, or eat straight with a spoon."
    ]
  },

  // ==================== PROTEIN-FOCUSED ====================
  {
    id: "protein-1",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Grilled Chicken & Quinoa Bowl",
    macroTag: "48g protein",
    image: "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Lean chicken breast over fluffy quinoa with charred vegetables.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    calories: 520,
    protein: "48g",
    netCarbs: "42g",
    fat: "14g",
    chefTip: "Marinate chicken in olive oil, lemon, and oregano for at least 30 minutes before grilling for maximum tenderness.",
    ingredients: [
      { amount: 1.5, unit: "lbs", name: "Chicken Breast, sliced" },
      { amount: 1, unit: "cup", name: "Cooked Quinoa" },
      { amount: 1, unit: "red", name: "Bell Pepper, sliced" },
      { amount: 1, unit: "medium", name: "Zucchini, sliced" },
      { amount: 2, unit: "tbsp", name: "Olive Oil" },
      { amount: 1, unit: "lemon", name: "Juiced" },
      { amount: 1, unit: "tsp", name: "Oregano" }
    ],
    instructions: [
      "Marinate chicken slices in 1 tbsp olive oil, lemon juice, oregano, salt, and pepper.",
      "Cook quinoa according to package instructions.",
      "Grill chicken over high heat for 5-6 minutes per side until 165°F.",
      "Toss bell peppers and zucchini in remaining olive oil and grill for 5 minutes.",
      "Assemble bowls: quinoa base, charred veggies, and sliced grilled chicken."
    ]
  },
  {
    id: "protein-2",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Roasted Chicken & Rice Platter",
    macroTag: "44g protein",
    image: "https://images.unsplash.com/photo-1781334266250-a7e72fdf539f?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A full tray of herb-roasted chicken, rice, and market vegetables.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    calories: 580,
    protein: "44g",
    netCarbs: "48g",
    fat: "16g",
    chefTip: "Use bone-in chicken thighs for richer flavor or skinless breast for lean prep.",
    ingredients: [
      { amount: 1.5, unit: "lbs", name: "Chicken Breasts or Thighs" },
      { amount: 1.5, unit: "cups", name: "Jasmine Rice, cooked" },
      { amount: 2, unit: "cups", name: "Broccoli & Carrots, chopped" },
      { amount: 2, unit: "tbsp", name: "Avocado Oil" },
      { amount: 1, unit: "tbsp", name: "Poultry Seasoning (Rosemary, Thyme, Sage)" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Rub chicken with oil and poultry seasoning.",
      "Place chicken and vegetables on a sheet tray and roast for 25-30 minutes.",
      "Serve over warm Jasmine rice."
    ]
  },
  {
    id: "protein-3",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Turkey Meatball Skillet",
    macroTag: "39g protein",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Lean turkey meatballs simmered in a light tomato-basil sauce.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    calories: 410,
    protein: "39g",
    netCarbs: "18g",
    fat: "14g",
    chefTip: "Add oatmeal or almond flour as binder to keep turkey meatballs juicy.",
    ingredients: [
      { amount: 1.5, unit: "lbs", name: "Lean Ground Turkey (93/7)" },
      { amount: 0.5, unit: "cup", name: "Breadcrumbs or Rolled Oats" },
      { amount: 1, unit: "egg", name: "Large Egg" },
      { amount: 2, unit: "cups", name: "Marinara Sauce" },
      { amount: 0.5, unit: "cup", name: "Part-Skim Mozzarella" }
    ],
    instructions: [
      "Mix ground turkey, egg, breadcrumbs, salt, pepper, and garlic powder. Form into 16 meatballs.",
      "Brown meatballs in a skillet over medium heat for 8 minutes.",
      "Pour marinara over meatballs, cover, and simmer for 10 minutes.",
      "Melt mozzarella on top and serve with fresh basil."
    ]
  },
  {
    id: "protein-4",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Steak & Eggs Breakfast Plate",
    macroTag: "46g protein",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Seared sirloin next to two eggs, any style, for an early protein hit.",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: 1,
    calories: 540,
    protein: "46g",
    netCarbs: "2g",
    fat: "32g",
    chefTip: "Let your steak rest for 5 minutes after searing so juices redistribute before slicing.",
    ingredients: [
      { amount: 8, unit: "oz", name: "Sirloin Steak" },
      { amount: 2, unit: "large", name: "Eggs" },
      { amount: 1, unit: "tbsp", name: "Butter" },
      { amount: 1, unit: "pinch", name: "Flaky Sea Salt" }
    ],
    instructions: [
      "Season sirloin steak with salt and black pepper.",
      "Sear steak in hot skillet with butter for 3-4 mins per side for medium-rare.",
      "Remove steak to rest. Fry eggs in remaining butter in the same pan.",
      "Serve steak sliced alongside sunny-side up eggs."
    ]
  },
  {
    id: "protein-5",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Baked Salmon & Broccoli",
    macroTag: "42g protein",
    image: "https://images.unsplash.com/photo-1559058789-672da06263d8?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Oven-baked salmon fillet with roasted broccoli and lemon.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    calories: 490,
    protein: "42g",
    netCarbs: "8g",
    fat: "28g",
    chefTip: "Top salmon with lemon slices while baking to keep it moist.",
    ingredients: [
      { amount: 2, unit: "salmon fillets", name: "Wild Salmon (8oz each)" },
      { amount: 4, unit: "cups", name: "Broccoli Florets" },
      { amount: 2, unit: "tbsp", name: "Olive Oil" },
      { amount: 1, unit: "lemon", name: "Sliced" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss broccoli florets in olive oil, salt, and pepper.",
      "Place salmon fillets and broccoli on a baking sheet.",
      "Bake for 12-15 minutes until salmon flakes easily with a fork."
    ]
  },
  {
    id: "protein-6",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Protein Pancake Stack",
    macroTag: "34g protein",
    image: "https://images.unsplash.com/photo-1642689690500-f429a042cad1?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Griddled pancakes made batter-rich with egg whites and cottage cheese.",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 2,
    calories: 380,
    protein: "34g",
    netCarbs: "36g",
    fat: "8g",
    chefTip: "Blend cottage cheese and oats in a blender first for fluffy, smooth batter.",
    ingredients: [
      { amount: 1, unit: "cup", name: "Cottage Cheese" },
      { amount: 1, unit: "cup", name: "Rolled Oats" },
      { amount: 4, unit: "large", name: "Egg Whites" },
      { amount: 1, unit: "tsp", name: "Vanilla Extract & Cinnamon" }
    ],
    instructions: [
      "Blend cottage cheese, oats, egg whites, vanilla, and cinnamon until smooth batter forms.",
      "Heat a skillet over medium heat with non-stick spray.",
      "Pour batter to make 4-inch pancakes. Flip when bubbles form on surface.",
      "Serve with warm berries and sugar-free syrup."
    ]
  },
  {
    id: "protein-7",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Shrimp & Chickpea Salad",
    macroTag: "36g protein",
    image: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Chilled shrimp tossed with chickpeas, cucumber, and a lemon vinaigrette.",
    prepTime: "15 mins",
    cookTime: "5 mins",
    servings: 2,
    calories: 420,
    protein: "36g",
    netCarbs: "28g",
    fat: "14g",
    chefTip: "Chill in the fridge for 30 minutes to let flavors meld.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Cooked Shrimp" },
      { amount: 1, unit: "can (15oz)", name: "Chickpeas, drained & rinsed" },
      { amount: 1, unit: "cucumber", name: "Diced" },
      { amount: 2, unit: "tbsp", name: "Olive Oil & Lemon Dressing" }
    ],
    instructions: [
      "In a bowl, combine shrimp, chickpeas, and diced cucumber.",
      "Whisk olive oil, lemon juice, salt, pepper, and dill.",
      "Toss salad with dressing and serve cold."
    ]
  },
  {
    id: "protein-8",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Cottage Cheese Power Bowl",
    macroTag: "31g protein",
    image: "https://images.unsplash.com/photo-1505714197102-6ae95091ed70?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Cottage cheese piled high with berries, seeds, and a drizzle of honey.",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 1,
    calories: 320,
    protein: "31g",
    netCarbs: "24g",
    fat: "7g",
    chefTip: "Use 2% or 4% low-sodium cottage cheese for creamy texture.",
    ingredients: [
      { amount: 1.5, unit: "cups", name: "Low-Fat Cottage Cheese" },
      { amount: 0.5, unit: "cup", name: "Mixed Fresh Berries" },
      { amount: 1, unit: "tbsp", name: "Chia & Pumpkin Seeds" },
      { amount: 1, unit: "tsp", name: "Honey or Maple Syrup" }
    ],
    instructions: [
      "Scoop cottage cheese into a bowl.",
      "Top with fresh berries and seeds.",
      "Drizzle with honey and enjoy."
    ]
  },
  {
    id: "protein-9",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Lentil & Beef Stew",
    macroTag: "40g protein",
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Slow-simmered beef and lentils in a rich, thyme-scented broth.",
    prepTime: "20 mins",
    cookTime: "45 mins",
    servings: 4,
    calories: 480,
    protein: "40g",
    netCarbs: "32g",
    fat: "14g",
    chefTip: "Brown beef thoroughly first to create deep flavor foundation.",
    ingredients: [
      { amount: 1.25, unit: "lbs", name: "Lean Beef Chuck, cubed" },
      { amount: 1, unit: "cup", name: "Brown Lentils" },
      { amount: 4, unit: "cups", name: "Beef Broth" },
      { amount: 2, unit: "carrots", name: "Chopped" },
      { amount: 1, unit: "tsp", name: "Fresh Thyme" }
    ],
    instructions: [
      "Sear beef cubes in a Dutch oven until browned.",
      "Add broth, lentils, carrots, and thyme.",
      "Simmer covered on low heat for 45 minutes until lentils and beef are tender."
    ]
  },
  {
    id: "protein-10",
    category: "protein",
    categoryName: "Protein-Focused",
    title: "Seared Tuna & Edamame",
    macroTag: "45g protein",
    image: "https://images.unsplash.com/photo-1683315446874-e6a629087ef8?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Rare-seared tuna steak sliced over steamed edamame and greens.",
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: 2,
    calories: 410,
    protein: "45g",
    netCarbs: "12g",
    fat: "14g",
    chefTip: "Coat tuna in sesame seeds and sear on super high heat for just 60 seconds per side.",
    ingredients: [
      { amount: 2, unit: "steaks", name: "Ahi Tuna Steaks (6oz each)" },
      { amount: 2, unit: "tbsp", name: "Sesame Seeds" },
      { amount: 1.5, unit: "cups", name: "Shelled Edamame, steamed" },
      { amount: 2, unit: "tbsp", name: "Ponzu or Soy Sauce" }
    ],
    instructions: [
      "Coat ahi tuna steaks with sesame seeds, salt, and pepper.",
      "Sear in hot skillet with sesame oil for 1 minute per side.",
      "Slice tuna thinly and serve over warm edamame with ponzu sauce."
    ]
  },

  // ==================== LOW-CAL MEALS ====================
  {
    id: "lowcal-1",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Zucchini Noodle Primavera",
    macroTag: "260 cal",
    image: "https://images.unsplash.com/photo-1641130382532-2514a6c93859?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Spiralized zucchini tossed with garden vegetables in a light garlic sauce.",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 3,
    calories: 260,
    protein: "9g",
    netCarbs: "18g",
    fat: "14g",
    chefTip: "Add cherry tomatoes at the very end so they burst with fresh juice.",
    ingredients: [
      { amount: 4, unit: "medium", name: "Zucchini, spiralized" },
      { amount: 1, unit: "cup", name: "Cherry Tomatoes, halved" },
      { amount: 1, unit: "cup", name: "Bell Peppers, sliced" },
      { amount: 2, unit: "tbsp", name: "Olive Oil & Garlic" }
    ],
    instructions: [
      "Sauté garlic and peppers in olive oil for 4 minutes.",
      "Add zucchini noodles and tomatoes.",
      "Toss together for 2 minutes until just warm."
    ]
  },
  {
    id: "lowcal-2",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Grilled Chicken Lettuce Wraps",
    macroTag: "290 cal",
    image: "https://images.unsplash.com/photo-1781332149415-f420708ab98f?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Diced grilled chicken and herbs wrapped in crisp butter lettuce cups.",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 3,
    calories: 290,
    protein: "32g",
    netCarbs: "8g",
    fat: "12g",
    chefTip: "Use butter lettuce for soft, easy-to-fold cups.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Chicken Breast, grilled & diced" },
      { amount: 1, unit: "head", name: "Butter Lettuce" },
      { amount: 0.5, unit: "cup", name: "Water Chestnuts & Scallions, chopped" },
      { amount: 2, unit: "tbsp", name: "Hoisin Soy Dip" }
    ],
    instructions: [
      "Toss grilled chicken with chestnuts and scallions.",
      "Spoon mixture into butter lettuce leaves.",
      "Serve with light hoisin soy dip."
    ]
  },
  {
    id: "lowcal-3",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Vegetable Miso Soup",
    macroTag: "150 cal",
    image: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A brothy miso soup loaded with mushrooms, greens, and tofu.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 4,
    calories: 150,
    protein: "10g",
    netCarbs: "12g",
    fat: "5g",
    chefTip: "Whisk miso paste in warm broth before adding to prevent clumping.",
    ingredients: [
      { amount: 4, unit: "cups", name: "Dashi or Veggie Broth" },
      { amount: 3, unit: "tbsp", name: "White Miso Paste" },
      { amount: 1, unit: "cup", name: "Silken Tofu, cubed" },
      { amount: 1, unit: "cup", name: "Shiitake Mushrooms & Spinach" }
    ],
    instructions: [
      "Simmer mushrooms and spinach in broth for 5 minutes.",
      "Remove from heat and whisk in miso paste.",
      "Add tofu cubes and green onions before serving."
    ]
  },
  {
    id: "lowcal-4",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Citrus Shrimp Ceviche",
    macroTag: "180 cal",
    image: "https://images.unsplash.com/photo-1599020792689-9fde458e7e17?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Shrimp cured in lime with tomato, red onion, and cilantro.",
    prepTime: "20 mins",
    cookTime: "0 mins",
    servings: 4,
    calories: 180,
    protein: "24g",
    netCarbs: "8g",
    fat: "4g",
    chefTip: "Use pre-cooked shrimp for quick, safe 10-minute prep.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Shrimp, cooked & diced" },
      { amount: 0.5, unit: "cup", name: "Fresh Lime Juice" },
      { amount: 1, unit: "medium", name: "Tomato & Cucumber, diced" },
      { amount: 0.25, unit: "cup", name: "Cilantro, chopped" }
    ],
    instructions: [
      "Marinate diced shrimp in fresh lime juice for 15 minutes.",
      "Toss in tomato, cucumber, cilantro, red onion, and salt.",
      "Serve chilled with baked tortilla chips or lettuce leaves."
    ]
  },
  {
    id: "lowcal-5",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Cucumber Tomato Feta Salad",
    macroTag: "210 cal",
    image: "https://images.unsplash.com/photo-1542814880-7e62cf14b7c8?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A cool Greek-style salad with crumbled feta and oregano.",
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: 3,
    calories: 210,
    protein: "7g",
    netCarbs: "10g",
    fat: "16g",
    chefTip: "Use English cucumbers so you don't need to peel them.",
    ingredients: [
      { amount: 2, unit: "large", name: "English Cucumbers, diced" },
      { amount: 2, unit: "cups", name: "Cherry Tomatoes" },
      { amount: 0.5, unit: "cup", name: "Feta Cheese, crumbled" },
      { amount: 2, unit: "tbsp", name: "Extra Virgin Olive Oil & Oregano" }
    ],
    instructions: [
      "Combine cucumbers and tomatoes in a bowl.",
      "Drizzle with olive oil, red wine vinegar, and oregano.",
      "Top with crumbled feta cheese."
    ]
  },
  {
    id: "lowcal-6",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Baked Fish & Asparagus",
    macroTag: "280 cal",
    image: "https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A flaky white fish fillet roasted alongside snappy asparagus spears.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    calories: 280,
    protein: "34g",
    netCarbs: "6g",
    fat: "12g",
    chefTip: "Bake in parchment paper foil packets for easy cleanup and tender fish.",
    ingredients: [
      { amount: 2, unit: "fillets", name: "Cod or Halibut (6oz each)" },
      { amount: 1, unit: "bunch", name: "Asparagus, trimmed" },
      { amount: 1, unit: "tbsp", name: "Olive Oil" },
      { amount: 1, unit: "lemon", name: "Sliced" }
    ],
    instructions: [
      "Season fish and asparagus with olive oil, lemon juice, salt, and garlic powder.",
      "Bake at 400°F (200°C) for 15 minutes.",
      "Serve warm."
    ]
  },
  {
    id: "lowcal-7",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Turkey Lettuce Tacos",
    macroTag: "240 cal",
    image: "https://images.unsplash.com/photo-1643594462181-7667928d072e?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Seasoned ground turkey spooned into crunchy lettuce shells.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 3,
    calories: 240,
    protein: "28g",
    netCarbs: "6g",
    fat: "10g",
    chefTip: "Top with salsa and fresh cilantro.",
    ingredients: [
      { amount: 1, unit: "lb", name: "93% Lean Ground Turkey" },
      { amount: 1, unit: "pkt", name: "Low-Sodium Taco Seasoning" },
      { amount: 1, unit: "head", name: "Romaine or Iceberg Lettuce" },
      { amount: 0.5, unit: "cup", name: "Salsa" }
    ],
    instructions: [
      "Brown turkey in a skillet with taco seasoning.",
      "Spoon into lettuce cups.",
      "Top with salsa."
    ]
  },
  {
    id: "lowcal-8",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Roasted Vegetable Medley",
    macroTag: "170 cal",
    image: "https://images.unsplash.com/photo-1619957666910-bf7ba37cda1b?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A colorful tray of roasted root vegetables finished with herbs.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    calories: 170,
    protein: "4g",
    netCarbs: "22g",
    fat: "8g",
    chefTip: "Cut veggies into uniform sizes for even roasting.",
    ingredients: [
      { amount: 2, unit: "cups", name: "Carrots & Zucchini, chopped" },
      { amount: 2, unit: "cups", name: "Brussels Sprouts & Bell Peppers" },
      { amount: 2, unit: "tbsp", name: "Olive Oil & Rosemary" }
    ],
    instructions: [
      "Toss veggies with olive oil, rosemary, salt, and pepper.",
      "Roast at 400°F (200°C) for 25 minutes until caramelized."
    ]
  },
  {
    id: "lowcal-9",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Chicken & Vegetable Stir-Fry",
    macroTag: "300 cal",
    image: "https://images.unsplash.com/photo-1777891258069-454e66f8bedc?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Quick-seared chicken and crisp vegetables in a light soy glaze.",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 3,
    calories: 300,
    protein: "34g",
    netCarbs: "14g",
    fat: "10g",
    chefTip: "Cook on high heat for snappy vegetables.",
    ingredients: [
      { amount: 1, unit: "lb", name: "Chicken Breast, sliced" },
      { amount: 3, unit: "cups", name: "Mixed Vegetables (Snap peas, carrots, broccoli)" },
      { amount: 2, unit: "tbsp", name: "Low-Sodium Soy Sauce & Sesame Oil" }
    ],
    instructions: [
      "Sear chicken in sesame oil over high heat for 5 minutes.",
      "Add vegetables and soy sauce, stir-fry 4 minutes.",
      "Serve hot."
    ]
  },
  {
    id: "lowcal-10",
    category: "lowcal",
    categoryName: "Low-Cal Meals",
    title: "Egg White Veggie Omelet",
    macroTag: "190 cal",
    image: "https://images.unsplash.com/photo-1612871689804-26a67131416e?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Fluffy egg whites folded around spinach, peppers, and onion.",
    prepTime: "5 mins",
    cookTime: "8 mins",
    servings: 1,
    calories: 190,
    protein: "22g",
    netCarbs: "6g",
    fat: "6g",
    chefTip: "Use a non-stick skillet to cook with minimal oil.",
    ingredients: [
      { amount: 1, unit: "cup", name: "Egg Whites" },
      { amount: 0.5, unit: "cup", name: "Baby Spinach" },
      { amount: 0.25, unit: "cup", name: "Diced Bell Peppers" },
      { amount: 1, unit: "tbsp", name: "Goat Cheese or Feta" }
    ],
    instructions: [
      "Sauté spinach and peppers for 2 minutes.",
      "Pour egg whites into skillet and cook until set.",
      "Fold over cheese and serve."
    ]
  },

  // ==================== MEAT-FOCUSED ====================
  {
    id: "meat-1",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Smoked Beef Brisket",
    macroTag: "12-hour smoke",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Low-and-slow smoked brisket with a deep bark and a pink smoke ring.",
    prepTime: "30 mins",
    cookTime: "12 hours",
    servings: 10,
    calories: 650,
    protein: "52g",
    netCarbs: "1g",
    fat: "48g",
    chefTip: "Use coarse black pepper and kosher salt (Dalmatian rub) for the ultimate Texas brisket bark.",
    ingredients: [
      { amount: 1, unit: "whole packer", name: "Beef Brisket (12-14 lbs)" },
      { amount: 0.25, unit: "cup", name: "Coarse Black Pepper" },
      { amount: 0.25, unit: "cup", name: "Kosher Salt" },
      { amount: 1, unit: "tbsp", name: "Garlic Powder" }
    ],
    instructions: [
      "Trim brisket fat cap to 1/4-inch thickness.",
      "Season heavily with salt, black pepper, and garlic powder.",
      "Smoke over oak wood at 225°F (107°C) for 12 hours until internal temperature reaches 203°F.",
      "Rest wrapped in butcher paper for at least 1 hour before slicing against the grain."
    ]
  },
  {
    id: "meat-2",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Grilled Ribeye Steak",
    macroTag: "Serves 2",
    image: "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A thick-cut ribeye grilled to a crusted medium-rare.",
    prepTime: "10 mins",
    cookTime: "12 mins",
    servings: 2,
    calories: 720,
    protein: "56g",
    netCarbs: "0g",
    fat: "54g",
    chefTip: "Baste with garlic butter during the last 2 minutes.",
    ingredients: [
      { amount: 1, unit: "thick-cut (16oz)", name: "Ribeye Steak" },
      { amount: 2, unit: "tbsp", name: "Butter" },
      { amount: 2, unit: "sprigs", name: "Fresh Rosemary & Thyme" },
      { amount: 2, unit: "cloves", name: "Garlic, crushed" }
    ],
    instructions: [
      "Bring ribeye to room temperature for 30 minutes. Season generously with salt and pepper.",
      "Sear in a piping hot cast-iron skillet or grill for 4-5 minutes per side.",
      "Baste with butter, garlic, and rosemary for 2 minutes.",
      "Rest 5 minutes before slicing."
    ]
  },
  {
    id: "meat-3",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "BBQ Pulled Pork Sandwich",
    macroTag: "8-hour braise",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Slow-cooked pork shoulder shredded and piled high with tangy BBQ sauce.",
    prepTime: "15 mins",
    cookTime: "8 hours",
    servings: 8,
    calories: 540,
    protein: "42g",
    netCarbs: "34g",
    fat: "24g",
    chefTip: "Shred while piping hot using two forks.",
    ingredients: [
      { amount: 4, unit: "lbs", name: "Pork Shoulder / Boston Butt" },
      { amount: 2, unit: "tbsp", name: "Pork BBQ Rub" },
      { amount: 1, unit: "cup", name: "BBQ Sauce" },
      { amount: 8, unit: "brioche", name: "Buns" }
    ],
    instructions: [
      "Rub pork shoulder with BBQ spice rub.",
      "Slow cook on LOW for 8 hours until fork tender.",
      "Shred pork, toss with BBQ sauce, and serve on toasted brioche buns."
    ]
  },
  {
    id: "meat-4",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Herb-Roasted Whole Chicken",
    macroTag: "Serves 4",
    image: "https://images.unsplash.com/photo-1668838195568-6a336797587f?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A whole chicken roasted with butter, garlic, and fresh herbs under the skin.",
    prepTime: "15 mins",
    cookTime: "1 hour 15 mins",
    servings: 4,
    calories: 580,
    protein: "48g",
    netCarbs: "2g",
    fat: "40g",
    chefTip: "Stuff lemon halves and fresh herbs inside the cavity for inner moisture.",
    ingredients: [
      { amount: 1, unit: "whole (4-5 lbs)", name: "Roasting Chicken" },
      { amount: 4, unit: "tbsp", name: "Softened Butter" },
      { amount: 1, unit: "head", name: "Garlic, halved" },
      { amount: 1, unit: "bunch", name: "Fresh Rosemary & Thyme" }
    ],
    instructions: [
      "Pat chicken completely dry inside and out.",
      "Rub herb butter under and over the skin.",
      "Roast at 425°F (220°C) for 75 minutes until skin is crispy and thighs reach 165°F.",
      "Rest 10 minutes before carving."
    ]
  },
  {
    id: "meat-5",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Rosemary Lamb Chops",
    macroTag: "Serves 2",
    image: "https://images.unsplash.com/photo-1558030089-02acba3c214e?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Pan-seared lamb chops finished with rosemary and garlic butter.",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 2,
    calories: 520,
    protein: "42g",
    netCarbs: "1g",
    fat: "38g",
    chefTip: "Sear fat cap side first to render the fat until golden.",
    ingredients: [
      { amount: 6, unit: "rib", name: "Lamb Chops" },
      { amount: 2, unit: "tbsp", name: "Olive Oil" },
      { amount: 3, unit: "cloves", name: "Garlic, minced" },
      { amount: 2, unit: "tbsp", name: "Fresh Rosemary, chopped" }
    ],
    instructions: [
      "Season lamb chops with salt, pepper, garlic, and chopped rosemary.",
      "Sear in hot skillet with olive oil for 3-4 minutes per side.",
      "Rest 5 minutes and serve warm."
    ]
  },
  {
    id: "meat-6",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Braised Beef Short Ribs",
    macroTag: "3-hour braise",
    image: "https://images.unsplash.com/photo-1633436375795-12b3b339712f?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Fork-tender short ribs braised for hours in red wine and stock.",
    prepTime: "20 mins",
    cookTime: "3 hours",
    servings: 4,
    calories: 680,
    protein: "46g",
    netCarbs: "8g",
    fat: "50g",
    chefTip: "Sear deep brown crust on all 4 sides of the short ribs before braising.",
    ingredients: [
      { amount: 3, unit: "lbs", name: "Bone-in Beef Short Ribs" },
      { amount: 2, unit: "cups", name: "Red Wine (Cabernet)" },
      { amount: 2, unit: "cups", name: "Beef Stock" },
      { amount: 1, unit: "onion & carrot", name: "Diced" }
    ],
    instructions: [
      "Sear short ribs heavily on all sides in a Dutch oven.",
      "Sauté onions and carrots, deglaze with red wine.",
      "Return ribs, add stock, cover and braise in oven at 325°F (160°C) for 3 hours until meltingly tender."
    ]
  },
  {
    id: "meat-7",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Bacon-Wrapped Pork Tenderloin",
    macroTag: "Serves 4",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A whole tenderloin wrapped in bacon and roasted until glazed.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    calories: 480,
    protein: "44g",
    netCarbs: "4g",
    fat: "30g",
    chefTip: "Glaze with maple mustard during the last 10 minutes.",
    ingredients: [
      { amount: 1.5, unit: "lbs", name: "Pork Tenderloin" },
      { amount: 8, unit: "slices", name: "Bacon" },
      { amount: 2, unit: "tbsp", name: "Dijon Mustard & Maple Syrup" }
    ],
    instructions: [
      "Wrap bacon slices overlap-style around tenderloin.",
      "Roast at 400°F (200°C) for 25 minutes.",
      "Brush with maple mustard glaze and roast 5 more minutes until 145°F internal temperature."
    ]
  },
  {
    id: "meat-8",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Classic Beef Burger",
    macroTag: "Serves 1",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A thick, char-grilled patty stacked with all the fixings.",
    prepTime: "5 mins",
    cookTime: "8 mins",
    servings: 1,
    calories: 610,
    protein: "38g",
    netCarbs: "28g",
    fat: "38g",
    chefTip: "Press a thumb dent in center of raw patty so it stays flat while cooking.",
    ingredients: [
      { amount: 0.5, unit: "lb", name: "Ground Beef Patty (80/20)" },
      { amount: 1, unit: "slice", name: "Cheddar Cheese" },
      { amount: 1, unit: "brioche", name: "Bun, toasted" },
      { amount: 1, unit: "slice", name: "Tomato, Lettuce & Pickle" }
    ],
    instructions: [
      "Grill beef patty over high heat for 4 minutes per side.",
      "Melt cheese on top during last minute.",
      "Assemble on toasted brioche bun with fresh toppings."
    ]
  },
  {
    id: "meat-9",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Grilled Sausage Platter",
    macroTag: "Serves 4",
    image: "https://images.unsplash.com/photo-1777195132418-a4c365717f2e?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "An assortment of grilled sausages served straight off the fire.",
    prepTime: "5 mins",
    cookTime: "15 mins",
    servings: 4,
    calories: 520,
    protein: "28g",
    netCarbs: "6g",
    fat: "42g",
    chefTip: "Serve with spicy brown mustard and grilled peppers.",
    ingredients: [
      { amount: 4, unit: "assorted", name: "Craft Sausages (Bratwurst, Italian, Kielbasa)" },
      { amount: 2, unit: "cups", name: "Peppers & Onions, sliced" },
      { amount: 2, unit: "tbsp", name: "Spicy German Mustard" }
    ],
    instructions: [
      "Grill sausages over medium flame for 12-15 minutes, turning often.",
      "Grill sliced peppers and onions in a foil pan beside sausages.",
      "Slice and serve with spicy mustard."
    ]
  },
  {
    id: "meat-10",
    category: "meat",
    categoryName: "Meat-Focused",
    title: "Pork Carnitas",
    macroTag: "Serves 6",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Braised then crisped pork shoulder, ready for tacos or a plate.",
    prepTime: "15 mins",
    cookTime: "3.5 hours",
    servings: 6,
    calories: 540,
    protein: "44g",
    netCarbs: "4g",
    fat: "38g",
    chefTip: "Broil shredded pork on a baking sheet to get crispy golden edges before serving.",
    ingredients: [
      { amount: 3.5, unit: "lbs", name: "Pork Butt, cubed" },
      { amount: 1, unit: "orange", name: "Juiced" },
      { amount: 1, unit: "tbsp", name: "Cumin & Oregano" },
      { amount: 4, unit: "cloves", name: "Garlic, smashed" }
    ],
    instructions: [
      "Combine pork, orange juice, garlic, and spices in a Dutch oven with water.",
      "Simmer covered for 3 hours until pork shreds easily.",
      "Shred pork and broil on high for 5 minutes until crisp."
    ]
  },

  // ==================== VEGAN ====================
  {
    id: "vegan-1",
    category: "vegan",
    categoryName: "Vegan",
    title: "Chickpea Buddha Bowl",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Roasted chickpeas, greens, and grains with a tahini drizzle.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 2,
    calories: 440,
    protein: "16g",
    netCarbs: "54g",
    fat: "18g",
    chefTip: "Roast chickpeas with cumin and paprika for crunchy savory flavor.",
    ingredients: [
      { amount: 1, unit: "can (15oz)", name: "Chickpeas, rinsed & dried" },
      { amount: 1, unit: "cup", name: "Cooked Brown Rice or Farro" },
      { amount: 2, unit: "cups", name: "Kale or Spinach" },
      { amount: 2, unit: "tbsp", name: "Creamy Lemon Tahini Dressing" }
    ],
    instructions: [
      "Roast chickpeas with olive oil and spices at 400°F (200°C) for 20 minutes.",
      "Build bowl with grain base, fresh greens, and roasted chickpeas.",
      "Drizzle with lemon tahini sauce."
    ]
  },
  {
    id: "vegan-2",
    category: "vegan",
    categoryName: "Vegan",
    title: "Vegan Red Lentil Curry",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Red lentils simmered in coconut milk with warm curry spices.",
    prepTime: "10 mins",
    cookTime: "25 mins",
    servings: 4,
    calories: 380,
    protein: "18g",
    netCarbs: "44g",
    fat: "14g",
    chefTip: "Stir in fresh spinach right at the end to wilt gently.",
    ingredients: [
      { amount: 1, unit: "cup", name: "Dry Red Lentils, rinsed" },
      { amount: 1, unit: "can (13.5oz)", name: "Light Coconut Milk" },
      { amount: 2, unit: "tbsp", name: "Yellow Curry Paste" },
      { amount: 1, unit: "can (14oz)", name: "Diced Tomatoes" }
    ],
    instructions: [
      "Sauté garlic, ginger, and curry paste in oil for 2 minutes.",
      "Add lentils, coconut milk, diced tomatoes, and 1 cup water.",
      "Simmer covered for 20-25 minutes until lentils are soft.",
      "Serve over basmati rice."
    ]
  },
  {
    id: "vegan-3",
    category: "vegan",
    categoryName: "Vegan",
    title: "Stuffed Bell Peppers",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1631311695255-8dde6bf96cb5?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Bell peppers filled with seasoned rice, black beans, and corn.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    calories: 320,
    protein: "12g",
    netCarbs: "48g",
    fat: "8g",
    chefTip: "Pre-bake pepper halves for 10 minutes so they get sweet and tender.",
    ingredients: [
      { amount: 4, unit: "large", name: "Bell Peppers, halved & seeded" },
      { amount: 1, unit: "can (15oz)", name: "Black Beans, rinsed" },
      { amount: 1, unit: "cup", name: "Cooked Brown Rice" },
      { amount: 0.5, unit: "cup", name: "Sweet Corn & Salsa" }
    ],
    instructions: [
      "Mix black beans, cooked rice, corn, salsa, and taco seasoning.",
      "Stuff mixture tightly inside bell pepper halves.",
      "Bake at 375°F (190°C) for 30 minutes until peppers are soft."
    ]
  },
  {
    id: "vegan-4",
    category: "vegan",
    categoryName: "Vegan",
    title: "Vegan Mushroom Risotto",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1567575990843-105a1c70d76e?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Creamy arborio rice made rich with mushrooms and nutritional yeast.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    calories: 360,
    protein: "10g",
    netCarbs: "52g",
    fat: "10g",
    chefTip: "Add warm vegetable broth one ladle at a time, stirring constantly.",
    ingredients: [
      { amount: 1.5, unit: "cups", name: "Arborio Rice" },
      { amount: 8, unit: "oz", name: "Cremini Mushrooms, sliced" },
      { amount: 4, unit: "cups", name: "Warm Vegetable Broth" },
      { amount: 3, unit: "tbsp", name: "Nutritional Yeast" }
    ],
    instructions: [
      "Sauté mushrooms and garlic in olive oil until golden.",
      "Add arborio rice and toast for 2 minutes.",
      "Gradually add warm broth 1/2 cup at a time while stirring until creamy.",
      "Stir in nutritional yeast and serve immediately."
    ]
  },
  {
    id: "vegan-5",
    category: "vegan",
    categoryName: "Vegan",
    title: "Black Bean Tacos",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1623428188495-89c064ee061a?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Seasoned black beans in warm tortillas with avocado and salsa.",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 3,
    calories: 350,
    protein: "12g",
    netCarbs: "46g",
    fat: "14g",
    chefTip: "Char corn tortillas over gas stove flame for smoky street taco flavor.",
    ingredients: [
      { amount: 1, unit: "can (15oz)", name: "Black Beans, warm & seasoned" },
      { amount: 6, unit: "small", name: "Corn Tortillas" },
      { amount: 1, unit: "ripe", name: "Avocado, sliced" },
      { amount: 0.5, unit: "cup", name: "Pico de Gallo" }
    ],
    instructions: [
      "Heat black beans with cumin, chili powder, and salt.",
      "Warm corn tortillas.",
      "Fill with black beans, avocado slices, and pico de gallo."
    ]
  },
  {
    id: "vegan-6",
    category: "vegan",
    categoryName: "Vegan",
    title: "Vegan Pad Thai",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1623428188474-b1d532c5e560?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Rice noodles tossed in a tamarind sauce with tofu and peanuts.",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: 3,
    calories: 420,
    protein: "16g",
    netCarbs: "58g",
    fat: "14g",
    chefTip: "Press extra-firm tofu dry before pan-frying so it gets golden and crisp.",
    ingredients: [
      { amount: 8, unit: "oz", name: "Pad Thai Rice Noodles" },
      { amount: 8, unit: "oz", name: "Extra Firm Tofu, cubed" },
      { amount: 3, unit: "tbsp", name: "Tamarind Soy Sauce" },
      { amount: 0.25, unit: "cup", name: "Crushed Peanuts & Bean Sprouts" }
    ],
    instructions: [
      "Soak rice noodles in warm water until soft.",
      "Pan-fry tofu cubes until golden.",
      "Toss noodles, tofu, and tamarind sauce in a hot wok.",
      "Garnish with crushed peanuts and bean sprouts."
    ]
  },
  {
    id: "vegan-7",
    category: "vegan",
    categoryName: "Vegan",
    title: "Roasted Vegetable Grain Bowl",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Farro topped with roasted seasonal vegetables and a citrus dressing.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 3,
    calories: 390,
    protein: "12g",
    netCarbs: "56g",
    fat: "12g",
    chefTip: "Farro has a delightful chewy texture that holds up well for meal prep.",
    ingredients: [
      { amount: 1, unit: "cup", name: "Cooked Farro" },
      { amount: 2, unit: "cups", name: "Sweet Potato & Cauliflower, roasted" },
      { amount: 1, unit: "cup", name: "Arugula" },
      { amount: 2, unit: "tbsp", name: "Lemon Herb Vinaigrette" }
    ],
    instructions: [
      "Roast sweet potato and cauliflower cubes at 400°F (200°C) for 25 mins.",
      "Assemble bowls with farro, fresh arugula, and roasted veggies.",
      "Drizzle with lemon herb vinaigrette."
    ]
  },
  {
    id: "vegan-8",
    category: "vegan",
    categoryName: "Vegan",
    title: "Smoky Vegan Chili",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1707080023804-ccf44ad50af2?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "A hearty three-bean chili simmered with smoked paprika.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 6,
    calories: 320,
    protein: "16g",
    netCarbs: "46g",
    fat: "4g",
    chefTip: "Serve with avocado slices and corn chips.",
    ingredients: [
      { amount: 3, unit: "cans", name: "Assorted Beans (Black, Kidney, Pinto)" },
      { amount: 1, unit: "can (28oz)", name: "Crushed Tomatoes" },
      { amount: 2, unit: "tbsp", name: "Chili Powder & Smoked Paprika" },
      { amount: 1, unit: "onion & pepper", name: "Diced" }
    ],
    instructions: [
      "Sauté onion and bell pepper in pot.",
      "Add beans, crushed tomatoes, chili powder, and smoked paprika.",
      "Simmer for 30 minutes until thick and rich."
    ]
  },
  {
    id: "vegan-9",
    category: "vegan",
    categoryName: "Vegan",
    title: "Crispy Tofu Stir-Fry",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1623428187425-873f16e10554?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Pan-crisped tofu tossed with vegetables in a ginger-soy sauce.",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: 3,
    calories: 340,
    protein: "18g",
    netCarbs: "24g",
    fat: "18g",
    chefTip: "Toss tofu in 1 tbsp cornstarch before pan frying for ultimate crunch.",
    ingredients: [
      { amount: 1, unit: "block (14oz)", name: "Extra Firm Tofu, cubed" },
      { amount: 1, unit: "tbsp", name: "Cornstarch" },
      { amount: 2, unit: "cups", name: "Stir-Fry Vegetables" },
      { amount: 3, unit: "tbsp", name: "Sesame Ginger Soy Sauce" }
    ],
    instructions: [
      "Coat tofu in cornstarch, pan-fry in oil until crispy on all sides.",
      "Sauté vegetables in same pan.",
      "Toss with ginger-soy sauce and serve warm."
    ]
  },
  {
    id: "vegan-10",
    category: "vegan",
    categoryName: "Vegan",
    title: "Cashew Cream Pasta",
    macroTag: "100% plant",
    image: "https://images.unsplash.com/photo-1623428186429-e76984bf48ad?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    description: "Pasta coated in a silky sauce made from blended cashews.",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: 4,
    calories: 410,
    protein: "14g",
    netCarbs: "52g",
    fat: "16g",
    chefTip: "Soak raw cashews in boiling water for 15 minutes before blending.",
    ingredients: [
      { amount: 8, unit: "oz", name: "Penne or Fettuccine Pasta" },
      { amount: 1, unit: "cup", name: "Raw Cashews, soaked & drained" },
      { amount: 0.75, unit: "cup", name: "Warm Water or Veggie Stock" },
      { amount: 3, unit: "cloves", name: "Garlic & 2 tbsp Nutritional Yeast" }
    ],
    instructions: [
      "Boil pasta according to package directions.",
      "Blend soaked cashews, warm water, garlic, nutritional yeast, salt, and lemon juice until velvety smooth.",
      "Toss hot drained pasta with cashew cream and fresh basil."
    ]
  }
];
