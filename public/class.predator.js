class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }


    chooseCell_1(num) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    chooseCell_2(num, num1) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num || matrix[y][x] == num1) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num || matrix[y][x].index == num1) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }


    move() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell_2(0, 1));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }

            }
        }
        console.log(this.energy);
    }

    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell_1(2));
            console.log(newCell);
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.acted == true;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 4;
                }
            }
            else {
                this.move();
            }
        }


    }

    mul() {
        var newCell = random(this.chooseCell_1(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatich(newX, newY, 3);
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}