import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      <main className="container mx-auto min-h-screen p-4 flex flex-col">
        <h1 className="dark:text-white text-center">Type your markdown and get a link</h1>

        <label
          htmlFor="message"
          className="mt-4 mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Text
        </label>
        <textarea
          id="message"
          rows={4}
          cols={4}
          className="bintext grow"
          placeholder="Your message..."
        ></textarea>

        <button className="button bg-primary w-full mt-4">Submit</button>
      </main>
    </>
  );
};

export default Home;
