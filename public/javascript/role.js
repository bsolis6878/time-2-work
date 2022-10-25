async function newRoleHandler(event) {
    event.preventDefault();
  
    const companyID = document.querySelector('#company-ID').value.trim();
    const roleName = document.querySelector('#role-name').value.trim();
    const response = await fetch(`/api/roles`, {
      method: 'POST',
      body: JSON.stringify({
       companyID,
       roleName
        
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