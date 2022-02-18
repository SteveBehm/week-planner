var $addEntry = document.querySelector('.add-entry');

$addEntry.addEventListener('click', switchToFlex);

function switchToFlex(event) {
  document.querySelector('.bg-modal').style.display = 'flex';
}
