import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //Variable para codigo de qr
  code: any;

  constructor(private router: Router, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

//Boton de scan de QR
scan()
{
  this.barcodeScanner.scan().then(barcodeData => {
    this.code = barcodeData.text;
    console.log('Barcode data', this.code);
   }).catch(err => {
       console.log('Error', err);
   });
}

}
