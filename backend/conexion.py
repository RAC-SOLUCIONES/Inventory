import psycopg2
  
try:
    connection = psycopg2.connect(
        host="localhost",
        database="Inventory",
        user="postgres",
        password="postgres"
    )
    # Si la conexión es exitosa, se crea un objeto de conexión
    # llamado "connection" que se utilizará más adelante.
    print("Conexión exitosa a la base de datos PostgreSQL")

    # Aquí puedes realizar operaciones en la base de datos
    # como consultas, inserciones, actualizaciones, etc.

except (Exception, psycopg2.Error) as error:
    print("Error al conectar a la base de datos PostgreSQL:", error)

finally:
    # Cierra la conexión cuando hayas terminado de usarla.
    if connection:
        connection.close()
        print("Conexión cerrada a la base de datos PostgreSQL")