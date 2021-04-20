import * as React from "react";

export default function Page() {
  return (
    <div>
      <nav>
        <ul className="flex flex-row items-center justify-end h-16 pr-12">
          <li className="pl-8 pr-8">Home</li>
          <li className="pl-8 pr-8">Home</li>
          <li className="pl-8 pr-8">Home</li>
          <li className="pl-8 pr-8">Home</li>
        </ul>
      </nav>
      <header className="p-24 pt-12 pb-12 bg-blue-400 h-80">
        <h1 className="text-6xl">The headline for the site</h1>
        <button>Call to action</button>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
