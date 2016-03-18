var $body = $('body');

$('html').on('keydown',function() {
  var $ball = $('<div>');
  $body.append($ball);
  var newLeft = Math.random() * 100;
  $ball.css('left', newLeft);
  $ball.addClass('ball');
});

var $body = $('body');
$('html').on('keydown', function() {
  var $ball = $('<div>');
  $body.append($ball);
  var newLeft = Math.random() * 100;
  $ball.css('left', newLeft);
  $ball.addClass('ball');
});
