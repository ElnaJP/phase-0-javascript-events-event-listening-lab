const input = document.getElementById('button');
input.addEventListener('click', function() {
  clickAlert('I was clicked!');
});

function clickAlert() {
  alert('I was clicked!');
}
input.addEventListener('click', clickAlert);

function addingEventListener() {
  input.addEventListener('click', function() {
  clickAlert('I was clicked!');
});
}
input.addingEventListener('click', addingEventListener)