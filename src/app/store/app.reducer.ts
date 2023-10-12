import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { Usuario } from '../models/usuario.model';


export interface AppState {
   usuarios:reducers.usuariosState,
   usuario:reducers.usuarioState
}



export const appReducers: ActionReducerMap<AppState> = {
  usuarios:reducers.usuariosReducer,
  usuario:reducers.usuarioReducer
}
