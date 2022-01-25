import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import {EditarCentroCusto} from '../pages/CentroCusto/Editar'

import { Layout } from '../layout'

export function Routes() {
    return (
        <Switch>
            <Route path="/pages" render={(props: RouteComponentProps<any>) => <Layout {...props} />} />
            <Route path="/pages/centroCusto/:id" exact={true} component={EditarCentroCusto}/>
            <Redirect from="/" to="/pages/movimentacoes" />
        </Switch>
    )
}