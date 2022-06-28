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
            sx={{ mx: "0.5rem", backgroundColor: "white" }}
            onClick={handleClick}
        >
            {name}
        </Button>
    );
}

export default NavButtons;