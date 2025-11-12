export function RestaurantProfile({ slogan, logo, name, size = 150 }) {
  let imgStyle =
    logo.container === "circular"
      ? { borderRadius: "50%" }
      : { borderRadius: "10%" };

  return (
    <div className="grid grid-cols-1 place-items-center">
      <img
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s"}
        alt={name}
        width={size}
        height={size}
        style={{ ...imgStyle }}
      />
      <h1 className="text-4xl">{name}</h1>
      <h2 className="text-lg italic pt-4">{slogan}</h2>
    </div>
  );
}
