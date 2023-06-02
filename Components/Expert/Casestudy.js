import { useRouter } from "next/router";
import styles from "../../styles/Casestudy.module.css"

function Casestudy() {
    const router = useRouter();
    const google = () => {
        router.push("https://play.google.com/store/apps/details?id=com.findanexpert&hl=en_GB&gl=US")
    }
    const apple = () => {
        router.push("https://apps.apple.com/gb/app/expert-app/id1468090965")
    }

  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center p-0">
        <div className={styles.background_grad}>
            <h1 className={styles.text_white}>EXPERT APP</h1>
            <h6 className={styles.text_white_only}>Expert is an on-demand service app that provides <strong>multitude of services</strong> <br/> bookable through <strong>one convenient interface.</strong></h6>
            <div className="container container_padding mt-4"> 
            <div className="row" >
            <div className="col-md-4 col-4 text-center py-3">
                <h2 className={styles.font_white}>100+</h2>
                <h6 className={styles.font_white}>Services</h6>
            </div>
            <div className="col-md-4 col-4 text-center py-3 border_case_study">
                <h2 className={styles.font_white}> 03 </h2>
                <h6 className={styles.font_white}>Countries</h6>
            </div>
            <div className="col-md-4 col-4 text-center py-3">
                <h2 className={styles.font_white}>100K+</h2>
                <h6 className={styles.font_white}>Satisfied Customers</h6>
            </div>
         </div>
        </div>
        </div>
        <div className="container">
            <img className={styles.with_expert_img} src="https://1864597015.rsc.cdn77.org/selteqreact/images/expert.jpg"  />
        </div>



        
        <div className="col-md-12 p-0 mt-5">
            <div className="row">
                <div className="col-md-6 text-left">
                    <div className="col-md-12 pl-md-5 pb-5">
                    <h2 className="font_mob_head">AN ALL-IN-ONE<br/> SERVICE APP</h2>
                    <h6 className={styles.all_app} >Expert App was conceptualized to provide an array of services across a spectrum of different domains. The app was built from the ground up to be an all-in-one service app. This go-to platform offers all sorts of services delivered by expert professionals.</h6>
                    <h6 className={styles.all_app} >Customers can book service via the app and connect to an expert who will visit their desired location to do the job. The booking process is so seamless that it lets customers book any service they can think of with a few taps of an app.</h6>

                    <h2 className="mt-4 font_mob_head">THE PROBLEM</h2>
                    <h6 className={styles.all_app} >Undoubtedly, the service industry is by far larger and more complicated than the product industry; thus, creating multiple booking platforms for all services is extremely challenging. Although service providers have become huge names like Uber and Deliveroo, there’s still no platform that offers booking of multiple services on one platform. In comparison, the online product industry has matured in the last 20 years, for example, Amazon, but the services industry is far behind.</h6>
                    <h6 className={styles.all_app_one} >With this gap in the market, the founders of Expert came up with the idea of providing a multitude of services on one single app. They compiled a plethora of services ranging from beauty, medical, trades, auto, legal, finance, IT, etc. Expert’s motto is ‘Book Any service, Anytime Anywhere.</h6>
                    </div>
                </div>
                <div className="col-md-6 background_case_study">
                <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/laptop.png"  />
                </div>
            </div>
        </div>
        <div className="col-md-12 p-0 mt-5">
            <div className={styles.background_grad_sec2}>
                <div className="container pb-5">
                    <div className="row">
                    <div className="col-md-6 text-left padding_t_casestudy" >
                        <div className="col-md-12 ">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/shape.png" className="img-fluid img_animate"  />
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/shape1.png" className="img-fluid img_animate1"  />
                        </div>
                    <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/sit.png" className="img-fluid img_width_girl"  />
                    
                    </div>
                    <div className="col-md-6 text_for_mob_expert text-left m-auto" >
                    <h2 className={styles.color_white1}>SOLUTION</h2>
                    <h6 className={styles.color_white_para}>The goal was to provide the simplest booking process that lets people book any service they can think of with the tap of an app. Customers can either request the service provider to visit their home or office or visit Expert Centres. The experts come directly to the customers door for services such as plumbing, electrical, and cleaning. With services such as dental care or car maintenance, customers can visit Expert Centres.</h6>
                    <div className="row mt-5">
                        <div className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/xpert.png" className="img-fluid img_width_girl"  />
                        </div>
                        <div style={{cursor:"pointer"}} onClick={()=>google()} className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/google.png" className="img-fluid img_width_girl"  />
                        </div>
                        <div style={{cursor:"pointer"}} onClick={()=>apple()} className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/apple.png" className="img-fluid img_width_girl"  />
                        </div>
                    </div>
                     </div>
                     </div>
                </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Casestudy