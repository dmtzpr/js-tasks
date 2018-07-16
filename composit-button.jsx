class Button extends React.PureComponent {
    handleClick = () => {
        this.props.onButtonClick();
    };

    render() {
        return (
            <button onClick={this.handleClick} style={{ width: '100%', height: '22px' }}>
                Click me!
            </button>
        );
    }
}

const ColoredBorder = props => {
    return <div style={{ border: '1px solid red' }}>{props.children}</div>;
};

class App extends React.Component {
    onClick = () => {
        console.log('composition button clicked');
    };

    render() {
        return (
            <div>
                <ColoredBorder>
                    <Button onButtonClick={this.onClick} />
                </ColoredBorder>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
