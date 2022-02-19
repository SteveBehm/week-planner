var $addEntry = document.querySelector('.add-entry');
var $submitForm = document.querySelector('form');

$addEntry.addEventListener('click', switchToFlex);
$submitForm.addEventListener('submit', handleSubmitEntry);

function switchToFlex(event) {
  document.querySelector('.bg-modal').style.display = 'flex';
}

var $secondView = document.querySelector('.second-view');
var $mainPage = document.querySelector('.main-page');

function handleSubmitEntry(event) {
  event.preventDefault();
  $mainPage.className = 'container font-family main-page hidden';
  $secondView.className = 'container second-view font-family';

  document.querySelector('.bg-modal').style.display = 'none';
}
