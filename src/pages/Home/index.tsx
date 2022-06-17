import { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import { NavInformer } from '../../components/NavInformer';
import { Sidebar } from '../../components/Sidebar';
import { HomeInfoData, HomeRepository } from '../../Modules/Home/Repository';
import style from './styles.module.scss';
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  margin: 0 auto;
`;

export function Home() {

    const breadCrumb = [
        { title: 'Início', url: '/' },
    ];

    const [homeData, setHomeData] = useState<HomeInfoData>(null);
    const [loading, setLoading] = useState(true);

    async function loadHomeData() {
        const data: HomeInfoData = await HomeRepository.getHomeData();
        if (data) {
            setHomeData(data);
        };
        setLoading(false)
    };

    useEffect(() => {
        loadHomeData();
    }, [])

    return (
        <div className={style.container}>
            <Sidebar />
            <div className={style.width100}>
                <NavInformer path={breadCrumb} />
                <div
                    className={style.homeWrapper}
                >
                    <ClipLoader color="blue" loading={loading} css={override} size={50} />
                    {
                        homeData &&
                        <>
                            <img src={homeData?.image} />
                            <h2>{homeData.title} <br /><span>{homeData.emphasis}</span></h2>
                        </>
                    }


                </div>
            </div>

        </div>
    )
}