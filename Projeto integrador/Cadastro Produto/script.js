const codigoBarrasInput = document.getElementById("codigo-barras");
  codigoBarrasInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Remove tudo que não for número
  });
// Nenhuma formatação especial é necessária para o campo de descrição
// Mas você pode adicionar validação personalizada se quiser no futuro
const descricaoInput = document.getElementById("descricao");

descricaoInput.addEventListener("input", function () {
  // Exemplo opcional: limita o texto a 300 caracteres
  if (this.value.length > 300) {
    this.value = this.value.slice(0, 300);
  }
});

const numeroQuantidadeInput = document.getElementById("numero-quantidade");
  numeroQuantidadeInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Remove tudo que não for número
  });
  // Mostra o campo "outra categoria" apenas se a opção "Outro" for selecionada
const categoriaSelect = document.getElementById("categoria");
const outraCategoriaInput = document.getElementById("outra-categoria");

categoriaSelect.addEventListener("change", function () {
  if (this.value === "outro") {
    outraCategoriaInput.style.display = "block";
    outraCategoriaInput.required = true;
  } else {
    outraCategoriaInput.style.display = "none";
    outraCategoriaInput.required = false;
    outraCategoriaInput.value = "";
  }
});
