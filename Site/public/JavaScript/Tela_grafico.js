var valores1 = [];
var valores2 = [];
var valores3 = [];
var valores4 = [];
		 configuracao1 = {
  type: 'pie',
  data: {
    labels: ["Pagos", "Pendentes","desconhecido"],
    datasets: [{
      data: [valores1[0], valores1[1],valores1[2]],
      backgroundColor: [
        'rgba(0, 0, 255)',
        'rgba(255, 0, 0)',
		'rgba(0, 255, 0)'
      ]
    }]
  },
};

var configuracao2 = {
  type: 'line',
  data: {
    labels: ['14:05:21', '14:05:21', '14:05:30', '14:05:42', '14:05:52', '14:06:01', '14:06:12'],
    datasets: [{
                
      label: 'Temperatura em Cº',
      backgroundColor: 'rgba(0, 0, 255)',
      borderColor: 'rgba(0, 0, 255)',
                
      data: [
        valores2[0],
        valores2[1],
        valores2[2],
        valores2[3],
        valores2[4],
        valores2[5],
        valores2[6]
      ],
      fill: false,
  },
{
  label: 'Temperatura em Fº',
  backgroundColor: 'rgba(255, 0,0 )',
  borderColor: 'rgba(255, 0, 0)',
            
  data: [
    valores2[4],
    valores2[3],
    valores2[2],
    valores2[1],
    valores2[0],
    valores2[6],
    valores2[5]
  ],
  fill: false,
}]
        },
        
        
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Temperatura'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Momento'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Valor'
        }
      }]
    }
  }
};

var configuracao3 ={
  type: 'bar',
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [{
                  label: 'Ganhos',
                data: [
                  valores3[0],valores3[1],
                  valores3[2],valores3[3],
                  valores3[4],valores3[5],
                  valores3[6],valores3[7],
                  valores3[8],valores3[9],
                  valores3[10],valores3[11],
                ],
                backgroundColor: 'rgb(0, 128, 160)',
                borderColor: 'rgb(0, 128, 160)',
                }]
              },
              options: {
                responsive: true,
                title: {
                  display: true,
                  text: 'Temperatura',
                  color: 'rbg(200,100,50)'
                }
              }
};

var configuracao4 ={
  type: 'radar',
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [{
                  label: 'Ganhos',
                data: [
                  valores4[0],valores4[1],
                  valores4[2],valores4[3],
                  valores4[4],valores4[5],
                  valores4[6],valores4[7],
                  valores4[8],valores4[9],
                  valores4[10],valores4[11]
                ],
                backgroundColor: 'rgb(0, 0, 0)',
                borderColor: 'rgb(0, 100, 0)',
                }]
              }
};


window.onload = function() {
            var graf1 = document.getElementById('myChart').getContext('2d');
            window.myDoughnut = new Chart(graf1, configuracao1);
			      var graf2 = document.getElementById('canva').getContext('2d');
            window.myLine = new Chart(graf2, configuracao2);   
            var graf3 = document.getElementById('barra').getContext('2d');
            window.myBar = new Chart(graf3, configuracao3);
            var graf4 = document.getElementById('radar').getContext('2d');
            window.myRadar = new Chart(graf4, configuracao4);
            atualizarGrafico();
		};

		function atualizarGrafico() {
      configuracao4.data.datasets.forEach(function(dataset){
				dataset.data = dataset.data.map(function(){
					return parseInt(Math.random()*100)
				});
			});
      configuracao3.data.datasets.forEach(function(dataset){
				dataset.data = dataset.data.map(function(){
					return parseInt(Math.random()*500)
				});
			});
			configuracao2.data.datasets.forEach(function(dataset){
				dataset.data = dataset.data.map(function(){
					return parseInt(Math.random()*2000)-1000
				});
			});
			configuracao1.data.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return parseInt(Math.random()*100);
				});
			});
			
            window.myBar.update();
            window.myLine.update();
            window.myDoughnut.update();
            window.myRadar.update();
			
            setTimeout(() => {
               atualizarGrafico(); 
            }, 2500);
        };
      