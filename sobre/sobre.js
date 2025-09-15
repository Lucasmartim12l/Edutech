document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const problemaInput = document.getElementById("problema");
    const charCounter = document.getElementById("charCounter");
  
  
    problemaInput.addEventListener("input", () => {
      const length = problemaInput.value.length;
      charCounter.textContent = `${length}/800`;
    });
  
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let errors = [];
  
      if (nomeInput.value.trim() === "") {
        errors.push("Por favor, preencha o campo Nome.");
      }
  
      if (emailInput.value.trim() === "") {
        errors.push("Por favor, preencha o campo Email.");
      } else {
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
          errors.push("Por favor, insira um email válido.");
        }
      }
  
      if (problemaInput.value.trim() === "") {
        errors.push("Por favor, descreva o problema.");
      }
  
      if (errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        
        alert("Formulário enviado com sucesso!");
        form.reset();
        charCounter.textContent = "0/800";
      }
    });
  });
  