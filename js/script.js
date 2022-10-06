var Elements = document.getElementsByClassName('slide');
var reviews = [
    "They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, officia. Molestias sunt, veniam nisi dolorem asperiores mollitia at temporibus aspernatur!",
    "They are doing amazing job with hundred percent Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, molestias."
]
Elements[0].setAttribute('class', 'slide active');
var oldElement = Elements[0]

var content = document.getElementById('content');
var textNode = document.createTextNode('')
var ind = 0

function makeText(ind){
    textNode.nodeValue = reviews[ind]
    content.appendChild(textNode)
}

function slide(e) {
    makeText(e.id-1)
    oldElement.setAttribute('class', 'slide');
    e.setAttribute('class', 'slide active');
    oldElement = e;
}

makeText(ind)
