const input_email = document.querySelector('.email');
const input_desc = document.querySelector('.descripcion');
const button_submit = document.querySelector('#add');
const button_save = document.querySelector('#save');
const content = document.querySelector('.content');

const form = document.querySelector('formulario');

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
        const nuevoCorreo = input_email.value;
        const nuevaDescripcion = input_desc.value;

        //Verificación
        if (nuevaDescripcion == ""|| nuevoCorreo == ""){
            alert("Datos incompletos. Por favor llene ambos campos.");

        }else if (!nuevoCorreo.includes("@")){
            alert("Correo inválido");

        }else if(nuevaDescripcion.length<20){
            alert("Descripción demasiado corta");

        }else{
            nombres.push([nuevoCorreo,nuevaDescripcion]);
            localStorage.setItem('nombres', JSON.stringify(nombres));

            content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Eliminar</th><th class="c5">Editar </th><th class="c6">Acciones</th></tr>';

            for(let i = 0; i < nombres.length; i++){
                showNames(i, nombres);
            }
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
        const td6 = document.createElement('td'); //Columna invisible
        td6.className ="c6";
        
        const td1text = document.createTextNode(nombres[i][0]);
        const td2text = document.createTextNode(nombres[i][1]);

        const td3text = document.createElement('button');
        td3text.className = "btn4";
        td3text.innerText = "Revisión pendiente";
    
        td1.appendChild(td1text);
        td2.appendChild(td2text);
        td3.appendChild(td3text);
    

        //Botón eliminar
        const del = document.createElement('button');
        del.innerText = "Eliminar";
        del.classList = "Eliminar btn3";
        del.onclick = () => {
            eliminar(i)
        }
        td4.appendChild(del);
        
        //Botón eliminar de la columna invisible
        const del2 = document.createElement('button');
        del2.innerText = "Eliminar";
        del2.classList = "Eliminar btn3";
        del2.onclick = () => {
            eliminar(i)
        }
        td6.appendChild(del2);

        //Botón editar
        const edit = document.createElement('button');
        edit.innerText = "Editar";
        edit.classList = "edit btn3"
        edit.onclick = () => {
            input_email.value = nombres[i][0];
            input_desc.value = nombres[i][1];

            button_save.className = "btn1";
            button_submit.className = "invisible";


            button_save.onclick = () => {
                nombres[i][0] = input_email.value;
                nombres[i][1] = input_desc.value;

                
                //Verificación
                if (input_desc.value == ""|| input_email.value == ""){
                    alert("Datos incompletos. Por favor llene ambos campos.");

                }else if (!input_email.value.includes("@")){
                    alert("Correo inválido");
        
                }else if(input_desc.value.length<20){
                    alert("Descripción demasiado corta");

                }else{
                    nombres.splice(i, 1, [input_email.value, input_desc.value]);
                    localStorage.setItem('nombres', JSON.stringify(nombres));

                    content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Eliminar</th><th class="c5">Editar </th><th class="c6">Acciones</th></tr>';

                    for(let i = 0; i < nombres.length; i++){
                        showNames(i, nombres);
                    }

                    button_save.className = "invisible";
                    button_submit.className = "btn1";
                }           
            }

            form.appendChild(button_save);
            button_save.id = i;
        }
        td5.appendChild(edit);
    
        //Botón editar de la columna invisible
        const edit2 = document.createElement('button');
        edit2.innerText = "Editar";
        edit2.classList = "edit btn3"
        edit2.onclick = () => {
            input_email.value = nombres[i][0];
            input_desc.value = nombres[i][1];

            button_save.className = "btn1";
            button_submit.className = "invisible";


            button_save.onclick = () => {
                nombres[i][0] = input_email.value;
                nombres[i][1] = input_desc.value;

                
                //Verificación
                if (input_desc.value == ""|| input_email.value == ""){
                    alert("Datos incompletos. Por favor llene ambos campos.");

                }else if (!input_email.value.includes("@")){
                    alert("Correo inválido");
        
                }else if(input_desc.value.length<20){
                    alert("Descripción demasiado corta");

                }else{
                    nombres.splice(i, 1, [input_email.value, input_desc.value]);
                    localStorage.setItem('nombres', JSON.stringify(nombres));

                    content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Eliminar</th><th class="c5">Editar </th><th class="c6">Acciones</th></tr>';

                    for(let i = 0; i < nombres.length; i++){
                        showNames(i, nombres);
                    }

                    button_save.className = "invisible";
                    button_submit.className = "btn1";
                }           
            }

            form.appendChild(button_save);
            button_save.id = i;
        }
        td6.appendChild(edit2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    
        content.appendChild(tr);
        //La tabla  = "content"
    
    }


    function eliminar (i) {
        var nombres = JSON.parse(localStorage.getItem('nombres')) || [];
        nombres.splice(i, 1);
        localStorage.setItem('nombres', JSON.stringify(nombres));

        if (nombres.length>0) {
            content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Eliminar</th><th class="c5">Editar </th><th class="c6">Acciones</th></tr>';
        }else{
            content.innerHTML = '<tr><th class="c1">Email </th><th class="c2">Descripción </th><th class="c3">Estado </th><th class="c4">Eliminar</th><th class="c5">Editar </th><th class="c6">Acciones</th></tr><p>No hay elementos</p>';
        }

        for(let j = 0; j < nombres.length; j++){
            showNames (j, nombres);
        }
    }

    });