<template>
<html>
  <head>
    <title>Asignar permisos</title>
    <link rel="stylesheet" href="./Styles.css"> 
  </head>
  <body>
    <h1>Asignar permisos</h1>
    <form>
      <label for="nombre">Nombre:</label>
      <select id="nombre" name="nombre">
        <option value="nombre1">nombre 1</option>
        <option value="nombre2">nombre 2</option>
      </select><br><br>
      <label for="email">Email:</label>
      <select id="email" name="email">
        <option value="email1">email 1</option>
        <option value="email2">email 2</option>
      </select><br><br>
      <label for="Rol">Rol:</label>
      <select id="Rol" name="Rol">
        <option value="Cajero">Cajero</option>
        <option value="Administrador">Administrador</option>
      </select><br><br>
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" name="fecha" value="<?php echo date('Y-m-d'); ?>"><br><br>
      
    </form><br>
    <button type="submit">Ingresar</button>
    <a href="Usuarios.html"><button id="boton-volver">Volver</button></a>
  </body>
</html>

</template>