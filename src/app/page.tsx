import styles from "../styles/page.module.css";

export default function RootPage() {
  const logoSizes = 50;
  return (
    <main className={styles.root}>
      <h1>Hiii, I'm Mirasayon</h1>
      <p>
        Developer and shinobi. Node.js/Deno Fullstack developer from
        Konohagakure. Developer of <a href="https://reanime.art/?utm_source=ver_web_mrs_profile">reanime.art</a>
      </p>
      <span>
        JavaScript, oh yeah, your skin and bones <br />
        Turn into something beautiful <br />
        And you know, you know I love you so
        <br /> You know I love you so
      </span>
      <p>Contacts</p>
      <div className={styles.links}>
        <a href="https://reanime.art/?utm_source=ver_web_mrs_profile">
          <img
            className={styles.rlogo}
            src="/icon.png"
            alt=""
            width={logoSizes}
            height={logoSizes}
          />
        </a>
        <a href="https://t.me/miragesayon">
          <img
            className={styles.logo}
            src="/tglogo.png"
            alt=""
            width={logoSizes}
            height={logoSizes}
          />
        </a>

        <a href="https://x.com/mirasayon">
          <img
            className={styles.logo}
            src="/xlogo.png"
            alt=""
            width={logoSizes}
            height={logoSizes}
          />
        </a>
        <a href="https://github.com/mirasayon">
          <img
            className={styles.logo}
            src="/ghlogo.png"
            alt=""
            width={logoSizes}
            height={logoSizes}
          />
        </a>
      </div>
      <img src="/bggifdef.gif" width={1280 / 2} height={720 / 2} />
    </main>
  );
}
