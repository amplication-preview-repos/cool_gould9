import { TechnicianWhereInput } from "./TechnicianWhereInput";
import { TechnicianOrderByInput } from "./TechnicianOrderByInput";

export type TechnicianFindManyArgs = {
  where?: TechnicianWhereInput;
  orderBy?: Array<TechnicianOrderByInput>;
  skip?: number;
  take?: number;
};
