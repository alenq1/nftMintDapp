import {StyledGallery, StyledSkeleton, StyledTabs} from './style';
import Main from '../../layouts/Main'
import GalleryGrid from '../../components/GalleryGrid'
import NftDetail from '../../components/NftDetail';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import {useGalleryState} from './utils';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Gallery = () => {
  
  const { 
    loading, 
    gallery, 
    // chainId,
    // contractAddress,
    ownedNft, 
    defaultView, 
    // setDefaultView, 
    // showOnlyOwned,
    open,
    // setOpen,
    nftIndex,
    // setNftIndex,
    handleChange,
    handleClickOpen,
    handleClose
  
  } = useGalleryState()
  

// console.log(handleClickOpen)
// console.log(nftIndex)
// console.log(loading)
// console.log(gallery)
// console.log(ownedNft)

  return (
    <Main sx={StyledGallery}>
      <Box>
        <h1>Invaderz NFT Collection</h1>  
        <Box>
        <StyledTabs  value={defaultView ? 0 : 1} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Full Collection"/>
          <Tab label="My Collection"/>
        </StyledTabs>
        </Box>
      </Box>
      { 
        loading === 'loading' ?
        <Box sx={StyledSkeleton}>
          {/* <Skeleton variant="rectangular" width={310} height={318} />
          <Skeleton variant="rectangular" width={310} height={318} />
          <Skeleton variant="rectangular" width={310} height={318} /> */}
          <CircularProgress size={150} color={'success'}/>
        </Box>
        :
        loading === 'loaded' ?
        
        <GalleryGrid
          loading={loading}
          // contractAddress={contractAddress}
          // chainId={chainId}
          gallery={gallery}
          ownedNft={ownedNft}
          defaultView={defaultView}
          nftIndex={nftIndex}
          handleClickOpen={handleClickOpen}
        />
        :
        loading === 'failed' ?

        <Box>Error</Box>
        :
        <Box>Empty Gallery</Box>
      }
      
      { 
        nftIndex > -1 &&
        <NftDetail 
          open={open}
          handleClose={handleClose}
          gallery={gallery}
          nftIndex={nftIndex}
          />
      }
    </Main>
  );
}

export default Gallery

