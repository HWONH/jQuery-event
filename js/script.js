$(document).ready(function () {
   $(".click_evt li a").click(function (e) {
      e.preventDefault();
      $(".click_evt .complete").text("클릭 이벤트 진행완료");
      // return false; // 함수문 가장 마지막에 선언할 것
   });

   /* 
    $(".click_evt li a").click(function(){
        $(".click_evt .complete").text("클릭 이벤트 진행완료");
    });
     */
   /* ---------------------------------------------------- */
   /* 
   $(".mouse_evt .ch_img").mouseover(function(){
       $(this).addClass("over");
   });
   $(".mouse_evt .ch_img").mouseout(function(){
      $(this).removeClass("over");
   });
    */

   $(".mouse_evt .ch_img").hover(function () { // mouseenter 이벤트
      $(this).addClass("over");
   }, function () { // mouseleave 이벤트
      $(this).removeClass("over");
   });

   $(".hover_menu > ul > li").hover(function () {
      $(this).find("ul").stop().slideDown(); // stop()을 제거하게 되면, 서로 다른 메뉴에 hover 했을시, 춤추듯한 현상으로 보인다
   }, function () {
      $(this).find("ul").stop().slideUp();
   });
   /* ---------------------------------------------------- */
   $("#uid").focus(function () {
      $(this).val("현혜원");
   });

   $("#upw").blur(function () { // 포커스가 빠져나왔을 때 이벤트 발생
      var $value = $(this).val(); // 입력상자 내부의 value값을 가져옴
      if ($value.length < 1) { // value 값의 문자 개수가 0라면 조건식을 부여
         $(".msg").addClass("active");
      }
   });
   /* ---------------------------------------------------- */
   // 1. 탭박스 구성하기(show => display: block; / hide => display: none;) - 초급 기준
   /*      
   $(".tab_01").show(); // display: block;
   $(".tab_btn li:eq(0)").click(function(){
      $(".tab_01").show();
      $(".tab_02").hide();
      return false; // li태그 내 a태그가 있으므로
   });
   $(".tab_btn li:eq(1)").click(function(){
      $(".tab_01").hide();
      $(".tab_02").show();
      return false; // li태그 내 a태그가 있으므로
   });
   */

   // 2. 클릭 포인트에 대한 관계를 알고 그 관계에 대한 콘텐츠만 보여준다
   /* 
   $(".tab_01").show();
   $(".tab_btn li").click(function(){
      var $rel=$(this).attr("rel"); // tab_01 또는 tab_02
      $(".tab_cont .tab").hide(); // 전체 숨기기
      $("."+$rel).show(); // $(".tab_01").show(); 또는 $(".tab_02").show(); *** $rel은 .를 포함하지 않은 값이므로 .을 추가할 것
      return false;
   });
   */

   // 3. 사용자가 클릭한 곳의 인덱스 번호를 추출 => 하단의 콘텐츠 내용 중에서 해당하는 인덱스 번호에 맞춰 보여준다
   //  $(".tab_01").show();
   $(".tab_btn li").click(function () {
      var $index = $(this).index();
      $(".tab_btn li").removeClass("active_btn"); // $(this)가 안되는 이유 : click() 이벤트가 발생한 선택자만을 선택하므로, 지금은 전체 클래스 제거를 해야되므로 $(".tab_btn li")와 같이 선언
      $(this).addClass("active_btn");
      $(".tab_cont .tab").removeClass("active_cont");
      $(".tab_cont .tab:eq(" + $index + ")").addClass("active_cont");
      // $(".tab_cont .tab").eq($index).addClass("active_cont");

      // $(".tab_cont .tab").hide();
      // $(".tab_cont .tab").eq($index).show();
      return false;
   });
   /* ---------------------------------------------------- */
   // 4. 이벤트의 영역을 문서 전체로 확대하여 찾아가는 과정으로, DOM으로 접근 => 이벤트

   // 클릭을 할 수 있는 도구가 하나일 때, 나 또는 대상물의 현재 상태를 체크(hasClass() - true 또는 false)
   $(document).on("click", ".prior_evt button", function () { // on() : bind의 의미;묶는 개념
      var $state = $(".prior_evt img").hasClass("barbarian");
      if ($state == false) { // = : 값 대입 vs == : 값 대조
         $(".prior_evt img").attr("src", "img/barbarian.png");
         $(".prior_evt img").addClass("barbarian");
      } else {
         $(".prior_evt img").attr("src", "img/archer.png");
         $(".prior_evt img").removeClass("barbarian");
      }
   });
   /* ---------------------------------------------------- */
   // 1. 리사이즈 이벤트간 최초 로딩시 가로값을 인지하도록 구성
   function resizeEvt() {
      var $cur_width = $(window).width();
      console.log($cur_width);
      $(".resize_evt span").text($cur_width);

      // 3. 개별 이미지의 가로값을 지정하여 세로값으로 전달
      var $img_width = $(".game_img").width();
      $(".game_img").css("height", $img_width); // px 생략 가능
   }
   resizeEvt();

   // 2. 사이즈가 변경되었을 때 가로값을 인지할 수 있도록 구성
   $(window).resize(function () {
      resizeEvt(); // 사이즈 변경에 따른 이벤트 발생시마다 함수 호출
   });

   /* ---------------------------------------------------- */
   $(window).scroll(function () {
      var $scroll_location=$(window).scrollTop(); // 스크롤바의 상단 위치
      console.log("스크롤 바의 수직방향 위치"+$scroll_location);
      var $browser_height=$(window).height();
      var $target=$(".scroll_evt").offset().top-($browser_height/2); // 조건을 거는 문서상의 특정 요소 상단의 위치
      console.log($target);
      if($scroll_location>$target){
         $(".scroll_evt").addClass("active");
         $("body").addClass("ch_black");
      }else{
         $(".scroll_evt").removeClass("active");
         $("body").removeClass("ch_black");
      }
   });
   /* ---------------------------------------------------- */
   $(".total").change(function(){
      var $chk=$(this).is(":checked"); // 체크된 상태 : true, 체크가 되지 않은 상태 : false
      console.log($chk);
      if($chk==true){
         $(this).attr("checked", "checked"); // 이 부분을 선언하지 않는다면, 실제 브라우저 상에서는 .total이 체크되어 있으나, 개발자 모드에서 보면 알 수 있다 싶이 checked: checked;속성이 추가된 것은 아니므로 이와 같이 선언해준다
         $(".each").attr({"checked":"checked", "disabled":"disabled"});
      }else{
         $(this).removeAttr("checked", "checked");
         $(".each").removeAttr("checked", "checked");
         $(".each").removeAttr("disabled", "disabled");
      }
   });
});