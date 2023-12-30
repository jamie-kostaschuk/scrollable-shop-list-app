"use client"
import { array } from 'prop-types';
import styles from './EndingCard.module.css'
import Image from 'next/image';

import { useState } from 'react';

import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


interface EndingCardProps {
  
}


export function EndingCard({}: EndingCardProps) {
    const [loading, setLoading] = useState(false);

    const [successToast, setSuccessToast] = React.useState(false);

    const handleSuccess = () => {
        setSuccessToast(true);
    };

    const handleSuccessClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }
        setSuccessToast(false);
    };



    async function handleSubmit(event: any){ 
        event.preventDefault();
        setLoading(true);

        
        const data = { input: String(event.target.feedback.value) };

        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
        }) 
        
        if (response.ok) {
            // Enable button
            setLoading(false);
            // reset form
            event.target.feedback.value = "";
            // show toast
            handleSuccess();
        }
        if(!response.ok) {
            alert("申し訳ございませんが、こちらアプリが壊れているようです。ぜひチャットなどでご連絡ください。");
            setLoading(false);
        }
    }
    
    return(
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className='flex flex-col gap-3 w-full max-w-lg h-full justify-center'>
                    <p className='text-[2rem] font-bold'>ここまでみてくれてありがとう!</p>
                    <form className='flex flex-col gap-1 w-full' onSubmit={handleSubmit}>
                        <div className='w-full flex flex-col gap-1'>
                            <label htmlFor='feedback' >お気に入りのお店はなかった場合はぜひ教えてください！</label>
                            <textarea 
                                required 
                                maxLength={200} 
                                rows={4} 
                                className='rounded-lg border-white border bg-[#3B444C] text-white px-4 py-3 resize-none ' 
                                name="feedback" 
                                placeholder='あなたのお気に入りのお店など'
                            />
                        </div>
                        <button type="submit" disabled={loading} className=' break-keep px-8 py-2 bg-white disabled:bg-[#3B444C] w-min text-[#2A3238] disabled:text-[#99A8B4] rounded'>送信</button>
                        
                    </form>
                    <Snackbar open={successToast} autoHideDuration={3000} onClose={handleSuccessClose}>
                        <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                        送信されました！ありがとうございます！
                        </Alert>
                    </Snackbar>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>作成者</p>
                    <a className="flex flex-row gap-2 items-center cursor-pointer" href="https://twitter.com/JamieUXUI">
                        <div className='rounded-full overflow-hidden w-12 h-12'>
                                <Image 
                                    src="/img/creator-img.png" 
                                    alt="" 
                                    width={48}
                                    height={48}
                                />
                        </div>
                        <p className=' underline font-bold'>ジェイミー</p>
                    </a>
                </div>
            </div>
        </div>
    )
}