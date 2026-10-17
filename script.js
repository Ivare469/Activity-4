const checklistItems = [
  {
    id: 'water',
    title: 'Drinking water',
    category: 'Supplies',
    description: 'Store at least three days of safe drinking water for each family member.'
  },
  {
    id: 'food',
    title: 'Ready-to-eat food',
    category: 'Supplies',
    description: 'Pack non-perishable food, rice, canned goods, and a manual can opener.'
  },
  {
    id: 'flashlight',
    title: 'Flashlight with batteries',
    category: 'Lighting',
    description: 'Keep a flashlight and spare batteries in an easy-to-grab bag.'
  },
  {
    id: 'radio',
    title: 'Battery-powered radio',
    category: 'Communication',
    description: 'Use a radio to follow official announcements if mobile signals change.'
  },
  {
    id: 'first-aid',
    title: 'First-aid kit',
    category: 'Health',
    description: 'Include essentials for cuts, fever, and urgent household care.'
  },
  {
    id: 'medications',
    title: 'Medications and hygiene items',
    category: 'Health',
    description: 'Pack prescriptions, masks, soap, and basic sanitary supplies.'
  },
  {
    id: 'documents',
    title: 'Important documents',
    category: 'Documents',
    description: 'Keep copies of IDs, family records, and insurance papers in a waterproof pouch.'
  },
  {
    id: 'cash',
    title: 'Cash and emergency contacts',
    category: 'Documents',
    description: 'Save emergency numbers and keep small cash ready for urgent needs.'
  }
];

const checklistRoot = document.getElementById('checklist');
const progressCount = document.getElementById('progress-count');
const progressTotal = document.getElementById('progress-total');
const savePlanButton = document.getElementById('save-plan');
const form = document.getElementById('family-plan');

function renderChecklist() {
  checklistRoot.innerHTML = '';

  checklistItems.forEach((item) => {
    const itemWrapper = document.createElement('li');
    itemWrapper.className = 'check-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = item.id;
    checkbox.checked = localStorage.getItem(item.id) === 'true';
    checkbox.setAttribute('aria-label', item.title);

    checkbox.addEventListener('change', () => {
      localStorage.setItem(item.id, String(checkbox.checked));
      updateProgress();
      itemWrapper.classList.toggle('completed', checkbox.checked);
    });

    const label = document.createElement('label');
    label.setAttribute('for', item.id);

    const title = document.createElement('strong');
    title.textContent = item.title;

    const meta = document.createElement('span');
    meta.className = 'item-meta';
    meta.textContent = `${item.category} — ${item.description}`;

    label.append(title, meta);
    itemWrapper.append(checkbox, label);

    if (checkbox.checked) {
      itemWrapper.classList.add('completed');
    }

    checklistRoot.appendChild(itemWrapper);
  });

  updateProgress();
}

function updateProgress() {
  const checkedCount = checklistItems.filter((item) => {
    return localStorage.getItem(item.id) === 'true';
  }).length;

  progressCount.textContent = String(checkedCount);
  progressTotal.textContent = String(checklistItems.length);
}

function loadPlan() {
  const savedPlan = JSON.parse(localStorage.getItem('family-plan') || '{}');

  document.getElementById('meeting-place').value = savedPlan['meeting-place'] || '';
  document.getElementById('contact-one').value = savedPlan['contact-one'] || '';
  document.getElementById('contact-two').value = savedPlan['contact-two'] || '';
  document.getElementById('special-needs').value = savedPlan['special-needs'] || '';
}

function savePlan() {
  const formData = new FormData(form);
  const savedPlan = Object.fromEntries(formData.entries());
  localStorage.setItem('family-plan', JSON.stringify(savedPlan));

  savePlanButton.textContent = 'Saved';
  setTimeout(() => {
    savePlanButton.textContent = 'Save plan';
  }, 1200);
}

savePlanButton.addEventListener('click', savePlan);
renderChecklist();
loadPlan();
