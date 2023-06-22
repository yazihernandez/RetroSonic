// animations on scroll
window.addEventListener('scroll',function(e){
    const left = document.querySelector('.scrollLeft');
    const right = document.querySelector('.scrollRight');
    var dimOpacity = document.querySelectorAll('.dimOp');
    var dimOpacity2 = document.querySelectorAll('.dimOp2');
    var dimOpacity3 = document.querySelectorAll('.dimOp3');
    var reveals = document.querySelectorAll('.reveal');
    var reveals2 = document.querySelectorAll('.reveal2');
    var reveals3 = document.querySelectorAll('.reveal3');

    var scrolled = window.pageYOffset;
   
    var rate = scrolled * -0.5;
    var rate1 = scrolled * 0.9;
    
    left.style.transform = 'translate3d('+rate+'px, 0px, 0px)';
    right.style.transform = 'translate3d('+rate1+'px, 0px, 0px)';
    
    dimOpacity.forEach(function(element) {
        element.style.opacity = 1 - (scrolled / 200);
      });

    dimOpacity2.forEach(function(element) {
    element.style.opacity = 1 - (scrolled);
    });
    dimOpacity3.forEach(function(element) {
        element.style.opacity = 1 - (scrolled/300);
        });

    for(let i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }

    for(let x = 0; x < reveals2.length; x++){

        var windowHeight2 = window.innerHeight;
        var revealTop2 = reveals2[x].getBoundingClientRect().top;
        var revealPoint2 = 150;

        if (revealTop2 < windowHeight2 - revealPoint2){
            reveals2[x].classList.add('active2');
        }
        else{
            reveals2[x].classList.remove('active2');
        }
    }

    for(let i = 0; i < reveals3.length; i++){

        var windowHeight = window.innerHeight;
        var revealTop = reveals3[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals3[i].classList.add('active');
        }
        else{
            reveals3[i].classList.remove('active');
        }
    }
    // console.log(right.style);
});

// animation on page load (moveing from left to right)
window.addEventListener('load', function() {
    const loadLeftElements = document.querySelectorAll('.loadLeft');

    loadLeftElements.forEach(function(element) {
        const tl = new TimelineMax();
        tl.fromTo(element, 1.2, {x:"-100%"}, {x:'0%', ease:Power2.easeInOut});
      });
    });

// animation on page load (moveing from right to left)
window.addEventListener('load', function() {
    const loadRightElements = document.querySelectorAll('.loadRight');

    loadRightElements.forEach(function(element) {
        const tl = new TimelineMax();
        tl.fromTo(element, 1.2, {x:"100%"}, {x:'0%', ease:Power2.easeInOut});
      });
    });

// animation on page load (moveing downwards)
window.addEventListener('load', function() {
    const loadDownElements = document.querySelectorAll('.loadDown');

    loadDownElements.forEach(function(element) {
        const tl = new TimelineMax();
        tl.fromTo(element, 1.2, {y:"-100%"}, {y:'0%', ease:Power2.easeInOut});
      });
    }); 
// animation on page load (moveing upwards)
window.addEventListener('load', function() {
    const loadUpElements = document.querySelectorAll('.loadUp');

    loadUpElements.forEach(function(element) {
        const tl = new TimelineMax();
        tl.fromTo(element, 2, {y:"100%"}, {y:'0%', ease:Power2.easeInOut});
      });
    });     
    

// animation on page load (opacity)
window.addEventListener('load', function() {
    const loadOpacElements = document.querySelectorAll('.loadOpac');

    loadOpacElements.forEach(function(element) {
        const tl = new TimelineMax();
        tl.fromTo(element, 1, {opacity:0, x:30}, {opacity:1, x:0}, "=0.5");
      });
    });        

// Shows highlited line
const listItems = document.querySelectorAll(".highLight");

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('highlighted');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('highlighted');
  });
}); 