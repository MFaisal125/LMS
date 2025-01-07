import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";
const RichTextEditor = ({ input, setInput }) => {
  const handleChange = (content) => {
    setInput({ ...input, description: content });
  };

  return (
    <ReactQuill
      theme="snow"
      value={input.description}
      onChange={handleChange}
    />
  );
};
RichTextEditor.propTypes = {
  input: PropTypes.object.isRequired,
  setInput: PropTypes.func.isRequired,
};
export default RichTextEditor;
