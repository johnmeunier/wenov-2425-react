import { useState } from "react";

const Signup = () => {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [rulesPassword, setRulesPassword] = useState({
    identical: false,
    atLeast8Char: false,
    atLeastOneLowerCase: false,
    atLeastOneUpperCase: false,
    atLeastOneNumber: false,
  });

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <>
      <h2>Créer mon compte</h2>
      <form action="">
        <label htmlFor="firstname">Prénom</label>
        <input type="text" id="firstname" />
        <label htmlFor="lastname">Nom</label>
        <input type="text" id="lastname" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onBlur={(e) => setIsEmailInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))}
        />
        {isEmailInvalid && <p style={{ color: "red" }}>Le mail n'est pas valide</p>}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="passwordConfirmation">Password confirmation</label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          onBlur={(e) =>
            setRulesPassword({
              identical: password === passwordConfirmation,
              atLeast8Char: password.length >= 8,
              atLeastOneLowerCase: /[a-z]/.test(password),
              atLeastOneUpperCase: /[A-Z]/.test(password),
              atLeastOneNumber: /\d/.test(password),
            })
          }
        />
        <ul>
          <li>Identical :{rulesPassword.identical ? "✅" : "❌"}</li>
          <li>8 char :{rulesPassword.atLeast8Char ? "✅" : "❌"}</li>
          <li>Lowercase :{rulesPassword.atLeastOneLowerCase ? "✅" : "❌"}</li>
          <li>Uppercase :{rulesPassword.atLeastOneUpperCase ? "✅" : "❌"}</li>
          <li>Number :{rulesPassword.atLeastOneNumber ? "✅" : "❌"}</li>
        </ul>
      </form>
    </>
  );
};

export default Signup;
