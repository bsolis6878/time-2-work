async function signupFormHandler(event) {
    event.preventDefault();
  
    const companyID = document.querySelector('#company-input').value.trim();
    const roleID = document.querySelector('#roleID-input').value.trim();
    const managerID = document.querySelector('#manager-input').value.trim();
    const userID = document.querySelector('#userID-input').value.trim();
    const employeeID = document.querySelector('#employee-input').value.trim();
  
    if ( companyID && roleID && managerID && userID && employeeID) {
      const response = await fetch('/api/employees', {
        method: 'post',
        body: JSON.stringify({
            companyID,
            roleID,
            managerID,
            userID,
            employeeID
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