import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IContactFormValues } from "../../types";

export interface IFormProps {
  onSubmit: SubmitHandler<IContactFormValues>;
  children: ReactNode;
}

function Form({ onSubmit, children }: IFormProps) {
  const { handleSubmit } = useForm<IContactFormValues>();
  return (
    <form
      onSubmit={(_: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(onSubmit);
      }}>
      {children}
    </form>
  );
}

export default Form;
