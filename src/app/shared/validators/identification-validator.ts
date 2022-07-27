import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class IdentificationValidator {
  static valid(control: AbstractControl) {
    let value = control.value;
    if (value) {
      value = value.trim();
      if (value.length === 10) {
        // Obtenemos el digito de la region que sonlos dos primeros digitos
        const digitoRegion = value.substring(0, 2);

        // Pregunto si la region existe ecuador se divide en 24 regiones
        if (parseInt(digitoRegion) >= 1 && parseInt(digitoRegion) <= 24) {
          // Extraigo el ultimo digito
          const ultimoDigito = Number(value.substring(9, 10));

          // Agrupo todos los pares y los sumo
          const pares =
            Number(value.substring(1, 2)) +
            Number(value.substring(3, 4)) +
            Number(value.substring(5, 6)) +
            Number(value.substring(7, 8));

          // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
          let numeroUno: any = value.substring(0, 1);
          numeroUno = numeroUno * 2;
          if (numeroUno > 9) {
            numeroUno = numeroUno - 9;
          }

          let numeroTres: any = value.substring(2, 3);
          numeroTres = numeroTres * 2;
          if (numeroTres > 9) {
            numeroTres = numeroTres - 9;
          }

          let numeroCinco: any = value.substring(4, 5);
          numeroCinco = numeroCinco * 2;
          if (numeroCinco > 9) {
            numeroCinco = numeroCinco - 9;
          }

          let numeroSiete: any = value.substring(6, 7);
          numeroSiete = numeroSiete * 2;
          if (numeroSiete > 9) {
            numeroSiete = numeroSiete - 9;
          }

          let numeroNueve: any = value.substring(8, 9);
          numeroNueve = numeroNueve * 2;
          if (numeroNueve > 9) {
            numeroNueve = numeroNueve - 9;
          }

          const impares =
            numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;

          // Suma total
          const sumaTotal = pares + impares;

          // extraemos el primero digito
          const primerDigitoSuma = String(sumaTotal).substring(0, 1);

          // Obtenemos la decena inmediata
          const decena = (Number(primerDigitoSuma) + 1) * 10;

          // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
          let digitoValidador = decena - sumaTotal;

          // Si el digito validador es = a 10 toma el valor de 0
          if (digitoValidador === 10) {
            digitoValidador = 0;
          }

          // Validamos que el digito validador sea igual al de la cedula
          if (digitoValidador === ultimoDigito) {
            return null;
          } else {
            return { identification: true };
          }
        } else {
          // imprimimos en consola si la region no pertenece
          return { identification: true };
        }
      } else {
        // Imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        return { identification: true };
      }
    } else {
      // Imprimimos en consola si la cedula esta vacia
      return { identification: false };
    }
  }
}
