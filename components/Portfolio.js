import Slider from "./Slider";
import Card from "./Card";

export default function Portfolio() {
  return (
    <>
      <h4>Portfolio</h4>
      <Slider>
        <Card
          key="Rhombus Systems"
          title="Rhombus Systems"
          sub="Modern video security and IoT sensor platform for enhanced operations."
          img="rhombus.png"
          color="linear-gradient(90deg,#3c87ec,#46cce1)"
          href="https://rhombussystems.com"
        />
        <Card
          key="WProducts"
          title="WooProducts"
          sub="The only app that lets you add products with product images to your WooCommerce store!"
          img="wproducts2.png"
          color="#2f1b4c"
          href="https://wproducts.co"
        />
        <Card
          key="Carbon Native"
          title="Carbon Native"
          sub="A set of UI components for building React Native apps."
          img="carbon-native-2.png"
          color="#ff704c"
          href="https://getcarbonnative.com"
        />
      </Slider>
      <style jsx>{`
        h4 {
          margin-left: 4.5vw;
          border-bottom: 2px solid var(--foreground);
          padding: 0;
          margin-bottom: 2vh;
          margin-top: 5vh;
          display: inline-block;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
