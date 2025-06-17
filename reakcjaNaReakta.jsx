import React, {Component} from "react";
import Card from "react-bootstrap/Card";


class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://blogtai.herokuapp.com/api/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const {items} = this.state;
        return (
            <React.Fragment>
                {items.map((item, key) => {
                    return <div key={key}>
                        <Card style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Img variant="top" src={item.img} alt={item.caption} />
                            <Card.Body>
                                <Card.Title>{item.caption}</Card.Title>
                                <Card.Text>
                                    {item.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </React.Fragment>)
    }
}

export default Posts;
