import React, { useState } from "react";
import Input_field from "./Input_field";
import Submit_button from "./Submit_button";
import axios from "axios";
// import Select from "react-select";
// import { countries } from "countries-list";
// import "./Forms.css";

const Form_01 = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  // const countryOptions = Object.keys(countries).map((countryCode) => ({
  //   value: countryCode,
  //   label: countries[countryCode].name,
  // }));
  const serviceDropdown = props.serviceDropdown || false;

  const ServiceOptions = [
    { value: "sea", label: "Sea Service" },
    { value: "air", label: "Air Service" },
    { value: "land", label: "Land Service" },
    { value: "lcl", label: "LCL Service" },
    { value: "cc", label: "CC Service" },
    { value: "automotive", label: "Automotive Logictics" },
    { value: "petrochem", label: "Petrochem Logictics" },
    { value: "warehousing", label: "Warehousing" },
  ];

  const [formData, setFormData] = useState({
    form: "Get Quote Form",
    user_name: "",
    contact_number: "",
    email: "",
    details: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCountrySelection = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log("Selected Country:", selectedOption);
  };
  const handleServiceSelection = (selectedService) => {
    setSelectedService(selectedService);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("1", formData);
    setIsLoading(true);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("form", formData.form);
    formDataToSubmit.append("full_name", formData.user_name);
    formDataToSubmit.append("contact_number", formData.contact_number);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("country", selectedCountry.label);
    formDataToSubmit.append(
      "service_name",
      props.serviceName || selectedService.label
    );
    formDataToSubmit.append("details", formData.details);
    console.log(formData);

    try {
      const response = await axios.post(
        // 'https://www.rahshiplog.com/shipEmail/sendEmailContact2.php',
        "https://www.texasforeverbarandgrill.com/shipEmail/sendEmailContact.php",
        // "https://www.rahshiplog.com/shipEmail/sendEmailContactDev.php",
        formDataToSubmit
      );

      console.log("-------->", response);
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({
        form: "Get Quote Form",
        user_name: "",
        contact_number: "",
        email: "",
        details: "",
      });
      setSelectedCountry(null);
      setSelectedService(null);
      setTimeout(resetStatus, 3000);
    } catch (error) {
      console.error("Error sending data:", error);
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("An error occurred while submitting the form.");
      // setFormData({
      // });
      setTimeout(resetStatus, 3000);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={props.class}>
        <input name="form" type="hidden" value="Get Quote Form" />
        <Input_field
          type="text"
          name="user_name"
          placeholder="Full Name*"
          required={true}
          marginTop="15px"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <Input_field
          type="number"
          name="contact_number"
          placeholder="Contact Number*"
          required={true}
          marginTop="15px"
          value={formData.contact_number}
          onChange={handleInputChange}
          class={"contactInput"}
        />
        <Input_field
          type="email"
          name="email"
          placeholder="Email*"
          required={true}
          marginTop="15px"
          value={formData.email}
          onChange={handleInputChange}
        />

        {/* <Select
          name="country"
          onChange={handleCountrySelection}
          value={selectedCountry}
          options={countryOptions}
          placeholder={"Country*"}
          required={true}
        />
        {serviceDropdown === true && (
          <Select
            name="service_name"
            onChange={handleServiceSelection}
            options={ServiceOptions}
            placeholder={"Service*"}
            value={props.serviceName || selectedService}
            required={true}
          />
        )} */}
        <Input_field
          type="text"
          name="details"
          placeholder="Details"
          isRequired={false}
          marginTop="15px"
          value={formData.details}
          onChange={handleInputChange}
        />
        <Submit_button value="Get Quote" />

        {/* -----------------------------result----------------------------- */}
        {isLoading && <div className="popup loader">Loading...</div>}

        {isSuccess && (
          <div className="popup success">
            <div className="popup-message bg-success">
              Form submitted successfully!
            </div>
          </div>
        )}
        {isError && (
          <div className="popup error">
            <div className="popup-message bg-danger">{errorMessage}</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form_01;
