import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header>
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
