import React , {useEffect , useState} from "react";
import Image from "../../assets/img/image";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import "../../assets/css/main.css";
import domainFinder from "../../api/api";
import { useTranslation } from "react-i18next";

const AboutUsImage = () => {

    const { i18n } = useTranslation()
    let locale = localStorage.getItem('locale')

    let lang = locale ? locale : i18n.language

    const [data , setData] = useState({})

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => { 
        await domainFinder.get('about').then((res)=>{
          if(res.data.length){
            setData(res.data[0])
          }
        })
    }

    return (
        <div>
            <div className="container">
                <Card>
                    <img className="about-img" src={data.image} />
                    <CardBody className="w-100 p-4">
                        <CardTitle tag="h5">About Us</CardTitle>
                        <CardText>
                            <div
                                dangerouslySetInnerHTML={{__html:  data[`content_${lang}`] }}
                            />
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default AboutUsImage;
