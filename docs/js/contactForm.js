// CONTACT FORM
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    const form = document.getElementById("contact-form");
    const button = document.getElementById("submit");
    const status = document.getElementById("status");
    const statusMessage = document.getElementById("status-message");
    const close = document.getElementById("close").addEventListener("click", closeMessage);

    function closeMessage() {
      status.classList.add("collapse");
    }

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      button.style = "display: none ";
      statusMessage.innerHTML = "Your message was sent succesfully. Thanks!";
      status.classList.remove("collapse");
    }

    function error() {
      statusMessage.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
