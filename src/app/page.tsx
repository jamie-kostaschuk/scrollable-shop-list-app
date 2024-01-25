"use client"

import React, { useRef, useEffect, useState } from 'react';
import { ScrollIdentifier } from './ScrollIdentifier';

import styles from './page.module.css'

import Image from 'next/image'

import { ShopCard } from '@/components/ShopCard/ShopCard';
import { EndingCard } from '@/components/EndingCard/EndingCard';


export default function Home() {
    const myRef = useRef<HTMLDivElement>(null);

    const [CardNumber, setCardNumber] = useState(1);

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
                    setCardNumber(i)
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

        const topSectionInfo = {
        titleLineOne: "蔵前にある",
        titleLineTwo: "おすすめのお店",
        backgroundImageURL: "img/top-img.png",
    }
    const cardsInfo =[
        {
            title: "Yello",
            secondaryTitle: "食べれるネオ立ち飲み屋",
            description: "15種類の無農薬レモンサワーを楽しめる、素敵な立ち飲み屋",
            backgroundImageURL: "img/yello-img.png" ,
            linkURL: "https://maps.app.goo.gl/vK2J3DaSyNGoeH6VA" 
        },
        {
            title: "McLean",
            secondaryTitle: "-OLD BURGER STAND-",
            description: "バーガー、ポテトとビールの組み合わせが最高なバーガースタンド",
            backgroundImageURL: "img/mclean-img.png" ,
            linkURL:"https://maps.app.goo.gl/nh9xKDgAzTYSy2ek9" 
        },
        {
            title: "Dandelion",
            secondaryTitle: "",
            description: "チョコレートにこだわったお店でデートにもプレゼント調達にもおすすめ" ,
            backgroundImageURL: "img/dandelion-img.png" ,
            linkURL:"https://maps.app.goo.gl/DZKxSBo5hVQdadQaA" 
        },
        {
            title: "Cielo y Rio",
            secondaryTitle: "リバーサイドカフェ",
            description: "ご飯がとても美味しく隅田川も見渡せることができ、特別な日におすすめ",
            backgroundImageURL: "img/cielo-img.png" ,
            linkURL:"https://maps.app.goo.gl/PobfpvsQ8gp15uVr9" 
        },
    ]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.scrollContainer} ref={myRef}>
                <div className={styles.topSection}>
                    <div className='absolute h-full w-full'>
                        <Image
                        src={`/${topSectionInfo.backgroundImageURL}`}
                        layout="fill"
                        alt="Picture about the resturant"
                        objectFit="cover"
                        priority
                        />
                    </div>
                    <div className={styles.topContent}>
                        <h1 className={styles.h1Heading}>
                            <p>{topSectionInfo.titleLineOne}</p>
                            <p className={styles.secondLine}>{topSectionInfo.titleLineTwo}</p>
                        </h1>
                        <svg className={styles.arrows}>
                            <path className={styles.a1} d="M0 0 L20 20 L40 0"></path>
                            <path className={styles.a2} d="M0 20 L20 40 L40 20"></path>
                            <path className={styles.a3} d="M0 40 L20 60 L40 40"></path>
                        </svg>
                    </div>
                </div>
                <div className="w-full">
                    <ScrollIdentifier currentCard={CardNumber} numberOfCards={4}/> 
                    <div className='mt-[-100dvh]'>
                        {cardsInfo.map((item, index) => {
                            return(
                                <div key={index} className="h-dvh w-full flex justify-end">
                                    <ShopCard 
                                        backgroundImageURL={item.backgroundImageURL}
                                        title={item.title}
                                        secondaryTitle={item.secondaryTitle}
                                        description={item.description}
                                        linkURL={item.linkURL}
                                        numberOfCards={cardsInfo.length}
                                        locationOfCard={index + 1}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <EndingCard />
            </div>
        </div>
    )
}
