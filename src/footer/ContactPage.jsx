import { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../components/PageLayout";

function FormComponent({
  label,
  inputType = "text",
  value,
  onChange,
  isMessage = false,
}) {
  return (
    // adds padding beneath each element
    <div className="mb-4">
      {/* put them in columns */}
      <div className="flex flex-col">
        {/* capitalize and add a bit of margin between the label and input */}
        <label className="capitalize mb-2">{label}:</label>
        {isMessage ? (
          <textarea
            onChange={onChange}
            value={value}
            className="p-2 rounded-md dark:bg-gray-700 h-40"
            required
          />
        ) : (
          <input
            onChange={onChange}
            value={value}
            type={inputType}
            className="p-2 rounded-md dark:bg-gray-700"
            required
          />
        )}
      </div>
    </div>
  );
}

function Form({ onEmailSend }) {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e, fieldName) {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // send a request to the backend api to send emails
    fetch("https://sikh-essence-backend.up.railway.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // if the emails are sent successfully
        if (data.message === "Emails sent successfully") {
          onEmailSend("success");
          // set the inputs to be empty
          setFormData({ email: "", subject: "", message: "" });
        }
      })
      // if there are any errors
      .catch((error) => {
        // log the error
        console.error("Error:", error);

        // show an error message
        onEmailSend("error");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <FormComponent
        label={"email"}
        inputType="email"
        value={formData.email}
        onChange={(e) => handleChange(e, "email")}
      />

      <FormComponent
        label={"subject"}
        value={formData.subject}
        onChange={(e) => handleChange(e, "subject")}
      />

      <FormComponent
        label={"message"}
        value={formData.message}
        isMessage={true}
        onChange={(e) => handleChange(e, "message")}
      />
      <button
        type="submit"
        className="w-1/2 text-white self-center bg-gray-600 p-2 rounded-md mt-4 hover:bg-gray-500 hover:scale-105 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

function ContactPage() {
  // remembers if an email has been sent
  const [emailHasSent, setEmailHasSent] = useState("");

  // sets the emailHasSent variable
  const handleEmailSend = (status) => {
    setEmailHasSent(status);
  };

  return (
    <div>
      {/* if the email sent */}
      {emailHasSent === "success" && (
        <div className="w-full text-center mx-auto bg-green-500/80 p-5 lg:py-4 lg:px-5 lg:w-fit lg:mx-auto lg:mt-2 lg:rounded-md lg:border-4 lg:border-green-400 lg:bg-green-500/90">
          Email succesfully sent
        </div>
      )}

      {/* if there was an error sending the email */}
      {emailHasSent === "error" && (
        <div className="w-full text-center mx-auto bg-red-500/90 p-5 lg:py-4 lg:px-5 lg:w-fit lg:mx-auto lg:mt-2 lg:rounded-md lg:border-4 lg:border-red-500 lg:bg-red-500/75">
          Error sending email
        </div>
      )}

      <PageLayout heading={"Contact"}>
        <Form onEmailSend={handleEmailSend} />
      </PageLayout>
    </div>
  );
}

FormComponent.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isMessage: PropTypes.bool,
};

Form.propTypes = {
  onEmailSend: PropTypes.func.isRequired,
};

export default ContactPage;
