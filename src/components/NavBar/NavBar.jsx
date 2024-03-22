"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logobigua.jpeg";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import style from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Nuevo cliente",
      link: "/usuario",
    },
    {
      name: "Editar cliente",
      link: "/editUsuario",
    },
  ];

  return (
    <nav className={style.nav}>
      <div className={style.logoContainer}>
        <Image src={logo} alt="elbigua_logo" width={50} height={50} />
        <h1>El Bigua</h1>
      </div>

      <section>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={clsx({ [style.active]: pathname === item.link })}
            >
              <Link href={item.link} key={item.name}>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <span>
          <input type="text" placeholder="Buscar cliente"></input>
          <button>
            <MagnifyingGlass size={30} color="#E5BD03" weight="bold" />
          </button>
        </span>
      </section>
    </nav>
  );
}
