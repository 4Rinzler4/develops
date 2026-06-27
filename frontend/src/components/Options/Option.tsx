const Options = ({
  options,
}: {
  options: { text: string; isCorrect: boolean }[];
}) => {
  return (
    <div className="options-container">
      {options.map((option) => (
        <div key={option.text}>
          <input type="checkbox" name="option" value={option.text} />
          <span>{option.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Options;
