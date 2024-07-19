import { Equipment as TEquipment } from "../api/equipment/Equipment";

export const EQUIPMENT_TITLE_FIELD = "id";

export const EquipmentTitle = (record: TEquipment): string => {
  return record.id?.toString() || String(record.id);
};
