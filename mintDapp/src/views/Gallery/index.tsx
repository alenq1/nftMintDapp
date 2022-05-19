import {StyledGallery, StyledSkeleton} from './style';
import GalleryGrid from '../../components/GalleryGrid'
import NftDetail from '../../components/NftDetail';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import {useGalleryState} from './utils';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Gallery = () => {
  
  const { 
    loading, 
    gallery, 
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
  



// console.log("handleCLICK OPEN EN INDEXXXXXXXXXXXXXXXXXXXXXXXXXx", handleClickOpen)
// console.log("handleCLICK OPEN EN INDEXXXXXXXXXXXXXXXXXXXXXXXXXx", handleClickOpen)
// console.log("NFT INDEXX", nftIndex)
console.log("LOADING", loading)
console.log("GALLLERY EN INDEX", gallery)



  return (
    <Box sx={StyledGallery}>
      <Box>
        <h1>title</h1>  
        <Box>
        <Tabs value={defaultView ? 0 : 1} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Full Collection"/>
          <Tab label="My Collection"/>
        </Tabs>
        </Box>
      </Box>
      { 
        loading === 'loading' ?
        <Box sx={StyledSkeleton}>
        <Skeleton variant="rectangular" width={310} height={418} />
        <Skeleton variant="rectangular" width={310} height={418} />
        <Skeleton variant="rectangular" width={310} height={418} />
        </Box>
        :
        loading === 'loaded' ?
        
        <GalleryGrid
          loading={loading}
          gallery={gallery}
          ownedNft={ownedNft}
          defaultView={defaultView}
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
    </Box>
  );
}

export default Gallery

