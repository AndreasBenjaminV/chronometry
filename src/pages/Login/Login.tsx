import React from "react";
import { Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import "./Login.css";

const LoginPage: React.FC = () => {
  return (
    <Box
      className="login-container" >

      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Inicia sesión en Chronometry
        </Typography>

        <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Nombre de usuario"
            fullWidth
            margin="normal"
            required
            helperText="El nombre de usuario debe contener unicamente caracteres alfanuméricos."
          />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            required
            helperText="La contraseña debe contener de 8 a 15 caracteres, con al menos 1 número y una letra mayúscula."
          />
          
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Iniciar sesión
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            <Link href="#" onClick={() => window.history.back()}>Volver</Link>
          </Typography>

        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
