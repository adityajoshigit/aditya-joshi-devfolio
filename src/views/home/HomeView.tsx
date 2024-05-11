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
        className="my-1"
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
      <div className="flex flex-row justify-between items-center mt-2">
        <button
          className={`
            p-4 
            rounded-md 
            ${textColorScheme.black[50]} 
            ${bgColorScheme.lime[500]}
            focus:outline-none focus:ring
            hover:${bgColorScheme.lime[600]} hover:scale-105 hover:transition
            active:${bgColorScheme.lime[700]} 
          `}
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
        <button
          className={`
            p-4 
            rounded-md 
            ${textColorScheme.black[50]} 
            ${bgColorScheme.lime[500]}
            focus:outline-none focus:ring
            hover:${bgColorScheme.lime[600]} hover:scale-105 hover:transition
            active:${bgColorScheme.lime[700]} 
          `}
          onClick={(
            event: React.MouseEvent<
              HTMLButtonElement,
              MouseEvent
            >
          ) => {
            event.preventDefault();
          }}>
          Checkout My Resume
        </button>
      </div>
    </>
  );
}

export default HomeView;
