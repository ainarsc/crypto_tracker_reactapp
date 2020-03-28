import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function DarkModeSwitch() {
  const [on, setOn] = React.useState(true);

  const handleChange = () => {
    setOn(!on);
  };

  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <Switch checked={on} onChange={handleChange} name="darkMode" />
        }
        label={on ? "On" : "Off"}
      />
    </FormControl>
  );
}
