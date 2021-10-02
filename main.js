Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90
});

camera =document.getElementById("camera");

Webcam.attach("#camera");

function takeimage(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML ='<img id="imageresult" src="'+data+'">';

    })
}

console.log("ml5 version", ml5.version);

cassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H1ktJGPzS/model.json", modelload);

function modelload(){
    console.log("model has been loaded!");
}