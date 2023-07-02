import dispatcher from "../appDispatcher"
import actionTypes from "./actionTypes"

const [records,setRecords]=useState([])
    const url='https://pokeapi.co/api/v2/pokemon'

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setRecords(data.results))
        .catch(err=>console.log(err))

    },[])

export function getData(){
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POKE,
        data: records
    });
}