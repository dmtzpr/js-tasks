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

const BorderedButton = props => {
    return <div style={{ border: '1px solid red' }}>{props.children}</div>;
};

const AlertButton = (WrappedButton, props) => {
    return class extends React.PureComponent {
        onClick = () => {
            alert('HOC click');
        };

        render() {
            return <WrappedButton onButtonClick={this.onClick} {...this.props} />;
        }
    };
};

const AlarmButton = AlertButton(Button);

class App extends React.Component {
    onClick = () => {
        console.log('composition button clicked');
    };

    render() {
        return (
            <div>
                <BorderedButton>
                    <Button onButtonClick={this.onClick} />
                </BorderedButton>
                <AlarmButton />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
