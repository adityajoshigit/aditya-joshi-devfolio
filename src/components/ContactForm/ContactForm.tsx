import { useForm } from "react-hook-form";
import { IContactFormValues } from "../../types";
import { Form } from "../Form";
import classNames from "classnames";

function ContactForm() {
  const {
    register,
    formState: {
      errors: {
        name: nameError,
        email: emailError,
        comment: commentError,
      },
    },
    handleSubmit,
  } = useForm<IContactFormValues>();

  const disabled =
    !nameError && !emailError && !commentError;

  const onSubmit = (data: IContactFormValues) => {
    const submitPromise = new Promise<IContactFormValues>(
      resolve => {
        setTimeout(() => resolve(data), 2000);
      }
    );
    submitPromise.then((_: IContactFormValues) => {
      alert("Thank you for your feedback!");
    });
  };

  const onButtonClick = () => {
    handleSubmit(onSubmit);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name goes here.."
          {...register("name", { required: true })}
          className="border-cyan-300 col-span-2 sm:col-span-1 mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
        />
        {nameError && <p>Please enter your name.</p>}
        <input
          type="email"
          placeholder="Your email goes here.."
          {...register("email", { required: true })}
          className="border-cyan-300 col-span-2 sm:col-span-1 mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
        />
        {emailError && (
          <p>Would you mind providing your email?</p>
        )}
        <textarea
          placeholder="Tell me! What's on your mind today?"
          {...register("comment", { required: true })}
          className="border-cyan-300 col-span-2 mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
        />
        {commentError && (
          <p>Hey, I'd appreciate if you left a comment.</p>
        )}
        <button
          className={classNames(
            "col-span-2  px-4 py-2 focus:border-transparent rounded-md text-white ",
            {
              "bg-cyan-400 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 max-h-fit cursor-pointer active:ring-cyan-600":
                !disabled,
              "bg-gray-400 hover:bg-gray-600 cursor-not-allowed":
                disabled,
            }
          )}
          type="submit"
          disabled={disabled}
          onClick={onButtonClick}>
          Send
        </button>
      </div>
    </Form>
  );
}

export default ContactForm;
