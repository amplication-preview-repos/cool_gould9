import { StringFilter } from "../../util/StringFilter";
import { MaintenanceRecordListRelationFilter } from "../maintenanceRecord/MaintenanceRecordListRelationFilter";

export type TowerSiteWhereInput = {
  id?: StringFilter;
  maintenanceRecords?: MaintenanceRecordListRelationFilter;
};
