// showTitle 함수를 완성해 주세요
function showTitle(e) {
	// 요소에 data-title 속성이 있는지 확인합니다.
	if(e.target.dataset.title) {
		const titleElement = document.createElement('span');
		titleElement.classList.add('title');
		// span 요소의 텍스트를 data-title 속성 값으로 설정합니다.
		titleElement.textContent = e.target.dataset.title;
		// target 요소의 마지막 자식 요소로 추가합니다.
		e.target.appendChild(titleElement);
	}
}

// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
	// target 요소 내에 있는 'title' 클래스를 가진 span 요소를 찾습니다.
	const titleElement = e.target.querySelector('.title');
	// 'title' 요소가 존재하면 제거합니다.
	if(titleElement)
		e.target.removeChild(titleElement);

}

// '대상'과 '타입'을 수정해 주세요
document.querySelector('.map').addEventListener('mouseenter', showTitle, true);			// mouseover 로 할 경우 자식 요소로 마우스가 이동할 때도 작동하여 다용도실은 깜빡거림
document.querySelector('.map').addEventListener('mouseleave', removeTitle, true);		// mouseenter 로 할 경우 이벤트 리스트에 'true'를 추가하여 이벤트가 캡처링 단계에서 처리되도록 해야 함.