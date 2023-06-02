import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'

function Expert() {
    const router = useRouter();
    const plexarr = () => {
        router.push(" /case-study-plexarr")
    }

    const livechat = () => {
        router.push("/live-chat-system")
    }
    const google = () => {
        router.push("https://play.google.com/store/apps/details?id=com.findanexpert&hl=en_GB&gl=US")
    }
    const apple = () => {
        router.push("https://apps.apple.com/gb/app/expert-app/id1468090965")
    }
  return (
    <>
    <Head>
      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
                {/* font roboto  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
{/* poppins  */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
    <div className='col-md-12 px-0 background_grad'>
        <p className='headexpert_app'>Expert App</p>
        <p className='text_expert_paragraph px-3' >Expert is an on-demand service app that provides <b> multitude of services</b> bookable through <b>one convenient interface.</b></p>
        <div className='container px-5'>
        <div className='row'>
            <div className='col-md-4 col-4 text-center'>
                <h2 className='mb-0 font_color_100'>100+</h2>
                <p className=' text_below mt-0'>
                    Services
                </p>
            </div>
            <div className='col-md-4 col-4 text-center'>
            <h2 className='mb-0 font_color_100'>03</h2>
                <p className=' text_below mt-0'>
                    Services
                </p>
            </div>
            <div className='col-md-4 col-4 text-center'>
            <h2 className='mb-0 font_color_100'>100K+</h2>
                <p className=' text_below mt-0'>
                    Services
                </p>
            </div>
        </div>
        </div>
        <div className='col-md-12 px-4 text-center'>
        <div className='col-md-12 video-container p-0'>
        <video loop autoPlay muted controls className='video_main1'>
       <source src='../video/new1.mp4' type="video/mp4" />
        </video>
        </div>
        </div>
    </div>
    <div className='col-md-12 custom_margintop'>
        <p className='padd_text'>An All-In-One <br/>Service App</p>
        <p className='para_text'>Expert App was conceptualized to provide an array of services across a spectrum of different domains. The app was built from the ground up to be an all-in-one service app. This go-to platform offers all sorts of services delivered by expert professionals.</p>
        <p className='para_text'>Customers can book service via the app and connect to an expert who will visit their desired location to do the job. The booking process is so seamless that it lets customers book any service they can think of with a few taps of an app.</p>
    </div>
    <div className='col-md-12 text-center'>
        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tabb.png' />
    </div>
    <div className='col-md-12 custom_margintop'>
        <p className='padd_text'>The problem</p>
        <p className='para_text'>Undoubtedly, the service industry is by far larger and more complicated than the product industry; thus, creating multiple booking platforms for all services is extremely challenging. Although service providers have become huge names like Uber and Deliveroo, there’s still no platform that offers booking of multiple services on one platform. In comparison, the online product industry has matured in the last 20 years, for example, Amazon, but the services industry is far behind.</p>
        <p className='para_text'>With this gap in the market, the founders of Expert came up with the idea of providing a multitude of services on one single app. They compiled a plethora of services ranging from beauty, medical, trades, auto, legal, finance, IT, etc. Expert’s motto is ‘Book Any service, Anytime Anywhere</p>
    </div>
    <div className='backgrond_gray_exp_new'>
    <div className='col-md-12 background_sol_head pt-4'>
            <p className='text_headd'>Solution</p>
            <p className='text_parara'>
            The goal was to provide the simplest booking process that lets people book any service they can think of with the tap of an app. Customers can either request the service provider to visit their home or office or visit Expert Centres. The experts come directly to the customers ‘ door for services such as plumbing, electrical, and cleaning. With services such as dental care or car maintenance, customers can visit Expert Centres.
            </p>
            <div className='col-md-12 text-center'>
            <img className='img-fluid marg_coutch_neg' src='https://1864597015.rsc.cdn77.org/selteqreact/images/coutch.png' />
            </div>
    </div>
    <div className='col-md-12 mt-5'>
        <div className='col-md-12 mt-5 text-center'>
        <img className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/logoo.png' />
        </div>
        <div className='row pb-4'>
            <div onClick={()=>google()} className='col-md-6 col-6 text-center'>
            <img  className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/and.png' />
            </div>
            <div onClick={()=>apple()} className='col-md-6 col-6 text-center'>
            <img className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/app.png' />
            </div>
        </div>
    </div>
    </div>
    <div className='col-md-12 pt-4'>
        <p className='headd_case'>
        Case Studies
        </p>
        <p className='para_case'>
        See examples of the bespoke software solutions,<b> CRM</b>, <b>LMS</b> and <b>mobile apps</b> we’ve created for our clients.
        </p>
    </div>
    <div className='col-md-12 text-center pt-4'>
        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/lappp.png' />
        <p className='plexx mb-0'>PLEXAAR</p>
        <p className='para_text_light'>A high-end CRM system for businesses of all sizes.</p>
        <button onClick={()=>plexarr()} className='btn btn-danger danger_case mb-3'>CASE STUDY</button>
    </div>
    <div className='col-md-12 text-center pt-4 pb-5'>
        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/chat.png' />
        <p className='plexx mb-0'>Live Chat system</p>
        <p className='para_text_light'>A multi-purpose Chat System for customers & service providers</p>
        <button onClick={()=>livechat()} className='btn btn-danger danger_case mb-5'>CASE STUDY</button>
    </div>
    </>
  )
}

export default Expert