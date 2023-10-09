import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";

const CodeEditor = ({ value, onChange, ...otherProps }) => {
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    if (value !== editorValue) {
      setEditorValue(value);
    }
  }, [value]);

  const handleEditorChange = (newValue) => {
    setEditorValue(newValue);
    onChange(newValue);
  };

  return (
    <AceEditor
      theme="twilight"
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
      value={editorValue}
      onChange={handleEditorChange}
      {...otherProps}   
    />
  );
};

CodeEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CodeEditor.defaultProps = {
  value: "",
  onChange: () => null,
};

export default CodeEditor;
