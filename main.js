nosex = 0;
nosey = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/fT9Ys9tQ/Clown-Nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
   // circle(nosex, nosey, 20);
    image(clown_nose, nosex, nosey, 30, 30);
}

function take_snapshot() {
    save('myFiterImage.png');
}

function modelLoaded() {
    console.log("postNetstarted");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 20;
        nosey = results[0].pose.nose.y - 20;
        console.log("nosex =" + results[0].pose.nose.x);
        console.log("nosey =" + results[0].pose.nose.y);
    }
}