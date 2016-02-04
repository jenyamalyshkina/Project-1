// Стилизуем placeholder
$('input, textarea').placeholder();

// Объявляем модуль
var myModule = (function () {

// Инициализируем модуль
  var init = function () {
      _setUpListener();
    };
// Прослушиваем события
  var _setUpListener = function () {

// Вызываем popup
      $('#popup-go').click(function(event) {
        event.preventDefault();
        $('#popup-overlay').fadeIn(400,
          function() {
            $('#projects-add-popup').css('display', 'block').animate
              ({opacity: 1, top: '50%'}, 200);
          });
      });
// Скрываем popup
      $('#popup-close, #popup-overlay').click(function(){
       $('#projects-add-popup').animate({opacity: 0, top: '40%'}, 200,
        function(){
          $('this').css('display', 'none');
          $('#popup-overlay').fadeOut(400);});
      });

// Получаем имя файла из пути к нему
      $('input[type=file]').on('change', function(){
        var name = $(this).val();
          $('.progect-imgName').html(name.substr(name.lastIndexOf('\\')+1));
          $('.progect-imgName').css({'color': '#959aa8', 'font-size': '15px'});
    });
  }
// Возвращаем объект (публичные методы)
  return {
    init: init
  };
})();

// Вызываем модуль
myModule.init();

