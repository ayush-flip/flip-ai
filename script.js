const o = document.querySelector("#b");
const b = document.querySelector("#but");



    function speakText() {
      const m = new SpeechSynthesisUtterance("hello computer is here!");
      speechSynthesis.speak(m);
    }

    function speakTet() {
      const ms = new SpeechSynthesisUtterance("backing start, please  wait one second!");
      speechSynthesis.speak(ms);
    }


    function speakTex() {
      const msg = new SpeechSynthesisUtterance("next");
      speechSynthesis.speak(msg);
    }


