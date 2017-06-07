import React, {Component} from 'react';
import AutoCompleteExampleSimple from './components/AutoCompleteExampleSimple';

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <div>
                <AutoCompleteExampleSimple/>
            </div>
        );
    }
}

export default Main;
