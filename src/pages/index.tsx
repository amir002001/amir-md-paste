import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const snippetMutation = trpc.snippet.saveSnippet.useMutation();

  const [text, setText] = useState("");
  const handleSaveSnippet = async () => {
    const snippetId = await snippetMutation.mutateAsync({ text });
    console.log(snippetId);
  };

  return (
    <>
      <Head>
        <title>Amir Markdown Paste</title>
        <meta
          name="description"
          content="a paste application that gives you a link that displays markdown"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col p-4">
        <h1
          className="text-center
        dark:text-white
         md:text-lg
         xl:text-2xl"
        >
          Type your markdown and get a link
        </h1>

        <label
          htmlFor="markdown"
          className="mt-4 mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Markdown
        </label>
        <textarea
          id="markdown"
          onChange={(e) => setText(e.target.value)}
          rows={4}
          cols={4}
          className="bintext grow"
          placeholder="Your markdown..."
        ></textarea>
        <button
          onClick={handleSaveSnippet}
          className="button mt-4 w-full bg-primary
        bg-gradient-to-r from-purple-500 via-purple-600 to-primary font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800
        "
        >
          Submit
        </button>
      </main>
    </>
  );
};

export default Home;
