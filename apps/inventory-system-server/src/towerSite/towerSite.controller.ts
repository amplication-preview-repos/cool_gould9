import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TowerSiteService } from "./towerSite.service";
import { TowerSiteControllerBase } from "./base/towerSite.controller.base";

@swagger.ApiTags("towerSites")
@common.Controller("towerSites")
export class TowerSiteController extends TowerSiteControllerBase {
  constructor(
    protected readonly service: TowerSiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
