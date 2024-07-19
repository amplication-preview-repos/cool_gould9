import { MaintenanceRecord } from "../maintenanceRecord/MaintenanceRecord";

export type TowerSite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  maintenanceRecords?: Array<MaintenanceRecord>;
};
