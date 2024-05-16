import { TypeWriter } from "../../components";

function HomeView() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center ps-4 md:ps-0 bg-slate-50 w-full min-h-[100vh]">
      <img
        src="/images/prof_pic_asj.PNG"
        alt="Profile"
        className="md:hidden my-10 rounded-full"
        width={160}
        height={160}
      />
      <span className="my-10 text-4xl md:text-2xl poppins-light">
        Hey, there! 👋
      </span>
      <span className="mt-10 mb-5 text-5xl text-center md:text-4xl poppins-medium">
        I'm Aditya!
      </span>
      <TypeWriter
        className="mt-5 md:mb-10 text-3xl text-center md:text-2xl"
        feed={[
          {
            command: "TYPE",
            payload: "Software Engineer",
          },
          {
            command: "PAUSE_FOR",
            payload: 2000,
          },
          {
            command: "DELETE_CHAR",
            payload: 8,
          },
          {
            command: "TYPE",
            payload: "Developer",
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
            payload: "Front End Web Developer",
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
      <div className="flex md:flex-row flex-col justify-center items-center w-full">
        <button
          className={`
          border-2 border-cyan-400 bg-cyan-400 hover:bg-cyan-600 hover:border-cyan-600 p-2 rounded-lg text-2xl text-white outline-transparent md:mx-4 mx-10 lg:mx-10 my-10 md:text-base
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
          className="border-2 border-gray-800 bg-white hover:bg-gray-800 mx-10 md:mx-4 lg:mx-10 my-10 p-2 rounded-lg text-2xl md:text-base hover:text-white outline-transparent"
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
    </div>
  );
}

export default HomeView;
