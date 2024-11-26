import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner, IsGoogleBarcodeScannerModuleAvailableResult } from '@capacitor-mlkit/barcode-scanning';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { BarCodeService } from 'src/app/services/bar-code.service';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public barcode_url: string = "";
  public img: string = '../../../../assets/img/';

  constructor(private _barcodeScanner: BarCodeService, private _pokemonService: PokemonServiceService) { 
    this.isGoogleBarcodeScannerModuleAvailable();
  }


  ngOnInit() {
    console.log("Starting");
    
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
      let done: boolean = false;
      try {
        done = await this._barcodeScanner.scan(); // Escanegem
        this.barcode_url = this._barcodeScanner.barcodes[0].rawValue;
      }catch (e) {
        done = true;
        this.barcode_url = '6710c41ed814fc8dae914171';
      }
      
      console.log(
        this._pokemonService.catchPokemonByZoneId(this.barcode_url)
      );
       
      
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
function retrievePokemon() {
  throw new Error('Function not implemented.');
}

