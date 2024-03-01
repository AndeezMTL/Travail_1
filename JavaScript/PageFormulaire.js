////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo(){
  // Todo
  const user = document.getElementsById("userI").value;
  const pwd = document.getElementsById("pwdI").value;

  localStorage.setItem("user", user);

  localStorage.setItem("pwd", pwd);
}
function connexion(){
    // document.location='PageTache.html';
}


// ////////////////// Obtenez le modal d'inscription ///////////////////////
 var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   }
}


// ///////////////// Obtenez le modal de connexion //////////////////////////
 var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
 window.onclick = function(event) {
     if (event.target == modal2) {
        modal.style.display = "none";
     }
 }