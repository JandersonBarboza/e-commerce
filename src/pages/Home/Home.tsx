import { Carousel } from "antd";
// import { Link } from "react-router-dom";
import { FakeDB as dataDB } from "../../database/FakeDB";
import { Navigation } from "../../components/Navigation/Navigation";

const bannerStyle = (src: string) => ({
  width: "100%",
  height: "30vh",
  backgroundImage: `url('${src}')`,
  backgroundPosition: "center",
  color: "#fff",
  fontSize: 64,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export function Home() {
  return (
    <div>
      <div style={{ padding: "8px 16px", width: "100%", background: "#fff" }}>
        <Navigation pageName={"Home"} />
      </div>
      <Carousel autoplay>
        {dataDB.banners.map((e, i) => {
          return (
            <>
              {e.image ?
                <div key={i} style={bannerStyle(e.image)}>
                  <span
                    style={{
                      color: "white",
                      textShadow: "0px 0px 10px rgba(0,0,0,0.5)"
                    }}
                  >
                    {e.text}
                  </span>
                  {/* <img src={e.image}/> */}
                </div>
                :
                <></>
              }
            </>
          )
        })}
      </Carousel>
    </div >
  );
}
