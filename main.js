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
  domTable();
}

function domTable(data) {
  var $table = document.createElement('table');
  var $thead = document.createElement('thead');
  var $tr = document.createElement('tr');
  var $th = document.createElement('th');

  $table.appendChild($thead);
  $thead.appendChild($tr);
  $tr.appendChild($th);
  $tr.append($th);

  var $tbody = document.createElement('tbody');
  var $td = document.createElement('td');

  for (let i = 0; i < 9; i++) {
    $tbody.append($tr);
    $tr.append($td);
    $tr.append($td);
  }
}
