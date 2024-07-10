function disappear(){
    var button = document.getElementById('start');
    button.style.display = 'none';
    getRectangle();
}

var count = 0; 


function getRectangle(){
    var boxButton = document.getElementById('container');
    boxButton.style.display = 'inline';
    boxButton.style.borderRadius = '12px';
    boxButton.style.height = '100px';
    boxButton.style.width = '100px';
    boxButton.style.border = 'none';
    boxButton.style.backgroundColor = 'grey';

    var randTop = Math.floor(Math.random() * 100);
    var randLeft = Math.floor(Math.random() * 100);

    boxButton.style.top = `${randTop}%`;
    boxButton.style.left = `${randLeft}%`;
}

function newRectangle(){
    var boxButton = document.getElementById('container');
    boxButton.style.display = 'none';
    count++;
    if(count < 10){
        getRectangle();
    }
}
