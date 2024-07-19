import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TowerSiteModuleBase } from "./base/towerSite.module.base";
import { TowerSiteService } from "./towerSite.service";
import { TowerSiteController } from "./towerSite.controller";
import { TowerSiteResolver } from "./towerSite.resolver";

@Module({
  imports: [TowerSiteModuleBase, forwardRef(() => AuthModule)],
  controllers: [TowerSiteController],
  providers: [TowerSiteService, TowerSiteResolver],
  exports: [TowerSiteService],
})
export class TowerSiteModule {}
