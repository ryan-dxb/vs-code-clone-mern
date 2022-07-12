import {Switch} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {toggleDarkMode} from "../../../store/slices/dark-mode/darkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeSwitch = () => {

    const darkMode = useSelector(state => state.darkMode.isDarkMode);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(toggleDarkMode());
    }

    return (
        <>
            {darkMode ? <DarkModeIcon/> : <LightModeIcon/>}
            <Switch color="default" checked={darkMode} onChange={handleChange}/>
        </>
    )
}


export default DarkModeSwitch;