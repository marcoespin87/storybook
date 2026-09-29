/** Archivo Figma de referencia (fuente de verdad visual). */
export const FIGMA_FILE =
  'https://www.figma.com/design/8yg0V8BnjKGXKY1IgteKK7/Cortex-Empresas---Login-Mockup';

/** Tablero "Cortex Empresas / Login" = 1-2 · "Redlines (medidas)" = 3-2 */
export const figmaDesign = (nodeId = '1-2') => ({
  design: { type: 'figma', url: `${FIGMA_FILE}?node-id=${nodeId}` },
});

/** Estado de concordancia de cada historia respecto a Figma. */
export type Concordancia = 'concordante' | 'extension' | 'divergente';
