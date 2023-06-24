Creación de entorno virtual
    python -m venv .venv


Habilitación de permisos para powershell
    Set-ExecutionPolicy Unrestricted


Activación entorno virtual en windows
    .venv/Scripts/activate


Desactivación entorno virtual
    deactivate

Instalación de paquetes y librerias
    pip install -r requirements.txt


Asignar variable de la aplicación
    Windows PowerShell
    $env:FLASK_APP = "__init__.py"

    Windows cmd
    set FLASK_APP=__init__.py

    Linux
    export FLASK_APP=__init__.py


Activar DEBUG
    Windows PowerShell
    $env:FLASK_DEBUG = "1"

    Windows cmd
    set FLASK_DEBUG=1

    Linux
    export FLASK_DEBUG=1


Ejecutar test:
    flask test


Ejecutar la aplicación: 
    flask run

### Acceder a la aplicación ###
    Abrir la siguiente URL en su navegador para ver la documentación de swagger
    http://127.0.0.1:5000/

### Usando Postman ####
    El encabezado de autorización tiene el siguiente formato:
    
    Key: Authorization
    Valor: <token generado durante el inicio de sesión>