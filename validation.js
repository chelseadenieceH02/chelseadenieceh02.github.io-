// ==========================================================================
// validation.js — custom JavaScript validation for the Custom Order form
// Runs in addition to native HTML5 validation attributes (required, type,
// pattern) already set on the form fields in order.html.
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('order-form');
  if (!form) return; // this script only runs on the order page

  var successBox = document.getElementById('form-success');

  // Regular expressions used for custom pattern checks
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // Accepts formats like 868-555-1234, (868) 555 1234, 8685551234
  var phonePattern = /^[\d\s()+-]{7,15}$/;

  // Fields that need validating, with a custom message for each failure type
  var fields = [
    {
      id: 'full-name',
      validate: function (value) {
        if (value.trim() === '') return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      }
    },
    {
      id: 'email',
      validate: function (value) {
        if (value.trim() === '') return 'Please enter your email address.';
        if (!emailPattern.test(value.trim())) return 'Please enter a valid email address, e.g. name@example.com.';
        return '';
      }
    },
    {
      id: 'phone',
      validate: function (value) {
        if (value.trim() === '') return 'Please enter a contact phone number.';
        if (!phonePattern.test(value.trim())) return 'Please enter a valid phone number (7-15 digits).';
        return '';
      }
    },
    {
      id: 'cake-date',
      validate: function (value) {
        if (value === '') return 'Please select a pickup date.';
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var chosen = new Date(value);
        var minDate = new Date(today);
        minDate.setDate(today.getDate() + 3); // require 3 days' notice
        if (chosen < minDate) return 'Custom cakes need at least 3 days notice. Please choose a later date.';
        return '';
      }
    },
    {
      id: 'cake-size',
      validate: function (value) {
        if (value === '') return 'Please choose a cake size.';
        return '';
      }
    },
    {
      id: 'details',
      validate: function (value) {
        if (value.trim() === '') return 'Please tell us a little about the design you want.';
        if (value.trim().length < 10) return 'Please add a few more details (at least 10 characters).';
        return '';
      }
    }
  ];

  function showError(field, message) {
    var group = document.getElementById(field.id).closest('.form-group');
    var errorEl = document.getElementById(field.id + '-error');
    group.classList.add('has-error');
    errorEl.textContent = message;
  }

  function clearError(field) {
    var group = document.getElementById(field.id).closest('.form-group');
    var errorEl = document.getElementById(field.id + '-error');
    group.classList.remove('has-error');
    errorEl.textContent = '';
  }

  function validateField(field) {
    var input = document.getElementById(field.id);
    var message = field.validate(input.value);
    if (message) {
      showError(field, message);
      return false;
    }
    clearError(field);
    return true;
  }

  // Validate a field the moment the user leaves it (better UX than only on submit)
  fields.forEach(function (field) {
    var input = document.getElementById(field.id);
    input.addEventListener('blur', function () {
      validateField(field);
    });
  });

  // Checkbox: at least one occasion must be selected (custom control group)
  function validateOccasion() {
    var checked = form.querySelectorAll('input[name="occasion"]:checked');
    var errorEl = document.getElementById('occasion-error');
    if (checked.length === 0) {
      errorEl.textContent = 'Please select at least one occasion.';
      return false;
    }
    errorEl.textContent = '';
    return true;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop the real submission; this is a front-end demo form

    var allValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (!validateOccasion()) {
      allValid = false;
    }

    if (allValid) {
      form.reset();
      successBox.style.display = 'block';
      successBox.setAttribute('tabindex', '-1');
      successBox.focus();
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      successBox.style.display = 'none';
      // Move keyboard focus to the first invalid field for accessibility
      var firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
      if (firstError) firstError.focus();
    }
  });
});
