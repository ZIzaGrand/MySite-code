import { createContext, useContext } from "react";
import { useIsMobile } from "../hooks/useIsMobile";


type AppContextType = {
	isMobile: boolean
}

const AppContext = createContext<AppContextType | null >(null);

export function AppProvider({children}: {children: React.ReactNode}) {
	const isMobile = useIsMobile();

	return (
		<AppContext.Provider value={{isMobile}}>
			{children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext должен использоваться внутри AppProvider");
	}

	return context;
}