
function validateForm() {
    var form = document.getElementById('myForm');
    var elements = form.elements;
    var isValid = true;
  
    for (var i = 0; i < elements.length; i++) {
      if (!elements[i].checkValidity()) {
        isValid = false;
        elements[i].classList.add('is-invalid');
  
        var parentFormGroup = elements[i].closest('.form-group');
        var invalidFeedback = parentFormGroup ? parentFormGroup.querySelector('.invalid-feedback') : null;
        if (invalidFeedback) {
          invalidFeedback.style.display = 'block';
        }
      } else {
        elements[i].classList.remove('is-invalid');
  
        var parentFormGroup = elements[i].closest('.form-group');
        var invalidFeedback = parentFormGroup ? parentFormGroup.querySelector('.invalid-feedback') : null;
        if (invalidFeedback) {
          invalidFeedback.style.display = 'none';
        }
      }
    }
  
    if (isValid) {
      alert('¡Formulario enviado exitosamente!\nGracias por tu mensaje.');
      
    }
  }
  