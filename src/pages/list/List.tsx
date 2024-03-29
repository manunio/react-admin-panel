import React from 'react';
import './list.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/components/Datatable";

interface IProps {

}

function List(props: IProps) {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    );
}

export default List;