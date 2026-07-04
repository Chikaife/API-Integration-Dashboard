
// Trend Chart
const trendCtx = document.getElementById('trendChart').getContext('2d');
new Chart(trendCtx, {
type: 'line',
data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Requests',
        data: [3200, 3500, 3100, 4200, 3800, 4500, 3900],
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        fill: true
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: true } }
}
});

// Source Distribution Chart
const sourceCtx = document.getElementById('sourceChart').getContext('2d');
new Chart(sourceCtx, {
type: 'doughnut',
data: {
    labels: ['API Source 1', 'API Source 2', 'API Source 3', 'Other'],
    datasets: [{
        data: [35, 28, 22, 15],
        backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { position: 'bottom' } }
}
});

// Endpoint Performance Chart
const endpointCtx = document.getElementById('endpointChart').getContext('2d');
new Chart(endpointCtx, {
type: 'bar',
data: {
    labels: ['/users', '/products', '/orders', '/analytics', '/reports', '/settings'],
    datasets: [{
        label: 'Response Time (ms)',
        data: [120, 150, 200, 180, 250, 95],
        backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a']
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: { y: { beginAtZero: true } }
}
});

function applyFilters() {
const timeframe = document.getElementById('timeframe').value;
const source = document.getElementById('source').value;
alert(`Filters applied: ${timeframe}, ${source}`);
}

function resetFilters() {
document.getElementById('timeframe').value = '7days';
document.getElementById('source').value = 'all';
document.getElementById('datefilter').value = '';
}
