<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>restautant php</title>
</head>
<body>
    <?php
        //변수 받기
        $name = $_GET["name"];          //이름
        $tel = $_GET["phone"];          //전화번호
        $num = $_GET["headcount"];      //인원 수
        $date = $_GET["last_date"];     //날짜
        $time = $_GET["last_time"];     //시간
        $menu = $_GET["course"];        //코스
        $request = $_GET["comments"];   //요청사항

        echo "<p>레스토랑 예약 확인</p>";
        echo "<br><span> 이름 : ".$name;
        echo "<br><span> 연락처 : ".$tel;
        echo "<br><span> 인원 : ".$num;
        echo "<br><span> 날짜 : ".$date;
        echo "<br><span> 시간 : ".$time;
        echo "<br><span> 코스 : ".$menu;
        echo "<br><span> 요청사항 : ".$request;
    ?>
</body>
</html>