import { CardTypesEnum } from '../enums';

/**
 * @description Define los posibles tipos de tarjeta que puede tener el componente Card.
 * Util para especificar el estilo visual de la tarjeta segun el contexto de uso.
 */
export type CardType =
  | CardTypesEnum.BORDER
  | CardTypesEnum.DASHED
  | CardTypesEnum.SHADOW
  | CardTypesEnum.BG_GREEN
  | CardTypesEnum.BG_GRAY
  | CardTypesEnum.STROKE;
