export function RestaurantContactCard({ contact, ...props }) {
  const { phone, email, social } = contact;
  const elements = [];

  for (let key in social) {
    if (Object.hasOwn(social, key)) {
      elements.push(
        <a className="w-fit" key={key} href={social[key]}>
          <img
            alt={`${key} social link`}
            src={`https://www.google.com/s2/favicons?domain=${key}.com&sz=128`}
            className="w-10 h-10"
          />
        </a>
      );
    }
  }

  return (
    <div {...props}>
      <p className="break-words">
        <span>☎️</span> <a href={`tel:${phone}`}>{phone}</a>
      </p>
      <p className="break-words">
        <span>📧</span> <a href={`mailto:${email}`}>{email}</a>
      </p>
      <div
        className={`py-4 grid grid-cols-${elements.length} place-items-center`}
      >
        {elements}
      </div>
    </div>
  );
}
