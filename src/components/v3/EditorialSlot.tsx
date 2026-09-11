import { Image, MessageSquareQuote, PanelsTopLeft, Play, SquarePen } from "lucide-react";

const iconFor = (type: string) => {
  if (type === "VIDEÓ") return Play;
  if (type === "GRAFIKA") return PanelsTopLeft;
  if (type === "REVIEW") return MessageSquareQuote;
  if (type === "ŰRLAP" || type === "KITÖLTENDŐ") return SquarePen;
  return Image;
};

export const EditorialSlot = ({ type, placement, details }: { type: string; placement?: string; details: string }) => {
  const Icon = iconFor(type);
  return (
    <aside className="editorial-slot" aria-label={`${type} szerkesztői hely`}>
      <span className="editorial-slot__icon"><Icon size={22} strokeWidth={1.8} /></span>
      <span className="editorial-slot__body">
        <span className="editorial-slot__label">{type}{placement ? ` · ${placement}` : ""}</span>
        <span className="editorial-slot__details">{details || "A végleges tartalom később kerül feltöltésre."}</span>
      </span>
    </aside>
  );
};
