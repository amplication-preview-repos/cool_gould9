import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MaintenanceRecordListRelationFilter } from "../maintenanceRecord/MaintenanceRecordListRelationFilter";

export type TechnicianWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  contact?: StringNullableFilter;
  maintenanceRecords?: MaintenanceRecordListRelationFilter;
};
