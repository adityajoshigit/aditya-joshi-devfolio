import { TypeWriter } from "../../components";

export interface IHomeViewProps {}

function HomeView({}: IHomeViewProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-orange-100 w-full h-[500px]">
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
    </div>
  );
}

export default HomeView;
