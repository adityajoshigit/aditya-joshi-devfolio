import { useForm, SubmitHandler } from "react-hook-form";
import { IContactFormValues } from "../../types";

interface IContactFormProps {}

function ContactForm({}: IContactFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactFormValues>();

  const onSubmit: SubmitHandler<IContactFormValues> = (
    data: IContactFormValues
  ) => console.log(data);

  return <form></form>;
}

export default ContactForm;
