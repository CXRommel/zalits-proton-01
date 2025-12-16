export function RestaurantContactCard({ contact, ...props }) {
  const { phone, email, social } = contact;
  const elements = [];

  for (let item in social) {
    elements.push(
      <a
        className="w-fit hover:opacity-70 transition-opacity"
        key={item}
        href={social[item]}
      >
        <img
          alt={`${item} social link`}
          src={`https://www.google.com/s2/favicons?domain=${item}.com&sz=128`}
          className="w-10 h-10 rounded-lg"
        />
      </a>
    );
  }

  return (
    <div {...props}>
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <svg className="size-6 text-blue-500">
              <use href="/lenn/sprites.svg#icon-phone" />
            </svg>
          </div>
          <div className="flex flex-col">
            <a
              href={`tel:${phone}`}
              className="text-stone-800 font-medium hover:text-blue-600 transition-colors text-lg"
            >
              {phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
          <div className="p-2 bg-amber-50 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
            <svg className="size-6 text-amber-500">
              <use href="/lenn/sprites.svg#icon-mail" />
            </svg>
          </div>
          <div className="flex flex-col">
            <a
              href={`mailto:${email}`}
              className="text-stone-800 font-medium hover:text-amber-600 transition-colors text-lg"
            >
              {email}
            </a>
          </div>
        </div>

        {elements.length > 0 && (
          <div className="mt-2 pt-4 border-t border-stone-100">
            <div className="flex gap-4 justify-center">{elements}</div>
          </div>
        )}
      </div>
    </div>
  );
}
