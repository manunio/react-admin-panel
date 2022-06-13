import React from 'react';
import './datatable.scss';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource';

interface IProp {

}

function Datatable(props: IProp) {

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div>
                        <div className="cellAction">
                            <div className="viewButton">View</div>
                            <div className="deleteButton">Delete</div>
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}

export default Datatable;