function soma(){
    const valorPeso = document.getElementById("valorPeso");
    const valorAltura = document.getElementById("valorAltura");

    const numeromassa = Number(valorPeso.value)
    const numeroaltura = Number(valorAltura.value)

    const resultado = numeromassa / (numeroaltura * numeromassa);

    let tabela
    
    if (resultado < 16.9) {
        resultadoverbalimc = "Muito abaixo do peso";
      } else if (resultado >= 17 && resultado <= 18.4) {
        resultadoverbalimc = "abaixo do peso";
      } else if (resultado >= 18.5 && resultado <= 24.9) {
        resultadoverbalimc = "peso normal";
      } else if (resultado >= 25 && resultado <= 29.9) {
        resultadoverbalimc = "acima do peso";
      } else if (resultado >= 30 && resultado <= 34.9) {
        resultadoverbalimc = "Obesidade grau I";
      } else if (resultado >= 35 && resultado <= 40) {
        resultadoverbalimc = "Obesidade grau II";
      } else if (resultado > 40) {
        resultadoverbalimc = "Obesidade grau III";
      }
}