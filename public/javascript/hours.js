async function newJobHandler(event) {
    event.preventDefault();
  
    const role = document.querySelector('input[name="hours-input"]').value;
  
    const response = await fetch(`/api/hours`, {
      method: 'POST',
      body: JSON.stringify({
        job
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
  
  document.querySelector('.job-form').addEventListener('submit', newJobHandler);