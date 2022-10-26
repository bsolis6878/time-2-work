async function editUserHandler(event) {
  event.preventDefault();

  const company_id = document.querySelector('input[name="username-edit"]').value.trim();
  const employee_id = document.querySelector('input[name="email-edit"]').value.trim();
  const job_id = document.querySelector('input[name="password-edit"]').value.trim();
  const hours_worked = document.querySelector('input[name="name-edit"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/timglog/`, {
    method: 'POST',
    body: JSON.stringify({
    company_id,
    employee_id,
    job_id,
    hours_worked
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

document.querySelector('.edit-form').addEventListener('submit', editUserHandler);