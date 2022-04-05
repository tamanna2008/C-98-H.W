var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition();

function Start(){
    document.getElementById("idk").innerHTML=" "
    Recognition.start()

}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    console.log(content);
    document.getElementById("idk").innerHTML=content;
}

function speak(){
    var hey = window.SpeechSynthesis;
    var speak_i = document.getElementById("idk").value
    var hi = new SpeechSynthesisUtterance(speak_i);
    hey.speak(hi);
    Webcam.attach(camera);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
