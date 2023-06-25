import { Hero } from "./hero";

export class HeroController {
  constructor() {
  }


  resize(stageWidth, stageHeight) {
    // this.view.resize(stageWidth, stageHeight);
    this.hero = new Hero(stageWidth);
  }

  draw(ctx, t, dots) {
    this.hero.draw(ctx, t, dots);
  }
}