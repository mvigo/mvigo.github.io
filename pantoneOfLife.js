class PantoneGameOfLife {
    constructor(canvas, cellSize = 10) {
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
        // Choose a random color from the Pantone-inspired color palette
        const colors = [
            'rgba(0, 255, 255, 0.2)',
            'rgba(57, 255, 20, 0.2)',
            'rgba(255, 105, 180, 0.2)',
            'rgba(255, 0, 0, 0.2)',
            'rgba(255, 165, 0, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(128, 0, 128, 0.2)',
            'rgba(192, 192, 192, 0.2)',
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        this.ctx.fillStyle = randomColor;
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

                if (this.grid[i][j] === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
                    newGrid[i][j] = 1;
                } else if (this.grid[i][j] === 0 && liveNeighbors === 3) {
                    newGrid[i][j] = 1;
                } else {
                    newGrid[i][j] = 0;
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

        // Add custom functions for generating geometric shapes, patterns, and typography
        this.drawGeometricShapes();
        this.drawPatterns();
        this.drawTypography();

    drawGeometricShapes() {
        // Implement your custom function to draw geometric shapes inspired by Pantone's style
    }

    drawPatterns() {
        // Implement your custom function to draw Op Art patterns inspired by Pantone's style
    }

    drawTypography() {
        // Implement your custom function to draw bold and futuristic typography inspired by Pantone's style
    }


function initPantoneGameOfLife(targetElement) {
    const canvas = document.createElement('canvas');
    canvas.width = targetElement.clientWidth;
    canvas.height = targetElement.clientHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    targetElement.appendChild(canvas);

    const pantoneGameOfLife = new PantoneGameOfLife(canvas);
    pantoneGameOfLife.randomizeGrid();
    pantoneGameOfLife.run();

    // Add a resize event listener to update canvas dimensions
    window.addEventListener('resize', () => {
        canvas.width = targetElement.clientWidth;
        canvas.height = targetElement.clientHeight;
    });
}

