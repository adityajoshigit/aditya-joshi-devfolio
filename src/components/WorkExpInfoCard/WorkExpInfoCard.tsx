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
        "group min-h-fit flex ",
        className,
        {
          "flex-row": align === "left",
          "flex-row-reverse items-start ":
            align === "right",
        }
      )}>
      <div
        className={classNames(
          `w-1/2 p-2 flex flex-col 
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
        <span>{company}</span>
        <span>{tenure}</span>
      </div>
      <div className="group-hover:bg-gray-100 p-2 w-1/2 transition duration-200">
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
