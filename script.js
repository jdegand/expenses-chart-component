const labels = [
    'mon',
    'tues',
    'wed',
    'thurs',
    'fri',
    'sat',
    'sun'
  ];

  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: 'hsl(10, 79%, 65%)',
      hoverBackgroundColor: 'hsl(186, 34%, 60%)',
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      onHover: function (e, chartElement) {
        if(chartElement.length === 1) {
          e.native.target.style.cursor = 'pointer'
        } else {
          e.native.target.style.cursor = 'default'
        } 
      },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
              displayColors: false,
              xAlign: 'center',
              yAlign: 'bottom',
              caretSize: 0,
              backgroundColor: 'hsl(25, 47%, 15%)',
              bodySpacing: 0,
              bodyFont: {
                weight: 700
              },
              callbacks: {
                title : () => null,
                label: (label) => "$ " + label.formattedValue //console.log(label)
             }, 
          }, 
        }, 
        scales: {
            x: {
              grid: {
                display: false
              }, 
              display: true
            },
            y: {
              grid: {
                display: false,
              },
              display: false
            }
        },
    
    }, 
  };

  const myChart = new Chart(
    document.getElementById('barChart'),
    config
  );