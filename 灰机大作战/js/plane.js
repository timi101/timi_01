//我方飞机

class Plane {
    constructor() {}
        //显示飞机
    show() {
        //创建飞机
        this.ele = document.createElement('div');
        this.ele.className = "my-plane";
        document.body.appendChild(this.ele);
        //初始化飞机的位置
        // console.log(this.ele.offsetLeft);
        let container = document.getElementsByClassName('main')[0];
        let top = container.offsetHeight - this.ele.offsetHeight;
        let left = container.offsetLeft + container.offsetWidth / 2 - this.ele.offsetWidth / 2;
        this.ele.style.top = top + 'px';
        this.ele.style.left = left + 'px';
        this.move();
        this.fire();
        //飞机移动

    }
    move() {
        var that = this;
        let container = document.getElementsByClassName('main')[0];
        var leftSide = container.offsetLeft;
        var rightSide = container.offsetLeft + container.offsetWidth - this.ele.offsetWidth;
        document.onmousemove = function(e) {
            var left = e.clientX - that.ele.offsetWidth / 2;
            var top = e.clientY - that.ele.offsetHeight / 2
            if (left < leftSide) {
                left = leftSide
            }
            if (left > rightSide) {
                left = rightSide
            }
            that.ele.style.top = top + 'px';
            that.ele.style.left = left + 'px';
        };

    }
    fire() {
        setInterval(function() {
            let tmp = new Bullet();
            engine.bullets.push(tmp);
        }, 300);
    }
}