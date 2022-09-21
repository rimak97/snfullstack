function addData(){
    var employee={}
    employee.unmae=document.fdata.uname.value
    employee.email=document.fdata.email.value
    employee.pass=document.fdata.pass.value
    employee.city=document.fdata.city.value
    employee.mn=document.fdata.mn.value

    console.log(employee);
    var data=localStorage.setItem('udata',JSON.stringify(employee))
}
   
   
function showData(){
   document.getElementById('show').innerHTML=localStorage.getItem('udata')
}
