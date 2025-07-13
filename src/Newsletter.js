import { useState } from "react";
import Button from "./components/Button.js";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    if (email.trim()) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <aside className="container mb-2">
      <div className="bg-text text-surface p-2 border">
        <h3 className="text-lg font-bold uppercase mb-1">Newsletter</h3>
        {isSubscribed ? (
          <p className="mb-1 text-accent">
            ✓ Mulțumim! Te-ai abonat cu succes!
          </p>
        ) : (
          <>
            <p className="mb-1">Primește actualizări despre progresul meu:</p>
            <div className="flex gap">
              <input
                className="flex-1 border px-1 py-1 bg-surface outline-none border-accent-focus"
                type="email"
                placeholder="email@exemplu.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button variant="accent" type="submit" onClick={handleSubmit}>
                Abonează-te
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Newsletter;
