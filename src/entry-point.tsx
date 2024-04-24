import { useContext } from "react";
import { TextContext } from "./context/Text.context";
import Main from "./Main";
import Show from "./show";

const EntryPoint = () => {
  const { show } = useContext(TextContext);

  return (
    <>
      {show && <Show />}
      {!show && <Main />}
    </>
  );
};

export default EntryPoint;
