
const Home =()=>{
    return(
        <div>
        <div className="home">
            <h1 clssName="logo">Brushed Beauty: Unveiling Artistry </h1>

        <ul>
            <li><a href="day1.html">REGISTER</a></li>
            <li><a href="login.html">LOGIN</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">HOME</a></li>
        </ul>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="div">
            <h1></h1>
            <div className="flip">
                 <div className="front" style={{ backgroundImage: 'url(https://srv-1.eden-gallery.com/2021/12/1/61a78c5b2b297-Indiana-Lion-1.png)' }}>
                </div>
                <div className="back">
                <h2>Regal Majesty</h2>
                <p>"Regal Majesty" is a stunning oil painting that encapsulates the essence of the lion's grandeur and strength...</p>
                </div>
            </div>
            <div class="flip">
                <div className="front" style={{backgroundImage: 'url(https://5.imimg.com/data5/SELLER/Default/2023/2/KH/VP/WT/9107407/digital-art-wall-painting-for-home-nature-landscape-forest-painting.jpg)'}}>
                </div>
                <div className="back">
                <h2>Eternal Symphony</h2>
                <p>"Eternal Symphony" is a breathtaking portrayal of nature's magnificence, where the artist skillfully weaves together a tapestry of elements that define the essence of the natural world..</p>
                </div>
            </div>
            <div className="flip">
                <div className="front" style={{backgroundImage: 'url(https://m.media-amazon.com/images/I/71Ys2p6RYXL.jpg)'}}>
                </div>
                <div className="back">
                <h2>Equestrian Elegance</h2>
                <p>"Equestrian Elegance" portrays the timeless beauty and vitality of a horse, rendered with exquisite detail and finesse by the skilled hand of the artist...</p>
                </div>
            </div>

            <br/>
            <br/>
            
            <div className="flip flip-vertical">
                <div className="front" style={{backgroundImage: 'url(https://wyecliffe.com/cdn/shop/products/rozanne-bell-two-little-birds-original-original-1731929702438_600x.jpg?v=1575932066)'}}>
                </div>
                <div class="back">
                <h2>Feathers of Radiance</h2>
                <p>"Feathers of Radiance" is a captivating portrayal of a parrot, showcasing the bird's striking colors and spirited presence within its natural habitat...</p>
                </div>
            </div>
            <div className="flip flip-vertical">
                <div className="front" style={{backgroundImage: 'url(https://m.media-amazon.com/images/I/61LbAys5IWL._AC_UF1000,1000_QL80_.jpg)'}}>
                    
                </div>
                <div className="back">
                <h2>Journey of Steel and Steam</h2>
                <p>"Journey of Steel and Steam" is a vivid depiction of a locomotive thundering down the tracks, capturing the power, nostalgia..</p>
                </div>
            </div>
            <div className="flip flip-vertical">
                <div class="front" style={{backgroundImage: 'url(https://www.shutterstock.com/shutterstock/photos/2283212143/display_1500/stock-photo-taj-mahal-watercolor-paint-ilustration-2283212143.jpg)'}}>
                </div>
                <div className="back">
                <h2>Eternal Splendor</h2>
                <p>"The Taj Mahal" is an architectural marvel nestled on the banks of the Yamuna River in Agra, India...</p>
                </div>
            </div>
        </div>
        </div>

    );
};
export default Home;