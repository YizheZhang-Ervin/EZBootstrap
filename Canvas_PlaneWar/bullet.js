function createBullet(bWidth, bHeight, bURL, hero) {
    let x = hero.x - hero.w / 2 - bWidth / 2;
    let y = hero.y - bHeight
    let bullet = new Bullet(x, y, bWidth, bHeight, bURL);
    // 子弹声音
    // let bsURL = "";
    // let bSound = new Audio(bsURL);
    // bSound.play();
    return bullet;

}

function Bullet(x, y, w, h, imageURL) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = new Image();
    this.image.src = imageURL;
    this.draw = function (canvas) {
        let context = canvas.getContext('2d');
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
    this.move = function () {
        this.y -= 10;
    }
    this.isOutOfScreen = function () {
        if (this.y < -this.h) {
            return true;
        } else {
            return false;
        }
    }
}