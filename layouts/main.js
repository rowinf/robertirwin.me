import stylesheet from "styles/index.scss";
import Head from "next/head";

export default ({ children }) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    {children}
  </div>
);
