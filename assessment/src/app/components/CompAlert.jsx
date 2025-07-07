import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function CompAlert(){
    return(
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      You won!!!!!!!
    </Alert>
    )
}