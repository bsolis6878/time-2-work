async function editUserHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('input[name="username-edit"]').value.trim();
    const email = document.querySelector('input[name="email-edit"]').value.trim();
    const password = document.querySelector('input[name="password-edit"]').value.trim();
    const name = document.querySelector('input[name="name-edit"]').value.trim();
    const address = document.querySelector('input[name="address-edit"]').value.trim();
    const phone = document.querySelector('input[name="number-edit"]').value.trim();
    const tax_id = document.querySelector('input[name="tax-edit"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        username,
        email,
        password,
        name,
        address,
        phone,
        tax_id

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/manage');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-form').addEventListener('submit', editUserHandler);