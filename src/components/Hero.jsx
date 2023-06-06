import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/VinayakMaharaj?tab=overview&from=2023-06-01&to=2023-06-06"
            )
          }
        >
          Github
        </button>
      </nav>
    </header>
  );
};

export default Hero;
