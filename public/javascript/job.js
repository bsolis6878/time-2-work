async function newJobHandler(event) {
    event.preventDefault();
  

    const company_id = document.querySelector('#company-choice').value;
    const job = document.querySelector('#job-input').value;
    const hourly_rate = document.querySelector('#hourly-rate').value;
  
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
      response.json("Role Added!");
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.job-form').addEventListener('submit', newJobHandler);