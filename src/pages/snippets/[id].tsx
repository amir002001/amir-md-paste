import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { trpc } from "../../utils/trpc";
import { CopyToClipboard } from "react-copy-to-clipboard";



const SnippetPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const snippet = trpc.snippet.getSnippet.useQuery({ id: id });
  const [basepath, setBasePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBasePath(window.location.origin);
    }
  }, [basepath]);

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
      <main className="container flex flex-col space-y-3 p-4 mx-auto">
        <h1
          className="
          dark:text-white"
        >
          URL
        </h1>
        <div className="bintext flex">
          <p
            className="truncate grow
          dark:text-white"
          >
            {basepath + router.asPath}
          </p>
          <CopyToClipboard text={basepath + router.asPath}>
            <button
              className=" rounded-r-md bg-primary/10 p-2 -my-2 -mr-2
          hover:bg-primary
          dark:text-white"
            >
              {clipboard}
            </button>
          </CopyToClipboard>
        </div>
        <div>
          <h1
            className="
          dark:text-white"
          >
            Here&apos;s your text:
          </h1>
        </div>
        <div className="bintext relative">
          <CopyToClipboard text={snippet.data?.text as string}>
            <button
              className="absolute top-0 right-0 rounded-tr-md bg-primary/10 p-2
          hover:bg-primary
          dark:text-white"
            >
              {clipboard}
            </button>
          </CopyToClipboard>
          <div className="prose text-white">
            <ReactMarkdown>
              {snippet.data ? snippet.data.text : "loading"}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
};

const clipboard = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
    />
  </svg>
);

export default SnippetPage;
