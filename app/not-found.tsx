import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export default function NotFound() {
  return (
    <>
      <PageHeading
        title="This page has not been written"
        hatnote={<>Error 404 — the requested entry does not exist</>}
      />
      <p>
        The page you are looking for is not part of this wiki. It may have been moved, or
        the link may be broken.
      </p>
      <p>
        <Link href="/" className="wikilink">
          Return to the Introduction
        </Link>
        .
      </p>
    </>
  );
}
