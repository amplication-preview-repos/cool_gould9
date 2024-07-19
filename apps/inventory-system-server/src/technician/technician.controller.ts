import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TechnicianService } from "./technician.service";
import { TechnicianControllerBase } from "./base/technician.controller.base";

@swagger.ApiTags("technicians")
@common.Controller("technicians")
export class TechnicianController extends TechnicianControllerBase {
  constructor(
    protected readonly service: TechnicianService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
