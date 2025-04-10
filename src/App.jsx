import { Flex } from "antd";
import svgAbout from "@/assets/about_sgs.svg";
import contactAbout from "@/assets/contact_me.svg";
import { useMemo, useState } from "react";
import { Divider, Popup } from "@nutui/nutui-react";
import "@nutui/nutui-react/dist/style.css";
import cn from "@/assets/CN.svg";
import "./App.css";
import { useParams } from "react-router-dom";

export default function App() {
  const { id } = useParams();

  const [showIcon, setShowIcon] = useState(false);

  const originPath = useMemo(() => {
    let path = "/pdfjs-5.1.91-legacy-dist/web/viewer.html";
    switch (id) {
      case "4d7e2eec-5f2f-4360-b7d2-a105dab40486":
        path =
          "/pdfjs-5.1.91-legacy-dist/web/viewer.html?file=TJINSCS2500255_TJIN2502000700ML01_EN.pdf";
        break;
      case "13155b72-8866-4ccd-b286-d57ec07d81cf":
        path =
          "/pdfjs-5.1.91-legacy-dist/web/viewer.html?file=TJINSCS2500364_TJIN2503001043ML01_EN.pdf";
        break;
      default:
        path =
          "/pdfjs-5.1.91-legacy-dist/web/viewer.html?file=TJINSCS2500255_TJIN2502000700ML01_EN.pdf";
        break;
    }
    return path;
  }, [id]);

  return (
    <Flex vertical style={{ height: "100vh" }}>
      <div className="header">
        <p>SGS IS THE RECOGNIZED GLOBAL</p>
        <p>BENCHMARK FOR QUALITY & INTEGRITY</p>
        <img
          style={{
            position: "absolute",
            right: "0.9rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "1.2rem",
            cursor: "pointer",
          }}
          src={cn}
        ></img>
      </div>
      <Flex flex={1}>
        <embed
          style={{ width: "100%", height: "100%" }}
          src={originPath}
        ></embed>
      </Flex>

      <Flex className="tabbar">
        <Flex
          flex={1}
          gap={4}
          vertical
          className="tabbarItem"
          justify="center"
          align="center"
          onClick={() => {
            window.open("https://m.sgsonline.com.cn/", "_self");
          }}
        >
          <img src={svgAbout}></img>
          <p>About SGS</p>
        </Flex>
        <div
          style={{
            margin: "16px 0",
            border: "0.01rem solid #dcdcdc",
            boxSizing: "content-box",
          }}
        />
        <Flex
          flex={1}
          gap={4}
          vertical
          className="tabbarItem"
          justify="center"
          align="center"
          onClick={() => {
            setShowIcon(true);
          }}
        >
          <img src={contactAbout}></img>
          <p>Contact us</p>
        </Flex>
      </Flex>

      <Popup
        visible={showIcon}
        style={{ minHeight: "6.2rem" }}
        position="bottom"
        onClose={() => {
          setShowIcon(false);
        }}
        title={
          <Flex style={{ width: "100vw" }} vertical>
            <Flex
              style={{
                height: "4rem",
                padding: "0.5rem 0",
                boxSizing: "border-box",
              }}
              vertical
            >
              <Flex
                flex={1}
                justify="center"
                align="center"
                className="contact"
              >
                CONTACT
              </Flex>

              <Flex
                flex={1}
                justify="center"
                align="center"
                style={{ cursor: "pointer" }}
              >
                <a href="tel:4008855558" className="phone">
                  4008-855-558
                </a>
              </Flex>
            </Flex>
            <Divider style={{ margin: 0 }} />
            <Flex
              style={{ height: "2.2rem", cursor: "pointer" }}
              vertical
              onClick={() => {
                setShowIcon(false);
              }}
            >
              <Flex flex={1} justify="center" align="center" className="close">
                Close
              </Flex>
            </Flex>
          </Flex>
        }
      />
    </Flex>
  );
}
