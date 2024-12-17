const input = document.getElementById('anyo');
const form = document.getElementById('form');
input.setCustomValidity("Por favor, ingrese un año válido entre 1900 y 2099.");


form.addEventListener('submit', (e) =>
{
    e.preventDefault();
    alert("El formulario es " + input.validity.valid);
});

input.addEventListener('input', () =>
{
    console.log(input.value);
    const value = input.value;
    const regex = /^(19|20)\d{2}$/; // Solo años entre 1900 y 2099
    if (regex.test(value))
    {
        console.log("Es válido");
        input.setCustomValidity(""); // Resetear el mensaje de validación
    }
    else
    {
        console.log("No es válido");
        input.setCustomValidity("Por favor, ingrese un año válido entre 1900 y 2099.");
    }
});