import Link from "next/link";
import React from "react";
import MailFilledIcon from "../icons/mail-filled-icon";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";

export default function Footer() {
  return (
    <header className="flex items-center justify-center gap-8 py-2 px-8 w-full bg-background/40">
      <Link
        href="https://www.linkedin.com/in/dylan-chan-a92b07271/"
        target="blank"
        className="flex gap-1 items-center no-underline"
      >
        <span>LinkedIn</span>
        <LinkedinIcon className="h-4 w-4" />
      </Link>
      <Link
        href="https://github.com/DylanChan23"
        target="blank"
        className="flex gap-1 items-center no-underline"
      >
        <span>Github</span>
        <GithubIcon className="h-4 w-4" />
      </Link>
      <Link
        href="mailto:dylanchan23@gmail.com"
        className="flex gap-1 items-center no-underline"
      >
        <span>Email</span>
        <MailFilledIcon className="h-4 w-4" />
      </Link>
    </header>
  );
}
