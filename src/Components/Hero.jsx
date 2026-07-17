function Hero() {
  return (
    <section
      id="home"
      className="fixed top-0 left-0 lg:left-72 right-0 h-screen -z-10"
    >
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex h-full items-center justify-center px-6">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            David Fan
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            React Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;