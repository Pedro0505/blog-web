import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

interface MyEditorProps {
  setContent: (value: string) => void;
}

const Editor = ({ setContent }: MyEditorProps) => (
  <div>
    <SunEditor
      onChange={setContent}
      setOptions={{
        buttonList: [
          ['font', 'fontSize'],
          [
            'bold',
            'underline',
            'italic',
            'strike',
            'subscript',
            'superscript',
          ],
          ['fontColor', 'hiliteColor'],
          ['align', 'list', 'lineHeight'],
          ['outdent', 'indent'],
          ['preview'],
          ['link', 'image'],
          ['removeFormat'],
        ],
        defaultTag: 'div',
        minHeight: '300px',
        showPathLabel: false,
      }}
    />
  </div>
);

export default Editor;
