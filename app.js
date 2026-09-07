// State Management
let currentFilter = 'all';
let searchQuery = '';
let activeRecipeIndex = -1;
let currentFilteredList = [...RECIPES_DATA];
let currentServings = 4;
let savedRecipeIds = JSON.parse(localStorage.getItem('recipe_ranch_saved') || '[]');

// DOM Elements
const gridContainers = {
  keto: document.querySelector('#keto .grid'),
  protein: document.querySelector('#protein .grid'),
  lowcal: document.querySelector('#lowcal .grid'),
  meat: document.querySelector('#meat .grid'),
  vegan: document.querySelector('#vegan .grid')
};
const categoryBands = {
  keto: document.getElementById('keto'),
  protein: document.getElementById('protein'),
  lowcal: document.getElementById('lowcal'),
  meat: document.getElementById('meat'),
  vegan: document.getElementById('vegan')
};

const searchInput = document.getElementById('recipe-search');
const filterNavButtons = document.querySelectorAll('.filter-btn');
const savedCountBadge = document.getElementById('saved-count');
const activeFilterBadge = document.getElementById('active-filter-badge');

// Modal Elements
const modalBackdrop = document.getElementById('recipe-modal');
const modalCloseBtn = document.getElementById('close-modal-btn');
const prevRecipeBtn = document.getElementById('prev-recipe-btn');
const nextRecipeBtn = document.getElementById('next-recipe-btn');
const modalHeroImg = document.getElementById('modal-hero-img');
const modalCategoryTag = document.getElementById('modal-category-tag');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrepTime = document.getElementById('modal-prep-time');
const modalCookTime = document.getElementById('modal-cook-time');
const modalCalories = document.getElementById('modal-calories');
const modalProtein = document.getElementById('modal-protein');
const modalCarbs = document.getElementById('modal-carbs');
const modalFat = document.getElementById('modal-fat');

const servingsNumDisplay = document.getElementById('servings-num');
const servingsMinusBtn = document.getElementById('servings-minus');
const servingsPlusBtn = document.getElementById('servings-plus');
const ingredientsListEl = document.getElementById('modal-ingredients-list');
const instructionsListEl = document.getElementById('modal-instructions-list');
const chefTipBoxEl = document.getElementById('modal-chef-tip-box');
const chefTipTextEl = document.getElementById('modal-chef-tip-text');

const bookmarkBtn = document.getElementById('bookmark-btn');
const printBtn = document.getElementById('print-btn');
const copyIngredientsBtn = document.getElementById('copy-ingredients-btn');
const toastEl = document.getElementById('toast');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderAllGrids();
  updateSavedBadge();
  setupEventListeners();
});

// Helper: Format amounts to pretty fractions
function formatAmount(amount) {
  if (!amount || isNaN(amount)) return '';
  const whole = Math.floor(amount);
  const frac = amount - whole;

  let fracStr = '';
  if (Math.abs(frac - 0.25) < 0.05) fracStr = '¼';
  else if (Math.abs(frac - 0.33) < 0.05) fracStr = '⅓';
  else if (Math.abs(frac - 0.5) < 0.05) fracStr = '½';
  else if (Math.abs(frac - 0.66) < 0.05) fracStr = '⅔';
  else if (Math.abs(frac - 0.75) < 0.05) fracStr = '¾';
  else if (frac > 0.05) fracStr = frac.toFixed(1);

  if (whole === 0) return fracStr || '1';
  if (!fracStr) return whole.toString();
  return `${whole} ${fracStr}`;
}

