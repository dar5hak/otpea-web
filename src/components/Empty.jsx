import React from "react";

const Empty = () => (
  <section className="section has-text-centered">
    <p className="is-size-2">¯\_(ツ)_/¯</p>
    <p className="is-size-4">Add an account to generate one-time passwords.</p>
    <p>
      You can generate a time-based OTP for authenticating on services like
      Google, GitHub, WordPress.com,{" "}
      <a
        href="https://twofactorauth.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        and many more
      </a>
      .
    </p>
  </section>
);

export default Empty;
