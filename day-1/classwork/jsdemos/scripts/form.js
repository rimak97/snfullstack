function registerUser(){
    var data=localStorage.setItem('udata',document.data.uname.value)
   }
   
   
   function showUser(){
   document.getElementById('show').innerHTML=localStorage.getItem('udata')
   }