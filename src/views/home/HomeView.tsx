import { TypeWriter } from "../../components";

export interface IHomeViewProps {}

function HomeView({}: IHomeViewProps) {
  return (
    <div className="">
      <span>Welcome</span>
      <TypeWriter text="I am a Software Developer." />
    </div>
  );
}

export default HomeView;
