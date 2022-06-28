import React from 'react';

import { Button, Grid } from '@mui/material';

interface Props {
    name: string,
    handleClick: () => void
}

const NavButtons: React.FC<Props> = ({ name, handleClick }) => {
    return (
        <Button
            variant='outlined'
            sx={{ my: 2, width: "10vw", height: "4vh" }}
            onClick={handleClick}
        >
            {name}
        </Button>
    );
}

export default NavButtons;