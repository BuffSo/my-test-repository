function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log('메뉴 고르는 중...');

/*
const response = await fetch('https://learn.codeit.kr/api/menus');
const menus = await response.json();
const randomMenu = getRandomElement(menus);
console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
*/
//위의 주석에 있는 awati 코드를 .then() 메소드를 사용하기
const menusPromise = fetch('https://learn.codeit.kr/api/menus')
                  .then( response => response.json());
menusPromise.then(menus => {
  const randomMenu = getRandomElement(menus);
  console.log(`오늘의 점심 메뉴는 ${randomMenu.name}입니다!`);
});

fetch('https://learn.codeit.kr/api/menus')
  .then( response => response.json())
  .then( menus => {
    const randomMenu = getRandomElement(menus);
    console.log(`오늘의 점심 메뉴는 ${randomMenu.name}입니다!`);
  })
  .catch((error) => console.log('Error!'))
  .finally(() => console.log('Finished'));
  