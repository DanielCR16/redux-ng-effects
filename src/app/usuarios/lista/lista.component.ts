import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios, cargarUsuariosSuccess } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit{
usuarios:Usuario[]=[];
loading:boolean=false;
error:any;
constructor(private store:Store<AppState>,private usuarioService:UsuarioService){

}
  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({users,loading,error})=>{
      this.usuarios=users;
      this.loading=loading;
      this.error=error;
    })
    this.store.dispatch(cargarUsuarios());
  // this.usuarioService.getUser().subscribe(data=>{
  // this.usuarios=data;
  // this.store.dispatch(cargarUsuariosSuccess({usuarios:data}))
  //  })
  }

}
