<!DOCTYPE html>
<html lang="ja">
<head>
   <meta charset="UTF-8">
   <title>jQuery</title>
   <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
   <script>
       function add_element() {
           $('#box').append('<p>p要素を追加しました</p>');
       }
 
       // DOMの読み込みが全て完了したら
       //$(document).ready(
           //function() {
         $(function(){
               $('#add').click(add_element);
               //button id="add"を監視している
               //addボタンをクリックされたらadd_element関数が発動
           }
       );
   </script>
</head>
<body>
   <button id="add">要素を追加</button>
   <div id="box"></div>
</body>
</html>
