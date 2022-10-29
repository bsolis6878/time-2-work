async function newJobHandler(event) {
    event.preventDefault();
  

    const company_id = document.querySelector('#company-choice').value.trim();
    const job = document.querySelector('#job-input').value.trim();
    const hourly_rate = document.querySelector('#hourly-rate').value.trim();
    const response = await fetch(`/api/jobs`, {
      method: 'POST',
      body: JSON.stringify({
        company_id,
        job,
        hourly_rate
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
  
  document.querySelector('.job-form').addEventListener('submit', newJobHandler);