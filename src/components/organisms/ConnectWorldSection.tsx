import { Card } from "../molecules/Card"

export const ConnectWorldSection = () => {
    return(
        <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Conectate a nuestro mundo online</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Inicia sesion en PlayStation Network para disfrutar de experiencias de juegos y
            entretenimiento increible en tu consola PlayStation y otros dispositivos conectados.
        </p>
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
            <Card
                imgSrc="/ps-store.png"
                imgAlt="PlayStation Store"
                title="PlayStation Store"
                description="La biblioteca más grande de juegos de PlayStation del mundo."
                buttonText="Mas informacion"
                buttonColor="bg-blue-600 hover:bg-blue-700"
            />

            <Card
                imgSrc="/ps-plus.png"
                imgAlt="PlayStation Plus"
                title="PlayStation Plus*"
                description="Accede a catálogos de cientos de juegos, pruebas con límite de tiempo, multijugador online, descuentos exclusivos para miembros y mucho más, con una selección de tres opciones de suscripción.*"
                buttonText="Unete a los jugadores"
                buttonColor="bg-orange-600 hover:bg-orange-700"
            />

        </div>
    </section>
    );
}