"use client"
import Image from 'next/image'
import styles from './page.module.css'

import React, { useRef, useEffect } from 'react';

export default function Home() {
    
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const backgroundColors = ["#2A3238", "#FFCF24", "#F3DC8B", "#D4CDAB"]

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

    return (
        <div className={styles.mainContainer}>
        <div className={styles.scrollContainer} ref={myRef}>
                <div className={styles.topSection} style={{ backgroundImage: "url('img/top-img.png')" }}>
                    <div className={styles.topContent}>
                        <h1 className={styles.h1Heading}>
                            <p>蔵前にある</p>
                            <p className={styles.secondLine}>おすすめのお店</p>
                        </h1>
                        <svg className={styles.arrows}>
                            <path className={styles.a1} d="M0 0 L20 20 L40 0"></path>
                            <path className={styles.a2} d="M0 20 L20 40 L40 20"></path>
                            <path className={styles.a3} d="M0 40 L20 60 L40 40"></path>
                        </svg>
                    </div>
                </div>
                <div className={styles.card} style={{ backgroundImage: "url('img/yello-img.png')" }}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardDisplayLocation}>
                            <div className={styles.cardLocationItem} id="currentCardLocationItem"></div>
                            <div className={styles.cardLocationItem}></div>
                            <div className={styles.cardLocationitem}></div>
                        </div>
                        <div className={styles.cardBottomContent}>
                            <div className={styles.cardText}>
                                <h2 className={styles.h2Heading}>Yello</h2>
                                <p className={styles.cardSecondaryHeader}>食べれるネオ立ち飲み屋</p>
                                <p>15種類の無農薬レモンサワーを楽しめる、素敵な立ち飲み屋</p>
                            </div>
                            <a className={styles.cardLink} href="https://maps.app.goo.gl/vK2J3DaSyNGoeH6VA" target="_blank">もっとみる</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card} style={{ backgroundImage: "url('img/mclean-img.png')" }}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardDisplayLocation}>
                            <div className={styles.cardLocationitem}></div>
                            <div className={styles.cardLocationitem} id="currentCardLocationItem"></div>
                            <div className={styles.cardLocationitem}></div>
                        </div>
                        <div className={styles.cardBottomContent}>
                            <div className={styles.cardText}>
                                <h2 className={styles.h2Heading}>McLean</h2>
                                <p className={styles.cardSecondaryHeader}>-OLD BURGER STAND-</p>
                                <p>バーガーのビールの組み合わせが最高なバーガースタンド</p>
                            </div>
                            <a className={styles.cardLink} href="https://maps.app.goo.gl/nh9xKDgAzTYSy2ek9" target="_blank">もっとみる</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card} style={{ backgroundImage: "url('img/dandelion-img.png')" }}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardDisplayLocation}>
                            <div className={styles.cardLocationitem}></div>
                            <div className={styles.cardLocationitem}></div>
                            <div className={styles.cardLocationitem} id="currentCardLocationItem"></div>
                        </div>
                        <div className={styles.cardBottomContent}>
                            <div className={styles.cardText}>
                                <h2 className={styles.h2Heading}>Dandelion</h2>
                                <p>チョコレートにこだわったお店で店内飲食でもプレゼントにもおすすめ</p>
                            </div>
                            <a className={styles.cardLink} href="https://maps.app.goo.gl/DZKxSBo5hVQdadQaA" target="_blank">もっとみる</a>
                        </div>
                    </div> 
                </div>         
            </div>
        </div>
    )
}
