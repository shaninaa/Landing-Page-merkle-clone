import React from "react";
import Image from 'next/image';
import DesignPic from '../../../public/design.webp';
import Smartnotif from '../../../public/smart-notif.webp';
import SystemPic from '../../../public/system.webp';

export default function Services(){
    return (
        <div className="section" style={{padding:50, backgroundColor:"white"}}>
            <div className="container" style={{padding:50, marginBottom:50}} >
                <h3 className="text-center" style={{fontSize:45, color:"#007ff8"}}>Our Services & Capabilities</h3>
            </div>
            <div className="container" >
                <div className="row" >
                    <div className="col-md-auto" style={{ backgroundRepeat: "no-repeat",backgroundImage:"url(/feature-bg.svg)"}} >
                        <Image src={DesignPic} className="rounded"/>
                    </div>
                    <div className="col col-lg-5" style={{ marginTop:100}} >
                        <h6 className="font-bold" style={{marginBottom:35,fontSize:15, color:"#F98864"}}>Design</h6>
                        <h6 className="font-bold" style={{marginBottom:35,fontSize:40, color:"#007ff8"}}>Design Thinking</h6>
                        <h4 className="text-muted" style={{fontSize:15, color:"black"}}>Design Thinking helps our client focus on your users and their needs to deliver more useful, usable, and desirable solutions.</h4>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Identify users pain points.​</p>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Define user personas.​</p>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Brainstorm on solutions.</p>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Identify hypotheses and experiments.​​</p>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Define Minimum Viable Product (MVP).</p>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Explore technical solution architecture, including hybrid cloud architecture and potential integration points using Cloud as the platform for the solution.​​​</p>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Create conceptual design using wireframes until playable mock-up, if applicable.​​</p>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row" >
                    <div className="col col-lg-5"  style={{ marginTop:100}}>
                        <h6 className="font-bold" style={{marginBottom:35,fontSize:15, color:"#F98864"}}>Smart Notification</h6>
                        <h6 className="font-bold" style={{marginBottom:35,fontSize:40, color:"#007ff8"}}>Apps Development & Managed Service</h6>
                        <h4 className="text-muted" style={{marginBottom:35,fontSize:15, color:"black"}}>Our engineer team can support our client to develop their MVP apps using modern technique on web, mobile, native/hybrid and blockchain technologies. We can adapt to various development approach using project based or agile scrum methodology.</h4>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Our goal build and manage a production application that is fully tested, with users validated and deployed to production, and to empower your team so that you can evolve. build the next iteration of the MVP by yourself or engage us further to iterate and scale​​</p>
                    </div>
                    <div className="col-md-auto"style={{ backgroundRepeat: "no-repeat",backgroundImage:"url(/feature-bg.svg)"}}  >
                        <Image src={Smartnotif} className="rounded"/>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row" >
                    <div className="col-md-auto" style={{ marginTop:50, backgroundRepeat: "no-repeat",backgroundImage:"url(/feature-bg.svg)"}} >
                        <Image src={SystemPic} className="rounded"/>
                    </div>
                    <div className="col col-lg-5"style={{ marginTop:100}} >
                        <h6 className="font-bold" style={{marginBottom:35,fontSize:15, color:"#F98864"}}>System</h6>
                        <h6 className="font-bold" style={{marginBottom:35,fontSize:40, color:"#007ff8"}}>System Integrator​</h6>
                        <h4 className="text-muted" style={{marginBottom:35,fontSize:15, color:"black"}}>We also help customer to integrated to existing solution available in the solution marketplace. With our official partnership with several principal we also offer fully integration with our solution business partners if needed as one stop solution offering.</h4>
                        <p className="description fas fa-chevron-circle-down" style={{color:"gray"}}>Leverage ready to use solution available in the market, we can speed up client go to market initiative.​</p>
                    </div>
                </div>
            </div>
        </div>
    )
}