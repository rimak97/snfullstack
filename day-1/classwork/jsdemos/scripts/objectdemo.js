

function showDetails(){
    let userData={
        
        email:document.data.email.value,
        uname:document.data.uname.value,
        city:document.data.city.value

    }

    document.getElementById("show").innerHTML=userData.uname+" "+userData.email+" "+userData.city
}