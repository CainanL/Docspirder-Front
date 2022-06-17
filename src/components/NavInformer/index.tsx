import { Link } from "react-router-dom";
import style from './styles.module.scss';

interface NavInformerTypes {
    path: {
        title: string;
        url: string;
    }[];
}
export function NavInformer({ path }: NavInformerTypes) {
    return (
        <div className={style.wrapper}>
            <div>
                {
                    path.map(item =>

                        <Link to={item.url}>

                            {
                                path.indexOf(item) != 0 &&
                                <span className={style.span} >{' > '}</span>
                            }
                            <span style={{
                                color: path.indexOf(item) != path.length - 1
                                    ? '#468bcb'
                                    : '',
                                fontWeight: path.indexOf(item) != path.length - 1
                                    ? '600'
                                    : ''
                            }}>{item.title}</span>

                        </Link>

                    )
                }
            </div>
            <div className={style.titleContainer}>
                <h1>{path[path.length - 1].title}</h1>
            </div>
        </div>
    )
}