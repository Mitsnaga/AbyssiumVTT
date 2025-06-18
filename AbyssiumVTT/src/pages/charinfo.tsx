import { TextField } from '@mui/material';
import * as React from 'react';

interface Props {
    onSubmit?: () => void;
}

export const CharInfo: React.FC<Props> = () => {
    return <TextField />;
}