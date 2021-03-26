import React from 'react'

class Header extends React.Component{
    render() {
        const style1 = {
            background: "#000000",
            color: "#ffffff",
            padding: "10px",
            textAlign: "center",
            fontSize: 20
        };

        return (
        <div>
            <p style={style1}>
                To-Do List
            </p>
        </div>
        );
      }
}

export default Header;