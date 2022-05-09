import Script from "next/script";
import { Card, Tab, Tabs } from "react-bootstrap";
import { FaTwitter, FaWeibo } from "react-icons/fa";

export default function SocialBlock() {
  return (
    <Card className="tw-border-0  tw-bg-white tw-border-blue-500">
      <Card.Body>
        <Tabs variant="pills" defaultActiveKey="weibo" className="mb-3">
          <Tab
            tabClassName="rounded-pill"
            id="weibo-social-tab"
            eventKey="weibo"
            title={
              <span>
                <FaWeibo className="mx-1 d-inline" />
                {"微博"}
              </span>
            }
          >
            <iframe
              width="100%"
              title="微博"
              height="450px"
              className="border tw-rounded-2xl"
              frameBorder="0"
              scrolling="no"
              src="https://widget.weibo.com/weiboshow/index.php?language=&width=0&height=470&fansRow=0&ptype=1&speed=0&skin=1&isTitle=1&noborder=3&isWeibo=1&isFans=0&uid=1738014147&verifier=e5c30ddc&dpc=1"
            />
          </Tab>
          <Tab
            tabClassName="rounded-pill"
            id="twitter-social-tab"
            eventKey="twitter"
            title={
              <span>
                <FaTwitter className="mx-1 d-inline" />
                {"Twitter"}
              </span>
            }
            style={{ minHeight: 450 }}
          >
            <div className="text-center fw-bold fs-7 my-2">
              {"注：大陆地区可能无法查看"}
            </div>
            <Script
              src="https://platform.twitter.com/widgets.js"
              strategy="afterInteractive"
              async
            ></Script>
            <div className="tw-rounded-3xl">
              <a
                className="twitter-timeline"
                data-height="450"
                data-theme="dark"
                href="https://twitter.com/prinOrange_?ref_src=twsrc%5Etfw"
              >
                {"Tweets by prinOrange_"}
              </a>
            </div>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
