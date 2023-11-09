function toggleForm(formId) {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
  
    if (formId === 'signup-form') {
      loginContainer.style.display = 'none';
      signupContainer.style.display = 'block';
    } else {
      loginContainer.style.display = 'block';
      signupContainer.style.display = 'none';
    }
  }
  