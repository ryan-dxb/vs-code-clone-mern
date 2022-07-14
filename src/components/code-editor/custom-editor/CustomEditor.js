import {useState, useCallback} from 'react';
import {debounce} from 'lodash';
import Editor from '@monaco-editor/react';
import {useDispatch, useSelector} from 'react-redux';
import {updateFileCode} from "../../../store/slices/files/files";
import Loading from "../../common/loading/Loading";


const supportedExtensions = {
    js: 'javascript',
    jsx: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    py: 'python',
    rb: 'ruby',
    java: 'java',
    go: 'go',
    html: 'html',
    php: 'php',
    css: 'css',
    json: 'json',
};


const CustomEditor = (props) => {
    const {activeFile: {id, extension, code}} = props


    const [newCode, setNewCode] = useState(code)
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode.isDarkMode)
    const language = supportedExtensions[extension] || 'plaintext'

    const debouncedSave = useCallback(
        debounce((fileId, newCode) => {
            dispatch(updateFileCode({fileId, newCode}));
        }, 1000),
        []
    );

    const onChange = (newCode = '') => {
        setNewCode(newCode);
        debouncedSave(id, newCode);
    };

    return (
        <Editor
            width="100%"
            height="100%"
            language={language}
            theme={darkMode ? 'vs-dark' : 'light'}
            value={code}
            loading={<Loading/>}
            onChange={onChange}
        />
    )
}


export default CustomEditor;