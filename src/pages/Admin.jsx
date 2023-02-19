import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,
Selection,Inject,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids'

import { customersData,customersGrid } from '../data/dummy'
// import { Header } from '../components'

const Admin = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      ADMIN
          {/* <Header category="Page" title="Customers" /> */}
          <GridComponent
            dataSource={customersData}
            allowPaging
            toolbar={['Delete']}
            allowSorting
            width='auto'
            // allowExcelExport
            // allowPdfExport
            // contextMenuItems={contextMenuItems}
            editSettings={{ allowEditing: true , allowDeleting:true}}
          >
            <ColumnsDirective>
              {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Page,Selection,Edit,Toolbar,Sort,Filter]} />
          </GridComponent>
      </div>
  )
}

export default Admin