import Layout from "./components/Layout/Layout"
import Routing from "./components/Layout/Routing"
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';


function App() {

  const {i18n} = useTranslation()
  let locale =  localStorage.getItem('locale')

  useEffect(() => {
    locale ? i18n.changeLanguage(locale) :  i18n.changeLanguage('en')
  },  [locale]);

  const helmetContext = {};

  return (
    <div className="App">
      <HelmetProvider  context={helmetContext}>
        <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
