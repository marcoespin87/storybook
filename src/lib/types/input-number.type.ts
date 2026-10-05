/**
 * @description
 * Tipo para definir el formato de entrada numerica. Puede ser
 * currency para valores monetarios, por desicion de diseno.
 */
export type InputNumberType = 'decimal';

/**
 * @description
 * Apariencia visual del input number.
 * default: campo estandar con label, borde y texto de ayuda.
 * feature-amount: monto destacado, centrado y con linea inferior.
 */
export type InputNumberAppearance = 'default' | 'feature-amount';
