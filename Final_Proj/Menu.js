var text = document.getElementsByClassName("text");

function showText(object, speed, string){
    //해당 텍스트 길이
    var object_len = object.item(0).innerText.length;

    //바꿀 문자
    var string = string;

    // 기존에 있는 text모두 제거
    object.item(0).innerHTML = '';
  
    for (var i = 0; i <= object_len ; i++){
     
      // 텍스트를 감싸줄 'p' 박스 생성
      n_tag = document.createElement("p");
    
      // 해당 div에 감싸줄 'p' 추가
      object.item(0).append(n_tag);
    
      // 넣은 'p' 태그 안에 텍스트 추가
      n_tag.append(string.charAt(i))
  
      if( i >= object_len ) {
        var anima = true;
      }
  }

  if( anima === true ){
    var turn = 0;

    //불투명 0으로 설정되어 안보이던 p 태그 박스들의 투명도 변경하여 보이게 함
    var opacity_txt = setInterval(function(){
      document.querySelectorAll('p').item(turn).style.opacity = '1';
      turn ++;

      // object_len 갯수와 turn 갯수가 동일해지면 작동 중지
      if(object_len === turn){
        clearInterval(opacity_txt);
      }
    },speed);
  }
}

// setTimeout(showText(text, 50));