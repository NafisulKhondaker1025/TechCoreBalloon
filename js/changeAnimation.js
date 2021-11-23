AFRAME.registerComponent('next-button', {
    init() {
      console.log("made it half way")
      const model = document.getElementById('tvModel')
      const nextButton = document.getElementById('nextbutton')
      //nextButton.style.display = 'block'
      let idx = 2  // Start with the 2nd animation because the model starts with idle animation
      const nextAnimation = () => {
        if (idx % 2 == 0) {
            model.setAttribute('animation-mixer', {
                clip: '*',
                loop: 'repeat',
                crossFadeDuration: 0.4,
            })
        }
        else {
            model.setAttribute('animation-mixer', {
                clip: 'Test2',
                loop: 'repeat',
                crossFadeDuration: 0.4,
            })
        }
        idx = (idx + 1)
      }
      nextButton.onclick = nextAnimation  // Switch to the next animation when the button is pressed.
    },
  })
  