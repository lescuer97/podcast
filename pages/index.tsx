import Header from "../components/Header";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main>
        <div className="text-2xl">Hello World</div>
      </main>
    </div>
  );
}
