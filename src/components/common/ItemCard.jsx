import Image from "@/components/utils/FallbackImage";
import { FALLBACK_POSTER_IMAGE } from "@/lib/Constants";
import Link from "next/link";

const SIZE_MAP = {
  xs: [120, 120 / 0.7],
  sm: [160, 160 / 0.7],
  md: [200, 200 / 0.7],
  lg: [240, 240 / 0.7],
};

function ItemCard({
  size = "md",
  slug = "",
  primaryText,
  secondaryText,
  image,
  fallback = FALLBACK_POSTER_IMAGE,
}) {
  const imgSize = SIZE_MAP[size];

  return (
    <div style={{ minWidth: imgSize[0], width: imgSize[0] }}>
      {slug ? (
        <Link href={slug}>
          <Image
            src={image}
            alt={primaryText}
            width={imgSize[0]}
            height={imgSize[1]}
            fallback={fallback}
            className="h-auto w-full"
          />
        </Link>
      ) : (
        <Image
          src={image}
          alt={primaryText}
          width={imgSize[0]}
          height={imgSize[1]}
          fallback={fallback}
          className="h-auto w-full"
        />
      )}

      <div className={`pt-1 ${size === "xs" ? "text-sm" : null}`}>
        {slug ? (
          <Link href={slug}>
            <p className="font-semibold line-clamp hover:text-accent">{primaryText}</p>
          </Link>
        ) : (
          <p className="font-semibold line-clamp">{primaryText}</p>
        )}

        <p className={`text-sm ${size === "xs" ? "text-xs" : null}`}>{secondaryText}</p>
      </div>
    </div>
  );
}

export default ItemCard;
