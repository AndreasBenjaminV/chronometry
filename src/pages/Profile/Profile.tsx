import { Container, Card, Typography, Button, Avatar, Grid, Box, TextField } from "@mui/material";
import { styled } from "@mui/system";

const ProfileContainer = styled(Container)({
  backgroundColor: "#121212",
  color: "#fff",
  minHeight: "100vh",
  padding: "20px",
  width: "100vw", // Asegura que ocupe todo el ancho de la pantalla
  height: "100vh", // Asegura que ocupe toda la altura de la pantalla
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledCard = styled(Card)({
  backgroundColor: "#1e1e1e",
  color: "#fff",
  borderRadius: "15px",
  padding: "20px",
  marginBottom: "20px",
  width: "100%",
  maxWidth: "800px",
});

const ProfileAvatar = styled(Avatar)({
  width: 100,
  height: 100,
  marginBottom: "10px",
});

import { useState } from "react";

const ProfilePage = () => {
  const [showForm, setShowForm] = useState(false);
  const formatRUT = (rut: string) => {
    const cleanRut = rut.replace(/\D/g, "");
    const rutBody = cleanRut.slice(0, -1);
    const rutDv = cleanRut.slice(-1);
    const formattedRutBody = rutBody.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${formattedRutBody}-${rutDv}`;
  };

  const [rut, setRut] = useState("");

  const handleRutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputRut = event.target.value;
    setRut(formatRUT(inputRut));
  };

  return (
    <ProfileContainer>
      <StyledCard>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <ProfileAvatar />
              <Typography variant="h6">Nombre + Apellido</Typography>
              <Typography variant="body2">RUT: 12345678-9</Typography>
              <Typography variant="body2">Email: correo@ejemplo.com</Typography>
              <Typography variant="body2">Fecha de Nacimiento: 01/01/1990</Typography>
              <Button variant="contained" sx={{ marginTop: "10px" }} onClick={() => setShowForm(true)}>Editar Perfil</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">Mis Entrenamientos</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              No tienes entrenamientos para el día de hoy
            </Typography>
          </Grid>
        </Grid>
      </StyledCard>
 
    {/* Cambiar la forma en que se ve este formulario */}   
      {showForm && (
        <Box component="form" sx={{ marginTop: "20px", width: "70%", backgroundColor: "#fff", padding: "10px", borderRadius: "10px" }}>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            margin="normal"
            size="small"
            required
            inputProps={{ pattern: "^[a-zA-ZÀ-ÿ\\s]{1,40}$" }} 
          />
          <TextField
            fullWidth
            label="Apellido"
            variant="outlined"
            margin="normal"
            size="small"
            required
            inputProps={{ pattern: "^[a-zA-ZÀ-ÿ\\s]{1,40}$" }}
          />
          <TextField
            fullWidth
            label="RUT"
            variant="outlined"
            margin="normal"
            size="small"
            required
            value={rut}
            onChange={handleRutChange}
            helperText="Ingrese un RUT válido"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            size="small"
            required
            type="email"
            helperText="Ingrese un email válido"
          />
          <TextField
            fullWidth
            label="Fecha de Nacimiento"
            variant="outlined"
            margin="normal"
            size="small"
            required
            type="date"
            InputLabelProps={{ shrink: true }}
            helperText="Ingrese una fecha válida"
          />
          <Button variant="contained" sx={{ marginTop: "10px" }} type="submit">Actualizar</Button>
        </Box>
      )}

      <StyledCard>
        <Typography variant="h6">Clases Próximas</Typography>
        <Typography variant="body2">[tipo] - [lugar] - Fecha</Typography>
        <Typography variant="body2">[tipo] - [lugar] - Fecha</Typography>
      </StyledCard>

      <StyledCard>
        <Typography variant="h6">Clases Pasadas</Typography>
        <Typography variant="body2">[tipo] - [lugar] - Fecha</Typography>
        <Typography variant="body2">[tipo] - [lugar] - Fecha</Typography>
      </StyledCard>
    </ProfileContainer>
  );
};

export default ProfilePage;