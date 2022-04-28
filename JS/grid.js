var response1;

const columnDefs = [
    { headerName:"Date",field: "date",sortable:true, filter:true,resizable:true,},
    { headerName:"Name",field: "name",sortable:true, filter:true,resizable:true,
      cellStyle:{padding:"0px"}
  },
    { headerName:"Mobile no",field: "mobile",sortable:true, filter:true},
    { headerName:"Current Location",field: "location",sortable:true, filter:true,
      cellRenderer: ragRenderer,
  },
    { headerName:"Notice Period",field: "notice_period",sortable:true, filter:true},
    { headerName:"Exp CTC",field: "ectc",sortable:true, filter:true},
    { headerName:"Current CTC",field: "cctc",sortable:true, filter:true},
    { headerName:"Primary Skill",field: "primary_skill",sortable:true, filter:true,
    // cellStyle:{white-space:"normal"},
    // resizable:true, wrapText:true,
    // autoHeight:true,

  },
    { headerName:"status",field: "",sortable:true, filter:true},
    { headerName:"comments",field:"comments",sortable:true, filter:true,
      valueGetter: params => {
        // console.log(params.data.comments[0].remarks);
         return params.data.comments.length> 0 ? params.data.comments[0].remarks : ""; 
        // console.log(params.data.comments);
        // alert("hiii");
    }  
  },
    { headerName:"JD Chat",field: "",sortable:true, filter:true,},
    { headerName:"Round",field: "",sortable:true, filter:true},
    { headerName:"Interviewer",field: "",sortable:true, filter:true},
    { headerName:"Interview Date",field: "",sortable:true, filter:true},
    { headerName:"details",field: "email",sortable:true, filter:true},
    { headerName:"Actions",autoHeight:true,
    cellStyle:{width:"auto"},
    cellRenderer:function(){
     const icons='<div class="box d-flex flex-row justify-content-center p-0"><button type="button" class="btn_style d-flex flex-row justify-content-center" ondblclick="getSelectedRowData()"><i class="fa fa-file p-0 m-auto icon" title="view"></i></button>'+
                  '<button type="button" class="btn_style d-flex flex-row justify-content-center"><i class="fa fa-clock m-auto icon" title="Schedule"></i></button>'+
                  '<button type="button" class="btn_style d-flex flex-row justify-content-center"><i class="fa fa-arrow-rotate-right m-auto icon" title="Reschedule"></i></button>'+
                  '<button type="button" class="btn_style d-flex flex-row justify-content-center"><i class="fa fa-box-archive m-auto icon" title="Archieve"></i></button>'+
                  '<button type="button" class="btn_style d-flex flex-row justify-content-center"><i class="fas fa-plus-square m-auto icon" title="Add comments"></i></button></div>';
                  return icons;
    
    }
  },
  ];

  function ragRenderer(params) {
    return '<span class="rag-element">' + params.data.location + '</span>';
  }

  var gridOptions = {
    columnDefs: columnDefs,
    // rowData: rowData,
    // headerHeight:"100px",
    rowSelection:"single",
    pagination:true,
    suppressColumnMoveAnimation:true,
    // floatingFilter:true,
    // filter: 'agNumberColumnFilter',
    // filter: 'agTextColumnFilter',
    cacheQuickFilter: true,
    paginationAutoPageSize:true,
    // headerHeight:"30",
    // pinned:right,
    
  }  
  
  function getSelectedRowData() {
    let selectedNodes = gridOptions.api.getSelectedNodes();
    let selectedData = selectedNodes.map(node => node.data);
    var row_data=(`${JSON.stringify(selectedData)}`);
    localStorage.setItem("row_data",row_data);
    // console.log(row_data);
    window.location.href="/HTML/viewPage.html";
    // return selectedData;
  }
  
  // document.querySelector('#getSelectedRowData').addEventListener('click', getSelectedRowData);

  function onFilterTextBoxChanged() {
        gridOptions.api.setQuickFilter(document.getElementById('search_input').value);
    }
  
  document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
  
    fetch('http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles')
      .then((response) =>response.json())
                    
      .then((data) =>{
        response1=data;
            gridOptions.api.setRowData(data);
            // console.log(data);
      });
      
      
  });
  
  // function view_page(){
  //   window.location.href="/HTML/viewPage.html";
  // }
  

  
