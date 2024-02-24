import { useEffect } from "react";

export default function PasswordAuth({ password, setIsPasswordValid }) {
  useEffect(() => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
        password
      )
    )
      setIsPasswordValid(true);
    else setIsPasswordValid(false);
  }, [password]);

  return (
    <ul>
      <li>
        <p>{`Must be between 8-15 characters - ${
          password.length > 7 && password.length < 16 ? "O" : "X"
        }`}</p>
      </li>
      <li>
        <p>{`Must contain at least one lower case letter - ${
          /[a-z]/.test(password) ? "O" : "X"
        }`}</p>
      </li>
      <li>
        <p>{`Must contain at least one upper case letter - ${
          /[A-Z]/.test(password) ? "O" : "X"
        }`}</p>
      </li>
      <li>
        <p>{`Must contain at least one number - ${
          /[\d]/.test(password) ? "O" : "X"
        }`}</p>
      </li>
      <li>
        <p>{`Must contain at least one special character (!@#$%^&*.?) - ${
          /[!@#$%^&*.?]/.test(password) ? "O" : "X"
        }`}</p>
      </li>
    </ul>
  );
}
