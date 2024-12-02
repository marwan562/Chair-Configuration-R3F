import { useCustomization } from "../context/Customization";
import { chairColors, cushionColors } from "../data/colors";

const Configuratoin = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair Materials</div>

        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Chair Colors  <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M430.1 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 12-36.6.1-47.7zM120 216c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm40 126c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-161c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm72 219c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm24-208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
          </svg></div>

        <div className="configurator__section__values">
          {chairColors.map((c, i) => {
            return (
              <div
                key={i}
                className={`item ${
                  chairColor === c.color ? "item--active" : ""
                }`}
                onClick={() => setChairColor(c.color)}
              >
                <div
                  className="item__dot"
                  style={{ background: c.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">
          Cushion Colors{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M430.1 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 12-36.6.1-47.7zM120 216c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm40 126c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-161c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm72 219c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm24-208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
          </svg>
        </div>

        <div className="configurator__section__values">
          {cushionColors.map((c, i) => {
            return (
              <div
                key={i}
                className={`item ${
                  cushionColor === c.color ? "item--active" : ""
                }`}
                onClick={() => setCushionColor(c.color)}
              >
                <div
                  className="item__dot"
                  style={{ background: c.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Legs</div>

        <div className="configurator__section__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item__label">Classic</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item--active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="item__label">Modern</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuratoin;
