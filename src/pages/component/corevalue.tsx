import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Pic from '../../../public/global-industri.jpeg';

export default function CoreValue(){
    return (
        <div className="section item-center" style={{padding:50, backgroundColor:"white"}}>
            <div className="container">
            <h3 className="text-center" style={{color:"#007ff8"}}>Our Core Value</h3>
                <div className="row " style={{marginTop:50}}>
                    <div className="col col-lg-4">
                        <div className="card border-0" >
                            <div className="card-body">
                                <div className="image-wrapper"style={{color:"#007ff8", marginBottom:20,width:50, height:50}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </div>
                                <h5 className="card-title" style={{color:"#007ff8"}}>Integrity</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text text-muted">Always present, connecting with transparency, dignity and mutual respect.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="card border-0" >
                            <div className="card-body">
                                <div className="image-wrapper"style={{color:"#007ff8", marginBottom:20,width:50, height:50}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                </svg>

                                </div>
                                <h5 className="card-title" style={{color:"#007ff8"}}>Reliable Innovative</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text text-muted">Be Adventurous, Creative, and Open-Minded in in order to deliver solution that having value add to customer and consistently good in quality and performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="card border-0" >
                            <div className="card-body">
                                <div className="image-wrapper"style={{color:"#007ff8", marginBottom:20,width:50, height:50}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </div>
                                <h5 className="card-title" style={{color:"#007ff8"}}>Accountable</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text text-muted">Delivering our very best in all we do, holding ourselves accountable for results.​​</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop:40}}>
                    <div className="col col-lg-6">
                        <div className="card border-0" >
                            <div className="card-body">
                                <div className="image-wrapper"style={{color:"#007ff8", marginBottom:20,width:50, height:50}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                </div>
                                <h5 className="card-title" style={{color:"#007ff8"}}>Mindfulness</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text text-muted">Proactively becomes a thoughtful, cognitive exercise, rather than an impulsive reaction to immediate needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div className="card border-0" >
                            <div className="card-body">
                                <div className="image-wrapper"style={{color:"#007ff8", marginBottom:20,width:50, height:50}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>

                                </div>
                                <h5 className="card-title" style={{color:"#007ff8"}}>Always Synergy</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text text-muted">Build a positive productive team and family spirit for constant improvement with collaborative and collective work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}