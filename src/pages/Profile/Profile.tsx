import { Container, Card, Typography, Button, Avatar, Grid, Box, TextField } from "@mui/material";
import { useState } from "react";
import "./Profile.css";

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

  const totalClasses = 20;
  const attendedClasses = 15;
  const attendancePercentage = (attendedClasses / totalClasses) * 100;

  return (
    <Container className="profile-container">
      <Card className="profile-card">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Box className="profile-box">
              <Avatar className="profile-avatar" />
              <Typography variant="h6">Nombre + Apellido</Typography>
              <Typography variant="body2">RUT: 12345678-9</Typography>
              <Typography variant="body2">Email: correo@ejemplo.com</Typography>
              <Typography variant="body2">Fecha de Nacimiento: 01/01/1990</Typography>
              <Button variant="contained" className="edit-button" onClick={() => setShowForm(true)}>Editar Perfil</Button><br />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">Mis Entrenamientos</Typography>
            <Typography variant="body2" className="muted-text">
              No tienes entrenamientos para el día de hoy
            </Typography>
          </Grid>
        </Grid>
      </Card>

      {showForm && (
        <Box className="profile-form-overlay">
          <Box className="profile-form">
        <Button className="close-button" onClick={() => setShowForm(false)}>X</Button>
        <TextField fullWidth label="Nombre" variant="outlined" margin="normal" size="small" required />
        <TextField fullWidth label="Apellido" variant="outlined" margin="normal" size="small" required />
        <TextField fullWidth label="RUT" variant="outlined" margin="normal" size="small" required value={rut} onChange={handleRutChange} helperText="Ingrese un RUT válido" />
        <TextField fullWidth label="Email" variant="outlined" margin="normal" size="small" required type="email" />
        <TextField fullWidth label="Fecha de Nacimiento" variant="outlined" margin="normal" size="small" required type="date" InputLabelProps={{ shrink: true }} />
        <Button variant="contained" className="update-button" type="submit">Actualizar</Button>
          </Box>
        </Box>
      )}

      <Card className="profile-card">
        <Typography variant="h6">Resumen de Asistencia</Typography>
        <Box className="attendance-box">
          <svg viewBox="0 0 36 36" width="100" height="100">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4caf50" strokeWidth="4" strokeDasharray={`${attendancePercentage}, 100`} />
            <text x="18" y="20.35" fill="#fff" fontSize="8" textAnchor="middle">{attendancePercentage.toFixed(2)}%</text>
          </svg>
        </Box>
        <Typography variant="body2">Clases Tomadas: {attendedClasses}</Typography>
      </Card>

      <Card className="profile-card">
        <Typography variant="h6">Clases Próximas</Typography>
        <Typography variant="body2">[tipo] - [lugar] - Fecha</Typography>
      </Card>

      <Card className="profile-card">
        <Typography variant="h6">Clases Pasadas</Typography>
        <Typography variant="body2">[tipo] - [lugar] - Fecha</Typography>
      </Card>
    </Container>
  );
};

export default ProfilePage;
