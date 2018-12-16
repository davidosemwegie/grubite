import React, { Component } from 'react';
import './Header.css'

class index extends Component {
    render() {
        return (
            <div className='Header'>
                {/* <div className=""></div>
                <div>
                    <p className="GrubiteText">GRUBITE</p>
                </div>
                <div>
                    <button className="HeaderButton">Sign In</button>
                </div> */}

                {/* <div className="HeaderList">
                    <p className="GrubiteText">GRUBITE</p>
                    <span className="HeaderListItem HeadButtonContainer">
                        <button className="HeaderButton">Sign In</button>
                    </span>
                </div> */}

                <ul className='HeaderList'>
                    <li className="HeaderListItem GrubiteTextContainer">
                        <p className="GrubiteText">GRUBITE</p>
                    </li>
                    <li className="HeaderListItem HeadButtonContainer">
                        <button className="HeaderButton">Sign In</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default index;