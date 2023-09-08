function calcularConta() {
    const valorAntesHappyHour = parseFloat(document.getElementById("antesHappyHour").value);

    const quantidadeAntes = parseInt(document.getElementById("quantidadeAntes").value);

    const valorAposHappyHour = parseFloat(document.getElementById("aposHappyHour").value);

    const quantidadeApos = parseInt(document.getElementById("quantidadeApos").value);

    //calculos
    const totalAntes = valorAntesHappyHour * quantidadeAntes;
    const totalApos = valorAposHappyHour * quantidadeApos;
    const subtotal = totalAntes + totalApos;
    const taxaServico = 0.10 * totalApos;
    const valorTotal = subtotal + taxaServico;
    const resultado =
        `<p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
        <p>Taxa de Serviço: R$ ${taxaServico.toFixed(2)}</p>
        <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>`;
    document.getElementById("resultado").innerHTML = resultado;
}
