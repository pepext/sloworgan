// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/rels', function(rels) {
    rels.forEach(function(lista) {
      $('<li></li>').text(lista).appendTo('ul#rels');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var lista = $('input').val();
    $.post('/rels?' + $.param({dream: lista}), function() {
      $('<li></li>').text(lista).appendTo('ul#rels');
      $('input').val('');
      $('input').focus();
    });
  });

});
