import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { MaintenanceRecordTitle } from "../maintenanceRecord/MaintenanceRecordTitle";

export const TowerSiteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
