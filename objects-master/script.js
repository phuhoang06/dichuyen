
function Hero(image, top, left, speed, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.speed = speed;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
  }

  this.moveLeft = function () {
    this.left -= this.speed;
  }

  this.moveUp = function () {
    this.top -= this.speed;
  }

  this.moveDown = function () {
    this.top += this.speed;
  }
}

var hero = new Hero('pikachu.png', 20, 30, 20, 200);

function start() {
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50); // Tăng tốc độ vẽ lại màn hình
}

function controlHero(event) {
  switch (event.keyCode) {
    case 37: // Left arrow
      if (hero.left > 0) {
        hero.moveLeft();
      }
      break;
    case 38: // Up arrow
      if (hero.top > 0) {
        hero.moveUp();
      }
      break;
    case 39: // Right arrow
      if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
      }
      break;
    case 40: // Down arrow
      if (hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
      }
      break;
  }
}

window.addEventListener('keydown', controlHero);

start();
