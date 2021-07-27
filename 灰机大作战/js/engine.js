//游戏引擎、

// class Engine {
//     constructor() {
//         //存放所以的子弹
//         this.bullets = [];
//         //存放所以的敌机
//         this.enemies = [];
//         this.init();
//     }

//     //初始化游戏
//     init() {
//             //游戏场景
//             this.ele = document.getElementsByClassName('main')[0];
//             //生成飞机
//             this.myPlane = new Plane();
//             // console.log(this.myPlane);
//             this.myPlane.show();
//             this.createEnemy();
//             //检查
//             this.check();
//             //生成子弹。。。。

//         }
//         //创造敌机
//     createEnemy() {
//         var that = this;
//         setInterval(function() {
//             var random = Math.random();
//             if (random > 0.8) {
//                 var tmp = new SmallEnemy();
//                 tmp.move();
//                 that.enemies.push(tmp);
//             }
//         }, 500)
//         setInterval(function() {
//             var random = Math.random();
//             if (random > 0.8) {
//                 var tmp = new MiddleEnemy();
//                 tmp.move();
//                 that.enemies.push(tmp);
//             }
//         }, 1000)
//         setInterval(function() {
//             var random = Math.random();
//             if (random > 0.8) {
//                 var tmp = new LargeEnemy();
//                 tmp.move();
//                 that.enemies.push(tmp);
//             }
//         }, 2000)

//     }
//     getCollision(obj1, obj2, callback) {
//             var left1 = obj1.ele.offsetLeft; //1的左边
//             var right1 = obj1.ele.offsetLeft + obj1.ele.offsetWidth;
//             var top1 = obj1.ele.offsetTop;
//             var bottom1 = obj1.ele.offsetTop + obj1.ele.offsetHeight;

//             var left2 = obj2.ele.offsetLeft; //1的左边
//             var right2 = obj2.ele.offsetLeft + obj2.ele.offsetWidth;
//             var top2 = obj2.ele.offsetTop;
//             var bottom2 = obj2.ele.offsetTop + obj2.ele.offsetHeight;
//             if (right1 < left2 || left1 > right2 || bottom1 < top2 || bottom2 < top1) {
//                 return false;
//             } else {
//                 return true;
//             }

//         }
//         //检测是否发生碰撞
//     check() {
//         var that = this;
//         setInterval(function() {
//             //filter过滤  返回bool型

//             that.enemies.filter(function(enemy) {
//                 return (that.bullets = that.bullets.filter(function(bullet) {
//                     if (that.getCollision(bullet, enemy)) {

//                         //子弹和敌机相撞
//                         //1.子弹 炸了
//                         //2.敌机 Hp -1
//                         bullet.boom();
//                         enemy.init();
//                         return false;
//                     }
//                     return t;
//                 }));
//             });
//         }, 50)
//     }
// }
//游戏引擎



class Engine {
    constructor() {
        // 存放所有的子弹
        this.bullets = [];
        // 存放所有的敌机
        this.enemies = [];
        this.init();
    }

    // 初始化游戏
    init() {
        // 游戏场景
        this.ele = document.getElementsByClassName("main")[0];
        // 生成飞机
        this.myPlane = new Plane();
        this.myPlane.show();
        // 生成敌机
        this.createEnemy();
        // 检查是否发生碰撞
        this.check();
    }

    // 生成敌机
    createEnemy() {
        var that = this;
        // 生成小敌机
        setInterval(function() {
            var random = Math.random();
            if (random > 0.8) {
                var tmp = new SmallEnemy();
                tmp.move();
                that.enemies.push(tmp);
            }
        }, 500);

        // 生成中敌机
        setInterval(function() {
            var random = Math.random();
            if (random > 0.8) {
                var tmp = new MiddleEnemy();
                tmp.move();
                that.enemies.push(tmp);
            }
        }, 1000);

        // 生成大敌机
        setInterval(function() {
            var random = Math.random();
            if (random > 0.8) {
                var tmp = new LargeEnemy();
                tmp.move();
                that.enemies.push(tmp);
            }
        }, 1500);
    }

    // 碰撞逻辑
    getCollision(obj1, obj2, callback) {
        // 碰撞物体 obj1 obj2
        var left1 = obj1.ele.offsetLeft; // 1的左边
        var right1 = obj1.ele.offsetLeft + obj1.ele.offsetWidth; // 1的右边
        var top1 = obj1.ele.offsetTop; // 1的上边
        var bottom1 = obj1.ele.offsetTop + obj1.ele.offsetHeight; // 1的下边

        var left2 = obj2.ele.offsetLeft; // 2的左边
        var right2 = obj2.ele.offsetLeft + obj2.ele.offsetWidth; // 2的右边
        var top2 = obj2.ele.offsetTop; // 2的上边
        var bottom2 = obj2.ele.offsetTop + obj2.ele.offsetHeight; // 2的下边
        if (right1 < left2 || left1 > right2 || bottom1 < top2 || bottom2 < top1) {
            // 没有撞
            return false;
        } else {
            // 撞了
            return true;
        }
    }

    // 检测是否发生碰撞
    check() {
        var that = this;
        // filter
        setInterval(function() {
            that.enemies = that.enemies.filter(function(enemy) {
                return (that.bullets = that.bullets.filter(function(bullet) {
                    // 碰撞了
                    if (that.getCollision(bullet, enemy)) {
                        // 子弹和敌机相撞
                        // 1. 子弹 炸了
                        bullet.boom();
                        // 2. 敌机 hp -1
                        enemy.init();
                        return false;
                    }
                    return true;
                }));
            });
        }, 50);
    }
}