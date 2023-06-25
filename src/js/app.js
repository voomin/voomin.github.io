import { HeroController } from "./hero_controller";
import { Hill } from "./hill";

class App {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill('#4D7798', 0.2, 12),
            new Hill('#6598B8', 0.5, 8),
            new Hill('#557FAA', 1.4, 6)
        ];
        
        this.heroController = new HeroController();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;

        // 레티나 디스플레이에서도 선명하게 보이도록 설정
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        // 캔버스에 그려지는 크기를 2배로 설정
        this.ctx.scale(2, 2);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.heroController.resize(this.stageWidth, this.stageHeight);

    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx);
        } 

        this.heroController.draw(this.ctx, t, dots);
    }

    jump() {
        this.heroController.jump();
    }
}

let app;

window.onload = () => {
    app = new App();
}

function jump() {
    if (!app) return;    
    app.jump();
}

window.addEventListener('click', jump);
window.addEventListener('pointerdown', jump);