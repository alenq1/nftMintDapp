import {StyledGalleryGrid } from './style';
import { useEffect, useCallback, useState } from "react";
import NftCard from '../../components/NftCard';
import NftDetail from '../../components/NftDetail';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';



// interface MediaProps {
//     loading?: string;
//     gallery: any[],
//     ownedNft: any[],
//     defaultView: any,
//     handleClickOpen: any,
    
//   }


const GalleryGrid = (props: any) => {

    const { loading, gallery, ownedNft, defaultView, handleClickOpen, open, nftIndex, setNftIndex, handleClose} = props

    // console.log("GLLLAERT GRIDDDDDDDDDDD HANDLE CLICKKKKKKKKKKKKK", handleClickOpen)
    console.log(loading,"LOADINGGGGGGGGG")
     // console.log("gallery", gallery, "owned_NFT", ownedNft)
     let showNfts = defaultView ? gallery : ownedNft
  
    //  console.log("x2222222 COMO= COÑO ME ESTA LELGAN DO GALLERY AQUIIII", gallery)
    // console.log("TIPO DE VISTA", defaultView, showNfts)

    // useEffect(() => {
    //     console.log("Q MALDITRA MIERDA ERES GALLERY", gallery)
    //     console.log("Q MALDITRA MIERDA ERES SHOWNFT", ownedNft)
    //     console.log("Q MALDITRA MIERDA ERES SHOWNFT", showNfts[0].data.name)
    // }, [gallery, ownedNft, showNfts])
  
    console.log("QIUEN ES SHOW NFTS",  showNfts)

    return (
    <>
      <Box sx={StyledGalleryGrid}>
      {/* <Box sx={{display: "flex", flexDirection: "column", background: "whitesmoke"}}>
          <div>loading {loading}</div>
          <div>len gallery {gallery.length}        </div>
          <div>len ownednft{ownedNft.length}</div>
          <div>showNfts{showNfts.length > 0? showNfts[0].data.name : "nada"}</div>
          <div>default view{defaultView ? "true": "false"}</div>
        </Box> */}
        {
            loading === 'loaded' ?
              showNfts.length > 0 ?
                showNfts.map((item: any, index: any)=>         
          
                <NftCard 
                  status={item.status}
                  data={item.value.data} 
                  index={index}
                  key={index*5}
                  handleClickOpen={handleClickOpen}
                  defaultView={defaultView}
                />
          
              )
              :
              <div>Collection is empty</div>
            :
            <div>cargando</div>
        }          
      </Box>
    </>

    );
  }

export default GalleryGrid