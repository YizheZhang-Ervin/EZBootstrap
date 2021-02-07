var backgroundOffset = 0;

// 启动入口
function drawAirplane() {
    let bgCanvas = document.getElementById("bgCanvas");
    if (bgCanvas.getContext) {
        let bgURL = "./resources/background.png";
        // load picture
        loadBackground(bgURL, bgCanvas, moveBackground);
    }
}

function loadBackground(bgURL, bgCanvas, completeCallback) {
    let context = bgCanvas.getContext('2d');
    let width = bgCanvas.width;
    let height = bgCanvas.height;
    let image = new Image();
    image.onload = function () {
        context.drawImage(this, 0, 0, width, height);
        context.drawImage(this, 0, -height, width, height);
        if (completeCallback) {
            completeCallback(bgCanvas, image);
        }
    }
    image.src = bgURL;
}

function moveBackground(bgCanvas, bgImage) {
    // 声音
    // let bgsURL = ""
    // let bgSound = new Audio(bgsURL);
    // bgSound.loop = true;
    // bgSound.play();
    let func = animateBackground;
    setInterval(function () {
        // 执行速度
        let speed = 5;
        // 执行方法
        func(bgCanvas, bgImage, speed);
    }, 30)
    // 主角出场
    let heroCanvas = document.getElementById('heroCanvas');
    let context = heroCanvas.getContext('2d');
    let img = "./resources/hero.png";
    let hero = createHero(66, 82, heroCanvas, img, heroLoaded);
    function heroLoaded() {
        hero.draw(heroCanvas);
    }
    // 飞机动起来
    setInterval(function () {
        context.clearRect(0, 0, 320, 568);
        hero.draw(heroCanvas);
    }, 30)
    // 子弹飞起来
    let bCanvas = document.getElementById('bulletCanvas');
    let bContext = bCanvas.getContext('2d');
    let bWidth = 48;
    let bHeight = 14;
    let bURL = "./resources/bullet.png";
    let bulletArray = new Array();
    setInterval(() => {
        let bullet = createBullet(bWidth, bHeight, bURL, hero);
        bulletArray.push(bullet);
        bullet.draw(bCanvas);
    }, 200);
    setInterval(() => {
        // 清除画布
        bContext.clearRect(0, 0, 320, 568);
        for (let i = 0; i < bulletArray.length; i++) {
            // 子弹出屏从数组中删去
            if (bulletArray[i].isOutOfScreen()) {
                bulletArray.splice(i, 1);
            }
            bulletArray[i].move();
            bulletArray[i].draw(bCanvas);
            // 循环敌机
            for (let j = 0; j < enemyArray.length; j++) {
                if (isEnemyHitHero(bulletArray[i], enemyArray[j])) {
                    enemyArray[j].crash();
                    enemyArray.splice(j, 1);
                    bulletArray.splice(i, 1);
                }
            }

        }
    }, 30)
    // 创建敌机
    let eCanvas = document.getElementById('enemyCanvas');
    let eContext = eCanvas.getContext('2d');
    let enemyArray = new Array();
    setInterval(() => {
        let number = getRandForNum(1, 3);
        let enemy;
        let eURL = './resources/enemy.png';
        switch (number) {
            case 1: { enemy = createEnemy(38, 34, eURL, eCanvas); break; }
            case 2: { enemy = createEnemy(110, 164, eURL, eCanvas); break; }
            case 3: { enemy = createEnemy(46, 64, eURL, eCanvas); break; }
        }
        enemyArray.push(enemy);
        enemy.draw(eCanvas);
    }, 1000)
    // 让敌机降落
    let eTimer = setInterval(() => {
        eContext.clearRect(0, 0, eCanvas.width, eCanvas.height);
        for (var i = 0; i < enemyArray.length; i++) {
            enemyArray[i].move();
            enemyArray[i].draw(eCanvas);
            // 碰撞检测
            if (isEnemyHitHero(enemyArray[i], hero)) {
                clearInterval(eTimer);
                eTimer = null;
                alert('Game over');
            }
            // 判断敌机是否出屏幕
            if (enemyArray[i].isOutOfScreen(eCanvas)) {
                enemyArray.splice(i, 1);
            }
        }
    })

}

function animateBackground(canvas, image, speed) {
    let context = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    //清除画布
    context.clearRect(0, 0, width, height);
    context.save();
    //更新位置
    backgroundOffset += speed;
    if (backgroundOffset >= height) {
        backgroundOffset = 0;
    }
    context.translate(0, backgroundOffset);
    //绘制图片
    context.drawImage(image, 0, 0, width, height);
    context.drawImage(image, 0, -height, width, height);
    // 获取存储状态
    context.restore();
}

function getRandForNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function isEnemyHitHero(obj1, obj2) {
    let minX1 = obj1.x;
    let minY1 = obj1.y;
    let maxX1 = obj1.x + obj1.w;
    let maxY1 = obj1.y + obj1.h;
    let minX2 = obj2.x;
    let minY2 = obj2.y;
    let maxX2 = obj2.x + obj2.w;
    let maxY2 = obj2.y + obj2.h;
    let minX = Math.max(minX1, minX2);
    let minY = Math.max(minY1, minY2);
    let maxX = Math.min(maxX1, maxX2);
    let maxY = Math.min(maxY1, maxY2);
    if (minX < maxX && minY < maxY) {
        return true;
    } else {
        return false;
    }
}