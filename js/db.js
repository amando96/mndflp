$(document).ready(function(){
    var keys = '';
    $(window).on('keydown', function(e){        
        keys += e.keyCode;
        if(keys.indexOf('6873677566858484') > -1){
            keys = '';
            $('img').attr('src', 'images/db.jpg');
            $('body, .about-me .table-cell').css('background-image', 'url(images/db.jpg)');
        }
    });
});