/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TowerSite } from "./TowerSite";
import { TowerSiteCountArgs } from "./TowerSiteCountArgs";
import { TowerSiteFindManyArgs } from "./TowerSiteFindManyArgs";
import { TowerSiteFindUniqueArgs } from "./TowerSiteFindUniqueArgs";
import { CreateTowerSiteArgs } from "./CreateTowerSiteArgs";
import { UpdateTowerSiteArgs } from "./UpdateTowerSiteArgs";
import { DeleteTowerSiteArgs } from "./DeleteTowerSiteArgs";
import { MaintenanceRecordFindManyArgs } from "../../maintenanceRecord/base/MaintenanceRecordFindManyArgs";
import { MaintenanceRecord } from "../../maintenanceRecord/base/MaintenanceRecord";
import { TowerSiteService } from "../towerSite.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TowerSite)
export class TowerSiteResolverBase {
  constructor(
    protected readonly service: TowerSiteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TowerSite",
    action: "read",
    possession: "any",
  })
  async _towerSitesMeta(
    @graphql.Args() args: TowerSiteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TowerSite])
  @nestAccessControl.UseRoles({
    resource: "TowerSite",
    action: "read",
    possession: "any",
  })
  async towerSites(
    @graphql.Args() args: TowerSiteFindManyArgs
  ): Promise<TowerSite[]> {
    return this.service.towerSites(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TowerSite, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TowerSite",
    action: "read",
    possession: "own",
  })
  async towerSite(
    @graphql.Args() args: TowerSiteFindUniqueArgs
  ): Promise<TowerSite | null> {
    const result = await this.service.towerSite(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TowerSite)
  @nestAccessControl.UseRoles({
    resource: "TowerSite",
    action: "create",
    possession: "any",
  })
  async createTowerSite(
    @graphql.Args() args: CreateTowerSiteArgs
  ): Promise<TowerSite> {
    return await this.service.createTowerSite({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TowerSite)
  @nestAccessControl.UseRoles({
    resource: "TowerSite",
    action: "update",
    possession: "any",
  })
  async updateTowerSite(
    @graphql.Args() args: UpdateTowerSiteArgs
  ): Promise<TowerSite | null> {
    try {
      return await this.service.updateTowerSite({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TowerSite)
  @nestAccessControl.UseRoles({
    resource: "TowerSite",
    action: "delete",
    possession: "any",
  })
  async deleteTowerSite(
    @graphql.Args() args: DeleteTowerSiteArgs
  ): Promise<TowerSite | null> {
    try {
      return await this.service.deleteTowerSite(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MaintenanceRecord], {
    name: "maintenanceRecords",
  })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceRecord",
    action: "read",
    possession: "any",
  })
  async findMaintenanceRecords(
    @graphql.Parent() parent: TowerSite,
    @graphql.Args() args: MaintenanceRecordFindManyArgs
  ): Promise<MaintenanceRecord[]> {
    const results = await this.service.findMaintenanceRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
