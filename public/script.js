var matrix = [];
var m = 50;
var n = 50;
var side = 20;
//var matrix = [
//[0, 0, 0, 0, 0],
//[0, 0, 5, 3, 0],
//[0, 0, 0, 0, 0],
//[0, 0, 0, 0, 0],
//[0, 0, 0, 0, 0],
//[0, 0, 0, 0, 0],
//[0, 0, 0, 0, 0]
//];


function setup() {
  frameRate(3);
  background('#acacac');
  for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
      matrix[y][x] = random([0, 1, 1, 1, 1,  2, 2, 2, 2, 2, 3, 4, 5]);
    }
  }
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        matrix[y][x] = new Grass(x, y, 1);
      }
      else if (matrix[y][x] == 2) {
        matrix[y][x] = new GrassEater(x, y, 2);
      }
      else if (matrix[y][x] == 3) {
        matrix[y][x] = new Gishatich(x, y, 3);
      }
      else if (matrix[y][x] == 4) {
        matrix[y][x] = new Sunk(x, y, 4);
      }
      else if (matrix[y][x] == 5) {
        matrix[y][x] = new Bee(x, y, 5);
      }
    }
  }
  createCanvas(matrix[0].length * side, matrix.length * side);
}

function draw() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x].index == 1) {
        matrix[y][x].mul();
      }
      else if (matrix[y][x].index == 2) {
        matrix[y][x].eat();

      }
      else if (matrix[y][x].index == 3) {
        matrix[y][x].eat();
      }
      else if (matrix[y][x].index == 4) {
        matrix[y][x].mul();
      }
      else if (matrix[y][x].index == 5) {
        matrix[y][x].eat();
      }
    }
  }

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x].index == 1) {
        fill('green');
        rect(x * side, y * side, side, side);

      }
      else if (matrix[y][x].index == 2) {
        fill('yellow');
        rect(x * side, y * side, side, side);
        matrix[y][x].acted = false;
      }
      else if (matrix[y][x].index == 3) {
        fill('red');
        rect(x * side, y * side, side, side);
        matrix[y][x].acted = false;
      }
      else if (matrix[y][x].index == 4) {
        fill('orange');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x].index == 5) {
        fill('black');
        rect(x * side, y * side, side, side);
        matrix[y][x].acted = false;
      }
      else {
        fill('#acacac');
        rect(x * side, y * side, side, side);
      }

    }
  }
}

console.log(matrix);
