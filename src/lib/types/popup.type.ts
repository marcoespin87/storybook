import { InputSignal } from '@angular/core';

/**
 * Type que extiende entradas en un componente dinamico.
 * @group type
 */
export type InputValue<T> = T extends InputSignal<infer U> ? U : T;

/**
 * Type que extiende entradas en un componente dinamico.
 * @group type
 */
export type ComponentInputs<T> = { [K in keyof T]?: InputValue<T[K]> };
