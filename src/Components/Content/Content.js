import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
export default function Content() {
    return (
        <div id="content">
            {/* this is the content for menu */}
            <LeftContent/>
            {/* this is a content for item  */}
            <RightContent/>
            <div style={{ clear: "both" }} />
        </div>
    );
}
