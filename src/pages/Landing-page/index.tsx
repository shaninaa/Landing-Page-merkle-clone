import React from "react";
import Navbar from '../component/navbar';
import Hero from '../component/section';
import Section1 from '../component/brandpromise';
import Section2 from '../component/corevalue';
import Section3 from '../component/client';
import Section4 from '../component/services';
import Section5 from '../component/teams';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function HomePage(){
    return (
        <div>
        
            <Navbar />

            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    )
}