import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Ini Home</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { pikachu: state.pikachu };
}

export default connect(mapStateToProps)(Home)