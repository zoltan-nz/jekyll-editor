import * as React from 'react';

export interface InputProps {
  name: string;
}

export class Input extends React.Component<InputProps, InputProps> {

  private handleChange(event) {
    this.setState({ name: event.target.value });
  }

  public render() {
    return <input value={this.state.name} onChange={this.handleChange} />;
  }
}
