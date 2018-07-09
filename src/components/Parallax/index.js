import React, {Component} from 'react';
import M from "materialize-css";


class Parallax extends Component {

    componentDidMount() {
        M.Parallax.init(this.parallax);
        M.ScrollSpy.init(this.scrollSpy);
    }

    render() {
        return (
            // Parallax container wrapper
            <div id={this.props.parallaxContainerId}
                 className={this.props.parallaxContainerStyle}
                 ref={(scrollSpy) => {
                     this.scrollSpy = scrollSpy
                 }}>

                {/*parallax image section*/}
                <div className={this.props.parallaxImgStyle}
                     ref={(parallax) => {
                         this.parallax = parallax
                     }}>
                    <img src={this.props.parallaxImg}
                         alt="Parallax"/>
                </div>

                {/* parallax title/content */}
                {this.props.children}

            </div>
        )
    }
}

export default Parallax;