const Button = ({ size, color, label }) => {
  const colors = {
    black: "border-black hover:border-black hover:bg-black hover:text-white",
    grey: "bg-white text-black",
    teal: "bg-white text-black border-teal-400 hover:bg-[#f8f4f4]",
  };
  const sizes = {
    md: "p-2.5 text-md",
  };

  return (
    <button className={`border-2 ${sizes[size]} ${colors[color]}`}>
      {label}
    </button>
  );
};

export { Button };
