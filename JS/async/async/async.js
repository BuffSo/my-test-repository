import { getInterviews, getEmployees } from "./asyncFunctions.js";

/*
printEmployees();

console.log('Task 2');
console.log('Task 3');
*/

//  async 함수를 이용하면 Taxk2, Task 3가 먼저 실행된다.
// 반면, 그냥 await 를 사용하면 먼저 실행되고 (실행될때까지 기다렸다가) 나중에 Task 2, Task 3 가 실행됨

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

const employees = await getEmployees();
const interviews = await getInterviews();

// chaining 체이닝
interviews.filter(interview => interview.result === "pass")
          .forEach(interview => addNewEmployee(employees, interview));

/*
const checkPass = interviews => interviews.result == "pass";
const hire = interview => addNewEmployee(employees, interview);
interviews.filter(checkPass).forEach(hire);
*/

console.log(employees);
