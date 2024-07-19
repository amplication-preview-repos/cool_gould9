import { SortOrder } from "../../util/SortOrder";

export type MaintenanceRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  cost?: SortOrder;
  towerSiteId?: SortOrder;
  technicianId?: SortOrder;
};
