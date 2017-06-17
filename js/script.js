/* === Arbitrary data === */

const data = [
  {
    "head": "Hello World!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "Don't Panic!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
  {
    "head": "Get to the Choppa!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
  {
    "head": "We need a bigger boat",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  },
  {
    "head": "Well met!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "Hello World!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "Play it again!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "It's a Trap!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "I'll be back",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "Get back to work!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  },
  {
    "head": "Well met!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    "head": "This is not a test!",
    "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
  }
]


/* === On pageload === */

document.addEventListener('DOMContentLoaded', function() {
  for(var i = 0; i < data.length; i++) {
    addTextContainer(data[i]);
  }
});


/* === Container appending and animations === */

function addTextContainer(data) {
  //Delay between the containers appearing
  var delay = getRandomInt(10, 1000);
  
  const textContainer = document.createElement('div'),
        visibleText = document.createElement('span'),
        hiddenText = document.createElement('span'),
        textHead = document.createElement('h2'),
        visibleHead = document.createElement('span'),
        hiddenHead = document.createElement('span'),
        textBody = document.createElement('p'),
        expandButton = document.createElement('div');

  textContainer.classList.add('textContainer');
  visibleHead.classList.add('visible');
  textHead.appendChild(visibleHead);
  hiddenHead.appendChild(document.createTextNode(data.head));
  hiddenHead.classList.add('hidden');
  textHead.appendChild(hiddenHead);
  textContainer.appendChild(textHead);

  visibleText.classList.add('visible');
  textBody.appendChild(visibleText);
  hiddenText.appendChild(document.createTextNode(data.body));
  hiddenText.classList.add('hidden');

  textBody.appendChild(hiddenText);
  textContainer.appendChild(textBody);
  
  expandButton.classList.add('expand');
  expandButton.addEventListener('click', function(e) {
    expandContainer(e.target);
  });
  textContainer.appendChild(expandButton);

  appendMasonaryElement(textContainer);
  
  setTimeout(() => {
    textContainer.classList.add('visible');
    setTimeout(() => {
      expandButton.classList.add('plus');
      setTimeout(() => {
        animateHeader(textHead);
        setTimeout(() => { 
          animateLetters(hiddenText, 0);
        }, 600);
      }, 500);
    }, 500);
  }, delay);
}

var lastElementX = 0,
    elementBottoms = [0, 0, 0, 0],
    count = 0;

function appendMasonaryElement(element) {
  element.style.top = elementBottoms[count] + 40 + 'px';
  element.style.left = lastElementX + 40 + 'px';
  element.style.width = document.getElementById('wrapper').offsetWidth / 4 - 30 + 'px';
  
  document.getElementById('wrapper').appendChild(element);

  element.style.height = getRelativeClientRect(element).height + 'px';

  lastElementX += getRelativeClientRect(element).width + 40;
  elementBottoms[count] = elementBottoms[count] + getRelativeClientRect(element).height + 40;
  
  if(count < 3) {
    count++;
  } else {
    count = 0;
    lastElementX = 0;
  }
}

function animateHeader(head) {
  var i = 0,
      j = 0,
      delay = 40,
      visible = head.getElementsByClassName('visible')[0],
      hidden = head.getElementsByClassName('hidden')[0],
      content = hidden.innerHTML,
      max = hidden.innerHTML.length;
  
  function mainClock(i, j, max) {
    setTimeout(function () {
      if(j < 3) {
        if(j === 0) {
          visible.innerHTML = visible.innerHTML + randomLetter();
        } else {
          visible.innerHTML = visible.innerHTML.slice(0, -1) + randomLetter(); 
        }
        j++;
        mainClock(i, j, max);
      } else {
        visible.innerHTML = visible.innerHTML.slice(0, -1) + content[i];
        hidden.innerHTML = hidden.innerHTML.slice(0, -1);
        i++
        if(i < max) {
          j = 0;
          mainClock(i, j, max);
        }
      }
    }, delay);
  }
  mainClock(i, j, max);
}

function animateLetters(hidden) {
  var content = hidden.innerHTML,
      showing = hidden.parentNode.getElementsByClassName('visible')[0];
  
  var i = 0,
      delay = 10;
  
  var interval = setInterval(function() { 
    showing.innerHTML += content[i];
    hidden.innerHTML = hidden.innerHTML.substring(1);
    i++;
    if(hidden.innerHTML.length === 0) clearInterval(interval);
  }, delay);
}

var bufferData = {};

function expandContainer(elm) {
  var container = document.getElementsByClassName('textContainer');
  
  if(!elm.classList.contains('active')) {
    for(var i = 0; i < container.length; i++) {
      if(container[i] != elm.parentNode) {
        container[i].classList.add('hidden');
      }  
    }
    
    elm.classList.add('active');
    setTimeout(() => {
      bufferData.height = getRelativeClientRect(elm.parentNode).height + 'px';
      bufferData.width =  getRelativeClientRect(elm.parentNode).width + 'px';
      bufferData.top = elm.parentNode.style.top;
      bufferData.left = elm.parentNode.style.left;

      elm.parentNode.style.height = 'calc(100vh - 80px)';
      elm.parentNode.style.width = 'calc(100vw - 80px)';
      elm.parentNode.style.left = '40px';
      elm.parentNode.style.top = '40px';
    }, 500);
  } else {
    elm.classList.remove('active');
    elm.parentNode.style.height = bufferData.height;
    elm.parentNode.style.width = bufferData.width;
    elm.parentNode.style.left = bufferData.left;
    elm.parentNode.style.top = bufferData.top;
    
    setTimeout(() => {
      for(var i = 0; i < container.length; i++) {
        if(container[i] != elm.parentNode) {
          container[i].classList.remove('hidden');
        }  
      }
    }, 1000);
  }
}


/* === Utility functions === */

function randomLetter() {
  var possible = ".,:!§$%/()=?+*#-";
  return possible.charAt(Math.floor(Math.random() * possible.length));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRelativeClientRect(el) {
  var rect = el.getBoundingClientRect(),
      parentRect = el.offsetParent.getBoundingClientRect();
  return {
    bottom: parentRect.bottom - rect.bottom,
    height: rect.height,
    left: rect.left - parentRect.left,
    right: parentRect.right - rect.right,
    top: rect.top - parentRect.top,
    width: rect.width
  };
}
