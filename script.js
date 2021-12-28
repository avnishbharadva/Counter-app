var num = document.querySelector('.num').innerText;
num = parseInt(num);
console.log(num);

function up(){
    num++;
    document.querySelector('.num').innerText = num;
    document.querySelector('.num').style.color = 'chartreuse';
    document.querySelector('.num').style.backgroundColor = 'black';
}

function down(){
    num--;
    document.querySelector('.num').innerText = num;
    document.querySelector('.num').style.color = 'red';
    document.querySelector('.num').style.backgroundColor = 'black';
}