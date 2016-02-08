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
      $('#popup-go').on('click', _showPopup);
      $('#popup-close, #popup-overlay').on('click', _hidePopup);
      $(document).on('keydown',
        function(event){
          if (event.keyCode == 27) {
            _hidePopup();
          }
        });
      $('input[type=file]').on('change', _getName);
      $('#project-add-popup, #writeme-form').on('submit', _checkValid);
    };

// Вызываем popup
    var _showPopup = function(event) {
      event.preventDefault();
        $('#popup-overlay').fadeIn(400, function () {
            $('#project-add-popup').css('display', 'block').animate
              ({opacity: 1, top: '50%'}, 200);
          });
    };

// Скрываем popup щелчком на крестик, подложку, нажатием Esc
    var _hidePopup = function(event) {
        $('.form-item-field').removeClass('form-empty-field');
        $('.form-item-error').css('display', 'none');
        $('#project-add-popup').animate({opacity: 0, top: '40%'},
          200, function (){
        $(this).css('display', 'none');
        $('#popup-overlay').fadeOut(400);});
    };


// Получаем имя файла из пути к нему
    var _getName = function (){
      var imgName = $(this).val();
        $('.progect-imgName').html(imgName.substr(imgName.lastIndexOf('\\') + 1));
        $('.progect-imgName').css({'color': '#959aa8', 'font-size': '15px'});
    };

// Проверяем поля формы на заполненность
    var _checkValid = function(event) {
      event.preventDefault();

      var $pageForm = $(this);

      $pageForm.find('.form-item-field').each(function() {

          //Проверяем все поля формы
          if($(this).val() != '') {
            $(this).removeClass('form-empty-field');
            $(this).next('.form-item-error').css('display', 'none');

          } else {
              $(this).addClass('form-empty-field');
              $(this).next('.form-item-error').css('display', 'block');
          };

          // Проверяем фейковый инпут
          if ($('.selectFile-input').val() != '') {
            $('.uploadFile-wrap').val('fakevalue');
          };

          // Убираем ошибку после клика на пустом поле
          $(this).click(function() {
            $(this).removeClass('form-empty-field');
            $(this).next('.form-item-error').css('display', 'none');
          });

      });
    };

// Возвращаем объект (публичные методы)
  return {
    init: init
  };
})();

// Вызываем модуль
myModule.init();

