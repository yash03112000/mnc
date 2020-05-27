
function eventfun(){
    var a=3;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(event1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
}
function event1(a){
    window.location = "./events.html"
    
}

function club(){
  var a=4;
  console.log('aaa');
  var tl = gsap.timeline();
  tl.set(`.part${a}3`, { transformOrigin: "left"});
  tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
  tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
  tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
  tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
  tl.to(`.img${a}`, { duration: .3,opacity: '0' });
  tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
  .call(club1,[a]);
  // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
}
function club1(a){
  window.location = "./club.html"
}

function eventfun(){
  var a=3;
  console.log('aaa');
  var tl = gsap.timeline();
  tl.set(`.part${a}3`, { transformOrigin: "left"});
  tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
  tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
  tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
  tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
  tl.to(`.img${a}`, { duration: .3,opacity: '0' });
  tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
  .call(event1,[a]);
  // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
}
function event1(a){
  window.location = "./events.html"
  
}

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
.call(page1,[a]);
// tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
}
function page1(a){
window.location = "./about.html"
}