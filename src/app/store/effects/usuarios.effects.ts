import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from "../actions/usuarios.actions";
import * as usuarioActions from "../actions/usuario.actions";
import {

  map,
  catchError,
  tap,
  exhaustMap
} from "rxjs/operators";
import { of } from "rxjs";
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {
  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario), // Asegúrate de que la acción sea la correcta
      exhaustMap((action) =>
        this.usuarioService.getUserById(action.id).pipe(
          map(user => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
          catchError(err =>
            of( usuarioActions.cargarUsuarioError({payload: err}))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usuarioService: UsuarioService) {}
}
