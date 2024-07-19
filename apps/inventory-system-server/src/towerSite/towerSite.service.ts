import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TowerSiteServiceBase } from "./base/towerSite.service.base";

@Injectable()
export class TowerSiteService extends TowerSiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
