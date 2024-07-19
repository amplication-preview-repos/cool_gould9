/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TechnicianService } from "../technician.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TechnicianCreateInput } from "./TechnicianCreateInput";
import { Technician } from "./Technician";
import { TechnicianFindManyArgs } from "./TechnicianFindManyArgs";
import { TechnicianWhereUniqueInput } from "./TechnicianWhereUniqueInput";
import { TechnicianUpdateInput } from "./TechnicianUpdateInput";
import { MaintenanceRecordFindManyArgs } from "../../maintenanceRecord/base/MaintenanceRecordFindManyArgs";
import { MaintenanceRecord } from "../../maintenanceRecord/base/MaintenanceRecord";
import { MaintenanceRecordWhereUniqueInput } from "../../maintenanceRecord/base/MaintenanceRecordWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TechnicianControllerBase {
  constructor(
    protected readonly service: TechnicianService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Technician })
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTechnician(
    @common.Body() data: TechnicianCreateInput
  ): Promise<Technician> {
    return await this.service.createTechnician({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        contact: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Technician] })
  @ApiNestedQuery(TechnicianFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async technicians(@common.Req() request: Request): Promise<Technician[]> {
    const args = plainToClass(TechnicianFindManyArgs, request.query);
    return this.service.technicians({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        contact: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Technician })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async technician(
    @common.Param() params: TechnicianWhereUniqueInput
  ): Promise<Technician | null> {
    const result = await this.service.technician({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        contact: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Technician })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTechnician(
    @common.Param() params: TechnicianWhereUniqueInput,
    @common.Body() data: TechnicianUpdateInput
  ): Promise<Technician | null> {
    try {
      return await this.service.updateTechnician({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          contact: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Technician })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTechnician(
    @common.Param() params: TechnicianWhereUniqueInput
  ): Promise<Technician | null> {
    try {
      return await this.service.deleteTechnician({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          contact: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/maintenanceRecords")
  @ApiNestedQuery(MaintenanceRecordFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceRecord",
    action: "read",
    possession: "any",
  })
  async findMaintenanceRecords(
    @common.Req() request: Request,
    @common.Param() params: TechnicianWhereUniqueInput
  ): Promise<MaintenanceRecord[]> {
    const query = plainToClass(MaintenanceRecordFindManyArgs, request.query);
    const results = await this.service.findMaintenanceRecords(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        details: true,
        cost: true,

        towerSite: {
          select: {
            id: true,
          },
        },

        technician: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/maintenanceRecords")
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "update",
    possession: "any",
  })
  async connectMaintenanceRecords(
    @common.Param() params: TechnicianWhereUniqueInput,
    @common.Body() body: MaintenanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceRecords: {
        connect: body,
      },
    };
    await this.service.updateTechnician({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/maintenanceRecords")
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "update",
    possession: "any",
  })
  async updateMaintenanceRecords(
    @common.Param() params: TechnicianWhereUniqueInput,
    @common.Body() body: MaintenanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceRecords: {
        set: body,
      },
    };
    await this.service.updateTechnician({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/maintenanceRecords")
  @nestAccessControl.UseRoles({
    resource: "Technician",
    action: "update",
    possession: "any",
  })
  async disconnectMaintenanceRecords(
    @common.Param() params: TechnicianWhereUniqueInput,
    @common.Body() body: MaintenanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceRecords: {
        disconnect: body,
      },
    };
    await this.service.updateTechnician({
      where: params,
      data,
      select: { id: true },
    });
  }
}
