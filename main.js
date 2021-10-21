noseX = 0;
noseY = 0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 80, 35);
    //fill(255, 0, 0); colour
    //stroke(255, 0, 0); border
    //circle(noseX , noseY , 30); shape
    
}

function take_snapshot()
{
    save('My_Flitered_Image.png');
}