function getFahrenheits(result){
  return result.hourly_forecast.map(hourData => {
    return hourData.temp.english
  })
}

function getHours(result){
  return result.hourly_forecast.map(hourData => {
    return hourData.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [{
      data: data,
      label: 'New York, NY'
    }]
  }
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    method: 'GET',
    success: success,
    error: function (error) {
      console.log('There has been an error retrieving data!');
    }
  })
}
