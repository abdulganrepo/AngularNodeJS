import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kelas } from '../model/kelas';
import { MasterService } from '../services/master.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css'],
  providers: [MasterService]
})
export class InsertdataComponent implements OnInit {
  addDataForm!: FormGroup;
  daftarKelas!: Kelas;
  id! : string;
  isEdit =  false;
  constructor(
    private ruter: Router,
    private route: ActivatedRoute,
    private ms: MasterService
    ) { 
         this.addDataForm = new FormGroup({
      nama: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      keterangan: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });

    }

  ngOnInit(): void {
 
    this.route.params.subscribe(hasil => {
      this.id = hasil.id;
      if (this.id){
        this.isEdit = true;
        this.ms.getKelasbyId(this.id).subscribe((data)=>{
        this.addDataForm.controls.nama.setValue(data[0].nama);
        this.addDataForm.controls.keterangan.setValue(data[0].keterangan);
      })
      }
     
    });
  }

  simpanData(): void {

    if (this.addDataForm.valid) {
      const KelasTmp = new Kelas;
      KelasTmp.nama = this.addDataForm.controls.nama.value;
      KelasTmp.keterangan = this.addDataForm.controls.keterangan.value;
      this.daftarKelas = KelasTmp;
      console.log(this.daftarKelas);
      this.ms.insertKelas(KelasTmp).subscribe((data) => {
        console.log(data);
            this.ruter.navigateByUrl("/editkelas/" + data.key);
      });
    }
  }

}
