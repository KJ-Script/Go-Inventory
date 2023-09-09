import React from "react";
import QuotationDisplayBar from "./QuotationDisplayBar";
import HeaderBar from "../utils/HeaderBar";

function DataDisplayBox({ post, userId, setData }) {
  return (
    <div className="w-[50%] rounded-lg">
      <HeaderBar id={'Id'} classification={'Item classification'} location={'Location'} storage={'Storage'} status={'Status'}/>

      {post.map((item, index) => {
        return <QuotationDisplayBar key={index} data={item} userId={userId} setData={setData}/>;
      })}
    </div>
  );
}

export default DataDisplayBox;
