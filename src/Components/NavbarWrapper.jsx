function NavbarWrapper() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white">
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          Portfolio
        </h1>

        <ul className="mt-10 space-y-5">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default NavbarWrapper;