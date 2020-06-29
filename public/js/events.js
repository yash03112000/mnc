

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
let mainSections = document.querySelectorAll("main section div");
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
              tl.to(section,{duration: 2,opacity:1,y:-30})

    } else {
      link.classList.remove("current");
    }
  });


  
});

// window.onload = function(){
//   console.log('abcde');
//   // document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
//   var tl = gsap.timeline();
//   tl.to('header h1',{duration: 1,opacity:1})
// };


function trans(a,b){
  console.log('trans')
  document.querySelector('.part23').style.backgroundColor = b;
  var pos = window.pageYOffset ||  document.documentElement.scrollTop;
  var final = pos + getViewport()[1];
  // console.log(pos);
  // console.log(final)
  document.querySelector('body').style.height = "100vh";
  document.querySelector('body').style.overflow = "hidden";
  var tl = gsap.timeline();
  tl.set('.part23',{display:'grid'});
  tl.set(`.part23`, { transformOrigin: "bottom",y:final});
  tl.to('.part23',{duration:0.8,y:pos})
  .call(trans1,[a])
}
function trans1(a){
  window.location = `./${a}.html`
}


function getViewport() {

  var viewPortWidth;
  var viewPortHeight;
 
  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerWidth != 'undefined') {
    viewPortWidth = window.innerWidth,
    viewPortHeight = window.innerHeight
  }
 
 // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (typeof document.documentElement != 'undefined'
  && typeof document.documentElement.clientWidth !=
  'undefined' && document.documentElement.clientWidth != 0) {
     viewPortWidth = document.documentElement.clientWidth,
     viewPortHeight = document.documentElement.clientHeight
  }
 
  // older versions of IE
  else {
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
  }
  return [viewPortWidth, viewPortHeight];
 }

 window.onload = ()=>{
  console.log('abcde');
  // window.scrollTo(0, 0);
  // document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
  var tl = gsap.timeline();
  tl.to('.part23',{duration: 1,y:'-100vh'})
  tl.to('.mega',{duration: 1,y:'-100vh'},'-=1')
  tl.to('header h1',{duration: 1,opacity:1},'-=1')
    .call(over)

};
var over = ()=>{
  document.querySelector('body').style.overflow = 'visible';
}





