Webcam.set({
    width:350 , 
    height: 300 ,
    image_format: "png" ,
    png_quality:90
 });

 camera = document.getElementById("camera");

 Webcam.attach("#camera");

 function take_snapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='captured_image'>";
    });

}   

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/P1ypwW0z5/model.json", modelloaded)

function modelloaded() {
console.log("The model has loaded I repet the model has loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_1 = "My first prediction is " + prediction_1 ;
    var speak_2 = "My sencond prediction is " + prediction_2 ;
    var utterThis = new SpeechSynthesisUtterance( speak_1 + speak_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresults);
}

function gotresults( error , result) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("result-emotion-name").innerHTML = result[0].label ;
        document.getElementById("result-emotion-name2").innerHTML = result[1].label ;
        prediction_1 = result[0].label ;
        prediction_2 = result[1].label ;
        speak();
        if(result[0].label == "Cool") {
            document.getElementById("update-emoji").innerHTML = "&#9996"
        }
        if(result[0].label == "Good Job") {
            document.getElementById("update-emoji").innerHTML = "&#128077"
        }
        if(result[0].label == "Ok") {
            document.getElementById("update-emoji").innerHTML = "&#128076"
        }

        if(result[1].label == "Cool") {
            document.getElementById("update-emoji2").innerHTML = "&#9996"
        }
        if(result[1].label == "Good Job") {
            document.getElementById("update-emoji2").innerHTML = "&#128077"
        }
        if(result[1].label == "Ok") {
            document.getElementById("update-emoji2").innerHTML = "&#128079"
    }
    }
};