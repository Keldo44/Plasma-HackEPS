import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {
  zones: { id: number; name: string; image: string }[] = []; // Array of zones
  loading: boolean = true; // Control the loading placeholder

  constructor() {}

  ngOnInit() {
    this.fetchZones(); // Fetch zones on component initialization
  }

  async fetchZones() {
    // Simulate an API call with a delay
    setTimeout(() => {
      this.zones = [
        { id: 1, name: 'Zone 1', image: 'assets/zone1.jpg' },
        { id: 2, name: 'Zone 2', image: 'assets/zone2.jpg' },
        { id: 3, name: 'Zone 3', image: 'assets/zone3.jpg' },
      ];
      this.loading = false; // Disable loading once data is fetched
    }, 5000); // Simulated delay of 3 seconds
  }

  onZoneClick(zone: { id: number; name: string }) {
    console.log('Zone clicked:', zone);
    // Handle zone click (e.g., navigate or perform action)
  }
}
