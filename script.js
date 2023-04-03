let inputToken = prompt("Insira seu token")
let token = inputToken;

function atualizarMusica() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/me/player/currently-playing', true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let songName = response.item.name;
            let artistName = response.item.artists[0].name;
            let imageUrl = response.item.album.images[0].url;
            let songUrl = response.item.external_urls.spotify;


            // Atualiza a imagem da música
            let musicaImagem = document.getElementById("musicaImagem")
            let musicaNome = document.getElementById("nomeMusica")
            let musicaUrl = document.getElementById("urlMusica")
            musicaImagem.setAttribute("src", imageUrl)
            musicaNome.innerText = songName + ' - ' + artistName
            urlMusica.setAttribute("href", songUrl)
        }
    };
    xhr.send();
}

setInterval(atualizarMusica, 500);