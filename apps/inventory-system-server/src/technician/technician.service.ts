import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TechnicianServiceBase } from "./base/technician.service.base";

@Injectable()
export class TechnicianService extends TechnicianServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
