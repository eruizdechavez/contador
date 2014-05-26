contador
========

Funcion para generar contadores a determinada fecha con soporte de zonas horarias, sencillo de usar y en español.

Ejemplo
---

Descarga la versión [minificada][min] or la [concatenada][max].

[min]: https://raw.github.com/erickrdch/contador/master/dist/contador.min.js
[max]: https://raw.github.com/erickrdch/contador/master/dist/contador.js

En tu HTML:

```html
<div id="miContadorEstatico"></div>
<div id="miContadorLento"></div>
<div id="miContadorRapido"></div>

<script src="dist/contador.min.js"></script>
<script>

crearContador(2020, 1, 1, 0, 0, -4).en('#miContadorEstatico').unaVez();
crearContador(2020, 1, 1, 0, 0, -4).en('#miContadorLento').yActualizarCada(60).segundos();
crearContador(2020, 1, 1, 0, 0, -4).en('#miContadorRapido').yActualizarCada(100).milisegundos();

</script>
```

Dando como resultado algo que se vera asi:

```
5 años, 7 meses, 5 días, 8 horas, 34 minutos
5 años, 7 meses, 5 días, 8 horas, 33 minutos
5 años, 7 meses, 5 días, 8 horas, 32 minutos, 48 segundos
```

Uso
---

Al importar este archivo estaran disponibles dos funciones: `crearContador` y `countdown`. `countdown` es la libreria en la que esta utileria esta basada.

### crearContador

`crearContador(año, mes, dia, hora, minuto, zonaHoraria)`

Crea una instancia nueva de un objeto `Contador`. Todos los parametros son requeridos. Todos los parametros deben ser números.

- año: Número que representa el año completo.
- mes: Número que representa el mes, 1: enero, 2: febrero, … 12: diciembre
- dia: Número que representa el día del mes.
- hora: Número que representa la hora del dia, 0 - 23.
- minuto: Número que representa el minuto del dia, 0 - 59.
- zonaHoraria: Número que representa la zona horaria, por ejemplo: +6, -4.

### Contador

#### `Contador.prototype.en(selector)`

Establece el selector a ser usado por `document.querySelector`. Regresa la instancia del mismo objeto, por lo que se puede encadenar con los demas metodos.

#### `Contador.prototype.unaVez`

Genera el texto con el contador y lo usa como innerHTML del elemento que se especifico usando `.en`. Regresa la instancia del mismo objeto, por lo que se puede encadenar con los demas metodos.

#### `Contador.prototype.yActualizarCada(tiempo)`

Establece que el contador debera actualizarse automaticamente. Esta funcion no crea el texto automaticamente y se espera que despues de esta se mande llamar cualquiera de las unidades te tiempo disponibles (`.segundo`, `.segundos`, `.milisegundo`, `.milisegundos`). Regresa la instancia del mismo objeto, por lo que se puede encadenar con los demas metodos.

#### `Contador.prototype.segundo`, `Contador.prototype.segundos`, `Contador.prototype.milisegundo`, `Contador.prototype.milisegundos`

Establece la unidad de tiempo que se uso en `.yActualizarCada`, genera el texto inicial e inicia el contador. Regresa la instancia del mismo objeto, por lo que se puede encadenar con los demas metodos.

#### `Contador.prototype.mostrar`

Usada de forma automatica por cualquiera de las unidades de tiempo. No se espera que se llame manualmente. Regresa la instancia del mismo objeto, por lo que se puede encadenar con los demas metodos.


Versiones
---------

- 0.1.0
    - Version inicial


Agradecimientos
---------------

Gracias a [Stephen M. McKamey](http://stephen.mckamey.com/) por su libreria `countdown.js` disponible en [http://countdownjs.org/](http://countdownjs.org/)


Licencia
--------

Copyright (c) 2014 Erick Ruiz de Chavez
Licencia MIT