// Render Recipe Cards Into Grids
function renderAllGrids() {
  const query = searchQuery.trim().toLowerCase();

  // Filter list by category and search
  currentFilteredList = RECIPES_DATA.filter(recipe => {
    const matchesCategory =
      currentFilter === 'all' ? true :
      currentFilter === 'saved' ? savedRecipeIds.includes(recipe.id) :
      recipe.category === currentFilter;

    const matchesSearch =
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.categoryName.toLowerCase().includes(query) ||
      recipe.ingredients.some(i => i.name.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  // Group by category
  const categorized = { keto: [], protein: [], lowcal: [], meat: [], vegan: [] };
  currentFilteredList.forEach(r => {
    if (categorized[r.category]) {
      categorized[r.category].push(r);
    }
  });

  // Render each section
  Object.keys(gridContainers).forEach(cat => {
    const container = gridContainers[cat];
    const band = categoryBands[cat];
    const recipes = categorized[cat];

    if (!container) return;
    container.innerHTML = '';

    if (recipes.length === 0) {
      if (currentFilter === cat || (currentFilter === 'all' && query !== '')) {
        band.style.display = 'block';
        container.innerHTML = `
          <div class="no-results">
            <h3>No recipes found</h3>
            <p>Try searching for a different ingredient or clearing your filter.</p>
          </div>
        `;
      } else {
        band.style.display = 'none';
      }
    } else {
      band.style.display = 'block';
      recipes.forEach(recipe => {
        const isSaved = savedRecipeIds.includes(recipe.id);
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-id', recipe.id);
        card.innerHTML = `
          <div class="card-img" style="background-image:url('${recipe.image}')">
            <span class="macro-tag">${recipe.macroTag}</span>
            ${isSaved ? '<span class="bookmark-icon-badge">★</span>' : ''}
            <div class="card-hover-overlay">
              <span class="card-hover-btn">View Recipe ➔</span>
            </div>
          </div>
          <div class="card-body">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <div class="card-footer-meta">
              <span>⏱ ${recipe.prepTime} prep</span>
              <span>🔥 ${recipe.calories} cal</span>
            </div>
          </div>
        `;

        card.addEventListener('click', () => {
          openRecipeModal(recipe.id);
        });

        container.appendChild(card);
      });
    }
  });

  // Update badge display text
  if (currentFilter === 'saved') {
    activeFilterBadge.textContent = `Showing Saved Recipes (${currentFilteredList.length})`;
  } else if (query) {
    activeFilterBadge.textContent = `Search results for "${query}" (${currentFilteredList.length})`;
  } else if (currentFilter !== 'all') {
    activeFilterBadge.textContent = `Filtered by ${currentFilter.toUpperCase()}`;
  } else {
    activeFilterBadge.textContent = '';
  }
}

// Open Recipe Modal
function openRecipeModal(recipeId) {
  const index = currentFilteredList.findIndex(r => r.id === recipeId);
  if (index === -1) {
    // If not found in current view filter, search in master list
    const masterIndex = RECIPES_DATA.findIndex(r => r.id === recipeId);
    if (masterIndex !== -1) {
      currentFilteredList = [...RECIPES_DATA];
      activeRecipeIndex = masterIndex;
    } else return;
  } else {
    activeRecipeIndex = index;
  }

  const recipe = currentFilteredList[activeRecipeIndex];
  currentServings = recipe.servings;

  updateModalContent(recipe);
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Close Modal
function closeRecipeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Update Modal Fields
function updateModalContent(recipe) {
  modalHeroImg.style.backgroundImage = `url('${recipe.image}')`;
  modalCategoryTag.textContent = recipe.categoryName;
  modalTitle.textContent = recipe.title;
  modalDescription.textContent = recipe.description;
  modalPrepTime.textContent = recipe.prepTime;
  modalCookTime.textContent = recipe.cookTime;
  modalCalories.textContent = recipe.calories;
  modalProtein.textContent = recipe.protein;
  modalCarbs.textContent = recipe.netCarbs || recipe.carbs || 'N/A';
  modalFat.textContent = recipe.fat;

  servingsNumDisplay.textContent = currentServings;
  renderIngredients(recipe);
  renderInstructions(recipe);

  if (recipe.chefTip) {
    chefTipBoxEl.style.display = 'block';
    chefTipTextEl.textContent = recipe.chefTip;
  } else {
    chefTipBoxEl.style.display = 'none';
  }

  updateBookmarkBtn(recipe.id);
  updateModalNavState();
}

// Render Scaled Ingredients
function renderIngredients(recipe) {
  ingredientsListEl.innerHTML = '';
  const scaleRatio = currentServings / recipe.servings;

  recipe.ingredients.forEach(ing => {
    const scaledAmount = ing.amount ? ing.amount * scaleRatio : null;
    const formattedAmt = scaledAmount ? formatAmount(scaledAmount) : '';
    const noteText = ing.note ? `, <em>${ing.note}</em>` : '';

    const li = document.createElement('li');
    li.className = 'ingredient-item';
    li.innerHTML = `
      <input type="checkbox">
      <div>
        <span class="ing-amount">${formattedAmt} ${ing.unit || ''}</span>
        <span class="ing-name">${ing.name}${noteText}</span>
      </div>
    `;

    // Toggle checked state on click
    li.addEventListener('click', (e) => {
      const checkbox = li.querySelector('input');
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      li.classList.toggle('checked', checkbox.checked);
    });

    ingredientsListEl.appendChild(li);
  });
}

// Render Instructions
function renderInstructions(recipe) {
  instructionsListEl.innerHTML = '';
  recipe.instructions.forEach((stepText, idx) => {
    const li = document.createElement('li');
    li.className = 'instruction-step';
    li.innerHTML = `
      <div class="step-num">${idx + 1}</div>
      <div class="step-text">${stepText}</div>
    `;
    instructionsListEl.appendChild(li);
  });
}

// Modal Nav Next/Prev
function updateModalNavState() {
  prevRecipeBtn.disabled = activeRecipeIndex <= 0;
  nextRecipeBtn.disabled = activeRecipeIndex >= currentFilteredList.length - 1;
  prevRecipeBtn.style.opacity = activeRecipeIndex <= 0 ? '0.4' : '1';
  nextRecipeBtn.style.opacity = activeRecipeIndex >= currentFilteredList.length - 1 ? '0.4' : '1';
}

function navigateRecipe(direction) {
  const newIndex = activeRecipeIndex + direction;
  if (newIndex >= 0 && newIndex < currentFilteredList.length) {
    activeRecipeIndex = newIndex;
    const recipe = currentFilteredList[activeRecipeIndex];
    currentServings = recipe.servings;
    updateModalContent(recipe);
  }
}

// Favorites / Bookmarks logic
function updateSavedBadge() {
  savedCountBadge.textContent = savedRecipeIds.length;
}

function toggleBookmark(recipeId) {
  if (savedRecipeIds.includes(recipeId)) {
    savedRecipeIds = savedRecipeIds.filter(id => id !== recipeId);
    showToast('Removed from Saved Recipes');
  } else {
    savedRecipeIds.push(recipeId);
    showToast('⭐ Saved to your Recipe Ranch favorites!');
  }

  localStorage.setItem('recipe_ranch_saved', JSON.stringify(savedRecipeIds));
  updateSavedBadge();
  updateBookmarkBtn(recipeId);
  renderAllGrids();
}

function updateBookmarkBtn(recipeId) {
  const isSaved = savedRecipeIds.includes(recipeId);
  if (isSaved) {
    bookmarkBtn.classList.add('saved');
    bookmarkBtn.innerHTML = '★ Saved';
  } else {
    bookmarkBtn.classList.remove('saved');
    bookmarkBtn.innerHTML = '☆ Save Recipe';
  }
}

// Toast notification
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2800);
}

// Event Listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderAllGrids();
  });

  // Filter Buttons
  filterNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterNavButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderAllGrids();
    });
  });

  // Modal Controls
  modalCloseBtn.addEventListener('click', closeRecipeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeRecipeModal();
  });

  prevRecipeBtn.addEventListener('click', () => navigateRecipe(-1));
  nextRecipeBtn.addEventListener('click', () => navigateRecipe(1));

  // Keybindings for modal
  document.addEventListener('keydown', (e) => {
    if (!modalBackdrop.classList.contains('open')) return;
    if (e.key === 'Escape') closeRecipeModal();
    if (e.key === 'ArrowLeft') navigateRecipe(-1);
    if (e.key === 'ArrowRight') navigateRecipe(1);
  });

  // Servings Scaler
  servingsMinusBtn.addEventListener('click', () => {
    if (currentServings > 1) {
      currentServings--;
      servingsNumDisplay.textContent = currentServings;
      const recipe = currentFilteredList[activeRecipeIndex];
      renderIngredients(recipe);
    }
  });

  servingsPlusBtn.addEventListener('click', () => {
    if (currentServings < 20) {
      currentServings++;
      servingsNumDisplay.textContent = currentServings;
      const recipe = currentFilteredList[activeRecipeIndex];
      renderIngredients(recipe);
    }
  });

  // Bookmark Button in modal
  bookmarkBtn.addEventListener('click', () => {
    const recipe = currentFilteredList[activeRecipeIndex];
    if (recipe) toggleBookmark(recipe.id);
  });

  // Copy Ingredients Button
  copyIngredientsBtn.addEventListener('click', () => {
    const recipe = currentFilteredList[activeRecipeIndex];
    if (!recipe) return;

    const scaleRatio = currentServings / recipe.servings;
    let listText = `📋 ${recipe.title} - Ingredients (${currentServings} Servings):\n\n`;

    recipe.ingredients.forEach(ing => {
      const scaledAmount = ing.amount ? ing.amount * scaleRatio : null;
      const formattedAmt = scaledAmount ? formatAmount(scaledAmount) : '';
      const noteText = ing.note ? ` (${ing.note})` : '';
      listText += `• ${formattedAmt} ${ing.unit || ''} ${ing.name}${noteText}\n`;
    });

    navigator.clipboard.writeText(listText).then(() => {
      showToast('Copied ingredient list to clipboard!');
    }).catch(() => {
      showToast('Copied to clipboard');
    });
  });

  // Print Recipe Button
  printBtn.addEventListener('click', () => {
    window.print();
  });
}
