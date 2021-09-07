import Link from "next/link";
import CenterContentLayout from "../components/layout/center-content.layout";

export default function NowPage() {
  return (
    <CenterContentLayout>
      <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800">
        Now
      </h1>
      <ul className="mt-16 text-left list-disc">
        <li>Developing this website while learning NextJS and Tailwind.</li>
        <li>Self improvement like trying to have an growth mindset</li>
        <li>Planning for building a house with my wife for our family</li>
        <li>Playing a few games: Forger, Mass Effect Legendary Edition, No Man's Sky</li>
      </ul>

      <Link href="/"><a className="mt-8">Go Back Home</a></Link>
      <small className="mt-32">
        What is a <strong>Now</strong> page? find out here{" "}
        <a href="https://nownownow.com/about" target="_blank">
          nownownow.com/about
        </a>
      </small>
    </CenterContentLayout>
  );
}
