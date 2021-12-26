import React from 'react'
import styled from 'styled-components'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SendIcon from '@material-ui/icons/Send';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

function Button({ text, color, borderColor, icon, icon_one, icon_two }) {
    console.log(icon);
    return (
        
        <Buttons bgColor = {color} border={borderColor}>
            
            {/* { img && <img src={img} alt="search" />} */}

            { icon && <AccountBalanceWalletIcon style= {{'width': "17.5px", "margin-right": "7px",
                        "display": "flex", "align-items": "center", "justify-content": "center"
                    }}/> }
            
            
            
            <span>{ text }</span>

            { icon_one && <SendIcon style= {{'width': "17.5px", "margin-left": "7px",
                        "display": "flex", "align-items": "center", "justify-content": "center"
                    }}/> }

            { icon_two && <PlayCircleFilledWhiteIcon style= {{'width': "17.5px", "margin-left": "7px",
                        "display": "flex", "align-items": "center", "justify-content": "center", "transform": "rotate(90deg)",
                    }}/> }

        </Buttons>
    )
}

export default Button

const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    padding: 10.5px 15px;
    background-color: ${props => `${props.bgColor};`}
    color: white;
    border: ${props => `${props.border};`};
    margin-left: 20px;


    img {
        width: 17.5px;
        margin-right: 7px;
        color: white;
    }

    span {
        font-size: 1em;
        font-weight: bold;
    }
`
