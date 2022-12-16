import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";

import * as Styles from "./Styles";
import { OPTIONS } from "../../Constants/Constants";
import { useForm } from "../../hooks/useForm";

export const Select = () => {

  const { states, setters } = useContext(GlobalStateContext);

  const SelectOptions = OPTIONS && OPTIONS.map((option, i) => {
    return (
      <option key={i} value={option}>{option}</option>
    );
  });

  const { form, onChange } = useForm({
    choice: ""
  });

  useEffect(() => {
    setters.setLotoName(!states.lotoName ? "Mega-Sena" : form.choice)
    // eslint-disable-next-line
  }, [form.choice])

  return (
    <Styles.Select name="choice" onChange={onChange}>
      {SelectOptions}
    </Styles.Select>
  );
};