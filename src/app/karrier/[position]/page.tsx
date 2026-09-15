import { notFound, permanentRedirect } from "next/navigation";
import { getKarrierPosition, KARRIER_POSITIONS } from "@/components/page/marketing/karrierData";

type Params = { position: string };

export function generateStaticParams(): Params[] {
  return KARRIER_POSITIONS.map((position) => ({ position: position.slug }));
}

/**
 * The position descriptions live on the consolidated career page. Legacy job
 * URLs stay usable and land directly on the matching in-page anchor.
 */
export default async function KarrierPositionRedirect({ params }: { params: Promise<Params> }) {
  const { position } = await params;
  const currentPosition = getKarrierPosition(position);
  if (!currentPosition) notFound();
  permanentRedirect(`/rolunk/karrier/#${currentPosition.slug}`);
}
