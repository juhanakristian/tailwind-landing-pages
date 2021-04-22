import * as React from "react";

export default function Page() {
  return (
    <div>
      <nav className="flex justify-end px-24 py-4 space-x-12">
        <a href="#" className="font-medium text-blue-700 hover:text-gray-900">
          Product
        </a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
          Features
        </a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
          About
        </a>
      </nav>
      <header className="flex flex-col justify-between p-24 pt-12 pb-12 bg-blue-700">
        <h1 className="w-1/2 pt-8 pb-8 text-6xl font-bold text-white">
          The headline
          <br /> for the site
        </h1>
        <section className="w-1/2 pt-2 pb-4 text-gray-200">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </section>
        <div className="pt-4 pb-4">
          <input className="box-border p-4 mr-4 border-2 rounded-md"></input>
          <button className="p-4 text-base font-semibold text-gray-900 bg-yellow-300 rounded-lg hover:bg-yellow-400">
            Sign up
          </button>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
