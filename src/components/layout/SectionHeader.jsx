const SectionHeader = ({ subHeader, mainHeader }) => {
  return (
    <div className="text-center">
      <h3 className="uppercase text-gray-500 font-semibold">{mainHeader}</h3>
      <h2 className="text-primary font-bold text-4xl">{subHeader}</h2>
    </div>
  );
};

export default SectionHeader;
