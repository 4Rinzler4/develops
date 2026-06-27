import type { Question } from "../../types/common-types";

const BooleanAnswer = ({ question }: { question: Question }) => {
  return (
    <>
      <div>
        <label>
          <input type="radio" name={`bool-${question.id}`} value="true" />
          True
        </label>

        <label>
          <input type="radio" name={`bool-${question.id}`} value="false" />
          False
        </label>
      </div>
    </>
  );
};

export default BooleanAnswer;
