export class Hero {
    constructor(stageWitdh) {
        this.stageWitdh = stageWitdh;

        this.size = 100;
        this.halfSize = this.size / 2;
        this.x = stageWitdh + this.size;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;
        // this.fps = 24;
        // this.fpsTime = 1000 / this.fps;
    }

    // resize(stageWidth, stageHeight) {

    // }


    draw(ctx, t, dots) {
        this.animate(ctx, dots);
    }

    getY2(x, dot) {
        const total = 200;
        let pt = this.getPointOnQuad(
            dot.x1,
            dot.y1,
            dot.x2,
            dot.y2,
            dot.x3,
            dot.y3,
            0
        );
        let prevX = pt.x;
        for (let i = 1; i < total; i++) {
            const t = i / total;
            pt = this.getPointOnQuad(
                dot.x1,
                dot.y1,
                dot.x2,
                dot.y2,
                dot.x3,
                dot.y3,
                t
            );
            if (x >= prevX && x <= pt.x) {
                return pt;
            }
            prevX = pt.x;
        }
        return pt;
    }

    getQuadValue(p0, p1, p2, t) {
        return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    }

    getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
        const tx = this.quadTangent(x1, x2, x3, t);
        const ty = this.quadTangent(y1, y2, y3, t);
        // const rotation = -Math.atan2(tx, ty) + (90 * Math.PI) / 180;
        return {
            x: this.getQuadValue(x1, x2, x3, t),
            y: this.getQuadValue(y1, y2, y3, t),
            // rotation: rotation
        };
    }

    quadTangent(a, b, c, t) {
        return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
    }



    getY(x, dots) {
        for (let i = 1; i < dots.length; i++) {
            if (x >= dots[i].x1 && x <= dots[i].x3) {
                return this.getY2(x, dots[i]);
            }
        }
        return {
            y: 0,
            rotation: 0
        };
    }
        

    animate(ctx, dots) {
        this.x -= this.speed;
        if (this.x < -this.size){
            this.x = this.stageWitdh + this.size;
        }
        const closest = this.getY(this.x, dots);
        this.y = closest.y - this.halfSize;

        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
        ctx.fillStyle = "#00BCD4"; // 원의 색상
        ctx.fill();
        ctx.closePath();

    }
}