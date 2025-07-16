const apiUrl = 'https://script.google.com/macros/s/AKfycbxQD72Wv8RaWIWcsulw8kmtiGC2Jt_CQJ0slAKnWOp4H_N_BZ6vtt2bjWGQwrDI3eMA/exec'; // Replace with your Web App URL

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#vocabTable tbody');
    data.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td>${row.Number || ''}</td>
        <td>${row.Word || ''}</td>
        <td>${row.Meaning || ''}</td>
        <td>${row.Type || ''}</td>
        <td>${row.Example || ''}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(error => {
    console.error('Error fetching vocab data:', error);
  });
