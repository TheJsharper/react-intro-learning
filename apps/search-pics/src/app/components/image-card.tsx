/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Result } from '../app.models';

export default class ImageCard extends React.Component<Result, { spans: number }>{
    private imgRef: React.RefObject<HTMLImageElement>;
    override state = { spans: 0 };
    constructor(props: Result) {
        super(props);
        this.imgRef = React.createRef<HTMLImageElement>()
    }
    override componentDidMount(): void {
        this.imgRef.current?.addEventListener("load", (_: Event) => this.setSpans());
    }
    setSpans(): void {
        const height = this.imgRef.current?.clientHeight;
        const spans = Math.ceil(height! /250);
        this.setState({ spans });

    }
    override render(): React.ReactNode {
        const { urls, alt_description } = this.props;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>

                <img ref={this.imgRef} src={urls.regular} alt={alt_description || ''} />
            </div>
        );
    }
}