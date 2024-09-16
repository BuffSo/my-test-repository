function sayHello() {
  console.log('Hello World');
}

function sayGoodbye() {
  console.log('Goodbye World');
}


function printMessage(func) {
  console.log('Printing message...');
  func();
}

// 함수 호출시 아규먼트로 함수를 넣음
printMessage( function() {
  console.log('1 Hello World');
})
// 함수 호출시 아규먼트로 함수를 넣음 => 애로우 함수로 표현
printMessage( () => {
    console.log('2 Hello World');
});
// 애로우 함수 간단하게
printMessage(() => console.log('3 Hello World'));
console.log('--------------------------------------------');
// 함수 명을 아큐먼트로 전달
printMessage(sayHello);
printMessage(sayGoodbye);