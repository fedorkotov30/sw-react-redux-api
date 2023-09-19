import UiInput from "./UiInput";
import { useState } from "react";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
};

const Template = (arg) => {
  const [value, setValue] = useState("");
  const handleInputChange = (value) => {
    setValue(value);
  };

  return (
    <UiInput
      {...arg}
      value={value}
      handleInputChange={handleInputChange}
    ></UiInput>
  );
};

const porps = {
  value: "",
  handleInputChange: () => console.log("Input Change"),
  placeholder: "Placeholder",
  classes: "PropTypes.string",
};

export const Default = Template.bind({});
Default.args = {
  ...porps,
};
