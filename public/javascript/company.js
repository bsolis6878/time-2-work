async function newCompanyHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#companyName-select').value.trim();
    const addr1 = document.querySelector('#addressCompany-input').value.trim();
    const phone_number = document.querySelector('#companyNumber-input').value.trim();
    const tax_id = document.querySelector('#companyTax-input').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/companies/`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        addr1,
        phone_number,
        tax_id

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/entrepreneur');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.company-form').addEventListener('submit', newCompanyHandler);