

(function(){
    var titles = $('.tabs__title')
        , copy = $('.tab__copy');
        // alert("hello");

        function newTab (){
            var index = titles.index(this);
            copy.removeClass('tab__copy--active'); 
            $(copy[index]).addClass('tab__copy--active');
            titles.removeClass('tabs__title--active'); 
            $(titles[index]).addClass('tabs__title--active');
       }

        titles.on('click', newTab); 




})(); // write a function, evaluate it, call it, then add semicolon. 