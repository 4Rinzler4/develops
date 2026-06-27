import BooleanAnswer from "../components/BooleanAnswer/BooleanAnswer";
import InputAnswer from "../components/InputAnswer/InputAnswer";
import Options from "../components/Options/Option";
import type { Question } from "../types/common-types";

const renderQuestionInput = (question: Question) => {
  console.log("QUESTION TYPE:", question.type);
  switch (question.type) {
    case "INPUT":
      return <InputAnswer answer={""} />;

    case "CHECKBOX":
      return <Options options={question.options} />;

    case "BOOLEAN":
      return <BooleanAnswer question={question} />;

    default:
      return null;
  }
};

export default renderQuestionInput;
