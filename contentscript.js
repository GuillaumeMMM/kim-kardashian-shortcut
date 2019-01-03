chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'ongoogle') {
        const inputs = document.querySelectorAll('input');
        let input = inputs[0];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.length > 0) {
                input = inputs[i];
            }
        }
        input.value = 'Kim Kardashian' + ' ';
      }
  });