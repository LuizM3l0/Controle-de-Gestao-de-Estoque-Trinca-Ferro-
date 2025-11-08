document.addEventListener("DOMContentLoaded", () => {
    // Campo CNPJ
    const cnpjInput = document.getElementById("cnpj");
    cnpjInput.addEventListener("input", function () {
      let valor = this.value.replace(/\D/g, "");
      valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
      valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
      valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
      this.value = valor;
    });
  
    // Campo Telefone
    const telInput = document.getElementById("telefone");
    telInput.addEventListener("input", function () {
      let valor = this.value.replace(/\D/g, ""); // Remove tudo que não for número
  
      if (valor.length <= 10) {
        // Formato: (00) 0000-0000
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
      } else {
        // Formato: (00) 00000-0000
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
      }
  
      this.value = valor;
    });
  });
  