/**
 * @description
 * Vista inicial del calendario.
 * 'date' abre el calendario en la grilla de dias del mes actual.
 * 'month' abre el calendario en la grilla de meses del año, y al elegir un mes se selecciona
 * el primer dia de ese mes y se cierra el panel sin pasar por la grilla de dias. En esta vista
 * corresponde enviar dateFormat 'mm/yy' y placeholder 'mm/yyyy' para no mostrar ese dia 01.
 */
export type DatePickerView = 'date' | 'month';
