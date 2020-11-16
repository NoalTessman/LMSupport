import React, { Component } from 'react'
import "./CSS/SupportLines.css"

export default class SupportLines extends Component {
    render() {
        const ViewSupportLines = () =>{
            return(
                <div className="w-full" id="SupportLineContainer">
                    {require("../supportlines.json").ListofLines.map((currLine, i)=>{
                        return(
                        <div className="m-4 flex flex-col bg-white shadow-xl cursor-pointer rounded-lg">
                            <p className="text-4xl font-bold text-orange-300 tracking-wide flex justify-center">{currLine.Name}</p>
                            {currLine.Chat!=""&&<p className="bg-blue p-4">Chat:{currLine.Chat}</p>}
                            {currLine.Number != ""&&<p className="bg-blue p-4">Phone Number:{currLine.Number}</p>}
                            {currLine.Website != ""&&<p className="bg-blue p-4 hover:text-white bg-gray-400"><a href={currLine.Website}>Their site ></a></p>}
                            {currLine.Email != ""&&<p className="bg-blue p-4">Email:{currLine.Email}</p>}
                            {currLine.Description != ""&&<p className="bg-blue p-2 overflow-hidden font-light">{currLine.Description}</p>}
                        </div>
                        )
                    })}
                </div>)}
        return (
            <div className="SupportLinesPage">
                <ViewSupportLines/>
            </div>
        )
    }
}
