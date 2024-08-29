import { useEffect, useState } from "react";
import { Button } from "./Button/Button";

export function SignInForm() {
  const [status, setStatus] = useState<"submitting" | "submitted">(); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("submitted");
    }, 3000);
  };

  useEffect(() => {
    if (status === "submitted") {
     const timeout = setTimeout(() => {
        setStatus(undefined)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [status])

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input required type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input required type="password" id="password" name="password" />
        <Button type="submit">Sign In</Button>
        {status === "submitting" && <p className="message message--submitting">Submitting...</p>}
        {status === "submitted" && <p className="message message--submitted">Signed In!</p>}
      </form>
  );
}
