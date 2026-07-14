import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MirrorContent } from "@/components/MirrorContent";
import { WpContent } from "@/components/WpContent";
import { getPage } from "@/lib/content";
import { getMirror } from "@/lib/mirror";

export const metadata: Metadata = {
  title: "A1 Solar – Napelem, energiatárolás és finanszírozás egy helyről",
  description:
    "Célunk, hogy ügyfeleink egy helyről kapják meg a napelemes rendszer kiépítéséhez szükséges összes szolgáltatást. Fókuszban az energiatárolás.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const mirror = getMirror("kezdolap");
  if (mirror) return <MirrorContent page={mirror} />;
  const home = getPage("kezdolap");
  if (!home) notFound();
  return <WpContent html={home.content} />;
}
