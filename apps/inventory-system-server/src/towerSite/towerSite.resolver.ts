import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TowerSiteResolverBase } from "./base/towerSite.resolver.base";
import { TowerSite } from "./base/TowerSite";
import { TowerSiteService } from "./towerSite.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TowerSite)
export class TowerSiteResolver extends TowerSiteResolverBase {
  constructor(
    protected readonly service: TowerSiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
