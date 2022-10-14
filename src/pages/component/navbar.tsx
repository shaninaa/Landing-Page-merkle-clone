import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/merkle-putih.jpg';
import background from '../../../public/background.svg';
import styles from '../../styles/Home.module.css';

export default function navbar(){
    return (
        <nav className="navbar" style={{backgroundImage:"url(/background.svg)"}}>
            <div className="container">
                <Image src={logo} alt="logo merkle" width={250} height={90}/>
                    <ul className="navbar-link">
                        <Link href="/Landing-page"><a className="">Home</a></Link>
                        <a> </a>
                        <Link href="/contact-us"><a>Contact</a></Link>
                    </ul>
            </div>
        </nav>
        
    )
}