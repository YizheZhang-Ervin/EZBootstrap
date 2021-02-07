function createEnemy(w, h, imageURL, canvas) {
    let enemy = new Enemy(w, h, imageURL, canvas);
    return enemy;
}

function Enemy(w, h, imageURL, canvas) {
    let canvasWidth = canvas.width;
    let x = Math.round(Math.random() * (canvasWidth - w - 0) + 0);
    this.x = x;
    this.y = -h;
    this.w = w;
    this.h = h;
    this.speed = Math.round(Math.random() * (10 - 3) + 3);
    this.image = new Image();
    this.image.src = imageURL;
    this.draw = function (ecanvas) {
        var context = ecanvas.getContext('2d');
        context.drawImage(this.image, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    this.move = function () {
        this.y += this.speed / 10;
    }
    this.isOutOfScreen = function (canvas) {
        if (this.y > canvas.height) {
            return true;
        } else {
            return false;
        }
    },
    this.crash = function () {
            // let sURL = require('')
            // let endSound = new Audio(sURL);
            // endSound.play();
    }
}