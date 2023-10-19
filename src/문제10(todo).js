function newRegister() {
  const newItem = document.createElement("li"); // 요소 노드 추가 
  const subject = document.querySelector("#subject"); // 폼의 텍스트 필드
  newItem.innerHTML = subject.value; // 입력 받은 값 가져오기

  const itemList = document.querySelector("#itemList"); 
  // insertBefore() 특정 위치 앞에 노드 삽입
  itemList.insertBefore(newItem, itemList.childNodes[0]); // 자식 노드 중 첫번째 노드 앞에 추가 

  subject.value = ""; // 리스트에 넣은 후 초기화 시킴
  const items = document.querySelectorAll("li"); // 유사 배열 형태로 들어온다. 
  for(i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(){
      if(this.parentNode) { // 부모 노드가 있다면 
        this.parentNode.removeChild(this); // 부모 노드에서 삭제 
      }
    });
  }

}

// addEventListener 사용시 화살표 함수 사용하면 함수 기능이 제대로 안먹는다. 