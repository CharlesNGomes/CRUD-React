import React, { Component } from 'react'
import Main from '../templates/Main'
import axios from 'axios'

const userProps = {
    icon: "users",
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir '
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '', tipo :'', fone:'' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ list: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updatedField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name" value={this.state.user.name}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"
                                name="email" value={this.state.user.email}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o Email..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>Tipo</label>
                            <input type="text" className="form-control"
                                name="tipo" value={this.state.user.tipo}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o tipo..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>fone</label>
                            <input type="text" className="form-control"
                                name="fone" value={this.state.user.fone}
                                onChange={e => this.updatedField(e)}
                                placeholder="xxxxx-xxxx" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button type="button" class="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>


            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Tipo</th>
                        <th>Fone</th>
                        <th>Acões</th>
                    </tr>
                </thead>
                <tbody>
                        {this.renderRow()}
                </tbody>

            </table>
        )
    }

    renderRow(){
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.tipo}</td>
                    <td>{user.fone}</td>
                    <td>
                        <button className="btn btn-warning" onClick={()=> this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={()=> this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...userProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}