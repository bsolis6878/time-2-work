async function signupFormHandler(event) {
    event.preventDefault();
  
    const company_id = document.querySelector('#company-input').value.trim();
    const role_id = document.querySelector('#roleID-input').value.trim();
    const manager_id = document.querySelector('#manager-input').value.trim();
    const user_id = document.querySelector('#userID-input').value.trim();
  
    if ( company_id && role_id && manager_id && user_id) {
      const response = await fetch('/api/employees', {
        method: 'POST',
        body: JSON.stringify({
            company_id,
            user_id,
            role_id,
            manager_id
            
            
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

  document.querySelector('.employee-form').addEventListener('submit', signupFormHandler);