import React from "react";
import Image from 'next/image';
import Pic from '../../../public/code-bg.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function ContactUs(){
    return (
        <div className="section" style={{backgroundColor:"white"}}>
            <div className="container" >
                <div className="row">
                    <div className="col-sm-5 col-md-6" style={{marginTop:100}}>
                        <h1 className="text-bold" style={{fontSize:60, color:"black"}}>Contact Us</h1>

                        <h4 className="font-bold" style={{fontSize:20, color:"black"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:20, height:20}}>
                                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>Location
                        </h4>
                        <p className="text-muted"style={{fontSize:25, color:"black"}}>Soho Capital Lt. 32 Unit 7, Podomoro City Jl. Letjen S. Parman Kav.28 Jakarta Barat, DKI Jakarta, 11470</p>
                       
                        <h4 className="font-bold" style={{fontSize:20, color:"black"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:20, height:20}}>
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                            </svg>
                            Phone
                        </h4>
                        <p className="text-muted"style={{fontSize:25, color:"black"}}>+62 21 80604261</p>

                        <h4 className="font-bold" style={{fontSize:20, color:"black"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:20, height:20}}>
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                            Email
                        </h4>
                        <p className="text-muted"style={{fontSize:25, color:"black"}}>info@merkleinnovation.com</p>
                    </div>
                    <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">  
                        <Image src={Pic} layout="responsive" objectFit="contain"/>
                    </div>
                </div>
            </div>
            
            <div className="container">
                
            </div>
        </div>
    )
}