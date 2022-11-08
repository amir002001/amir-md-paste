import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { trpc } from "../../utils/trpc";

const SnippetPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const snippet = trpc.snippet.getSnippet.useQuery({ id: id });

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

      {snippet.data ? <div>{snippet.data.text}</div> : <div>loading</div>}
    </>
  );
};

export default SnippetPage;
