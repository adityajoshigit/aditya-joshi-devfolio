import { useForm } from "react-hook-form";
import { IContactFormValues } from "../../types";
import { Form } from "../Form";

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
      <input
        type="text"
        placeholder="Your name goes here.."
        {...register("name", { required: true })}
      />
      {nameError && <p>Please enter your name.</p>}
      <input
        type="email"
        placeholder="Your email goes here.."
        {...register("email", { required: true })}
      />
      {emailError && (
        <p>Would you mind providing your email?</p>
      )}
      <textarea
        placeholder="Tell me! What's on your mind today?"
        {...register("comment", { required: true })}
      />
      {commentError && (
        <p>Hey, I'd appreciate if you left a comment.</p>
      )}
      <button
        className=""
        type="submit"
        disabled={
          !nameError && !emailError && !commentError
        }
        onClick={onButtonClick}>
        Send
      </button>
    </Form>
  );
}

export default ContactForm;
