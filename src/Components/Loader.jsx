import loader from "../assets/loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={loader.container}>
        <section className={loader.loader}></section>
      </div>
    </>
  );
};

export default Loader;
