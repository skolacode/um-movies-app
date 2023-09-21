import { Box, Button, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const onClickLogin = () => {
    Cookies.set('token', token);
    navigate('/');
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <div>
        <TextField
          label="Acess Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          style={{ marginBottom: 12, backgroundColor: '#ffffff' }}
        />
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={onClickLogin}
        >
          Login
        </Button>
      </div>
    </Box>
  )
}

export default LoginPage;
