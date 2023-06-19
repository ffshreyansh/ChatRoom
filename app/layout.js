// RootLayout.js

import Nav from "@/components/Nav";
import "@/styles/globals.css"
import Provider from "@components/Provider";

export const metadata = {
  title: 'ChatRoom | Messenger App',
  description: 'Chat with your friends..',
}

const RootLayout = ({ children }) => {

  return (
    <html lang='en'>
      <head>
        {/* Move the script tag outside of the component */}
        {/* Include it directly in the HTML file */}
        <script src="https://kit.fontawesome.com/f0e86dfbf8.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <Provider>
          <div className=''>
            <div className='' />
          </div>

          <main className=''>
             {/* <Nav/> */}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
