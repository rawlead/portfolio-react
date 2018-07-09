import React from 'react';
import './Info.css';
import M from "materialize-css";

(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
    var o = document.getElementsByTagName('script')[0];
    o.parentNode.insertBefore(s, o);
})();

class Info extends React.Component {
    componentDidMount() {
        M.ScrollSpy.init(this.scrollSpy);
    }

    render() {
        return (
            <div id="info" className="section scrollspy"
                 ref={(scrollSpy) => {
                     this.scrollSpy = scrollSpy
                 }}>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8">
                            <h3>More info</h3>
                            <h6>junior | intern.</h6>
                            <div className="divider"></div>
                            <h6> experience: 2 years.</h6>

                            <h6>recent graduate.</h6>
                            <div className="divider"></div>

                            <h6>age: 23.</h6>
                            <h6>born in Ukrane.</h6>
                            <h6>live in Poland.</h6>
                            <div className="divider"></div>
                            <h6>excited to learn new technologies and try on new responsibilities and roles.</h6>
                            <div className="divider"></div>
                            <h6>able to thrive in a fast-paced and schedule-driven environment.</h6>
                        </div>
                        <div className="col s12 m2">
                            <div data-iframe-width="150" data-iframe-height="270"
                                 data-share-badge-id="61136f12-504c-475c-941f-7657fdd8c37e"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Info;