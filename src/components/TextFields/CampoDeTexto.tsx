import React, { ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
}


const CampoDeTexto: React.FC<Props> = ({
  setValue,
  label

}) => {

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, margin: "1rem" }}>
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end'}}
      >
        <TextField
          label={label}
          variant="standard"
          required
          onChange={onChangeValue}
          sx={{ width: "20rem" }}
        />
      </Box>
    </Box>
  );

}

export default CampoDeTexto;
