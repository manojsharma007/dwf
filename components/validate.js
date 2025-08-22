export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is Required!";
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(data.email).toLowerCase())) {
    errors.email = "Email address is invalid!";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is Required";
  } else if (!(data.password.length >= 6)) {
    errors.password = "Password needs to be 6 character or more";
  } else {
    delete errors.password;
  }

  if (type === "signUp") {
    if (!data.firstName.trim()) {
      errors.firstName = "First Name is Required!";
    } else {
      delete errors.firstName;
    }
    if (!data.middleName.trim()) {
      errors.middleName = "Middle Name is Required!";
    } else {
      delete errors.middleName;
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is Required!";
    } else {
      delete errors.lastName;
    }
    if (!data.dob.trim()) {
      errors.dob = "Date of birth is Required!";
    } else {
      delete errors.dob;
    }
    if (!data.streetNumber.trim()) {
      errors.streetNumber = "Street Number is Required!";
    } else {
      delete errors.streetNumber;
    }
    if (!data.streetName.trim()) {
      errors.streetName = "Street Name is Required!";
    } else {
      delete errors.streetName;
    }
    if (!data.addressLine.trim()) {
      errors.addressLine = "Address Line is Required!";
    } else {
      delete errors.addressLine;
    }
    if (!data.city.trim()) {
      errors.city = "City is Required!";
    } else {
      delete errors.city;
    }
    if (!data.state.trim()) {
      errors.state = "State is Required!";
    } else {
      delete errors.city;
    }
    if (!data.zipCode.trim()) {
      errors.zipCode = "Zip Code is Required!";
    } else {
      delete errors.zipCode;
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone is Required!";
    } else {
      delete errors.phone;
    }
        if (!data.homePhone.trim()) {
      errors.homePhone = "Home Phone is Required!";
    } else {
      delete errors.homePhone;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the Password";
    } else if (!(data.confirmPassword === data.password)) {
      errors.confirmPassword = "Password is not match!";
    } else {
      delete errors.confirmPassword;
    }

    if (data.IsAccepted) {
      delete errors.IsAccepted;
    } else {
      errors.IsAccepted = "Accept terms!";
    }
  }

  return errors;
};
