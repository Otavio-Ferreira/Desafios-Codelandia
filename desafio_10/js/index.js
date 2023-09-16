var elements = document.getElementsByClassName("p-padrao")

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    window.location = "paginas/noticias.html"
  });
}