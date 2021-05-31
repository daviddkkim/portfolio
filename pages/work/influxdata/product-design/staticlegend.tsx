import styles from "../../../../styles/contentPage.module.scss"
import Image from 'next/image'
import Link from "next/link"

export default function Staticlegend(){
    return (
        <div>

            <div className = {styles.wrapper}>
            <section className= {styles.heroImage}>
            <div className= {styles.blur}>
            <Image src="/staticlegend__psd.gif" width={1440} height={900} ></Image>
            </div>
            </section>
            <h3>Coming Soon</h3>
            </div> 
        </div>
    )
}