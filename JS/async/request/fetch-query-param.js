// 쿼리 파라미터: mbti, limit, offset   // limit 과 offset은 페이지네이션에 사용
//const res = await fetch('https://learn.codeit.kr/api/color-surveys/?mbti=ISTJ');
const res = await fetch('https://learn.codeit.kr/api/color-surveys/5');

/* 
//다음과 같이 URL 객체를 사용할 수 있다 
const url = new URL('https://learn.codeit.kr/api/color-surveys');
url.searchParams.append('offset', 10);
url.searchParams.append('limit', 10);
const res = await fetch (url);
*/

const data = await res.json();
/*
console.log(`Status Cosd: ${res.status}`);
console.log(`Headers:`);
console.log(res.headers);
*/
// body 는 프로퍼티가 아닌 method 로 가져와야 한다.(json 형식)
console.log(data);

//response 는 자바스크립트 객체이기 때문에 destructuring 문법으로 프로퍼티를 쉽게 가져올 수 있다.
/*
const { results } = data;
const survey =  results[0];
const {id, mbti, colorCode, createdAt, updatedAt } = survey;
console.log(id, mbti, colorCode, createdAt, updatedAt);
*/

