"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { ExternalLink } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)); }, { rootMargin: "-35% 0px -55%", threshold: 0 });
    site.nav.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <header className="header"><nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#home" onClick={() => setOpen(false)}><Image src="/rubie.png" alt="" width={42} height={42}/><b>RUBIE</b></a><div className="desktop-nav">{site.nav.map(([label, id]) => <a className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} key={id} href={`#${id}`}>{label}</a>)}</div><ExternalLink href={site.links.dex} className="button button-small desktop-buy">Buy RUBIE</ExternalLink><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button></nav>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{site.nav.map(([label, id]) => <a className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<ExternalLink href={site.links.dex} className="button">Buy RUBIE</ExternalLink></nav>}</header>;
}
