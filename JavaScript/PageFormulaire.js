////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo (){

  // Todo
  const user = document.getElementsByName("email");
  const pwd = document.getElementsByName("psw");

  localStorage.setItem(user.concat(i), email);
i++;
localStorage.setItem(pwd.concat(i), psw);
i++;

  document.location='PageTache.html';
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
// var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }