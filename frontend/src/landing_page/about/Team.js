import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className='text-center'>People</h1>
            </div>

            <div className='row p-3 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-5 text-center'>
                    <img src='Media/Images/MySelfe.jpeg' style={{ borderRadius: "100%", width: "75%" }} />
                    <h4 className='mt-5'>Utkarsh Raj</h4>
                    <h6>B. Tech CSE Student</h6>
                </div>
                <div className='col-6 p-3'>
                    <p>This is Utkarsh Raj, B. Tech final year student.</p>
                    <p>This project is based on the case study done on various other trading platforms.It is just for educational purpose.</p>
                    <p>It's main focus on Managing and displaying real-time stock data efficiently.
                        Providing secure user authentication and data storage.
                        Ensuring scalability during high user traffic.
                        Creating an interactive and responsive UI/UX.</p>
                    <p>This project successfully implements a scalable trading website, inspired by platforms like Zerodha and Groww. Using ReactJS, MongoDB Atlas, and AWS, it delivers an efficient, secure, and user-friendly platform for retail traders.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Team;
