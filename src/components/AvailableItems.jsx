import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardActions} from 'material-ui/Card';


import CardItem from '../components/CardItem.jsx';

class AvailableItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : require('../data/sample.json'),
      sortBy: null,filterBy:null,expanded:false,
      filteredList:require('../data/sample.json')
    };
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  handleSort = (event, index, sortBy) =>{
    let data = this.state.data;
    if(sortBy === 1)
    {
      data.sort((a,b) => {
        return a.price > b.price ? 1 : -1;
      }
      )
    }
    else if(sortBy===2)
    {
      data.sort((a,b) => {
        return a.price > b.price ? -1 : 1;
      }
      )
    }
    this.setState({ sortBy, filteredList: data,filterBy:null });
  }
  handleFilter = (event, index, filterBy) =>{
    let data = this.state.data;
    switch(filterBy)
    {
      case 1:
      {
        data = data.filter((a) => {
          return a.isSale;
        }
        )
        break;
      }
      case 2:
      {
        data = data.filter((a) => {
          return a.isExclusive;
        }
        )
        break;        
      }
      case 3:
      {
        data = data.filter((a)=>
        {
          return a.size.includes('XS');
        }
        )
        break;
      }
      case 4:
      {
        data = data.filter((a)=>
        {
          return a.size.includes('S');
        }
        )
        break;
      }
      case 5:
      {
        data = data.filter((a)=>
        {
          return a.size.includes('M');
        }
        )
        break;
      }
      case 6:
      {
        data = data.filter((a)=>
        {
          return a.size.includes('L');
        }
        )
        break;
      }
      case 7:
      {
        data = data.filter((a)=>
        {
          return a.size.includes('XL');
        }
        )
        break;
      }
      default: {
        data = this.state.data;
      }
    }
    this.setState({ filterBy, filteredList: data });
  }
  
  render() {
    const filteredList = this.state.filteredList;
    return (
      <div>
      <Card
        expanded={this.state.expanded} 
        onExpandChange={this.handleExpandChange}
        style={{width:'100%'}}
      >
        <CardHeader
          title = "Customize view"
          actAsExpander={true}
          titleColor='#1B5E20'
          titleStyle={{fontSize:'18px'}}
          showExpandableButton={true}
        />
        <CardActions
        style={{padding:'0px'}}
        expandable={true}
        >
          <Divider/>
          <SelectField
            floatingLabelText="Sort By"
            value={this.state.sortBy}
            onChange={this.handleSort}
            style={{margin:'0px 80px',padding:'0px'}}
          >
            <MenuItem value={1} primaryText="Price Low to High" />
            <MenuItem value={2} primaryText="Price High to Low" />
          </SelectField>
          <SelectField
              floatingLabelText="Course"
              value={this.state.filterBy}
              onChange={this.handleFilter}
              style={{margin:'5px 80px',padding:'0px'}}
              >
              <MenuItem value={null} primaryText="" />
          </SelectField>
        </CardActions>
      </Card>
      <Paper
        style={{
        height:'100%',minHeight:'720px' ,display:'flex',flexWrap:'wrap',
        backgroundColor:'#f7f7f7',
        position:'flex-start',
        justifyContent:'center'
      }}
      >
      {
        filteredList.map((item,i) =>(
        <div
          style = {{padding:'10px 10px'}}
          key={i}
          >
            <CardItem product={item}/>
        </div>
        ))
      }
      </Paper>
    </div>
    );
  }
}

export default AvailableItems;
