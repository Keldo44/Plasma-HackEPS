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
    /*this._supported = false;
    this._moduleAvailable = false;
    this._barcodes = [];*/
    //this.isSupported();
  }


  ngOnInit() {
  }

  /*async scan(): Promise<boolean> {
    let done: boolean = await this._barcodeScanner.scan();
    return done;
  }

  async checkGoogleGarcodeScannerModule(): Promise<void> {
    BarcodeScanner.isGoogleBarcodeScannerModuleAvailable().then(
      (avaliableModule: IsGoogleBarcodeScannerModuleAvailableResult) => {
        this._moduleAvailable = avaliableModule.available;
        if(!this._moduleAvailable) BarcodeScanner.installGoogleBarcodeScannerModule();
      }
    );
  }

  get moduleAvailable() {
    if(!this._moduleAvailable) {
      BarcodeScanner.isGoogleBarcodeScannerModuleAvailable().then(
        (avaliableModule: IsGoogleBarcodeScannerModuleAvailableResult) => {
          this._moduleAvailable = avaliableModule.available;
        }
      );
    }

    return this._moduleAvailable;
  }

  /*get isSupported(): boolean {
    //return this._barcodeScanner.supported && this._barcodeScanner.moduleAvailable;
  }*/

 /* get barcodes(): Barcode[] {
    return this._barcodeScanner.barcodes;
  }*/
}
