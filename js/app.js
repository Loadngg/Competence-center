// Scroll Top on reload
// $(window).on('beforeunload', function(){
//     $(window).scrollTop(0);
// });

// Smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]'); 
    for (let smoothLink of smoothLinks) { 
    smoothLink.addEventListener('click', function(event) { 
    event.preventDefault(); 
    const yOffset = -100; 
    const id = smoothLink.getAttribute('href'); 
    const element = document.querySelector(id) 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; 

    window.scrollTo({top: y, behavior: 'smooth'}); 
    }) 
}

// Sticky header
let header = document.getElementById('header');
let headerH = header.clientHeight;
let scrollOffset = window.scrollY;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.scrollY;

    checkPos(scrollOffset);
}

function checkPos(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Slick
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
        // arrows:false,
		dots:true,
		slidesToShow:2,
        slidesToScroll: 1,
		autoplay:true,
		speed:1500,
		autoplaySpeed:2000,
	});
});

// News
// let requestURL = 'news.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload() = function() {
//     let news = request.response;
//     console.log(news[0]);
// }

// Show all partn
let partns = document.getElementsByClassName('partners__img');
for (let i = 0; i < 7; i++) {
    partns[i].style.display = 'block';
}

let btn = document.getElementById('btnPartn');
btn.onclick = function () {
    let isHidden = partns[7];
    var actualDisplay = getComputedStyle(isHidden).display;
    if (actualDisplay === 'none') {
        for (let partn of partns) {
            partn.style.display = 'block';
        }
        btn.innerHTML = 'скрыть всё';
    } else {
        for (let i = 7; i < partns.length; i++) {
            partns[i].style.display = 'none';
        }
        btn.innerHTML = 'показать всё';
    }
}

// overflow
function showOverflow(blockId) {
    currBlockId = blockId;
    block = document.getElementById(currBlockId);
    iframe = block.firstElementChild.firstElementChild;
    iframe.src = iframe.dataset.src;
    block.classList.remove('hidden'); 
    setTimeout(function(){
        block.classList.remove('transparent')
    }, 20)
};

function hideOverflow() {
    block.classList.add('transparent'); 
    setTimeout(function(){
        block.classList.add('hidden')
        iframe.src = "about:blank";
    }, 500);
}

// Animation
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemH = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemH / animStart;
            if (animItemH > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemH)) {
                animItem.classList.add('show');
            } else {
                // animItem.classList.remove('show');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300) 
}