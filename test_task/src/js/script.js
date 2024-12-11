document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();

    
    var isValid = validateEmail(emailValue);

    if (!isValid) {
      document.getElementById('errorMessage').textContent = 'Please enter a valid email address';
      return;
    }

    document.getElementById('errorMessage').textContent = '';

    console.log('Email:', emailValue);
  });

  
  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add('background');
      
    } else {
      header.classList.remove('background');
      
    }
  });
  