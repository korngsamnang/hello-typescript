import axios,{AxiosResponse} from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try{
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data)

    }catch (err:any){
        if(axios.isAxiosError(err)){
            console.log(err.message)
            if(err.response){
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }
        }
    }
}

fetchData()