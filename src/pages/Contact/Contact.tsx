import React, { useState } from 'react';
import './Contact.css';
import { Box, TextField, Button, Typography, Paper, Link } from "@mui/material";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError('Por favor, ingrese un email válido.');
            return;
        }
        setEmailError('');
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Correo enviado exitosamente');
                // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito al usuario
            } else {
                console.error('Error al enviar el correo');
                // Aquí puedes agregar lógica adicional, como mostrar un mensaje de error al usuario
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            // Aquí puedes agregar lógica adicional, como mostrar un mensaje de error al usuario
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, width: "100%" }}>
            <Box className="contact-container" display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
                <Box className="contact-info" flex={1}>
                    <Typography variant="h4" component="h2">Servicio Técnico de Chronometry</Typography>
                    <br />
                    <Typography>¿Tienes alguna pregunta o problema con tu aplicación? ¡Estamos aquí para ayudarte!</Typography>
                    <br />
                    <Typography>Horario de atención: Lunes a Viernes de 9:00 a 18:00</Typography>
                    <br />
                    <Typography>Contáctanos por teléfono o correo electrónico:</Typography>
                    <Typography><strong>Teléfono:</strong> +123 456 7890</Typography>
                    <Typography><strong>Email:</strong> soporte@chronometry.com</Typography>
                </Box>
                <Box className="contact-form" flex={1}>
                    <Typography variant="h5" component="h2" mb={2}>Contáctanos</Typography>
                    <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                error={!!emailError}
                                helperText={emailError}
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Mensaje"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                multiline
                                rows={4}
                            />
                        </Box>
                        <Button variant="contained" color="primary" type="submit">Enviar</Button>
                    </form>
                </Box>
            </Box>

            <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                <Link href="#" onClick={() => window.history.back()}>Volver</Link>
            </Typography>
        </Paper>
    );
};

export default Contact;