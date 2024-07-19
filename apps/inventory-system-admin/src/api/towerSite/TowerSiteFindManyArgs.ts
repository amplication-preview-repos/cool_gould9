import { TowerSiteWhereInput } from "./TowerSiteWhereInput";
import { TowerSiteOrderByInput } from "./TowerSiteOrderByInput";

export type TowerSiteFindManyArgs = {
  where?: TowerSiteWhereInput;
  orderBy?: Array<TowerSiteOrderByInput>;
  skip?: number;
  take?: number;
};
