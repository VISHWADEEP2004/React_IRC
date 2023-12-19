import '../Assert/Css/Dashboard.css'
function Dashboard(){
    return(
        <>
        <div className='main hv-100 flex-col'>
            <div className='appbar hv-5 wv-100  flex theme-bg item-center '>
                <div className='wv-90 flex theme-bg item-center justify-end'>
                Appbar
                </div>
            </div>
            <div className=' hv-95 flex flex-row justify-center items-center'>
                <div className='leftbar wv-15 theme-bg hv-95'>
                    Leftbar
                </div>
                <div className='wv-85 hv-95 flex justify-center'>
                    <div className='content-wrapper'>
                    MyContent
                    </div>
                        
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard;