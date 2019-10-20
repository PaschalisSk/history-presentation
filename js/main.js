$(document).ready(function() {

    var Scroll = function(){
        this.currentSlide = 1;
        this.video = document.getElementById("video");;
        console.log(this.video);
        var that = this;
        $(document).keyup(function(e){
            if(e.which == 68 && that.currentSlide < $('.slide-wrapper').length){
                that.nextSlide();
            }
            if(e.which == 65 && that.currentSlide > 1){
                that.previousSlide();
            }
        });
    }

    Scroll.prototype.nextSlide = function(){
        this.currentSlide++;
        if(this.currentSlide == 12){
            var that = this;
            window.setTimeout(function(){that.video.play()}, 1500);
        }
        this.animateScroll();
    }

    Scroll.prototype.previousSlide = function(){
        this.currentSlide--;
        this.animateScroll();
    }

    Scroll.prototype.animateScroll = function(){
        var scrollH = (this.currentSlide-1)*768;
        $("html, body").stop().animate({scrollTop: scrollH},{duration: 1000, ease:'easeInOutCubic'});
    }

    scroll = new Scroll();
});
