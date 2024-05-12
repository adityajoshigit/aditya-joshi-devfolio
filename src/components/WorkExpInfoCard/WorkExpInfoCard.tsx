import classNames from "classnames";
import { ShowMoreLayout } from "../";

type AlignmentType = "left" | "right";

export interface IWorkExpInfoCardProps {
  className?: string;
  align?: AlignmentType;
  role: string;
  company: string;
  tenure: string;
}

function WorkExpInfoCard({
  className = "",
  align = "left",
  role,
  company,
  tenure,
}: IWorkExpInfoCardProps) {
  return (
    <div
      className={classNames(
        "group min-h-fit grid grid-cols-1 gap-0 md:grid-cols-2",
        className
      )}>
      <div
        className={classNames(
          `p-2 border-r border-r-cyan-600 flex flex-col justify-center 
          group-hover:bg-cyan-400 
          group-hover:text-white
          transition duration-200
          `,
          {
            "items-end ": align === "left",
            "items-start ": align === "right",
          }
        )}>
        <span>{role}</span>
        <span>{company}</span>
        <span>{tenure}</span>
      </div>
      <div className="group-hover:bg-gray-100 p-2 transition duration-200">
        <ShowMoreLayout>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio magnam
            quibusdam recusandae consequuntur cum nisi.
            Laudantium cumque adipisci nihil sunt atque,
            eveniet aspernatur! Delectus quas eius iusto
            laudantium adipisci tempora. Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
            Voluptatem pariatur error, sapiente officia
            eaque voluptatum adipisci ea est asperiores vel
            tempora magni deserunt cumque saepe perspiciatis
            natus. Debitis, eum perferendis!Lorem Lorem
            ipsum dolor, sit amet consectetur adipisicing
            elit. Eius blanditiis dolor veniam porro odit
            earum quod? Quod voluptas, praesentium fugiat
            iure laboriosam eius quas, nisi expedita minus
            cupiditate, dignissimos neque.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio magnam
            quibusdam recusandae consequuntur cum nisi.
            Laudantium cumque adipisci nihil sunt atque,
            eveniet aspernatur! Delectus quas eius iusto
            laudantium adipisci tempora. Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
            Voluptatem pariatur error, sapiente officia
            eaque voluptatum adipisci ea est asperiores vel
            tempora magni deserunt cumque saepe perspiciatis
            natus. Debitis, eum perferendis!Lorem Lorem
            ipsum dolor, sit amet consectetur adipisicing
            elit. Eius blanditiis dolor veniam porro odit
            earum quod? Quod voluptas, praesentium fugiat
            iure laboriosam eius quas, nisi expedita minus
            cupiditate, dignissimos neque.
          </p>
        </ShowMoreLayout>
      </div>
    </div>
  );
}

export default WorkExpInfoCard;
