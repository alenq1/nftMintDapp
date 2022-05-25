import { Box} from '@mui/system';
import {StyledCard, nftInfo, cardButtons} from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '../Button'

const NftCard = (props: any) => {

  // console.log(props.data , "QUES ES PRPOS  DATAA ahora si")
  console.log(props.data ? true : false , "PROOSP DFATA?????????")
  
  if(props.data){
    const {date, description, edition, image, name, owner, indexToOpen, explorer} = props.data
    const {handleClickOpen, index, status, defaultView} = props
    // console.log("HANDEL CLICK OPEN", handleClickOpen)
    console.log("ESTE ES EL VOY ABRIR", index)
    // const indexToOpen = defaultView ? index : edition

    const nftCardContent = [
      {        
        text: "Description:", 
        value:  description
      },
      {
        text: "Generated:", 
        value: new Date(date)?.toLocaleString()
      },
      {
        text: "Owner:", 
        value: `${owner?.substr(0, 6)}...${owner?.substr(-4)}`
      },
    ]

    return (
      <Card sx={StyledCard} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="256"
            width="256"
            image={image? image.replace('ipfs://', 'https://ipfs.io/ipfs/') : "none"}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>  
            {
              nftCardContent.map( (item: any)=>
                <Box sx={nftInfo}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{item.text}</strong> <span>{item.value}</span>
                  </Typography>  
              </Box>  
              )
            }                  
          </CardContent>
        </CardActionArea>          
        <CardActions sx={cardButtons}>
          <Button   text={"View on Explorer"} action={()=> {
            window.open(explorer, '_blank', 'noopener,noreferrer')
            }}/>                    
          <Button text={"More Details"} action={() => handleClickOpen(indexToOpen)}/>            
        </CardActions>
      </Card>
    )    
  }

  else{
    <div>LOADING..NEW</div>
  }
}

export default NftCard