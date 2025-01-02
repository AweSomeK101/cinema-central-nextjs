import Image from "next/image";

function DetailHero() {
  return (
    <section className="flex flex-col sm:flex-row gap-2 md:gap-4">
      <div className="mx-auto sm:mx-0 max-w-[240px]">
        <Image
          src="/posters/whiplash.jpg"
          alt="whiplash"
          width={240}
          height={240 / 0.7}
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="text-center sm:text-start">
          <h3 className="text-3xl font-semibold">Whiplash</h3>
          <p className="text-gray-300 text-sm">2014 | 1hr 24min | English</p>
        </div>

        <p className="text-justify sm:text-start sm:w-11/12 max-w-[650px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo, reiciendis
          repellendus at quod sequi!
        </p>

        <div className="">
          <p>
            <span className="text-sm text-gray-300">director: </span>Damien Chazelle
          </p>
          <p>
            <span className="text-sm text-gray-300">imdb: </span>8.5
          </p>
        </div>

        <div className="text-primary flex gap-4">
          <p>Drama</p>
          <p>Psychological</p>
        </div>
      </div>
    </section>
  );
}

export default DetailHero;
