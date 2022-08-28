emailjs.init("user_ojMBkkLlijlxRCm8UuXjr");

let forms = document.querySelectorAll(".php-email-form");

forms.forEach(function (e) {
  e.addEventListener("submit", function (event) {
    event.preventDefault();

    let thisForm = this;

    const serviceID = "service_7r3jb79";
    const templateID = "template_lbrk0xj";

    thisForm.querySelector(".loading").classList.remove("d-block");
    emailjs.sendForm(serviceID, templateID, thisForm).then(
      function () {
        console.log("SUCCESS!");
        thisForm.querySelector(".sent-message").classList.add("d-block");
        thisForm.reset();
      },
      function (error) {
        displayError(thisForm, error);
      }
    );
  });
});

function displayError(thisForm, error) {
  thisForm.querySelector(".loading").classList.remove("d-block");
  thisForm.querySelector(".error-message").innerHTML = error;
  thisForm.querySelector(".error-message").classList.add("d-block");
}
