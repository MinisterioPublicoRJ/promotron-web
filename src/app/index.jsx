import React from 'react';

import './styles.css';

import Router from './router';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: undefined,
  //   };
  // }

  // componentDidMount() {
  //   this.login();
  // }
  //
  // async login() {
  //   let loginError = false;
  //   let user;
  //   try {
  //     const token = window.localStorage.getItem('access_token');
  //     await Api.login(token);
  //     user = getUser();
  //   } catch (e) {
  //     loginError = true;
  //   } finally {
  //     this.setState({ user, loginError });
  //   }
  // }

  // pageSelector() {
  //   const { user, loginError } = this.state;
  //   const { tipo_orgao, nome } = user;
  //   let page = <BlankPage />;
  //
  //   if (!loginError) {
  //     switch (tipo_orgao) {
  //       case 1:
  //         page = <Tutela userName={nome} user={user} />;
  //         break;
  //       case 2:
  //         page = <Pip userName={nome} user={user} />;
  //         break;
  //       default:
  //         // if we don't have a dashboard yet, just show blank screen
  //         break;
  //     }
  //   }
  //
  //   return page;
  // }

  render() {
    // const { user, loginError } = this.state;
    // const isLoading = !user && !loginError;
    //
    // if (isLoading) {
    //   return <Spinner size="large" />;
    // }

    // return (
    //   <HashRouter>
    //     <Switch>
    //       <Route exact path="/">
    //         {this.pageSelector()}
    //         {/* <Login exact path="/login" component={Login} /> */}
    //       </Route>
    //     </Switch>
    //   </HashRouter>
    // );
    //
    return <Router />;
  }
}

export default App;
