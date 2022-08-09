var url ="https://rickandmortyapi.com/api/character"
const selector = document.querySelector('.mainContainer_character')

const getData = async()=>{
    try {
        const data =  await fetch(url)
        const res = await data.json() 
       showmeData(res)
    } catch (error) {
        console.log(error)
    }
  

}
getData()

const showmeData=(data)=>{
    console.log(data)
let body = ``
data.results.map(item=>
    
      body+=`
     <img src =${item.image}>
     <h1>${item.name}</h1>
     <h3>${item.status}</h3>`
     
     
)
selector.innerHTML=body
}