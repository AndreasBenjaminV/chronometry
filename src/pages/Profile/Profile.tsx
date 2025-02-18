import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

import "./Profile.css"
import { Link } from 'react-router-dom';

interface User {
    name: string;
    email: string;
}

interface Training {
    id: number;
    title: string;
    date: string;
    trainer: string;
    location: string;
}

const exampleUser: User = {
    name: "Administrador",
    email: "admin@chronometry.com"
};


const exampleTraining: Training[] = [
    { id: 1, title: "Piscina IND", date: "2023-01-01", trainer: "John Doe", location: "Piscina IND" },
    { id: 2, title: "Piscina IND", date: "2023-02-01", trainer: "John Doe", location: "Piscina IND" },
    { id: 3, title: "Piscina IND", date: "2023-03-01",  trainer: "John Doe", location: "Piscina IND" },
    { id: 4, title: "Gimnasio Alejo Barrios", date: "2023-04-01", trainer: "John Doe", location: "Gimnasio Alejo Barrios" },
    { id: 5, title: "Piscina IND", date: "2025-05-09", trainer: "John Doe", location: "Piscina IND" },
];

const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [pastClasses, setPastClasses] = useState<Training[]>([]);
    const [upcomingClasses, setUpcomingClasses] = useState<Training[]>([]);

    useEffect(() => {
        setUser(exampleUser);
        const now = new Date();
        const past = exampleTraining.filter((trn) => new Date(trn.date) < now);
        const upcoming = exampleTraining.filter((trn) => new Date(trn.date) >= now);
        setPastClasses(past);
        setUpcomingClasses(upcoming);
    }, []);

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>   
            <Container>
                {user && (
                    <div>
                        <Typography variant="h4" gutterBottom>
                            Perfil de {user.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Correo electrónico: {user.email}
                        </Typography>
                    </div>
                )}
                <div>
                    <Typography variant="h5" gutterBottom>
                        Entrenamientos pasados
                    </Typography>
                    <List>
                        {pastClasses.map((trn: Training) => (
                            <React.Fragment key={trn.id}>
                                <ListItem>
                                    <ListItemText 
                                        primary={
                                            <Link to={`/training/${trn.id}`} state={{ classDetails: trn }}>
                                                {trn.title}
                                            </Link>
                                        } 
                                        secondary={trn.date} 
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </div>
                <div>
                    <Typography variant="h5" gutterBottom>
                        Próximos entrenamientos
                    </Typography>
                    <List>
                        {upcomingClasses.map((trn: Training) => (
                            <React.Fragment key={trn.id}>
                                <ListItem>
                                    <ListItemText 
                                        primary={
                                            <Link to={`/training/${trn.id}`} state={{ trainningDetails: trn }}>
                                                {trn.title}
                                            </Link>
                                        } 
                                        secondary={trn.date} 
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </div>
            </Container>

        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
            <Link to="/" onClick={() => {
            // Add your logout logic here
            console.log("User logged out");
            }}>
            Cerrar sesión
            </Link>
        </Typography>

        </Paper>
    );
};

export default Profile;