export default function About() {
  return (
    <>
      <div className="collage">
        <amp-img
          alt="selfie"
          fallback=""
          width="300"
          height="300"
          layout="fixed"
          src="selfie.jpg"
          className="selfie"
        ></amp-img>
      </div>
      <h3>Howdy,</h3>
      <p>
        It's a pleasure to meet you, my name is Tyler.{" "}
        <span role="img" aria-label="smiley">
          🙂
        </span>
      </p>
      <p>
        I'm a software engineer living in Portland, Oregon and working remotely.
        I like React, React Native, GraphQL, and TypeScript. Add me on Instagram{" "}
        <a
          href="https://instagram.com/tylerbuchea"
          target="_blank"
          rel="noreferrer"
        >
          @tylerbuchea
        </a>
        .
      </p>

      <style jsx>{`
        .collage {
          position: relative;
        }

        @media (max-width: 500px) {
          .collage {
            padding-left: 0px;
          }
        }

        .selfie {
          border-radius: 2vw;
          margin-bottom: 2vh;
        }

        h3 {
          padding-bottom: 0;
          font-size: 2rem;
          font-family: font-family: 'DM Serif Text', serif;
          margin: 0;
        }

        a {
          color: var(--accent);
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.3s ease-in-out;
        }

        a:hover {
          border-bottom: 2px solid var(--accent);
        }

        a:active {
          transition: none;
          border-bottom: 2px solid var(--accent);
        }

        p {
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}
