var esubmit= document.getElementById('submit');
const 文字栏 = document.querySelector(".文字栏");


esubmit.onclick=function(){
    alert("Message has been successfully sent!")
    文字栏.value="";
}

