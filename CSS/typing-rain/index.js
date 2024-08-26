const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!👏');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

// 여기에 코드를 작성하세요
function checkAndRemoveWord(event) {
  const inputValue = event.target.value.trim();
  if(inputValue) {
    const words = document.querySelectorAll('.word');
    for(const word of words) {
      if( word.dataset.word === inputValue) {
        word.remove();
        // input 태그를 초기화
        event.target.value = '';      
        checker();
        break;
      }
    }
  }
}

input.addEventListener('keyup', checkAndRemoveWord);

/* 
//Codeit 모범 답안 

function removeWord() {
  const word = document.querySelector(`[data-word="${input.value}"]`);
  if (word) {
    word.remove();
    checker();
  }
  input.value = '';
}

input.addEventListener('change', removeWord);

*/