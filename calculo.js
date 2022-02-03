const calculate = document.getElementById("calcular");
function calcular() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value/100;
  var res = document.getElementById("res");
  var description = document.getElementById("description");
  var resumo = document.getElementById("abstract")

  if (altura !== "" && peso !== "") {
    const imc = (peso / (altura * altura)).toFixed(1);

    let tabelaComparacao = "";
    let resumo = "";

    if (imc < 18.5) {
      resumo = "Seu peso está: Abaixo do Normal";
      tabelaComparacao = "Procure um profissional da área";
    } else if (imc < 24.9) {
      resumo = "Seu peso está: Normal";
      tabelaComparacao = "Em forma!";
    } else if (imc < 30) {
      resumo = "Seu peso está: Acima do Normal";
      tabelaComparacao = "Melhor fazer um regime!";
    } else {
      resumo = "Seu peso está: Muito Acima!";
      tabelaComparacao =
        "Procure um profissional da área";
    }

    res.textContent = `Seu IMC é: ${imc}`;
    description.textContent = `${tabelaComparacao}`;
    abstract.textContent = `${resumo}`;
  } else {
    res.textContent = "Preencha todos os campos";
  }
}
calculate.addEventListener("click", calcular);
