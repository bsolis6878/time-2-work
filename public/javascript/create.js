  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();
    const addr1 = document.querySelector('#address-signup').value.trim();
    const phone_number = document.querySelector('#phone-signup').value.trim();
    const tax_id = document.querySelector('#tax-signup').value.trim();
  
    if (username && email && password && name && addr1 && phone_number && tax_id) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password,
          name,
          addr1,
          phone_number,
          tax_id
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);