import { Route, Switch, RouteComponentProps } from 'react-router-dom'

import Logo from '../assets/logo.svg'
import { ContentHeader, Header, Content } from './styles'
import { Menu } from '../components/Menu'
import { RotasAtivas } from '../router/routes'
import IRota from '../interfaces/IRota'


export function Layout({...rest}) {

    const getRoutes = (routes: IRota[]) => {
        return routes.map((route, index) => (

            route.sub ? (
                route.sub.map((subRoute, key) => (
                    <Route
                        path={subRoute.layout + subRoute.path}
                        render={(props: RouteComponentProps<any>) => <subRoute.component {...props} />}
                        exact={subRoute.exact}
                        key={key}
                    />
                ))
            ) :
                <Route
                    path={route.layout + route.path}
                    render={(props: RouteComponentProps<any>) => <route.component {...props} />}
                    exact={route.exact}
                    key={index}
                />
        ));
    }


    return (
        <>
            <Header>
                <ContentHeader>
                    <img src={Logo} alt="kemp Finance" />
                    <Menu rotas={RotasAtivas} />
                </ContentHeader>
            </Header>
            <Content>
                <Switch>
                    {getRoutes(RotasAtivas)}
                </Switch>
            </Content>
        </>
    )
}