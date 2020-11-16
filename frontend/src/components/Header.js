import React, { Component } from 'react'
import "./CSS/header.css"
import {Link} from "react-router-dom"

function HeaderLink(props){
    return(
        
    <div className="rounded-lg bg-orange-500 text-blu p-1"  id="HeaderLink">
        <Link to={props.endpoint}>
            {props.Link}
        </Link>
    </div>)
}
export default class Header extends Component {
    
    render() {
        return (
            <div className="h-12 bg-org" id="HeaderContainer">
                <div className="text-2xl" id="HeaderTitle">
                    <div>
                        <Link to="/">
                            LMSupport
                        </Link>
                    </div>
                    </div>
                    <div className=""id="HeaderLinks">
                        <HeaderLink Link="Support Lines" endpoint="/supportlines"/>
                        <HeaderLink Link="Ask A Question"/>
                        <HeaderLink Link="Support Us"/>
                    </div>
                </div>
        )
    }
}
