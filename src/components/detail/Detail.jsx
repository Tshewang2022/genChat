import React from 'react'
import './detail.css';
function Detail() {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Db copper</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Shared photo</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./donwload.png" alt="" className='icon' />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./donwload.png" alt="" className='icon' />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
            </div>
            <button>Block User</button>
        </div>
    )
}

export default Detail