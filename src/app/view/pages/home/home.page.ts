import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner, IsGoogleBarcodeScannerModuleAvailableResult } from '@capacitor-mlkit/barcode-scanning';
import { BarCodeService } from 'src/app/services/bar-code.service';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /*private _supported: boolean;
  private _moduleAvailable: boolean;
  private _barcodes: Barcode[];*/
  public img: string = '../../../../assets/img/';

  constructor(private _barcodeScanner: BarCodeService) { 
    this.isGoogleBarcodeScannerModuleAvailable();
  }


  ngOnInit() {
  }

  async isGoogleBarcodeScannerModuleAvailable() {
    // Funció dedicada a saber si el mòdul d'escaneig de Google està disponible
    let available: boolean = await this._barcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if(available == false) { // En cas que no estigui disponible l'instal·lem
      BarcodeScanner.installGoogleBarcodeScannerModule();
    }
  }

  async scan(): Promise<boolean> {
    // Funció dedicada a escanejar el codi
      let done: boolean = await this._barcodeScanner.scan(); // Escanegem
      return done;
  }

  get isSupported(): boolean {
    // Funció dedicada a obtenir si la funcionalitat d'escaneig està suportada
    return this._barcodeScanner.supported;
  }

  get barcodes(): Barcode[] {
    // Funció dedicada a obtenir el resultat de l'escaneig
    return this._barcodeScanner.barcodes;
  }

}
