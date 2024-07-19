import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TechnicianModuleBase } from "./base/technician.module.base";
import { TechnicianService } from "./technician.service";
import { TechnicianController } from "./technician.controller";
import { TechnicianResolver } from "./technician.resolver";

@Module({
  imports: [TechnicianModuleBase, forwardRef(() => AuthModule)],
  controllers: [TechnicianController],
  providers: [TechnicianService, TechnicianResolver],
  exports: [TechnicianService],
})
export class TechnicianModule {}
