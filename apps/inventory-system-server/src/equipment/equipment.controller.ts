import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EquipmentService } from "./equipment.service";
import { EquipmentControllerBase } from "./base/equipment.controller.base";

@swagger.ApiTags("equipment")
@common.Controller("equipment")
export class EquipmentController extends EquipmentControllerBase {
  constructor(
    protected readonly service: EquipmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
