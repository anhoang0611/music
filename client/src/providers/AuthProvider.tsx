import { useAuth } from "@clerk/clerk-react"
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { Loader } from "lucide-react";

const updateApiToken = (token: string | null) => { 
    if(token){
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }else{
        delete axiosInstance.defaults.headers.common["Authorization"]
    }
}
const AuthProvider = ({children}:{children: React.ReactNode}) => { 
    const { getToken } = useAuth()
    
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const initAuth = async () => { 
            try {
                const token = await getToken()
                updateApiToken(token)
            }
            catch (error: any) {
                console.error("Error initializing auth:")
            }
            finally {
                setLoading(false)
            }
        }

        initAuth();
    }, [getToken])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader className="size-8 text-emerald-500 animate-spin" />
            </div>
        )
    }

    return (
        <div>{ children}</div>
    )
}



//   const getSomeData = async () => {
//     const res = await axiosInstance.get("/users", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(res);
//   };

export default AuthProvider;
