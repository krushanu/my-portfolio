import HomeImage from "./components/HomeImage";
import HomeContent from "./components/HomeContent";

export default function Home() {
  return (
    <main className="w-full" data-theme="emerald">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <HomeImage />
        <HomeContent />
      </div>
    </main>
  );
}
