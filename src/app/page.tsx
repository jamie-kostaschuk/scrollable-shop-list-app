
import { ScrollableContent } from './ScrollableContent';
import styles from './page.module.css'

import React, { useRef, useEffect } from 'react';
import Image from 'next/image'

import { ShopCard } from '@/components/ShopCard/ShopCard';
import { EndingCard } from '@/components/EndingCard/EndingCard';

export default function Home() {
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
            <ScrollableContent>
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
                {cardsInfo.map((item, index) => {
                    return(
                        <ShopCard 
                            key={index}
                            backgroundImageURL={item.backgroundImageURL}
                            title={item.title}
                            secondaryTitle={item.secondaryTitle}
                            description={item.description}
                            linkURL={item.linkURL}
                            numberOfCards={cardsInfo.length}
                            locationOfCard={index + 1}
                        /> 
                    )
                })}
                <EndingCard />
            </ScrollableContent>
        </div>
    )
}
