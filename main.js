function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#ffc6c6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ffc6c6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#ffc6c6");
    text("Lapblade", 45, 75);
    noFill();
    stroke("#ffc6c6");
    rect(30, 60, 450, 350 );
}

function preload(){
img = loadImage('pro latops yoooo.jpeg');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}

__________________________

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#ffc6c6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ffc6c6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#ffc6c6");
    text("weekidk", 45, 75);
    noFill();
    stroke("#ffc6c6");
    rect(30, 60, 450, 350 );
}

function preload(){
img = loadImage('weekidk.png');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}

____________________

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#ffc6c6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ffc6c6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#ffc6c6");
    text("technoblade the mighty", 45, 75);
    noFill();
    stroke("#ffc6c6");
    rect(30, 60, 450, 350 );
}

function preload(){
img = loadImage('techblade.webp');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}

_________________

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#ffc6c6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ffc6c6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#ffc6c6");
    text("spoopy", 45, 75);
    noFill();
    stroke("#ffc6c6");
    rect(30, 60, 450, 350 );
}

function preload(){
img = loadImage('menuBGMagenta.png');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}

___________________

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#ffc6c6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ffc6c6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#ffc6c6");
    text("fruit", 45, 75);
    noFill();
    stroke("#ffc6c6");
    rect(30, 60, 450, 350 );
}

function preload(){
img = loadImage('fruit.jpeg');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}

__________________________

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#ffc6c6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#ffc6c6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#ffc6c6");
    text("brit tv", 45, 75);
    noFill();
    stroke("#ffc6c6");
    rect(30, 60, 450, 350 );
}

function preload(){
img = loadImage('brit tv.png');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}
