async function newRoleHandler(event) {
    event.preventDefault();
  
    const role = document.querySelector('input[name="roles-input"]').value;
    const company = document.querySelector('input[name="companyID-input"]').value;
  
    const response = await fetch(`/api/roles`, {
      method: 'POST',
      body: JSON.stringify({
       company,
       role
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/addrole');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.role-form').addEventListener('submit', newRoleHandler);