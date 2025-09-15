import { Navbar } from "../organisms/Navbar";
import { Hero } from "../organisms/Hero";
import { Footer } from "../organisms/Footer";

export const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Inicia sesion en tu cuenta de PSN
        </h2>
        <p className="text-gray-600">
          Inicia sesion en playstation.com con los detalles de tu cuenta de PSN 
          para ver ofertas personalisadas para ti, administra la configuracion 
          de la cuenta y mucho mas.
        </p>
      </section>
      <Footer/>
    </>
  );
}