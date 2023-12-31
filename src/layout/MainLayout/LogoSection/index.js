import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { menuOpen } from 'features/customizationSlice';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    return (
        <ButtonBase disableRipple onClick={() => dispatch(menuOpen({id: defaultId}))} component={Link} to={config.defaultPath}>
            {/* <Logo /> */}
            <h2>Peach</h2>
        </ButtonBase>
    );
};

export default LogoSection;
