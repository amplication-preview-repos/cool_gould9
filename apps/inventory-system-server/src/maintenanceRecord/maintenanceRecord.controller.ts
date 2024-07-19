import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintenanceRecordService } from "./maintenanceRecord.service";
import { MaintenanceRecordControllerBase } from "./base/maintenanceRecord.controller.base";

@swagger.ApiTags("maintenanceRecords")
@common.Controller("maintenanceRecords")
export class MaintenanceRecordController extends MaintenanceRecordControllerBase {
  constructor(
    protected readonly service: MaintenanceRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
