import { Box} from '@mui/system';
import {StyledCard} from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const NftCard = (props: any) => {

  console.log(props.data ? true : false , "PROOSP DFATA?????????")
  
  if(props.data){
    const {date, description, edition, image, name, owner} = props.data
    const {handleClickOpen, index} = props
    console.log("HANDEL CLICK OPEN", handleClickOpen)

    return (
      <Card sx={StyledCard} onClick={() => handleClickOpen(index)}>
            <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={image? image.replace('ipfs://', 'https://ipfs.io/ipfs/') : "none"}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
             
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Description: {description}
                  </Typography>  
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Edition: {edition}
                  </Typography>  
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                  Date: {date}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                  Owner: {owner}
                  </Typography>
                </Box>
            </CardContent>
          </CardActionArea>          
        <CardActions>
          <Button size="small" color="primary">
            Vien on etherscan
          </Button>
        </CardActions>
      </Card>
    )    
  }

  else{
    <div>LOADING..NEW</div>
  }
  
  


  
}

export default NftCard