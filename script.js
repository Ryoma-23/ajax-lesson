const API_KEY = "4ff9bd4b79f106666102a8fd2909fcf1";

$(function(){
  $('#btn').on('click', function(){
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function(data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function(data){
      alert('通信に失敗しました。');
    });
  });
});

$(function(){
  $('#btn2').on('click', function(){
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname2').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function(data){
      $('#place2').text(data.name);
      $('#temp_max2').text(data.main.temp_max);
      $('#temp_min2').text(data.main.temp_min);
      $('#humidity2').text(data.main.humidity);
      $('#speed2').text(data.wind.speed);
      $('#weather2').text(data.weather[0].main);
      $('img2').attr("src","http://openweathermap.org/img2/w/" + data.weather[0].icon + ".png");
      $('img2').attr("alt",data.weather[0].main);
    }).fail(function(data){
      alert('通信に失敗しました。');
    });
  });
});