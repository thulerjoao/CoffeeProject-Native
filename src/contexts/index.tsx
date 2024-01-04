import { ReactNode } from "react";
import { AuthProvider } from "./auth";

interface ProvidersProps{
    children: ReactNode
}

const Providers = ({children}: ProvidersProps) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default Providers;
