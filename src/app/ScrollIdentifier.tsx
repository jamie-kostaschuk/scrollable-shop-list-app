import Image from 'next/image'
import styles from './page.module.css'

import React, { useRef, useEffect } from 'react';

import {ShopCard} from '@/components/ShopCard/ShopCard';
import { EndingCard } from '@/components/EndingCard/EndingCard';


interface Props {
  currentCard: number,
  numberOfCards: number,
}


export function ScrollIdentifier({currentCard, numberOfCards} : Props) {
    
    
    return(
        <div className=" sticky top-0 flex flex-col gap-2 h-dvh p-3 justify-center"> {/* fixed top-0 left-0  */}
        
            {Array.from({ length: numberOfCards }, (_, index) => {
                return(
                    <div key={index} 
                    className={`transition-all duration-500 w-2 h-full rounded-full ${index + 1 === currentCard ? " min-h-12 max-h-40 bg-white " : 'max-h-16 bg-white/50 '}` }
                    ></div>
                );
                })}
        </div>
    )
}