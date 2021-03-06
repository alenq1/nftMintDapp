
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
    padding: "0px 50px",
    margin: "0px 0px 100px 0px" ,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
    overflow: "hidden",
    maxWidth: {
        // lmobile: 200,
        // tablet: 450,
        laptop: 1000,

    },
    '& h1':{
        margin: "100px 0px 0px 0px"
    }
}

export const StyledRoadMap = {
    // background: 'white',
    width: "100%",
    padding: 0,
    height: "auto",
    display:{
        tablet:"inherit",
        laptop:"flex",
    },
    justifyContent: "center",
    flexWrap: {
        tablet:"wrap",
        laptop:"inherit",
    },

}



export const RoadMapLeft: any = {
    margin: "0px 60px",
    height: "auto",      
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 

    '& div':{
        padding: 5,
        minwidth: "250px",
        minHeight: "250px",
        width: {
            lmobile: 300,
            tablet: 300,
            laptop: 450
        },
        height: "300px",
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
        width: {
            lmobile: 300,
            tablet: 300,
            laptop: 450
        },
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

