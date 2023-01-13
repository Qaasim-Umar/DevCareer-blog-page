import Image from "next/image";
import { cards } from "../utils/content";

const CardComponent = () => {
  return (
    <div className="py-8">
      <aside className="hidden md:block w-[20%] h-[78rem] float-right mr-10  ml-12 py-12 pl-4 md:border-opacity-1 md:border-l-[1px] md:border-l-neutral-300">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          nobis cum atque dolor explicabo ducimus quae vitae minus.
        </p>
      </aside>

      <div className="justify-center max-w-full flex-col gap-6 mx-auto md:flex-row md:w-[80%] md:max-w-5xl ">
        {cards.map((card, i) => (
          <div
            className="relative flex flex-col gap-1 p-5 px-6 md:flex-row-reverse md:p-0  md:py-6   md:border-b-[1px] md:border-b-neutral-300"
            key={i}
          >
            <Image
              src={card.logo}
              alt="logo"
              width="270"
              height="300"
              className="rounded-lg md:w-[170px]"
            />

            <div className="max-w-2xl md:justify-center flex flex-col">
              <h1 className="my-1 text-xl font-bold text-gray-700">
                {card.title}
              </h1>
              <p className="mb-5 text-gray-700">{card.summary}</p>
              <a
                href={`/articles/${card.id}`}
                className="text-indigo-500 transition border-b-2 w-20 border-b-gray-500"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
