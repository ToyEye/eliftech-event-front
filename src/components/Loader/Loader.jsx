import { ThreeDots } from "react-loader-spinner";
import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="38"
        width="38"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperClass={style.loaderWrapper}
      />
    </div>
  );
};

export default Loader;
