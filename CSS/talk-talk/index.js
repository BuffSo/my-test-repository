const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성하세요
function sendMyTextByEnter (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    sendMyText();
    e.preventDefault();                 // 브라우저의 기본 동작으로써 textarea 태그에 'enter' 키를 눌렀을때 줄바꿈을 입력하기 때문에
  }
}
input.addEventListener('keypress', sendMyTextByEnter);
