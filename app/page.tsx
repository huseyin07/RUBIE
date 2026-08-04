import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { MeetRubie } from "@/components/MeetRubie";
import { TokenInfo } from "@/components/TokenInfo";
import { ContentSections } from "@/components/ContentSections";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";

export default function Home() { return <><PageLoader /><Header /><main><Hero /><Story /><MeetRubie /><TokenInfo /><ContentSections /></main><Footer /></>; }
