import { MaintenanceRecordCreateNestedManyWithoutTechniciansInput } from "./MaintenanceRecordCreateNestedManyWithoutTechniciansInput";

export type TechnicianCreateInput = {
  name?: string | null;
  contact?: string | null;
  maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutTechniciansInput;
};
