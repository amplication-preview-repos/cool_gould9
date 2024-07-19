import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TowerSiteWhereUniqueInput } from "../towerSite/TowerSiteWhereUniqueInput";
import { TechnicianWhereUniqueInput } from "../technician/TechnicianWhereUniqueInput";

export type MaintenanceRecordWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  cost?: FloatNullableFilter;
  towerSite?: TowerSiteWhereUniqueInput;
  technician?: TechnicianWhereUniqueInput;
};
