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
});