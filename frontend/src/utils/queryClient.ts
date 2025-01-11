import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
        mutations: {
            onError: (error) => {
                console.error("Global Mutation Error: ", error.message);
            },
        },
    },
});

export default queryClient;
