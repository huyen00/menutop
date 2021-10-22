

    var ctxB = document.getElementById("barChart").getContext('2d');
    var myBarChart = new Chart(ctxB, {
        type:'bar',
        data:{
            labels: ["yellow","red","green","black","blue"],
            datasets: [{
                label:' Biểu đồ cột ',
                data: [20,30,4,1,10],
                backgroundColor: [
                    'rgba(255, 100, 86, 0.2)',
                    'rgba(255, 206, 25, 0.5)',
                    'rgba(25, 206, 86, 0.2)',
                    'rgba(250, 26, 56, 0.2)',
                    'rgba(25, 20, 86, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                         beginAtZero: true
                    }
                }]
            }
        }
    })

// var ctxB = document.getElementById("barChart");
// var c=ctxB.getContext('2d');
// var myBarChart = new Chart(ctxB, {
// type: 'bar',
// data: {
// labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
// datasets: [{
// label: '# of Votes',
// data: [12, 19, 3, 5, 2, 3],
// backgroundColor: [
// 'rgba(255, 99, 132, 0.2)',
// 'rgba(54, 162, 235, 0.2)',
// 'rgba(255, 206, 86, 0.2)',
// 'rgba(75, 192, 192, 0.2)',
// 'rgba(153, 102, 255, 0.2)',
// 'rgba(255, 159, 64, 0.2)'
// ],
// borderColor: [
// 'rgba(255,99,132,1)',
// 'rgba(54, 162, 235, 1)',
// 'rgba(255, 206, 86, 1)',
// 'rgba(75, 192, 192, 1)',
// 'rgba(153, 102, 255, 1)',
// 'rgba(255, 159, 64, 1)'
// ],
// borderWidth: 1
// }]
// },
// options: {
// scales: {
// yAxes: [{
// ticks: {
// beginAtZero: true
// }
// }]
// }
// }
// });


var ctxP = document.getElementById("labelChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [{
      data: [210, 130, 120, 160, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        padding: 20,
        boxWidth: 10
      }
    },
    // plugins: {
    //   datalabels: {
    //     formatter: (value, ctx) => {
    //       let sum = 0;
    //       let dataArr = ctx.chart.data.datasets[0].data;
    //       dataArr.map(data => {
    //         sum += data;
    //       });
    //       let percentage = (value * 100 / sum).toFixed(2) + "%";
    //       return percentage;
    //     },
    //     color: 'white',
    //     labels: {
    //       title: {
    //         font: {
    //           size: '86'
    //         }
    //       }
    //     }
    //   }
    // }
  }
});