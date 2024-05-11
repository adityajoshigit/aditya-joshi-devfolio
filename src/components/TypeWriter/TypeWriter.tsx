import TypewriterComponent, {
  TypewriterClass,
} from "typewriter-effect";
import { isArray } from "lodash";

export interface ITypeWriterProps {
  text: string | string[];
}

function TypeWriter({ text }: ITypeWriterProps) {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        strings: isArray(text) ? text : [text as string],
        loop: true,
      }}
    />
  );
}

export default TypeWriter;
