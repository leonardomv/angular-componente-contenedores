import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Basic button-toggles
 */
@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: 'button-toggle-overview-example.html'
})
export class ButtonToggleOverviewExample {
  contenedorSeleccionControl = new FormControl();
  activarListaProcesos: boolean = false;
  CocoLavadora = {
    estado: 'Durmiendo'
  };

  seleccion(contenedor: any) {
    this.activarListaProcesos = true;
    console.log('Contenedor Seleccionado: ' + contenedor);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
