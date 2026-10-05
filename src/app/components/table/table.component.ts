import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon-pbo/icon.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ButtonComponent } from '../button/button.component';
import { ContextMenuComponent } from '../context-menu/context-menu.component';
import { SearchComponent } from '../search/search.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { HeaderHeight, HeaderType, IconPosition, RowHeight, RowStateType, RowType } from '../table/table.utils';
import { TableColumn, TableRow } from './table.types';

/**
 * @description
 * Componente Table reutilizable para mostrar datos en formato de tabla.
 * Soporta paginacion, ordenamiento, filtros y acciones por fila.
 */
@Component({
  selector: 'pbo-table',
  templateUrl: './table.component.html',
  imports: [
    TableModule,
    IconComponent,
    ButtonModule,
    SearchComponent,
    AvatarComponent,
    CheckboxComponent,
    ButtonComponent,
    ContextMenuComponent,
    FormsModule,
    PaginatorComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  /**
   * @description
   * Lista de columnas que define la estructura de la tabla, incluyendo campos, encabezados y opciones de filtro.
   */
  public columns = input<TableColumn[]>([]);

  /**
   * @description
   * Datos de las filas de la tabla, cada fila es un objeto con propiedades dinamicas.
   */
  public data = input<TableRow[]>([]);

  /**
   * @description
   * Posicion del icono en la tabla, puede ser 'left' o 'right'.
   */
  public iconPosition = input<IconPosition>('right');

  /**
   * @description
   * Altura del encabezado de la tabla, opciones como 's', 'm', 'l'.
   */
  public headerHeight = input<HeaderHeight>('s');

  /**
   * @description
   * Altura de las filas de la tabla, opciones como 's', 'm', 'l'.
   */
  public rowHeight = input<RowHeight>('s');

  /**
   * @description
   * Tipo de encabezado, como 'primary' o 'secondary'.
   */
  public headerType = input<HeaderType>('primary');

  /**
   * @description
   * Tipo de fila, como 'primary' o 'secondary'.
   */
  public rowType = input<RowType>('primary');

  /**
   * @description
   * Tipo de estado de la fila, como 'normal-primary'.
   */
  public rowStateType = input<RowStateType>('normal-primary');

  /**
   * @description
   * Tamaño general de la tabla.
   */
  public tableSize = input<string>();

  /**
   * @description
   * Tipografia para el encabezado.
   */
  public headerTipografy = input<string>();

  /**
   * @description
   * Tipografia para los campos principales.
   */
  public fieldTipografy = input<string>();

  /**
   * @description
   * Tipografia para los subcampos.
   */
  public subFieldTipografy = input<string>();

  /**
   * @description
   * Indica si la tabla es ordenable.
   */
  public isSortable = input<boolean>(false);

  /**
   * @description
   * Indica si se muestra el paginador.
   */
  public paginator = input<boolean>(false);

  /**
   * @description
   * Opciones de filas por pagina disponibles.
   */
  public rowsPerPageOptions = input<number[]>([5, 10, 20]);

  /**
   * @description
   * Indica si se muestran botones de radio para seleccion.
   */
  public radioButton = input<boolean>(false);

  /**
   * @description
   * Indica si se muestran checkboxes para seleccion multiple.
   */
  public checkbox = input<boolean>(false);

  /**
   * @description
   * Indica si se habilita el filtro global en la tabla.
   */
  public filterTable = input<boolean>(false);

  /**
   * @description
   * Campos sobre los que aplicar el filtro global.
   */
  public globalFilterFields = input<string[]>([]);

  /**
   * @description
   * Indica si se muestran avatares en las filas.
   */
  public showAvatar = input<boolean>(false);

  /**
   * @description
   * Indica si las filas pueden expandirse para mostrar detalles.
   */
  public rowExpand = input<boolean>(false);

  /**
   * @description
   * Indica si se muestra el menu contextual.
   */
  public menuContext = input<boolean>(false);

  /**
   * @description
   * Items del menu contextual, puede ser una lista o una funcion que devuelve la lista.
   */
  public contextMenuItems = input<MenuItem[] | ((row: TableRow) => MenuItem[])>([]);
}
