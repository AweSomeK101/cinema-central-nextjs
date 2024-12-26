import Image from "next/image";

const SIZE_MAP = {
  sm: [160, 160 / 0.7],
  md: [200, 200 / 0.7],
  lg: [240, 240 / 0.7],
};

function ItemCard({ size = "md", slug, title, year, image }) {
  const imgSize = SIZE_MAP[size];

  return (
    <div style={{ minWidth: imgSize[0], width: imgSize[0] }}>
      <div>
        <Image
          src={image}
          alt={title}
          width={imgSize[0]}
          height={imgSize[1]}
          className="h-a w-full"
        />
      </div>
      <div className="pt-1">
        <p className="font-semibold line-clamp hover:text-accent">{title}</p>
        <p className="text-sm">{year}</p>
      </div>
    </div>
  );
}

export default ItemCard;
