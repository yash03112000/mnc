
function eventfun(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=3;
    console.log('mobile');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(event1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
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

}
function event1(a){
    window.location = "./events.html"
    
}

function club(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=4;
    console.log('mobile');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(club1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
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

}
function club1(a){
  window.location = "./club.html"
}



function page(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=2;
    console.log('aaa');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(page1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
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

}
function page1(a){
window.location = "./about.html"
}



window.addEventListener("scroll", event => {
  // var mainNavLinks = document.querySelectorAll(".sidenav2 div a");
  let mainSections = document.querySelectorAll(".parallax");
      // console.log(mainNavLinks)
    let fromTop = window.scrollY;
  //   console.log(fromTop);
  
  mainSections.forEach((link,i) => {
    // console.log(link)
      let section = link
      // console.log(section)
  
      if (
        section.offsetTop <= (fromTop+(0.9*getViewport()[1])) &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        // link.classList.add("current");
        var tl = gsap.timeline();
                // console.log(entry)
                tl.set(section,{opacity:1})
                tl.to(`.part${i+2}2`,{duration: 0.2,opacity:1})
                tl.to(`.head${i+2}`,{duration: 0.2,opacity:1,y:-10},'-=0.2')
                tl.to(`.content${i+2}`,{duration: 0.2,opacity:1,y:-10})
                tl.to(`.view${i+2}`,{duration: 0.2,opacity:1},'-=0.2')
                tl.to(`.img${i+2}`,{duration: 0.4,opacity:1,scale: '0.8',x:"10px"})



  
      }
    });
  
  
    
  });