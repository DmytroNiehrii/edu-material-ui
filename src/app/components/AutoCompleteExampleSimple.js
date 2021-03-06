import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
    state = {
        dataSource: [],
    };

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        floatingLabelText="Full width"
                        fullWidth={true}
                    />
                </MuiThemeProvider>

            </div>
        );
    }
}