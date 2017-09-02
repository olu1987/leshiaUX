$( document ).ready(function() {
    function addClass(el, className){
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    }

    function removeClass(el, className){
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }



    var graph = function(){
        var graphRow = document.querySelector(".what-i-use");

        window.addEventListener('scroll', function () {
            var distance = graphRow.getBoundingClientRect().top;
            if(distance < 320){
                addClass(graphRow, 'active')
            }
            if(distance > 320) {
                removeClass(graphRow, 'active')
            }
        })

    }();
});