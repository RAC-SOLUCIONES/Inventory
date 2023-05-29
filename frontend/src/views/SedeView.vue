<template>
    <html>
  <head>
    <title>Sede</title>
    <link rel="stylesheet" href="./Styles.css"> 
  </head>
  <body>
    <h1>Sede</h1>
    <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        <label for="pais">País:</label>
        <select id="pais" name="pais">
            <option value="">Seleccione un país</option>
            <option value="AF">Afganistán</option>
            <option value="AL">Albania</option>
            <option value="DE">Alemania</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguila</option>
            <option value="AQ">Antártida</option>
            <option value="AG">Antigua y Barbuda</option>
            <option value="AN">Antillas Holandesas</option>
            <option value="SA">Arabia Saudí</option>
            <option value="DZ">Argelia</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaiyán</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrein</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BE">Bélgica</option>
            <option value="BZ">Belice</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermudas</option>
            <option value="BY">Bielorrusia</option>
            <option value="MM">Birmania</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Bosnia y Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brasil</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="BT">Bután</option>
            <option value="CV">Cabo Verde</option>
            <option value="KH">Camboya</option>
            <option value="CM">Camerún</option>
            <option value="CA">Canadá</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CY">Chipre</option>
            <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comores</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, República Democrática del</option>
            <option value="KR">Corea</option>
        </select><br><br>
        <label for="departamento">Departamento:</label>
        <select id="departamento" name="departamento">
            <option value="">Seleccione un departamento</option>
        </select><br><br>
        <label for="ciudad">Ciudad:</label>
        <select id="ciudad" name="ciudad">
            <option value="">Seleccione ciudad</option>
        </select><br><br>
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion"><br><br>
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono"><br><br>
        <label for="fecha">Fecha:</label>
        <input type="date" id="fecha" name="fecha" value="<?php echo date('Y-m-d'); ?>"><br><br>
        
    </form><br>
    <button type="submit">Enviar</button>
    <RouterLink to="/"><button id="boton-volver">Volver</button></RouterLink>
    </body>
</html>
</template>