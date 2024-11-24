import { Injectable } from '@angular/core';
import { Barcode, BarcodeFormat, BarcodeScanner, IsGoogleBarcodeScannerModuleAvailableResult, IsSupportedResult, PermissionStatus, ScanOptions, ScanResult } from '@capacitor-mlkit/barcode-scanning';

@Injectable({
  providedIn: 'root'
})
export class BarCodeService {

  private _supported: boolean;
  private _barcodes: Barcode[];
  private _resultat: Barcode[];
  private _moduleAvailable: boolean;
  
  constructor() {
    this._supported = false;
    this._moduleAvailable = false;
    this._barcodes = [];
    this._resultat = [];
    this.isSupported();
  }

  isSupported(): void {
    BarcodeScanner.isSupported().then(
      (result: IsSupportedResult) => {
        this._supported = result.supported;
      }
    ).catch(
      (error: any) => {
        this._supported = false;
      }
    ).finally(() => {});
  }

  async requestPermissions(): Promise<boolean> {
    const permissions: PermissionStatus = await BarcodeScanner.requestPermissions();
    return permissions.camera === 'granted' || permissions.camera === 'limited';
  }

  async scan(): Promise<boolean> {
    const granted = await this.requestPermissions();
    if(granted) { 
      const options: ScanOptions = {
        formats: [BarcodeFormat.Ean13, BarcodeFormat.QrCode]
      }

      const result: ScanResult = await BarcodeScanner.scan(options);
      this._barcodes = result.barcodes;
      this._resultat = result.barcodes;
      return true;
    }
    this._barcodes = [];
    return false;
  }

  async isGoogleBarcodeScannerModuleAvailable(): Promise<boolean> {
    // Funció dedicada a comprovar si el mòdul d'escaneig de Google està disponible
    const { available } = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    return available;
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

  get resultat(): Barcode[] {
    // Funció dedicada a retornar els codis
    return this._resultat;
  }

  get barcodes(): Barcode[] {
    return this._barcodes;
  }

  get supported(): boolean {
    return this._supported
  }
}
