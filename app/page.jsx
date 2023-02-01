'use client';
import Link from 'next/link';
import Loading from './loading';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page(){
    const [loading , setLoading] = useState(true) ; 
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{ setLoading(false) } , 2000)
    } , [])

    if(loading){
        return(<Loading/>)
    }
    else{

    
    return(
        <>
            <h1> Learning Next Js framework </h1>
            <br /><br />
            <button type="button" onClick={() => router.push('/blog')}>
                Dashboard
            </button>

            <br />

            
            <ul>
                <li> <Link href="/settings">settings</Link> </li>

            </ul>
        </>
    )}
}