import Link from "next/link";
import CenterContentLayout from "../components/layout/center-content.layout";

export default function Index() {
  return (
    <CenterContentLayout>
      <img
        className="rounded-full border-8 border-gray-800 dark:border-gray-700 mt-16"
        src="/profile.jpg"
        width={200}
        height={200}
      />

      <p className="mt-8">
        Hey, thanks for visiting. My name is Jessy Cormier and I
        build front-end stuff.
      </p>

      <p className="mt-4">
        See what I'm up to right <Link href="/now"><a>Now</a></Link>.
      </p>
    </CenterContentLayout>
  );
}
