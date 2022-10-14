import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Grab from '../../../public/grab.webp';
import Moka from '../../../public/moka.webp';
import Ismaya from '../../../public/ismaya.webp';
import Djarum from '../../../public/djarum.webp';
import Buma from '../../../public/buma.webp';
import Miens from '../../../public/miens.webp';
import Lkpp from '../../../public/lkpp.webp';
import Hino from '../../../public/hino.webp';

export default function Client(){
    return (
        <div className="section item-center" style={{padding:50, backgroundColor:"white"}}>
            <div className="container">
            <h2 className="text-center" style={{fontSize:50, color:"#007ff8"}}>Our Client</h2>
            <p className="text-center text-muted">Driving technology for leading brands</p>
                <div className="row ">
                    <div className="col col-lg-3">
                        <div className="card border-0" >
                            <div className="card-body" style={{backgroundColor:"white"}}>
                            <Image src={Grab} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card border-0 " >
                            <div className="card-body">
                            <Image src={Moka} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card border-0" >
                            <div className="card-body">
                            <Image src={Ismaya} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card border-0 " >
                            <div className="card-body">
                            <Image src={Djarum} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row " style={{ marginTop:40}}>
                    <div className="col col-lg-3">
                        <div className="card border-0" >
                            <div className="card-body">
                            <Image src={Buma} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card border-0" >
                            <div className="card-body">
                            <Image src={Miens} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card border-0" >
                            <div className="card-body">
                            <Image src={Lkpp} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card border-0" >
                            <div className="card-body">
                            <Image src={Hino} alt="logo merkle" width={200} height={150}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}