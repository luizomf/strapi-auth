import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '../../../../../../ckeditor5-custom/build/ckeditor';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const configuration = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      // 'indent',
      // 'outdent',
      '|',
      // 'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'alignment',
      'code',
      'codeBlock',
      'fontBackgroundColor',
      'fontColor',
      // 'fontSize',
      // 'fontFamily',
      'horizontalLine',
      'htmlEmbed',
      // 'imageInsert',
      'removeFormat',
      'strikethrough',
      'subscript',
      'superscript',
      'underline'
    ]
  },
  language: 'pt-br',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side',
      'linkImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  },
};


const Editor = ({ onChange, name, value }) => {
  const [isReady, setIsReady] = React.useState(false);
  
  React.useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <p>Loading editor...</p>;
  }

  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        config={configuration}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
