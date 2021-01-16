import React, {Component} from 'react'; 
import GlobalStyle from './styles/global';


import {Container, Content} from './styles'; 
import filesize from 'filesize';
import {uniqueId} from 'lodash';
import Upload from './components/Upload';
import FileList from './components/FileList';

class App extends Component {

  state = 
  {
    uploadedFiles: [], 
  }; 

  handleUpload = files => 
  {
    const uploadedFiles = files.map(file => ({
      file, 
      id: uniqueId(), 
      name: file.name, 
      readableSize: filesize(file.size), 
      preview: URL.createObjectURL(file), 
      progress: 0, 
      uploaded: false, 
      error: false, 
      url: null
    }));

    this.setState(
      {
        uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
      }
    );


  }; 

  render()
  {
    const {uploadedFiles} = this.state;
    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length  && ( 
            <FileList files={uploadedFiles} />
          )} 
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
