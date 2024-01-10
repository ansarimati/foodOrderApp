import SectionHeader from "./SectionHeader";

const Footer = () => {
  <>
    <section className="text-center mt-8">
      <SectionHeader subHeader={"Contact us"} mainHeader={"Don't hesitate"} />
      <div className="mt-4">
        <a href="tel:8169623489" className="text-3xl underline text-gray-500">
          <h1>+91 8169623489</h1>
        </a>
      </div>
    </section>

    <footer className="border-t p-8 text-center text-gray-500 mt-16">
      &copy; 2024 All reights reserved
    </footer>
  </>;
};

export default Footer;
