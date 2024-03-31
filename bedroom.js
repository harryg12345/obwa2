status = ""
image
function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectdetection = ml5.objectDetector("cocossd", modelLoaded)

}
function modelLoaded() {
    console.log("MODEL HAS LOADED")
    document.getElementById("status").innerHTML = "status: starting object detection"
    status = true
    objectdetection.detect(img, gotresults)
}
function gotresults(error, result){
    if (error) {
        console.error(error)
    }
    else {
        console.log(result);
        objects = r
    }
}
function preload() {
    image = loadImage("image1.jpg")
}
