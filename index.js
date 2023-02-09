const input_email = document.querySelector('.email');
const input_desc = document.querySelector('.descripcion');
const button_submit = document.querySelector('#add');
const content = document.querySelector('.content');

document.addEventListener("DOMContentLoaded", function () {
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
        const nuevoNombre = input_email.value;
        const nuevaDescripcion = input_desc.value;
        nombres.push([nuevoNombre,nuevaDescripcion]);
        localStorage.setItem('nombres', JSON.stringify(nombres));

        content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Remover </th><th class="c5">Editar </th></tr>';

        for(let i = 0; i < nombres.length; i++){
            showNames(i, nombres);
        }
    })

    function showNames (i, nombres) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.className ="c1";
        const td2 = document.createElement('td');
        td2.className ="c2";
        const td3 = document.createElement('td');
        td3.className ="c3";
        const td4 = document.createElement('td');
        td4.className ="c4";
        const td5 = document.createElement('td');
        td5.className ="c5";
        
        const td1text = document.createTextNode(nombres[i][0]);
        const td2text = document.createTextNode(nombres[i][1]);

        const td3text = document.createElement('button');
        td3text.className = "btn4";
        td3text.innerText = "Revisión pendiente";
    
        td1.appendChild(td1text);
        td2.appendChild(td2text);
        td3.appendChild(td3text);
    
        const del = document.createElement('button');
        del.innerText = "Remover";
        //del.className = "remove";
        del.classList = "Remover btn3";
        del.onclick = () => {
            eliminar(i)
        }
    
        td4.appendChild(del);
    
        const edit = document.createElement('button');
        edit.innerText = "Editar";
        //edit.className = "edit";
        edit.classList = "edit btn3"
        edit.onclick = () => {
            editar()
        }
    
        td5.appendChild(edit);
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    
        content.appendChild(tr);
        //"table" = "content"
    
    }


    function eliminar (i) {
        var nombres = JSON.parse(localStorage.getItem('nombres')) || [];
        nombres.splice(i, 1);
        localStorage.setItem('nombres', JSON.stringify(nombres));
        
        content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Remover </th><th class="c5">Editar </th></tr><p>No hay elementos</p>';

        for(let j = 0; j < nombres.length; j++){
            showNames (j, nombres);
        }
    }

    function editar (){
        alert("¯\_(ツ)_/¯");
    }


    });


    

    /*
    <table>
        <tr>
            <th>Email </th>
            <th>Desc</th>
            <th>Estado</th>
            <th><button>Remover</button></th>
            <th><button>Editar</button></th>
        </tr>
        <tr>
            <td>[0,0]</td>
            <td>[0,1]</td>
            <td>Revisión pendiente</td>
            <td><button>Remover</button></td>
            <td><button>Editar</button></td>
        </tr>
        <tr>
            <td>[1,0]</td>
            <td>[1,1]</td>
            <td>Revisión pendiente</td>
            <td><button>Remover</button></td>
            <td><button>Editar</button></td>
        </tr>
    </table>


function showNames (i, nombres) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    
    const td1text = document.createTextNode(nombres[i,0]);
    const td2text = document.createTextNode(nombres[i,1]);
    const td3text = document.createTextNode(Revisión pendiente);

    td1.appendChild(td1text);
    td2.appendChild(td2text);
    td2.appendChild(td2text);

    const del = document.createElement('button');
    del.innerText = "Remover";
    del.className = "remove";
    del.onclick = () => {
        eliminar(i)
    }

    td4.appendChild(del);

    const edit = document.createElement('button');
    edit.innerText = "Editar";
    edit.className = "edit";
    edit.onclick = () => {
        eliminar(i)
    }

    td5.appendChild(edit);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    content.appendChild(tr);
    //"table" = "content"

}
        */