import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn
  } from "./elements.js"

export default function({controls, timer, sound}) {
    
    buttonPlay.onclick = () => {
        controls.play()
        timer.countDown()
        sound.pressButton()
    }
    
    buttonPause.onclick = () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    }
    
    buttonStop.onclick = () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    }
    
    buttonSoundOn.onclick = () => {
        buttonSoundOn.classList.toggle('hide')
        buttonSoundOff.classList.toggle('hide')
        sound.bgAudio.pause()
    }
    
    buttonSoundOff.onclick = () => {
        buttonSoundOn.classList.toggle('hide')
        buttonSoundOff.classList.toggle('hide')
        sound.bgAudio.play()
    }
    
    buttonSet.onclick = () => {
        let newMinutes = controls.getMinutes()
       
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    }
}