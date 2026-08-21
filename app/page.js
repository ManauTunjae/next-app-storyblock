import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <header className="w-full">
        <Header />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-5 py-10">
        <Button text="Click Me!"/>
        <Card title="Card 1" description="This is a card number 1"/>
      </main>
      <footer></footer>
    </div>
  );
}
