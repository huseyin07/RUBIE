"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { site } from "@/config/site";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: reduceMotion ? 0 : .65, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function CopyContract({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(site.contract); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  return <div className={`copy ${compact ? "copy-compact" : ""}`}><code>{site.contract}</code><button onClick={copy} aria-label="Copy contract address">{copied ? <Check size={17}/> : <Copy size={17}/>}</button><span className="sr-only" aria-live="polite">{copied ? "Contract copied" : ""}</span>{copied && <span className="copied">Contract copied</span>}</div>;
}
export function ExternalLink({ href, className = "", children }: { href: string; className?: string; children: React.ReactNode }) { return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>; }
export function SectionHeading({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) { return <div className={`section-heading ${center ? "text-center mx-auto" : ""}`}><p>{eyebrow}</p><h2>{title}</h2></div>; }
