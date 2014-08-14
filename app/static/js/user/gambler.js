(function(){
  'use strict';

  $(document).ready(function(){
    $('.info').click(sellAsset);
  });

  function sellAsset(){
    //debugger;
    var id   = $(this).closest('.gambler').attr('data-gambler-id'),
        item   = $(this).children('.name').text();
    console.log(id, item);
  }

})();

