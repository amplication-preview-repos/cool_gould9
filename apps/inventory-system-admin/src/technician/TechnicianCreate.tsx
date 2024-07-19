import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MaintenanceRecordTitle } from "../maintenanceRecord/MaintenanceRecordTitle";

export const TechnicianCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="contact" source="contact" />
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
