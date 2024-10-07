//----- for query section
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            
            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.classList.remove('open');
            } else {
                answer.style.display = 'block';
                this.classList.add('open');
            }
        });
    });
});


// -------  for header hidden and visible

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = '-110px'; // Adjust based on header height
  } else {
    // Scrolling up
    header.style.top = '0';
  }
  
  lastScrollTop = scrollTop;
});


// gsap.from(".companies",{
//     Delay:1,
//     duration: 2,
//     y:130,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".companies",
//         scroller: "body",        
//         scrub : 3,

//         start:"top 90%",
//         end:"top 80%"

//     }
//  })
// gsap.from(".right",{
//     Delay:1,
//     duration: 2,
//     y:130,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".right",
//         scroller: "body",        
//         scrub : 3,
//         start:"top 90%",
//         end:"top 80%"

//     }
// })
// gsap.from(".geotree",{
//     Delay:4,
//     duration: 2,
//     y:130,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".geotree",
//         scroller: "body",        
//         scrub : 3,
//         start:"top 60%",
//         end:"top 80%"

//     }
// })
// gsap.from(".svg",{
//     Delay:7,
//     duration: 2,
//     y:130,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".svg",
//         scroller: "body",        
//         scrub : 3,
//         start:"top 90%",
//         end:"top 80%"

//     }
// })





// let menu = document.querySelector(".hamburger i");
// let tl = gsap.timeline({ paused: true });

// tl.to(".header-right", {
//     left: 0,
//     duration: 0.8
// });

// tl.from(".header-right .nav-bar", {
//     x: -150,
//     duration: 0.5,
//     stagger: 0.2,
//     opacity: 0
// });

// let isOpen = false;

// menu.addEventListener("click", function() {
//     if (isOpen) {
//         tl.reverse();
//     } else {
//         tl.play();
// }
//     isOpen = !isOpen;
// });



// let menu = document.querySelector(".hamburger i");
// let headerRight = document.querySelector(".header-right");
// let navBar = document.querySelectorAll(".header-right .nav-bar");
// let tl = gsap.timeline({ paused: true });

// tl.to(headerRight, {
//     left: 0,
//     duration: 0.8
// });

// tl.from(navBar, {
//     x: -150,
//     duration: 0.5,
//     stagger: 0.2,
//     opacity: 0
// });

// let isOpen = false;

// function toggleMenu() {
//     if (isOpen) {
//         tl.reverse();
//     } else {
//         tl.play();
//     }
//     isOpen = !isOpen;
// }

// function applyAnimation() {
//     if (window.matchMedia("(max-width: 768px)").matches) {
//         menu.addEventListener("click", toggleMenu);
//         headerRight.style.left = "-100%"; // Hide menu by default on small screens
//     } else {
//         menu.removeEventListener("click", toggleMenu);
//         headerRight.style.left = "0"; // Show menu by default on large screens
//         navBar.forEach(item => item.style.opacity = 1); // Ensure nav-bar items are visible
//         // Ensure the menu is closed when the window is resized above 768px
//         if (isOpen) {
//             tl.reverse();
//             isOpen = false;
//         }
//     }
// }






let menu = document.querySelector(".hamburger i");
let headerRight = document.querySelector(".header-right");
let navBar = document.querySelectorAll(".header-right .nav-bar");

let isOpen = false;

function toggleMenu() {
    if (isOpen) {
        headerRight.style.left = "-100%";
        navBar.forEach(item => item.style.opacity = 0);
    } else {
        headerRight.style.left = "0";
        navBar.forEach(item => item.style.opacity = 1);
    }
    isOpen = !isOpen;
}

function applyAnimation() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        menu.addEventListener("click", toggleMenu);
        headerRight.style.left = "-100%"; // Hide menu by default on small screens
        navBar.forEach(item => item.style.opacity = 0); // Ensure nav-bar items are hidden
    } else {
        menu.removeEventListener("click", toggleMenu);
        headerRight.style.left = "0"; // Show menu by default on large screens
        navBar.forEach(item => item.style.opacity = 1); // Ensure nav-bar items are visible
        // Ensure the menu is closed when the window is resized above 768px
        if (isOpen) {
            headerRight.style.left = "-100%";
            navBar.forEach(item => item.style.opacity = 0);
            isOpen = false;
        }
    }
}

// Apply the animation on initial load
applyAnimation();

// Apply the animation on window resize
window.addEventListener("resize", applyAnimation);






// Initial check
applyAnimation();

// Add event listener for window resize to check again if screen size changes
window.addEventListener('resize', applyAnimation);


//demo

//   for about slider---------------

gsap.registerPlugin(ScrollTrigger);

        const container = document.querySelector('.main');
        const slides = gsap.utils.toArray('.slide-item');
        
        gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 5,
                snap: 1/ (slides.length - 1),
                end: () => "+=" + container.offsetWidth / slides.length
            }
        });




