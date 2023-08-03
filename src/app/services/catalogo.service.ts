import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoria, prodotti, sottocategorie } from '../interfaces/categorie';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  refresh = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  getDatiCatalogo(): Observable<categoria[]> {
    const url = '/api/categoria';
    return this.http.get<categoria[]>(url);
  }

  getAllCategorie(): Observable<categoria[]> {
    const url = '/api/categoria';
    return this.http.get<categoria[]>(url);
  }

  getAllProducts(): Observable<prodotti[]> {
    const url = 'api/prodotti';
    return this.http.get<prodotti[]>(url);
  }

  getProduct(id: any): Observable<categoria> {
    return this.http.get<categoria>('api/prodotti/' + id);
  }

  getSottocategorie(): Observable<sottocategorie[]> {
    const url = '/api/categoria/sottocategorie';
    return this.http.get<sottocategorie[]>(url);
  }

  getSottocategoriePerCategoria(nomeCategoria: string): Observable<sottocategorie[]> {
    const url = `/api/categoria/${nomeCategoria}`;
    return this.http.get<categoria>(url).pipe(
      map((categoria: categoria) => categoria.sottocategorie)
    );
  }

  getProdottiPerSottocategoria(sottocategoriaSelezionata: string): Observable<sottocategorie> {
    const url = `/api/product?sottocategoria=${sottocategoriaSelezionata}`;
    return this.http.get<sottocategorie>(url);
  }
}
