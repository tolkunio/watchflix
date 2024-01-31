import {FC} from "react";
import {QueryClient,QueryClientProvider} from "react-query";

const MainProvider: FC = ({children}) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default MainProvider;
