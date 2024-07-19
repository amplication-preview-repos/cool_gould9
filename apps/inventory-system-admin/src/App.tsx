import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TowerSiteList } from "./towerSite/TowerSiteList";
import { TowerSiteCreate } from "./towerSite/TowerSiteCreate";
import { TowerSiteEdit } from "./towerSite/TowerSiteEdit";
import { TowerSiteShow } from "./towerSite/TowerSiteShow";
import { EquipmentList } from "./equipment/EquipmentList";
import { EquipmentCreate } from "./equipment/EquipmentCreate";
import { EquipmentEdit } from "./equipment/EquipmentEdit";
import { EquipmentShow } from "./equipment/EquipmentShow";
import { TechnicianList } from "./technician/TechnicianList";
import { TechnicianCreate } from "./technician/TechnicianCreate";
import { TechnicianEdit } from "./technician/TechnicianEdit";
import { TechnicianShow } from "./technician/TechnicianShow";
import { MaintenanceRecordList } from "./maintenanceRecord/MaintenanceRecordList";
import { MaintenanceRecordCreate } from "./maintenanceRecord/MaintenanceRecordCreate";
import { MaintenanceRecordEdit } from "./maintenanceRecord/MaintenanceRecordEdit";
import { MaintenanceRecordShow } from "./maintenanceRecord/MaintenanceRecordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventorySystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TowerSite"
          list={TowerSiteList}
          edit={TowerSiteEdit}
          create={TowerSiteCreate}
          show={TowerSiteShow}
        />
        <Resource
          name="Equipment"
          list={EquipmentList}
          edit={EquipmentEdit}
          create={EquipmentCreate}
          show={EquipmentShow}
        />
        <Resource
          name="Technician"
          list={TechnicianList}
          edit={TechnicianEdit}
          create={TechnicianCreate}
          show={TechnicianShow}
        />
        <Resource
          name="MaintenanceRecord"
          list={MaintenanceRecordList}
          edit={MaintenanceRecordEdit}
          create={MaintenanceRecordCreate}
          show={MaintenanceRecordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
