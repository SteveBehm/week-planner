var $addEntry = document.querySelector('.add-entry');
var $submitButton = document.querySelector('.submit-entry');

$addEntry.addEventListener('click', switchToFlex);
$submitButton.addEventListener('click', handleSubmit);

function switchToFlex(event) {
  document.querySelector('.bg-modal').style.display = 'flex';
}

function handleSubmit(event) {
  document.querySelector('.bg-modal').style.display = 'none';
}
