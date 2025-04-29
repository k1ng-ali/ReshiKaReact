import React, {Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    setActive = () => {
        this.setState({active: !this.state.active});
    }

    render() {
        const {filter} = this.props;
        return (
            <div>
                <div className={`filter-item ${this.state.active ? 'item-active' : ''}`}
                onClick={() => this.setActive()}>
                    {filter}
                </div>
            </div>
        );
    }
}
export default Filter;
