import React from "react";
import Image from 'next/image';
import Pic from '../../../public/Mk-7.webp';
import Pic2 from '../../../public/Mk-8.webp';
import Grab from '../../../public/grab.webp';
import GrabBanner from '../../../public/grab-bnr.png';
import Moka from '../../../public/moka.webp';
import MokaBanner from '../../../public/moka-bnr.jpg';
import Ismaya from '../../../public/ismaya.webp';
import IsmayaBanner from '../../../public/dwpx.png';
import Djarum from '../../../public/djarum.webp';
import DjarumBanner from '../../../public/djarum-bnr.jpg';

export default function Teams(){
    return (
        <div className="section" style={{padding:50, backgroundColor:"white"}}>
            <div className="row" style={{marginBottom:50}} >
                <div className="col-md-auto col-lg-2"></div>
                <div className="col-md-auto col-lg-8"  >
                <h3 className="text-center" style={{fontSize:35, color:"#007ff8"}}>
                    Our team’s long-running Apps Development Experiences on various Industries
                </h3>
                </div>
                <div className="col-md-auto col-lg-2"></div>
            </div>
            <div className="container" >
                <div className="row" >
                    <div className="col-md-auto col-lg-4"  >
                        <Image src={Pic} className="rounded"/>
                        <h3 className="text-center" style={{fontSize:30, color:"#007ff8"}}>
                            Una Lopez
                        </h3>
                    </div>
                    <div className="col-md-auto col-lg-4">
                        <Image src={Pic2} className="rounded"/>
                        <h3 className="text-center" style={{fontSize:30, color:"#007ff8"}}>
                            Mike Doe
                        </h3>
                    </div>
                    <div className="col-md-auto col-lg-4"style={{ marginTop:100}} >
                        <h1 className="text-center" style={{fontSize:50, color:"#007ff8"}}>25+</h1>
                        <h4 className="text-center" style={{fontSize:25, color:"#F98864"}}>Amazing team members</h4>
                        <h4 className="text-center" style={{color:"#F98864"}}>Doing amazing job everyday</h4>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row" >
                    <div className="col-md-auto col-lg-8">
                        <div className="card border-0">
                            <Image src={GrabBanner} alt="logo merkle"/>
                            <div className="card-img-overlay">
                                <h5 className="card-title" style={{color:"white"}}><u>Innovative strategies ⇢</u></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-4">
                        <div className="card border-0">
                            <Image src={Grab} alt="logo merkle" width={250} height={270}/>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-auto col-lg-4">
                        <div className="card border-0">
                            <Image src={Moka} alt="logo merkle" width={250} height={270}/>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-8">
                        <div className="card border-0">
                            <Image src={MokaBanner} alt="logo merkle"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title" style={{color:"white"}}><u>Strategic insights ⇢</u></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-auto col-lg-8">
                        <div className="card border-0">
                            <Image src={IsmayaBanner} alt="logo merkle"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title" style={{color:"white"}}><u>Personalized tactics ⇢</u></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-4">
                        <div className="card border-0">
                            <Image src={Ismaya} alt="logo merkle" width={250} height={270}/>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-auto col-lg-4">
                        <div className="card border-0">
                            <Image src={Djarum} alt="logo merkle" width={250} height={270}/>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-8">
                        <div className="card border-0">
                            <Image src={DjarumBanner} alt="logo merkle"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title" style={{color:"white"}}><u>Results-Oriented Solutions ⇢</u></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}