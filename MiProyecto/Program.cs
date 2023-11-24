using System;

namespace MiEmpresa
{
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Ingrese los datos del empleado:");
            Console.Write("Nombre: ");
            string nombre = Console.ReadLine();
            Console.Write("Salario: ");
            double salario = double.Parse(Console.ReadLine());
            Empleado empleado = new Empleado(nombre, salario);

            Console.WriteLine("\nIngrese los datos del gerente:");
            Console.Write("Nombre: ");
            nombre = Console.ReadLine();
            Console.Write("Salario: ");
            salario = double.Parse(Console.ReadLine());
            Console.Write("Departamento: ");
            string departamento = Console.ReadLine();
            Gerente gerente = new Gerente(nombre, salario, departamento);

            Console.Clear();
            Console.WriteLine("Información del Empleado:");
            MostrarInformacion(empleado);
            Console.WriteLine("\nInformación del Gerente:");
            MostrarInformacion(gerente);
        }

        static void MostrarInformacion(IMostrarInformacion entidad)
        {
            entidad.MostrarInformacion();
        }
    }
}
