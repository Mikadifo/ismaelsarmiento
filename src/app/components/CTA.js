const CTA = () => {
  return (
    <div className="px-8 py-16 bg-gradient flex flex-col gap-4 items-center">
      <img
        src="/portrait.png"
        alt="Foto de Ismael Sarmiento"
        className="w-52 border-solid border-2 border-white rounded-full"
      />
      <div>
        <h1 className="text-white font-bold text-3xl text-center">
          Ismael Sarmiento
        </h1>
        <h2 className="text-white font-light text-2xl text-center">
          Psicólogo Clínico
        </h2>
      </div>
      <a
        href="#contact"
        className="bg-white font-bold text-2xl py-1 px-4 rounded-lg"
      >
        Contáctame
      </a>
    </div>
  );
};

export default CTA;
