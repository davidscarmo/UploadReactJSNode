import {Container, FileInfo, Preview} from './styles'; 
import {CircularProgressbar} from 'react-circular-progressbar'; 
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md';
const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="https://davidcarmoupload.s3-sa-east-1.amazonaws.com/24ce92132a16338facaa29b8e23fb191+-+HarryIpsonScreen.png" />
                <div>
                    <strong> Profile.png</strong>
                    <span>64kb <button onClick={()=>{}}>Excluir</button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar styles={
                    {
                        root:{ width: 24},
                        path: {stroke: '#7159C1'}
                    }}
                    strokeWidth={10}
                    value={60}
                />
                <a 
                    href="https://davidcarmoupload.s3-sa-east-1.amazonaws.com/24ce92132a16338facaa29b8e23fb191+-+HarryIpsonScreen.png"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <MdLink style={{marginRight:8}} size={24} color="#222" />
                
                </a>
                <MdCheckCircle size={24} color="#78E5D5" />
                <MdError size={24} color="#E57878"/>
            </div>
        </li>
    </Container>
); 

export default FileList; 