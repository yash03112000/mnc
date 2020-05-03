
var current = 1;
        
    	function findScrollDirectionOtherBrowsers(event){
            var delta;
            //console.log(a);
        	if (event.wheelDelta){
            	delta = event.wheelDelta;
            }else{
            	delta = -1 *event.deltaY;
            }
        	if (delta < 0){
                console.log('DOWN');
                if(current<6){
                    document.querySelector('.sec'+current).removeEventListener('wheel',findScrollDirectionOtherBrowsers);
                    setTimeout(() => {
                        document.querySelector('.sec'+(current)).addEventListener('wheel', findScrollDirectionOtherBrowsers);                        
                    }, 2000);
                    // document.querySelector('.sec'+(current+1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
                    scrolldown(current,++current);
                }
                
            }else if (delta > 0){
                console.log('UP');
                if(current>1){
                    document.querySelector('.sec'+current).removeEventListener('wheel',findScrollDirectionOtherBrowsers);
                    setTimeout(() => {
                        document.querySelector('.sec'+(current)).addEventListener('wheel', findScrollDirectionOtherBrowsers);                        
                    }, 2000);
                    // document.querySelector('.sec'+(current-1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
                    scrollup(current,--current);
                }
                
            }
        }

        function scrolldown(a,b){
            var tl = gsap.timeline();
            tl.set(`.part${a}3`, { transformOrigin: "left"});
            tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
            tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
            tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
            tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
            tl.to(`.img${a}`, { duration: .3,opacity: '0' });
            tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
            tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
            tl.to(`.part${a}3`, { duration: .01,display:'none' });
            tl.to(`.sec${b}`, { duration: .01,display: 'flex' },"-=0.2");
            tl.from(`.sec${b}`, { duration: .4,x:'100%' },"-=0.21");
            tl.to(`.part${b}1`, { duration: .5,y:'30px',opacity:'1' });
            tl.to(`.img${b}`, { duration: .3,opacity: '1' })
                .call(updatedown,[a,b]);
            tl.to(`.sidenav`, {duration:.2, opacity:'1' });
            tl.set(`.part${a}3`,{x:'0%'})
        }
        function scrollup(a,b){
            var tl = gsap.timeline();
            console.log(b);
            // tl.set(`.part${a}3`, { transformOrigin: "left"});
            tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
            tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
            tl.to(`.part03`, { duration: .01,display: 'initial' },"-=0.3");
            tl.from(`.part03`,{duration: .5,x:'-100%'},"-=0.31")
            tl.to(`.img${a}`, { duration: .3,opacity: '0' });
            tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
            tl.to(`.part03`,{duration: .5,x:'100%'},"-=0.2")
            tl.to(`.part03`, { duration: .01,display:'none' },"+=0.02");
            tl.to(`.sec${b}`, { duration: .01,display: 'flex' },"-=0.2");
            tl.from(`.sec${b}`, { duration: 1,x:'-100%' },"-=0.21");
            tl.to(`.part${b}1`, { duration: .5,y:'30px',opacity:'1' })
            tl.to(`.img${b}`, { duration: .3,opacity: '1' })
                .call(updateup,[a,b]);
            tl.to(`.sidenav`, {duration:.2, opacity:'1' });
            tl.set(`.part03`,{x:'00%'})
        }

        window.onload = function(){
            console.log('abcd');
            document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
            var tl = gsap.timeline();
            tl.from('.sec1',{duration: 1,x:'50px',opacity:0})
            tl.to('.part11',{duration: 1,opacity:1})
            tl.to('.img1',{duration: 1,opacity:1},"-=0.5")
            trial();
        };



let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('gestureZone');

document.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    // if (touchendX <= touchstartX) {
    //     console.log('Swiped left');
    // }
    
    // if (touchendX >= touchstartX) {
    //     console.log('Swiped right');
    // }
    
    if (touchendY < touchstartY) {
        console.log('Swiped up');
        if(current<6){
            // document.querySelector('.sec'+current).removeEventListener('wheel',findScrollDirectionOtherBrowsers);
            // document.querySelector('.sec'+(current+1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
            scrolldown(current,++current);
        }
    }
    
    if (touchendY > touchstartY) {
        console.log('Swiped down');
        if(current>0){
            // document.querySelector('.sec'+current).removeEventListener('wheel',findScrollDirectionOtherBrowsers);
            // document.querySelector('.sec'+(current-1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
            scrollup(current,--current);
        }
    }
    
    // if (touchendY === touchstartY) {
    //     console.log('Tap');
    // }
}

function updatedown(a,b){
    console.log(a);
    document.querySelectorAll('.sidenav ul li')[a-1].classList.remove('active');
    document.querySelectorAll('.sidenav ul li')[b-1].classList.add('active')
}
function updateup(a,b){
    console.log(a);
    document.querySelectorAll('.sidenav ul li')[a-1].classList.remove('active');
    document.querySelectorAll('.sidenav ul li')[b-1].classList.add('active')
}

function abc(a){
    if(current<a){
        scrolldown(current,a);
        current=a;
    }else if(current>a){
        scrollup(current,a)
        current=a;
    }
}


document.addEventListener('mousemove',function(e){
    // console.log(e.clientX)
    // console.log(getViewport());
    var xsize = getViewport()[0];
    var flag = e.clientX - (xsize/2);
    if(Math.abs(flag)<(xsize/4)){
        // console.log('yo');
        var percent = (flag/xsize)*23;
        console.log(2*percent);
        document.querySelector('.layer11').style.width = `${50+percent}%`;
        document.querySelector('.layer12').style.width = `${50-percent}%`;
        document.querySelector('.part11').style.width = `${50+percent}%`; 
        document.querySelector('.part12').style.width = `${50-percent}%`;
        document.getElementById('svg').style.transform = `rotateY(${6*percent}deg)`;
        document.getElementById('svg2').style.transform = `rotateY(${6*percent}deg)`;
    }

})

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