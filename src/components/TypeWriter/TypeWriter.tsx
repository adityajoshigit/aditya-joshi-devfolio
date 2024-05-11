import TypewriterComponent, {
  TypewriterClass,
} from "typewriter-effect";
import { TypeWriterFeedType } from "../../types";
import translateTypewriterFeed from "../../utils/translateTypewriterFeed";

export interface ITypeWriterProps {
  feed?: TypeWriterFeedType;
  playInLoop?: boolean;
}

function TypeWriter({
  feed = [],
  playInLoop = false,
}: ITypeWriterProps) {
  return (
    <TypewriterComponent
      options={{ loop: playInLoop }}
      onInit={(typewriter: TypewriterClass) => {
        const typewriterInstance = translateTypewriterFeed(
          typewriter,
          feed
        );
        typewriterInstance.start();
      }}
    />
  );
}

export default TypeWriter;
