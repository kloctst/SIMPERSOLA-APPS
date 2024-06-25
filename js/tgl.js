document.addEventListener('DOMContentLoaded', function() {
    // Update calendar button with today's date
    const btnCalendar = document.getElementById('btn-calendar');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    btnCalendar.querySelector('.text-wrapper-9').textContent = today.toLocaleDateString('en-US', options);

    // Import button click handler
    const btnImport = document.getElementById('btn-import');
    btnImport.addEventListener('click', function() {
      // Simulate import action (replace with actual fetch or AJAX call)
      fetch('/import-url', {
        method: 'POST', // or 'GET' depending on your server
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
      .then(response => response.json())
      .then(data => {
        // Handle response from server
        console.log('Import successful:', data);
        alert('Import successful'); // Example alert
      })
      .catch(error => {
        console.error('Error importing data:', error);
        alert('Error importing data'); // Example alert
      });
    });

    // Export button click handler
    const btnExport = document.getElementById('btn-export');
    btnExport.addEventListener('click', function() {
      // Simulate export action (replace with actual fetch or AJAX call)
      fetch('/export-url', {
        method: 'GET', // or 'POST' depending on your server
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        // Handle response from server
        console.log('Export successful:', data);
        alert('Export successful'); // Example alert
      })
      .catch(error => {
        console.error('Error exporting data:', error);
        alert('Error exporting data'); // Example alert
      });
    });
  });