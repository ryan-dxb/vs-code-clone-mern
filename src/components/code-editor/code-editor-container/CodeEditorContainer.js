import {AppBar, Tab, Tabs} from '@mui/material';
import {styled} from '@mui/material/styles';
import {setEditorActiveFileId} from '../../../store/slices/files/files';
import selectActiveFiles from '../../../store/selectors/select-active-files/selectActiveFiles';
import CustomTabPanel from '../custom-tab-panel/CustomTabPanel';
import CustomTabLabel from '../custom-tab-label/CustomTabLabel';
import {useDispatch, useSelector} from "react-redux";

const CodeEditorContainer = () => {
    const dispatch = useDispatch();
    const activeFiles = useSelector(selectActiveFiles);
    console.log('activeFiles', activeFiles);
    const editorActiveFileId = useSelector((state) => state.files.editorActiveFileId);

    const onTabClick = (event, tabPosition) => {
        const activeFile = activeFiles[tabPosition];

        if (activeFile.id !== editorActiveFileId) {
            dispatch(setEditorActiveFileId(activeFile.id));
        }
    };

    const tabValue = editorActiveFileId ? activeFiles.findIndex((activeFile) => activeFile.id === editorActiveFileId) : 0;

    if (!activeFiles.length) {
        return <EmptyMessage>Select a file</EmptyMessage>;
    }

    return (
        <CodeEditorContainerDiv>
            <AppBar position="static" color="default">
                <Tabs textColor="primary" indicatorColor="primary" variant="scrollable" value={tabValue}
                      onChange={onTabClick}>
                    {activeFiles.map((activeFile) => {
                        const {id} = activeFile;
                        return <Tab key={id} label={<CustomTabLabel activeFile={activeFile}/>}/>;
                    })}
                </Tabs>
            </AppBar>
            {activeFiles.map((activeFile) => {
                const {id} = activeFile;
                return <CustomTabPanel key={id} activeFile={activeFile} editorActiveFileId={editorActiveFileId}/>;
            })}
        </CodeEditorContainerDiv>
    );
};

const CodeEditorContainerDiv = styled('div')({
    flex: 1,
    height: '100%',
    overflow: 'hidden',
});

const EmptyMessage = styled('div')(({theme}) => ({
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.font,
}));

export default CodeEditorContainer;
