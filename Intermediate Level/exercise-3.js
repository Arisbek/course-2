function Create(){
    var pickle = {color: "green"};
    return pickle;
}

function add(obj){
    obj.weight = 2;
    return obj;
}

function del(obj){
    delete obj.color;
    return obj;
}

function update(obj){
    obj.weight--;
    return obj;
}

function inp(){
    var textElement = document.getElementById('p');

    var obj = Create();
    textElement.innerText = JSON.stringify(obj) + "\n";

    add(obj);
    textElement.innerText += JSON.stringify(obj) + "\n";

    var mes = del(obj);
    textElement.innerText += JSON.stringify(mes) + "\n";

    mes = update(obj);
    textElement.innerText += JSON.stringify(mes) + "\n";
}
