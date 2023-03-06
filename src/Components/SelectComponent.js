import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import "../Styles/SelectComponent.css";

const SelectComponent = (props) => {
  return (
    <div className="select-component">
      <p className="select-title">{props.title}</p>
      <FormControl fullWidth error={props.error}>
        {props.children}
        <FormHelperText>{props.errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
