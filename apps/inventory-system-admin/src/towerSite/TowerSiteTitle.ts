import { TowerSite as TTowerSite } from "../api/towerSite/TowerSite";

export const TOWERSITE_TITLE_FIELD = "id";

export const TowerSiteTitle = (record: TTowerSite): string => {
  return record.id?.toString() || String(record.id);
};
