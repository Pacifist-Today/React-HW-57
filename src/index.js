import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Card>
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Text</Card.Text>
        </Card.Body>
      </Card>
  </React.StrictMode>
);