import Banner from '../../components/banner'
import styles from "../../styles/workPage.module.scss";
import Card from '../../components/card';
import { useRouter } from 'next/router'


export default function ProductDesign() {
    const router = useRouter();

  function handleClick( href:string){
    router.push(href)
  }

  return (
    <div>
    <Banner project="product-design" theme={'pricklyPear'}></Banner>
    <div className={styles.breadCrumbList}>
    <a className={styles.breadCrumb} onClick= {() => router.push('/')}>home</a>
    {' / '}
    <a className={styles.breadCrumb} onClick= {() => router.push('/work')}>work</a>
    {' / '}
    <a>product-design</a>

    </div>
    <section className={styles.contents}>
    <Card theme='dark' onClick={() => handleClick('/work/design-system/clockface')}> <h6 className= {styles.header}>Annotations</h6> <p>Empowering teams to collaborate and shared data insights.</p><span className={styles.more}>Learn More</span></Card>
    </section>
    </div>
  )}
