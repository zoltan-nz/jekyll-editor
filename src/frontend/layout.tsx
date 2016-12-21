import * as React from 'react';
import {Input} from "./input";

export interface LayoutProps {

}

export interface LayoutState {

}

export class Layout extends React.Component<LayoutProps, LayoutState> {

  constructor(props) {
    super(props);
  }

  readFromBackend() {
    return fetch('api/files');
  }

  public render() {
    return (
      <div>
        <p>Read a directory, select a folder</p>

        {this.readFromBackend().then(response => <p>{response}</p>)}

      </div>
    );
  }
};
