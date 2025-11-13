export function RestaurantContactCard({ contact, ...props }) {
  const { phone, email, social } = contact;
  const elements = [];

  for (let key in social) {
    if (Object.hasOwn(social, key)) {
      elements.push(
        <a
          className="w-fit hover:opacity-70 transition-opacity"
          key={key}
          href={social[key]}
        >
          <img
            alt={`${key} social link`}
            src={`https://www.google.com/s2/favicons?domain=${key}.com&sz=128`}
            className="w-10 h-10 rounded-lg"
          />
        </a>
      );
    }
  }
  return (
    <div {...props}>
      <p className="mb-3 flex items-center gap-2">
        <span className="text-xl">☎️</span>
        <a
          href={`tel:${phone}`}
          className="text-stone-800 font-medium hover:text-stone-900 transition-colors"
        >
          {phone}
        </a>
      </p>
      <p className=" mb-4 flex items-center gap-2">
        <span className="text-xl">📧</span>
        <a
          href={`mailto:${email}`}
          className="text-stone-800 font-medium hover:text-stone-900 transition-colors"
        >
          {email}
        </a>
      </p>
      <div className={`py-2 flex gap-4 justify-center`}>{elements}</div>
    </div>
  );
}
