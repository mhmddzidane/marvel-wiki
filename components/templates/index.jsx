import Navbar from "../molecules/Navbar";

const { default: Head } = require("next/head");

const Applayout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className="min-h-screen md:min-h-min">{children}</main>
    </div>
  );
};

export default Applayout;
