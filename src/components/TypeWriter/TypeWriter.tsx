import TypewriterComponent, {
  TypewriterClass,
} from "typewriter-effect";
import { isArray } from "lodash";

export interface ITypeWriterProps {
  text: string | string[];
}

function TypeWriter({ text }: ITypeWriterProps) {
  const onInit = (typewriterInstance: TypewriterClass) => {
    const stringsToType = isArray(text)
      ? [...(text as string[])]
      : [text];
    let i = 0;
    do {
      typewriterInstance
        .typeString(stringsToType[i])
        .pauseFor(2000)
        .deleteAll()
        .start();
      if (i === stringsToType.length - 1) i = 0;
      else i = i + 1;
    } while (i <= stringsToType.length);
  };
  return <TypewriterComponent onInit={onInit} />;
}

export default TypeWriter;
