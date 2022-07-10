var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // 자동으로 시간이 지나면 그다음 이미지를 보여줌
  var sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}


// 이전, 다음 버튼을 눌렀을 때, 그전 혹은 다음 이미지로 이동
// 하기 위해 showSlides함수 호출
// 이전이면 -1, 다음이면 +1
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// 이미지 아래 동그란 버튼 눌렀을 때, 해당 이미지로 이동하기 위해
// showSlides 함수 호출
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// 해당 이미지를 보여주는 함수
function showSlides(n) {

  //슬라이드, 해당 동그라미 버튼, 슬라이드 개수를 가져옴
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;

  //마지막까지 이미지가 넘어갔을 때, 다시 처음으로 돌아오기 위함
  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }

  //첫번째 이미지에서 이전버튼 눌렀을 때, 맨 마지막 이미지로 이동하기 위함
  else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  //슬라이드 안보이게 해놓고
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //버튼 클래스 이름에서 추가된 active를 없애 배경색을 다 비워줌
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //해당 슬라이드만 보여줌
  //동그라미 버튼 클래스 이름에 active 추가하여
  //css에서 색 채워지도록 변경
  slides[n].style.display = "block";
  dots[n].className += " active";
}