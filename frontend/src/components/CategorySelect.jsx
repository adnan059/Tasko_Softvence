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

const categories = [
  { value: "artsAndCraft", label: "Arts & Craft" },
  { value: "nature", label: "Nature" },
  { value: "family", label: "Family" },
  { value: "sports", label: "Sports" },
  { value: "friends", label: "Friends" },
  { value: "meditation", label: "Meditation" },
];

const CategorySelect = () => {
  const { getTasksByCategory } = useTask();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
    await getTasksByCategory(value);
  };

  console.log(selectedCategory);

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel sx={{ fontSize: "16px" }} id="category-select-label">
        Select Task Category
      </InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        onChange={handleChange}
        input={
          <OutlinedInput
            label="Select Task Category"
            sx={{ fontSize: "16px" }}
          />
        }
        renderValue={(selected) => selected}
      >
        {categories.map((category) => (
          <MenuItem
            sx={{ fontSize: "14px" }}
            key={category.value}
            value={category.value}
          >
            <Checkbox checked={selectedCategory === category.value} />
            <ListItemText
              primary={category.label}
              primaryTypographyProps={{ fontSize: "14px" }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
