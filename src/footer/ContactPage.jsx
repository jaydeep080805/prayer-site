import { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../components/PageLayout";
import toast from "react-hot-toast";

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

function Form() {
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

  async function handleSubmit(e) {
    e.preventDefault();

    // use toast.promise to allow the toast to provide constant status updates (sending, sent, error)
    toast.promise(
      // make an api call to the backend
      fetch("https://sikh-essence-backend.up.railway.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // convert data to a json string and send it
        body: JSON.stringify(formData),
      })
        .then((response) => {
          // if the status code is not okay (200 - 299) then reject promise to show error toast
          if (!response.ok) {
            return Promise.reject(new Error("Failed to send email"));
          }
          // Proceed to parse the JSON only if response is ok.
          return response.json();
        })

        .then((data) => {
          // Check for specific success message or other success criteria
          if (data.message === "Emails sent successfully") {
            // Reset form data on success
            setFormData({ email: "", subject: "", message: "" });
          } else {
            // Handle any other conditions as failures.
            return Promise.reject(
              // if there is an error message then display that else just display generic message
              new Error(data.message || "Unknown error occurred")
            );
          }
        }),
      {
        loading: "Sending...",
        success: "Email sent successfully!",
        error: (err) => `${err.toString()}`, // Customize the error message
      }
    );
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
  return (
    <div>
      <PageLayout heading={"Contact"}>
        <Form />
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
