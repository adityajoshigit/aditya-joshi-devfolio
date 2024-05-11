import { TypewriterClass } from "typewriter-effect";
import { TypeWriterFeedType } from "../types";

const translateTypewriterFeed: (
  typewriterClassInstance: TypewriterClass,
  feed: TypeWriterFeedType
) => TypewriterClass = (typewriterClassInstance, feed) => {
  feed.forEach(({ command, payload }) => {
    switch (command) {
      case "TYPE":
        typewriterClassInstance =
          typewriterClassInstance.typeString(
            payload as string
          );
        break;
      case "DELETE_ALL":
        typewriterClassInstance =
          typewriterClassInstance.deleteAll();
        break;
      case "DELETE_CHAR":
        typewriterClassInstance =
          typewriterClassInstance.deleteChars(
            payload as number
          );
        break;
      case "PAUSE_FOR":
        typewriterClassInstance =
          typewriterClassInstance.pauseFor(
            payload as number
          );
        break;
      default:
        break;
    }
  });

  return typewriterClassInstance;
};

export default translateTypewriterFeed;
