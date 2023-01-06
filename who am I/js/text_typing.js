// 변수 선언
const $txt = document.querySelector(".txt-title");
const content = "안녕하세요?\n뉴질랜드에 사는\n개발자(아직)\n박동규입니다.   ";
let contentIndex = 0;

let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

// 0.2초간격으로 typing 함수 실행
setInterval(typing, 200);
