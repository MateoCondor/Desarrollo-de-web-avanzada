Cabe aclarar que el proyecto se ejecuta en la version 6 de .NET

Se debe instalar desde el panel de herramientas > Administrador de paquetes NuGet > Administrar paquetes NuGet para la solucion

Se debe buscar " entityframework " > Instalar Microsoft.EntityFrameworkCore.SqlServer y Microsoft.EntityFrameworkCore.Tools en la version 6.0.25 de .NET

Para poder ejecuar el programa hay que cambiar unas lineas de codigo en el archivo "appsettings.json" con las siguientes lineas de codigo: 

"ConnectionStrings": {
  "conexion": "Server= <nombre_de_tu_computadora> ; DataBase=MVCCRUD; integrated security=true;"
}

La base de datos esta junto con la carpeta con el nombre "SQLQuery1"

Se debe poner el nombre de la computadora en la que se esta ejecutando.
Cabe aclarar que previamente se debe de haber configurado SQL server apropiadamente.

luego simplemente se debe ejecutar el programa.