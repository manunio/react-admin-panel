import React from 'react';
import './featured.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Featured(props: any) {
    return (
        <div className="featured">
            <div className="top">
                <div className="title">Total Revenue</div>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transaction processing. Last payment may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">
                            Target
                        </div>
                        <div className="itemResult negative">
                            <div className="resultAmount">
                                <KeyboardArrowDownIcon fontSize="small"/>
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last week
                        </div>
                        <div className="itemResult positive">
                            <div className="resultAmount">
                                <KeyboardArrowUpIcon fontSize="small"/>
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last month
                        </div>
                        <div className="itemResult positive">
                            <div className="resultAmount">
                                <KeyboardArrowUpIcon fontSize="small"/>
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;