import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceRecordModuleBase } from "./base/maintenanceRecord.module.base";
import { MaintenanceRecordService } from "./maintenanceRecord.service";
import { MaintenanceRecordController } from "./maintenanceRecord.controller";
import { MaintenanceRecordResolver } from "./maintenanceRecord.resolver";

@Module({
  imports: [MaintenanceRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceRecordController],
  providers: [MaintenanceRecordService, MaintenanceRecordResolver],
  exports: [MaintenanceRecordService],
})
export class MaintenanceRecordModule {}
