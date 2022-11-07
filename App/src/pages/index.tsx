import { useState, FormEvent } from "react";

import { MagnifyingGlass } from "phosphor-react";

import { UserInfo } from "../components/UserInfo";
import Head from "next/head";

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  function handleGetUserData(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Instalkergram</title>
      </Head>
      <header className="relative">
        <div className="h-[250px] md:h-[350px] bg-black-500 flex items-center justify-center flex-col">
          <h1
            onClick={() => window.location.reload()}
            className="text-4xl md:text-6xl font-sans font-black bg-blue-400 bg-clip-text text-transparent cursor-pointer"
          >
            Instalker
            <span className="text-purple-500 bg-clip-text text-transparent">
              gram
            </span>
          </h1>
        </div>
        <form
          onSubmit={handleGetUserData}
          action=""
          className="flex flex-col items-center m-auto gap-8 relative bottom-8"
        >
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="text-white placeholder:text-gray-200 bg-gray-400 p-5 rounded-lg outline-none focus:outline-purple-500 border-black-500 border-2 w-[80%] max-w-lg"
            type="text"
            placeholder="Insira o nome do usuário"
          />
          <button className="outline-none focus:outline-purple-500 text-white flex items-center gap-2 text-xl font-bold bg-blue-500 hover:bg-blue-400 transition-colors py-4 px-7 rounded-lg">
            Buscar <MagnifyingGlass size={22} weight="bold" />
          </button>
        </form>
      </header>
    </>
  );
}
