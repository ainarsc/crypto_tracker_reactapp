import React from "react";
import Switch from "@material-ui/core/Switch";

export default function DarkModeToggle() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
