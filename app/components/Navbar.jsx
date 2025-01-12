import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Image
          src={Logo}
          alt="Helpdesk Logo"
          width={70}
          qualoty={100}
          placeholder="blur"
        />
        <h1>Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create Tickets</Link>
      </nav>
    </div>
  );
}
