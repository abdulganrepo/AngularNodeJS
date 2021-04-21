import { Component, OnInit } from '@angular/core';
import { Kelas } from '../model/kelas';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-daftarkelas',
  templateUrl: './daftarkelas.component.html',
  styleUrls: ['./daftarkelas.component.css'],
  providers: [MasterService]
})
export class DaftarkelasComponent implements OnInit {

  daftarkelas!: Kelas[];
  constructor(private ms: MasterService) { }

  ngOnInit(): void {
    this.ms.listKelas().subscribe((data) => {
      this.daftarkelas = data;
    });
  }

}
