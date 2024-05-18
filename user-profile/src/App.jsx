import { useState,useEffect,useRef } from 'react'
import axios, { AxiosError } from 'axios'
import {Grid,Image,Flex,Input, filter} from '@chakra-ui/react'
import './App.css'

function App() {
  const[maindataHolderOfUserProfile,setMainDataHolderOfUserProfile]=useState([])
  const [userProfile, setUserProfile] = useState([])
  const timeoutId=useRef()

const fetchData= async ()=>{
 axios({
  method:'get',
  url:'https://fakestoreapi.com/users'
 }).then(({data})=>{
    console.log(data);
    setMainDataHolderOfUserProfile(data)
    setUserProfile(data)
 }).catch((error)=>{
  console.log(error);
 })
}

useEffect(()=>{
 fetchData()
},[])

  return (
    <>
      <Flex justify='center'>
      <Input placeholder='Search user by Name' w='30%' h='6vh' onChange={(event)=>{
           if(timeoutId.current!==null||timeoutId.current!==undefined){
            clearTimeout(timeoutId.current)
          }
         timeoutId.current=setTimeout(()=>{
            let usersExistingArray=[...maindataHolderOfUserProfile];
            let selected_user=usersExistingArray.filter(function(i){
              if(`${i.name.firstname} ${i.name.lastname}`==event.target.value){
                return i;
              }
            })
            setUserProfile(selected_user)
         },1500)
      }}/>
      </Flex>
  
  <Grid templateColumns='repeat(3,30%)' justifyContent='center' columnGap={20} rowGap={20} mt={20}>
    {
      userProfile.map((item,index)=>(
        <Users key={index} user={item}/>
      ))
    }
  </Grid>

    </>
  )
}

const Users=({user})=>{

  return(
    <>
    <Grid bg='#EEF7FF' p={20} h='auto' borderRadius={10} fontSize={16}>
      <p>Name :{user.name.firstname} {user.name.lastname}</p>
      <p>Email :{user.email}</p>
      <p>Phone Number :{user.phone}</p>
    </Grid>
    </>
  )
}
export default App
