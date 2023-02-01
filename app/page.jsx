'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page(){
    const router = useRouter();
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
    )
}