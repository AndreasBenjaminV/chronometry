import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Link } from '@mui/material';
import { useParams } from 'react-router-dom';

interface Attendee {
    id: number;
    name: string;
}

interface TrainingDetails {
    id: number;
    title: string;
    date: string;
    trainer: string;
    location: string;
    time: string;
    attendees: Attendee[];
}

const trainingData: TrainingDetails = {
    id: 1,
    location: 'Leopoldo Carvallo 270, Valparaíso, Chile',
    time: '04:30 PM',
    date: '2025-01-02',
    trainer: 'Álvaro Torres',
    title: 'Piscina IND',
    attendees: [
        { id: 1, name: 'Rocío Torres' },
        { id: 2, name: 'Santiago Castillo' },
        { id: 3, name: 'Andreas Valero' },
    ],
};

const Training: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // For this example, we are using the hardcoded trainingData
    // In a real application, you would fetch the data based on the id
    if (id !== '1') {
        return <Typography variant="h6">Training not found</Typography>;
    }

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Detalles del entrenamiento {trainingData.title}
                </Typography>
                <Typography variant="body1"><strong>Location:</strong> {trainingData.location}</Typography>
                <Typography variant="body1"><strong>Time:</strong> {trainingData.time}</Typography>
                <Typography variant="body1"><strong>Date:</strong> {trainingData.date}</Typography>
                <Typography variant="body1"><strong>Trainer:</strong> {trainingData.trainer}</Typography>
                <br />
                <Typography variant="h5" gutterBottom> 
                    Asistentes
                </Typography>
                <List sx={{ maxHeight: 200, overflow: 'auto' }}>
                    {trainingData.attendees.map(attendee => (
                        <ListItem key={attendee.id}>
                            <ListItemText primary={attendee.name} />
                        </ListItem>
                    ))}
                </List>
            </Container>

            <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                <Link href="#" onClick={() => window.history.back()}>Volver</Link>
          </Typography>

        </Paper>
    );
};

export default Training;