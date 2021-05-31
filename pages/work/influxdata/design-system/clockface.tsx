import styles from "../../../../styles/contentPage.module.scss"
import Image from 'next/image'
import Link from "next/link"

export default function Clockface(){
    return (
        <div>

            <div className = {styles.wrapper}>
            <h3 className= {styles.sectionalHeader}> Clockface</h3>
            <section className= {styles.heroImage}>
            <Image src="/Icons.png" width={800} height={164} ></Image>
            </section>
            <h6 className= {styles.sectionalHeader}> My role</h6>
            <ul>
                <li>Design System Lead - I own the design, engineering, vision, and evangelization of Clockface. </li>
                <li>I took over this responsibility when I joined the company on March 2021.</li>
            </ul>
            <h6 className= {styles.sectionalHeader}> Introduction</h6>
            <p>Clockface is an open-source design system (React + Typescript) for building digital products. It is the design system that provides the foundational
                design language for <a className= {styles.externalLink} href={"https://www.influxdata.com/products/influxdb-cloud/"}> InfluxDB Cloud</a> , a time-series database Platform.
            </p>

            <section className= {styles.heroImageMultiple}>
            <Image src="/Inputs.png" width={800} height={230} ></Image>

            </section>
            <h6 className= {styles.sectionalHeader}> Our design vision</h6>
            <p>
                Some usecases for time-series data are self-driving cars, alternative energy research, and space exploration. Paralleling the usecase, we've always strived for a futuristic look and feel.
                We want to drive our design system forward such that when you are watching movies like The Martian, Tron or Ready Player One, you could imagine our design system being used.
            </p>
            <h6 className= {styles.sectionalHeader}> My contributions</h6>
            <p>
               Since taking over the design system, I've designed and coded a few new components (i.e, <a className= {styles.externalLink} href="https://influxdata.github.io/clockface/?path=/story/components-pagination-paginationnav--paginationnav" rel="noopener noreferrer" target="_blank">Pagination component</a>). I've also tweaked a few of our existing components to provide a better developer experience for our library consumers and user experience for our application users (i.e, 
               <a className= {styles.externalLink} href="https://influxdata.github.io/clockface/?path=/story/layout-draggable-resizer-examples--2-panels" rel="noopener noreferrer" target="_blank">Draggable Resizer component</a>).
                <br/>
                <br/>
                <p>
                I've curated and executed on a research agenda to problem solve how to increase adoption on our design system within our company. Following this research, I created a Figma Plugin to address research findings. Learn more about what I did <Link href={"/work/influxdata/design-system/annotator"}><a className= {styles.externalLink}> here</a></Link>.
                </p>
            </p>
            <h6 className= {styles.sectionalHeader}> Relevant Links</h6>
            <ul className={styles.socialMediaList}>
            <a href="https://influxdata.github.io/clockface/" rel="noopener noreferrer" target="_blank">
            <li>
            Storybook
            </li>
            </a>
            <a href="https://github.com/influxdata/clockface" rel="noopener noreferrer" target="_blank">
            <li>
            Code Repository
            </li>
            </a>
        </ul>
            
            </div> 
        </div>
    )
}