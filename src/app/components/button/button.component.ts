import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonVariant, ButtonType, IconPosition } from './button.utils';
import { Color } from '../../../lib/types';
import { TextLinkDirective } from './text-link.directive';
import { ButtonDirective } from './button.directive';

/**
 * Componente de boton reutilizable con soporte para variantes de color, tipo, icono y estilos personalizados
 * segun especificaciones de diseno institucional.
 * @class ButtonComponent
 */
@Component({
  selector: 'pbo-button',
  imports: [ButtonModule, NgOptimizedImage, TextLinkDirective, ButtonDirective],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  public color = input<Color>('primary');

  public variant = input<ButtonVariant>('');

  public type = input<ButtonType>('button');

  public label = input<string>();

  public icon = input<string>();

  public disabled = input(false, { transform: booleanAttribute });

  public iconPosition = input<IconPosition>('left');

  public link = input(false, { transform: booleanAttribute });

  public linkSize = input<'lg' | 'md' | 'sm' | 'xs'>('sm');

  public class = input<string>('');

  public ariaLabel = input<string>();

  public labelClass = input<string>('');

  public pboClick = output<Event>();
}
