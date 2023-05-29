<template>
<html>
	<head>
		<title>Proveedores</title>
		<link rel="stylesheet" href="./Styles.css"> 
	</head>
	<body>
		<h1>Proveedores</h1>
		<table>
			<thead>
				<tr>
                    <th></th>
					<th>Número de proveedor</th>
					<th>Nombre</th>
					<th>Correo</th>
					<th>Fecha de creación</th>
					<th>Usuario</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
                    <td><button id="boton-añadir">➕</button></td>
					<td>1</td>
					<td>Proveedor 1</td>
					<td>Proveedor1@gmail.com</td>
					<td>Usuario 1</td>
					<td>cajero 1</td>
					<td><button id="boton-editar">✏️</button><button id="boton-borrar">🗑️</button></td>
				</tr>
				<tr>
                    <td><button id="boton-añadir">➕</button></td>
					<td>2</td>
					<td>Proveedor 2</td>
					<td>Proveedor2@gmail.com</td>
					<td>Usuario 2</td>
					<td>cajero 2</td>
					<td><button id="boton-editar">✏️</button><button id="boton-borrar">🗑️</button></td>
				</tr>
				<tr>
                    <td><button id="boton-añadir">➕</button></td>
					<td>3</td>
					<td>Proveedor 3</td>
					<td>Proveedor2@gmail.com</td>
					<td>Usuario 3</td>
					<td>cajero 3</td>
					<td><button id="boton-editar">✏️</button><button id="boton-borrar">🗑️</button></td>
				</tr>
			</tbody>
		</table>
       <RouterLink to="/"> <button id="boton-volver">Volver</button></RouterLink>
	</body>
</html>

</template>