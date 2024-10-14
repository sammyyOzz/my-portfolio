import { extendTheme } from "@chakra-ui/react"
// import { cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";

// const config: ThemeConfig = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

export const theme = extendTheme({
  // config,

  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    "primary-dark": "#080346",
  },
})


// Server-side cookie storage manager
// export const getServerSideProps = (context: any) => {
//   return {
//     props: {
//       cookies: context.req.headers.cookie ?? "", // Pass cookies to the component
//     },
//   };
// };