const input_nombre = document.querySelector('#nombre');
const button_submit = document.querySelector('#add');
const button_remove = document.querySelector('.remove');
const content = document.querySelector('.content');

document.addEventListener("DOMContentLoaded", function () {
    //const nombres = localStorage.getItem('nombres');

    const nombres = JSON.parse(localStorage.getItem('nombres'));

    if(!nombres){
        const p = document.createElement('p');
        const text = document.createTextNode('No hay elementos');
        p.appendChild(text);
        content.appendChild(p);
    }else{
        if (nombres.length>0) {
            for(let i = 0; i < nombres.length; i++){
                showNames(i, nombres);
            }
        }else{
            const p = document.createElement('p');
            const text = document.createTextNode('No hay elementos');

            p.appendChild(text);
            content.appendChild(p);
        }
    }

    button_submit.addEventListener('click', function(){
        const nombres = JSON.parse(localStorage.getItem('nombres')) || [];
        const nuevoNombre = input_nombre.value;
        nombres.push(nuevoNombre);
        localStorage.setItem('nombres', JSON.stringify(nombres));

        content.innerHTML = '';

        for(let i = 0; i < nombres.length; i++){
            showNames(i, nombres);
        }
    })

    function showNames (i, nombres) {
        const div =document.createElement('div');
        const p = document.createElement('p');
        const text = document.createTextNode(nombres[i]);
        p.appendChild(text);

        const del = document.createElement('button');
        del.innerText = "Remover";
        del.className = "remove";
        del.onclick = () => {
            eliminar(i)
        }

        div.appendChild(p);
        div.appendChild(del);

        content.appendChild(div);
    }


    function eliminar (i) {
        var nombres = JSON.parse(localStorage.getItem('nombres')) || [];
        nombres.splice(i, 1);
        localStorage.setItem('nombres', JSON.stringify(nombres));
        content.innerHTML = '';


        for(let j = 0; j < nombres.length; j++){
            showNames (j, nombres);
        }
    }


    });