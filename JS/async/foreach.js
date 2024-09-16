function forEach(array, callback) {
  for (let elt of array) {
    callback(elt);
  }
}

const words = ['JavaScript', 'Java', 'Python'];

// 배열의 요소를 출력하세요. Arrow Function을 사용하세요.
forEach(words, (word) => console.log(word));

// 배열의 요소를 대문자로 출력하세요. function 키워드로 함수를 선언하고 콜백으로 전달하세요.
forEach(words, function (word) {
  console.log(word.toUpperCase());
});

console.log('-----------------------------');

forEach(words, function (word) {
  console.log(word.toUpperCase());
});

console.log('-----------------------------');

forEach(words, (word) => console.log(word.toUpperCase()));

function printUpper(word) {
  const upper = word.toUpperCase();
  console.log(upper);
}

forEach(words, printUpper);       // 여기서의 forEach 는 사용자 정의 함수

console.log('-----------------------------');

words.forEach((word) => {         // 여기서의 forEach 는 자바스크리트 메소드
  console.log(word);
});

words.forEach( word => console.log(word) );
words.forEach( word => console.log(word.toUpperCase()) );