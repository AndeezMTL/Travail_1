////////////////// Obtenez le modal d'inscription ///////////////////////

/**Création d'une fonction pour enregistrer les informations
 * lors de l'inscriptions qui se mettent dans le local storage
 */

function userInfo() {
  const user = document.getElementById("userI").value;
  const pwd = document.getElementById("pwdI").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pwd", pwd);
}

/**Creation d'une fonction connexion qui va valider l'information
 * avec les donnés enregistrer dans le local storage de la fonction (userinfo)
 * pour une raison inconnu la validation ne marche pas
 */

function connexion() {
  const storedUser = localStorage.getItem("user");
  const storedPwd = localStorage.getItem("pwd");

  const ConnexionUser = document.getElementById("userI").value;
  const ConnexionPwd = document.getElementById("pwdI").value;

  // Vérifiez si les informations d'identification entrées correspondent à celles stockées dans le localStorage
  if (ConnexionUser === storedUser && ConnexionPwd === storedPwd) {
    // Redirigez l'utilisateur vers la page souhaitée
    window.location.href = "./PageTache.html";
  } else {
    alert("Identifiants incorrects. Veuillez réessayer.");
  }
}

// Obtenez le modal d'inscription
var modal = document.getElementById("id01");
// Obtenez le modal de connexion
var modal2 = document.getElementById("id02");

// Lorsque l'utilisateur clique n'importe où en dehors du modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
