import { useRouter } from "next/router";
import styles from "../../styles/banking.module.css"

function Letsconnect() {
  const router = useRouter();
    const contactus = () => {
        router.push("/contact-us")
    }

  return (
    <div className="col-md-12 p-0  ">
        <div className={styles.connect_background}>
        <div className="col-md-12 text-center display_h pt-5 pb-4 ">
          <div className="col-md-12">
            <h6 className={`description_text_web`}>Get in touch – let us create the digital brain of your organisation.</h6>
            <h4 className="mt-4 background_button_dark1"><b>Let’s Connect</b></h4>
            <button onClick={()=>contactus()} className="btn btn-dark px-5 background_button_dark mb-4">Contact Us</button>
            </div>
        </div>
        <div className="col-md-12 text-center display_pc pt-5 pb-2 ">
          <div className="col-md-12">
            <h6 className={styles.p_banner}>With Our Future-Proof Software Solutions</h6>
            <h4 className=" background_button_dark1"><b>Lets Connect</b></h4>
            <button onClick={()=>contactus()} className="btn btn-danger  background_button_dark2 mb-4">Contact Us</button>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Letsconnect