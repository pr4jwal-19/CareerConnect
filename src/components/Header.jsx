
import {AppBar, Toolbar, styled, Typography } from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';

const StyledAppBar = styled(AppBar)({
    background: "#232C33"

})


const Header = () => {

    const navigate = useNavigate();

    return(
        <StyledAppBar>
            <Toolbar>

                <FontAwesomeIcon icon={faBriefcase} />
                <Typography variant="h6" onClick={() => navigate(routePath.home)} style={{ marginLeft: '0.5rem', flexGrow: 1 }}>
                    CareerConnect
                </Typography>
                <Typography variant="body1" onClick={() => navigate(routePath.create)} style={{ marginRight: '1rem' }}>
                    Post a Job
                </Typography>
                <Typography variant="body1" onClick={() => navigate(routePath.posts)}>
                    Find Jobs
                </Typography>

            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;