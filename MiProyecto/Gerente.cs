using System;

namespace MiEmpresa
{
    public class Gerente : Empleado, IMostrarInformacion
    {


        /// Obtiene o establece el departamento del gerente.
        public string Departamento { get; set; }

        /// Crea una nueva instancia de la clase Gerente.
        public Gerente(string nombre, double salario, string departamento) : base(nombre, salario)
        {
            Departamento = departamento;
        }


        /// Muestra la información del gerente.
        public new void MostrarInformacion()
        {
            Console.WriteLine($"Gerente: {Nombre}");
            Console.WriteLine($"Departamento: {Departamento}");
            Console.WriteLine($"Salario Mensual: {Salario:C}");
            Console.WriteLine($"Salario Anual: {CalcularSalarioAnual():C}");
        }
    }
}


