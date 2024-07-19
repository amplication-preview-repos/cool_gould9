import { MaintenanceRecord } from "../maintenanceRecord/MaintenanceRecord";

export type Technician = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  contact: string | null;
  maintenanceRecords?: Array<MaintenanceRecord>;
};
