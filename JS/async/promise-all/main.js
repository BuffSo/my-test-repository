import { getEmployees , getMenus } from './asyncFuntions.js'

Promise.all([getEmployees(), getMenus()])
.then(result => {
  const employees = result[0];
  const menus = result[1];
  
  console.log('직원 데이터:');
  console.log(employees);
  console.log('메뉴 데이터:');
  console.log(menus);
});

/*
// 위의 코드는 아래의 코드를 줄여서 작성함 ////
const promises = [];

const employeesPromise = getEmployees();
const menuPromise = getMenus();

promises.push(employeesPromise);
promises.push(menuPromise);

const allPromise = Promise.all(promises);
const result = await allPromise;

const [employees, menus] = result;

console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);
*/