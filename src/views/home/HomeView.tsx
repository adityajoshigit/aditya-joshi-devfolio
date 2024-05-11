import { TypeWriter } from "../../components";
// import {
//   textColorScheme,
//   bgColorScheme,
//   borderColorScheme,
// } from "../../constants";

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
            border-2
            border-transparent
            p-2 
            m-1
            shadow-md 
            rounded-lg
            text-white
            bg-cyan-400
            hover:bg-cyan-600 
            active:border-2 active:outline-2 active:outline-offset-4 active:border-cyan-600
            focus:border-cyan-300 focus:outline-2 focus:outline-offset-4
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
