import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import ErrorCard from '../errorCard/ErrorCard';
import './style.css';

interface MyEditorProps {
  setContent: (value: string) => void;
  error: string;
}

const Editor = ({ setContent, error }: MyEditorProps) => (
  <>
    <div className="editor-container">
      <SunEditor
        onChange={setContent}
        placeholder="Escreva o conteúdo do seu post aqui"
        setOptions={{
          buttonList: [
            ['font', 'fontSize'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'codeView'],
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
    <ErrorCard message={error || ''} />
  </>
);

export default Editor;
