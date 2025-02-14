import React from "react";
import { Box, TextField, Button, Typography, Paper, Link, Grid } from "@mui/material";
import "./Register.css";
import logo from "../../assets/logo.png"; // Asegúrate de que la ruta sea correcta

const LoginPage: React.FC = () => {
  return (
    <Box
    className="register-container" >
      <Grid container spacing={2} sx={{ maxWidth: 1200 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
            <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
              </Typography> <br />

            <Typography variant="h5" align="center" gutterBottom>
              Registrate en Chronometry
            </Typography>

            <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Correo electrónico"
                type="email"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                margin="normal"
                required
                helperText="La contraseña debe contener de 8 a 15 caracteres, con al menos 1 número y una letra mayúscula."
              />
              <TextField
                label="Nombre de usuario"
                fullWidth
                margin="normal"
                required
                helperText="El nombre de usuario debe contener unicamente caracteres alfanuméricos."
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Continuar
              </Button>
            </Box>
            
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Al crear una cuenta, acepta las <Link href="#">Condiciones del servicio</Link>. Para más información sobre las prácticas de privacidad de Chronometry, consulta la <Link href="#">Declaración de privacidad</Link> de Chronometry. Ocasionalmente te enviaremos correos electrónicos relacionados con la cuenta.
            </Typography>


            <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                <Link href="#" onClick={() => window.history.back()}>Volver</Link>
            </Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={logo} alt="Chronometry logo" style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;