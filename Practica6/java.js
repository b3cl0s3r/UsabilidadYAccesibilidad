document.querySelector('#boton').addEventListener('click', function () {
    ObtenerDatosAPI();
});

function ObtenerDatosAPI() {
    let url = `https://jsonplaceholder.typicode.com/comments?postId=1`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            for (let item of datos) {
                resultado.innerHTML += `<p>postId: ${item.postId} | id: ${item.id} | name: ${item.name} | email: ${item.email} | body: ${item.body}</p>`;

            }
        }
    }
}