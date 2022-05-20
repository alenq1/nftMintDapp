
export const RoadMapContent = {
    title: "RoadMap",
    firstTitle: "Q1",
    firstDescription: "Description First",
    secondTitle: "Q2",
    secondDescription: "Description Second",
    thirdTitle: "Q3",
    thirdDescription: "Description Third",
    fourthTitle: "Q4",
    fourthDescription: "Description Fourth"
}



export const RoadMapContainer = {
    padding: 0,
    margin: "0px 0px 100px 0px" ,
    height: "100%",    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 

    '& h1':{
        margin: "100px 0px"
    }
}

export const StyledRoadMap = {
    padding: 0,
    height: "auto",    
    display: "flex",
    justifyContent: "space-between",
}



export const RoadMapLeft: any = {
    margin: "0px 60px",
    height: "auto",      
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center", 

    '& div':{
        padding: 5,
        width: "450px",
        height: "300px",
        border: "1px solid rgba(255, 255, 255, 0.21)",
        color: "white",
        background: "black"
    },
}

export const RoadMapLine = {
    width: 3,
    height: "100%",
    background: "black",
}

export const RoadMapRight: any = {
    margin: "0px 60px",
    height: "auto",    
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center", 

    '& div':{
        padding: 5,
        width: "450px",
        height: "300px",
        // border: "1px solid rgba(255, 255, 255, 0.21)",
        color: "white",
        background: "black"
    },
}

export const BlockSpace = {
    background: "transparent !important", 
    border: "none",
    height: "0px !important",
    marginBottom: "200px"
}

