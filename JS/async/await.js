const response = await fetch('https://learn.codeit.kr/api/employees');
//console.log(response);
const data = await response.json();
console.log(data);
//console.log(await response.json());  // 위에 한번 실행 후, 또 실행하면 오류 남 // 이미 Body를 읽었다

console.log('Task 2');
console.log('Task 3');


// awiat 를 사용하면 먼저 실행되고 나중에 Task 2, Task 3 가 실행됨
// 반면, async 함수를 이용하면 Taxk2, Task 3가 먼저 실행된다.

// await와 Promise를 활용하여 비동기 처리를 제대로 하려면 함수를 이용해야 한다.