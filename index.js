

(function () {
  'use strict'

  feather.replace()


  var ctx = document.getElementById('myChart')

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
  })
}())

/**------------------------------*/

var x = document.getElementById('pi');

var myChart = new Chart(x, {
    type: 'doughnut',
    data: {
        datasets: [{

            data: [22, 59, 33],
            backgroundColor: [
                'yellow',
                'green',
                'skyblue'
            ],
            borderColor: [
                'yellow',
                'green',
                'skyblue'
            ],

        }]
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
      rotation: 3.16,
    }
});

/**--------------------------------------*/
var y = document.getElementById('month');

var myChart = new Chart(y, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [22, 59],
            backgroundColor: [
                'skyblue',
                'yellow'
            ],
            borderColor: [
                'skyblue',
                'yellow'
            ],

        }]
    },
    options: {
      responsive: true,
      cutoutPercentage: 90,
      rotation: 3.16,
    }
});
/**---------------------------------------------*/
var z = document.getElementById('year');

var myChart = new Chart(z, {
    type: 'doughnut',
    data: {
        datasets: [{

            data: [22, 59],
            backgroundColor: [
                'yellow',
                'skyblue'
            ],
            borderColor: [
                'yellow',
                'skyblue'
            ],
        }]
    },
    options: {
      responsive: true,
      cutoutPercentage: 90,
      rotation: 3.16,
    }
});
/**-----------------------------------------------------------------------------------------------------------------------------*/

var dt = new Date();
function cal()
{
  var hi = dt.getDate();
  dt.setDate(hi);
  var day = dt.getDay();
  var endDate = new Date(dt.getFullYear(),dt.getMonth()+1,0).getDate();
  var prevDate = new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
  var today = new Date().getDate();
  document.getElementById("date_str").innerHTML = dt.toDateString();

  var cells = "";
  for(var j=day;j>0;j--)
  {
    cells+= "<div>"+" "+"</div>";
  }
  for(var i=1;i<=endDate;i++)
  {
    if(i==today)
    {
      cells+= "<div class='today'>"+i+"</div>";
    }
    else {
      cells+= "<div>"+i+"</div>";
    }
  }

  document.getElementsByClassName("days")[0].innerHTML = cells;
}


function moveDate(para)
{
  if(para == 'prev')
  {
    dt.setMonth(dt.getMonth()-1);
    cal();
  }
  else if(para == 'next')
  {
    dt.setMonth(dt.getMonth()+1);
    cal();
  }
}

/**--------------------------------------------------------------------------------------------------*/
/**--------------------------------------------------------------------------------------------------*/
