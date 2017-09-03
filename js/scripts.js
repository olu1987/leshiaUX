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

    function hasClass(el, selector) {
        var className = " " + selector + " ";

        if ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
            return true;
        }
        return false;
    }



    var graph = function(){

        if(! hasClass(document.body,'home')){
            return;
        }

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

    window.addEventListener('load',function(){

        var loader = document.getElementById('loader');

        setTimeout(function(){
            removeClass(loader,'active');
        },500);

        setTimeout(function(){
            addClass(loader,'hidden');
        },1300)


    })
});