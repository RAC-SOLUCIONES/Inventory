<template>

<html>
  <head>
    <title>Crear Usuario</title>
    <link rel="stylesheet" href="./Styles.css"> 
  </head>
  <body>
    <h1>Crear Usuario</h1>
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="mensaje">Mensaje:</label>
      <select id="mensaje" name="mensaje">
      <option value="Cajero">Cajero</option>
      <option value="Administrador">Administrador</option>
      </select><br><br>
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" name="fecha" value="<?php echo date('Y-m-d'); ?>"><br><br>
      
    </form><br>
    <button type="submit">Ingresar</button>
    <RouterLink to="/usuarios"><button id="boton-volver">Volver</button></RouterLink>
  </body>
</html>
</template>