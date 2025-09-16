import { Navbar } from "../organisms/Navbar";
import { Hero } from "../organisms/Hero";
import { Footer } from "../organisms/Footer";
import { Button } from "../atoms/Button";
import { ConnectWorldSection } from "../organisms/ConnectWorldSection";
export const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="bg-gray-100">
        <section className="max-w-2xl text-center mx-auto py-16">
          <h2 className="text-3xl font-bold mb-4">
            Inicia sesión en tu cuenta de PSN
          </h2>
          <p className="text-gray-600 mb-7">
            Inicia sesión en playstation.com con los detalles de tu cuenta de PSN
            para ver ofertas personalizadas para ti, administrar la configuración
            de la cuenta y mucho más.
          </p>
          <p className="text-gray-600">
            ¿No tienes cuenta? Haz clic en el botón de abajo para crear una nueva
            cuenta de PSN.
          </p>
          <div className="flex flex-row gap-4 justify-center py-4">
            <Button variant="gray">
              Crear cuenta y administrar tus preferencias
            </Button>
            <Button variant="secondary">Crear cuenta PSN</Button>
          </div>
        </section>
        <ConnectWorldSection />
      </main>

      <Footer />
    </>
  );
};
