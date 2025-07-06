import React, { Fragment } from "react";
import SEO from "../../../components/common/SEO";

export default function Page1() {
  return (
    <Fragment>
      <SEO title="Home" />
      <div className="content-container bg-gradient-to-br from-gray-50 to-white flex flex-col overflow-hidden">
        {/* Page_1 Section */}
        <div>
          <div className="bg-slate-400 w-screen h-screen flex items-center justify-center">
            Page 1
          </div>
        </div>
      </div>
    </Fragment>
  );
}
