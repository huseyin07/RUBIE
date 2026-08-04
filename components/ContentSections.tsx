"use client";
import { ChevronDown, Dog, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/config/site";
import { ExternalLink, Reveal, SectionHeading } from "./ui";
import { SiX } from "./XIcon";

const features = [[Sparkles,"Inspired by a Real Story","Born from an unforgettable public exchange."],[Dog,"The Dog Behind the Meme","Rubie is the real dog behind the credit card excuse."],[ShieldCheck,"Built on ARC","A community meme living inside the ARC ecosystem."],[Heart,"Community Driven","Powered by stories, humor, and the people who share them."]] as const;
const steps = [["Prepare an ARC-compatible wallet","Use a wallet that supports the ARC network."],["Fund your wallet","Add the supported asset required to trade on RadarDEX."],["Open RadarDEX","Use the official RUBIE pair link."],["Swap for RUBIE","Confirm the contract address before completing the swap."]] as const;
const faqs = [["Who is Rubie?","Rubie is Frank Chaparro’s dog and the dog behind the ‘my dog ate my credit card’ story."],["What inspired the RUBIE meme coin?","RUBIE was inspired by a public X exchange between Jeremy Allaire and Frank Chaparro."],["Is RUBIE officially affiliated with Jeremy Allaire, Frank Chaparro, Circle, or ARC?","No. RUBIE is an independent community meme coin inspired by a public exchange."],["Where can I find the official contract?",`The official contract displayed on this website is ${site.contract}.`],["Where can I trade RUBIE?","RUBIE can be viewed through its listed RadarDEX pair."],["What is the total supply?","The total supply is 1,000,000,000 RUBIE."]] as const;

export function ContentSections() { return <>
 <section className="section why"><div className="shell"><SectionHeading eyebrow="MORE THAN A MEME" title="Why RUBIE?" center/><div className="feature-grid">{features.map(([Icon,title,text]) => <Reveal className="feature-card" key={title}><div className="feature-icon"><Icon/></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
 <section id="how-to-buy" className="section shell"><SectionHeading eyebrow="GET RUBIE" title="How to Buy" center/><div className="steps">{steps.map(([title,text],i) => <Reveal className="step" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div><div className="warning"><ShieldCheck/><b>Always verify the contract address before making a transaction.</b></div></section>
 <section id="community" className="section shell"><Reveal className="community"><div className="community-glow"/><p>THE PACK IS WAITING</p><h2>Join the Pack</h2><span>Follow the story, share the memes, and grow with the RUBIE community.</span><div className="actions"><ExternalLink href={site.links.x} className="button"><SiX/> Follow RUBIE on X</ExternalLink><ExternalLink href={site.links.dex} className="button button-light">Trade on RadarDEX</ExternalLink></div></Reveal></section>
 <section id="faq" className="section shell faq"><SectionHeading eyebrow="GOOD TO KNOW" title="Frequently Asked Questions" center/><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>
 </>; }
