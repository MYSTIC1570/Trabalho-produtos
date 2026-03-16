const form = document.getElementById('captacaoForm');
const feedback = document.getElementById('feedback');

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const interessesSelecionados = Array.from(document.getElementById('interesses').selectedOptions)
      .map((option) => option.text);

    if (interessesSelecionados.length === 0) {
      feedback.textContent = 'Selecione pelo menos um interesse.';
      return;
    }

    feedback.textContent = `Obrigado, ${nome}! Cadastro enviado com sucesso. Interesses: ${interessesSelecionados.join(', ')}.`;
    form.reset();
  });
}
