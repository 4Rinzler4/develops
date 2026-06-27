type InputAnswerProps = {
  answer: string;
};
const InputAnswer = ({ answer }: InputAnswerProps) => {
  return (
    <input
      type="text"
      placeholder="Enter your answer..."
      value={answer}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default InputAnswer;
