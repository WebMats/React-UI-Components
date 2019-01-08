import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component {
    state = {
        refreshCount: 6,
        heartCount: 4
    }

    incrementRefreshCount = () => {
        this.setState({refreshCount: this.state.refreshCount + 1})
    }
    incrementHeartCount = () => {
        this.setState({heartCount: this.state.heartCount + 1})
    }

    render() {
    return (
        <footer className="Footer">
            <div className="IconHolder">
                <i className="far fa-comment"></i>

            </div>
            <div className="IconHolder">
                <i onClick={this.incrementRefreshCount} className="fas fa-sync-alt"> {this.state.refreshCount}</i>
            </div>
            <div className="IconHolder">
                <i onClick={this.incrementHeartCount} className="far fa-heart"> {this.state.heartCount}</i>
            </div>
            <div className="IconHolder">
                <i className="far fa-envelope"></i>
            </div>
        </footer>
    )
}
}

export default Footer;