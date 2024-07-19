import { TowerSiteWhereUniqueInput } from "../towerSite/TowerSiteWhereUniqueInput";
import { TechnicianWhereUniqueInput } from "../technician/TechnicianWhereUniqueInput";

export type MaintenanceRecordCreateInput = {
  date?: Date | null;
  details?: string | null;
  cost?: number | null;
  towerSite?: TowerSiteWhereUniqueInput | null;
  technician?: TechnicianWhereUniqueInput | null;
};
