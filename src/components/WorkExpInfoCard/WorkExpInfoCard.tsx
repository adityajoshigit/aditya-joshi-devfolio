import classNames from "classnames";
import { ShowMoreLayout } from "../";
import { WorkExpDetailsType } from "../../types";

type AlignmentType = "left" | "right";

export interface IWorkExpInfoCardProps
  extends WorkExpDetailsType {
  className?: string;
  align?: AlignmentType;
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
        "group min-h-fit grid grid-cols-1 gap-1",
        className
      )}>
      <div className="gap-0 grid grid-cols-2">
        <div
          className={classNames(
            `p-2 flex flex-col 
          group-hover:bg-cyan-400 
          group-hover:text-white
          transition duration-200
          justify-center 
          `,
            {
              " items-end  border-r border-r-cyan-600":
                align === "left",
              " items-start  border-l border-l-cyan-600":
                align === "right",
            }
          )}>
          <span>{role}</span>
          <p className="text-ellipsis">{company}</p>
          <span>{tenure}</span>
        </div>
        <div className="group-hover:bg-gray-100 p-2 transition duration-200">
          <ShowMoreLayout className="text-gray-500 text-sm">
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
          </ShowMoreLayout>
        </div>
      </div>
    </div>
  );
}

export default WorkExpInfoCard;
