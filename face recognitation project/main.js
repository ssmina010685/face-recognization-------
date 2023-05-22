Webcam.set({
    width:350,
    height:300,
    image_formate:'png',
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version',ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ljX-PaJAq/model.json',modelLoaded)
