/**
 * @description
 * Estado de validacion visual de un campo de formulario.
 * default: sin estado, el campo se ve normal.
 * success: la validacion fue correcta.
 * warning: advertencia, el campo es usable pero requiere atencion.
 * error: la validacion fallo.
 */
export type FieldStatus = 'default' | 'success' | 'warning' | 'error';
