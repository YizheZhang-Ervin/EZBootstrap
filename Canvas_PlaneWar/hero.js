function createHero(w, h, canvas, imageURL, completeCallback) {
    // let context = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    // 水平居中,垂直底部向上20像素
    let x = width / 2 - w / 2;
    let y = height / 2 - h - 20;
    let hero = new Hero(x, y, w, h, imageURL, completeCallback);
    document.onkeydown = function (e) {
        let event = e || window.event;
        switch (event.keyCode) {
            case 37: { hero.left = true; break; }
            case 38: { hero.up = true; break; }
            case 39: { hero.right = true; break; }
            case 40: { hero.down = true; break; }
        }
    }
    document.onkeyup = function (e) {
        let event = e || window.event;
        switch (event.keyCode) {
            case 37: { hero.left = false; break; }
            case 38: { hero.up = false; break; }
            case 39: { hero.right = false; break; }
            case 40: { hero.down = false; break; }
        }
    }
    setInterval(function () {
        if (hero.left == true) {
            hero.x -= 2;
        }
        if (hero.up == true) {
            hero.y -= 2;
        }
        if (hero.right == true) {
            hero.x += 2;
        }
        if (hero.down == true) {
            hero.y += 2;
        }
    }, 10);
    return hero;

}

function Hero(x, y, w, h, imageURL, completeCallback) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = new Image();
    // 加载图片
    this.image.onload = function () {
        if (completeCallback) {
            completeCallback(this);
        }
    }
    // 添加图片源
    this.image.src = imageURL;
    this.draw = function (canvas) {
        let context = canvas.getContext('2d');
        let x = this.w * this.bool;
        let w = this.w;
        let h = this.h;
        context.drawImage(this.image, x, 0, w, h, this.x, this.y, w, h);
        this.bool = !this.bool;
    }
    //图片开关
    this.bool = true;
}
