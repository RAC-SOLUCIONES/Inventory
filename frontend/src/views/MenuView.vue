<script setup>
    import prueba from '../components/prueba.vue'
</script>
<template>
    <html>
       <head>
           <title>Home</title>
           <link rel="stylesheet" href="./Styles.css"> 
       </head>
       <body>
           <h1>Bienvenido</h1>
           <section id="botones-home">
               <RouterLink to="/inventario"><button>Inventario</button></RouterLink>
               <RouterLink to="/proveedores"><button >Proveedores</button></RouterLink>
               <RouterLink to="/usuarios"><button >Usuarios</button></RouterLink>
               <RouterLink to="/sede"><button >Sede</button> </RouterLink>
               <RouterLink to="/salir"><button >Salir</button></RouterLink>
   
              <RouterLink to="/acerca"> Acerca de</RouterLink>

              <prueba></prueba>
           </section>
           
       </body>
   </html>
     
   </template>