import ItemCard from "../common/ItemCard";

function ResultGrid({ items }) {
  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {items &&
          items.map((item, index) => (
            <ItemCard
              image={item.image}
              primaryText={item.title}
              secondaryText={item.year}
              key={index}
            />
          ))}
      </div>
    </section>
  );
}

export default ResultGrid;
