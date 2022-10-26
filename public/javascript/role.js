async function newRoleHandler(event) {
    event.preventDefault();
  
    const company_id = document.querySelector('#company-choice').value.trim();
    const role_name = document.querySelector('#role-name').value.trim();
    const response = await fetch(`/api/roles`, {
      method: 'POST',
      body: JSON.stringify({
       company_id,
       role_name
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.role-form').addEventListener('submit', newRoleHandler);