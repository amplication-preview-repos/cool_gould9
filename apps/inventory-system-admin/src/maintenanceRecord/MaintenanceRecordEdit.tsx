import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TowerSiteTitle } from "../towerSite/TowerSiteTitle";
import { TechnicianTitle } from "../technician/TechnicianTitle";

export const MaintenanceRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="details" multiline source="details" />
        <NumberInput label="cost" source="cost" />
        <ReferenceInput
          source="towerSite.id"
          reference="TowerSite"
          label="TowerSite"
        >
          <SelectInput optionText={TowerSiteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="technician.id"
          reference="Technician"
          label="Technician"
        >
          <SelectInput optionText={TechnicianTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
