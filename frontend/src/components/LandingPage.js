import React, { Component } from 'react'
import "./CSS/Landing.css"

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="h-40 bg-white">
                    <input className="text-gray-500" default="Search for a guide/question"></input>
                </div>
                <div className="h-60 text-white font-family-sans"id="LandingPageText">
                    <p className="text-6xl p-5">
                        Who We Are
                    </p>
                    <p className="text-3xl font-light">
                        <p className="pb-6 p-4">
                        This website was started by a previous Canvas employee who 
                        enjoyed the product, but saw some problems. Their support site which
                        provides guides for the product, is lackluster in a few key ways which 
                        occasionally leaves Teachers, Admins, and Students without a way to 
                        do their work. 
                        </p>
                        <p className="pb-6 p-4">         
                        Canvas support is a great product and their Agents are some of the best, 
                        but the problems they solve are very often easy and they are 
                        repeatedly called for basic problems that are simple enough to be searched
                        for, but their information base does not provide adequate support for many
                        teachers       
                        </p >
                        <p className="pb-20 p-4">         
                        This site's aim is to provide a comprehensive forum and Information base
                        for canvas useful for students, teachers, and Admins.
                        </p>
                    </p>
                </div>
            </div>
        )
    }
}
