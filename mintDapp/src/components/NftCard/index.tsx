import { Box} from '@mui/system';
import {StyledCard, nftInfo, cardButtons} from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '../Button'
import { v4 as uuidv4 } from "uuid";

const NftCard = (props: any) => {

  // console.log(props.data)
  // console.log(props.data ? true : false)
  
  if(props.data){
    const {date, description, edition, image, name, owner, indexToOpen, explorer} = props.data
    const {handleClickOpen, index, status, defaultView} = props
    // console.log(handleClickOpen)
    // console.log(index)
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
                <Box sx={nftInfo} key={uuidv4()}>
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
            window.open(explorer, '_blank', 'noopener,noreferrer')}}
            disabled={false}
            styled={''}
            />                    
          <Button text={"More Details"} action={() => handleClickOpen(indexToOpen)}
            disabled={false}
            styled={''}
          />            
        </CardActions>
      </Card>
    )    
  }

  else{
    <div>LOADING..NEW</div>
  }
}

export default NftCard