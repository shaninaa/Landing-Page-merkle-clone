import React from "react";
import Image from 'next/image';
import Pic from '../../../public/Mk-3.webp';

export default function Brand(){
    return (
        <div className="section" style={{padding:50, backgroundColor:"white"}}>
            <div className="container" >
                <div className="row" >
                    <div className="col-md-6">
                    <div className="col col-lg-6" style={{ }} >
                    <h4 className="font-bold" style={{fontSize:25, color:"black"}}>Our Vision & Mision</h4>
                    </div>
                    <div className="col col-lg-6"style={{ marginTop:100}} >
                        <h4 className="font-bold" style={{fontSize:25, color:"black"}}>Our Vision & Mision</h4>
                        <p className="description text-muted" style={{color:"black"}}>Contributing to Global Industries by Providing TrustedSolution to Improve Value with Information Technology, Digital Technology, and Media Technology.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}