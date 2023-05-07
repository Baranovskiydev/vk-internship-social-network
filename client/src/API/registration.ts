import axios from "axios"


export const registration = async (email: string,password: string) => {
    try {
        const response = await axios.post("http://localhost:7777/api/auth/reg",{
            email,
            password
        })

        alert(response.data.message)
    } catch (error) {
        alert(error)
    }

}