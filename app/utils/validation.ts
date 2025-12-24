// Form validation helpers

export const isNotEmpty = (value: string) => {
  return value.trim() !== "";
};

export const isEmailValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateLogin = (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};

  if (!isNotEmpty(email)) {
    errors.email = "Email is required";
  } else if (!isEmailValid(email)) {
    errors.email = "Invalid email format";
  }

  if (!isNotEmpty(password)) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateRegister = (name: string, email: string, password: string) => {
  const errors: { name?: string; email?: string; password?: string } = {};

  if (!isNotEmpty(name)) {
    errors.name = "Name is required";
  }

  if (!isNotEmpty(email)) {
    errors.email = "Email is required";
  } else if (!isEmailValid(email)) {
    errors.email = "Invalid email format";
  }

  if (!isNotEmpty(password)) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};
