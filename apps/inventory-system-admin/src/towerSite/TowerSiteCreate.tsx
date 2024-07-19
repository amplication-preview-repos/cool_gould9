import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { MaintenanceRecordTitle } from "../maintenanceRecord/MaintenanceRecordTitle";

export const TowerSiteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="maintenanceRecords"
          reference="MaintenanceRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
