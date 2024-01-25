class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });
        this.position = -300;
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(theTick, ctx, theX, theY) {
        this.elapsedTime += theTick;
        this.position += 6;
        if (this.position > 900) {
            this.position = -300;
        }
        if (this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime;
        };
        const frame = this.currentFrame();

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart,
            this.width, this.height,
            this.position, 272,
            this.width*4, this.height*4);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}