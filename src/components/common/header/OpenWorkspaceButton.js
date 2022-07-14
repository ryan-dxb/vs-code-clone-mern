import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {readFiles} from "../../../store/thunks/read-files/readFiles";

const OpenWorkspaceStyledButton = styled(Button)(({theme}) => ({
    color: theme.commonColors.white
}));

const InputFile = styled('input')({display: 'none'});


const OpenWorkspaceButton = () => {
    const directoryInputRef = useRef(null)
    const dispatch = useDispatch();

    const onClick = () => {
        directoryInputRef.current.click();
    }

    const onFilesUploaded = async (e) => {
        try {
            const files = directoryInputRef.current.files;
            await dispatch(readFiles(files));
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <OpenWorkspaceStyledButton onClick={onClick}>Open Workspace</OpenWorkspaceStyledButton>
            <InputFile type="file" ref={directoryInputRef} directory="" webkitdirectory="" onChange={onFilesUploaded}/>
        </>
    )
}


export default OpenWorkspaceButton;