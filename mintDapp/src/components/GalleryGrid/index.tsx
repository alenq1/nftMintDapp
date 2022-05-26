import {StyledGalleryGrid, EmptyGallery } from './style';
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

    const { 
      loading, 
      contractAddress,
      chainId,
      gallery, 
      ownedNft, 
      defaultView, 
      handleClickOpen, 
      open, 
      nftIndex, 
      setNftIndex, 
      handleClose
    } = props

    // console.log(handleClickOpen)
    // console.log(loading,)

    let showNfts = defaultView ? gallery : ownedNft
    // console.log("gallery", gallery, "owned_NFT", ownedNft)
    // console.log(, defaultView, showNfts)  

    return (
    
      <Box sx={showNfts.length > 0 ? StyledGalleryGrid : EmptyGallery}>
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
            <div>loading</div>
        }          
      </Box>
    );
  }

export default GalleryGrid