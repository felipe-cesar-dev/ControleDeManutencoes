export default function verificarLengthLogin(email, password) {
    if(email.trim() === "" || password.trim() === ""){
        alert("Por favor, preencha todos os campos!");
        return;
      }
}