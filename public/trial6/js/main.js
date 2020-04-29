
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
                    document.querySelector('.sec'+(current+1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
                    scrolldown(current,++current);
                }
                
            }else if (delta > 0){
                console.log('UP');
                if(current>0){
                    document.querySelector('.sec'+current).removeEventListener('wheel',findScrollDirectionOtherBrowsers);
                    document.querySelector('.sec'+(current-1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
                    scrollup(current,--current);
                }
                
            }
        }

        function scrolldown(a,b){
            var tl = gsap.timeline();
            tl.set(`.part${a}3`, { transformOrigin: "left"});
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
            tl.to(`.img${b}`, { duration: .3,opacity: '1' });
            tl.set(`.part${a}3`,{x:'0%'})
        }
        function scrollup(a,b){
            var tl = gsap.timeline();
            console.log(b);
            // tl.set(`.part${a}3`, { transformOrigin: "left"});
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
            tl.to(`.img${b}`, { duration: .3,opacity: '1' });
            tl.set(`.part03`,{x:'00%'})
        }

        window.onload = function(){
            console.log('abcd');
            document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
            var tl = gsap.timeline();
            tl.from('.sec1',{duration: 1,x:'50px',opacity:0})
            tl.to('.part11',{duration: 1,opacity:1})
            tl.to('.img1',{duration: 1,opacity:1},"-=0.5")
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
    
    if (touchendY <= touchstartY) {
        console.log('Swiped up');
        if(current<6){
            // document.querySelector('.sec'+current).removeEventListener('wheel',findScrollDirectionOtherBrowsers);
            // document.querySelector('.sec'+(current+1)).addEventListener('wheel', findScrollDirectionOtherBrowsers);
            scrolldown(current,++current);
        }
    }
    
    if (touchendY >= touchstartY) {
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