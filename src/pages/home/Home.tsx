import React from 'react';
import './home.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget, {WidgetType} from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";

function Home(props: any) {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type={WidgetType.User}/>
                    <Widget type={WidgetType.Order}/>
                    <Widget type={WidgetType.Earnings}/>
                    <Widget type={WidgetType.Balance}/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart aspect={2.9} title="Last 6 Months (Revenue)"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <ListTable/>
                </div>
            </div>
        </div>
    );
}

export default Home;