function Sidebar() {
  return (
    <aside className="w-64 bg-emerald-200 p-4">
      <nav className="flex flex-col gap-2">
        <a href="#" className="text-blue-900 hover:underline">Início</a>
        <a href="#" className="text-blue-900 hover:underline">Experiência</a>
        <a href="#" className="text-blue-900 hover:underline">Projetos</a>
        <a href="#" className="text-blue-900 hover:underline">Contacto</a>
      </nav>
    </aside>
  );
}

export default Sidebar;

