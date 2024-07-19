import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TOWERSITE_TITLE_FIELD } from "../towerSite/TowerSiteTitle";
import { TECHNICIAN_TITLE_FIELD } from "../technician/TechnicianTitle";

export const MaintenanceRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MaintenanceRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="details" source="details" />
        <TextField label="cost" source="cost" />
        <ReferenceField
          label="TowerSite"
          source="towersite.id"
          reference="TowerSite"
        >
          <TextField source={TOWERSITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Technician"
          source="technician.id"
          reference="Technician"
        >
          <TextField source={TECHNICIAN_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
