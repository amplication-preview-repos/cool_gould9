import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EquipmentModuleBase } from "./base/equipment.module.base";
import { EquipmentService } from "./equipment.service";
import { EquipmentController } from "./equipment.controller";
import { EquipmentResolver } from "./equipment.resolver";

@Module({
  imports: [EquipmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [EquipmentController],
  providers: [EquipmentService, EquipmentResolver],
  exports: [EquipmentService],
})
export class EquipmentModule {}
