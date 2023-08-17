import ClipLoader  from "react-spinners/ClipLoader";

function Loader({loading}) {

  return (
    <div className="absolute left-[30%] my-10">
      <ClipLoader size={35} color="#3185df" loading={loading}/>
    </div>
  );
}

export default Loader;