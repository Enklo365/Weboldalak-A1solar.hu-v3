import { permanentRedirect } from "next/navigation";

/** The native homepage now lives at `/`; keep old preview links working. */
export default function NativRedirect() {
  permanentRedirect("/");
}
