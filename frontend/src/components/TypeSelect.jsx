import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import useTask from "../hooks/useTask";

const types = [
  {
    value: "all",
    label: "All Task",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "ongoing",
    label: "Ongoing",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "collaborative",
    label: "Collabotative Task",
  },
];

const TypeSelect = () => {
  const { getTasksByType } = useTask();
  const [selectedType, setSelectedType] = useState("");
  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedType(value);
    await getTasksByType(value);
  };

  console.log(selectedType);

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel sx={{ fontSize: "16px" }} id="type-select-label">
        Select Task Type
      </InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        value={selectedType}
        onChange={handleChange}
        input={
          <OutlinedInput label="Select Task Type" sx={{ fontSize: "16px" }} />
        }
        renderValue={(selected) => selected}
      >
        {types.map((type) => (
          <MenuItem
            sx={{ fontSize: "14px" }}
            key={type.value}
            value={type.value}
          >
            <Checkbox checked={selectedType === type.value} />
            <ListItemText
              primary={type.label}
              primaryTypographyProps={{ fontSize: "14px" }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeSelect;
