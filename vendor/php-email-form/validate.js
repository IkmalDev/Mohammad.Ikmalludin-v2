/**
 * Simple Form Submission without reCaptcha and AJAX
 */
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      // Comment out or remove the line below to allow default form submission
      // event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');

      if (!action) {
        console.error('The form action property is not set!');
        return;
      }

      // Simulate form submission without AJAX or reCaptcha
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Simulate a delay for demonstration purposes
      setTimeout(function () {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      }, 1000);
    });
  });

})();