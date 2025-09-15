import { Button } from "../atoms/Button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-52">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-left">PlayStation Network</h1>
      <p className="text-lg max-w-2xl mb-6 text-left">
        Juegos online, entretenimiento, amigos, compras y mucho más: PSN es donde comienza tu recorrido online.
      </p>
      <div className="text-left">
        <Button variant="primary">Ver estados de red</Button>
      </div>
      </div>
    </section>
  );
};