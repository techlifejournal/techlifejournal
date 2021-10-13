import style from '../../styles/Home.module.css'

function LoaderLoading() {
    return (
        <div className={style.loading}><h1 >Loading</h1>
            <div className={style.spinner}>
                <div className={`${style.bounce1} bg-black dark:bg-white`} ></div>
                <div className={`${style.bounce2} bg-black dark:bg-white`}></div>
                <div className={`${style.bounce3} bg-black dark:bg-white`}></div>
            </div>
        </div>
    )
}

export default LoaderLoading
