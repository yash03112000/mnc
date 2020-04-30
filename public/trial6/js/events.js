

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
    // console.log('s')

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});