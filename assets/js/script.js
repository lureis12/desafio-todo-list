// Cria o botão de fechar ao lado de cada item
var minhaLista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < minhaLista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  minhaLista[i].appendChild(span);
}

//Ao clique do botão, exclui o item 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Risca o item selecionado
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Cria um novo item a lista ao clicar no botao de adicionar
function add() {
    var li = document.createElement("li");
    var conteudoItem = document.getElementById("taskId").value;
    var t = document.createTextNode(conteudoItem);
    li.appendChild(t);
    if (conteudoItem === "") {
        alert("Você deve digitar algo!");
    } else {
        document.getElementById("listaId").appendChild(li);
    }
    document.getElementById("taskId").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt); 
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}