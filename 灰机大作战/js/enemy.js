// //敌方飞机

// //敌方飞机的父类

// class Enemy {
//     constructor() {
//         this.ele = document.createElement('div');
//         document.body.appendChild(this.ele);
//     }

//     init() {
//         var container = document.getElementsByClassName('main')[0];
//         //随机生成位置
//         var leftSide = container.offsetLeft;
//         var rightSide = container.offsetLeft + container.offsetWidth - this.ele.offsetWidth;
//         var left = randomInt(leftSide, rightSide);
//         // console.log(left);
//         this.ele.style.left = left + 'px';
//         this.ele.style.top = -this.ele.offsetHeight + 'px';
//     }

//     move() {
//         var that = this;
//         this.ele.timer = setInterval(function() {
//             //速度10
//             that.ele.style.top = that.ele.offsetTop + 10 + 'px';
//             var container = document.getElementsByClassName('main')[0];
//             if (that.ele.offsetTop > container.offsetHeight + that.ele.offsetHeight) {
//                 //超出容器
//                 clearInterval(that.ele.timer);
//                 document.body.removeChild(that.ele);
//                 var index = 0;
//                 for (var i = 0; i < Engine.enemies.length; i++) {
//                     if (enemies[i] === this) {
//                         index = i;
//                     }
//                 }
//             }
//         }, 50);
//     }
//     hurt() {
//         this.hp = this.hp - 1;
//         if (this.hp == 0) {
//             //让敌机消失
//             this.destory()
//         }
//     }
//     destory() {
//         clearInterval(this.ele.timer);
//         var that = this;
//         var index = 0;
//         var timer = setInterval(function() {
//             var imgArr = that.imgArr[index];
//             that.ele.style.background = 'url(./images/' + imaArr + ')';
//             index = index + 1;
//             if (index == that.imgArr.length) {
//                 clearInterval(timer);
//                 document.body.removeChild(that.ele);
//             }
//         }, 50)

//     }
// }

// //小敌机
// class SmallEnemy extends Enemy {
//     constructor() {
//         super();
//         this.imgArr = ["plain1_die1.png", "plain1_die2.png", "plain1_die3.png"]
//         this.ele.className = 'enemy-small';
//         this.init();
//     }
// }
// //中敌机
// class MiddleEnemy extends Enemy {
//     constructor() {
//         super();
//         this.imgArr = ["plain2_die1.png", "plain2_die2.png", "plain2_die3.png", "plain2_die4.png"]
//         this.ele.className = "enemy-middle";
//         this.init();
//     }
// }
// //大敌机
// class LargeEnemy extends Enemy {
//     constructor() {
//         super();
//         this.imgArr = ["plain3_die1.png", "plain3_die2.png", "plain3_die3.png", "plain3_die4.png", "plain3_die5.png", "plain3_die6.png"]
//         this.ele.className = "enemy-large";
//         this.init();
//     }

// }


// 碰撞逻辑
// 敌方飞机

// 敌方飞机的父类

class Enemy {
    constructor() {
        this.ele = document.createElement("div");
        document.body.appendChild(this.ele);
    }

    init() {
        var container = document.getElementsByClassName("main")[0];
        // 随机生成位置
        var leftSide = container.offsetLeft;
        var rightSide =
            container.offsetLeft + container.offsetWidth - this.ele.offsetWidth;

        var left = randomInt(leftSide, rightSide);
        this.ele.style.top = -this.ele.offsetHeight + "px";
        this.ele.style.left = left + "px";
    }

    move() {
        var that = this;
        this.ele.timer = setInterval(function() {
            // 飞机速度 10
            that.ele.style.top = that.ele.offsetTop + 10 + "px";
            var container = document.getElementsByClassName("main")[0];
            if (that.ele.offsetTop > container.offsetHeight + that.ele.offsetHeight) {
                // 超出容器
                clearInterval(that.ele.timer);
                document.body.removeChild(that.ele);

                var index = 0;
                for (var i = 0; i < engine.enemies.length; i++) {
                    if (engine.enemies[i] === this) {
                        index = i;
                    }
                }
                engine.enemies.splice(index, 1);
            }
        }, 50);
    }

    hurt() {
            this.hp = this.hp - 1;
            if (this.hp == 0) {
                // 让敌机消失
                this.destory();
            }
        }
        // 消失
    destory() {
        clearInterval(this.ele.timer);

        var that = this;
        var index = 0;
        var timer = setInterval(function() {
            var imgArr = that.imgArr[index];
            // ./img/die1.png
            that.ele.style.background = "url(./images/" + imgArr + ")";
            index = index + 1;
            if (index == that.imgArr.length) {
                clearInterval(timer);
                document.body.removeChild(that.ele);
            }
        }, 50);
    }
}

// 小敌机
class SmallEnemy extends Enemy {
    constructor() {
        super();
        this.hp = 3;
        this.imgArr = ["plain1_die1.png", "plain1_die2.png", "plain1_die3.png"];
        this.ele.className = "enemy-small";
        this.init();
    }
}

// 中敌机

class MiddleEnemy extends Enemy {
    constructor() {
        super();
        this.hp = 4;
        this.imgArr = [
            "plain2_die1.png",
            "plain2_die2.png",
            "plain2_die3.png",
            "plain2_die4.png",
        ];
        this.ele.className = "enemy-middle";
        this.init();
    }
}

// 大敌机
class LargeEnemy extends Enemy {
    constructor() {
        super();
        this.hp = 6;
        this.imgArr = [
            "plain3_die1.png",
            "plain3_die2.png",
            "plain3_die3.png",
            "plain3_die4.png",
            "plain3_die5.png",
            "plain3_die6.png",
        ];
        this.ele.className = "enemy-large";
        this.init();
    }
}