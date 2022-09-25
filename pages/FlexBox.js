import Style from '.././styles/FlexBox.module.css';

const FlexBox = () => {
  return (
    <div className={Style.container}>
      <div className={Style.box}></div>
      <div className={Style.box}></div>
      <div className={Style.box}></div>
      <div className={Style.box}></div>
    </div>
  );
};

export default FlexBox;
