import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from "../actions/usuarios.actions";
import {

  map,
  catchError,
  tap,
  exhaustMap
} from "rxjs/operators";
import { of } from "rxjs";
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {
  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios), // Asegúrate de que la acción sea la correcta
      tap(data => console.log('efecto', data)),
      exhaustMap(() =>
        this.usuarioService.getUser().pipe(
          map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
          catchError(err =>
            of( usuariosActions.cargarUsuariosError({payload: err}))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usuarioService: UsuarioService) {}
}
