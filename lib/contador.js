/*
 * contador
 * https://github.com/erick/countdown
 *
 * Copyright (c) 2014 Erick Ruiz de Chavez
 * Licensed under the MIT license.
 */

(function(exports) {
    'use strict';

    countdown.setLabels(
        'milisegundo|segundo|minuto|hora|día|semana|mes|año|decada|siglo|milenio',
        'milisegundos|segundos|minutos|horas|días|semanas|meses|años|decadas|siglos|milenios'
    );

    var Contador = function(año, mes, dia, hora, minuto, zonaHoraria) {
        this.fin = new Date();
        this.fin.setUTCFullYear(año);
        this.fin.setUTCMonth(mes - 1);
        this.fin.setUTCDate(dia);
        this.fin.setUTCHours(hora - zonaHoraria);
        this.fin.setUTCMinutes(minuto);

        this.selector = null;
        this.tiempo = null;
        this.multiplo = null;
    };

    Contador.prototype.en = function(selector) {
        this.selector = selector;
        return this;
    };

    Contador.prototype.unaVez = function() {
        var texto = '',
            ahora = new Date(),
            tiempo = countdown(ahora, this.fin);

        if (!this.selector) {
            throw new Error('No se donde mostrar el contador');
        }

        if (ahora < this.fin) {
            texto = tiempo.toString().replace('and ', '');
        }

        var elemento = document.querySelector(this.selector);
        elemento.innerHTML = texto;

        return this;
    };

    Contador.prototype.yActualizarCada = function(tiempo) {
        this.tiempo = tiempo;
        return this;
    };

    Contador.prototype.segundo = Contador.prototype.segundos = function() {
        this.multiplo = 1000;
        this.mostrar();
        return this;
    };

    Contador.prototype.milisegundo = Contador.prototype.milisegundos = function() {
        this.multiplo = 1;
        this.mostrar();
        return this;
    };

    Contador.prototype.mostrar = function() {
        var contador = this;

        if (this.tiempo && this.multiplo && this.selector) {
            contador.unaVez.call(contador);
            setTimeout(function() {
                contador.mostrar();
            }, this.tiempo * this.multiplo);
        }

        return this;
    };

    exports.crearContador = function crearContador(año, mes, dia, hora, minuto, zonaHoraria) {
        return new Contador(año, mes, dia, hora, minuto, zonaHoraria);
    };
}(typeof exports === 'object' && exports || this));
