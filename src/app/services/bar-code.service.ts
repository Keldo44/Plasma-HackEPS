import { Injectable } from '@angular/core';
import { Barcode, BarcodeFormat, BarcodeScanner, IsSupportedResult, PermissionStatus, ScanOptions, ScanResult } from '@capacitor-mlkit/barcode-scanning';

@Injectable({
  providedIn: 'root'
})
export class BarCodeService {
  checkGoogleGarcodeScannerModule() {
    throw new Error('Method not implemented.');
  }

  private _supported: boolean;
  private _barcodes: Barcode[];
  
  constructor() {
    this._supported = false;
    this._barcodes = [];
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

      return true;
    }
    this._barcodes = [];
    return false;
  }

  get barcodes(): Barcode[] {
    return this._barcodes;
  }

  get supported(): boolean {
    return this._supported
  }
}
