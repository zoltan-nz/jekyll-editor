import * as React from 'react';
import { Input } from './input';

export interface HelloState {
  name: string;
}

export class Layout extends React.Component<{}, HelloState> {

  constructor(props) {
    super(props);

    this.state = {name: 'Default'};
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setState({name: target.value})
  }

  public render() {
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <Input handleChange={this.handleNameChange}/>
      </div>
    );
  }
}
