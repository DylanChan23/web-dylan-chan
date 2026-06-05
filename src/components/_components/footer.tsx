import React from "react";
import MailFilledIcon from "../icons/mail-filled-icon";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";

export default function Footer() {
  return (
    <footer className="w-full z-20">
      <nav
        aria-label="Social links"
        className="py-4 px-8 w-full bg-background/40"
      >
        <ul className="flex gap-8 justify-center">
          <li>
            <a
              href="https://www.linkedin.com/in/dylan-chan-a92b07271/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center no-underline"
            >
              <span>LinkedIn</span>
              <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DylanChan23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center no-underline"
            >
              <span>Github</span>
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="mailto:dylanchan23@gmail.com"
              className="flex gap-1 items-center no-underline"
            >
              <span>Email</span>
              <MailFilledIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
