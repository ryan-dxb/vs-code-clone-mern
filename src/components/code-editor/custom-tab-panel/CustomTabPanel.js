import {styled} from '@mui/material/styles';
import CustomEditor from '../custom-editor/CustomEditor';


const CustomTabPanel = (props) => {
    const {activeFile, editorActiveFileId} = props;
    return (
        <CustomTabPanelContainer role="tabpanel" hidden={editorActiveFileId !== activeFile.id}>
            <CustomEditor activeFile={activeFile}/>
        </CustomTabPanelContainer>
    );
};

const CustomTabPanelContainer = styled('div')({height: '100%'});

export default CustomTabPanel;
