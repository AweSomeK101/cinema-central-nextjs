"use client";

import { FALLBACK_IMAGE } from "@/lib/Constants";
import Image from "next/image";
import { useState } from "react";

function FallbackImage({ src, fallback = FALLBACK_IMAGE, alt, ...props }) {
  const [error, setError] = useState(null);

  return <Image src={error ? fallback : src} alt={alt} onError={setError} {...props} />;
}

export default FallbackImage;
