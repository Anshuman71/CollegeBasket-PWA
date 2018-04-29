import React from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';  
import Divider from 'material-ui/Divider';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  
  render() {
    const product = this.props.product;
    let path  = require("../images/"+product.image);
    let subtitle = '';
    if(product.isExclusive)
    {
      subtitle = "Exclusive";
    }
    if(product.isSale)
    {
      subtitle += " Sale";
    }
    return (
      <Card
      expanded={this.state.expanded} 
      onExpandChange={this.handleExpandChange}
      style={{width:'385px'}}
      >
      <CardHeader
          title = {product.name}
          subtitle = 'I love it'
          actAsExpander={true}
          showExpandableButton={true}
          style={{minHeight:'70px'}}
          titleColor="#388E3C"
          titleStyle={{fontSize:'18px'}}
          subtitleColor="#FF7043"
        />
      <Divider/>
      <CardMedia
      style={{padding:'15px'}}
      >
      <img src={path} alt="Cloth" style={{padding:'auto',maxHeight:'400px',maxWidth:'340px',margin:'auto'}}/> 
      </CardMedia>
      <Divider/>
      <CardText
      expandable={true}
      style={{display:'flex',flexWrap:'wrap',
      justifyContent:'flex-start'}}
      >
        <Paper
        zDepth={2}
        style={{height:'35px',backgroundColor:'#388E3C',
        color:"#fff",
        padding:'10px',margin:'5px 10px'}}
        >
        Price : {product.price}   
        </Paper> 

        <Paper
        zDepth={2}
        style={{height:'35px',backgroundColor:'#388E3C',
        color:"#fff",padding:'10px',margin:'5px 10px'}}
        >
        By : {product.seller}   
        </Paper>

        <Paper
        zDepth={2}
        style={{height:'35px',backgroundColor:'#388E3C',
        color:"#fff",padding:'10px',margin:'5px 10px'}}
        >
        Useful For : {product.usefulFor.join(' , ')}   
        </Paper>

      </CardText>  

      </Card>
    );
  }
}
