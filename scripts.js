document.addEventListener('DOMContentLoaded', function () {
    // Data for Pie Chart
    const pieData = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    };

    // Options for Pie Chart
    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Create Pie Chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: pieData,
        options: pieOptions,
    });

    // Data for Bar Chart
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: '#36A2EB',
        }]
    };

    // Options for Bar Chart
    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Create Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: barData,
        options: barOptions,
    });
});
