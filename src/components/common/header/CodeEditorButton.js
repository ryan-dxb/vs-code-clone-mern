import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import paths from "../../../routes/paths";
import {useHistory} from "react-router-dom";

const CodeEditorStyledButton = styled(Button)(({theme}) => ({
    color: theme.commonColors.white,
}))

const CodeEditorButton = () => {
    const history = useHistory();

    const onClick = () => {
        history.push(paths.codeEditor);
    }

    return (
        <CodeEditorStyledButton onClick={onClick}>Code Editor</CodeEditorStyledButton>
    )
}

export default CodeEditorButton;