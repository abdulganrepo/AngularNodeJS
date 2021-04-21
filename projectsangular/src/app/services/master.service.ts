import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kelas } from '../model/kelas';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private HttpKlien: HttpClient) { }

  listKelas(): Observable<Kelas[]> {
    return this.HttpKlien.get(environment.baseUrl + '/data')
      .pipe(map(data => data as Kelas[]));
  }

  insertKelas(objData: Kelas): Observable<any> {
    return this.HttpKlien.post(environment.baseUrl + '/save', objData)

  }

   getKelasbyId(id : string): Observable<any> {
    return this.HttpKlien.get(environment.baseUrl + '/getdatabyid/' + id)
      .pipe(map(data => data));
  }
}
