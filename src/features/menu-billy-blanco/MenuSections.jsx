import MenuItemCard from "./MenuItemCard";

const MenuSections = ({ menu, translation, prices }) => {
  return (
    <main className="w-full max-w-6xl px-4 sm:px-6 mt-8 space-y-14">
      {menu.sections.map((section) => (
        <section
          key={section.name.es}
          className="space-y-5 bg-[#141414] rounded-3xl shadow-lg border border-orange-500/20 p-5 sm:p-8 transition-transform hover:shadow-orange-400/10"
        >
          <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-orange-400 p-2 rounded-full flex items-center justify-center w-10 h-10">
                <img
                  src={section.icon}
                  alt={translation(section.name)}
                  className="w-6 h-6"
                />
              </div>
              <h2 className="text-2xl font-bold text-orange-400">
                {translation(section.name)}
              </h2>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            {translation(section.description)}
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {section.items.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                translation={translation}
                prices={prices}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default MenuSections;
