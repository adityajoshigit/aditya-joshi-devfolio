import { TypeWriter } from "../../components";

export interface IHomeViewProps {}

function HomeView({}: IHomeViewProps) {
  return (
    <div className="">
      <span>Welcome</span>
      <TypeWriter
        feed={[
          {
            command: "TYPE",
            payload: "Hello, I'm Aditya!",
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
            payload: 18,
          },
          {
            command: "TYPE",
            payload: "Software Developer.",
          },
          {
            command: "PAUSE_FOR",
            payload: 2000,
          },
          {
            command: "DELETE_CHAR",
            payload: 18,
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
