import React, { Component } from "react";

interface state {
	users: any[];
}

export default class App extends Component<{}, state> {
 state = {
		users: [],
	}

	deleteUser(id: number) {
		const { users } = this.state;
		const newUsers: any = [];
		users.forEach((user: any) => {
   if(user.id !== id){
    newUsers.push(user);
			}
		})
		this.setState({users: newUsers});
		console.log(newUsers);
	}

	componentDidMount(): void {
		const getUsers = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const users = await res.json();
			await this.setState({users});
		}
		getUsers();
	}

	render() {
		return (
			<div>
				<table className="table">
					<thead className="tHead">
						<tr>
						<th className="td">id</th>
						<th className="td">names</th>
						<th className="td">email</th>
						<th className="td">city</th>
						<th className="td">delete</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map((item: any, idx) => (
						<tr key={item.id}>
							<td scope="row">{idx}</td>
							<td scope="row">{item.name}</td>
							<td scope="row">{item.email}</td>
							<td scope="row">{item.address.city}</td>
							<td><button onClick={() => this.deleteUser(item.id)}>delete</button></td>
						</tr>
						))}
						{/* <tr>
							<td scope="row">hello</td>
							<td scope="row">name</td>
							<td scope="row">name</td>
						</tr>
						<tr>
							<td scope="row">hello</td>
							<td scope="row">name</td>
							<td scope="row">name</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		);
	}
}
