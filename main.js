function preload() {

}

function setup() {
 canvas = createCanvas(500, 500);
 canvas.center();
}

function draw() {
    webcam(VIDEO);
}

function snapshot() {
    save('Mustach_filter.png')
}