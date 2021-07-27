//存放公共函数
//生成一个指定范围的随机整数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}