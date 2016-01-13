'use strict';

class Board {
    constructor() {
        const HEIGHT = 22, WIDTH = 10;
        this.blocks = [];
        //RandomGenerator randomGenerator;
        this.currentTetrimino = undefined;
        this.ghostTetrimino = undefined;

        this.clearedLines = 0;
        this.valid = true;
        this.randomGenerator = new RandomGenerator();
        //spawnTetrimino();
    }

    isValidHorizontalPosition(tetrimino) {
        for (var block of tetrimino.blocks) {
            if (!this.isValidHorizontalPositionBlock(block)) {
                return false;
            }
        }
        return true;
    }

    isValidHorizontalPositionBlock(block) {
        return !((block.x < 0) ||
        (block.x > (this.WIDTH - 1)) ||
        (this.blocks[block.y][block.x] != undefined));
    }
}