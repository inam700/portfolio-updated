import Head from "next/head";
import Homepage from "./Homepage";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Inam Ullah | Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Inam Ullah — a Full Stack Developer specializing in React.js Next.js, and modern web development frameworks and libraries."
        />
        <meta
          name="keywords"
          content="Inam Ullah, Full Stack Developer, React.js, Next.js, Node.js, Express.js, MongoDB, Portfolio, React Developer"
        />
        <meta name="author" content="Inam Ullah" />
        <meta property="og:title" content="Inam Ullah | Full Stack Developer" />
        <meta
          property="og:description"
          content="Projects and skills of Inam Ullah – building fast, responsive, and scalable web apps."
        />
        <meta property="og:url" content="https://inamullah.com" />
        <meta
          property="og:image"
          content="https://inamullah.com/og-image.png"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Inam Ullah | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Inam Ullah, specializing in Next.js, Node.js, and TypeScript."
        />
        <meta
          name="twitter:image"
          content="https://inamullah.com/og-image.png"
        />

        <meta name="robots" content="index, follow" />
      </Head>
      <Homepage />
    </>
  );
};

export default HomePage;
