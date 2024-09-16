// async.js 에서 import
export async function printEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  console.log(data);
}
/* // Arrow 함수로 표현하면 다음과 같음
const PrintEmployeesArrow = async () => {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const data = await response.json();
  console.log(data);
}
*/


export async function getEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const employees = await response.json();
  return employees;
}

export async function getInterviews() {
  const response = await fetch('https://learn.codeit.kr/api/interview-results');
  const interviews = await response.json();
  return interviews;
}
