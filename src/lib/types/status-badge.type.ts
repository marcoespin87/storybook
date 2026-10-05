import { StatusBadgeEnum } from '../enums';

/**
 * @description
 * Tipo que representa los posibles estados de un badge.
 * Los valores posibles corresponden a los definidos en StatusBadgeEnum:
 * SUCCESS, WARNING, ERROR, INFORMATIVE y NEUTRAL.
 */
export type StatusBadge =
  | StatusBadgeEnum.SUCCESS
  | StatusBadgeEnum.WARNING
  | StatusBadgeEnum.ERROR
  | StatusBadgeEnum.INFORMATIVE
  | StatusBadgeEnum.NEUTRAL;
