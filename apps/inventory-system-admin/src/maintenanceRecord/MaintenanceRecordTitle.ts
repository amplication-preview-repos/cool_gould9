import { MaintenanceRecord as TMaintenanceRecord } from "../api/maintenanceRecord/MaintenanceRecord";

export const MAINTENANCERECORD_TITLE_FIELD = "id";

export const MaintenanceRecordTitle = (record: TMaintenanceRecord): string => {
  return record.id?.toString() || String(record.id);
};
