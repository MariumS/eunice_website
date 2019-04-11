

var steps = document.querySelectorAll('.step');
var body = document.querySelector('body');
var html = document.querySelector('html');

for (var i=0; i < steps.length; i++) {
  var element = steps[i];
  element.onclick = function(event) {
    var number = this.dataset.step;
    var target = this.href;
    addStep(number, target);
  }
}

function removeVisited() {
  if (document.getElementById('visited')) {
    body.removeChild(document.getElementById('visited'));
  }
}

function addStep(number, target) {
  html.className += ' step' + number;

  removeVisited();

  if (target !== '') {
    var id = target.split('#')[1];
    document.getElementById(id).className = 'animate';
  }

  if (number === '7') {
    loadGoogleFont();
  }
}

visited.onclick = function() {
  loadGoogleFont();
  for (var i=0; i < 11; i++) {
    html.className += ' step' + i;
  }
  removeVisited();
  }
