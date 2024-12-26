import ItemListSlider from "./ItemListSlider";

function SectionList({ title, items }) {
  return (
    <section className="mb-6">
      <h4 className="text-primary text-xl uppercase">{title}</h4>

      <div className="pt-4">
        <ItemListSlider items={items} />
      </div>
    </section>
  );
}

export default SectionList;
