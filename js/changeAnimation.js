AFRAME.registerComponent('next-button', {
    init() {
      const model = document.getElementById('tvModel');
      const model1 = document.getElementById('tvModel1');


      const nextButton = document.getElementById('nextbutton');
      nextButton.style.display = 'block';

      const nextAnimation = () => {
        if (model.getAttribute('visible') == true) {
          nextButton.innerHTML = 'Make Santa Come Back';
          model.setAttribute('visible', 'false');
          model1.setAttribute('visible', 'true');
        }
        else {
          nextButton.innerHTML = 'Make Santa Fly';
          model.setAttribute('visible', 'true');
          model1.setAttribute('visible', 'false');
        }
      }
      nextButton.onclick = nextAnimation  // Switch to the next animation when the button is pressed.
    },
  })
  