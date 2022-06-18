import axios from 'axios'
import React,{useState} from 'react'

const NewForm = () => {
   const [state, setstate] = useState()


    const changeHandler = (e) =>{
        // console.log(e.target.value)
        setstate(e.target.files[0])
    }

    // const configAxios = {
    //     headers: {
    //         'content-type': 'multipart/form-data',
    //     }
    // }

    const data = new FormData() 
    
    console.log(data)

    const clickHandler =async (e) =>{
        // await http://localhost:5000/upload/fileUpload
        e.preventDefault()
        data.append("file",state)

        await axios.post('http://localhost:5000/upload/fileUpload',data).then(res=>{
            console.log("data posted",res)
        }).catch(err=>{
            console.log('data not ',err)
        })
        
        console.log(state)
    }
  return (
    <div>
        <form action="">
            <input type="file" name="image" id="" onChange={changeHandler}/>
            <button className='btn btn-primary' onClick={clickHandler}>submit</button>
        </form>
    </div>
  )
}

export default NewForm