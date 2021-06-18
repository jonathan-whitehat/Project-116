mustacheX = 0;
mustacheY = 0;

function preload()
{
    mustache_nose = loadImage('https://i.postimg.cc/DwMLWSPX/m.png')
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x - 35;
        mustacheY = results[0].pose.nose.y + 5;
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = " + mustacheY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300)
    image(mustache_nose, mustacheX, mustacheY, 70, 30);
}

function take_snapshot()
{
    save('MustacheImage.png');
}