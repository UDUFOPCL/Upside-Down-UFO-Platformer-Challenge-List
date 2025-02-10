document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/List Data.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch CSV file');
            }
            return response.text();
        })
        .then(text => {
            const data = parseCSV(text);
            displayData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function parseCSV(text) {
    const rows = text.split('\n').map(row => row.split(','));
    return rows;
}

function displayData(data) {
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');

    // Clear previous data
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    // Create table headers
    const headers = data[0];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.trim();
        tableHead.appendChild(th);
    });

    // Create table rows
    data.slice(1).forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell.trim();
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}
