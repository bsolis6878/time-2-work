async function deleteFormHandler(event) {
    event.preventDefault();
  
    [
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/manage');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);