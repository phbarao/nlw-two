document.querySelector('#add-time').addEventListener('click', cloneField);

function cloneField() {
  // Qual campo duplicar?
  const newFieldContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true);
  // Pegar os campos:
  const fields = newFieldContainer.querySelectorAll('input');

  // Para cada campo, limpar
  fields.forEach(function (field) {
    field.value = '';
  });
  // Colocar na página: Onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
