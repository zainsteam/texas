import style from "../footer/footer.module.scss";
const Copyright = () => {
  return (
    <>
      <div className={`${style["footer_bottom"]}`}>
        <hr />
        <p>
          ©2024 Texas Forever Cafe and Grill All Rights Reserved |
          <span>
            {" "}
            Design & Developed by
            <span>
              <a href="https://www.mean3.com" target="_black">
                {" "}
                Mean3 Pvt Ltd{" "}
              </a>
            </span>
          </span>
        </p>
      </div>
    </>
  );
};
export default Copyright;
