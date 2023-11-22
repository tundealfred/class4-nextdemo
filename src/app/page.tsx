import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The Home Page. The Root Route</h1>
      <Link href="/animals">Go to my animals</Link>
    </div>
  );
}
