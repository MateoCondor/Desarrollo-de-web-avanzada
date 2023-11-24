using System;

namespace MiEmpresa
{
    /// Clase que representa a un empleado.
    public class Empleado : IMostrarInformacion
    {
        /// Obtiene o establece el nombre del empleado.
        public string Nombre { get; set; }

        /// Obtiene o establece el salario mensual del empleado.
        public double Salario { get; set; }


        /// Inicializa una nueva instancia de la clase Empleado.
        public Empleado(string nombre, double salario)
        {
            Nombre = nombre;
            Salario = salario;
        }

        /// Calcula el salario anual del empleado.
        public double CalcularSalarioAnual()
        {
            return Salario * 12;
        }
        
        public void MostrarInformacion()
        {
            Console.WriteLine($"Empleado: {Nombre}");
            Console.WriteLine($"Salario Mensual: {Salario:C}");
            Console.WriteLine($"Salario Anual: {CalcularSalarioAnual():C}");
        }
    }
}
