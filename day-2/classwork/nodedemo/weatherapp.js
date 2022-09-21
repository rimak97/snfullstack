var request= require('request')
var APIurl= 'http://api.openweathermap.org/data/2.5/weather?q=pune&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric'


request({
    url :APIurl,
    json:true
},function(error,response,body) {
    if(error){
        console.log('unable to get weather');
        
    }else{
        console.log('its ' +body.main.temp + " " + body.name);
        
    }
})
