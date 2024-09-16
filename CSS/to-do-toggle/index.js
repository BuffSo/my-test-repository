const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;


function addNewTodo(text) {
	// 여기에 코드를 작성하세요
	const newToDoItem = document.createElement('li');
	newToDoItem.textContent = text;
	newToDoItem.classList.add('item');
	toDoList.append(newToDoItem); 
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기 - 추가');
addNewTodo('고양이 화장실 청소하기 - 추가');
/*
// 1. updateToDo 함수
function updateToDo(event) {
  event.target.classList.toggle('done');
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록
for(let i=0; i < items.length; i++) {
  items[i].addEventListener('click', updateToDo);
}
  아래와 같이 새로 생선된 요소에는 적용되지 않기 때문에 이벤트 위임을 한다.
*/
toDoList.addEventListener('click', function(e) {
  //if(e.target.tagName === 'LI')   // 또는
  if(e.target.classList.contains('item'))
    e.target.classList.toggle('done');
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기 - 추가';
toDoList.append(li);


// 테스트 코드
//items[2].removeEventListener('click', updateToDo);