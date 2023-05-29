<template>
<html>
<head>
    <title>Inventario</title>
    <link rel="stylesheet" href="./Styles.css"> 
  </head>
  <body>
    <h1>Inventario</h1>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Código</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Proveedor</th>
          <th>Lote</th>
          <th>Fecha de Modificación</th>
          <th>Usuario</th>
          <th>Estado</th>
          <th>Tienda</th>
          <th>Precio</th>
          <th>Valor unitario</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td><button id="boton-añadir">➕</button></td>
          <td>001</td>
          <td>Tomate</td>
          <td>5</td>
          <td>El Paisa</td>
          <td>LT-123</td>
          <td>2022-01-01</td>
          <td>Alejo</td>
          <td>Activo</td>
          <td>Tienda Norte</td>
          <td>$1000</td>
          <td>$800</td>
          <td><button id="boton-editar">✏️</button><button id="boton-borrar">🗑️</button></td>
        </tr>
        <tr>
            <td><button id="boton-añadir">➕</button></td>
          <td>002</td>
          <td>Carne</td>
          <td>2</td>
          <td>Carnicos vacunos</td>
          <td>LT-456</td>
          <td>2022-02-15</td>
          <td>Cristian</td>
          <td>Inactivo</td>
          <td>Tienda Centro</td>
          <td>$500</td>
          <td>$400</td>
          <td><button id="boton-editar">✏️</button><button id="boton-borrar">🗑️</button></td>
        </tr>
        <tr>
          <td><button id="boton-añadir">➕</button></td>
          <td>003</td>
          <td>Arroz</td>
          <td>10</td>
          <td>Pepitas</td>
          <td>LT-789</td>
          <td>2022-03-23</td>
          <td>Raul</td>
          <td>Activo</td>
          <td>Tienda Sur</td>
          <td>$30</td>
          <td>$20</td>
          <td><button id="boton-editar">✏️</button><button id="boton-borrar">🗑️</button></td>
        </tr>
      </tbody>
    </table>
    <RouterLink to="/"> <button id="boton-volver">Volver</button></RouterLink>
  </body>

</html>>

</template>