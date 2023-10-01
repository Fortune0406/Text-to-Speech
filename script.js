//Check if the browser supports the Web Speech API
if ('speechSynthesis' in window) {
    const speakButton = document.getElementById('speakButton');
    const textToSpeak = document.getElementById('textToSpeak');

//Create a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();

//Set default values
    utterance.rate = 1; //Speech rate (0.1 to 10)
    utterance.pitch = 1; //Speech pitch (0 to 2)
    utterance.lang = 'en-US'; //Language

//Handle the speak button click event
    speakButton.addEventListener('click', () => {
        if ("textToSpeech.value !==") {
            utterance.text = textToSpeak.value;
            speechSynthesis.speak(utterance);  
        }
    });
}else{
    console.log("Web Speech API is not supported in this browser.");
}