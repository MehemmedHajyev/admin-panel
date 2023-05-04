import React , {useEffect , useState} from "react";
import SearchBar from "../elements/SearchBar";
import Topsearch from "../elements/Topsearch";
import Imagecolsection from "../elements/Imagecolsection";
import axios from "axios";
import { useTranslation } from "react-i18next";
import domainFinder from "../../api/api";
import { Helmet } from "react-helmet-async";
import LeafLetMap from "../elements/LeafLetMap";


const Home = (props) => {
    const [loader , setLoader] = useState(false)
    const { t } = useTranslation()
    // useEffect(()=>{
     //     setLoader(true)
    //     axios.get('https://reqrg.in/api/usxdajhs').then((response)=>{
    //         console.log(response.data.data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     }).finally(()=>{
    //         setLoader(false)
    //     })
    // },[])


    return (
        <div>
            <Helmet>
                <title>Home page!</title>
                <meta name='description' content='This is a home page la la la la' />
            </Helmet>
            <section className="container">
                <div className="w-100 text-center" style={{marginBottom: "30px"}}>
                    <h1>{t('welcomeMesage', { username: 'Murad Nerimanli' , level:'Senior' })}</h1>
                    <h1>{t('welcomeMesage', { username: 'Mehemmed Haciyev' , level:'Lead' })}</h1>
                    
                    <p className="fs-6 main-p">
                        Millions of people are searching for companies, domains, meta tags, company names and etc., on{" "}
                        <br /> Domain finder. Try today! <b>1 000 000</b> data for your search.
                    </p>
                </div>
                <SearchBar />
                <Topsearch />
                <Imagecolsection />
            </section>
            <LeafLetMap/>
        </div>
    );
};
export default Home;
