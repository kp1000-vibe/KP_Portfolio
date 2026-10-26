import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";

/** Renders only when /resume.pdf actually exists (SPA fallback returns HTML). */
export function ResumeButton({ className }: { className: string }) {
  const [exists, setExists] = useState(false);
  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((r) => setExists(r.ok && (r.headers.get("content-type") ?? "").includes("pdf")))
      .catch(() => setExists(false));
  }, []);
  if (!exists) return null;
  return (
    <a href="/resume.pdf" download className={className}>
      <FileDown className="h-4 w-4" /> Download Resume
    </a>
  );
}
