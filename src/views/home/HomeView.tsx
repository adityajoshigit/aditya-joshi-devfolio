import { TypeWriter } from "../../components";
import {
  textColorScheme,
  bgColorScheme,
} from "../../constants";

function HomeView() {
  return (
    <>
      <span>Hey, there! 👋</span>
      <TypeWriter
        feed={[
          {
            command: "TYPE",
            payload: "I'm Aditya!",
          },
          {
            command: "PAUSE_FOR",
            payload: 2000,
          },
          {
            command: "DELETE_ALL",
            payload: "",
          },
          {
            command: "TYPE",
            payload: "I'm a Software Engineer.",
          },
          {
            command: "PAUSE_FOR",
            payload: 2000,
          },
          {
            command: "DELETE_CHAR",
            payload: 9,
          },
          {
            command: "TYPE",
            payload: "Developer.",
          },
          {
            command: "PAUSE_FOR",
            payload: 2000,
          },
          {
            command: "DELETE_CHAR",
            payload: 19,
          },
          {
            command: "TYPE",
            payload: "Front End Web Developer.",
          },
          {
            command: "PAUSE_FOR",
            payload: 2000,
          },
          {
            command: "DELETE_ALL",
            payload: "",
          },
        ]}
        playInLoop
      />
      <button
        className={`${bgColorScheme.lime[500]}  hover:${bgColorScheme.lime[600]} active:${bgColorScheme.lime[700]} p-4 rounded-md focus:outline-none focus:ring ${textColorScheme.white[50]}`}
        onClick={(
          event: React.MouseEvent<
            HTMLButtonElement,
            MouseEvent
          >
        ) => {
          event.preventDefault();
        }}>
        Know More About me
      </button>
    </>
  );
}

export default HomeView;
