function openmodallog(){
    var modallogin = document.getElementById('modallogin');
    modallogin.style.zIndex= "100";   
}

function closemodallog(){
    var modallogin = document.getElementById('modallogin');
    modallogin.style.zIndex= "-1";

}

function opensignin(){
     document.getElementById('modalname').style.display  = 'flex';
     document.getElementById('modalnum').style.display  = 'flex';
     document.getElementById('signabout').style.display = "none";
     document.getElementById('userimg').style.display = 'none';
     document.getElementById('plusimg').style.display = 'flex';
    document.getElementById('aboutlog').innerHTML = "Ro'yxatdan o'ting";
}