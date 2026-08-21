import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full">
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
