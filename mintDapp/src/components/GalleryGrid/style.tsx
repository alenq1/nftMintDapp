import { styled } from '@mui/system';


interface ViewType {
    defaultView: any
}


export const StyledGalleryGrid = {
    padding: 10,
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: "auto",
    gap: 10


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