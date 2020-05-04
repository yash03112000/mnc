

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
    var mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
    // console.log(mainNavLinks)
  let fromTop = window.scrollY;
//   console.log(fromTop);

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    // console.log(section)

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
      var tl = gsap.timeline();
              // console.log(entry)
              tl.to(section,{duration: 2,opacity:1})

    } else {
      link.classList.remove("current");
    }
  });


  
});

window.onload = function(){
  console.log('abcde');
  // document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
  var tl = gsap.timeline();
  tl.to('header h1',{duration: 1,opacity:1})

      
  // const section = document.querySelectorAll('section');
  // console.log(section);
  // observer = new IntersectionObserver((entries) => {

  //     entries.forEach(entry => {
  //         if(entry.intersectionRatio > 0) {
  //           // console.log('aa');
  //             // entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
              // var tl = gsap.timeline();
              // console.log(entry)
              // tl.to(entry.target,{duration: 2,opacity:1})
  //         }
  //         else {
  //             entry.target.style.animation = 'none';
  //         }
  //     })

  // })

  // let option = {
  //   // root: document.querySelector('#scrollArea'),
  //   // rootMargin: '0px',
  //   threshold: 0
  // }

  // section.forEach(image => {
  //     observer.observe(image)
  // })

};