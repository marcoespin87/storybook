import { ComponentStatusEnum } from '../enums';

/**
 * @description Define los posibles estados que puede tener un componente, como seleccionado o multiple seleccionado.
 * Util para indicar el estado actual del componente en la interfaz de usuario.
 */
export type ComponentStatusType =
  | ComponentStatusEnum.SELECTED
  | ComponentStatusEnum.MULTIPLE_SELECTED;
