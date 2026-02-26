// Tea Shop Customer Churn Analysis - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all charts
    initChurnMetricsChart();
    initClusterChart();
    initDecisionTreeChart();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
    
    // Update year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Chart 1: Churn Metrics Importance
function initChurnMetricsChart() {
    const ctx = document.getElementById('churnMetricsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Days Since Last Visit', 'Monthly Visits', 'Satisfaction', 'Avg Spending', 'APP Usage'],
            datasets: [{
                label: 'Relative Importance',
                data: [85, 72, 68, 45, 30],
                backgroundColor: [
                    'rgba(46, 125, 50, 0.8)',
                    'rgba(46, 125, 50, 0.7)',
                    'rgba(46, 125, 50, 0.6)',
                    'rgba(46, 125, 50, 0.5)',
                    'rgba(46, 125, 50, 0.4)'
                ],
                borderColor: [
                    'rgb(46, 125, 50)',
                    'rgb(46, 125, 50)',
                    'rgb(46, 125, 50)',
                    'rgb(46, 125, 50)',
                    'rgb(46, 125, 50)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Feature Importance for Churn Prediction',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Importance Score (%)'
                    }
                }
            }
        }
    });
}

// Chart 2: Customer Clusters Visualization
function initClusterChart() {
    const ctx = document.getElementById('clusterChart');
    if (!ctx) return;
    
    // Simulated cluster data
    const clusterData = {
        labels: ['Cluster 0', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5'],
        datasets: [
            {
                label: 'Days Since Last Visit',
                data: [120, 12, 42.8, 80, 30, 45],
                backgroundColor: 'rgba(211, 47, 47, 0.6)',
                borderColor: 'rgb(211, 47, 47)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'Satisfaction (1-5)',
                data: [1.78, 4.5, 3.65, 2.5, 3.2, 3.8],
                backgroundColor: 'rgba(33, 150, 243, 0.6)',
                borderColor: 'rgb(33, 150, 243)',
                borderWidth: 1,
                yAxisID: 'y1'
            }
        ]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: clusterData,
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Cluster Characteristics',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.datasetIndex === 0) {
                                label += context.parsed.y + ' days';
                            } else {
                                label += context.parsed.y + ' / 5';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Customer Clusters'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Days Since Last Visit'
                    },
                    max: 130
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Satisfaction Score'
                    },
                    min: 0,
                    max: 5,
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}

// Chart 3: Decision Tree Visualization
function initDecisionTreeChart() {
    const ctx = document.getElementById('decisionTreeChart');
    if (!ctx) return;
    
    // Simplified decision tree representation
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correctly Identified Churn', 'Missed Churn (False Negatives)', 'Correct Non-Churn', 'False Positives'],
            datasets: [{
                data: [14, 29, 120, 18],
                backgroundColor: [
                    'rgba(46, 125, 50, 0.8)',
                    'rgba(211, 47, 47, 0.8)',
                    'rgba(33, 150, 243, 0.8)',
                    'rgba(255, 152, 0, 0.8)'
                ],
                borderColor: [
                    'rgb(46, 125, 50)',
                    'rgb(211, 47, 47)',
                    'rgb(33, 150, 243)',
                    'rgb(255, 152, 0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Decision Tree Model Results',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} customers (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Risk level interactivity
function highlightRiskLevel(level) {
    const riskCards = document.querySelectorAll('.signal-card, .cluster-card');
    
    riskCards.forEach(card => {
        card.classList.remove('highlighted');
        
        if (level === 'all') {
            return;
        }
        
        if (card.classList.contains(level + '-risk')) {
            card.classList.add('highlighted');
        }
    });
}

// Add CSS for highlighted state
const style = document.createElement('style');
style.textContent = `
    .highlighted {
        transform: scale(1.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        transition: transform 0.3s, box-shadow 0.3s;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            padding: 20px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-links li {
            margin: 10px 0;
        }
        
        .nav-links.active {
            display: flex;
        }
    }
`;

document.head.appendChild(style);