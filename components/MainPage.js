import React, {useState} from "react"
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer,
    List, ListItem, ListItemIcon, ListItemText,
    Card,
    CardContent,
    CardMedia

} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const ListFilter = ({filterTitle, setFilter,setDrawopen}) => {
    return (
        <List component="nav" aria-label="main mailbox folders">
            <Box onClick={() => {setFilter(filterTitle); setDrawopen(false)}}>
        <ListItem button>
          <ListItemIcon>
            <CheckBoxOutlineBlankIcon />
          </ListItemIcon>
          <ListItemText primary={filterTitle} />
        </ListItem>
        </Box>
      </List>
    )
}

const filters = [
    {name: "Order by Lowest"},
    {name: "Order by Costlier"},
    {name: "Redmi"},
    {name: "Apple"},
    {name: "Oneplus"},
    {name: "Samsung"},
]

const data = [
    {
        id: 1,
        name: "Redmi",
        brand: 'Redmi',
        price: 19000
    },
    {
        id: 2,
        name: "Redmi",
        brand: 'Redmi',
        price: 10000
    },
    {
        id: 3,
        name: "Redmi",
        brand: 'Redmi',
        price: 15000
    },

    {
        id: 4,
        name: "Redmi",
        brand: 'Redmi',
        price: 19000
    },
    {
        id: 5,
        name: "Iphone",
        brand: 'Apple',
        price: 17000
    },
    {
        id: 6,
        name: "Iphone",
        brand: 'Applevv',
        price: 50000
    },
    {
        id: 7,
        name: "Iphone",
        brand: 'Apple',
        price: 12000
    },
    {
        id: 8,
        name: "Iphone",
        brand: 'Apple',
        price: 11000
    },

    {
        id: 9,
        name: "Oneplus",
        brand: 'Oneplus',
        price: 19000
    },
    
    {
        id: 10,
        name: "Oneplus",
        brand: 'Oneplus',
        price: 19000
    },
    {
        id: 11,
        name: "Oneplus",
        brand: 'Oneplus',
        price: 19000
    },
    {
        id: 12,
        name: "Oneplus",
        brand: 'Oneplus',
        price: 19000
    },
    {
        id: 13,
        name: "Samsung",
        brand: 'Samsung',
        price: 19000
    },
    {
        id: 14,
        name: "Samsung",
        brand: 'Samsung',
        price: 19000
    },
    {
        id: 15,
        name: "Samsung",
        brand: 'Samsung',
        price: 19000
    },
    {
        id: 16,
        name: "Samsung",
        brand: 'Samsung',
        price: 19000
    },
]

const MainPage = () => {
    const [drawOpen, setDrawopen] = useState(false);
    const [filter, setFilter] = useState();
    const [displayItems, setDisplayItems] = useState([]);

    React.useEffect(() => {
        if(filter === 'Order by Lowest'){
            data.sort((a, b) => a.price - b.price)
            console.log(data)
            setDisplayItems(data)
        }else if(filter === 'Order by Costlier'){
            data.sort((a, b) => b.price - a.price)
            setDisplayItems(data)
            console.log(data)
        }else{
            const filtered = data.filter(item => item.brand === filter)
            setDisplayItems(filtered)
        }
    }, [filter])

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=> setDrawopen(!drawOpen)}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                    Ecommerce
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawOpen} onBackdropClick={() => setDrawopen(!drawOpen)} 
            >
                {filters.map(filtername => (
                    <ListFilter filterTitle={filtername.name} setFilter={setFilter} setDrawopen={setDrawopen}/>
                ))}
            </Drawer>

            <Box style={{marginTop: 100, marginLeft: 15, marginRight: 50}}>
                {displayItems && 
                    displayItems.map((items) => (
                        <Card key={items.id} style={{
                            display: "flex", 
                            flexDirection: "row", 
                            margin: 20, 
                            width: "100%", 
                            alignItems: "center", 
                            justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <CardContent style={{display: "flex", flexDirection: "column"}}>
                                <Typography component="h5" variant="h5">
                                    {items.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                ₹{items.price}
                                </Typography>
                                </CardContent>
                            </div>
                            <img
                                style={{width: 150}}
                                src="https://images.unsplash.com/photo-1604160687499-0547fda285f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Live from space album cover"
                            />
                        </Card>
                    ))
                }
            </Box>
           

        </Box>
    )
}

export default MainPage;