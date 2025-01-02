function SectionLayout({ title, className, children }) {
  return (
    <section className={className}>
      <h4 className="text-section w-fit mb-4">{title}</h4>
      {children}
    </section>
  );
}

export default SectionLayout;
