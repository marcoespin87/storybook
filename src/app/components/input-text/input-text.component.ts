import { booleanAttribute, ChangeDetectionStrategy, Component, forwardRef, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { v4 as uuidv4 } from 'uuid';
import { FormFieldHost } from '../../../lib/contracts';
import { InputTextType } from '../../../lib/types';
import { NgOptimizedImage } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';

/**
 * @description
 * Componente de campo de texto reutilizable para formularios. Permite configurar tipo, etiqueta, placeholder, estado de invalidez,
 * requerido, opcional, accesibilidad y sincronizacion con modelo. Implementa ControlValueAccessor para integracion con formularios
 * reactivos y template-driven.
 */
@Component({
  selector: 'pbo-input-text',
  imports: [
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    AutoFocusModule,
    NgOptimizedImage,
    Tooltip
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    },
    {
      provide: FormFieldHost,
      useExisting: forwardRef(() => InputTextComponent)
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor, FormFieldHost {
  /**
   * @description
   * Entrada de clases adicionales para el elemento conetenedor de la caja de texto
   */
  public class = input('');

  /**
   * @description
   * Ruta de icono a mostrar en la caja de texto.
   */
  public icon = input<string>('');

  /**
   * @description
   * Texto del tooltip para el icono del input text. Se muestra al hacer hover sobre el icono.
   */
  public iconToolTip = input<string>('');

  /**
   * @description
   * Posición del tooltip para el icono. Puede ser 'top', 'bottom', 'left' o 'right'.
   */
  public iconToolTipPosition = input<string>('');

  /**
   * @description
   * Dirección de la flecha del tooltip para el icono. Puede ser 'none', 'p-tooltip-tip-left' o 'p-tooltip-tip-right'.
   */
  public iconToolTipArrow = input<string>('');

  /**
   * @description
   * Texto del tooltip para el estado invalid.
   */
  public invalidIconToolTip = input<string>('');

  /**
   * @description
   * Posición del tooltip para el estado invalid.
   */
  public invalidIconToolTipPosition = input<string>('');

  /**
   * @description
   * Dirección de la flecha del tooltip para el estado invalid.'.
   */
  public invalidIconToolTipArrow = input<string>('');

  /**
   * @description
   * Texto alternativo (alt) para los iconos de la caja de texto
   */
  public altIcon = input('icon input text');

  /**
   * @description
   * Identificador unico para el campo de texto. Es requerido y se utiliza para asociar el label y
   * el helper text al input.
   * @return string
   */
  public readonly inputId = input<string>(uuidv4());

  /**
   * @description
   * Etiqueta del campo de texto. Se muestra como label del input.
   * @return string
   */
  public readonly label = input<string>();

  /**
   * @description
   * Tipo del campo de texto. Puede ser 'text' para texto general o 'email' para correos electronicos.
   * Por defecto es 'text'.
   * @return InputTextType
   */
  public readonly type = input<InputTextType>('text');

  /**
   * @description
   * Placeholder del campo de texto. Se muestra como placeholder del input.
   * @return string
   */
  public readonly placeholder = input<string>();

  /**
   * @description
   * Indica si el campo de texto es opcional. Si es true, se muestra el texto opcional junto al label. Si es
   * false, no se muestra el texto opcional.
   * @return boolean
   */
  public readonly isOptional = input(false, { transform: booleanAttribute });

  /**
   * @description
   * Indica si el campo de texto es requerido. Si es true, se muestra un asterisco junto al label. Si es false,
   * no se muestra el asterisco.
   * @return boolean
   */
  public readonly required = input(false, { transform: booleanAttribute });

  /**
   * @description
   * Indica si el campo de texto es invalido. Si es true, se muestra el estado de error en el input. Si es false,
   * no se muestra el estado de error.
   * @return boolean
   */
  public readonly invalid = input(false, { transform: booleanAttribute });

  /**
   * @description
   * Indica si el campo de texto debe recibir el foco automaticamente al cargar. Si es true, el input recibira el foco
   * automaticamente. Si es false, no recibira el foco automaticamente.
   * @return boolean
   */
  public readonly autoFocus = input(false, { transform: booleanAttribute });

  /**
   * @description
   * Etiqueta ARIA del campo de texto. Se utiliza para accesibilidad.
   * @return string
   */
  public readonly ariaLabel = input('');

  /**
   * @description
   * Identificador ARIA del campo de texto. Se utiliza para accesibilidad.
   * @return string
   */
  public readonly ariaLabelledBy = input('');

  /**
   * @description
   * Texto opcional que se muestra junto al label del input.
   * @return string
   */
  public readonly optionalText = input('Optional');

  /**
   * @description
   * Texto de ayuda para la caja de texto.
   */
  public readonly helperText = input<string>();

  /**
   * @description
   * Ancho maximo de caracteres en las cajas de texto.
   * @returns number
   */
  public readonly maxLength = input<number>(300);

  /**
   * @description
   * Indica si el campo de texto esta deshabilitado. Si es true, el input estara deshabilitado y no se podra interactuar con el.
   * @return boolean
   */
  public readonly disabled = model(false);

  /**
   * @description
   * Valor del campo de texto. Se utiliza para almacenar el valor actual del input y sincronizarlo con el modelo.
   * @return string
   */
  public readonly value = model('');
}
