import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <main className="py-3">
                <Container>
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/login" component={LoginScreen} />
                </Container>
            </main>
        </Router>
    );
};

export default App;