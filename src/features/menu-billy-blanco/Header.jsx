const Header = ({ restaurant, language, setLanguage, translation }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-orange-500/30 shadow-md">
      <div className="flex flex-col items-center py-3 px-4">
        {/* Logo */}
        <img
          src={restaurant.profile.logo.url}
          alt={restaurant.name}
          className="w-20 h-20 rounded-full shadow-lg mb-2 object-cover border-2 border-orange-500/50 transition-transform duration-300 hover:scale-105"
        />

        {/* Nombre */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 tracking-tight">
          {restaurant.name}
        </h1>

        {/* Slogan */}
        <p className="text-xs sm:text-sm text-gray-300 italic mt-1 max-w-xs text-center">
          {translation(restaurant.profile.slogan)}
        </p>

        {/* Selector de idioma */}
        <div className="flex gap-2 mt-3">
          {restaurant.intl.languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                language === lang
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-orange-100 text-orange-700 hover:bg-orange-200 hover:text-orange-900"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
