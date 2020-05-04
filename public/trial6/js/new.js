// window.onload = function(){
    
// }

// function trial(){
//     var s = Snap("#svg");
//     var t = s.text("8vw", 200, "H").attr({
//         font: "20vw Helvetica, sans-serif",
//         textAnchor: "middle",
//         fill: "#610c68"
//     })

//     var s2 = Snap("#svg2");
//     var t2 = s2.text("8vw", 200, "H").attr({
//         font: "20vw Helvetica, sans-serif",
//         textAnchor: "middle",
//         fill: "white"
//     })
// }


function pageTransition() {

    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleY: 1});
    tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }
  
  // Function to animate the content of each page
  function contentAnimation() {
  
    // var tl = gsap.timeline();
    // tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0, stagger: 0.4 });
    // tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});
  
    // $('.green-heading-bg').addClass('show');
  
  }
//   var a=1;
//   function barba1234(){
//     //   console.log('aa');
//     barba.init({
  
//         sync: true,
        
//         if(a === 1){
//             transitions: [{
    
//                 async leave(data) {
                  
//                   const done = this.async();
                  
//                   pageTransition();
//                   await delay(1000);
//                   done();
          
//                 },
          
//                 async enter(data) {
//                   contentAnimation();
//                 },
          
//                 async once(data) {
//                   contentAnimation();
//                 }
          
//               }]
//         }
        
//       });
//   }
// //   $(function() {
  
    
  
// //   });


//   function delay(n) {
//     n = n || 2000;
//     return new Promise(done => {
//       setTimeout(() => {
//         done();
//       }, n);
//     });
//   }


function page(){
    var a=2;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(abra,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
}
function abra(a){
    window.location = "./events.html"
    
}