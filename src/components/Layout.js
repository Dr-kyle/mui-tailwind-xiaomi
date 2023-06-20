
// 'use client';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Content from '@/components/Content'
import React from 'react';


//text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900

export default function Layout(props) {

  return (
        <div className='text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'>
          <div className='max-w-7xl mx-auto'>
            <div className='min-h-screen flex flex-col'>
              <div className=''>
                <Header></Header>
              </div>
              <div className='grow'>
                <Content>{props.children}</Content>
              </div>
              <div>
                <Footer></Footer>
              </div>
            </div>
          </div>
        </div>
  )
}
