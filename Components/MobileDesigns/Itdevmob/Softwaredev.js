import { useRouter } from 'next/router';
import React from 'react'
import styles from "../../../styles/softwaremob.module.css"

function Softwaredev() {
  const router = useRouter();
  const contact = () => {
      router.push("/contact-us")
  }
  return (
    <div className='col-md-12 px-0 display_pc'>
        <div className={styles.backsoft}>
        <p className='text_size_baner'><b>DEDICATED RESOURCES</b></p>
            <p>A team of developers working solely for you and delivering quality services</p>
            <div className='text-center '>
            <button onClick={()=>contact()}  className='btn btn-danger background_button_soft1'>
                Explore
            </button>
            </div>
        </div>
    </div>
  )
}

export default Softwaredev