class GameOfLife {
    constructor(canvas, cellSize = 1) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cellSize = cellSize;
        this.columns = Math.floor(canvas.width / cellSize);
        this.rows = Math.floor(canvas.height / cellSize);
        this.grid = this.createGrid();
    }

    createGrid() {
        let grid = new Array(this.columns);
        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.rows).fill(0);
        }
        return grid;
    }

    randomizeGrid() {
        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.grid[i][j] = Math.floor(Math.random() * 2);
            }
        }
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#FFF';
        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                if (this.grid[i][j]) {
                    this.ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
    }

    update() {
        let newGrid = this.createGrid();

        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                let liveNeighbors = this.getLiveNeighbors(i, j);

                if (this.grid[i][j] && (liveNeighbors === 2 || liveNeighbors === 3)) {
                    newGrid[i][j] = 1;
                } else if (!this.grid[i][j] && liveNeighbors === 3) {
                    newGrid[i][j] = 1;
                }
            }
        }

        this.grid = newGrid;
    }

    getLiveNeighbors(x, y) {
        let count = 0;

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (i === 0 && j === 0) continue;
                let col = (x + i + this.columns) % this.columns;
                let row = (y + j + this.rows) % this.rows;
                count += this.grid[col][row];
            }
        }

        return count;
    }

 run() {
        // Check if the canvas dimensions have changed
        if (this.canvas.width !== this.columns * this.cellSize || this.canvas.height !== this.rows * this.cellSize) {
            this.columns = Math.floor(this.canvas.width / this.cellSize);
            this.rows = Math.floor(this.canvas.height / this.cellSize);
            this.grid = this.createGrid();
            this.randomizeGrid();
        }

        this.update();
        this.draw();
        requestAnimationFrame(() => this.run());
    }
}

function initGameOfLife(targetElement) {
    const canvas = document.createElement('canvas');
    canvas.width = targetElement.clientWidth;
    canvas.height = targetElement.clientHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; // Ensure the canvas stays behind the content
    canvas.style.width = '100%'; // Add this line
    canvas.style.height = '100%'; // Add this line

    targetElement.appendChild(canvas);

    const gameOfLife = new GameOfLife(canvas);
    gameOfLife.randomizeGrid();
    gameOfLife.run();

    // Add a resize event listener to update canvas dimensions
    window.addEventListener('resize', () => {
        canvas.width = targetElement.clientWidth;
        canvas.height = targetElement.clientHeight;
    });
}





// window.addEventListener('load', () => {
//     const canvas = document.getElementById('gameCanvas');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const gameOfLife = new GameOfLife(canvas);
//     gameOfLife.randomizeGrid();
//     gameOfLife.run();
// });
