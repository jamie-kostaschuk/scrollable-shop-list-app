"use client"
import Image from 'next/image'
import styles from './page.module.css'

import React, { useRef, useEffect } from 'react';

import {ShopCard} from '@/components/ShopCard/ShopCard';
import { EndingCard } from '@/components/EndingCard/EndingCard';


interface ScrollableContentProps {
  children: React.ReactNode
}


export function ScrollableContent({children}: ScrollableContentProps) {


    

    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const backgroundColors = [
            "#2A3238", // Default
            "#FFCF24", // Yello
            "#F3DC8B", // McLean
            "#D4CDAB", // Dandelion
            "#7A9A7F", //Cielo
            "#2A3238", // Ending
            ]
        const handleScroll = () => {
            for (var i = 0; i < backgroundColors.length; i++) {
                // Calculate the upper and lower ranges, so if the screen is between these, change background color
                const upperRange = (i + 1) * window.innerHeight
                const lowerRange = (i + 1) * window.innerHeight - window.innerHeight
                if (myRef.current?.scrollTop !== undefined && myRef.current?.scrollTop > lowerRange && myRef.current?.scrollTop < upperRange) {
                    myRef.current.style.backgroundColor = backgroundColors[i];
                }
            }  
        };
        if (myRef.current) {
            myRef.current.addEventListener('scroll', handleScroll);

            // Cleanup the event listener when the component unmounts
            return () => {
                myRef.current?.removeEventListener('scroll', handleScroll);
            };
        }
    }, [myRef]);

    return(
        <div className={styles.scrollContainer} ref={myRef}>
            {children}
        </div>
    )
}