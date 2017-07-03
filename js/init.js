jQuery(document).ready(function($) {
  var API_KEY = "80c947c26c42f1f7";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");
  var chartOptions = {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Temp F'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Time (hr)'
        }
      }]
    }
  }

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx, {type:'line', data:data, options: chartOptions});
  });
});
