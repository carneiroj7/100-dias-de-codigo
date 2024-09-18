const textarea = document.querySelector('textarea');
const count = documento.querySelector('.count');

function contarLetras()
{
    const texto = textarea.value;
    const textoLength = texto.value.length;

    count.innerText = '${textoLength}';
    
}