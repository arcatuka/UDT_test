//input place
const neededContainer = 10;
const listings = [
{
name: "Container renter A",
container: 5,
totalCost: 5,
},
{
name: "Container renter B",
container: 2,
totalCost: 10,
},
{
name: "Container renter C",
container: 10,
totalCost: 3,
},
];



    

/////////////////////////////////////////
let newlistings=[]
let containerCost =0
let countCost=0
function FindContainer()
{
    let compareValue = Math.max(...listings.map(o=> o.totalCost))
    for(let i =0; i <listings.length; i++)
    {
        if(listings[i].container === neededContainer)
        {
            if(listings[i].totalCost < compareValue)
            {
                containerCost= listings[i].totalCost 
                compareValue=containerCost
            }
        }
    }
}
listings.filter(FindContainer)

function move(array, from, to) {
    if( to === from ) return array;
    var target = array[from];                         
    var increment = to < from ? -1 : 1;
    for(var k = from; k != to; k += increment){
      array[k] = array[k + increment];
    }
    array[to] = target;
    return array;
}
listings.sort((a,b) =>  b.container - a.container)

for(let i =0; i <listings.length; i++)
{
    for(let j =0; j <listings.length; j++)
    {
        if(listings[i].container === listings[j].container && listings[i].name != listings[j].name)
        {
            if(listings[i].totalCost < listings[j].totalCost)
            {
                move(listings,i,j)
            }
        }
    }
}

let countContainer=0;
if(containerCost>0)
{
    for(let i =0; i < listings.length; i++)
    {
        let newList = []
        let newCostCount=listings[i].totalCost
        let containerValue=listings[i].container
        newList.push(listings[i])
        for(let j =0; j < listings.length;j++)
        {
            if(listings[i].name !== listings[j].name)
            if(containerValue+listings[j].container <= neededContainer)
            {
                newCostCount+=listings[j].totalCost
                containerValue+=listings[j].container
                newList.push(listings[j])
            }
        }
        if(containerCost > newCostCount && containerValue <= neededContainer)
        {
            countContainer=containerValue
            countCost=newCostCount
            newlistings=newList
        }
    }
    if(newlistings===[] || newlistings===null|| newlistings.length===0)
    {
        countCost=containerCost
        countContainer=neededContainer
        newlistings=listings.filter((container)=>{ return container.totalCost === containerCost &&container.container===neededContainer })
    }
}
else{
    countCost=10000
    for(let i =0; i < listings.length;i++)
    {
        let newList = []
        let newCostCount=listings[i].totalCost
        let containerValue=listings[i].container
        newList.push(listings[i])
        for(let j =0; j < listings.length;j++)
        {
            if(listings[i].name !== listings[j].name)
            if(containerValue+listings[j].container <= neededContainer)
            {
                newCostCount+=listings[j].totalCost
                containerValue+=listings[j].container
                newList.push(listings[j])
            }
        }
        if(countCost > newCostCount && containerValue <= neededContainer)
        {
            countContainer=containerValue
            countCost=newCostCount
            newlistings=newList
        }
    }
}
for(let i =0; i < newlistings.length; i++)
{
    console.log("[Contract with] "+newlistings[i].name+" "+ newlistings[i].container+ " container," + " price:"+newlistings[i].totalCost)
}
if(countContainer < neededContainer)
{
    console.log("Not enough containers")
}
console.log("[Summary] total cost "+ countCost)