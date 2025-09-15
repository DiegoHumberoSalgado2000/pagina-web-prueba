import { Button } from "../atoms/Button";
import { NavLink } from "../molecules/NavLink";


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <ul className="flex gap-6 font-semibold text-sm">
        <li><NavLink label="Juegos" href="/"/></li>
        <li><NavLink label="PS5" href="/ps5"/></li>
        <li><NavLink label="PS4" href="/ps4"/></li>
        <li><NavLink label="Servicio" href="/servicio"/></li>
        <li><NavLink label="Accesorios" href="/accesorios"/></li>
        <li><NavLink label="Noticias" href="/noticias"/></li>
        <li><NavLink label="Tienda" href="/tienda"/></li>
        <li><NavLink label="Asistencia"  href="/asistencia"/></li>
      </ul>
      <div className="flex items-center gap-4">
        <Button variant="secondary">Inicio sesion</Button>
        <input type="text" 
        placeholder="Buscar" 
        className="border rounded-lg py-2 px-3 text-sm focus:outline-none hover:ring-1 cursor-pointer"/>
      </div>
    </nav>
  );
};