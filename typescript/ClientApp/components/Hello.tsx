import * as React from 'react';
import { RouteProps } from 'react-router';
export interface HelloProps {
    compiler:string;
    framework:string;
    &&RouteProps
}

export class Hello extends React.Component<HelloProps, undefined> {
    render(){
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}