import {styled} from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ExtensionIcon from '../extension-icon/ExtensionIcon';
import {closeFile} from '../../../store/thunks/close-file/closeFile';
import {useDispatch} from "react-redux";


const CustomTabLabel = (props) => {
    const dispatch = useDispatch();
    const {
        activeFile: {id, name, extension},
    } = props;

    const onClose = (event) => {
        event.stopPropagation();
        dispatch(closeFile(id));
    };

    return (
        <CustomTabLabelContainer>
            <ExtensionIcon extension={extension}/>
            <FileName>{name}</FileName>
            <CloseIcon onClick={onClose} sx={{position: 'absolute', right: 0, color: (theme) => theme.font}}/>
        </CustomTabLabelContainer>
    );
};

const CustomTabLabelContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
});

const FileName = styled('div')(({theme}) => ({
    padding: '0px 5px',
    color: theme.font,
}));

export default CustomTabLabel;
