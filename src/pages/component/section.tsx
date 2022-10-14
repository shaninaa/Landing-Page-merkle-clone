import React from "react";
import Image from 'next/image';
import foto from '../../../public/pic.jpg';


export default function section(){
    return (
        <div className="section" style={{paddingTop:200, paddingBottom:200, backgroundImage:"url(/background.svg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <h1 className="font-bold" style={{fontSize:75, color:"white"}}>Creative & Innovative Ideas</h1>
                        <p className="description" style={{color:"white"}}>2002, Columbus, Ohio; an early team of Merkle Innovation was formed by some Indonesia diaspora aiming to transform enterprise technology.</p>
                        <button type="button" className="btn btn-primary">Lest Roll</button>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <Image src={foto} className="rounded float-right" width={550} height={410} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}