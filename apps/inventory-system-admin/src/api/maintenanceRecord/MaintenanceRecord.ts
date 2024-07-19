import { TowerSite } from "../towerSite/TowerSite";
import { Technician } from "../technician/Technician";

export type MaintenanceRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  details: string | null;
  cost: number | null;
  towerSite?: TowerSite | null;
  technician?: Technician | null;
};
