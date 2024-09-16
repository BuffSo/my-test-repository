const res = await fetch('https://learn.codeit.kr/api/color-surveys');
const data = await res.json();

console.log(`Status Code: ${res.status}`);
console.log(`Headers:`);
console.log(res.headers);

// body 는 프로퍼티가 아닌 method 로 가져와야 한다.(json 형식)
console.log(data);

//response 는 자바스크립트 객체이기 때문에 destructuring 문법으로 프로퍼티를 쉽게 가져올 수 있다.

const { results } = data;
const survey =  results[0];
const {id, mbti, colorCode, createdAt, updatedAt } = survey;
console.log(id, mbti, colorCode, createdAt, updatedAt);

/* 참고 */
async function fetchData() {
  try {
    const result = await Promise.all([getEmployees(), getMenus()]);
    const employees = result[0];
    const menus = result[1];
    
    return { employees, menus }; // employees와 menus를 객체로 반환
  } catch (error) {
    console.error('오류 발생:', error);
    return null; // 오류 발생 시 null 반환
  }
}

