function makesound(key, sounds){
    var audio = new Audio(sounds[key]);
    audio.play();
}

function button_animation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.toggle('pressed');
    setTimeout(function(){activeButton.classList.toggle('pressed');},100);
}

var drumButtons = document.querySelectorAll('.drum');
var sounds = {
    'w' : 'sounds/tom-1.mp3',
    'a' :'sounds/tom-2.mp3',
    's' : 'sounds/tom-3.mp3',
    'd' : 'sounds/tom-4.mp3',
    'j' : 'sounds/snare.mp3',
    'k' : 'sounds/crash.mp3',
    'l' : 'sounds/kick-bass.mp3'
};

var numberOfButtons= drumButtons.length;
for(var i = 0; i < numberOfButtons; i++){
    drumButtons[i].addEventListener('click', function(){
        makesound(this.classList[0],sounds);
        button_animation(this.classList[0]);
    })
}

document.addEventListener('keypress', function(event){
    makesound(event.key,sounds);
    button_animation(event.key);
});