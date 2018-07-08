import React, {Component} from 'react';
import M from 'materialize-css';
import './ParallaxSec.css';


class ParallaxSec extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    setTest =() => (
        this.forceUpdate()
    )

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        });
    }


    componentDidUpdate() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        });
    }


    render() {
        return (

            <div className="parallax-container parallax__container__top">
                <div className="parallax parallax__top">
                    <img src={this.props.parallaxImgUrl} onClick={()=> this.setState(prevState => prevState)} alt="Parallax"/>
                </div>

                <div className="caption parallax-caption center-align">
                    <h3 className="white-text">Ivan Shyrai</h3>
                    <h6 className="white-text">Intern | Junior Web Developer</h6>
                </div>
            </div>
        )
    }

}

export default ParallaxSec;