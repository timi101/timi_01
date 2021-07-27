//子弹
class Bullet {
    constructor() {
        this.init();
    }
    init() {
        this.ele = document.createElement('div')
        this.ele.className = 'bullet'
        document.body.appendChild(this.ele);

        var plane = document.getElementsByClassName('my-plane')[0];
        var left = plane.offsetLeft + plane.offsetWidth / 2 - this.ele.offsetWidth / 2 + 'px';
        var top = plane.offsetTop - this.ele.offsetHeight + 'px';
        this.ele.style.left = left;
        this.ele.style.top = top;
        this.move();
        //生成飞机
        // this.myPlane = new Plane();
        // this.myPlane.show();
        //生成子弹
    }
    move() {
            var that = this;
            this.ele.timer = setInterval(function() {
                that.ele.style.top = that.ele.offsetTop - 10 + 'px';
                if (that.ele.offsetTop < -that.ele.offsetHeight) {
                    clearInterval(that.ele.timer);
                    document.body.removeChild(that.ele);

                    var index = 0;
                    for (var i = 0; i < engine.bullets.length; i++) {
                        if (engine.bullets[i] == this) {
                            index = i;
                        }
                    }
                    engine.bullets.splice(index, 1);
                }
            }, 50);
        }
        //子弹爆炸
    boom() {
        //1.背景图变
        //2.消失
        var that = this;

        this.ele.className = 'bullet-die';
        setTimeout(function() {
            document.body.removeChild(that.ele)
        }, 200)
        clearTimeout(this.ele.timer);
    }

}