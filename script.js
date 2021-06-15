const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
  const text = Array.from(e.results).map(res => res[0]).map(res => res.transcript).join(' ');
  p.innerHTML = text;
  texts.appendChild(p);
  if(e.results[0].isFinal){
    p = document.createElement('p');
  } else {

  }
});
recognition.addEventListener('end', (e) => {
  recognition.start();
});
recognition.start();