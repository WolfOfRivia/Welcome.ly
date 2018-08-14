const newPage = document.getElementById('new-page');
// templates modal
const templates = document.querySelector('.template-modal');
const closeTemplates = document.querySelectorAll('.close');
const settingsBtn = document.querySelector('.open-settings');
const settingsMenu = document.querySelector('.settings-menu');

// open templates
newPage.addEventListener('click', openTemplateModal);
// close templates
closeTemplates.forEach(function(btn) {
  btn.addEventListener('click', closeTemplateModal);
})
// toggle settings
settingsBtn.addEventListener('click', toggleSettings);

function openTemplateModal() {
  templates.style.display = 'block';
}

function closeTemplateModal() {
  templates.style.display = 'none';
}

// toggle settings 
function toggleSettings(e) {
  settingsMenu.classList.toggle('settings-open');
}