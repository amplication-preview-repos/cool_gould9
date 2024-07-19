import { Technician as TTechnician } from "../api/technician/Technician";

export const TECHNICIAN_TITLE_FIELD = "name";

export const TechnicianTitle = (record: TTechnician): string => {
  return record.name?.toString() || String(record.id);
};
