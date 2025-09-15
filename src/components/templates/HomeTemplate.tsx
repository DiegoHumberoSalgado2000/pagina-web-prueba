import { Navbar } from "../organisms/Navbar";
import { Hero } from "../organisms/Hero";
import { Footer } from "../organisms/Footer";
import { Button } from "../atoms/Button";

export const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container grid bg-gray-100">
        <div className="py-12 max-w-2xl text-center mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Inicia sesion en tu cuenta de PSN
          </h2>
          <p className="text-gray-600 mb-7">
            Inicia sesion en playstation.com con los detalles de tu cuenta de
            PSN para ver ofertas personalisadas para ti, administra la
            configuracion de la cuenta y mucho mas.
          </p>
          <p className="text-gray-600">
            ¿No tienes cuenta ? haz click en el boton de abajo para comenzar con
            un anueva cunta de PSN.
          </p>
          <div className="flex flex-row gap-4 justify-center py-4">
            <Button variant="gray">
              Crear cuenta y adminsitra tus preferencias
            </Button>
            <Button variant="secondary">Crea una cuenta PSN</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
