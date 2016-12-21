import * as React from 'react';

export interface InputProps {
  handleChange(event: any): void;
}

export class Input extends React.Component<InputProps, undefined> {

  constructor(props: InputProps) {
    super(props);
  }

  public render() {
    return <input onChange={e => this.props.handleChange(e)} />;
  }
}
