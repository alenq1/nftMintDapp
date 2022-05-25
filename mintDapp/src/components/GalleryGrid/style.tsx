import { styled } from '@mui/system';


interface ViewType {
    defaultView: any
}


export const StyledGalleryGrid = {
    padding: 10,
    display: "grid",
    gridTemplateColumns: {
        lmobile: 'repeat(1, 1fr)',
        tablet: 'repeat(2, 1fr)',
        laptop: 'repeat(3, 1fr)'
    },
    gridTemplateRows: "auto",
    gridAutoFlow: "row",
    gap: 10


}

export const EmptyGallery = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px"
}




// export const CollectionView = styled("div",{
//     shouldForwardProp: (prop) => prop !== 'defaultView',
//     })<ViewType>
//     (({ theme, defaultView }) => ({                
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         "&:nth-Child(1)":{
//             fontSize: defaultView ? "1rem" : "2rem",
//             color: defaultView ? "red" : "green",
//         },
//         "&:nth-Child(2)":{
//             fontSize: defaultView ? "1rem" : "2rem",
//             color: defaultView ? "red" : "green",
            
//         },
// }));