/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        function add_li()
        {
            var productoImagen=document.getElementById("Ruta").files[0].name; ; 
            var nombreProducto=document.getElementById("EditNombreProducto").value;
            if(nombreProducto.length>0)
            { 
                if(find_li(nombreProducto))
                {
                    var li=document.createElement('li');
                    li.id=nombreProducto;
                    li.innerHTML="<font color='white'>"+nombreProducto+"</font>" + "<IMG SRC='css/images/Productos/"+productoImagen+"' WIDTH=60 HEIGHT=60 BORDER=0 ALT='Producto'>"
                    + "<span onclick='eliminar(this)'> <font color='white'>   X </font> </span>"; 
                            
                    document.getElementById("listaProductos").appendChild(li);
                }
            }
            return false;
        }
 
        /**
         * Funcion que busca si existe ya el <li> dentrol del <ul>
         * Devuelve true si no existe.
         */
        function find_li(contenido)
        {
            var el = document.getElementById("listaProductos").getElementsByTagName("li");
            for (var i=0; i<el.length; i++)
            {
                if(el[i].innerHTML==contenido)
                    return false;
            }
            return true;
        }
 
        /**
         * Funcion para eliminar los elementos
         * Tiene que recibir el elemento pulsado
         */
        function eliminar(elemento)
        {
            var id=elemento.parentNode.getAttribute("id");
            node=document.getElementById(id);
            node.parentNode.removeChild(node);
        }
