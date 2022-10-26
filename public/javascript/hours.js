async function hoursHandler(event) {
  event.preventDefault();

  const company_id = document.querySelector('#company_id').value.trim();
  const employee_id = document.querySelector('#employee_id').value.trim();
  const job_id = document.querySelector('#job-id').value.trim();
  const minutes_worked = document.querySelector('#minutes-worked').value.trim();
 
  const response = await fetch(`/api/timelog`, {
    method: 'POST',
    body: JSON.stringify({
    company_id,
    employee_id,
    job_id,
    minutes_worked
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

document.querySelector('.jobs-form').addEventListener('submit', hoursHandler);