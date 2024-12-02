import { createContext, useContext, useState } from "react";
import { chairColors, cushionColors } from "../data/colors";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  return useContext(CustomizationContext);
};
