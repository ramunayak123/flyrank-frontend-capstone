const form = document.getElementById('settingsForm');
const siteName = document.getElementById('siteName');
const email = document.getElementById('email');
const apiKey = document.getElementById('apiKey');
const saveBtn = document.getElementById('saveBtn');

function showError(input, msg) {
  const err = document.getElementById(input.id + 'Error');
  err.textContent = msg;
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  const err = document.getElementById(input.id + 'Error');
  err.textContent = '';
  input.classList.remove('invalid');
  input.removeAttribute('aria-invalid');
}

function validate() {
  let valid = true;
  [siteName, email, apiKey].forEach(clearError);

  if (!siteName.value.trim()) {
    showError(siteName, 'Site name is required');
    valid = false;
  }
  if (!email.value.trim()) {
    showError(email, 'Email is required');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, 'Enter a valid email');
    valid = false;
  }
  if (!apiKey.value.trim()) {
    showError(apiKey, 'API Key is required');
    valid = false;
  }
  return valid;
}

siteName.addEventListener('input', () => clearError(siteName));
email.addEventListener('input', () => clearError(email));
apiKey.addEventListener('input', () => clearError(apiKey));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) return;
  
  const data = {
    siteName: siteName.value.trim(),
    email: email.value.trim(),
    apiKey: apiKey.value.trim()
  };
  localStorage.setItem('flyrank-settings', JSON.stringify(data));
  document.getElementById('successMsg').textContent = 'Settings saved successfully!';
  saveBtn.disabled = true;
  setTimeout(() => { saveBtn.disabled = false; }, 1500);
});

// Load saved
try {
  const saved = JSON.parse(localStorage.getItem('flyrank-settings') || 'null');
  if (saved) {
    siteName.value = saved.siteName || '';
    email.value = saved.email || '';
    apiKey.value = saved.apiKey || '';
  }
} catch {}
