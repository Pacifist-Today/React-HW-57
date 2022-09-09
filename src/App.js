import React from "react";
import Card from "./components/Card"

class App extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>Text</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default App