import Head from 'next/head'
import React from 'react'
import Livechat from '../../Components/Livechat';

const Livechatm = () => {
  return (
    <div>
      <Head>
        <title>Multi-purpose Chat System | Case Study Selteq</title>
        <meta name="description" content="Looking for a versatile chat system for your business? Read Selteq's case study on our Live Chat System and how it helped improve customer support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Livechat />
    </div>
  )
}

export default Livechatm
