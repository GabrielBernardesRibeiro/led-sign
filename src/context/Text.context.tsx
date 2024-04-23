import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface TextInterface {
  currentText: string;
  setCurrentText: Dispatch<SetStateAction<string>>;
  colorText: string;
  setColorText: Dispatch<SetStateAction<string>>;
  blinkColorText: string;
  setBlinkColorText: Dispatch<SetStateAction<string>>;
  textIsBlinking: boolean;
  setTextIsBlinking: Dispatch<SetStateAction<boolean>>;
  backgroundColorText: string;
  setBackgroundColorText: Dispatch<SetStateAction<string>>;
  blinkBackgroundColorText: string;
  setBlinkBackgroundColorText: Dispatch<SetStateAction<string>>;
  backgroundColorIsBlinking: boolean;
  setBackgroundColorIsBlinking: Dispatch<SetStateAction<boolean>>;
  textSpeed: number;
  setTextSpeed: Dispatch<SetStateAction<number>>;
  handleTextSpeed: (newSpeed: number) => void;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const TextContext = createContext<TextInterface>({
  currentText: "",
  setCurrentText: () => console.warn("setCurrentText not ready yet"),
  colorText: "",
  setColorText: () => console.warn("setColorText not ready yet"),
  blinkColorText: "",
  setBlinkColorText: () => console.warn("setBlinkColorText not ready yet"),
  textIsBlinking: false,
  setTextIsBlinking: () => console.warn("setTextIsBlinking not ready yet"),
  backgroundColorText: "",
  setBackgroundColorText: () =>
    console.warn("setBackgroundColorText not ready yet"),
  blinkBackgroundColorText: "",
  setBlinkBackgroundColorText: () =>
    console.warn("setBlinkBackgroundColorText not ready yet"),
  backgroundColorIsBlinking: false,
  setBackgroundColorIsBlinking: () =>
    console.warn("setBackgroundColorIsBlinking not ready yet"),
  textSpeed: 50,
  setTextSpeed: () => console.warn("setTextSpeed not ready yet"),
  handleTextSpeed: () => console.warn("handleTextSpeed not ready yet"),
  show: false,
  setShow: () => console.warn("setShow not ready yet"),
});

export const TextProvider = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const [currentText, setCurrentText] = useState<string>("Digite seu texto");

  const [colorText, setColorText] = useState<string>("white");
  const [blinkColorText, setBlinkColorText] = useState<string>("green");
  const [textIsBlinking, setTextIsBlinking] = useState<boolean>(false);

  const [backgroundColorText, setBackgroundColorText] =
    useState<string>("black");
  const [blinkBackgroundColorText, setBlinkBackgroundColorText] =
    useState<string>("blue");
  const [backgroundColorIsBlinking, setBackgroundColorIsBlinking] =
    useState<boolean>(false);

  const [textSpeed, setTextSpeed] = useState<number>(50);

  const handleTextSpeed = (newSpeed: number) => {
    setBackgroundColorIsBlinking(false);
    setTextIsBlinking(false);
    setTextSpeed(newSpeed);
  };

  useEffect(() => {}, []);

  return (
    <TextContext.Provider
      value={{
        currentText,
        setCurrentText,
        colorText,
        setColorText,
        blinkColorText,
        setBlinkColorText,
        textIsBlinking,
        setTextIsBlinking,
        backgroundColorText,
        setBackgroundColorText,
        blinkBackgroundColorText,
        setBlinkBackgroundColorText,
        backgroundColorIsBlinking,
        setBackgroundColorIsBlinking,
        textSpeed,
        setTextSpeed,
        handleTextSpeed,
        show,
        setShow,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
