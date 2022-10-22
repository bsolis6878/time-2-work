/*async function newFormHandler(event) {
    event.preventDefault();
  
    const role = document.querySelector('input[name="roles-role"]').value;
  
    const response = await fetch(`/api/roles`, {
      method: 'POST',
      body: JSON.stringify({
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
  
  document.querySelector('.role-form').addEventListener('submit', newFormHandler);*/