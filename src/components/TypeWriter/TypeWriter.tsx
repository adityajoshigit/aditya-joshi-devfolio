import TypewriterComponent, {
  TypewriterClass,
} from "typewriter-effect";
import { TypeWriterFeedType } from "../../types";
import translateTypewriterFeed from "../../utils/translateTypewriterFeed";

export interface ITypeWriterProps {
  feed?: TypeWriterFeedType;
  playInLoop?: boolean;
  className?: string;
}

function TypeWriter({
  feed = [],
  playInLoop = false,
  className = "",
}: ITypeWriterProps) {
  return (
    <div className={className}>
      <TypewriterComponent
        options={{ loop: playInLoop }}
        onInit={(typewriter: TypewriterClass) => {
          const typewriterInstance =
            translateTypewriterFeed(typewriter, feed);
          typewriterInstance.start();
        }}
      />
    </div>
  );
}

export default TypeWriter;
