leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
rightWristX = 0;
remove_decimals = 0;
function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(700, 104);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(100, 104);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
} 
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if (results.length > 0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        differance= rightWristX-leftWristX;
        remove_decimals= floor(differance);
    }
}
function draw(){
    background(223, 71, 89);
    textSize(remove_decimals);
    fill(255, 255, 0);
    text('Ramyak',20, 200);
}