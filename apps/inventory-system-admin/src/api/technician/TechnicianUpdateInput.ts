import { MaintenanceRecordUpdateManyWithoutTechniciansInput } from "./MaintenanceRecordUpdateManyWithoutTechniciansInput";

export type TechnicianUpdateInput = {
  name?: string | null;
  contact?: string | null;
  maintenanceRecords?: MaintenanceRecordUpdateManyWithoutTechniciansInput;
};
