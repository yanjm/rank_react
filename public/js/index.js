var myData = {
  labels : ["Mo","Di","Mi","Do","Fr","Sa","So"],
  datasets : [
    {
      fillColor : "rgba(90,190,90,.5)",
      strokeColor : "rgba(90,190,90,1)",
      pointColor : "rgba(90,190,90,1)",
      pointStrokeColor : "#fff",
      data : [40,48,40,40,90,27,90,30,90,67,56,4,2,55,77,88,23,54,67]
    }
  ]
}

new Chart(document.getElementById("canvas").getContext("2d")).Line(myData)