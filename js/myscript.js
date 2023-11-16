function getDarkModePreference() {
  return localStorage.getItem('darkMode') === 'true';
}
function setDarkModePreference(isDarkMode) {
  localStorage.setItem('darkMode', isDarkMode);
  
}
function applyDarkModePreference() {
  const isDarkMode = getDarkModePreference();
  const body = document.body;

  if (isDarkMode) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    changeColor() 
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    changeColorWhiteMode();
  }
}
function toggleDarkMode() {
  const isDarkMode = !getDarkModePreference();
  setDarkModePreference(isDarkMode);
  applyDarkModePreference();
}
applyDarkModePreference();
function changeColor() {
  var elementosP = document.querySelectorAll('p');
  for (var i = 0; i < elementosP.length; i++) {
      elementosP[i].style.color = 'red';
  }
}
function changeColorWhiteMode() {
  var elementosP = document.querySelectorAll('p');
  for (var i = 0; i < elementosP.length; i++) {
      elementosP[i].style.color = 'black';
  }
}